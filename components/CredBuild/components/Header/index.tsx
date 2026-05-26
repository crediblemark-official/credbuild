import { memo, useCallback, useMemo, useState } from "react";
import { useAppStore, useAppStoreApi } from "@/store";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Globe,
  LayoutDashboard,
  PanelLeft,
  PanelRight,
  Sun,
  Moon,
  Zap,
  Code,
  Eye,
  LayoutGrid,
} from "lucide-react";
import { Heading } from "@/components/Heading";
import { IconButton } from "@/components/IconButton/IconButton";
import { MenuBar } from "@/components/MenuBar";
import { Button } from "@/components/Button";
import { Config, Overrides, UiState, UserGenerics } from "@/types";
import { DefaultOverride } from "@/components/DefaultOverride";
import { usePropsContext } from "@/components/CredBuild/context";
import { getClassNameFactory, useResetAutoZoom } from "@/lib";
import { ViewportControls } from "@/components/ViewportControls";
import { useShallow } from "zustand/react/shallow";
import { useCanvasFrame } from "@/lib/frame-context";
import styles from "./styles.module.css";

const getClassName = getClassNameFactory("CredBuildHeader", styles);

const HeaderInner = <
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
>({
  hidePlugins,
  theme,
}: {
  hidePlugins: boolean;
  theme: 'light' | 'dark';
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

  const root = useAppStore((s) => s.state.data.root);
  const rootProps = root?.props || root;
  const isHtmlMode = rootProps?.mode === "html";
  const htmlViewMode = rootProps?.htmlViewMode || (rootProps?.htmlCode ? "preview" : "code");

  const handleSetViewMode = useCallback((modeVal: "code" | "preview") => {
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
  }, [dispatch]);

  const handleResetToBlocks = useCallback(() => {
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
  }, [dispatch]);

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
            <span className="PublishButton">
              <Button
                onClick={() => {
                  const data = appStore.getState().state.data;
                  onPublish && onPublish(data as G["UserData"]);
                }}
                icon={<Zap size={12} />}
              >
                Publish
              </Button>
            </span>
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
            <div style={{ marginRight: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Button 
                href="/dashboard" 
                variant="secondary" 
                size="medium"
                icon={<LayoutDashboard size={14} />}
              >
                Dashboard
              </Button>
              
              <IconButton
                type="button"
                onClick={() => {
                  const editorEl = document.querySelector('.CredBuild');
                  if (!editorEl) return;
                  
                  const isDark = editorEl.classList.contains('dark');
                  const newTheme = isDark ? 'light' : 'dark';
                  
                  if (isDark) {
                    editorEl.classList.remove('dark');
                  } else {
                    editorEl.classList.add('dark');
                  }
                  
                  localStorage.setItem('credbuild-theme', newTheme);
                  window.dispatchEvent(new CustomEvent('credbuild-theme-change', { detail: newTheme }));
                }}
                title="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun size={16} />
                ) : (
                  <Moon size={16} />
                )}
              </IconButton>
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
          <div className={getClassName("viewportTools")} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            {isHtmlMode && (
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}>
                <div style={{
                  display: "flex",
                  background: "var(--credbuild-color-grey-09)",
                  padding: 2,
                  borderRadius: 6,
                  border: "1px solid var(--credbuild-color-grey-10)",
                }}>
                  <button
                    type="button"
                    onClick={() => handleSetViewMode("code")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      padding: "4px 10px",
                      borderRadius: 4,
                      fontSize: 11,
                      fontWeight: 600,
                      cursor: "pointer",
                      border: "none",
                      background: htmlViewMode === "code" ? "var(--credbuild-color-white)" : "transparent",
                      color: "var(--credbuild-color-black)",
                      opacity: htmlViewMode === "code" ? 1 : 0.6,
                      boxShadow: htmlViewMode === "code" ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <Code size={12} />
                    Edit Kode
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSetViewMode("preview")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      padding: "4px 10px",
                      borderRadius: 4,
                      fontSize: 11,
                      fontWeight: 600,
                      cursor: "pointer",
                      border: "none",
                      background: htmlViewMode === "preview" ? "var(--credbuild-color-white)" : "transparent",
                      color: "var(--credbuild-color-black)",
                      opacity: htmlViewMode === "preview" ? 1 : 0.6,
                      boxShadow: htmlViewMode === "preview" ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <Eye size={12} />
                    Lihat Hasil
                  </button>
                </div>

                <Button
                  type="button"
                  onClick={handleResetToBlocks}
                  variant="secondary"
                  size="medium"
                  icon={<LayoutGrid size={14} />}
                >
                  Kembali ke Mode Blok
                </Button>
              </div>
            )}

            {(!isHtmlMode || htmlViewMode === "preview") && (
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
            )}
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
                  <span className="PublishButton">
                    <Button
                      onClick={() => {
                        const data = appStore.getState().state
                          .data as G["UserData"];
                        onPublish && onPublish(data);
                      }}
                      icon={<Zap size={12} />}
                    >
                      Publish
                    </Button>
                  </span>
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
