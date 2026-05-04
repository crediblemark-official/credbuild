import { memo, useCallback, useMemo, useState } from "react";
import { useAppStore, useAppStoreApi } from "../../../../store";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Globe,
  LayoutDashboard,
  PanelLeft,
  PanelRight,
} from "lucide-react";
import { Heading } from "../../../Heading";
import { IconButton } from "../../../IconButton/IconButton";
import { MenuBar } from "../../../MenuBar";
import { Button } from "../../../Button";
import { Config, Overrides, UiState, UserGenerics } from "../../../../types";
import { DefaultOverride } from "../../../DefaultOverride";
import { usePropsContext } from "../..";
import { getClassNameFactory, useResetAutoZoom } from "../../../../lib";
import { ViewportControls } from "../../../ViewportControls";
import { useShallow } from "zustand/react/shallow";
import { useCanvasFrame } from "../../../../lib/frame-context";
import styles from "./styles.module.css";

const getClassName = getClassNameFactory("CredBuildHeader", styles);

const HeaderInner = <
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
>({
  hidePlugins,
}: {
  hidePlugins: boolean;
}) => {
  const {
    onPublish,
    renderHeader,
    renderHeaderActions,
    headerTitle,
    headerPath,
    iframe: _iframe,
  } = usePropsContext();

  const dispatch = useAppStore((s) => s.dispatch);
  const appStore = useAppStoreApi();

  // DEPRECATED
  const defaultHeaderRender = useMemo((): Overrides["header"] => {
    if (renderHeader) {
      console.warn(
        "`renderHeader` is deprecated. Please use `overrides.header` and the `useCredBuild` hook instead"
      );

      const RenderHeader = ({ actions, ...props }: any) => {
        const Comp = renderHeader!;

        const appState = useAppStore((s) => s.state);

        return (
          <Comp {...props} dispatch={dispatch} state={appState}>
            {actions}
          </Comp>
        );
      };

      return RenderHeader;
    }

    return DefaultOverride;
  }, [renderHeader, dispatch]);

  // DEPRECATED
  const defaultHeaderActionsRender = useMemo((): Overrides["headerActions"] => {
    if (renderHeaderActions) {
      console.warn(
        "`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `useCredBuild` hook instead."
      );

      const RenderHeader = (props: any) => {
        const Comp = renderHeaderActions!;

        const appState = useAppStore((s) => s.state);

        return <Comp {...props} dispatch={dispatch} state={appState}></Comp>;
      };

      return RenderHeader;
    }

    return DefaultOverride;
  }, [renderHeaderActions, dispatch]);

  const CustomHeader = useAppStore(
    (s) => s.overrides.header || defaultHeaderRender
  );

  const CustomHeaderActions = useAppStore(
    (s) => s.overrides.headerActions || defaultHeaderActionsRender
  );

  const [menuOpen, setMenuOpen] = useState(false);

  const rootTitle = useAppStore((s) => {
    const rootData = s.state.indexes.nodes["root"]?.data as G["UserRootProps"];

    return rootData.props.title ?? "";
  });

  const leftSideBarVisible = useAppStore((s) => s.state.ui.leftSideBarVisible);
  const rightSideBarVisible = useAppStore(
    (s) => s.state.ui.rightSideBarVisible
  );

  const {
    setUi,
    zoomConfig,
    setZoomConfig,
    _experimentalFullScreenCanvas,
  } = useAppStore(
    useShallow((s) => ({
      setUi: s.setUi,
      zoomConfig: s.zoomConfig,
      setZoomConfig: s.setZoomConfig,
      _experimentalFullScreenCanvas: s._experimentalFullScreenCanvas,
    }))
  );

  const { viewports } = useAppStore(
    useShallow((s) => ({
      viewports: s.state.ui.viewports,
    }))
  );

  const { frameRef } = useCanvasFrame();
  const resetAutoZoom = useResetAutoZoom(frameRef);

  const toggleSidebars = useCallback(
    (sidebar: "left" | "right") => {
      const widerViewport = window.matchMedia("(min-width: 638px)").matches;
      const sideBarVisible =
        sidebar === "left" ? leftSideBarVisible : rightSideBarVisible;
      const oppositeSideBar =
        sidebar === "left" ? "rightSideBarVisible" : "leftSideBarVisible";

      dispatch({
        type: "setUi",
        ui: {
          [`${sidebar}SideBarVisible`]: !sideBarVisible,
          ...(!widerViewport ? { [oppositeSideBar]: false } : {}),
        },
      });
    },
    [dispatch, leftSideBarVisible, rightSideBarVisible]
  );

  return (
    <CustomHeader
      actions={
        <>
          <CustomHeaderActions>
            <Button
              href={headerPath || "/"}
              newTab
              variant="secondary"
              icon={<ExternalLink size={14} />}
            >
              View Web
            </Button>
            <Button
              onClick={() => {
                const data = appStore.getState().state.data;
                onPublish && onPublish(data as G["UserData"]);
              }}
              icon={<Globe size={14} />}
            >
              Publish
            </Button>
          </CustomHeaderActions>
        </>
      }
    >
      <header
        className={getClassName({
          leftSideBarVisible,
          rightSideBarVisible,
          hidePlugins,
        })}
      >
        <div className={getClassName("inner")}>
          <div className={getClassName("leftActions")}>
            <div style={{ marginRight: '16px' }}>
              <Button 
                href="/dashboard" 
                variant="secondary" 
                size="medium"
                icon={<LayoutDashboard size={14} />}
              >
                Dashboard
              </Button>
            </div>
            <div className={getClassName("toggle")}>
              <div className={getClassName("leftSideBarToggle")}>
                <IconButton
                  type="button"
                  onClick={() => {
                    toggleSidebars("left");
                  }}
                  title="Toggle left sidebar"
                >
                  <PanelLeft size={16} focusable="false" />
                </IconButton>
              </div>
              <div className={getClassName("rightSideBarToggle")}>
                <IconButton
                  type="button"
                  onClick={() => {
                    toggleSidebars("right");
                  }}
                  title="Toggle right sidebar"
                >
                  <PanelRight size={16} focusable="false" />
                </IconButton>
              </div>
            </div>
            <div className={getClassName("title")}>
              <Heading rank="2" size="xs">
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  {headerTitle || rootTitle || "Page"}
                </span>
                {headerPath && (
                  <>
                    <code className={getClassName("path")} style={{ fontSize: '10px', opacity: 0.6, marginLeft: '8px' }}>
                      {headerPath}
                    </code>
                  </>
                )}
              </Heading>
            </div>
          </div>
          <div className={getClassName("viewportTools")}>
            <ViewportControls
              fullScreen={_experimentalFullScreenCanvas}
              autoZoom={zoomConfig.autoZoom}
              zoom={zoomConfig.zoom}
              onViewportChange={(viewport) => {
                const isFullWidth = viewport.width === "100%";
                
                const uiViewport = {
                  ...viewport,
                  height: viewport.height || "auto",
                  zoom: isFullWidth ? 1 : zoomConfig.zoom,
                };

                const newUi: Partial<UiState> = {
                  viewports: { ...viewports, current: uiViewport },
                };

                if (isFullWidth) {
                  setZoomConfig({ ...zoomConfig, zoom: 1 });
                }

                setUi(newUi);
              }}
              onZoom={(zoom) => {
                setZoomConfig({ ...zoomConfig, zoom });
              }}
            />
          </div>
          <div className={getClassName("tools")}>
            <div className={getClassName("menuButton")}>
              <IconButton
                type="button"
                onClick={() => {
                  return setMenuOpen(!menuOpen);
                }}
                title="Toggle menu bar"
              >
                {menuOpen ? (
                  <ChevronUp size={16} focusable="false" />
                ) : (
                  <ChevronDown size={16} focusable="false" />
                )}
              </IconButton>
            </div>
            <MenuBar<G["UserData"]>
              dispatch={dispatch}
              onPublish={onPublish}
              menuOpen={menuOpen}
              renderHeaderActions={() => (
                <CustomHeaderActions>
                  <Button
                    href={headerPath || "/"}
                    newTab
                    variant="secondary"
                    icon={<ExternalLink size={14} />}
                  >
                    View Web
                  </Button>
                  <Button
                    onClick={() => {
                      const data = appStore.getState().state
                        .data as G["UserData"];
                      onPublish && onPublish(data);
                    }}
                    icon={<Globe size={14} />}
                  >
                    Publish
                  </Button>
                </CustomHeaderActions>
              )}
              setMenuOpen={setMenuOpen}
            />
          </div>
        </div>
      </header>
    </CustomHeader>
  );
};

export const Header = memo(HeaderInner);
