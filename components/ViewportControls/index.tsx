import {
  Expand,
  Monitor,
  Smartphone,
  Tablet,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { IconButton } from "@/components/IconButton";
import { useAppStore } from "@/store";
import { ReactNode, SyntheticEvent, useEffect, useMemo, useState } from "react";
import { getClassNameFactory } from "@/lib";

import styles from "./styles.module.css";
import { Viewport } from "@/types";

const icons = {
  Smartphone: <Smartphone size={16} />,
  Tablet: <Tablet size={16} />,
  Monitor: <Monitor size={16} />,
  FullWidth: <Expand size={16} />,
};

const getClassName = getClassNameFactory("ViewportControls", styles);
const getClassNameButton = getClassNameFactory("ViewportButton", styles);

const ActionButton = ({
  children,
  title,
  onClick,
  isActive,
  disabled,
}: {
  children: ReactNode;
  title: string;
  onClick: (e: SyntheticEvent) => void;
  isActive?: boolean;
  disabled?: boolean;
}) => {
  return (
    <span className={getClassNameButton({ isActive })} suppressHydrationWarning>
      <IconButton
        type="button"
        title={title}
        disabled={disabled || isActive}
        onClick={onClick}
        suppressHydrationWarning
      >
        <span className={getClassNameButton("inner")}>{children}</span>
      </IconButton>
    </span>
  );
};

// Based on Chrome dev tools
const defaultZoomOptions = [
  { label: "25%", value: 0.25 },
  { label: "50%", value: 0.5 },
  { label: "75%", value: 0.75 },
  { label: "100%", value: 1 },
  { label: "125%", value: 1.25 },
  { label: "150%", value: 1.5 },
  { label: "200%", value: 2 },
];

export const ViewportControls = ({
  autoZoom,
  zoom,
  onViewportChange,
  onZoom,
  fullScreen,
}: {
  autoZoom: number;
  zoom: number;
  onViewportChange: (viewport: Viewport) => void;
  onZoom: (zoom: number) => void;
  fullScreen?: boolean;
}) => {
  const viewports = useAppStore((s) => s.viewports);
  const uiViewports = useAppStore((s) => s.state.ui.viewports);

  const defaultsContainAutoZoom = defaultZoomOptions.find(
    (option) => option.value === autoZoom
  );

  const zoomOptions = useMemo(() => {
    const options = [
      ...defaultZoomOptions,
      ...(defaultsContainAutoZoom || isNaN(autoZoom)
        ? []
        : [
            {
              value: autoZoom,
              label: `${(autoZoom * 100).toFixed(0)}% (Auto)`,
            },
          ]),
    ]
      .filter((a) => a.value <= (autoZoom || 1))
      .sort((a, b) => (a.value > b.value ? 1 : -1));

    return options.length > 0 ? options : defaultZoomOptions;
  }, [autoZoom, defaultsContainAutoZoom]);

  const [activeViewport, setActiveViewport] = useState(
    uiViewports.current.width
  );

  useEffect(() => {
    setActiveViewport(uiViewports.current.width);
  }, [uiViewports.current.width, uiViewports]);

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={getClassName({ isExpanded, fullScreen })}
      suppressHydrationWarning // Suppress hydration warning as frame is not visible until after load
    >
      <div className={getClassName("actions")}>
        <div className={getClassName("actionsInner")}>
          {viewports.map((viewport, i) => (
            <ActionButton
              key={i}
              title={
                viewport.label
                  ? `Switch to ${viewport.label} viewport`
                  : "Switch viewport"
              }
              onClick={() => {
                setActiveViewport(viewport.width);
                onViewportChange(viewport);
              }}
              isActive={activeViewport === viewport.width}
            >
              {typeof viewport.icon === "string"
                ? icons[viewport.icon as keyof typeof icons] || viewport.icon
                : viewport.icon || icons.Smartphone}
            </ActionButton>
          ))}
          <div className={getClassName("divider")} />
          <ActionButton
            title="Zoom viewport out"
            disabled={zoom <= (zoomOptions[0]?.value || 0)}
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = zoomOptions.findIndex((option) => option.value === zoom);
              const nextIndex = Math.max(
                (currentIndex === -1 ? zoomOptions.length : currentIndex) - 1,
                0
              );
              onZoom(zoomOptions[nextIndex]?.value || 1);
            }}
          >
            <ZoomOut size={16} />
          </ActionButton>
          <ActionButton
            title="Zoom viewport in"
            disabled={zoom >= (zoomOptions[zoomOptions.length - 1]?.value || 2)}
            onClick={(e) => {
              e.stopPropagation();

              const currentIndex = zoomOptions.findIndex((option) => option.value === zoom);
              const nextIndex = Math.min(
                (currentIndex === -1 ? -1 : currentIndex) + 1,
                zoomOptions.length - 1
              );
              onZoom(zoomOptions[nextIndex]?.value || 1);
            }}
          >
            <ZoomIn size={16} />
          </ActionButton>

          <div className={getClassName("zoom")}>
            <div className={getClassName("divider")} />
            <select aria-label="Zoom level"
              className={getClassName("zoomSelect")}
              value={zoom.toString()}
              onClick={(e) => {
                e.stopPropagation();
              }}
              onChange={(e) => {
                onZoom(parseFloat(e.currentTarget.value));
              }}
            >
              {zoomOptions.map((option) => (
                <option
                  key={option.label}
                  value={option.value}
                  label={option.label}
                />
              ))}
            </select>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={getClassName("toggleButton")}
        title="Toggle viewport menu"
        aria-label="Toggle viewport menu"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((s) => !s)}
      >
        {isExpanded ? <X size={16} /> : <Monitor size={16} />}
      </button>
    </div>
  );
};
