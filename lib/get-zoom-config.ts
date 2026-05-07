import { getBox } from "css-box-model";
import { AppState } from "@/types";

const RESET_ZOOM_SMALLER_THAN_FRAME = true;

export const getZoomConfig = (
  uiViewport: AppState["ui"]["viewports"]["current"],
  frame: HTMLElement,
  zoom: number
) => {
  const box = getBox(frame);

  const { width: frameWidth, height: frameHeight } = box.contentBox;

  const viewportHeight =
    uiViewport.height === "auto" ? frameHeight : uiViewport.height;

  let rootHeight = 0;
  let autoZoom = 1;

  if (
    typeof uiViewport.width === "number" &&
    uiViewport.width > 0 &&
    (uiViewport.width > frameWidth ||
      (typeof viewportHeight === "number" && viewportHeight > frameHeight))
  ) {
    const widthZoom = Math.min(frameWidth / uiViewport.width, 1);
    const heightZoom =
      typeof viewportHeight === "number"
        ? Math.min(frameHeight / viewportHeight, 1)
        : 1;

    zoom = Math.max(widthZoom, 0.01);

    if (widthZoom < heightZoom) {
      rootHeight =
        typeof viewportHeight === "number" ? viewportHeight / zoom : frameHeight;
    } else {
      rootHeight = typeof viewportHeight === "number" ? viewportHeight : 0;
      zoom = Math.max(heightZoom, 0.01);
    }

    autoZoom = zoom;
  } else {
    if (RESET_ZOOM_SMALLER_THAN_FRAME) {
      autoZoom = 1;
      zoom = 1;
      rootHeight = typeof viewportHeight === "number" ? viewportHeight : 0;
    }
  }

  return { autoZoom, rootHeight, zoom };
};
