import { getBox } from "css-box-model";
import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useAppStore, useAppStoreApi } from "@/store";
import styles from "./styles.module.css";
import { getClassNameFactory, useResetAutoZoom } from "@/lib";
import { Preview } from "@/components/CredBuild/components/Preview";
import { UiState } from "@/types";
import { Loader } from "@/components/Loader";
import { useShallow } from "zustand/react/shallow";
import { useCanvasFrame } from "@/lib/frame-context";
import { usePropsContext } from "@/components/CredBuild/context";
import { defaultViewports } from "@/components/ViewportControls/default-viewports";

const getClassName = getClassNameFactory("CredBuildCanvas", styles);

const ZOOM_ON_CHANGE = true;
const TRANSITION_DURATION = 150;

export const Canvas = () => {
  const { frameRef } = useCanvasFrame();
  const resetAutoZoom = useResetAutoZoom(frameRef);

  const { viewports: viewportOptions = defaultViewports, ui: uiProp } =
    usePropsContext();

  const {
    dispatch,
    overrides,
    setUi,
    zoomConfig,
    setZoomConfig,
    status,
    iframe,
    _experimentalFullScreenCanvas,
  } = useAppStore(
    useShallow((s) => ({
      dispatch: s.dispatch,
      overrides: s.overrides,
      setUi: s.setUi,
      zoomConfig: s.zoomConfig,
      setZoomConfig: s.setZoomConfig,
      status: s.status,
      iframe: s.iframe,
      _experimentalFullScreenCanvas: s._experimentalFullScreenCanvas,
    }))
  );
  const {
    leftSideBarVisible,
    rightSideBarVisible,
    leftSideBarWidth,
    rightSideBarWidth,
    viewports,
    root,
  } = useAppStore(
    useShallow((s) => ({
      leftSideBarVisible: s.state.ui.leftSideBarVisible,
      rightSideBarVisible: s.state.ui.rightSideBarVisible,
      leftSideBarWidth: s.state.ui.leftSideBarWidth,
      rightSideBarWidth: s.state.ui.rightSideBarWidth,
      viewports: s.state.ui.viewports,
      root: s.state.data.root,
    }))
  );

  // Viewport controls should always work, regardless of iframe.enabled
  const isNonFullWidth = viewports.current.width !== "100%";
  const shouldApplyViewport = true;

  const [showTransition, setShowTransition] = useState(false);
  const isResizingRef = useRef(false);

  const defaultRender = useMemo<
    React.FunctionComponent<{ children?: ReactNode }>
  >(() => {
    const CredBuildDefault = ({ children }: { children?: ReactNode }) => (
      <>{children}</>
    );

    return CredBuildDefault;
  }, []);

  const CustomPreview = useMemo(
    () => overrides.preview || defaultRender,
    [overrides, defaultRender]
  );

  const getFrameDimensions = useCallback(() => {
    if (frameRef.current) {
      const frame = frameRef.current;

      const box = getBox(frame);

      return { width: box.contentBox.width, height: box.contentBox.height };
    }

    return { width: 0, height: 0 };
  }, [frameRef]);

  // Auto zoom
  useEffect(() => {
    resetAutoZoom();
  }, [
    frameRef,
    leftSideBarVisible,
    rightSideBarVisible,
    rightSideBarWidth,
    viewports,
    resetAutoZoom,
  ]);

  // Constrain height
  useEffect(() => {
    const updateRootHeight = () => {
      const iframeEl = frameRef.current?.querySelector("iframe");
      if (iframeEl) {
        try {
          const doc = iframeEl.contentDocument;
          if (doc && doc.body) {
            const contentHeight = doc.body.scrollHeight || doc.documentElement.scrollHeight;
            if (contentHeight > 0) {
              const newRootHeight = contentHeight;
              if (zoomConfig.rootHeight !== newRootHeight) {
                setZoomConfig({
                  ...zoomConfig,
                  rootHeight: newRootHeight,
                });
              }
              return;
            }
          }
        } catch (e) {
          // Ignore cross-origin warnings
        }
      }

      const { height: frameHeight } = getFrameDimensions();
      const newRootHeight = frameHeight / zoomConfig.zoom;

      if (zoomConfig.rootHeight !== newRootHeight) {
        setZoomConfig({
          ...zoomConfig,
          rootHeight: newRootHeight,
        });
      }
    };

    if (viewports.current.height === "auto") {
      updateRootHeight();

      const iframeEl = frameRef.current?.querySelector("iframe");
      if (iframeEl) {
        try {
          const doc = iframeEl.contentDocument;
          if (doc && doc.body) {
            const observer = new ResizeObserver(updateRootHeight);
            observer.observe(doc.body);
            return () => observer.disconnect();
          }
        } catch (e) {
          // Ignore
        }
      }
    }
  }, [
    zoomConfig.zoom,
    getFrameDimensions,
    setZoomConfig,
    viewports,
    zoomConfig.rootHeight,
    frameRef,
  ]);

  // Zoom whenever state changes, even if external driver
  useEffect(() => {
    if (ZOOM_ON_CHANGE) {
      resetAutoZoom();
    }
  }, [viewports.current.width, viewports, resetAutoZoom]);

  // Resize based on frame size
  useEffect(() => {
    if (!frameRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (!isResizingRef.current) {
        resetAutoZoom();
      }
    });

    resizeObserver.observe(frameRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [frameRef, resetAutoZoom]);

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(true);
    }, 500);
  }, []);

  const appStoreApi = useAppStoreApi();

  // Select closest viewport on load
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Don't override if user has set a viewport
    if (uiProp?.viewports?.current) return;

    const viewportWidth = window.innerWidth;
    const frameWidth = frameRef.current?.getBoundingClientRect().width;

    if (!viewportWidth) return;
    if (!frameWidth) return;
    if (viewportOptions.length === 0) return;

    const fullWidthViewport = Object.values(viewportOptions).find(
      (v) => v.width === "100%"
    );

    const containsFullWidthViewport = !!fullWidthViewport;

    const viewportDifferences = Object.entries(viewportOptions)
      .filter(([_, value]) => value.width !== "100%")
      .map(([key, value]) => ({
        key,
        diff: Math.abs(
          viewportWidth -
            (typeof value.width === "string" ? viewportWidth : value.width)
        ),
        value,
      }))
      .sort((a, b) => (a.diff > b.diff ? 1 : -1));

    let closestViewport = viewportDifferences[0].value;

    // Select full width viewport if it exists, and the closest viewport is smaller than the window
    if (
      (closestViewport.width as number) < frameWidth &&
      containsFullWidthViewport
    ) {
      closestViewport = fullWidthViewport;
    }

    {
      const s = appStoreApi.getState();

      const appState = {
        state: {
          ...s.state,
          ui: {
            ...s.state.ui,
            viewports: {
              ...s.state.ui.viewports,

              current: {
                ...s.state.ui.viewports.current,
                height: closestViewport?.height || "auto",
                width: closestViewport?.width,
              },
            },
          },
        },
      };

      let history = s.history;

      if (s.history.histories.length === 1) {
        history = { ...history, histories: [appState] };
      }

      appStoreApi.setState({ ...appState, history });
    }
  }, [
    viewportOptions,
    iframe,
    appStoreApi,
    uiProp?.viewports,
    frameRef,
  ]);

  return (
    <div
      className={getClassName({
        ready: status === "READY" || !iframe.enabled || !iframe.waitForStyles,
        showLoader,
        fullScreen: _experimentalFullScreenCanvas,
      })}
      onClick={(e) => {
        const el = e.target as Element;

        if (
          !el.hasAttribute("data-credbuild-component") &&
          !el.hasAttribute("data-credbuild-dropzone")
        ) {
          dispatch({
            type: "setUi",
            ui: { itemSelector: null },
            recordHistory: false,
          });
        }
      }}
    >
      <div className={getClassName("inner")} ref={frameRef}>
        <div
          className={getClassName("root")}
          style={{
            width: viewports.current.width || "100%",
            height: (!zoomConfig.rootHeight || isNaN(zoomConfig.rootHeight)) ? '100%' : zoomConfig.rootHeight,
            minHeight: "100%",
            transform: `scale(${zoomConfig.zoom})`,
            transition: showTransition
              ? `width ${TRANSITION_DURATION}ms ease-out, height ${TRANSITION_DURATION}ms ease-out, transform ${TRANSITION_DURATION}ms ease-out`
              : "",
            overflow: isNonFullWidth ? undefined : "auto",
          }}
          suppressHydrationWarning // Suppress hydration warning as frame is not visible until after load
          id="credbuild-canvas-root"
          onTransitionEnd={() => {
            setShowTransition(false);
            isResizingRef.current = false;
          }}
        >
          <CustomPreview>
            <Preview />
          </CustomPreview>
        </div>
        <div className={getClassName("loader")}>
          <Loader size={24} />
        </div>
      </div>
    </div>
  );
};
