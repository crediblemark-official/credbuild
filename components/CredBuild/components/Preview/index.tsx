import { DropZoneEditPure, DropZonePure } from "@/components/DropZone";
import { rootDroppableId } from "@/lib/root-droppable-id";
import { RefObject, useCallback, useEffect, useRef, useMemo, useState } from "react";
import { useAppStore } from "@/store";
import AutoFrame, { autoFrameContext } from "@/components/AutoFrame";
import styles from "./styles.module.css";
import { getClassNameFactory } from "@/lib";
import { HtmlModeRender } from "@/components/HtmlModeRender";
import { Code, Eye, LayoutGrid } from "lucide-react";
import { DefaultRootRenderProps } from "@/types";
import { Render } from "@/components/Render";
import { BubbledPointerEvent } from "@/lib/bubble-pointer-event";
import { useSlots } from "@/lib/use-slots";
import { useRichtextProps } from "@/components/RichTextEditor/lib/use-richtext-props";

const getClassName = getClassNameFactory("CredBuildPreview", styles);

type PageProps = DefaultRootRenderProps;

const useBubbleIframeEvents = (ref: RefObject<HTMLIFrameElement | null>) => {
  const status = useAppStore((s) => s.status);

  useEffect(() => {
    if (ref.current && status === "READY") {
      const iframe = ref.current;

      const handlePointerMove = (event: PointerEvent) => {
        const evt = new BubbledPointerEvent("pointermove", {
          ...event,
          bubbles: true,
          cancelable: false,
          clientX: event.clientX,
          clientY: event.clientY,
          originalTarget: event.target,
        });

        iframe.dispatchEvent(evt as any);
      };

      const register = () => {
        unregister();

        // Add event listeners
        iframe.contentDocument?.addEventListener(
          "pointermove",
          handlePointerMove,
          {
            capture: true,
          }
        );
      };

      const unregister = () => {
        // Clean up event listeners
        iframe.contentDocument?.removeEventListener(
          "pointermove",
          handlePointerMove
        );
      };

      register();

      return () => {
        unregister();
      };
    }
  }, [status, ref]);
};

export const Preview = ({ id = "credbuild-preview" }: { id?: string }) => {
  const dispatch = useAppStore((s) => s.dispatch);
  const root = useAppStore((s) => s.state.data.root);
  const config = useAppStore((s) => s.config);
  const setStatus = useAppStore((s) => s.setStatus);
  const iframe = useAppStore((s) => s.iframe);
  const overrides = useAppStore((s) => s.overrides);
  const metadata = useAppStore((s) => s.metadata);
  const renderData = useAppStore((s) =>
    s.state.ui.previewMode === "edit" ? null : s.state.data
  );

  const Page = useCallback<React.FC<PageProps>>(
    (pageProps) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const propsWithSlots = useSlots(
        config,
        { type: "root", props: pageProps },
        DropZoneEditPure
      );

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const richtextProps = useRichtextProps(
        config.root?.fields ?? {},
        pageProps
      );

      return config.root?.render ? (
        config.root?.render({
          id: "credbuild-root",
          ...propsWithSlots,
          ...richtextProps,
        })
      ) : (
        <>{propsWithSlots.children}</>
      );
    },
    [config]
  );

  const Frame = useMemo(() => overrides.iframe, [overrides]);

  // DEPRECATED
  const rootProps = root.props || root;
  const isHtmlMode = rootProps?.mode === "html";
  const htmlViewMode = rootProps?.htmlViewMode || (rootProps?.htmlCode ? "preview" : "code");
  const htmlCode = rootProps?.htmlCode || "";

  const ref = useRef<HTMLIFrameElement>(null);

  useBubbleIframeEvents(ref);

  const [localCode, setLocalCode] = useState(htmlCode);

  // Sync localCode with htmlCode
  useEffect(() => {
    setLocalCode(htmlCode);
  }, [htmlCode]);

  // Debounce saving localCode to the store
  useEffect(() => {
    if (localCode === htmlCode) return;

    const timer = setTimeout(() => {
      dispatch({
        type: "setData",
        data: (currentData: any) => {
          if (currentData.root?.props?.htmlCode === localCode) {
            return currentData;
          }
          return {
            ...currentData,
            root: {
              ...currentData.root,
              props: {
                ...currentData.root?.props,
                htmlCode: localCode,
              }
            }
          };
        }
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [localCode, htmlCode, dispatch]);

  const handleSaveOnBlur = () => {
    dispatch({
      type: "setData",
      data: (currentData: any) => {
        if (currentData.root?.props?.htmlCode === localCode) {
          return currentData;
        }
        return {
          ...currentData,
          root: {
            ...currentData.root,
            props: {
              ...currentData.root?.props,
              htmlCode: localCode,
            }
          }
        };
      }
    });
  };

  const handleSetViewMode = (modeVal: "code" | "preview") => {
    dispatch({
      type: "setData",
      data: (currentData: any) => ({
        ...currentData,
        root: {
          ...currentData.root,
          props: {
            ...currentData.root?.props,
            htmlViewMode: modeVal,
          }
        }
      })
    });
  };

  const handleResetToBlocks = () => {
    dispatch({
      type: "setData",
      data: (currentData: any) => ({
        ...currentData,
        content: [],
        root: {
          ...currentData.root,
          props: {
            ...currentData.root?.props,
            mode: "blocks",
            htmlCode: "",
            htmlViewMode: "code",
          }
        }
      })
    });
  };

  const isHtmlCodeEditActive = isHtmlMode && !renderData && htmlViewMode === "code";
  const isHtmlPreviewActive = isHtmlMode && !renderData && htmlViewMode === "preview";

  const inner = rootProps?.mode === "html" ? (
    !renderData ? (
      <HtmlModeRender htmlCode={rootProps.htmlCode} isEditing={true} />
    ) : (
      <Render data={renderData} config={config} metadata={metadata} />
    )
  ) : !renderData ? (
    <Page
      {...rootProps}
      credbuild={{
        renderDropZone: DropZonePure,
        isEditing: true,
        dragRef: null,
        metadata,
      }}
      editMode={true} // DEPRECATED
    >
      <DropZonePure zone={rootDroppableId} />
    </Page>
  ) : (
    <Render data={renderData} config={config} metadata={metadata} />
  );

  useEffect(() => {
    if (!iframe.enabled) {
      setStatus("READY");
    }
  }, [iframe.enabled, setStatus]);

  if (isHtmlCodeEditActive) {
    return (
      <div
        className={getClassName()}
        id={id}
        data-credbuild-preview
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        {/* Editor Area */}
        <div className={getClassName("htmlEditor")}>
          <div style={{
            display: "flex",
            flex: 1,
            position: "relative",
            overflow: "hidden",
          }}>
            <textarea
              value={localCode}
              onChange={(e) => setLocalCode(e.target.value)}
              onBlur={handleSaveOnBlur}
              placeholder="<!-- Tempel kode HTML/Tailwind di sini -->&#10;<section class='bg-zinc-900 text-white p-12'>&#10;  <h1 class='text-3xl font-bold'>Hello World</h1>&#10;</section>"
              spellCheck={false}
              className={getClassName("htmlTextarea")}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={getClassName()}
      id={id}
      data-credbuild-preview
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
      onClick={(e) => {
        const el = e.target as Element;

        if (
          !el.hasAttribute("data-credbuild-component") &&
          !el.hasAttribute("data-credbuild-dropzone")
        ) {
          dispatch({ type: "setUi", ui: { itemSelector: null } });
        }
      }}
    >
      <div style={{ flex: 1, position: "relative", minHeight: 0, height: "100%" }}>
        {iframe.enabled ? (
          <AutoFrame
            id="preview-frame"
            className={getClassName("frame")}
            data-rfd-iframe
            onReady={() => {
              setStatus("READY");
            }}
            onNotReady={() => {
              setStatus("MOUNTED");
            }}
            frameRef={ref}
          >
            <autoFrameContext.Consumer>
              {({ document }) => {
                if (Frame) {
                  return <Frame document={document}>{inner}</Frame>;
                }

                return inner;
              }}
            </autoFrameContext.Consumer>
          </AutoFrame>
        ) : (
          <div
            id="preview-frame"
            className={getClassName("frame")}
            ref={ref}
            data-credbuild-entry
            style={{ height: "100%", width: "100%" }}
          >
            {inner}
          </div>
        )}
      </div>
    </div>
  );
};
