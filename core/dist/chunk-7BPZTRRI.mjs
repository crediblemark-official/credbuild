import {
  EditorInner,
  LoadedRichTextMenu
} from "./chunk-SI5HRMFA.mjs";
import {
  RichTextRenderFallback,
  SlotRender,
  SlotRenderPure,
  buildMappers,
  getSlotTransform,
  useRichtextProps,
  useSlots
} from "./chunk-32RNFTPX.mjs";
import {
  ActionBar,
  IconButton,
  LoadedRichTextMenuInner,
  Loader
} from "./chunk-4CMJSCRJ.mjs";
import {
  Box,
  ChartColumn,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleCheckBig,
  Copy,
  CornerLeftUp,
  CreditCard,
  EllipsisVertical,
  Expand,
  ExternalLink,
  FileText,
  Globe,
  GripVertical,
  Hash,
  Image,
  Info,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  LayoutTemplate,
  Link,
  List,
  Lock,
  LockOpen,
  Maximize2,
  Megaphone,
  Minimize2,
  Monitor,
  PanelLeft,
  PanelRight,
  Plus,
  Quote,
  RectangleEllipsis,
  Redo2,
  Search,
  Settings,
  Shapes,
  SlidersHorizontal,
  Smartphone,
  Tablet,
  ToyBrick,
  Trash,
  Type,
  Undo2,
  X,
  ZoomIn,
  ZoomOut,
  appStoreContext,
  createAppStore,
  getBox,
  monitorHotkeys,
  reorder,
  replace,
  useAppStore,
  useAppStoreApi,
  useHotkey,
  useMonitorHotkeys,
  useRegisterFieldsSlice,
  useRegisterHistorySlice,
  useRegisterPermissionsSlice,
  useResetAutoZoom
} from "./chunk-ZA4EXS7Q.mjs";
import {
  getItem,
  insert,
  insertAction,
  makeStatePublic,
  populateIds
} from "./chunk-MQAN4F4B.mjs";
import {
  defaultAppState,
  defaultViewports
} from "./chunk-QGRPODT7.mjs";
import {
  get_class_name_factory_default
} from "./chunk-CYQ2TPPM.mjs";
import {
  defaultSlots,
  expandNode,
  generateId,
  mapFields,
  rootAreaId,
  rootDroppableId,
  rootZone,
  setupZone,
  toComponent,
  walkAppState,
  walkField
} from "./chunk-Y5AAKZ45.mjs";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues,
  init_react_import
} from "./chunk-2TADFG6T.mjs";

// types/API/Overrides.ts
init_react_import();
var overrideKeys = [
  "header",
  "headerActions",
  "fields",
  "fieldLabel",
  "drawer",
  "drawerItem",
  "componentOverlay",
  "outline",
  "credbuild",
  "preview"
];

// lib/data/set-deep.ts
init_react_import();
function setDeep(node, path, newVal) {
  const parts = path.split(".");
  const newNode = __spreadValues({}, node);
  let cur = newNode;
  for (let i = 0; i < parts.length; i++) {
    const [prop, idxStr] = parts[i].replace("]", "").split("[");
    const isLast = i === parts.length - 1;
    if (idxStr !== void 0) {
      if (!Array.isArray(cur[prop])) {
        cur[prop] = [];
      }
      const idx = Number(idxStr);
      if (isLast) {
        cur[prop][idx] = newVal;
        continue;
      }
      if (cur[prop][idx] === void 0) cur[prop][idx] = {};
      cur = cur[prop][idx];
      continue;
    }
    if (isLast) {
      cur[prop] = newVal;
      continue;
    }
    if (cur[prop] === void 0) {
      cur[prop] = {};
    }
    cur = cur[prop];
  }
  return __spreadValues(__spreadValues({}, node), newNode);
}

// components/Button/Button.tsx
init_react_import();
import { useEffect, useState } from "react";

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/Button/Button.module.css#css-module
init_react_import();
var Button_module_default = { "Button": "_Button_164uz_1", "Button--medium": "_Button--medium_164uz_29", "Button--large": "_Button--large_164uz_34", "Button-icon": "_Button-icon_164uz_38", "Button--primary": "_Button--primary_164uz_42", "Button--secondary": "_Button--secondary_164uz_63", "Button--flush": "_Button--flush_164uz_80", "Button--disabled": "_Button--disabled_164uz_84", "Button--fullWidth": "_Button--fullWidth_164uz_92", "Button-spinner": "_Button-spinner_164uz_97" };

// lib/filter-data-attrs.ts
init_react_import();
var dataAttrRe = /^(data-.*)$/;
var filterDataAttrs = (props) => {
  let filteredProps = {};
  for (const prop in props) {
    if (Object.prototype.hasOwnProperty.call(props, prop) && dataAttrRe.test(prop)) {
      filteredProps[prop] = props[prop];
    }
  }
  return filteredProps;
};

// components/Button/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var getClassName = get_class_name_factory_default("Button", Button_module_default);
var Button = (_a) => {
  var _b = _a, {
    children,
    href,
    onClick,
    variant = "primary",
    type,
    disabled,
    tabIndex,
    newTab,
    fullWidth,
    icon,
    size = "medium",
    loading: loadingProp = false
  } = _b, props = __objRest(_b, [
    "children",
    "href",
    "onClick",
    "variant",
    "type",
    "disabled",
    "tabIndex",
    "newTab",
    "fullWidth",
    "icon",
    "size",
    "loading"
  ]);
  const [loading, setLoading] = useState(loadingProp);
  useEffect(() => setLoading(loadingProp), [loadingProp]);
  const ElementType = href ? "a" : type ? "button" : "span";
  const dataAttrs = filterDataAttrs(props);
  const el = /* @__PURE__ */ jsxs(
    ElementType,
    __spreadProps(__spreadValues({
      className: getClassName({
        primary: variant === "primary",
        secondary: variant === "secondary",
        disabled,
        fullWidth,
        [size]: true
      }),
      onClick: (e) => {
        if (!onClick) return;
        setLoading(true);
        Promise.resolve(onClick(e)).then(() => {
          setLoading(false);
        });
      },
      type,
      disabled: disabled || loading,
      tabIndex,
      target: newTab ? "_blank" : void 0,
      rel: newTab ? "noreferrer" : void 0,
      href
    }, dataAttrs), {
      children: [
        icon && /* @__PURE__ */ jsx("div", { className: getClassName("icon"), children: icon }),
        children,
        loading && /* @__PURE__ */ jsx("div", { className: getClassName("spinner"), children: /* @__PURE__ */ jsx(Loader, { size: 14 }) })
      ]
    })
  );
  return el;
};

// components/AutoField/FieldLabel.tsx
init_react_import();

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/AutoField/styles.module.css#css-module
init_react_import();
var styles_module_default = { "InputWrapper": "_InputWrapper_1q7gk_1", "Input-label": "_Input-label_1q7gk_5", "Input-labelIcon": "_Input-labelIcon_1q7gk_14", "Input-disabledIcon": "_Input-disabledIcon_1q7gk_21", "Input-input": "_Input-input_1q7gk_26", "Input": "_Input_1q7gk_1", "Input--readOnly": "_Input--readOnly_1q7gk_82", "Input-radioGroupItems": "_Input-radioGroupItems_1q7gk_93", "Input-radio": "_Input-radio_1q7gk_93", "Input-radioInner": "_Input-radioInner_1q7gk_110", "Input-radioInput": "_Input-radioInput_1q7gk_155" };

// components/AutoField/FieldLabel.tsx
import { useMemo } from "react";
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var getClassName2 = get_class_name_factory_default("Input", styles_module_default);
var FieldLabel = ({
  children,
  icon,
  label,
  el = "label",
  readOnly,
  className
}) => {
  const El = el;
  return /* @__PURE__ */ jsxs2(El, { className, children: [
    /* @__PURE__ */ jsxs2("div", { className: getClassName2("label"), children: [
      icon ? /* @__PURE__ */ jsx2("div", { className: getClassName2("labelIcon"), children: icon }) : /* @__PURE__ */ jsx2(Fragment, {}),
      label,
      readOnly && /* @__PURE__ */ jsx2("div", { className: getClassName2("disabledIcon"), title: "Read-only", children: /* @__PURE__ */ jsx2(Lock, { size: "12" }) })
    ] }),
    children
  ] });
};
var FieldLabelInternal = ({
  children,
  icon,
  label,
  el = "label",
  readOnly
}) => {
  const overrides = useAppStore((s) => s.overrides);
  const Wrapper = useMemo(
    () => overrides.fieldLabel || FieldLabel,
    [overrides]
  );
  if (!label) {
    return /* @__PURE__ */ jsx2(Fragment, { children });
  }
  return /* @__PURE__ */ jsx2(
    Wrapper,
    {
      label,
      icon,
      className: getClassName2({ readOnly }),
      readOnly,
      el,
      children
    }
  );
};

// components/AutoField/index.tsx
init_react_import();
import {
  useCallback as useCallback4,
  useContext as useContext4,
  useEffect as useEffect7,
  useMemo as useMemo5
} from "react";

// components/AutoField/fields/index.tsx
init_react_import();

// components/AutoField/fields/ArrayField/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/AutoField/fields/ArrayField/styles.module.css#css-module
init_react_import();
var styles_module_default2 = { "ArrayField": "_ArrayField_1q029_5", "ArrayField--isDraggingFrom": "_ArrayField--isDraggingFrom_1q029_13", "ArrayField-addButton": "_ArrayField-addButton_1q029_18", "ArrayField--hasItems": "_ArrayField--hasItems_1q029_33", "ArrayField-inner": "_ArrayField-inner_1q029_59", "ArrayFieldItem": "_ArrayFieldItem_1q029_67", "ArrayFieldItem--isDragging": "_ArrayFieldItem--isDragging_1q029_78", "ArrayFieldItem--isExpanded": "_ArrayFieldItem--isExpanded_1q029_82", "ArrayFieldItem-summary": "_ArrayFieldItem-summary_1q029_97", "ArrayFieldItem--noFields": "_ArrayFieldItem--noFields_1q029_122", "ArrayField--addDisabled": "_ArrayField--addDisabled_1q029_131", "ArrayFieldItem-body": "_ArrayFieldItem-body_1q029_170", "ArrayFieldItem-fieldset": "_ArrayFieldItem-fieldset_1q029_179", "ArrayFieldItem-rhs": "_ArrayFieldItem-rhs_1q029_187", "ArrayFieldItem-actions": "_ArrayFieldItem-actions_1q029_193" };

// components/AutoField/store.ts
init_react_import();
import { useContext as useContext2 } from "react";
import { useShallow as useShallow2 } from "zustand/react/shallow";

// lib/use-context-store.tsx
init_react_import();
import { createContext, useContext, useState as useState2 } from "react";
import { createStore, useStore } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";
import { jsx as jsx3 } from "react/jsx-runtime";
function useContextStore(context, selector) {
  const store = useContext(context);
  if (!store) {
    throw new Error("useContextStore must be used inside context");
  }
  return useStore(store, useShallow(selector));
}
function createStoreProvider(ContextComponent) {
  const StoreProvider = ({
    children,
    value
  }) => {
    const [store] = useState2(() => createStore(() => value));
    return /* @__PURE__ */ jsx3(ContextComponent.Provider, { value: store, children });
  };
  return StoreProvider;
}
function createContextStore(defaultValue) {
  const ctx = createContext(
    createStore(subscribeWithSelector(() => defaultValue))
  );
  return {
    ctx,
    Provider: createStoreProvider(ctx)
  };
}

// components/AutoField/store.ts
import { useStore as useStore2 } from "zustand";
var fieldContextStore = createContextStore({});
var useFieldStoreApi = () => useContext2(fieldContextStore.ctx);
function useFieldStore(selector) {
  const store = useContext2(fieldContextStore.ctx);
  if (!store) {
    throw new Error("useContextStore must be used inside context");
  }
  return useStore2(store, useShallow2(selector));
}

// components/AutoField/fields/ArrayField/index.tsx
import {
  memo as memo2,
  useCallback,
  useEffect as useEffect2,
  useMemo as useMemo3,
  useRef,
  useState as useState4
} from "react";

// components/DragIcon/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/DragIcon/styles.module.css#css-module
init_react_import();
var styles_module_default3 = { "DragIcon": "_DragIcon_ei1r9_1", "DragIcon--disabled": "_DragIcon--disabled_ei1r9_8" };

// components/DragIcon/index.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var getClassName3 = get_class_name_factory_default("DragIcon", styles_module_default3);
var DragIcon = ({ isDragDisabled }) => /* @__PURE__ */ jsx4("div", { className: getClassName3({ disabled: isDragDisabled }), children: /* @__PURE__ */ jsx4(GripVertical, { size: 12, strokeWidth: 2.5 }) });

// components/Sortable/index.tsx
init_react_import();
import { DragDropProvider } from "@dnd-kit/react";

// lib/dnd/use-sensors.ts
init_react_import();
import { useState as useState3 } from "react";
import { PointerSensor } from "@dnd-kit/react";
import { isElement } from "@dnd-kit/dom/utilities";
var touchDefault = { delay: { value: 200, tolerance: 10 } };
var otherDefault = {
  delay: { value: 200, tolerance: 10 },
  distance: { value: 5 }
};
var useSensors = ({
  other = otherDefault,
  mouse,
  touch = touchDefault
} = {
  touch: touchDefault,
  other: otherDefault
}) => {
  const [sensors] = useState3(() => [
    PointerSensor.configure({
      activationConstraints(event, source) {
        var _a;
        const { pointerType, target } = event;
        if (pointerType === "mouse" && isElement(target) && (source.handle === target || ((_a = source.handle) == null ? void 0 : _a.contains(target)))) {
          return mouse;
        }
        if (pointerType === "touch") {
          return touch;
        }
        return other;
      }
    })
  ]);
  return sensors;
};

// lib/dnd/collision/dynamic/index.ts
init_react_import();
import {
  CollisionPriority as CollisionPriority7,
  CollisionType as CollisionType7
} from "@dnd-kit/abstract";

// lib/dnd/collision/directional/index.ts
init_react_import();
import { CollisionType } from "@dnd-kit/abstract";

// lib/dnd/collision/collision-debug.ts
init_react_import();
var DEBUG = false;
var debugElements = {};
var timeout;
var collisionDebug = (a, b, id, color, label) => {
  if (!DEBUG) return;
  const debugId = `${id}-debug`;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    Object.entries(debugElements).forEach(([id2, { svg }]) => {
      svg.remove();
      delete debugElements[id2];
    });
  }, 1e3);
  requestAnimationFrame(() => {
    var _a, _b;
    const existingEl = debugElements[debugId];
    let line = (_a = debugElements[debugId]) == null ? void 0 : _a.line;
    let text = (_b = debugElements[debugId]) == null ? void 0 : _b.text;
    if (!existingEl) {
      const svgNs = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNs, "svg");
      line = document.createElementNS(svgNs, "line");
      text = document.createElementNS(svgNs, "text");
      svg.setAttribute("id", debugId);
      svg.setAttribute(
        "style",
        "position: fixed; height: 100%; width: 100%; pointer-events: none; top: 0px; left: 0px;"
      );
      svg.appendChild(line);
      svg.appendChild(text);
      text.setAttribute("fill", `black`);
      document.body.appendChild(svg);
      debugElements[debugId] = { svg, line, text };
    }
    line.setAttribute("x1", a.x.toString());
    line.setAttribute("x2", b.x.toString());
    line.setAttribute("y1", a.y.toString());
    line.setAttribute("y2", b.y.toString());
    line.setAttribute("style", `stroke:${color};stroke-width:2`);
    text.setAttribute("x", (a.x - (a.x - b.x) / 2).toString());
    text.setAttribute("y", (a.y - (a.y - b.y) / 2).toString());
    if (label) {
      text.innerHTML = label;
    }
  });
};

// lib/dnd/collision/directional/index.ts
var distanceChange = "increasing";
var directionalCollision = (input, previous) => {
  var _a;
  const { dragOperation, droppable } = input;
  const { shape: dropShape } = droppable;
  const { position } = dragOperation;
  const dragShape = (_a = dragOperation.shape) == null ? void 0 : _a.current;
  if (!dragShape || !dropShape) return null;
  const dropCenter = dropShape.center;
  const distanceToPrevious = Math.sqrt(
    Math.pow(dropCenter.x - previous.x, 2) + Math.pow(dropCenter.y - previous.y, 2)
  );
  const distanceToCurrent = Math.sqrt(
    Math.pow(dropCenter.x - position.current.x, 2) + Math.pow(dropCenter.y - position.current.y, 2)
  );
  distanceChange = distanceToCurrent === distanceToPrevious ? distanceChange : distanceToCurrent < distanceToPrevious ? "decreasing" : "increasing";
  collisionDebug(
    dragShape.center,
    dropCenter,
    droppable.id.toString(),
    "rebeccapurple"
  );
  if (distanceChange === "decreasing") {
    return {
      id: droppable.id,
      value: 1,
      type: CollisionType.Collision
    };
  }
  return null;
};

// lib/dnd/collision/dynamic/get-direction.ts
init_react_import();
var getDirection = (dragAxis, delta) => {
  if (dragAxis === "dynamic") {
    if (Math.abs(delta.y) > Math.abs(delta.x)) {
      return delta.y === 0 ? null : delta.y > 0 ? "down" : "up";
    } else {
      return delta.x === 0 ? null : delta.x > 0 ? "right" : "left";
    }
  } else if (dragAxis === "x") {
    return delta.x === 0 ? null : delta.x > 0 ? "right" : "left";
  }
  return delta.y === 0 ? null : delta.y > 0 ? "down" : "up";
};

// lib/dnd/collision/dynamic/get-midpoint-impact.ts
init_react_import();
var getMidpointImpact = (dragShape, dropShape, direction, offsetMultiplier = 0) => {
  const dragRect = dragShape.boundingRectangle;
  const dropCenter = dropShape.center;
  if (direction === "down") {
    const offset2 = offsetMultiplier * dropShape.boundingRectangle.height;
    return dragRect.bottom >= dropCenter.y + offset2;
  } else if (direction === "up") {
    const offset2 = offsetMultiplier * dropShape.boundingRectangle.height;
    return dragRect.top < dropCenter.y - offset2;
  } else if (direction === "left") {
    const offset2 = offsetMultiplier * dropShape.boundingRectangle.width;
    return dropCenter.x - offset2 >= dragRect.left;
  }
  const offset = offsetMultiplier * dropShape.boundingRectangle.width;
  return dragRect.right - offset >= dropCenter.x;
};

// lib/dnd/collision/dynamic/track-movement-interval.ts
init_react_import();
import { Point } from "@dnd-kit/geometry";
var INTERVAL_SENSITIVITY = 10;
var intervalCache = {
  current: { x: 0, y: 0 },
  delta: { x: 0, y: 0 },
  previous: { x: 0, y: 0 },
  direction: null
};
var trackMovementInterval = (point, dragAxis = "dynamic") => {
  intervalCache.current = point;
  intervalCache.delta = {
    x: point.x - intervalCache.previous.x,
    y: point.y - intervalCache.previous.y
  };
  intervalCache.direction = getDirection(dragAxis, intervalCache.delta) || intervalCache.direction;
  if (Math.abs(intervalCache.delta.x) > INTERVAL_SENSITIVITY || Math.abs(intervalCache.delta.y) > INTERVAL_SENSITIVITY) {
    intervalCache.previous = Point.from(point);
  }
  return intervalCache;
};

// ../../node_modules/@dnd-kit/collision/dist/index.js
init_react_import();
import { CollisionPriority, CollisionType as CollisionType2 } from "@dnd-kit/abstract";
import { Point as Point2 } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority2, CollisionType as CollisionType22 } from "@dnd-kit/abstract";
import { Point as Point22 } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority3, CollisionType as CollisionType3 } from "@dnd-kit/abstract";
import { Point as Point3, Rectangle } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority4, CollisionType as CollisionType4 } from "@dnd-kit/abstract";
import { Point as Point4 } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority5, CollisionType as CollisionType5 } from "@dnd-kit/abstract";
import { Point as Point5 } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority6, CollisionType as CollisionType6 } from "@dnd-kit/abstract";
import { Point as Point6 } from "@dnd-kit/geometry";
var pointerIntersection = ({
  dragOperation,
  droppable
}) => {
  const pointerCoordinates = dragOperation.position.current;
  if (!pointerCoordinates) {
    return null;
  }
  const { id } = droppable;
  if (!droppable.shape) {
    return null;
  }
  if (droppable.shape.containsPoint(pointerCoordinates)) {
    const distance = Point2.distance(droppable.shape.center, pointerCoordinates);
    return {
      id,
      value: 1 / distance,
      type: CollisionType2.PointerIntersection,
      priority: CollisionPriority.High
    };
  }
  return null;
};
var closestCorners = (input) => {
  const { dragOperation, droppable } = input;
  const { shape, position } = dragOperation;
  if (!droppable.shape) {
    return null;
  }
  const shapeCorners = shape ? Rectangle.from(shape.current.boundingRectangle).corners : void 0;
  const distance = Rectangle.from(
    droppable.shape.boundingRectangle
  ).corners.reduce(
    (acc, corner, index) => {
      var _a;
      return acc + Point3.distance(
        Point3.from(corner),
        (_a = shapeCorners == null ? void 0 : shapeCorners[index]) != null ? _a : position.current
      );
    },
    0
  );
  const value = distance / 4;
  return {
    id: droppable.id,
    value: 1 / value,
    type: CollisionType3.Collision,
    priority: CollisionPriority3.Normal
  };
};

// lib/dnd/collision/dynamic/store.ts
init_react_import();
import { createStore as createStore2 } from "zustand/vanilla";
var collisionStore = createStore2(() => ({
  fallbackEnabled: false
}));

// lib/dnd/collision/dynamic/index.ts
var flushNext = "";
var createDynamicCollisionDetector = (dragAxis, midpointOffset = 0.05) => ((input) => {
  var _a, _b, _c, _d, _e;
  const { dragOperation, droppable } = input;
  const { position } = dragOperation;
  const dragShape = (_a = dragOperation.shape) == null ? void 0 : _a.current;
  const { shape: dropShape } = droppable;
  if (!dragShape || !dropShape) {
    return null;
  }
  const { center: dragCenter } = dragShape;
  const { fallbackEnabled } = collisionStore.getState();
  const interval = trackMovementInterval(position.current, dragAxis);
  const data = {
    direction: interval.direction
  };
  const { center: dropCenter } = dropShape;
  const overMidpoint = getMidpointImpact(
    dragShape,
    dropShape,
    interval.direction,
    midpointOffset
  );
  if (((_b = dragOperation.source) == null ? void 0 : _b.id) === droppable.id) {
    const collision = directionalCollision(input, interval.previous);
    collisionDebug(dragCenter, dropCenter, droppable.id.toString(), "yellow");
    if (collision) {
      return __spreadProps(__spreadValues({}, collision), {
        priority: CollisionPriority7.Highest,
        data
      });
    }
  }
  const intersectionArea = dragShape.intersectionArea(dropShape);
  const intersectionRatio = intersectionArea / dropShape.area;
  if (intersectionArea && overMidpoint) {
    collisionDebug(
      dragCenter,
      dropCenter,
      droppable.id.toString(),
      "green",
      interval.direction
    );
    const collision = {
      id: droppable.id,
      value: intersectionRatio,
      priority: CollisionPriority7.High,
      type: CollisionType7.Collision
    };
    const shouldFlushId = flushNext === droppable.id;
    flushNext = "";
    return __spreadProps(__spreadValues({}, collision), { id: shouldFlushId ? "flush" : collision.id, data });
  }
  if (fallbackEnabled && ((_c = dragOperation.source) == null ? void 0 : _c.id) !== droppable.id) {
    const xAxisIntersection = dropShape.boundingRectangle.right > dragShape.boundingRectangle.left && dropShape.boundingRectangle.left < dragShape.boundingRectangle.right;
    const yAxisIntersection = dropShape.boundingRectangle.bottom > dragShape.boundingRectangle.top && dropShape.boundingRectangle.top < dragShape.boundingRectangle.bottom;
    if (dragAxis === "y" && xAxisIntersection || yAxisIntersection) {
      const fallbackCollision = closestCorners(input);
      if (fallbackCollision) {
        const direction = getDirection(dragAxis, {
          x: dragShape.center.x - (((_d = droppable.shape) == null ? void 0 : _d.center.x) || 0),
          y: dragShape.center.y - (((_e = droppable.shape) == null ? void 0 : _e.center.y) || 0)
        });
        data.direction = direction;
        if (intersectionArea) {
          collisionDebug(
            dragCenter,
            dropCenter,
            droppable.id.toString(),
            "red",
            direction || ""
          );
          flushNext = droppable.id;
          return __spreadProps(__spreadValues({}, fallbackCollision), {
            priority: CollisionPriority7.Low,
            data
          });
        }
        collisionDebug(
          dragCenter,
          dropCenter,
          droppable.id.toString(),
          "orange",
          direction || ""
        );
        return __spreadProps(__spreadValues({}, fallbackCollision), {
          priority: CollisionPriority7.Lowest,
          data
        });
      }
    }
  }
  collisionDebug(dragCenter, dropCenter, droppable.id.toString(), "hotpink");
  return null;
});

// components/Sortable/index.tsx
import { useSortable } from "@dnd-kit/react/sortable";
import { jsx as jsx5 } from "react/jsx-runtime";
var SortableProvider = ({
  children,
  onDragStart,
  onDragEnd,
  onMove
}) => {
  const sensors = useSensors({
    mouse: { distance: { value: 5 } }
  });
  return /* @__PURE__ */ jsx5(
    DragDropProvider,
    {
      sensors,
      onDragStart: (event) => {
        var _a, _b;
        return onDragStart((_b = (_a = event.operation.source) == null ? void 0 : _a.id.toString()) != null ? _b : "");
      },
      onDragOver: (event, manager) => {
        var _a;
        event.preventDefault();
        const { operation } = event;
        const { source, target } = operation;
        if (!source || !target) return;
        let sourceIndex = source.data.index;
        let targetIndex = target.data.index;
        const collisionData = (_a = manager.collisionObserver.collisions[0]) == null ? void 0 : _a.data;
        if (sourceIndex !== targetIndex && source.id !== target.id) {
          const collisionPosition = (collisionData == null ? void 0 : collisionData.direction) === "up" ? "before" : "after";
          if (targetIndex >= sourceIndex) {
            targetIndex = targetIndex - 1;
          }
          if (collisionPosition === "after") {
            targetIndex = targetIndex + 1;
          }
          onMove({
            source: sourceIndex,
            target: targetIndex
          });
        }
      },
      onDragEnd: () => {
        setTimeout(() => {
          onDragEnd();
        }, 250);
      },
      children
    }
  );
};
var Sortable = ({
  id,
  index,
  disabled,
  children,
  type = "item"
}) => {
  const {
    ref: sortableRef,
    isDragging,
    isDropping,
    handleRef
  } = useSortable({
    id,
    type,
    index,
    disabled,
    data: { index },
    collisionDetector: createDynamicCollisionDetector("y")
  });
  return children({ isDragging, isDropping, ref: sortableRef, handleRef });
};

// components/AutoField/context.tsx
init_react_import();
import { createContext as createContext2, useContext as useContext3, useMemo as useMemo2 } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var NestedFieldContext = createContext2({});
var useNestedFieldContext = () => {
  const context = useContext3(NestedFieldContext);
  return __spreadProps(__spreadValues({}, context), {
    readOnlyFields: context.readOnlyFields || {}
  });
};
var NestedFieldProvider = ({
  children,
  name,
  subName,
  wildcardName = name,
  readOnlyFields
}) => {
  const subPath = `${name}.${subName}`;
  const wildcardSubPath = `${wildcardName}.${subName}`;
  const subReadOnlyFields = useMemo2(
    () => Object.keys(readOnlyFields).reduce((acc, readOnlyKey) => {
      const isLocal = readOnlyKey.indexOf(subPath) > -1 || readOnlyKey.indexOf(wildcardSubPath) > -1;
      if (isLocal) {
        const subPathPattern = new RegExp(
          `^(${name}|${wildcardName}).`.replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\./g, "\\.").replace(/\*/g, "\\*")
        );
        const localName = readOnlyKey.replace(subPathPattern, "");
        return __spreadProps(__spreadValues({}, acc), {
          [localName]: readOnlyFields[readOnlyKey]
        });
      }
      return acc;
    }, {}),
    [name, wildcardName, readOnlyFields, subPath, wildcardSubPath]
  );
  return /* @__PURE__ */ jsx6(
    NestedFieldContext.Provider,
    {
      value: { readOnlyFields: subReadOnlyFields, localName: subName },
      children
    }
  );
};

// lib/data/get-deep.ts
init_react_import();
var getDeep = (node, path) => {
  const pathParts = path.split(".");
  return pathParts.reduce((acc, item) => {
    if (!acc) return;
    const [prop, indexStr] = item.replace("]", "").split("[");
    const val = acc[prop];
    if (indexStr && val) {
      return val[parseInt(indexStr)];
    }
    return val;
  }, node);
};

// components/AutoField/subfield.tsx
init_react_import();
import { memo } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var SubFieldInternal = ({
  field,
  id,
  index,
  name,
  subName,
  localName,
  onChange,
  forceReadOnly
}) => {
  const indexName = typeof index !== "undefined" ? `${name}[${index}]` : name;
  const subPath = name ? `${indexName}.${subName}` : subName;
  const localIndexName = typeof index !== "undefined" ? `${localName}[${index}]` : localName != null ? localName : subName;
  const localWildcardName = typeof index !== "undefined" ? `${localName}[*]` : localName;
  const localSubPath = `${localIndexName}.${subName}`;
  const localWildcardSubPath = `${localWildcardName}.${subName}`;
  const { readOnlyFields } = useNestedFieldContext();
  const subReadOnly = forceReadOnly ? forceReadOnly : typeof readOnlyFields[subPath] !== "undefined" ? readOnlyFields[localSubPath] : readOnlyFields[localWildcardSubPath];
  const label = field.label || subName;
  return /* @__PURE__ */ jsx7(
    NestedFieldProvider,
    {
      name: localIndexName,
      wildcardName: localWildcardName,
      subName,
      readOnlyFields,
      children: /* @__PURE__ */ jsx7(
        AutoFieldPrivate,
        {
          name: subPath,
          label,
          id,
          readOnly: subReadOnly,
          field: __spreadProps(__spreadValues({}, field), {
            label
            // May be used by custom fields
          }),
          onChange: (val, ui) => {
            onChange(val, ui, subName);
          }
        }
      )
    }
  );
};
var SubField = memo(SubFieldInternal);

// components/AutoField/fields/ArrayField/index.tsx
import { Fragment as Fragment2, jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
var getClassName4 = get_class_name_factory_default("ArrayField", styles_module_default2);
var getClassNameItem = get_class_name_factory_default("ArrayFieldItem", styles_module_default2);
var ItemSummaryInner = ({
  index,
  originalIndex,
  field,
  name
}) => {
  const data = useFieldStore((s) => {
    const path = `${[name]}[${index}]`;
    return getDeep(s, path);
  });
  const itemSummary = useMemo3(() => {
    if (data && field.getItemSummary) {
      return field.getItemSummary(data, index);
    }
    return `Item #${originalIndex}`;
  }, [data, field, originalIndex, index]);
  return itemSummary;
};
var ItemSummary = memo2(ItemSummaryInner);
var ArrayFieldItemInternal = ({
  id,
  arrayId,
  index,
  dragIndex,
  originalIndex,
  field,
  onChange,
  onToggleExpand,
  readOnly,
  actions,
  name,
  localName
}) => {
  const isExpanded = useAppStore((s) => {
    var _a;
    return ((_a = s.state.ui.arrayState[arrayId]) == null ? void 0 : _a.openId) === id;
  });
  const canEdit = useAppStore(
    (s) => s.permissions.getPermissions({ item: s.selectedItem }).edit
  );
  const hasVisibleFields = useMemo3(() => {
    if (!field.arrayFields) {
      return false;
    }
    return Object.values(field.arrayFields).some(
      (subField) => subField.type !== "slot" && subField.visible !== false
    );
  }, [field.arrayFields]);
  return /* @__PURE__ */ jsx8(Sortable, { id, index: dragIndex, disabled: readOnly, children: ({ isDragging, ref, handleRef }) => /* @__PURE__ */ jsxs3(
    "div",
    {
      ref,
      className: getClassNameItem({
        isExpanded: isExpanded && hasVisibleFields,
        isDragging,
        noFields: !hasVisibleFields
      }),
      children: [
        /* @__PURE__ */ jsxs3(
          "div",
          {
            ref: handleRef,
            onClick: (e) => {
              if (isDragging) return;
              e.preventDefault();
              e.stopPropagation();
              if (!hasVisibleFields) return;
              onToggleExpand(id, isExpanded);
            },
            className: getClassNameItem("summary"),
            children: [
              /* @__PURE__ */ jsx8(
                ItemSummary,
                {
                  index,
                  originalIndex,
                  field,
                  name
                }
              ),
              /* @__PURE__ */ jsxs3("div", { className: getClassNameItem("rhs"), children: [
                !readOnly && /* @__PURE__ */ jsx8("div", { className: getClassNameItem("actions"), children: actions }),
                /* @__PURE__ */ jsx8("div", { children: /* @__PURE__ */ jsx8(DragIcon, {}) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx8("div", { className: getClassNameItem("body"), children: isExpanded && hasVisibleFields && /* @__PURE__ */ jsx8("fieldset", { className: getClassNameItem("fieldset"), children: Object.keys(field.arrayFields).map((subName) => {
          const subField = field.arrayFields[subName];
          return /* @__PURE__ */ jsx8(
            SubField,
            {
              id: `${id}_${subName}`,
              name,
              index,
              subName,
              localName,
              field: subField,
              onChange,
              forceReadOnly: !canEdit
            },
            `${id}_${subName}_${index}`
          );
        }) }) })
      ]
    }
  ) });
};
var ArrayFieldItem = memo2(ArrayFieldItemInternal);
var ArrayField = ({
  field,
  onChange,
  id,
  name = id,
  label,
  labelIcon,
  readOnly,
  Label = (props) => /* @__PURE__ */ jsx8("div", __spreadValues({}, props))
}) => {
  const setUi = useAppStore((s) => s.setUi);
  const appStoreApi = useAppStoreApi();
  const fieldStore = useFieldStoreApi();
  const { localName = name } = useNestedFieldContext();
  const getValue = useCallback(() => {
    var _a;
    return (_a = getDeep(fieldStore.getState(), name)) != null ? _a : [];
  }, [fieldStore, name]);
  const getArrayState = useCallback(() => {
    var _a;
    const { state } = appStoreApi.getState();
    const thisState = state.ui.arrayState[id];
    if ((_a = thisState == null ? void 0 : thisState.items) == null ? void 0 : _a.length) return thisState;
    const value = getValue();
    return {
      items: Array.from(value || []).map((item, idx) => {
        return {
          _originalIndex: idx,
          _currentIndex: idx,
          _arrayId: `${id}-${idx}`
        };
      }),
      openId: ""
    };
  }, [appStoreApi, id, getValue]);
  const numItems = useFieldStore(() => {
    return getValue().length;
  });
  const defaultArrayState = useMemo3(getArrayState, [getArrayState]);
  const mirror = useAppStore((s) => {
    const thisArrayState = s.state.ui.arrayState[id];
    return thisArrayState != null ? thisArrayState : defaultArrayState;
  });
  const appStore = useAppStoreApi();
  const mapArrayStateToUi = useCallback(
    (partialArrayState) => {
      const state = appStore.getState().state;
      return {
        arrayState: __spreadProps(__spreadValues({}, state.ui.arrayState), {
          [id]: __spreadValues(__spreadValues({}, getArrayState()), partialArrayState)
        })
      };
    },
    [appStore, id, getArrayState]
  );
  const getHighestIndex = useCallback(() => {
    return getArrayState().items.reduce(
      (acc, item) => item._originalIndex > acc ? item._originalIndex : acc,
      -1
    );
  }, [getArrayState]);
  const regenerateArrayState = useCallback((value) => {
    let highestIndex = getHighestIndex();
    const arrayState = getArrayState();
    const newItems = Array.from(value || []).map((item, idx) => {
      var _a, _b, _c;
      const arrayStateItem = arrayState.items[idx];
      const newItem = {
        _originalIndex: (_a = arrayStateItem == null ? void 0 : arrayStateItem._originalIndex) != null ? _a : highestIndex + 1,
        _currentIndex: (_b = arrayStateItem == null ? void 0 : arrayStateItem._currentIndex) != null ? _b : idx,
        _arrayId: ((_c = arrayState.items[idx]) == null ? void 0 : _c._arrayId) || `${id}-${highestIndex + 1}`
      };
      if (newItem._originalIndex > highestIndex) {
        highestIndex = newItem._originalIndex;
      }
      return newItem;
    });
    return __spreadProps(__spreadValues({}, arrayState), { items: newItems });
  }, [getArrayState, getHighestIndex, id]);
  const [draggedItem, setDraggedItem] = useState4("");
  const isDraggingAny = !!draggedItem;
  const valueRef = useRef([]);
  useEffect2(() => {
    valueRef.current = getValue();
  }, [getValue]);
  const uniqifyItem = useCallback(
    (val) => {
      if (field.type !== "array" || !field.arrayFields) return;
      const config = appStore.getState().config;
      return walkField({
        value: val,
        fields: field.arrayFields,
        mappers: {
          slot: ({ value }) => {
            const content = value;
            return content.map((item) => populateIds(item, config, true));
          }
        },
        config
      });
    },
    [appStore, field]
  );
  const syncCurrentIndexes = useCallback(() => {
    const arrayState = getArrayState();
    const newArrayStateItems = arrayState.items.map((item, index) => __spreadProps(__spreadValues({}, item), {
      _currentIndex: index
    }));
    const state = appStore.getState().state;
    const newUi = {
      arrayState: __spreadProps(__spreadValues({}, state.ui.arrayState), {
        [id]: __spreadProps(__spreadValues({}, arrayState), { items: newArrayStateItems })
      })
    };
    setUi(newUi, false);
  }, [appStore, id, getArrayState, setUi]);
  const updateValue = useCallback(
    (newValue) => {
      const newArrayState = regenerateArrayState(newValue);
      setUi(mapArrayStateToUi(newArrayState), false);
      onChange(newValue);
    },
    [regenerateArrayState, setUi, mapArrayStateToUi, onChange]
  );
  useEffect2(() => {
    const newArrayState = regenerateArrayState(getValue());
    setUi(mapArrayStateToUi(newArrayState), false);
  }, [numItems, getValue, mapArrayStateToUi, regenerateArrayState, setUi]);
  if (field.type !== "array" || !field.arrayFields) {
    return null;
  }
  const addDisabled = field.max !== void 0 && (mirror == null ? void 0 : mirror.items.length) >= field.max || readOnly;
  return /* @__PURE__ */ jsx8(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsx8(List, { size: 16 }),
      el: "div",
      readOnly,
      children: /* @__PURE__ */ jsx8(
        SortableProvider,
        {
          onDragStart: (id2) => {
            valueRef.current = getValue();
            setDraggedItem(id2);
            syncCurrentIndexes();
          },
          onDragEnd: () => {
            setDraggedItem("");
            onChange(valueRef.current);
            const currentFieldVal = fieldStore.getState();
            fieldStore.setState(setDeep(currentFieldVal, name, valueRef.current));
            syncCurrentIndexes();
          },
          onMove: (move) => {
            const arrayState = getArrayState();
            if (arrayState.items[move.source]._arrayId !== draggedItem) {
              return;
            }
            const newValue = reorder(valueRef.current, move.source, move.target);
            const newArrayStateItems = reorder(
              arrayState.items,
              move.source,
              move.target
            );
            const state = appStore.getState().state;
            const newUi = {
              arrayState: __spreadProps(__spreadValues({}, state.ui.arrayState), {
                [id]: __spreadProps(__spreadValues({}, arrayState), { items: newArrayStateItems })
              })
            };
            setUi(newUi, false);
            valueRef.current = newValue;
          },
          children: /* @__PURE__ */ jsxs3(
            "div",
            {
              className: getClassName4({
                hasItems: numItems > 0,
                addDisabled
              }),
              children: [
                mirror.items.length > 0 && /* @__PURE__ */ jsx8("div", { className: getClassName4("inner"), "data-dnd-container": true, children: mirror.items.map((item, index) => {
                  const {
                    _arrayId = `${id}-${index}`,
                    _originalIndex = index,
                    _currentIndex = index
                  } = item;
                  return /* @__PURE__ */ jsx8(
                    ArrayFieldItem,
                    {
                      index: _currentIndex,
                      dragIndex: index,
                      originalIndex: _originalIndex,
                      arrayId: id,
                      id: _arrayId,
                      readOnly,
                      field,
                      name,
                      localName,
                      onChange: (val, ui, subName) => {
                        const value = getValue();
                        const data = Array.from(value || [])[index] || {};
                        onChange(
                          replace(value, index, __spreadProps(__spreadValues({}, data), {
                            [subName]: val
                          })),
                          ui
                        );
                      },
                      onToggleExpand: (id2, isExpanded) => {
                        if (isExpanded) {
                          setUi(
                            mapArrayStateToUi({
                              openId: ""
                            })
                          );
                        } else {
                          setUi(
                            mapArrayStateToUi({
                              openId: id2
                            })
                          );
                        }
                      },
                      actions: /* @__PURE__ */ jsxs3(Fragment2, { children: [
                        /* @__PURE__ */ jsx8("div", { className: getClassNameItem("action"), children: /* @__PURE__ */ jsx8(
                          IconButton,
                          {
                            type: "button",
                            disabled: !!addDisabled,
                            onClick: (e) => {
                              e.stopPropagation();
                              const value = getValue();
                              const existingValue = [...value || []];
                              const newItem = uniqifyItem(existingValue[index]);
                              existingValue.splice(index, 0, newItem);
                              updateValue(existingValue);
                            },
                            title: "Duplicate",
                            children: /* @__PURE__ */ jsx8(Copy, { size: 16 })
                          }
                        ) }),
                        /* @__PURE__ */ jsx8("div", { className: getClassNameItem("action"), children: /* @__PURE__ */ jsx8(
                          IconButton,
                          {
                            type: "button",
                            disabled: field.min !== void 0 && field.min >= mirror.items.length,
                            onClick: (e) => {
                              e.stopPropagation();
                              const value = getValue();
                              const existingValue = [...value || []];
                              existingValue.splice(index, 1);
                              updateValue(existingValue);
                            },
                            title: "Delete",
                            children: /* @__PURE__ */ jsx8(Trash, { size: 16 })
                          }
                        ) })
                      ] })
                    },
                    _arrayId
                  );
                }) }),
                !addDisabled && /* @__PURE__ */ jsx8(
                  "button",
                  {
                    type: "button",
                    className: getClassName4("addButton"),
                    onClick: () => {
                      var _a;
                      if (isDraggingAny) return;
                      const value = getValue();
                      const existingValue = value || [];
                      const defaultProps = typeof field.defaultItemProps === "function" ? field.defaultItemProps(existingValue.length) : (_a = field.defaultItemProps) != null ? _a : {};
                      const newItem = defaultSlots(
                        uniqifyItem(defaultProps),
                        field.arrayFields
                      );
                      const newValue = [...existingValue, newItem];
                      updateValue(newValue);
                    },
                    children: /* @__PURE__ */ jsx8(Plus, { size: 21 })
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
};

// components/AutoField/fields/DefaultField/index.tsx
init_react_import();

// components/AutoField/lib/use-local-value.ts
init_react_import();
import { useCallback as useCallback2, useEffect as useEffect3, useState as useState5 } from "react";

// components/AutoField/lib/use-deep-field.ts
init_react_import();
var useDeepField = (path) => {
  return useFieldStore((s) => getDeep(s, path));
};

// components/AutoField/lib/use-is-focused.ts
init_react_import();
var useIsFocused = (path) => {
  return useAppStore((s) => s.state.ui.field.focus === path);
};

// components/AutoField/lib/use-local-value.ts
var useLocalValue = (path, onChange) => {
  const value = useDeepField(path);
  const isFocused = useIsFocused(path);
  const [localValue, setLocalValue] = useState5(value == null ? void 0 : value.toString());
  const onChangeLocal = useCallback2(
    (val) => {
      setLocalValue(val);
      onChange(val);
    },
    [onChange]
  );
  useEffect3(() => {
    if (!isFocused) {
      setLocalValue(value);
    }
  }, [isFocused, value]);
  return [localValue != null ? localValue : "", onChangeLocal];
};

// components/AutoField/fields/DefaultField/index.tsx
import { Fragment as Fragment3, jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
var getClassName5 = get_class_name_factory_default("Input", styles_module_default);
var DefaultField = ({
  field,
  onChange,
  readOnly,
  id,
  name = id,
  label,
  labelIcon,
  Label
}) => {
  const [localValue, onChangeLocal] = useLocalValue(name, onChange);
  return /* @__PURE__ */ jsx9(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsxs4(Fragment3, { children: [
        field.type === "text" && /* @__PURE__ */ jsx9(Type, { size: 16 }),
        field.type === "number" && /* @__PURE__ */ jsx9(Hash, { size: 16 })
      ] }),
      readOnly,
      children: /* @__PURE__ */ jsx9(
        "input",
        {
          className: getClassName5("input"),
          autoComplete: "off",
          type: field.type,
          title: label || name,
          name,
          value: localValue,
          onChange: (e) => {
            if (field.type === "number") {
              const numberValue = Number(e.currentTarget.value);
              if (typeof field.min !== "undefined" && numberValue < field.min) {
                return;
              }
              if (typeof field.max !== "undefined" && numberValue > field.max) {
                return;
              }
              onChangeLocal(numberValue);
            } else {
              onChangeLocal(e.currentTarget.value);
            }
          },
          readOnly,
          tabIndex: readOnly ? -1 : void 0,
          id,
          min: field.type === "number" ? field.min : void 0,
          max: field.type === "number" ? field.max : void 0,
          placeholder: field.type === "text" || field.type === "number" ? field.placeholder : void 0,
          step: field.type === "number" ? field.step : void 0
        }
      )
    }
  );
};

// components/AutoField/fields/ExternalField/index.tsx
init_react_import();
import { useEffect as useEffect6 } from "react";

// components/ExternalInput/index.tsx
init_react_import();
import {
  useMemo as useMemo4,
  useEffect as useEffect5,
  useState as useState7,
  useCallback as useCallback3,
  isValidElement
} from "react";

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/ExternalInput/styles.module.css#css-module
init_react_import();
var styles_module_default4 = { "ExternalInput-actions": "_ExternalInput-actions_1gpb4_1", "ExternalInput-button": "_ExternalInput-button_1gpb4_5", "ExternalInput--dataSelected": "_ExternalInput--dataSelected_1gpb4_24", "ExternalInput--readOnly": "_ExternalInput--readOnly_1gpb4_31", "ExternalInput-detachButton": "_ExternalInput-detachButton_1gpb4_35", "ExternalInput": "_ExternalInput_1gpb4_1", "ExternalInputModal": "_ExternalInputModal_1gpb4_79", "ExternalInputModal-grid": "_ExternalInputModal-grid_1gpb4_89", "ExternalInputModal--filtersToggled": "_ExternalInputModal--filtersToggled_1gpb4_100", "ExternalInputModal-filters": "_ExternalInputModal-filters_1gpb4_105", "ExternalInputModal-masthead": "_ExternalInputModal-masthead_1gpb4_124", "ExternalInputModal-tableWrapper": "_ExternalInputModal-tableWrapper_1gpb4_133", "ExternalInputModal-table": "_ExternalInputModal-table_1gpb4_133", "ExternalInputModal-thead": "_ExternalInputModal-thead_1gpb4_149", "ExternalInputModal-th": "_ExternalInputModal-th_1gpb4_149", "ExternalInputModal-td": "_ExternalInputModal-td_1gpb4_164", "ExternalInputModal-tr": "_ExternalInputModal-tr_1gpb4_169", "ExternalInputModal-tbody": "_ExternalInputModal-tbody_1gpb4_176", "ExternalInputModal--hasData": "_ExternalInputModal--hasData_1gpb4_202", "ExternalInputModal-loadingBanner": "_ExternalInputModal-loadingBanner_1gpb4_206", "ExternalInputModal--isLoading": "_ExternalInputModal--isLoading_1gpb4_223", "ExternalInputModal-searchForm": "_ExternalInputModal-searchForm_1gpb4_227", "ExternalInputModal-search": "_ExternalInputModal-search_1gpb4_227", "ExternalInputModal-searchIcon": "_ExternalInputModal-searchIcon_1gpb4_264", "ExternalInputModal-searchIconText": "_ExternalInputModal-searchIconText_1gpb4_289", "ExternalInputModal-searchInput": "_ExternalInputModal-searchInput_1gpb4_299", "ExternalInputModal-searchActions": "_ExternalInputModal-searchActions_1gpb4_313", "ExternalInputModal-searchActionIcon": "_ExternalInputModal-searchActionIcon_1gpb4_326", "ExternalInputModal-footerContainer": "_ExternalInputModal-footerContainer_1gpb4_330", "ExternalInputModal-footer": "_ExternalInputModal-footer_1gpb4_330", "ExternalInputModal-field": "_ExternalInputModal-field_1gpb4_343" };

// components/Modal/index.tsx
init_react_import();
import { useEffect as useEffect4, useState as useState6 } from "react";

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/Modal/styles.module.css#css-module
init_react_import();
var styles_module_default5 = { "Modal": "_Modal_b422s_1", "Modal--isOpen": "_Modal--isOpen_b422s_15", "Modal-inner": "_Modal-inner_b422s_19" };

// components/Modal/index.tsx
import { createPortal } from "react-dom";
import { jsx as jsx10 } from "react/jsx-runtime";
var getClassName6 = get_class_name_factory_default("Modal", styles_module_default5);
var Modal = ({
  children,
  onClose,
  isOpen
}) => {
  const [rootEl, setRootEl] = useState6(null);
  useEffect4(() => {
    setRootEl(document.getElementById("credbuild-portal-root"));
  }, []);
  if (!rootEl) {
    return /* @__PURE__ */ jsx10("div", {});
  }
  return createPortal(
    /* @__PURE__ */ jsx10("div", { className: getClassName6({ isOpen }), onClick: onClose, children: /* @__PURE__ */ jsx10(
      "div",
      {
        className: getClassName6("inner"),
        onClick: (e) => e.stopPropagation(),
        children
      }
    ) }),
    rootEl
  );
};

// components/Heading/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/Heading/styles.module.css#css-module
init_react_import();
var styles_module_default6 = { "Heading": "_Heading_1tpsl_1", "Heading--xxxxl": "_Heading--xxxxl_1tpsl_12", "Heading--xxxl": "_Heading--xxxl_1tpsl_18", "Heading--xxl": "_Heading--xxl_1tpsl_22", "Heading--xl": "_Heading--xl_1tpsl_26", "Heading--l": "_Heading--l_1tpsl_30", "Heading--m": "_Heading--m_1tpsl_34", "Heading--s": "_Heading--s_1tpsl_38", "Heading--xs": "_Heading--xs_1tpsl_42" };

// components/Heading/index.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var getClassName7 = get_class_name_factory_default("Heading", styles_module_default6);
var Heading = ({ children, rank, size = "m" }) => {
  const Tag = rank ? `h${rank}` : "span";
  return /* @__PURE__ */ jsx11(
    Tag,
    {
      className: getClassName7({
        [size]: true
      }),
      children
    }
  );
};

// components/Button/index.ts
init_react_import();

// components/ExternalInput/index.tsx
import { Fragment as Fragment4, jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
var getClassName8 = get_class_name_factory_default("ExternalInput", styles_module_default4);
var getClassNameModal = get_class_name_factory_default("ExternalInputModal", styles_module_default4);
var dataCache = {};
var ExternalInput = ({
  field,
  onChange,
  value = null,
  name,
  id,
  readOnly
}) => {
  var _a;
  const {
    mapProp = (val) => val,
    mapRow = (val) => val,
    filterFields
  } = field || {};
  const { enabled: shouldCacheData } = (_a = field.cache) != null ? _a : { enabled: true };
  const [data, setData] = useState7([]);
  const [isOpen, setOpen] = useState7(false);
  const [isLoading, setIsLoading] = useState7(true);
  const hasFilterFields = !!filterFields;
  const [filters, setFilters] = useState7(field.initialFilters || {});
  const [filtersToggled, setFiltersToggled] = useState7(hasFilterFields);
  const mappedData = useMemo4(() => {
    return data.map(mapRow);
  }, [data, mapRow]);
  const keys = useMemo4(() => {
    const validKeys = /* @__PURE__ */ new Set();
    for (const item of mappedData) {
      for (const key of Object.keys(item)) {
        if (typeof item[key] === "string" || typeof item[key] === "number" || isValidElement(item[key])) {
          validKeys.add(key);
        }
      }
    }
    return Array.from(validKeys);
  }, [mappedData]);
  const [searchQuery, setSearchQuery] = useState7(field.initialQuery || "");
  const search = useCallback3(
    (query, filters2) => __async(null, null, function* () {
      setIsLoading(true);
      const cacheKey = `${id}-${query}-${JSON.stringify(filters2)}`;
      let listData;
      if (shouldCacheData && dataCache[cacheKey]) {
        listData = dataCache[cacheKey];
      } else {
        listData = yield field.fetchList({ query, filters: filters2 });
      }
      if (listData) {
        setData(listData);
        setIsLoading(false);
        if (shouldCacheData) {
          dataCache[cacheKey] = listData;
        }
      }
    }),
    [id, field, shouldCacheData]
  );
  const Footer = useCallback3(
    (props) => field.renderFooter ? field.renderFooter(props) : /* @__PURE__ */ jsxs5("span", { className: getClassNameModal("footer"), children: [
      props.items.length,
      " result",
      props.items.length === 1 ? "" : "s"
    ] }),
    [field]
  );
  useEffect5(() => {
    search(searchQuery, filters);
  }, [search, searchQuery, filters]);
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      className: getClassName8({
        dataSelected: !!value,
        modalVisible: isOpen,
        readOnly
      }),
      id,
      children: [
        /* @__PURE__ */ jsxs5("div", { className: getClassName8("actions"), children: [
          /* @__PURE__ */ jsx12(
            "button",
            {
              type: "button",
              onClick: () => setOpen(true),
              className: getClassName8("button"),
              disabled: readOnly,
              children: value ? field.getItemSummary ? field.getItemSummary(value) : "External item" : /* @__PURE__ */ jsxs5(Fragment4, { children: [
                /* @__PURE__ */ jsx12(Link, { size: "16" }),
                /* @__PURE__ */ jsx12("span", { children: field.placeholder })
              ] })
            }
          ),
          value && /* @__PURE__ */ jsx12(
            "button",
            {
              type: "button",
              className: getClassName8("detachButton"),
              onClick: () => {
                onChange(null);
              },
              disabled: readOnly,
              children: /* @__PURE__ */ jsx12(LockOpen, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ jsx12(Modal, { onClose: () => setOpen(false), isOpen, children: /* @__PURE__ */ jsxs5(
          "form",
          {
            className: getClassNameModal({
              isLoading,
              loaded: !isLoading,
              hasData: mappedData.length > 0,
              filtersToggled
            }),
            onSubmit: (e) => {
              e.preventDefault();
              e.stopPropagation();
              search(searchQuery, filters);
            },
            children: [
              /* @__PURE__ */ jsx12("div", { className: getClassNameModal("masthead"), children: field.showSearch ? /* @__PURE__ */ jsxs5("div", { className: getClassNameModal("searchForm"), children: [
                /* @__PURE__ */ jsxs5("label", { className: getClassNameModal("search"), children: [
                  /* @__PURE__ */ jsx12("span", { className: getClassNameModal("searchIconText"), children: "Search" }),
                  /* @__PURE__ */ jsx12("div", { className: getClassNameModal("searchIcon"), children: /* @__PURE__ */ jsx12(Search, { size: "18" }) }),
                  /* @__PURE__ */ jsx12(
                    "input",
                    {
                      className: getClassNameModal("searchInput"),
                      name: "q",
                      type: "search",
                      placeholder: field.placeholder,
                      onChange: (e) => {
                        setSearchQuery(e.currentTarget.value);
                      },
                      autoComplete: "off",
                      value: searchQuery
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs5("div", { className: getClassNameModal("searchActions"), children: [
                  /* @__PURE__ */ jsx12(Button, { type: "submit", loading: isLoading, fullWidth: true, children: "Search" }),
                  hasFilterFields && /* @__PURE__ */ jsx12("div", { className: getClassNameModal("searchActionIcon"), children: /* @__PURE__ */ jsx12(
                    IconButton,
                    {
                      type: "button",
                      title: "Toggle filters",
                      onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setFiltersToggled(!filtersToggled);
                      },
                      children: /* @__PURE__ */ jsx12(SlidersHorizontal, { size: 20 })
                    }
                  ) })
                ] })
              ] }) : /* @__PURE__ */ jsx12(Heading, { rank: "2", size: "xs", children: field.placeholder || "Select data" }) }),
              /* @__PURE__ */ jsxs5("div", { className: getClassNameModal("grid"), children: [
                hasFilterFields && /* @__PURE__ */ jsx12("div", { className: getClassNameModal("filters"), children: hasFilterFields && Object.keys(filterFields).map((fieldName) => {
                  const filterField = filterFields[fieldName];
                  return /* @__PURE__ */ jsx12(
                    "div",
                    {
                      className: getClassNameModal("field"),
                      children: /* @__PURE__ */ jsx12(FieldLabel, { label: filterField.label || fieldName, children: /* @__PURE__ */ jsx12(
                        AutoField,
                        {
                          field: filterField,
                          id: `external_field_${fieldName}_filter`,
                          value: filters[fieldName],
                          onChange: (value2) => {
                            setFilters((filters2) => {
                              const newFilters = __spreadProps(__spreadValues({}, filters2), {
                                [fieldName]: value2
                              });
                              search(searchQuery, newFilters);
                              return newFilters;
                            });
                          }
                        }
                      ) })
                    },
                    fieldName
                  );
                }) }),
                /* @__PURE__ */ jsxs5("div", { className: getClassNameModal("tableWrapper"), children: [
                  /* @__PURE__ */ jsxs5("table", { className: getClassNameModal("table"), children: [
                    /* @__PURE__ */ jsx12("thead", { className: getClassNameModal("thead"), children: /* @__PURE__ */ jsx12("tr", { className: getClassNameModal("tr"), children: keys.map((key) => /* @__PURE__ */ jsx12(
                      "th",
                      {
                        className: getClassNameModal("th"),
                        style: { textAlign: "left" },
                        children: key
                      },
                      key
                    )) }) }),
                    /* @__PURE__ */ jsx12("tbody", { className: getClassNameModal("tbody"), children: mappedData.map((item, i) => {
                      return /* @__PURE__ */ jsx12(
                        "tr",
                        {
                          style: { whiteSpace: "nowrap" },
                          className: getClassNameModal("tr"),
                          onClick: () => {
                            onChange(mapProp(data[i]));
                            setOpen(false);
                          },
                          children: keys.map((key) => /* @__PURE__ */ jsx12("td", { className: getClassNameModal("td"), children: item[key] }, key))
                        },
                        i
                      );
                    }) })
                  ] }),
                  /* @__PURE__ */ jsx12("div", { className: getClassNameModal("loadingBanner"), children: /* @__PURE__ */ jsx12(Loader, { size: 24 }) })
                ] })
              ] }),
              /* @__PURE__ */ jsx12("div", { className: getClassNameModal("footerContainer"), children: /* @__PURE__ */ jsx12(Footer, { items: mappedData }) })
            ]
          }
        ) })
      ]
    }
  );
};

// components/AutoField/fields/ExternalField/index.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var ExternalField = ({
  field,
  onChange,
  id,
  name = id,
  label,
  labelIcon,
  Label,
  readOnly
}) => {
  var _a, _b, _c;
  const value = useDeepField(name);
  const validField = field;
  const deprecatedField = field;
  useEffect6(() => {
    if (deprecatedField.adaptor) {
      console.error(
        "Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release."
      );
    }
  }, [deprecatedField.adaptor]);
  if (field.type !== "external") {
    return null;
  }
  return /* @__PURE__ */ jsx13(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsx13(Link, { size: 16 }),
      el: "div",
      children: /* @__PURE__ */ jsx13(
        ExternalInput,
        {
          name,
          field: __spreadProps(__spreadValues({}, validField), {
            // DEPRECATED
            placeholder: ((_a = deprecatedField.adaptor) == null ? void 0 : _a.name) ? `Select from ${deprecatedField.adaptor.name}` : validField.placeholder || "Select data",
            mapProp: ((_b = deprecatedField.adaptor) == null ? void 0 : _b.mapProp) || validField.mapProp,
            mapRow: validField.mapRow,
            fetchList: ((_c = deprecatedField.adaptor) == null ? void 0 : _c.fetchList) ? () => __async(null, null, function* () {
              return yield deprecatedField.adaptor.fetchList(
                deprecatedField.adaptorParams
              );
            }) : validField.fetchList
          }),
          onChange,
          value,
          id,
          readOnly
        }
      )
    }
  );
};

// components/AutoField/fields/RadioField/index.tsx
init_react_import();
import { jsx as jsx14, jsxs as jsxs6 } from "react/jsx-runtime";
var getClassName9 = get_class_name_factory_default("Input", styles_module_default);
var RadioField = ({
  field,
  onChange,
  readOnly,
  id,
  name = id,
  label,
  labelIcon,
  Label
}) => {
  const value = useDeepField(name);
  if (field.type !== "radio" || !field.options) {
    return null;
  }
  return /* @__PURE__ */ jsx14(
    Label,
    {
      icon: labelIcon || /* @__PURE__ */ jsx14(CircleCheckBig, { size: 16 }),
      label: label || name,
      readOnly,
      el: "div",
      children: /* @__PURE__ */ jsx14("div", { className: getClassName9("radioGroupItems"), id, children: field.options.map((option) => {
        var _a;
        return /* @__PURE__ */ jsxs6(
          "label",
          {
            className: getClassName9("radio"),
            children: [
              /* @__PURE__ */ jsx14(
                "input",
                {
                  type: "radio",
                  className: getClassName9("radioInput"),
                  value: JSON.stringify({ value: option.value }),
                  name,
                  onChange: (e) => {
                    onChange(JSON.parse(e.target.value).value);
                  },
                  disabled: readOnly,
                  checked: value === option.value
                }
              ),
              /* @__PURE__ */ jsx14("div", { className: getClassName9("radioInner"), children: option.label || ((_a = option.value) == null ? void 0 : _a.toString()) })
            ]
          },
          option.label + option.value
        );
      }) })
    }
  );
};

// components/AutoField/fields/SelectField/index.tsx
init_react_import();
import { jsx as jsx15 } from "react/jsx-runtime";
var getClassName10 = get_class_name_factory_default("Input", styles_module_default);
var SelectField = ({
  field,
  onChange,
  label,
  labelIcon,
  Label,
  id,
  name = id,
  readOnly
}) => {
  const value = useDeepField(name);
  if (field.type !== "select" || !field.options) {
    return null;
  }
  return /* @__PURE__ */ jsx15(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsx15(ChevronDown, { size: 16 }),
      readOnly,
      children: /* @__PURE__ */ jsx15(
        "select",
        {
          id,
          title: label || name,
          className: getClassName10("input"),
          disabled: readOnly,
          onChange: (e) => {
            onChange(JSON.parse(e.target.value).value);
          },
          value: JSON.stringify({ value }),
          children: field.options.map((option) => /* @__PURE__ */ jsx15(
            "option",
            {
              label: option.label,
              value: JSON.stringify({ value: option.value })
            },
            option.label + JSON.stringify(option.value)
          ))
        }
      )
    }
  );
};

// components/AutoField/fields/TextareaField/index.tsx
init_react_import();
import { jsx as jsx16 } from "react/jsx-runtime";
var getClassName11 = get_class_name_factory_default("Input", styles_module_default);
var TextareaField = ({
  field,
  onChange,
  readOnly,
  id,
  name = id,
  label,
  labelIcon,
  Label
}) => {
  const [localValue, onChangeLocal] = useLocalValue(name, onChange);
  return /* @__PURE__ */ jsx16(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsx16(Type, { size: 16 }),
      readOnly,
      children: /* @__PURE__ */ jsx16(
        "textarea",
        {
          id,
          className: getClassName11("input"),
          autoComplete: "off",
          name,
          value: typeof localValue === "undefined" ? "" : localValue,
          onChange: (e) => onChangeLocal(e.currentTarget.value),
          readOnly,
          tabIndex: readOnly ? -1 : void 0,
          rows: 5,
          placeholder: field.type === "textarea" ? field.placeholder : void 0
        }
      )
    }
  );
};

// components/AutoField/fields/RichtextField/index.tsx
init_react_import();
import { lazy, Suspense } from "react";

// components/RichTextEditor/components/EditorFallback.tsx
init_react_import();
import { memo as memo3 } from "react";
import { jsx as jsx17 } from "react/jsx-runtime";
var EditorFallback = memo3((props) => {
  var _a;
  return /* @__PURE__ */ jsx17(
    EditorInner,
    __spreadProps(__spreadValues({}, props), {
      editor: null,
      menu: /* @__PURE__ */ jsx17(
        LoadedRichTextMenuInner,
        {
          field: props.field,
          editor: null,
          editorState: null,
          readOnly: (_a = props.readOnly) != null ? _a : false
        }
      ),
      children: /* @__PURE__ */ jsx17(
        "div",
        {
          className: "rich-text",
          dangerouslySetInnerHTML: { __html: props.content },
          contentEditable: true
        }
      )
    })
  );
});
EditorFallback.displayName = "EditorFallback";

// components/AutoField/fields/RichtextField/index.tsx
import { Fragment as Fragment5, jsx as jsx18 } from "react/jsx-runtime";
var Editor = lazy(
  () => import("./Editor-VRW6SBNE.mjs").then((m) => ({
    default: m.Editor
  }))
);
var RichtextField = ({
  onChange,
  readOnly = false,
  id,
  name = id,
  label,
  labelIcon,
  Label,
  field
}) => {
  const content = useDeepField(name);
  const editorProps = {
    onChange,
    content,
    readOnly,
    field,
    id,
    name
  };
  return /* @__PURE__ */ jsx18(Fragment5, { children: /* @__PURE__ */ jsx18(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsx18(Type, { size: 16 }),
      readOnly,
      el: "div",
      children: /* @__PURE__ */ jsx18(Suspense, { fallback: /* @__PURE__ */ jsx18(EditorFallback, __spreadValues({}, editorProps)), children: /* @__PURE__ */ jsx18(Editor, __spreadValues({}, editorProps)) })
    }
  ) });
};

// components/AutoField/fields/ObjectField/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/AutoField/fields/ObjectField/styles.module.css#css-module
init_react_import();
var styles_module_default7 = { "ObjectField": "_ObjectField_b2xjm_5", "ObjectField-fieldset": "_ObjectField-fieldset_b2xjm_13" };

// components/AutoField/fields/ObjectField/index.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
var getClassName12 = get_class_name_factory_default("ObjectField", styles_module_default7);
var ObjectField = ({
  field,
  onChange,
  id,
  name = id,
  label,
  labelIcon,
  Label,
  readOnly
}) => {
  const { localName = name } = useNestedFieldContext();
  const fieldStore = useFieldStoreApi();
  const canEdit = useAppStore(
    (s) => s.permissions.getPermissions({ item: s.selectedItem }).edit
  );
  const getValue = () => {
    var _a;
    return (_a = getDeep(fieldStore.getState(), name)) != null ? _a : {};
  };
  if (field.type !== "object" || !field.objectFields) {
    return null;
  }
  return /* @__PURE__ */ jsx19(
    Label,
    {
      label: label || name,
      icon: labelIcon || /* @__PURE__ */ jsx19(EllipsisVertical, { size: 16 }),
      el: "div",
      readOnly,
      children: /* @__PURE__ */ jsx19("div", { className: getClassName12(), children: /* @__PURE__ */ jsx19("fieldset", { className: getClassName12("fieldset"), children: Object.keys(field.objectFields).map((subName) => {
        const subField = field.objectFields[subName];
        const subPath = `${localName}.${subName}`;
        return /* @__PURE__ */ jsx19(
          SubField,
          {
            id: `${id}_${subName}`,
            name,
            subName,
            localName,
            field: subField,
            forceReadOnly: !canEdit,
            onChange: (subValue, ui, subName2) => {
              const value = getValue();
              if (value[subName2] === subValue) {
                return;
              }
              onChange(__spreadProps(__spreadValues({}, value), { [subName2]: subValue }), ui);
            }
          },
          subPath
        );
      }) }) })
    }
  );
};

// lib/use-safe-id.ts
init_react_import();
import React2, { useState as useState8 } from "react";
var useSafeId = () => {
  if (typeof React2.useId !== "undefined") {
    return React2.useId();
  }
  const [id] = useState8(generateId());
  return id;
};

// components/AutoField/index.tsx
import { useShallow as useShallow3 } from "zustand/react/shallow";
import { jsx as jsx20 } from "react/jsx-runtime";
var getClassName13 = get_class_name_factory_default("Input", styles_module_default);
var getClassNameWrapper = get_class_name_factory_default("InputWrapper", styles_module_default);
var defaultFields = {
  array: ArrayField,
  external: ExternalField,
  object: ObjectField,
  select: SelectField,
  textarea: TextareaField,
  radio: RadioField,
  text: DefaultField,
  number: DefaultField,
  richtext: RichtextField
};
function AutoFieldInternal(props) {
  var _a;
  const dispatch = useAppStore((s) => s.dispatch);
  const overrides = useAppStore((s) => s.overrides);
  const readOnly = useAppStore(useShallow3((s) => {
    var _a2;
    return (_a2 = s.selectedItem) == null ? void 0 : _a2.readOnly;
  }));
  const nestedFieldContext = useContext4(NestedFieldContext);
  const { id, Label = FieldLabelInternal } = props;
  const field = props.field;
  const label = field.label;
  const labelIcon = field.labelIcon;
  const defaultId = useSafeId();
  const resolvedId = id || defaultId;
  const render = useMemo5(
    () => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      return __spreadProps(__spreadValues({}, overrides.fieldTypes), {
        custom: (_a2 = overrides.fieldTypes) == null ? void 0 : _a2.custom,
        array: ((_b = overrides.fieldTypes) == null ? void 0 : _b.array) || defaultFields.array,
        external: ((_c = overrides.fieldTypes) == null ? void 0 : _c.external) || defaultFields.external,
        object: ((_d = overrides.fieldTypes) == null ? void 0 : _d.object) || defaultFields.object,
        select: ((_e = overrides.fieldTypes) == null ? void 0 : _e.select) || defaultFields.select,
        textarea: ((_f = overrides.fieldTypes) == null ? void 0 : _f.textarea) || defaultFields.textarea,
        radio: ((_g = overrides.fieldTypes) == null ? void 0 : _g.radio) || defaultFields.radio,
        text: ((_h = overrides.fieldTypes) == null ? void 0 : _h.text) || defaultFields.text,
        number: ((_i = overrides.fieldTypes) == null ? void 0 : _i.number) || defaultFields.number,
        richtext: ((_j = overrides.fieldTypes) == null ? void 0 : _j.richtext) || defaultFields.richtext
      });
    },
    [overrides]
  );
  const fieldValue = useFieldStore((s) => {
    var _a2, _b;
    if (field.type === "custom" || ((_a2 = overrides.fieldTypes) == null ? void 0 : _a2[field.type])) {
      return getDeep(s, (_b = props.name) != null ? _b : resolvedId);
    }
  });
  const mergedProps = useMemo5(
    () => __spreadProps(__spreadValues({}, props), {
      field,
      label,
      labelIcon,
      Label,
      id: resolvedId,
      value: fieldValue
    }),
    [props, field, label, labelIcon, Label, resolvedId, fieldValue]
  );
  const onFocus = useCallback4(
    (e) => {
      if (mergedProps.name && (e.target.nodeName === "INPUT" || e.target.nodeName === "TEXTAREA")) {
        e.stopPropagation();
        dispatch({
          type: "setUi",
          ui: {
            field: { focus: mergedProps.name }
          }
        });
      }
    },
    [dispatch, mergedProps.name]
  );
  const onBlur = useCallback4((e) => {
    if ("name" in e.target) {
      dispatch({
        type: "setUi",
        ui: {
          field: { focus: null }
        }
      });
    }
  }, [dispatch]);
  let Children = useMemo5(() => {
    if (field.type !== "custom" && field.type !== "slot") {
      return defaultFields[field.type];
    }
    return (_props) => null;
  }, [field.type]);
  const fieldKey = field.type === "custom" ? field.key : void 0;
  const fieldRender = field.render;
  let FieldComponent = useMemo5(() => {
    if (field.type === "custom" && !render[field.type]) {
      if (!fieldRender) {
        return null;
      }
      return fieldRender;
    } else if (field.type !== "slot") {
      return render[field.type];
    }
  }, [field.type, render, fieldRender]);
  const { visible = true } = props.field;
  if (!visible) {
    return null;
  }
  if (field.type === "slot") {
    return null;
  }
  if (!FieldComponent) {
    throw new Error(`Field type for ${field.type} did not exist.`);
  }
  return /* @__PURE__ */ jsx20(
    NestedFieldContext.Provider,
    {
      value: {
        readOnlyFields: nestedFieldContext.readOnlyFields || readOnly || {},
        localName: (_a = nestedFieldContext.localName) != null ? _a : mergedProps.name
      },
      children: /* @__PURE__ */ jsx20(
        "div",
        {
          className: getClassNameWrapper(),
          onFocus,
          onBlur,
          onClick: (e) => {
            e.stopPropagation();
          },
          children: /* @__PURE__ */ jsx20(FieldComponent, __spreadProps(__spreadValues({}, mergedProps), { children: /* @__PURE__ */ jsx20(Children, __spreadValues({}, mergedProps)) }))
        }
      )
    }
  );
}
function AutoFieldPrivate(props) {
  return /* @__PURE__ */ jsx20(AutoFieldInternal, __spreadValues({}, props));
}
function AutoFieldPublicInternal(_a) {
  var _b = _a, { value } = _b, props = __objRest(_b, ["value"]);
  const DefaultLabel = useMemo5(() => {
    const DefaultLabel2 = (labelProps) => /* @__PURE__ */ jsx20(
      "div",
      __spreadProps(__spreadValues({}, labelProps), {
        className: getClassName13({ readOnly: props.readOnly })
      })
    );
    return DefaultLabel2;
  }, [props.readOnly]);
  const fieldStore = useFieldStoreApi();
  const { id: propsId, onChange: propsOnChange } = props;
  const onChange = useCallback4(
    (value2) => {
      if (!propsId) return;
      fieldStore.setState({ [propsId]: value2 });
      propsOnChange(value2);
    },
    [fieldStore, propsOnChange, propsId]
  );
  useEffect7(() => {
    if (!props.id) return;
    fieldStore.setState({ [props.id]: value });
  }, [props.id, value, fieldStore]);
  return /* @__PURE__ */ jsx20(
    AutoFieldInternal,
    __spreadProps(__spreadValues({}, props), {
      onChange,
      Label: DefaultLabel
    })
  );
}
function AutoField(props) {
  const id = useSafeId();
  if (props.field.type === "slot") {
    return null;
  }
  return /* @__PURE__ */ jsx20(fieldContextStore.Provider, { value: { [id]: props.value }, children: /* @__PURE__ */ jsx20(AutoFieldPublicInternal, __spreadProps(__spreadValues({}, props), { id })) });
}

// components/Render/index.tsx
init_react_import();

// components/DropZone/index.tsx
init_react_import();
import {
  forwardRef,
  memo as memo7,
  useCallback as useCallback15,
  useContext as useContext9,
  useEffect as useEffect16,
  useMemo as useMemo12,
  useRef as useRef9
} from "react";

// components/DraggableComponent/index.tsx
init_react_import();
import {
  useCallback as useCallback7,
  useContext as useContext5,
  useEffect as useEffect8,
  useLayoutEffect,
  useMemo as useMemo7,
  useRef as useRef2,
  useState as useState9,
  useTransition
} from "react";

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/DraggableComponent/styles.module.css#css-module
init_react_import();
var styles_module_default8 = { "DraggableComponent": "_DraggableComponent_yrtpz_1", "DraggableComponent-overlayWrapper": "_DraggableComponent-overlayWrapper_yrtpz_12", "DraggableComponent-overlay": "_DraggableComponent-overlay_yrtpz_12", "DraggableComponent-loadingOverlay": "_DraggableComponent-loadingOverlay_yrtpz_34", "DraggableComponent--hover": "_DraggableComponent--hover_yrtpz_50", "DraggableComponent--isSelected": "_DraggableComponent--isSelected_yrtpz_57", "DraggableComponent-actionsOverlay": "_DraggableComponent-actionsOverlay_yrtpz_71", "DraggableComponent-actions": "_DraggableComponent-actions_yrtpz_71" };

// components/DraggableComponent/index.tsx
import { createPortal as createPortal2 } from "react-dom";

// lib/get-deep-scroll-position.ts
init_react_import();
function getDeepScrollPosition(element) {
  let totalScroll = {
    x: 0,
    y: 0
  };
  let current = element;
  while (current && current !== document.documentElement) {
    const parent = current.parentElement;
    if (parent) {
      totalScroll.x += parent.scrollLeft;
      totalScroll.y += parent.scrollTop;
    }
    current = parent;
  }
  return totalScroll;
}

// components/DropZone/context.tsx
init_react_import();
import {
  createContext as createContext3,
  useCallback as useCallback5,
  useMemo as useMemo6
} from "react";
import { createStore as createStore3 } from "zustand";
import { Fragment as Fragment6, jsx as jsx21 } from "react/jsx-runtime";
var dropZoneContext = createContext3(null);
var ZoneStoreContext = createContext3(
  createStore3(() => ({
    zoneDepthIndex: {},
    nextZoneDepthIndex: {},
    areaDepthIndex: {},
    nextAreaDepthIndex: {},
    draggedItem: null,
    previewIndex: {},
    enabledIndex: {},
    hoveringComponent: null,
    registerRootVirtualizer: () => {
    },
    unregisterRootVirtualizer: () => {
    },
    scrollToComponent: () => false
  }))
);
var ZoneStoreProvider = ({
  children,
  store
}) => {
  return /* @__PURE__ */ jsx21(ZoneStoreContext.Provider, { value: store, children });
};
var DropZoneProvider = ({
  children,
  value
}) => {
  const dispatch = useAppStore((s) => s.dispatch);
  const registerZone = useCallback5(
    (zoneCompound) => {
      dispatch({
        type: "registerZone",
        zone: zoneCompound
      });
    },
    [dispatch]
  );
  const memoValue = useMemo6(
    () => __spreadValues({
      registerZone
    }, value),
    [value, registerZone]
  );
  return /* @__PURE__ */ jsx21(Fragment6, { children: memoValue && /* @__PURE__ */ jsx21(dropZoneContext.Provider, { value: memoValue, children }) });
};

// components/DraggableComponent/index.tsx
import { useShallow as useShallow4 } from "zustand/react/shallow";
import { useSortable as useSortable2 } from "@dnd-kit/react/sortable";

// lib/dnd/use-on-drag-finished.ts
init_react_import();
import { useCallback as useCallback6 } from "react";
var useOnDragFinished = (cb, _deps = []) => {
  const appStore = useAppStoreApi();
  return useCallback6(() => {
    let dispose = () => {
    };
    const processDragging = (isDragging2) => {
      if (isDragging2) {
        cb(false);
      } else {
        setTimeout(() => {
          cb(true);
        }, 0);
        if (dispose) dispose();
      }
    };
    const isDragging = appStore.getState().state.ui.isDragging;
    processDragging(isDragging);
    if (isDragging) {
      dispose = appStore.subscribe(
        (s) => s.state.ui.isDragging,
        (isDragging2) => {
          processDragging(isDragging2);
        }
      );
    }
    return dispose;
  }, [appStore, cb]);
};

// lib/assign-refs.ts
init_react_import();
function assignRef(ref, node) {
  if (typeof ref === "function") {
    ref(node);
  } else if (ref && typeof ref === "object" && "current" in ref) {
    ref.current = node;
  }
}
function assignRefs(refs, node) {
  refs.forEach((ref) => {
    assignRef(ref, node);
  });
}

// components/DraggableComponent/index.tsx
import { Fragment as Fragment7, jsx as jsx22, jsxs as jsxs7 } from "react/jsx-runtime";
var getClassName14 = get_class_name_factory_default("DraggableComponent", styles_module_default8);
var DEBUG2 = false;
var MEASURE_EVERY_MS = 100;
var space = 8;
var actionsOverlayTop = space * 6.5;
var actionsTop = -(actionsOverlayTop - 8);
var actionsSide = space;
var DefaultActionBar = ({
  label,
  children,
  parentAction
}) => /* @__PURE__ */ jsxs7(ActionBar, { children: [
  /* @__PURE__ */ jsxs7(ActionBar.Group, { children: [
    parentAction,
    label && /* @__PURE__ */ jsx22(ActionBar.Label, { label })
  ] }),
  /* @__PURE__ */ jsx22(ActionBar.Group, { children })
] });
var DefaultOverlay = ({
  children
}) => /* @__PURE__ */ jsx22(Fragment7, { children });
var DraggableComponent = ({
  children,
  depth,
  componentType,
  id,
  index,
  zoneCompound,
  isLoading = false,
  isSelected = false,
  debug,
  label,
  autoDragAxis,
  userDragAxis,
  inDroppableZone = true,
  itemRef
}) => {
  const zoom = useAppStore(
    (s) => {
      var _a;
      return ((_a = s.selectedItem) == null ? void 0 : _a.props.id) === id ? s.zoomConfig.zoom : 1;
    }
  );
  const _experimentalFullScreenCanvas = useAppStore(
    (s) => s._experimentalFullScreenCanvas
  );
  const overrides = useAppStore((s) => s.overrides);
  const dispatch = useAppStore((s) => s.dispatch);
  const iframe = useAppStore((s) => s.iframe);
  const lastMeasureRef = useRef2(0);
  const ctx = useContext5(dropZoneContext);
  const [localZones, setLocalZones] = useState9({});
  const registerLocalZone = useCallback7(
    (zoneCompound2, active) => {
      var _a;
      (_a = ctx == null ? void 0 : ctx.registerLocalZone) == null ? void 0 : _a.call(ctx, zoneCompound2, active);
      setLocalZones((obj) => __spreadProps(__spreadValues({}, obj), {
        [zoneCompound2]: active
      }));
    },
    [setLocalZones, ctx]
  );
  const unregisterLocalZone = useCallback7(
    (zoneCompound2) => {
      var _a;
      (_a = ctx == null ? void 0 : ctx.unregisterLocalZone) == null ? void 0 : _a.call(ctx, zoneCompound2);
      setLocalZones((obj) => {
        const newLocalZones = __spreadValues({}, obj);
        delete newLocalZones[zoneCompound2];
        return newLocalZones;
      });
    },
    [setLocalZones, ctx]
  );
  const containsActiveZone = Object.values(localZones).filter(Boolean).length > 0;
  const path = useAppStore(useShallow4((s) => {
    var _a;
    return (_a = s.state.indexes.nodes[id]) == null ? void 0 : _a.path;
  }));
  const permissions = useAppStore(
    useShallow4((s) => {
      const item = getItem({ index, zone: zoneCompound }, s.state);
      return s.permissions.getPermissions({ item });
    })
  );
  const zoneStore = useContext5(ZoneStoreContext);
  const [dragAxis, setDragAxis] = useState9(userDragAxis || autoDragAxis);
  const dynamicCollisionDetector = useMemo7(
    () => createDynamicCollisionDetector(dragAxis),
    [dragAxis]
  );
  const {
    ref: sortableRef,
    isDragging: thisIsDragging,
    sortable
  } = useSortable2({
    id,
    index,
    group: zoneCompound,
    type: "component",
    data: {
      areaId: ctx == null ? void 0 : ctx.areaId,
      zone: zoneCompound,
      index,
      componentType,
      containsActiveZone,
      depth,
      path: path || [],
      inDroppableZone
    },
    collisionPriority: depth,
    collisionDetector: dynamicCollisionDetector,
    // "Out of the way" transition from react-beautiful-dnd
    transition: {
      duration: 200,
      easing: "cubic-bezier(0.2, 0, 0, 1)"
    },
    feedback: "clone"
  });
  useEffect8(() => {
    const isEnabled = zoneStore.getState().enabledIndex[zoneCompound];
    sortable.droppable.disabled = !isEnabled;
    sortable.draggable.disabled = !permissions.drag;
    const cleanup = zoneStore.subscribe((s) => {
      sortable.droppable.disabled = !s.enabledIndex[zoneCompound];
    });
    if (ref.current && !permissions.drag) {
      ref.current.setAttribute("data-credbuild-disabled", "");
      return () => {
        var _a;
        (_a = ref.current) == null ? void 0 : _a.removeAttribute("data-credbuild-disabled");
        cleanup();
      };
    }
    return cleanup;
  }, [permissions.drag, zoneCompound, sortable.draggable, sortable.droppable, zoneStore]);
  const [, setRerender] = useState9(0);
  const ref = useRef2(null);
  const refSetter = useCallback7(
    (el) => {
      sortableRef(el);
      if (ref.current !== el) {
        ref.current = el;
        setRerender((update) => update + 1);
        if (itemRef) {
          assignRefs([itemRef], el);
        }
      }
    },
    [itemRef, sortableRef]
  );
  const [portalEl, setPortalEl] = useState9();
  useEffect8(() => {
    var _a, _b, _c;
    setPortalEl(
      iframe.enabled ? (_a = ref.current) == null ? void 0 : _a.ownerDocument.body : (_c = (_b = ref.current) == null ? void 0 : _b.closest("[data-credbuild-preview]")) != null ? _c : document.body
    );
  }, [iframe.enabled]);
  const getStyle = useCallback7(() => {
    var _a, _b;
    if (!ref.current) return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const portalContainerEl = iframe.enabled ? null : el.closest("[data-credbuild-preview]");
    const targetIsFixed = (() => {
      let node = el;
      while (node && node !== document.documentElement) {
        if (getComputedStyle(node).position === "fixed") {
          return true;
        }
        node = node.parentElement;
      }
      return false;
    })();
    const portalContainerRect = portalContainerEl == null ? void 0 : portalContainerEl.getBoundingClientRect();
    const portalScroll = portalContainerEl ? getDeepScrollPosition(portalContainerEl) : { x: 0, y: 0 };
    const deepScrollPosition = targetIsFixed ? { x: 0, y: 0 } : getDeepScrollPosition(el);
    const scroll = targetIsFixed ? { x: 0, y: 0 } : {
      x: deepScrollPosition.x - portalScroll.x - ((_a = portalContainerRect == null ? void 0 : portalContainerRect.left) != null ? _a : 0),
      y: deepScrollPosition.y - portalScroll.y - ((_b = portalContainerRect == null ? void 0 : portalContainerRect.top) != null ? _b : 0)
    };
    const style2 = {
      left: `${rect.left + scroll.x}px`,
      top: `${rect.top + scroll.y}px`,
      height: `${rect.height}px`,
      width: `${rect.width}px`,
      position: targetIsFixed ? "fixed" : void 0
    };
    return style2;
  }, [iframe.enabled]);
  const [style, setStyle] = useState9();
  const lastRectRef = useRef2(null);
  const syncRafRef = useRef2(null);
  const sync = useCallback7(() => {
    setStyle(getStyle());
    if (itemRef) {
      assignRefs([itemRef], ref.current);
    }
  }, [getStyle, itemRef]);
  const scheduleSync = useCallback7(() => {
    if (syncRafRef.current != null) return;
    syncRafRef.current = requestAnimationFrame(() => {
      syncRafRef.current = null;
      sync();
    });
  }, [sync]);
  useEffect8(() => {
    return () => {
      if (syncRafRef.current != null) {
        cancelAnimationFrame(syncRafRef.current);
        syncRafRef.current = null;
      }
    };
  }, []);
  useEffect8(() => {
    if (ref.current) {
      const observer = new ResizeObserver(() => {
        scheduleSync();
      });
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [scheduleSync, itemRef]);
  const registerNode = useAppStore((s) => s.nodes.registerNode);
  const unregisterNode = useAppStore((s) => s.nodes.unregisterNode);
  const hideOverlay = useCallback7(() => {
    setIsVisible(false);
  }, []);
  const showOverlay = useCallback7(() => {
    setIsVisible(true);
  }, []);
  const nodeHandleRef = useRef2({
    sync: () => null,
    hideOverlay: () => null,
    showOverlay: () => null
  });
  useLayoutEffect(() => {
    nodeHandleRef.current.sync = sync;
    nodeHandleRef.current.hideOverlay = hideOverlay;
    nodeHandleRef.current.showOverlay = showOverlay;
  }, [hideOverlay, showOverlay, sync]);
  useEffect8(() => {
    registerNode(id, nodeHandleRef.current);
    return () => {
      unregisterNode(id);
    };
  }, [id, registerNode, unregisterNode]);
  const CustomActionBar = useMemo7(
    () => overrides.actionBar || DefaultActionBar,
    [overrides.actionBar]
  );
  const CustomOverlay = useMemo7(
    () => overrides.componentOverlay || DefaultOverlay,
    [overrides.componentOverlay]
  );
  const onClick = useCallback7(
    (e) => {
      const userIsDragging = !!zoneStore.getState().draggedItem;
      if (userIsDragging) {
        return;
      }
      const el = e.target;
      if (!el.closest("[data-credbuild-overlay-portal]")) {
        e.stopPropagation();
      }
      if (_experimentalFullScreenCanvas) {
        dispatch({
          type: "setUi",
          ui: {
            itemSelector: isSelected ? null : { index, zone: zoneCompound }
          }
        });
      } else {
        dispatch({
          type: "setUi",
          ui: {
            itemSelector: { index, zone: zoneCompound }
          }
        });
      }
    },
    [index, zoneCompound, isSelected, _experimentalFullScreenCanvas, dispatch, zoneStore]
  );
  const appStore = useAppStoreApi();
  const onSelectParent = useCallback7(() => {
    const { nodes, zones } = appStore.getState().state.indexes;
    const node = nodes[id];
    const parentNode = (node == null ? void 0 : node.parentId) ? nodes[node == null ? void 0 : node.parentId] : null;
    if (!parentNode || !node.parentId) {
      return;
    }
    const parentZoneCompound = `${parentNode.parentId}:${parentNode.zone}`;
    const parentIndex = zones[parentZoneCompound].contentIds.indexOf(
      node.parentId
    );
    dispatch({
      type: "setUi",
      ui: {
        itemSelector: {
          zone: parentZoneCompound,
          index: parentIndex
        }
      }
    });
  }, [appStore, dispatch, id]);
  const onDuplicate = useCallback7(() => {
    dispatch({
      type: "duplicate",
      sourceIndex: index,
      sourceZone: zoneCompound
    });
  }, [index, zoneCompound, dispatch]);
  const onDelete = useCallback7(() => {
    dispatch({
      type: "remove",
      index,
      zone: zoneCompound
    });
  }, [index, zoneCompound, dispatch]);
  const [hover, setHover] = useState9(false);
  const indicativeHover = useContextStore(
    ZoneStoreContext,
    (s) => s.hoveringComponent === id
  );
  useEffect8(() => {
    if (!ref.current) {
      return;
    }
    const el = ref.current;
    const _onMouseOver = (e) => {
      const userIsDragging = !!zoneStore.getState().draggedItem;
      if (userIsDragging) {
        if (containsActiveZone) {
          setHover(true);
        } else {
          setHover(false);
        }
      } else {
        setHover(true);
      }
      e.stopPropagation();
    };
    const _onMouseOut = (e) => {
      e.stopPropagation();
      setHover(false);
    };
    el.setAttribute("data-credbuild-component", id);
    el.setAttribute("data-credbuild-dnd", id);
    el.style.position = "relative";
    el.addEventListener("click", onClick);
    el.addEventListener("mouseover", _onMouseOver);
    el.addEventListener("mouseout", _onMouseOut);
    return () => {
      el.removeAttribute("data-credbuild-component");
      el.removeAttribute("data-credbuild-dnd");
      el.removeEventListener("click", onClick);
      el.removeEventListener("mouseover", _onMouseOver);
      el.removeEventListener("mouseout", _onMouseOut);
    };
  }, [
    ref,
    // Remount attributes if the element changes
    onClick,
    containsActiveZone,
    zoneCompound,
    setHover,
    thisIsDragging,
    inDroppableZone,
    zoneStore,
    id
  ]);
  const [isVisible, setIsVisible] = useState9(false);
  const [dragFinished, setDragFinished] = useState9(true);
  const [_, startTransition] = useTransition();
  useEffect8(() => {
    startTransition(() => {
      if (hover || indicativeHover || isSelected) {
        scheduleSync();
        setIsVisible(true);
        setThisWasDragging(false);
      } else {
        setIsVisible(false);
      }
    });
  }, [hover, indicativeHover, isSelected, iframe, scheduleSync]);
  const [thisWasDragging, setThisWasDragging] = useState9(false);
  const onDragFinished = useOnDragFinished(
    useCallback7(
      (finished) => {
        if (finished) {
          startTransition(() => {
            sync();
            setDragFinished(true);
          });
        } else {
          setDragFinished(false);
        }
      },
      [sync, startTransition]
    )
  );
  useEffect8(() => {
    if (thisIsDragging) {
      setThisWasDragging(true);
    }
  }, [thisIsDragging]);
  useEffect8(() => {
    if (thisWasDragging) return onDragFinished();
  }, [thisWasDragging, onDragFinished]);
  useEffect8(() => {
    if (!dragFinished || !(isSelected || thisIsDragging)) return;
    const el = ref.current;
    if (!el) return;
    const doc = el.ownerDocument;
    const view = doc.defaultView;
    if (!view) return;
    lastMeasureRef.current = 0;
    scheduleSync();
    const onScroll = () => scheduleSync();
    const onResize = () => scheduleSync();
    doc.addEventListener("scroll", onScroll, true);
    view.addEventListener("resize", onResize);
    let frame = 0;
    const tick = (t) => {
      if (t - lastMeasureRef.current >= MEASURE_EVERY_MS) {
        lastMeasureRef.current = t;
        const node = ref.current;
        if (node) {
          const rect = node.getBoundingClientRect();
          const prev = lastRectRef.current;
          const changed = !prev || Math.abs(rect.x - prev.x) > 0.5 || Math.abs(rect.y - prev.y) > 0.5 || Math.abs(rect.width - prev.width) > 0.5 || Math.abs(rect.height - prev.height) > 0.5;
          if (changed) {
            lastRectRef.current = rect;
            scheduleSync();
          }
        }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      doc.removeEventListener("scroll", onScroll, true);
      view.removeEventListener("resize", onResize);
      cancelAnimationFrame(frame);
    };
  }, [dragFinished, isSelected, thisIsDragging, scheduleSync]);
  const syncActionsPosition = useCallback7(
    (el) => {
      if (el) {
        const view = el.ownerDocument.defaultView;
        if (view) {
          const rect = el.getBoundingClientRect();
          const diffLeft = rect.x;
          const exceedsBoundsLeft = diffLeft < 0;
          const diffTop = rect.y;
          const exceedsBoundsTop = diffTop < 0;
          if (exceedsBoundsLeft) {
            el.style.transformOrigin = "left top";
            el.style.left = "0px";
          }
          if (exceedsBoundsTop) {
            el.style.top = "12px";
            if (!exceedsBoundsLeft) {
              el.style.transformOrigin = "right top";
            }
          }
        }
      }
    },
    []
  );
  useEffect8(() => {
    if (userDragAxis) {
      setDragAxis(userDragAxis);
      return;
    }
    if (ref.current) {
      const computedStyle = window.getComputedStyle(ref.current);
      if (computedStyle.display === "inline" || computedStyle.display === "inline-block") {
        setDragAxis("x");
        return;
      }
    }
    setDragAxis(autoDragAxis);
  }, [ref, userDragAxis, autoDragAxis]);
  const parentAction = useMemo7(
    () => (ctx == null ? void 0 : ctx.areaId) && (ctx == null ? void 0 : ctx.areaId) !== "root" && /* @__PURE__ */ jsx22(ActionBar.Action, { onClick: onSelectParent, label: "Select parent", children: /* @__PURE__ */ jsx22(CornerLeftUp, { size: 16 }) }),
    [ctx == null ? void 0 : ctx.areaId, onSelectParent]
  );
  const nextContextValue = useMemo7(
    () => __spreadProps(__spreadValues({}, ctx), {
      areaId: id,
      zoneCompound,
      index,
      depth: depth + 1,
      registerLocalZone,
      unregisterLocalZone
    }),
    [
      ctx,
      id,
      zoneCompound,
      index,
      depth,
      registerLocalZone,
      unregisterLocalZone
    ]
  );
  const richText = useAppStore(
    (s) => {
      var _a;
      return ((_a = s.currentRichText) == null ? void 0 : _a.inlineComponentId) === id ? s.currentRichText : null;
    }
  );
  const hasNormalActions = permissions.duplicate || permissions.delete;
  return /* @__PURE__ */ jsxs7(DropZoneProvider, { value: nextContextValue, children: [
    dragFinished && isVisible && createPortal2(
      /* @__PURE__ */ jsxs7(
        "div",
        {
          className: getClassName14({
            isSelected,
            isDragging: thisIsDragging,
            hover: hover || indicativeHover
          }),
          style: __spreadValues({}, style),
          "data-credbuild-overlay": true,
          children: [
            debug,
            isLoading && /* @__PURE__ */ jsx22("div", { className: getClassName14("loadingOverlay"), children: /* @__PURE__ */ jsx22(Loader, {}) }),
            /* @__PURE__ */ jsx22(
              "div",
              {
                className: getClassName14("actionsOverlay"),
                style: {
                  top: actionsOverlayTop / zoom
                },
                children: /* @__PURE__ */ jsx22(
                  "div",
                  {
                    className: getClassName14("actions"),
                    style: {
                      transform: `scale(${1 / zoom}`,
                      top: actionsTop / zoom,
                      right: 0,
                      paddingLeft: actionsSide,
                      paddingRight: actionsSide
                    },
                    ref: syncActionsPosition,
                    children: /* @__PURE__ */ jsxs7(
                      CustomActionBar,
                      {
                        parentAction,
                        label: DEBUG2 ? id : label,
                        children: [
                          richText && /* @__PURE__ */ jsxs7(Fragment7, { children: [
                            /* @__PURE__ */ jsx22(
                              LoadedRichTextMenu,
                              {
                                editor: richText.editor,
                                field: richText.field,
                                inline: true,
                                readOnly: false
                              }
                            ),
                            hasNormalActions && /* @__PURE__ */ jsx22(ActionBar.Separator, {})
                          ] }),
                          permissions.duplicate && /* @__PURE__ */ jsx22(ActionBar.Action, { onClick: onDuplicate, label: "Duplicate", children: /* @__PURE__ */ jsx22(Copy, { size: 16 }) }),
                          permissions.delete && /* @__PURE__ */ jsx22(ActionBar.Action, { onClick: onDelete, label: "Delete", children: /* @__PURE__ */ jsx22(Trash, { size: 16 }) })
                        ]
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx22("div", { className: getClassName14("overlayWrapper"), children: /* @__PURE__ */ jsx22(
              CustomOverlay,
              {
                componentId: id,
                componentType,
                hover,
                isSelected,
                children: /* @__PURE__ */ jsx22("div", { className: getClassName14("overlay") })
              }
            ) })
          ]
        }
      ),
      portalEl || document.body
    ),
    children(refSetter)
  ] });
};

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/DropZone/styles.module.css#css-module
init_react_import();
var styles_module_default9 = { "DropZone": "_DropZone_1vmgt_1", "DropZone--hasChildren": "_DropZone--hasChildren_1vmgt_11", "DropZone--isAreaSelected": "_DropZone--isAreaSelected_1vmgt_24", "DropZone--hoveringOverArea": "_DropZone--hoveringOverArea_1vmgt_25", "DropZone--isRootZone": "_DropZone--isRootZone_1vmgt_25", "DropZone--isDestination": "_DropZone--isDestination_1vmgt_35", "DropZone-item": "_DropZone-item_1vmgt_47", "DropZone-hitbox": "_DropZone-hitbox_1vmgt_51", "DropZone--isEnabled": "_DropZone--isEnabled_1vmgt_59", "DropZone--isAnimating": "_DropZone--isAnimating_1vmgt_68" };

// components/DropZone/index.tsx
import { useDroppable as useDroppable2 } from "@dnd-kit/react";

// components/Drawer/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/Drawer/styles.module.css#css-module
init_react_import();
var styles_module_default10 = { "Drawer": "_Drawer_e1509_1", "Drawer-draggable": "_Drawer-draggable_e1509_7", "Drawer-draggableBg": "_Drawer-draggableBg_e1509_11", "DrawerItem-draggable": "_DrawerItem-draggable_e1509_21", "DrawerItem--disabled": "_DrawerItem--disabled_e1509_34", "DrawerItem": "_DrawerItem_e1509_21", "Drawer--isDraggingFrom": "_Drawer--isDraggingFrom_e1509_43", "DrawerItem-default": "_DrawerItem-default_e1509_44", "DrawerItem-name": "_DrawerItem-name_e1509_61" };

// components/Drawer/index.tsx
import { useMemo as useMemo9, useState as useState11 } from "react";

// components/DragDropContext/index.tsx
init_react_import();
import { DragDropProvider as DragDropProvider2 } from "@dnd-kit/react";
import {
  createContext as createContext4,
  useCallback as useCallback8,
  useContext as useContext6,
  useEffect as useEffect9,
  useId,
  useMemo as useMemo8,
  useRef as useRef3,
  useState as useState10
} from "react";
import { AutoScroller, defaultPreset } from "@dnd-kit/dom";

// lib/dnd/NestedDroppablePlugin.ts
init_react_import();
import { Plugin } from "@dnd-kit/abstract";

// lib/throttle.ts
init_react_import();
function timeout2(callback, duration) {
  const id = setTimeout(callback, duration);
  return () => clearTimeout(id);
}
function throttle(func, limit) {
  const time = () => performance.now();
  let cancel;
  let lastRan = 0;
  return function(...args) {
    const now = time();
    const context = this;
    if (now - lastRan >= limit) {
      func.apply(context, args);
      lastRan = now;
    } else {
      cancel == null ? void 0 : cancel();
      cancel = timeout2(() => {
        func.apply(context, args);
        lastRan = time();
      }, limit - (now - lastRan));
    }
  };
}

// lib/get-frame.ts
init_react_import();
var getFrame = () => {
  if (typeof window === "undefined") return;
  let frameEl = document.querySelector("#preview-frame");
  if ((frameEl == null ? void 0 : frameEl.tagName) === "IFRAME") {
    return frameEl.contentDocument || document;
  }
  return (frameEl == null ? void 0 : frameEl.ownerDocument) || document;
};

// lib/global-position.ts
init_react_import();
var GlobalPosition = class {
  constructor(target, original) {
    this.scaleFactor = 1;
    this.frameEl = null;
    this.frameRect = null;
    var _a;
    this.target = target;
    this.original = original;
    this.frameEl = document.querySelector("iframe#preview-frame");
    if (this.frameEl) {
      this.frameRect = this.frameEl.getBoundingClientRect();
      this.scaleFactor = this.frameRect.width / (((_a = this.frameEl.contentWindow) == null ? void 0 : _a.innerWidth) || 1);
    }
  }
  get x() {
    return this.original.x;
  }
  get y() {
    return this.original.y;
  }
  get global() {
    if (document !== this.target.ownerDocument && this.frameRect) {
      return {
        x: this.x * this.scaleFactor + this.frameRect.left,
        y: this.y * this.scaleFactor + this.frameRect.top
      };
    }
    return this.original;
  }
  get frame() {
    if (document === this.target.ownerDocument && this.frameRect) {
      return {
        x: (this.x - this.frameRect.left) / this.scaleFactor,
        y: (this.y - this.frameRect.top) / this.scaleFactor
      };
    }
    return this.original;
  }
};

// lib/bubble-pointer-event.ts
init_react_import();
var BaseEvent = typeof PointerEvent !== "undefined" ? PointerEvent : Event;
var BubbledPointerEvent = class extends BaseEvent {
  constructor(type, data) {
    super(type, data);
    this._originalTarget = null;
    this.originalTarget = data.originalTarget;
  }
  // Necessary for Firefox
  set originalTarget(target) {
    this._originalTarget = target;
  }
  // Necessary for Firefox
  get originalTarget() {
    return this._originalTarget;
  }
};

// lib/dnd/NestedDroppablePlugin.ts
var depthSort = (candidates) => {
  return candidates.sort((a, b) => {
    const aData = a.data;
    const bData = b.data;
    if (aData.depth > bData.depth) {
      return 1;
    }
    if (bData.depth > aData.depth) {
      return -1;
    }
    return 0;
  });
};
var getZoneId = (candidate) => {
  let id = candidate == null ? void 0 : candidate.id;
  if (!candidate) return null;
  if (candidate.type === "component") {
    const data = candidate.data;
    if (data.containsActiveZone) {
      id = null;
    } else {
      id = data.zone;
    }
  } else if (candidate.type === "void") {
    return "void";
  }
  return id;
};
var BUFFER = 6;
var getPointerCollisions = (position, manager) => {
  const candidates = [];
  let elements = position.target.ownerDocument.elementsFromPoint(
    position.x,
    position.y
  );
  const previewFrame = elements.find(
    (el) => el.getAttribute("data-credbuild-preview")
  );
  const drawer = elements.find((el) => el.getAttribute("data-credbuild-drawer"));
  if (drawer) {
    elements = [drawer];
  }
  if (previewFrame) {
    const frame = getFrame();
    if (frame) {
      elements = frame.elementsFromPoint(position.frame.x, position.frame.y);
    }
  }
  if (elements) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const dropzoneId = element.getAttribute("data-credbuild-dropzone");
      const id = element.getAttribute("data-credbuild-dnd");
      const isVoid = element.hasAttribute("data-credbuild-dnd-void");
      if (BUFFER && (dropzoneId || id) && !isVoid) {
        const box = element.getBoundingClientRect();
        const contractedBox = {
          left: box.left + BUFFER,
          right: box.right - BUFFER,
          top: box.top + BUFFER,
          bottom: box.bottom - BUFFER
        };
        if (position.frame.x < contractedBox.left || position.frame.x > contractedBox.right || position.frame.y > contractedBox.bottom || position.frame.y < contractedBox.top) {
          continue;
        }
      }
      if (dropzoneId) {
        const droppable = manager.registry.droppables.get(dropzoneId);
        if (droppable) {
          candidates.push(droppable);
        }
      }
      if (id) {
        const droppable = manager.registry.droppables.get(id);
        if (droppable) {
          candidates.push(droppable);
        }
      }
    }
  }
  return candidates;
};
var findDeepestCandidate = (position, manager) => {
  var _a;
  const candidates = getPointerCollisions(position, manager);
  if (candidates.length > 0) {
    const sortedCandidates = depthSort(candidates);
    const draggable = manager.dragOperation.source;
    const draggedCandidateIndex = sortedCandidates.findIndex(
      (candidate) => candidate.id === (draggable == null ? void 0 : draggable.id)
    );
    const draggedCandidateId = draggable == null ? void 0 : draggable.id;
    let filteredCandidates = [...sortedCandidates];
    if (draggedCandidateId && draggedCandidateIndex > -1) {
      filteredCandidates.splice(draggedCandidateIndex, 1);
    }
    filteredCandidates = filteredCandidates.filter((candidate) => {
      const candidateData = candidate.data;
      if (draggedCandidateId && draggedCandidateIndex > -1) {
        if (candidateData.path.indexOf(draggedCandidateId) > -1) {
          return false;
        }
      }
      if (candidate.type === "dropzone") {
        const candidateData2 = candidate.data;
        if (!candidateData2.isDroppableTarget) {
          return false;
        }
        if (candidateData2.areaId === draggedCandidateId) {
          return false;
        }
      } else if (candidate.type === "component") {
        const candidateData2 = candidate.data;
        if (!candidateData2.inDroppableZone) {
          return false;
        }
      }
      return true;
    });
    filteredCandidates.reverse();
    const primaryCandidate = filteredCandidates[0];
    if (!primaryCandidate) return { zone: null, area: null };
    const primaryCandidateData = primaryCandidate.data;
    const primaryCandidateIsComponent = "containsActiveZone" in primaryCandidateData;
    const zone = getZoneId(primaryCandidate);
    const area = primaryCandidateIsComponent && primaryCandidateData.containsActiveZone ? filteredCandidates[0].id : (_a = filteredCandidates[0]) == null ? void 0 : _a.data.areaId;
    return { zone, area };
  }
  return {
    zone: rootDroppableId,
    area: rootAreaId
  };
};
var createNestedDroppablePlugin = ({ onChange }, id) => class NestedDroppablePlugin extends Plugin {
  constructor(manager, options) {
    super(manager);
    if (typeof window === "undefined") {
      return;
    }
    this.registerEffect(() => {
      const handleMove = (event) => {
        const target = event instanceof BubbledPointerEvent ? event.originalTarget || event.target : event.target;
        const position = new GlobalPosition(target, {
          x: event.clientX,
          y: event.clientY
        });
        const elements = document.elementsFromPoint(
          position.global.x,
          position.global.y
        );
        const overEl = elements.some((el) => el.id === id);
        if (overEl) {
          onChange(findDeepestCandidate(position, manager), manager);
        }
      };
      const handleMoveThrottled = throttle(handleMove, 50);
      const handlePointerMove = (event) => {
        handleMoveThrottled(event);
      };
      document.body.addEventListener("pointermove", handlePointerMove, {
        capture: true
        // dndkit's PointerSensor prevents propagation during drag
      });
      const cleanup = () => {
        document.body.removeEventListener("pointermove", handlePointerMove, {
          capture: true
        });
      };
      return cleanup;
    });
  }
};

// lib/insert-component.ts
init_react_import();

// lib/get-selector-for-id.ts
init_react_import();
var getSelectorForId = (state, id) => {
  const node = state.indexes.nodes[id];
  if (!node) return;
  const zoneCompound = `${node.parentId}:${node.zone}`;
  const index = state.indexes.zones[zoneCompound].contentIds.indexOf(id);
  return { zone: zoneCompound, index };
};

// lib/insert-component.ts
var insertComponent = (componentType, zone, index, appStore) => __async(null, null, function* () {
  const { getState } = appStore;
  const id = generateId(componentType);
  const insertActionData = {
    type: "insert",
    componentType,
    destinationIndex: index,
    destinationZone: zone,
    id
  };
  const stateBefore = getState().state;
  const insertedState = insertAction(stateBefore, insertActionData, getState());
  const dispatch = getState().dispatch;
  dispatch(__spreadProps(__spreadValues({}, insertActionData), {
    // Dispatch insert rather set, as user's may rely on this via onAction
    // We must always record history here so the insert is added to user history
    // If the user has defined a resolveData method, they will end up with 2 history
    // entries on insert - one for the initial insert, and one when the data resolves
    recordHistory: true
  }));
  const itemSelector = { index, zone };
  dispatch({ type: "setUi", ui: { itemSelector } });
  const itemData = getItem(itemSelector, insertedState);
  if (!itemData) return;
  const resolveComponentData = getState().resolveComponentData;
  const resolved = yield resolveComponentData(itemData, "insert");
  if (!resolved.didChange) return;
  const latestItemSelector = getSelectorForId(getState().state, id);
  if (!latestItemSelector) return;
  dispatch({
    type: "replace",
    destinationZone: latestItemSelector.zone,
    destinationIndex: latestItemSelector.index,
    data: resolved.node
  });
});

// lib/move-component.ts
init_react_import();
var moveComponent = (id, sourceSelector, destinationSelector, appStore) => __async(null, null, function* () {
  var _a, _b, _c, _d;
  const dispatch = appStore.getState().dispatch;
  dispatch({
    type: "move",
    sourceIndex: sourceSelector.index,
    sourceZone: (_a = sourceSelector.zone) != null ? _a : rootDroppableId,
    destinationIndex: destinationSelector.index,
    destinationZone: (_b = destinationSelector.zone) != null ? _b : rootDroppableId,
    recordHistory: false
  });
  const componentData = (_c = appStore.getState().state.indexes.nodes[id]) == null ? void 0 : _c.data;
  if (!componentData) return;
  const resolveComponentData = appStore.getState().resolveComponentData;
  const resolvedData = yield resolveComponentData(componentData, "move");
  const latestItemSelector = getSelectorForId(
    appStore.getState().state,
    componentData.props.id
  );
  if (!latestItemSelector) return;
  if (resolvedData.didChange)
    dispatch({
      type: "replace",
      data: resolvedData.node,
      destinationIndex: latestItemSelector.index,
      destinationZone: (_d = latestItemSelector.zone) != null ? _d : rootDroppableId
    });
});

// components/DragDropContext/index.tsx
import { useDebouncedCallback } from "use-debounce";
import { createStore as createStore4 } from "zustand";

// lib/get-deep-dir.ts
init_react_import();
function getDeepDir(el) {
  function findDir(node) {
    if (!node) return "ltr";
    const d = node.getAttribute("dir");
    return d || findDir(node.parentElement);
  }
  return el ? findDir(el) : "ltr";
}

// components/DragDropContext/index.tsx
import { effect } from "@dnd-kit/state";
import { jsx as jsx23 } from "react/jsx-runtime";
var DEBUG3 = false;
var dragListenerContext = createContext4({
  dragListeners: {}
});
function useDragListener(type, fn, deps = []) {
  const { setDragListeners } = useContext6(dragListenerContext);
  const id = useId();
  const fnRef = useRef3(fn);
  useEffect9(() => {
    fnRef.current = fn;
  }, [fn]);
  useEffect9(() => {
    if (setDragListeners) {
      const wrappedFn = ((...args) => {
        return fnRef.current(...args);
      });
      setDragListeners((old) => __spreadProps(__spreadValues({}, old), {
        [type]: [...old[type] || [], { id, fn: wrappedFn }]
      }));
      return () => {
        setDragListeners((old) => __spreadProps(__spreadValues({}, old), {
          [type]: (old[type] || []).filter((item) => item.id !== id)
        }));
      };
    }
  }, [type, setDragListeners, id]);
}
var AREA_CHANGE_DEBOUNCE_MS = 100;
var useTempDisableFallback = (timeout3) => {
  const lastFallbackDisable = useRef3(null);
  return useCallback8((manager) => {
    collisionStore.setState({ fallbackEnabled: false });
    const fallbackId = generateId();
    lastFallbackDisable.current = fallbackId;
    setTimeout(() => {
      if (lastFallbackDisable.current === fallbackId) {
        collisionStore.setState({ fallbackEnabled: true });
        manager.collisionObserver.forceUpdate(true);
      }
    }, timeout3);
  }, [timeout3]);
};
var DragDropContextClient = ({
  children,
  disableAutoScroll
}) => {
  const dispatch = useAppStore((s) => s.dispatch);
  const instanceId = useAppStore((s) => s.instanceId);
  const appStore = useAppStoreApi();
  const debouncedParamsRef = useRef3(null);
  const tempDisableFallback = useTempDisableFallback(100);
  const [zoneStore] = useState10(() => {
    const rootVirtualizers = /* @__PURE__ */ new Map();
    return createStore4(() => ({
      zoneDepthIndex: {},
      nextZoneDepthIndex: {},
      areaDepthIndex: {},
      nextAreaDepthIndex: {},
      draggedItem: null,
      previewIndex: {},
      enabledIndex: {},
      hoveringComponent: null,
      registerRootVirtualizer: (zoneCompound, handle) => {
        rootVirtualizers.set(zoneCompound, handle);
      },
      unregisterRootVirtualizer: (zoneCompound) => {
        rootVirtualizers.delete(zoneCompound);
      },
      scrollToComponent: (id) => {
        const virtualizers = Array.from(rootVirtualizers.values());
        if (virtualizers.length > 0) {
          for (const handle of virtualizers) {
            const index = handle.resolveIndex(id);
            if (index < 0) {
              continue;
            }
            handle.virtualizer.scrollToIndex(index, {
              behavior: "auto",
              // We avoid smooth scroll as this triggers virtualizer renders
              align: "auto"
            });
          }
        } else {
          const frame = getFrame();
          const el = frame == null ? void 0 : frame.querySelector(`[data-credbuild-component="${id}"]`);
          el == null ? void 0 : el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }));
  });
  const getChanged = useCallback8(
    (params) => {
      const { zoneDepthIndex = {}, areaDepthIndex = {} } = zoneStore.getState() || {};
      const stateHasZone = Object.keys(zoneDepthIndex).length > 0;
      const stateHasArea = Object.keys(areaDepthIndex).length > 0;
      let zoneChanged = false;
      let areaChanged = false;
      if (params.zone && !zoneDepthIndex[params.zone]) {
        zoneChanged = true;
      } else if (!params.zone && stateHasZone) {
        zoneChanged = true;
      }
      if (params.area && !areaDepthIndex[params.area]) {
        areaChanged = true;
      } else if (!params.area && stateHasArea) {
        areaChanged = true;
      }
      return { zoneChanged, areaChanged };
    },
    [zoneStore]
  );
  const setDeepestAndCollide = useCallback8(
    (params, manager) => {
      const { zoneChanged, areaChanged } = getChanged(params);
      if (!zoneChanged && !areaChanged) return;
      zoneStore.setState({
        zoneDepthIndex: params.zone ? { [params.zone]: true } : {},
        areaDepthIndex: params.area ? { [params.area]: true } : {}
      });
      tempDisableFallback(manager);
      setTimeout(() => {
        manager.collisionObserver.forceUpdate(true);
      }, 50);
      debouncedParamsRef.current = null;
    },
    [zoneStore, getChanged, tempDisableFallback]
  );
  const setDeepestDb = useDebouncedCallback(
    setDeepestAndCollide,
    AREA_CHANGE_DEBOUNCE_MS
  );
  const cancelDb = () => {
    setDeepestDb.cancel();
    debouncedParamsRef.current = null;
  };
  useEffect9(() => {
    if (DEBUG3) {
      zoneStore.subscribe(
        (s) => {
          var _a, _b;
          return console.log(
            s.previewIndex,
            (_a = Object.entries(s.zoneDepthIndex || {})[0]) == null ? void 0 : _a[0],
            (_b = Object.entries(s.areaDepthIndex || {})[0]) == null ? void 0 : _b[0]
          );
        }
      );
    }
  }, [zoneStore]);
  const [plugins] = useState10(() => [
    ...disableAutoScroll ? defaultPreset.plugins.filter((plugin) => plugin !== AutoScroller) : defaultPreset.plugins,
    createNestedDroppablePlugin(
      {
        onChange: (params, manager) => {
          const state = zoneStore.getState();
          const { zoneChanged, areaChanged } = getChanged(params);
          const isDragging = manager.dragOperation.status.dragging;
          if (areaChanged || zoneChanged) {
            let nextZoneDepthIndex = {};
            let nextAreaDepthIndex = {};
            if (params.zone) {
              nextZoneDepthIndex = { [params.zone]: true };
            }
            if (params.area) {
              nextAreaDepthIndex = { [params.area]: true };
            }
            zoneStore.setState({ nextZoneDepthIndex, nextAreaDepthIndex });
          }
          if (params.zone !== "void" && (state == null ? void 0 : state.zoneDepthIndex["void"])) {
            setDeepestAndCollide(params, manager);
            return;
          }
          if (areaChanged) {
            if (isDragging) {
              const debouncedParams = debouncedParamsRef.current;
              const isSameParams = debouncedParams && debouncedParams.area === params.area && debouncedParams.zone === params.zone;
              if (!isSameParams) {
                cancelDb();
                setDeepestDb(params, manager);
                debouncedParamsRef.current = params;
              }
            } else {
              cancelDb();
              setDeepestAndCollide(params, manager);
            }
            return;
          }
          if (zoneChanged) {
            setDeepestAndCollide(params, manager);
          }
          cancelDb();
        }
      },
      instanceId
    )
  ]);
  const sensors = useSensors();
  const [dragListeners, setDragListeners] = useState10({});
  const dragMode = useRef3(null);
  const initialSelector = useRef3(void 0);
  const nextContextValue = useMemo8(
    () => ({
      mode: "edit",
      areaId: "root",
      depth: 0
    }),
    []
  );
  return /* @__PURE__ */ jsx23(
    dragListenerContext.Provider,
    {
      value: {
        dragListeners,
        setDragListeners
      },
      children: /* @__PURE__ */ jsx23(
        DragDropProvider2,
        {
          plugins,
          sensors,
          onDragEnd: (event, manager) => {
            var _a, _b;
            const entryEl = (_a = getFrame()) == null ? void 0 : _a.querySelector("[data-credbuild-entry]");
            entryEl == null ? void 0 : entryEl.removeAttribute("data-credbuild-dragging");
            const { source, target } = event.operation;
            if (!source) {
              zoneStore.setState({ draggedItem: null });
              return;
            }
            const { zone, index } = source.data;
            const { previewIndex = {} } = zoneStore.getState() || {};
            const thisPreview = ((_b = previewIndex[zone]) == null ? void 0 : _b.props.id) === source.id ? previewIndex[zone] : null;
            const onAnimationEnd = () => {
              var _a2, _b2, _c, _d;
              zoneStore.setState({ draggedItem: null });
              if (event.canceled || (target == null ? void 0 : target.type) === "void") {
                zoneStore.setState({ previewIndex: {} });
                (_a2 = dragListeners.dragend) == null ? void 0 : _a2.forEach((item) => {
                  const fn = typeof item === "function" ? item : item.fn;
                  if (typeof fn === "function") {
                    fn(event, manager);
                  }
                });
                dispatch({
                  type: "setUi",
                  ui: {
                    itemSelector: null,
                    isDragging: false
                  }
                });
                return;
              }
              if (thisPreview) {
                zoneStore.setState({ previewIndex: {} });
                if (thisPreview.type === "insert") {
                  insertComponent(
                    thisPreview.componentType,
                    thisPreview.zone,
                    thisPreview.index,
                    appStore
                  );
                } else if (initialSelector.current) {
                  moveComponent(
                    thisPreview.props.id,
                    initialSelector.current,
                    thisPreview,
                    appStore
                  );
                }
              }
              const movedToNewPosition = ((_b2 = initialSelector.current) == null ? void 0 : _b2.zone) !== (thisPreview == null ? void 0 : thisPreview.zone) || ((_c = initialSelector.current) == null ? void 0 : _c.index) !== (thisPreview == null ? void 0 : thisPreview.index);
              dispatch({
                type: "setUi",
                ui: {
                  itemSelector: { index, zone },
                  isDragging: false
                },
                recordHistory: movedToNewPosition
              });
              (_d = dragListeners.dragend) == null ? void 0 : _d.forEach((item) => {
                const fn = typeof item === "function" ? item : item.fn;
                if (typeof fn === "function") {
                  fn(event, manager);
                }
              });
            };
            let dispose;
            dispose = effect(() => {
              if (source.status === "idle") {
                onAnimationEnd();
                dispose == null ? void 0 : dispose();
              }
            });
          },
          onDragOver: (event, manager) => {
            var _a, _b, _c, _d;
            event.preventDefault();
            const draggedItem = (_a = zoneStore.getState()) == null ? void 0 : _a.draggedItem;
            if (!draggedItem) return;
            cancelDb();
            const { source, target } = event.operation;
            if (!target || !source || target.type === "void") return;
            const [sourceId] = source.id.split(":");
            const [targetId] = target.id.split(":");
            const sourceData = source.data;
            let sourceZone = sourceData.zone;
            let sourceIndex = sourceData.index;
            let targetZone = "";
            let targetIndex = 0;
            if (target.type === "component") {
              const targetData = target.data;
              targetZone = targetData.zone;
              targetIndex = targetData.index;
              const collisionData = (_b = manager.collisionObserver.collisions[0]) == null ? void 0 : _b.data;
              const dir = getDeepDir(target.element);
              const collisionPosition = (collisionData == null ? void 0 : collisionData.direction) === "up" || dir === "ltr" && (collisionData == null ? void 0 : collisionData.direction) === "left" || dir === "rtl" && (collisionData == null ? void 0 : collisionData.direction) === "right" ? "before" : "after";
              if (targetIndex >= sourceIndex && sourceZone === targetZone) {
                targetIndex = targetIndex - 1;
              }
              if (collisionPosition === "after") {
                targetIndex = targetIndex + 1;
              }
            } else {
              targetZone = target.id.toString();
              targetIndex = 0;
            }
            const path = ((_c = appStore.getState().state.indexes.nodes[target.id]) == null ? void 0 : _c.path) || [];
            if (targetId === sourceId || path.find((path2) => {
              const [pathId] = path2.split(":");
              return pathId === sourceId;
            })) {
              return;
            }
            if (dragMode.current === "new") {
              zoneStore.setState({
                previewIndex: {
                  [targetZone]: {
                    componentType: sourceData.componentType,
                    type: "insert",
                    index: targetIndex,
                    zone: targetZone,
                    element: source.element,
                    props: {
                      id: source.id.toString()
                    }
                  }
                }
              });
            } else {
              if (!initialSelector.current) {
                initialSelector.current = {
                  zone: sourceData.zone,
                  index: sourceData.index
                };
              }
              const item = getItem(
                initialSelector.current,
                appStore.getState().state
              );
              if (item) {
                zoneStore.setState({
                  previewIndex: {
                    [targetZone]: {
                      componentType: sourceData.componentType,
                      type: "move",
                      index: targetIndex,
                      zone: targetZone,
                      props: item.props,
                      element: source.element
                    }
                  }
                });
              }
            }
            (_d = dragListeners.dragover) == null ? void 0 : _d.forEach((item) => {
              const fn = typeof item === "function" ? item : item.fn;
              if (typeof fn === "function") {
                fn(event, manager);
              }
            });
          },
          onDragStart: (event, manager) => {
            var _a;
            const { source } = event.operation;
            if (source && source.type !== "void") {
              const sourceData = source.data;
              const item = getItem(
                {
                  zone: sourceData.zone,
                  index: sourceData.index
                },
                appStore.getState().state
              );
              if (item) {
                zoneStore.setState({
                  previewIndex: {
                    [sourceData.zone]: {
                      componentType: sourceData.componentType,
                      type: "move",
                      index: sourceData.index,
                      zone: sourceData.zone,
                      props: item.props,
                      element: source.element
                    }
                  }
                });
              }
            }
            (_a = dragListeners.dragstart) == null ? void 0 : _a.forEach((item) => {
              const fn = typeof item === "function" ? item : item.fn;
              if (typeof fn === "function") {
                fn(event, manager);
              }
            });
          },
          onBeforeDragStart: (event) => {
            var _a, _b, _c, _d;
            const isNewComponent = ((_a = event.operation.source) == null ? void 0 : _a.type) === "drawer";
            dragMode.current = isNewComponent ? "new" : "existing";
            initialSelector.current = void 0;
            zoneStore.setState({ draggedItem: event.operation.source });
            if (((_b = appStore.getState().selectedItem) == null ? void 0 : _b.props.id) !== ((_c = event.operation.source) == null ? void 0 : _c.id)) {
              dispatch({
                type: "setUi",
                ui: {
                  itemSelector: null,
                  isDragging: true
                },
                recordHistory: false
              });
            } else {
              dispatch({
                type: "setUi",
                ui: {
                  isDragging: true
                },
                recordHistory: false
              });
            }
            const entryEl = (_d = getFrame()) == null ? void 0 : _d.querySelector("[data-credbuild-entry]");
            entryEl == null ? void 0 : entryEl.setAttribute("data-credbuild-dragging", "true");
          },
          children: /* @__PURE__ */ jsx23(ZoneStoreProvider, { store: zoneStore, children: /* @__PURE__ */ jsx23(DropZoneProvider, { value: nextContextValue, children }) })
        }
      )
    }
  );
};
var DragDropContext = ({
  children,
  disableAutoScroll
}) => {
  const status = useAppStore((s) => s.status);
  if (status === "LOADING") {
    return children;
  }
  return /* @__PURE__ */ jsx23(DragDropContextClient, { disableAutoScroll, children });
};

// components/Drawer/index.tsx
import { useDraggable, useDroppable } from "@dnd-kit/react";
import { jsx as jsx24, jsxs as jsxs8 } from "react/jsx-runtime";
var getClassName15 = get_class_name_factory_default("Drawer", styles_module_default10);
var getClassNameItem2 = get_class_name_factory_default("DrawerItem", styles_module_default10);
var DrawerItemInner = ({
  children,
  name,
  label,
  dragRef,
  isDragDisabled
}) => {
  const CustomInner = useMemo9(
    () => children || (({ children: children2 }) => /* @__PURE__ */ jsx24("div", { className: getClassNameItem2("default"), children: children2 })),
    [children]
  );
  return /* @__PURE__ */ jsx24(
    "div",
    {
      className: getClassNameItem2({ disabled: isDragDisabled }),
      ref: dragRef,
      onMouseDown: (e) => e.preventDefault(),
      "data-testid": dragRef ? `drawer-item:${name}` : "",
      "data-credbuild-drawer-item": true,
      children: /* @__PURE__ */ jsx24(CustomInner, { name, children: /* @__PURE__ */ jsx24("div", { className: getClassNameItem2("draggableWrapper"), children: /* @__PURE__ */ jsxs8("div", { className: getClassNameItem2("draggable"), children: [
        /* @__PURE__ */ jsx24("div", { className: getClassNameItem2("name"), children: label != null ? label : name }),
        /* @__PURE__ */ jsx24("div", { className: getClassNameItem2("icon"), children: /* @__PURE__ */ jsx24(DragIcon, {}) })
      ] }) }) })
    }
  );
};
var DrawerItemDraggable = ({
  children,
  name,
  label,
  id,
  isDragDisabled
}) => {
  const { ref } = useDraggable({
    id,
    data: { componentType: name },
    disabled: isDragDisabled,
    type: "drawer"
  });
  return /* @__PURE__ */ jsxs8("div", { className: getClassName15("draggable"), children: [
    /* @__PURE__ */ jsx24("div", { className: getClassName15("draggableBg"), children: /* @__PURE__ */ jsx24(DrawerItemInner, { name, label, children }) }),
    /* @__PURE__ */ jsx24("div", { className: getClassName15("draggableFg"), children: /* @__PURE__ */ jsx24(
      DrawerItemInner,
      {
        name,
        label,
        dragRef: ref,
        isDragDisabled,
        children
      }
    ) })
  ] });
};
var DrawerItem = ({
  name,
  children,
  id,
  label,
  index,
  isDragDisabled
}) => {
  const resolvedId = id || name;
  const [dynamicId, setDynamicId] = useState11(generateId(resolvedId));
  if (typeof index !== "undefined") {
    console.error(
      "Warning: The `index` prop on Drawer.Item is deprecated and no longer required."
    );
  }
  useDragListener(
    "dragend",
    () => {
      setDynamicId(generateId(resolvedId));
    },
    [resolvedId]
  );
  return /* @__PURE__ */ jsx24("div", { children: /* @__PURE__ */ jsx24(
    DrawerItemDraggable,
    {
      name,
      label,
      id: dynamicId,
      isDragDisabled,
      children
    }
  ) }, dynamicId);
};
var Drawer = ({
  children,
  droppableId,
  direction
}) => {
  if (droppableId) {
    console.error(
      "Warning: The `droppableId` prop on Drawer is deprecated and no longer required."
    );
  }
  if (direction) {
    console.error(
      "Warning: The `direction` prop on Drawer is deprecated and no longer required to achieve multi-directional dragging."
    );
  }
  const id = useSafeId();
  const { ref } = useDroppable({
    id,
    type: "void",
    collisionPriority: 0
    // Never collide with this, but we use it so NestedDroppablePlugin respects the Drawer
  });
  return /* @__PURE__ */ jsx24(
    "div",
    {
      className: getClassName15(),
      ref,
      "data-credbuild-dnd": id,
      "data-credbuild-drawer": true,
      "data-credbuild-dnd-void": true,
      children
    }
  );
};
Drawer.Item = DrawerItem;

// components/DropZone/lib/use-min-empty-height.ts
init_react_import();
import { useCallback as useCallback9, useEffect as useEffect10, useRef as useRef4, useState as useState12 } from "react";
var getNumItems = (appStore, zoneCompound) => appStore.getState().state.indexes.zones[zoneCompound].contentIds.length;
var useMinEmptyHeight = ({
  zoneCompound,
  userMinEmptyHeight,
  ref
}) => {
  const appStore = useAppStoreApi();
  const [prevHeight, setPrevHeight] = useState12(0);
  const [isAnimating, setIsAnimating] = useState12(false);
  const { draggedItem, isZone } = useContextStore(ZoneStoreContext, (s) => {
    var _a, _b;
    return {
      draggedItem: ((_a = s.draggedItem) == null ? void 0 : _a.data.zone) === zoneCompound ? s.draggedItem : null,
      isZone: ((_b = s.draggedItem) == null ? void 0 : _b.data.zone) === zoneCompound
    };
  });
  const numItems = useRef4(0);
  const onDragFinished = useOnDragFinished(
    useCallback9(
      (finished) => {
        if (finished) {
          const newNumItems = getNumItems(appStore, zoneCompound);
          setPrevHeight(0);
          if (newNumItems || numItems.current === 0) {
            setIsAnimating(false);
            return;
          }
          const selectedItem = appStore.getState().selectedItem;
          const zones = appStore.getState().state.indexes.zones;
          const nodes = appStore.getState().nodes;
          nodes.setOverlayVisible(selectedItem == null ? void 0 : selectedItem.props.id, false);
          setTimeout(() => {
            var _a;
            const contentIds = ((_a = zones[zoneCompound]) == null ? void 0 : _a.contentIds) || [];
            nodes.syncNodes(contentIds);
            if (selectedItem) {
              setTimeout(() => {
                nodes.syncNode(selectedItem.props.id);
                nodes.setOverlayVisible(selectedItem.props.id, true);
              }, 200);
            }
            setIsAnimating(false);
          }, 100);
        }
      },
      [appStore, zoneCompound]
    )
  );
  useEffect10(() => {
    if (draggedItem && ref.current) {
      if (isZone) {
        const rect = ref.current.getBoundingClientRect();
        numItems.current = getNumItems(appStore, zoneCompound);
        setPrevHeight(rect.height);
        setIsAnimating(true);
        return onDragFinished();
      }
    }
  }, [ref, draggedItem, onDragFinished, appStore, isZone, zoneCompound]);
  const returnedMinHeight = isNaN(Number(userMinEmptyHeight)) ? userMinEmptyHeight : `${userMinEmptyHeight}px`;
  return [prevHeight ? `${prevHeight}px` : returnedMinHeight, isAnimating];
};

// components/DropZone/lib/use-content-with-preview.ts
init_react_import();
import { useCallback as useCallback11, useContext as useContext7, useEffect as useEffect11, useState as useState13 } from "react";

// lib/dnd/use-rendered-callback.ts
init_react_import();
import { useDragDropManager } from "@dnd-kit/react";
import { useCallback as useCallback10 } from "react";
function useRenderedCallback(callback, _deps = []) {
  const manager = useDragDropManager();
  return useCallback10(
    (...args) => __async(null, null, function* () {
      yield manager == null ? void 0 : manager.renderer.rendering;
      return callback(...args);
    }),
    [manager, callback]
  );
}

// components/DropZone/lib/use-content-with-preview.ts
var useContentIdsWithPreview = (contentIds, zoneCompound) => {
  const zoneStore = useContext7(ZoneStoreContext);
  const preview = useContextStore(
    ZoneStoreContext,
    (s) => s.previewIndex[zoneCompound]
  );
  const isDragging = useAppStore((s) => s.state.ui.isDragging);
  const [contentIdsWithPreview, setContentIdsWithPreview] = useState13(contentIds);
  const [localPreview, setLocalPreview] = useState13(
    preview
  );
  const updateContent = useRenderedCallback(
    useCallback11(
      (contentIds2, preview2, isDragging2, draggedItemId, previewExists) => {
        if (isDragging2 && !previewExists) {
          return;
        }
        if (preview2) {
          if (preview2.type === "insert") {
            setContentIdsWithPreview(
              insert(
                contentIds2.filter((id) => id !== preview2.props.id),
                preview2.index,
                preview2.props.id
              )
            );
          } else {
            setContentIdsWithPreview(
              insert(
                contentIds2.filter((id) => id !== preview2.props.id),
                preview2.index,
                preview2.props.id
              )
            );
          }
        } else {
          setContentIdsWithPreview(
            previewExists ? contentIds2.filter((id) => id !== draggedItemId) : contentIds2
          );
        }
        setLocalPreview(preview2);
      },
      []
    )
  );
  useEffect11(() => {
    var _a;
    const s = zoneStore.getState();
    const draggedItemId = (_a = s.draggedItem) == null ? void 0 : _a.id;
    const previewExists = Object.keys(s.previewIndex || {}).length > 0;
    updateContent(
      contentIds,
      preview,
      isDragging,
      draggedItemId,
      previewExists
    );
  }, [contentIds, preview, isDragging, updateContent, zoneStore]);
  return [contentIdsWithPreview, localPreview];
};

// components/DropZone/lib/use-drag-axis.ts
init_react_import();
import { useCallback as useCallback12, useEffect as useEffect12, useState as useState14 } from "react";
var GRID_DRAG_AXIS = "dynamic";
var FLEX_ROW_DRAG_AXIS = "x";
var DEFAULT_DRAG_AXIS = "y";
var useDragAxis = (ref, collisionAxis) => {
  const status = useAppStore((s) => s.status);
  const [dragAxis, setDragAxis] = useState14(
    collisionAxis || DEFAULT_DRAG_AXIS
  );
  const calculateDragAxis = useCallback12(() => {
    if (ref.current) {
      const computedStyle = window.getComputedStyle(ref.current);
      if (computedStyle.display === "grid") {
        setDragAxis(GRID_DRAG_AXIS);
      } else if (computedStyle.display === "flex" && computedStyle.flexDirection === "row") {
        setDragAxis(FLEX_ROW_DRAG_AXIS);
      } else {
        setDragAxis(DEFAULT_DRAG_AXIS);
      }
    }
  }, [ref]);
  useEffect12(() => {
    const onViewportChange = () => {
      calculateDragAxis();
    };
    window.addEventListener("viewportchange", onViewportChange);
    return () => {
      window.removeEventListener("viewportchange", onViewportChange);
    };
  }, [calculateDragAxis]);
  useEffect12(calculateDragAxis, [status, collisionAxis, calculateDragAxis]);
  return [dragAxis, calculateDragAxis];
};

// components/DropZone/index.tsx
import { useShallow as useShallow6 } from "zustand/react/shallow";

// components/SlotRender/index.tsx
init_react_import();
import { useShallow as useShallow5 } from "zustand/react/shallow";
import { jsx as jsx25 } from "react/jsx-runtime";
var ContextSlotRender = ({
  componentId,
  zone
}) => {
  const config = useAppStore((s) => s.config);
  const metadata = useAppStore((s) => s.metadata);
  const slotContent = useAppStore(
    useShallow5((s) => {
      var _a, _b;
      const indexes = s.state.indexes;
      const contentIds = (_b = (_a = indexes.zones[`${componentId}:${zone}`]) == null ? void 0 : _a.contentIds) != null ? _b : [];
      return contentIds.map((contentId) => indexes.nodes[contentId].flatData);
    })
  );
  return /* @__PURE__ */ jsx25(
    SlotRenderPure,
    {
      content: slotContent,
      zone,
      config,
      metadata
    }
  );
};

// lib/field-transforms/use-field-transforms-tracked.tsx
init_react_import();
import { useMemo as useMemo10, useRef as useRef5 } from "react";
function useFieldTransformsTracked(config, item, transforms, readOnly, forceReadOnly) {
  const prevProps = useRef5(null);
  const prevResult = useRef5(item.props);
  const mappers = useMemo10(
    () => buildMappers(transforms, readOnly, forceReadOnly),
    [transforms, readOnly, forceReadOnly]
  );
  const transformedProps = useMemo10(() => {
    var _a, _b, _c;
    const changedProps = {};
    const componentConfig = item.type === "root" ? config.root : (_a = config.components) == null ? void 0 : _a[item.type];
    let changeIncludesSlot = false;
    for (const fieldName in item.props) {
      const fieldType = (_c = (_b = componentConfig == null ? void 0 : componentConfig.fields) == null ? void 0 : _b[fieldName]) == null ? void 0 : _c.type;
      if (!prevProps.current || item.props[fieldName] !== prevProps.current[fieldName]) {
        changedProps[fieldName] = item.props[fieldName];
        if (fieldType === "slot") {
          changeIncludesSlot = true;
        }
      }
    }
    changedProps.id = item.props.id;
    prevProps.current = item.props;
    const mapped = mapFields(
      __spreadProps(__spreadValues({}, item), { props: changedProps }),
      mappers,
      config,
      false,
      changeIncludesSlot
    ).props;
    prevResult.current = __spreadValues(__spreadValues({}, prevResult.current), mapped);
    return prevResult.current;
  }, [config, item, mappers]);
  const mergedProps = useMemo10(
    () => __spreadValues(__spreadValues({}, item.props), transformedProps),
    [item.props, transformedProps]
  );
  return mergedProps;
}

// lib/field-transforms/default-transforms/inline-text-transform.tsx
init_react_import();

// components/InlineTextField/index.tsx
init_react_import();
import { memo as memo4, useEffect as useEffect13, useRef as useRef6, useState as useState15 } from "react";

// lib/overlay-portal/index.tsx
init_react_import();
var registerOverlayPortal = (el, opts = {}) => {
  if (!el) return;
  const { disableDrag = false, disableDragOnFocus = true } = opts;
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  el.addEventListener("mouseover", stopPropagation, {
    capture: true
  });
  const onFocus = () => {
    setTimeout(() => {
      el.addEventListener("pointerdown", stopPropagation, {
        capture: true
      });
    }, 200);
  };
  const onBlur = () => {
    el.removeEventListener("pointerdown", stopPropagation, {
      capture: true
    });
  };
  if (disableDrag) {
    el.addEventListener("pointerdown", stopPropagation, {
      capture: true
    });
  } else if (disableDragOnFocus) {
    el.addEventListener("focus", onFocus, { capture: true });
    el.addEventListener("blur", onBlur, { capture: true });
  }
  el.setAttribute("data-credbuild-overlay-portal", "true");
  return () => {
    el.removeEventListener("mouseover", stopPropagation, {
      capture: true
    });
    if (disableDrag) {
      el.removeEventListener("pointerdown", stopPropagation, {
        capture: true
      });
    } else if (disableDragOnFocus) {
      el.removeEventListener("focus", onFocus, { capture: true });
      el.removeEventListener("blur", onBlur, { capture: true });
    }
    el.removeAttribute("data-credbuild-overlay-portal");
  };
};

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/InlineTextField/styles.module.css#css-module
init_react_import();
var styles_module_default11 = { "InlineTextField": "_InlineTextField_104qp_1" };

// components/InlineTextField/index.tsx
import { jsx as jsx26 } from "react/jsx-runtime";
var getClassName16 = get_class_name_factory_default("InlineTextField", styles_module_default11);
var InlineTextFieldInternal = ({
  propPath,
  componentId,
  value,
  isReadOnly,
  opts = {}
}) => {
  var _a;
  const ref = useRef6(null);
  const appStoreApi = useAppStoreApi();
  const disableLineBreaks = (_a = opts.disableLineBreaks) != null ? _a : false;
  useEffect13(() => {
    const appStore = appStoreApi.getState();
    const data = appStore.state.indexes.nodes[componentId].data;
    const componentConfig = appStore.getComponentConfig(data.type);
    if (!componentConfig) {
      throw new Error(
        `InlineTextField Error: No config defined for ${data.type}`
      );
    }
    if (ref.current) {
      if (value !== ref.current.innerText) {
        ref.current.replaceChildren(value);
      }
      const cleanupPortal = registerOverlayPortal(ref.current);
      const handleInput = (e) => __async(null, null, function* () {
        var _a2;
        const appStore2 = appStoreApi.getState();
        const node = appStore2.state.indexes.nodes[componentId];
        const zoneCompound = `${node.parentId}:${node.zone}`;
        const index = (_a2 = appStore2.state.indexes.zones[zoneCompound]) == null ? void 0 : _a2.contentIds.indexOf(
          componentId
        );
        let value2 = e.target.innerText;
        if (disableLineBreaks) {
          value2 = value2.replaceAll(/\n/gm, "");
        }
        const newProps = setDeep(node.data.props, propPath, value2);
        const resolvedData = yield appStore2.resolveComponentData(
          __spreadProps(__spreadValues({}, node.data), { props: newProps }),
          "replace"
        );
        appStore2.dispatch({
          type: "replace",
          data: resolvedData.node,
          destinationIndex: index,
          destinationZone: zoneCompound
        });
      });
      const el = ref.current;
      el.addEventListener("input", handleInput);
      return () => {
        el.removeEventListener("input", handleInput);
        cleanupPortal == null ? void 0 : cleanupPortal();
      };
    }
  }, [appStoreApi, ref, value, disableLineBreaks, componentId, propPath]);
  const [isHovering, setIsHovering] = useState15(false);
  const [isFocused, setIsFocused] = useState15(false);
  return /* @__PURE__ */ jsx26(
    "span",
    {
      className: getClassName16(),
      ref,
      contentEditable: isHovering || isFocused ? "plaintext-only" : "false",
      onClick: (e) => {
        e.preventDefault();
        e.stopPropagation();
      },
      onClickCapture: (e) => {
        e.preventDefault();
        e.stopPropagation();
        const itemSelector = getSelectorForId(
          appStoreApi.getState().state,
          componentId
        );
        appStoreApi.getState().setUi({ itemSelector });
      },
      onKeyDown: (e) => {
        e.stopPropagation();
        if (disableLineBreaks && e.key === "Enter" || isReadOnly) {
          e.preventDefault();
        }
      },
      onKeyUp: (e) => {
        e.stopPropagation();
        e.preventDefault();
      },
      onMouseOverCapture: () => setIsHovering(true),
      onMouseOutCapture: () => setIsHovering(false),
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false)
    }
  );
};
var InlineTextField = memo4(InlineTextFieldInternal);

// lib/field-transforms/default-transforms/inline-text-transform.tsx
import { jsx as jsx27 } from "react/jsx-runtime";
var getInlineTextTransform = () => ({
  text: ({ value, componentId, field, propPath, isReadOnly }) => {
    if (field.contentEditable) {
      return /* @__PURE__ */ jsx27(
        InlineTextField,
        {
          propPath,
          componentId,
          value,
          opts: { disableLineBreaks: true },
          isReadOnly
        }
      );
    }
    return value;
  },
  textarea: ({ value, componentId, field, propPath, isReadOnly }) => {
    if (field.contentEditable) {
      return /* @__PURE__ */ jsx27(
        InlineTextField,
        {
          propPath,
          componentId,
          value,
          isReadOnly
        }
      );
    }
    return value;
  },
  custom: ({ value, componentId, field, propPath, isReadOnly }) => {
    if (field.contentEditable && typeof value === "string") {
      return /* @__PURE__ */ jsx27(
        InlineTextField,
        {
          propPath,
          componentId,
          value,
          isReadOnly
        }
      );
    }
    return value;
  }
});

// lib/field-transforms/default-transforms/rich-text-transform.tsx
init_react_import();
import {
  useEffect as useEffect14,
  useRef as useRef7,
  useCallback as useCallback13,
  memo as memo5,
  lazy as lazy2,
  Suspense as Suspense2
} from "react";
import { jsx as jsx28 } from "react/jsx-runtime";
var Editor2 = lazy2(
  () => import("./Editor-VRW6SBNE.mjs").then((m) => ({
    default: m.Editor
  }))
);
var RichTextRender = lazy2(
  () => import("./Render-EFVUKRHS.mjs").then((m) => ({
    default: m.RichTextRender
  }))
);
var InlineEditorWrapper = memo5(
  ({
    value,
    componentId,
    propPath,
    field,
    id
  }) => {
    const portalRef = useRef7(null);
    const appStoreApi = useAppStoreApi();
    const onClickHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const onClickCaptureHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const itemSelector = getSelectorForId(
        appStoreApi.getState().state,
        componentId
      );
      appStoreApi.getState().setUi({ itemSelector });
    };
    useEffect14(() => {
      if (!portalRef.current) return;
      const cleanup = registerOverlayPortal(portalRef.current, {
        disableDragOnFocus: true
      });
      return () => cleanup == null ? void 0 : cleanup();
    }, []);
    const handleChange = useCallback13(
      (content, ui) => __async(null, null, function* () {
        var _a;
        const appStore = appStoreApi.getState();
        const node = appStore.state.indexes.nodes[componentId];
        const zoneCompound = `${node.parentId}:${node.zone}`;
        const index = (_a = appStore.state.indexes.zones[zoneCompound]) == null ? void 0 : _a.contentIds.indexOf(
          componentId
        );
        const newProps = setDeep(node.data.props, propPath, content);
        const resolvedData = yield appStore.resolveComponentData(
          __spreadProps(__spreadValues({}, node.data), { props: newProps }),
          "replace"
        );
        appStore.dispatch({
          type: "replace",
          data: resolvedData.node,
          destinationIndex: index,
          destinationZone: zoneCompound,
          ui
        });
      }),
      [appStoreApi, componentId, propPath]
    );
    const handleFocus = useCallback13(
      (editor) => {
        appStoreApi.setState({
          currentRichText: {
            inlineComponentId: componentId,
            inline: true,
            field,
            editor,
            id
          }
        });
      },
      [field, componentId, appStoreApi, id]
    );
    if (!field.contentEditable)
      return /* @__PURE__ */ jsx28(Suspense2, { fallback: /* @__PURE__ */ jsx28(RichTextRenderFallback, { content: value }), children: /* @__PURE__ */ jsx28(RichTextRender, { content: value, field }) });
    const editorProps = {
      content: value,
      onChange: handleChange,
      field,
      inline: true,
      onFocus: handleFocus,
      id,
      name: propPath
    };
    return /* @__PURE__ */ jsx28(
      "div",
      {
        ref: portalRef,
        onClick: onClickHandler,
        onClickCapture: onClickCaptureHandler,
        children: /* @__PURE__ */ jsx28(Suspense2, { fallback: /* @__PURE__ */ jsx28(EditorFallback, __spreadValues({}, editorProps)), children: /* @__PURE__ */ jsx28(Editor2, __spreadValues({}, editorProps)) })
      }
    );
  }
);
InlineEditorWrapper.displayName = "InlineEditorWrapper";
var getRichTextTransform = () => ({
  richtext: ({ value, componentId, field, propPath, isReadOnly }) => {
    const { contentEditable = true, tiptap } = field;
    if (contentEditable === false || isReadOnly) {
      return /* @__PURE__ */ jsx28(RichTextRender, { content: value, field });
    }
    const id = `${componentId}_${field.type}_${propPath}`;
    return /* @__PURE__ */ jsx28(
      InlineEditorWrapper,
      {
        value,
        componentId,
        propPath,
        field,
        id
      },
      id
    );
  }
});

// components/MemoizeComponent/index.tsx
init_react_import();
import { deepEqual } from "fast-equals";
import { memo as memo6 } from "react";

// lib/shallow-equal.ts
init_react_import();
function shallowEqual(obj1, obj2, keysToIgnore = []) {
  if (Object.is(obj1, obj2)) return true;
  if (typeof obj1 !== "object" || obj1 === null || typeof obj2 !== "object" || obj2 === null) {
    return false;
  }
  if (Object.getPrototypeOf(obj1) !== Object.getPrototypeOf(obj2)) {
    return false;
  }
  const ignore = new Set(keysToIgnore);
  const keys1 = Object.keys(obj1).filter((k) => !ignore.has(k));
  const keys2 = Object.keys(obj2).filter((k) => !ignore.has(k));
  if (keys1.length !== keys2.length) return false;
  for (let i = 0; i < keys1.length; i++) {
    const currKey = keys1[i];
    if (!Object.prototype.hasOwnProperty.call(obj2, currKey)) return false;
    const val1 = obj1[currKey];
    const val2 = obj2[currKey];
    if (!Object.is(val1, val2)) return false;
  }
  return true;
}

// components/MemoizeComponent/index.tsx
import { jsx as jsx29 } from "react/jsx-runtime";
var RenderComponent = ({
  Component,
  componentProps: renderProps
}) => {
  return /* @__PURE__ */ jsx29(Component, __spreadValues({}, renderProps));
};
var MemoizeComponent = memo6(RenderComponent, (prev, next) => {
  let credbuildEquals = true;
  if ("credbuild" in prev.componentProps && "credbuild" in next.componentProps) {
    credbuildEquals = deepEqual(prev.componentProps.credbuild, next.componentProps.credbuild);
  }
  return prev.Component === next.Component && shallowEqual(prev.componentProps, next.componentProps, ["credbuild"]) && credbuildEquals;
});

// components/DropZone/VirtualizedDropZone.tsx
init_react_import();
import {
  useCallback as useCallback14,
  useContext as useContext8,
  useEffect as useEffect15,
  useMemo as useMemo11,
  useRef as useRef8
} from "react";
import {
  defaultRangeExtractor,
  elementScroll,
  observeElementOffset,
  observeElementRect,
  observeWindowOffset,
  observeWindowRect,
  useVirtualizer,
  windowScroll
} from "@tanstack/react-virtual";
import { Fragment as Fragment8, jsx as jsx30 } from "react/jsx-runtime";
var ROOT_ZONE_VIRTUALIZATION_OVERSCAN = 5;
var DEFAULT_VIRTUALIZED_ITEM_HEIGHT = 320;
var measuredItemHeights = /* @__PURE__ */ new Map();
var getEstimatedItemHeight = (componentId) => {
  var _a;
  return (_a = measuredItemHeights.get(componentId)) != null ? _a : DEFAULT_VIRTUALIZED_ITEM_HEIGHT;
};
var cacheMeasuredItemHeight = (componentId, height) => {
  if (height <= 0) {
    return;
  }
  measuredItemHeights.set(componentId, height);
};
var VirtualizedDropZone = ({
  contentIds,
  zoneCompound,
  renderItem
}) => {
  const selectedId = useAppStore((s) => {
    var _a, _b;
    return (_b = (_a = s.selectedItem) == null ? void 0 : _a.props.id) != null ? _b : null;
  });
  const frame = getFrame();
  const zoneStore = useContext8(ZoneStoreContext);
  const draggedItemId = useContextStore(ZoneStoreContext, (s) => {
    var _a;
    const draggedId = (_a = s.draggedItem) == null ? void 0 : _a.id;
    return draggedId ? String(draggedId) : null;
  });
  const dragTargetParentId = useContextStore(ZoneStoreContext, (s) => {
    var _a, _b;
    if ((_a = s.draggedItem) == null ? void 0 : _a.id) {
      const parentZone = Object.keys((_b = s.previewIndex) != null ? _b : {})[0];
      return parentZone == null ? void 0 : parentZone.split(":")[0];
    }
    return null;
  });
  const iframeWindow = frame == null ? void 0 : frame.defaultView;
  const measureRefsRef = useRef8(/* @__PURE__ */ new Map());
  const appStoreApi = useAppStoreApi();
  const resolveIndex = useCallback14(
    (targetId) => {
      var _a, _b, _c, _d;
      if (!targetId || targetId === "root") {
        return -1;
      }
      const directIndex = contentIds.indexOf(targetId);
      if (directIndex > -1) {
        return directIndex;
      }
      const path = (_c = (_b = (_a = appStoreApi.getState().state.indexes.nodes) == null ? void 0 : _a[targetId]) == null ? void 0 : _b.path) != null ? _c : [];
      for (let i = path.length - 1; i >= 0; i -= 1) {
        const candidateId = (_d = path[i]) == null ? void 0 : _d.split(":")[0];
        if (!candidateId || candidateId === "root") {
          continue;
        }
        const index = contentIds.indexOf(candidateId);
        if (index > -1) {
          return index;
        }
      }
      return -1;
    },
    [appStoreApi, contentIds]
  );
  const pinnedIndexes = useMemo11(() => {
    const nextPinnedIndexes = /* @__PURE__ */ new Set();
    [selectedId, draggedItemId, dragTargetParentId].forEach((targetId) => {
      const currentIndex = resolveIndex(targetId);
      if (currentIndex > -1) {
        nextPinnedIndexes.add(currentIndex);
      }
    });
    return Array.from(nextPinnedIndexes).sort((a, b) => a - b);
  }, [dragTargetParentId, draggedItemId, resolveIndex, selectedId]);
  const rangeExtractor = useCallback14(
    (range) => {
      const indexes = defaultRangeExtractor(range);
      pinnedIndexes.forEach((index) => {
        if (!indexes.includes(index)) {
          indexes.push(index);
        }
      });
      indexes.sort((a, b) => a - b);
      return indexes;
    },
    [pinnedIndexes]
  );
  const virtualizer = useVirtualizer({
    count: contentIds.length,
    getItemKey: (index) => contentIds[index],
    estimateSize: (index) => getEstimatedItemHeight(contentIds[index]),
    getScrollElement: () => iframeWindow != null ? iframeWindow : null,
    overscan: ROOT_ZONE_VIRTUALIZATION_OVERSCAN,
    observeElementRect: (instance, cb) => iframeWindow ? observeWindowRect(instance, cb) : observeElementRect(instance, cb),
    observeElementOffset: (instance, cb) => iframeWindow ? observeWindowOffset(instance, cb) : observeElementOffset(instance, cb),
    scrollToFn: (offset, options, instance) => iframeWindow ? windowScroll(offset, options, instance) : elementScroll(offset, options, instance),
    rangeExtractor,
    initialOffset: () => iframeWindow ? iframeWindow.scrollY : 0
  });
  useEffect15(() => {
    zoneStore.getState().registerRootVirtualizer(zoneCompound, {
      resolveIndex: (targetId) => resolveIndex(targetId),
      virtualizer
    });
    return () => {
      zoneStore.getState().unregisterRootVirtualizer(zoneCompound);
    };
  }, [resolveIndex, virtualizer, zoneCompound, zoneStore]);
  const getMeasureRef = useCallback14((componentId) => {
    const cachedRef = measureRefsRef.current.get(componentId);
    if (cachedRef) {
      return cachedRef;
    }
    const measureRef = (element) => {
      if (!element) {
        return;
      }
      const height = Math.ceil(element.getBoundingClientRect().height) || DEFAULT_VIRTUALIZED_ITEM_HEIGHT;
      if (typeof height === "number" && height > 0) {
        cacheMeasuredItemHeight(componentId, height);
      }
    };
    measureRefsRef.current.set(componentId, measureRef);
    return measureRef;
  }, []);
  useEffect15(() => {
    const validIds = new Set(contentIds);
    Array.from(measureRefsRef.current.keys()).forEach((componentId) => {
      if (!validIds.has(componentId)) {
        measureRefsRef.current.delete(componentId);
      }
    });
  }, [contentIds]);
  const virtualItems = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();
  const renderedItems = useMemo11(() => {
    const items = [];
    let previousEnd = 0;
    let previousIndex = -1;
    virtualItems.forEach((virtualItem) => {
      if (!virtualItem) return;
      const componentId = contentIds[virtualItem.index];
      const gapSize = Math.max(virtualItem.start - previousEnd, 0);
      if (gapSize > 0) {
        items.push(
          /* @__PURE__ */ jsx30(
            "div",
            {
              style: { height: `${gapSize}px` }
            },
            `gap:${previousIndex}:${virtualItem.index}`
          )
        );
      }
      items.push(
        renderItem({
          componentId,
          index: virtualItem.index,
          measureRef: getMeasureRef(componentId)
        })
      );
      previousEnd = virtualItem.end;
      previousIndex = virtualItem.index;
    });
    const trailingGap = Math.max(totalSize - previousEnd, 0);
    if (trailingGap > 0) {
      items.push(
        /* @__PURE__ */ jsx30(
          "div",
          {
            style: { height: `${trailingGap}px` }
          },
          `gap:${previousIndex}:end`
        )
      );
    }
    return items;
  }, [totalSize, virtualItems, getMeasureRef, contentIds, renderItem]);
  return /* @__PURE__ */ jsx30(Fragment8, { children: renderedItems });
};

// components/DropZone/index.tsx
import { Fragment as Fragment9, jsx as jsx31, jsxs as jsxs9 } from "react/jsx-runtime";
var getClassName17 = get_class_name_factory_default("DropZone", styles_module_default9);
var getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
var RENDER_DEBUG = false;
var InsertPreview = ({
  element,
  label,
  override
}) => {
  if (element) {
    return (
      // Safe to use this since the HTML is set by the user
      /* @__PURE__ */ jsx31("div", { dangerouslySetInnerHTML: { __html: element.outerHTML } })
    );
  }
  return /* @__PURE__ */ jsx31(DrawerItemInner, { name: label, children: override });
};
var DropZoneEditPure = (props) => /* @__PURE__ */ jsx31(DropZoneEdit, __spreadValues({}, props));
var DropZoneChild = ({
  zoneCompound,
  componentId,
  index,
  dragAxis,
  collisionAxis,
  inDroppableZone,
  itemRef
}) => {
  var _a, _b;
  const metadata = useAppStore((s) => s.metadata);
  const ctx = useContext9(dropZoneContext);
  const { depth = 1 } = ctx != null ? ctx : {};
  const zoneStore = useContext9(ZoneStoreContext);
  const nodeProps = useAppStore(
    useShallow6((s) => {
      var _a2;
      return (_a2 = s.state.indexes.nodes[componentId]) == null ? void 0 : _a2.flatData.props;
    })
  );
  const nodeType = useAppStore(
    (s) => {
      var _a2;
      return (_a2 = s.state.indexes.nodes[componentId]) == null ? void 0 : _a2.data.type;
    }
  );
  const nodeReadOnly = useAppStore(
    useShallow6((s) => {
      var _a2;
      return (_a2 = s.state.indexes.nodes[componentId]) == null ? void 0 : _a2.data.readOnly;
    })
  );
  const appStore = useAppStoreApi();
  const item = useMemo12(() => {
    if (nodeProps) {
      const expanded = expandNode({
        type: nodeType,
        props: nodeProps
      });
      return expanded;
    }
    const preview = zoneStore.getState().previewIndex[zoneCompound];
    if (componentId === (preview == null ? void 0 : preview.props.id)) {
      return {
        type: preview.componentType,
        props: preview.props,
        previewType: preview.type,
        element: preview.element
      };
    }
    return null;
  }, [componentId, zoneCompound, nodeType, nodeProps, zoneStore]);
  const componentConfig = useAppStore(
    (s) => (item == null ? void 0 : item.type) ? s.config.components[item.type] : null
  );
  const credbuildProps = useMemo12(
    () => ({
      renderDropZone: DropZoneEditPure,
      isEditing: true,
      dragRef: null,
      metadata: __spreadValues(__spreadValues({}, metadata), componentConfig == null ? void 0 : componentConfig.metadata)
    }),
    [metadata, componentConfig == null ? void 0 : componentConfig.metadata]
  );
  const overrides = useAppStore((s) => s.overrides);
  const isLoading = useAppStore(
    (s) => {
      var _a2;
      return ((_a2 = s.componentState[componentId]) == null ? void 0 : _a2.loadingCount) > 0;
    }
  );
  const isSelected = useAppStore(
    (s) => {
      var _a2;
      return ((_a2 = s.selectedItem) == null ? void 0 : _a2.props.id) === componentId || false;
    }
  );
  let label = (_b = (_a = componentConfig == null ? void 0 : componentConfig.label) != null ? _a : item == null ? void 0 : item.type.toString()) != null ? _b : "Component";
  const defaultsProps = useMemo12(
    () => __spreadProps(__spreadValues(__spreadValues({}, componentConfig == null ? void 0 : componentConfig.defaultProps), item == null ? void 0 : item.props), {
      credbuild: credbuildProps,
      editMode: true
      // DEPRECATED
    }),
    [componentConfig == null ? void 0 : componentConfig.defaultProps, item == null ? void 0 : item.props, credbuildProps]
  );
  const defaultedNode = useMemo12(
    () => {
      var _a2;
      return { type: (_a2 = item == null ? void 0 : item.type) != null ? _a2 : nodeType, props: defaultsProps };
    },
    [item == null ? void 0 : item.type, nodeType, defaultsProps]
  );
  const config = useAppStore((s) => s.config);
  const plugins = useAppStore((s) => s.plugins);
  const userFieldTransforms = useAppStore((s) => s.fieldTransforms);
  const combinedFieldTransforms = useMemo12(
    () => __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, getSlotTransform(DropZoneEditPure, (slotProps) => /* @__PURE__ */ jsx31(ContextSlotRender, { componentId, zone: slotProps.zone }))), getInlineTextTransform()), getRichTextTransform()), plugins.reduce(
      (acc, plugin) => __spreadValues(__spreadValues({}, acc), plugin.fieldTransforms),
      {}
    )), userFieldTransforms),
    [plugins, userFieldTransforms, componentId]
  );
  const transformedProps = useFieldTransformsTracked(
    config,
    defaultedNode,
    combinedFieldTransforms,
    nodeReadOnly,
    isLoading
  );
  if (!item) return;
  const Render2 = componentConfig ? componentConfig.render : () => /* @__PURE__ */ jsxs9("div", { style: { padding: 48, textAlign: "center" }, children: [
    "No configuration for ",
    item.type
  ] });
  let componentType = item.type;
  const isInserting = "previewType" in item ? item.previewType === "insert" : false;
  return /* @__PURE__ */ jsx31(
    DraggableComponent,
    {
      id: componentId,
      componentType,
      zoneCompound,
      depth: depth + 1,
      index,
      isLoading,
      isSelected,
      label,
      autoDragAxis: dragAxis,
      userDragAxis: collisionAxis,
      inDroppableZone,
      itemRef,
      children: (dragRef) => {
        var _a2;
        if ((componentConfig == null ? void 0 : componentConfig.inline) && !isInserting) {
          return /* @__PURE__ */ jsx31(
            MemoizeComponent,
            {
              Component: Render2,
              componentProps: __spreadProps(__spreadValues({}, transformedProps), {
                credbuild: __spreadProps(__spreadValues({}, transformedProps.credbuild), { dragRef })
              })
            }
          );
        }
        return /* @__PURE__ */ jsx31("div", { ref: dragRef, children: isInserting ? /* @__PURE__ */ jsx31(
          InsertPreview,
          {
            label,
            override: (_a2 = overrides.componentItem) != null ? _a2 : overrides.drawerItem,
            element: "element" in item && item.element ? item.element : void 0
          }
        ) : /* @__PURE__ */ jsx31(
          MemoizeComponent,
          {
            Component: Render2,
            componentProps: transformedProps
          }
        ) });
      }
    }
  );
};
var DropZoneChildMemo = memo7(DropZoneChild);
var DropZoneEdit = forwardRef(
  function DropZoneEditInternal({
    zone,
    allow,
    disallow,
    style,
    className,
    minEmptyHeight: userMinEmptyHeight = "128px",
    collisionAxis,
    as
  }, userRef) {
    const ctx = useContext9(dropZoneContext);
    const appStoreApi = useAppStoreApi();
    const {
      // These all need setting via context
      areaId,
      depth = 0,
      registerLocalZone,
      unregisterLocalZone
    } = ctx != null ? ctx : {};
    const path = useAppStore(
      useShallow6((s) => {
        var _a;
        return areaId ? (_a = s.state.indexes.nodes[areaId]) == null ? void 0 : _a.path : null;
      })
    );
    let zoneCompound = rootDroppableId;
    if (areaId) {
      if (zone !== rootDroppableId) {
        zoneCompound = `${areaId}:${zone}`;
      }
    }
    const isRootZone = zoneCompound === rootDroppableId || zone === rootDroppableId || areaId === "root";
    const inNextDeepestArea = useContextStore(
      ZoneStoreContext,
      (s) => s.nextAreaDepthIndex[areaId || ""]
    );
    const zoneContentIds = useAppStore(
      useShallow6((s) => {
        var _a;
        return (_a = s.state.indexes.zones[zoneCompound]) == null ? void 0 : _a.contentIds;
      })
    );
    const zoneType = useAppStore(
      useShallow6((s) => {
        var _a;
        return (_a = s.state.indexes.zones[zoneCompound]) == null ? void 0 : _a.type;
      })
    );
    useEffect16(() => {
      if (!zoneType || zoneType === "dropzone") {
        if (ctx == null ? void 0 : ctx.registerZone) {
          ctx == null ? void 0 : ctx.registerZone(zoneCompound);
        }
      }
    }, [zoneType, appStoreApi, ctx, zoneCompound]);
    useEffect16(() => {
      if (zoneType === "dropzone") {
        if (zoneCompound !== rootDroppableId) {
          console.warn(
            "DropZones have been deprecated in favor of slot fields and will be removed in a future version of CredBuild. Please see the migration guide: https://www.credbuild.com/docs/guides/migrations/dropzones-to-slots"
          );
        }
      }
    }, [zoneType, zoneCompound]);
    const contentIds = useMemo12(() => {
      return zoneContentIds || [];
    }, [zoneContentIds]);
    const ref = useRef9(null);
    const acceptsTarget = useCallback15(
      (componentType) => {
        if (!componentType) {
          return true;
        }
        if (disallow) {
          const defaultedAllow = allow || [];
          const filteredDisallow = (disallow || []).filter(
            (item) => defaultedAllow.indexOf(item) === -1
          );
          if (filteredDisallow.indexOf(componentType) !== -1) {
            return false;
          }
        } else if (allow) {
          if (allow.indexOf(componentType) === -1) {
            return false;
          }
        }
        return true;
      },
      [allow, disallow]
    );
    const targetAccepted = useContextStore(ZoneStoreContext, (s) => {
      var _a;
      const draggedComponentType = (_a = s.draggedItem) == null ? void 0 : _a.data.componentType;
      return acceptsTarget(draggedComponentType);
    });
    const hoveringOverArea = inNextDeepestArea || isRootZone;
    const isEnabled = useContextStore(ZoneStoreContext, (s) => {
      var _a;
      let _isEnabled = true;
      const isDeepestZone = (_a = s.zoneDepthIndex[zoneCompound]) != null ? _a : false;
      _isEnabled = isDeepestZone;
      if (_isEnabled) {
        _isEnabled = targetAccepted;
      }
      return _isEnabled;
    });
    useEffect16(() => {
      if (registerLocalZone) {
        registerLocalZone(zoneCompound, targetAccepted || isEnabled);
      }
      return () => {
        if (unregisterLocalZone) {
          unregisterLocalZone(zoneCompound);
        }
      };
    }, [targetAccepted, isEnabled, zoneCompound, registerLocalZone, unregisterLocalZone]);
    const [contentIdsWithPreview, preview] = useContentIdsWithPreview(
      contentIds,
      zoneCompound
    );
    const isDropEnabled = isEnabled && (preview ? contentIdsWithPreview.length === 1 : contentIdsWithPreview.length === 0);
    const zoneStore = useContext9(ZoneStoreContext);
    useEffect16(() => {
      const { enabledIndex } = zoneStore.getState();
      zoneStore.setState({
        enabledIndex: __spreadProps(__spreadValues({}, enabledIndex), { [zoneCompound]: isEnabled })
      });
    }, [isEnabled, zoneStore, zoneCompound]);
    const droppableConfig = {
      id: zoneCompound,
      collisionPriority: isEnabled ? depth : 0,
      disabled: !isDropEnabled,
      collisionDetector: pointerIntersection,
      type: "dropzone",
      data: {
        areaId,
        depth,
        isDroppableTarget: targetAccepted,
        path: path || []
      }
    };
    const { ref: dropRef } = useDroppable2(droppableConfig);
    const isAreaSelected = useAppStore(
      (s) => (s == null ? void 0 : s.selectedItem) && areaId === (s == null ? void 0 : s.selectedItem.props.id)
    );
    const [dragAxis] = useDragAxis(ref, collisionAxis);
    const [minEmptyHeight, isAnimating] = useMinEmptyHeight({
      zoneCompound,
      userMinEmptyHeight,
      ref
    });
    const setRefs = useCallback15(
      (node) => {
        assignRefs([ref, dropRef, userRef], node);
      },
      [dropRef, userRef]
    );
    const _experimentalVirtualization = useAppStore(
      (s) => s._experimentalVirtualization
    );
    const El = as != null ? as : "div";
    const isRootAreaZone = (areaId != null ? areaId : rootAreaId) === rootAreaId && depth === 0;
    const shouldVirtualizeItems = _experimentalVirtualization && isRootAreaZone;
    return /* @__PURE__ */ jsx31(
      El,
      {
        className: `${getClassName17({
          isRootZone,
          hoveringOverArea,
          isEnabled,
          isAreaSelected,
          hasChildren: contentIds.length > 0,
          isAnimating
        })}${className ? ` ${className}` : ""}`,
        ref: setRefs,
        "data-testid": `dropzone:${zoneCompound}`,
        "data-credbuild-dropzone": zoneCompound,
        style: __spreadProps(__spreadValues({}, style), {
          "--min-empty-height": minEmptyHeight,
          backgroundColor: RENDER_DEBUG ? getRandomColor() : style == null ? void 0 : style.backgroundColor
        }),
        children: shouldVirtualizeItems ? /* @__PURE__ */ jsx31(
          VirtualizedDropZone,
          {
            contentIds: contentIdsWithPreview,
            zoneCompound,
            renderItem: (props) => /* @__PURE__ */ jsx31(
              DropZoneChildMemo,
              {
                zoneCompound,
                componentId: props.componentId,
                dragAxis,
                index: props.index,
                collisionAxis,
                inDroppableZone: targetAccepted,
                itemRef: props.measureRef
              },
              props.componentId
            )
          }
        ) : contentIdsWithPreview.map((componentId, i) => /* @__PURE__ */ jsx31(
          DropZoneChildMemo,
          {
            zoneCompound,
            componentId,
            dragAxis,
            index: i,
            collisionAxis,
            inDroppableZone: targetAccepted
          },
          componentId
        ))
      }
    );
  }
);
var DropZoneRenderItem = ({
  config,
  item,
  metadata
}) => {
  const Component = config.components[item.type];
  const props = useSlots(config, item, (slotProps) => /* @__PURE__ */ jsx31(SlotRenderPure, __spreadProps(__spreadValues({}, slotProps), { config, metadata })));
  const nextContextValue = useMemo12(
    () => ({
      areaId: props.id,
      depth: 1
    }),
    [props]
  );
  const richtextProps = useRichtextProps(Component.fields, props);
  return /* @__PURE__ */ jsx31(DropZoneProvider, { value: nextContextValue, children: /* @__PURE__ */ jsx31(
    Component.render,
    __spreadProps(__spreadValues(__spreadValues({}, props), richtextProps), {
      credbuild: __spreadProps(__spreadValues({}, props.credbuild), {
        renderDropZone: DropZoneRenderPure,
        metadata: __spreadValues(__spreadValues({}, metadata), Component.metadata)
      })
    })
  ) }, props.id);
};
var DropZoneRenderPure = (props) => /* @__PURE__ */ jsx31(DropZoneRender, __spreadValues({}, props));
var DropZoneRender = forwardRef(
  function DropZoneRenderInternal({ className, style, zone, as }, ref) {
    const ctx = useContext9(dropZoneContext);
    const { areaId = "root" } = ctx || {};
    const { config, data, metadata } = useContext9(renderContext);
    let zoneCompound = `${areaId}:${zone}`;
    const content = useMemo12(() => {
      if (zoneCompound !== rootDroppableId) {
        return setupZone(data, zoneCompound).zones[zoneCompound];
      }
      return (data == null ? void 0 : data.content) || [];
    }, [data, zoneCompound]);
    useEffect16(() => {
      if (!content) {
        if (ctx == null ? void 0 : ctx.registerZone) {
          ctx == null ? void 0 : ctx.registerZone(zoneCompound);
        }
      }
    }, [content, ctx, zoneCompound]);
    const El = as != null ? as : "div";
    if (!data || !config) {
      return null;
    }
    return /* @__PURE__ */ jsx31(El, { className, style, ref, children: content.map((item) => {
      const Component = config.components[item.type];
      if (Component) {
        return /* @__PURE__ */ jsx31(
          DropZoneRenderItem,
          {
            config,
            item,
            metadata
          },
          item.props.id
        );
      }
      return null;
    }) });
  }
);
var DropZonePure = (props) => /* @__PURE__ */ jsx31(DropZone, __spreadValues({}, props));
var DropZone = forwardRef(
  function DropZone2(props, ref) {
    const ctx = useContext9(dropZoneContext);
    if ((ctx == null ? void 0 : ctx.mode) === "edit") {
      return /* @__PURE__ */ jsx31(Fragment9, { children: /* @__PURE__ */ jsx31(DropZoneEdit, __spreadProps(__spreadValues({}, props), { ref })) });
    }
    return /* @__PURE__ */ jsx31(Fragment9, { children: /* @__PURE__ */ jsx31(DropZoneRender, __spreadProps(__spreadValues({}, props), { ref })) });
  }
);

// components/Render/index.tsx
import React3, { useMemo as useMemo13 } from "react";
import { jsx as jsx32 } from "react/jsx-runtime";
var renderContext = React3.createContext({
  config: { components: {} },
  data: { root: {}, content: [] },
  metadata: {}
});
function Render({
  config,
  data,
  metadata = {}
}) {
  var _a, _b;
  const defaultedData = __spreadProps(__spreadValues({}, data), {
    root: data.root || {},
    content: data.content || []
  });
  const rootProps = "props" in defaultedData.root ? defaultedData.root.props : defaultedData.root;
  const title = (rootProps == null ? void 0 : rootProps.title) || "";
  const pageProps = __spreadProps(__spreadValues({}, rootProps), {
    credbuild: {
      renderDropZone: DropZonePure,
      isEditing: false,
      dragRef: null,
      metadata
    },
    title,
    editMode: false,
    id: "credbuild-root"
  });
  const propsWithSlots = useSlots(
    config,
    { type: "root", props: pageProps },
    (props) => /* @__PURE__ */ jsx32(SlotRender, __spreadProps(__spreadValues({}, props), { config, metadata }))
  );
  const richtextProps = useRichtextProps((_a = config.root) == null ? void 0 : _a.fields, pageProps);
  const nextContextValue = useMemo13(
    () => ({
      mode: "render",
      depth: 0
    }),
    []
  );
  if ((_b = config.root) == null ? void 0 : _b.render) {
    return /* @__PURE__ */ jsx32(renderContext.Provider, { value: { config, data: defaultedData, metadata }, children: /* @__PURE__ */ jsx32(DropZoneProvider, { value: nextContextValue, children: /* @__PURE__ */ jsx32(config.root.render, __spreadProps(__spreadValues(__spreadValues({}, propsWithSlots), richtextProps), { children: /* @__PURE__ */ jsx32(DropZoneRenderPure, { zone: rootZone }) })) }) });
  }
  return /* @__PURE__ */ jsx32(renderContext.Provider, { value: { config, data: defaultedData, metadata }, children: /* @__PURE__ */ jsx32(DropZoneProvider, { value: nextContextValue, children: /* @__PURE__ */ jsx32(DropZoneRenderPure, { zone: rootZone }) }) });
}

// lib/use-credbuild.ts
init_react_import();
import { createContext as createContext5, useContext as useContext10, useEffect as useEffect17, useState as useState16 } from "react";
import { createStore as createStore5, useStore as useStore3 } from "zustand";

// lib/data/resolve-data-by-id.ts
init_react_import();

// lib/data/resolve-and-replace-data.ts
init_react_import();
function resolveAndReplaceData(currentData, getState, trigger = "force") {
  return __async(this, null, function* () {
    const resolvedResult = yield getState().resolveComponentData(
      currentData,
      trigger
    );
    if (!resolvedResult.didChange) return;
    const itemSelector = getSelectorForId(
      getState().state,
      resolvedResult.node.props.id
    );
    if (!itemSelector) {
      console.warn(
        `Warning: Could not find component with id "${currentData.props.id}" to resolve its data. Component may have been removed or the id is invalid.`
      );
      return;
    }
    getState().dispatch({
      type: "replace",
      data: toComponent(resolvedResult.node),
      destinationIndex: itemSelector.index,
      destinationZone: itemSelector.zone
    });
  });
}

// lib/data/resolve-data-by-id.ts
function resolveDataById(id, getState, trigger) {
  return __async(this, null, function* () {
    const node = getState().state.indexes.nodes[id];
    if (!node) {
      console.warn(
        `Warning: Could not find component with id "${id}" to resolve its data. Component may have been removed or the id is invalid.`
      );
      return;
    }
    yield resolveAndReplaceData(node.data, getState, trigger);
  });
}

// lib/data/resolve-data-by-selector.ts
init_react_import();
function resolveDataBySelector(selector, getState, trigger) {
  return __async(this, null, function* () {
    const item = getItem(selector, getState().state);
    if (!item) {
      console.warn(
        `Warning: Could not find component for selector "${JSON.stringify(
          selector
        )}" to resolve its data. Component may have been removed or the selector is invalid.`
      );
      return;
    }
    const itemAsComponent = toComponent(item);
    yield resolveAndReplaceData(itemAsComponent, getState, trigger);
  });
}

// lib/use-credbuild.ts
var generateUseCredBuild = (store, getState) => {
  const history = {
    back: store.history.back,
    forward: store.history.forward,
    setHistories: store.history.setHistories,
    setHistoryIndex: store.history.setHistoryIndex,
    hasPast: store.history.hasPast(),
    hasFuture: store.history.hasFuture(),
    histories: store.history.histories,
    index: store.history.index
  };
  const storeData = {
    appState: makeStatePublic(store.state),
    config: store.config,
    dispatch: store.dispatch,
    getPermissions: store.permissions.getPermissions,
    refreshPermissions: store.permissions.refreshPermissions,
    resolveDataById: (id, trigger) => resolveDataById(id, getState, trigger),
    resolveDataBySelector: (selector, trigger) => resolveDataBySelector(selector, getState, trigger),
    history,
    selectedItem: store.selectedItem || null,
    getItemBySelector: (selector) => getItem(selector, store.state),
    getItemById: (id) => store.state.indexes.nodes[id].data,
    getSelectorForId: (id) => getSelectorForId(store.state, id),
    getParentById: (id) => {
      const node = store.state.indexes.nodes[id];
      const parentId = node.parentId;
      if (parentId === null) return;
      const parentNode = store.state.indexes.nodes[parentId];
      if (!parentNode) return;
      return parentNode.data;
    }
  };
  storeData.__private = {
    appState: store.state
  };
  return storeData;
};
var UseCredBuildStoreContext = createContext5(
  null
);
var convertToPickedStore = (store) => {
  return {
    state: store.state,
    config: store.config,
    dispatch: store.dispatch,
    permissions: store.permissions,
    history: store.history,
    selectedItem: store.selectedItem
  };
};
var useRegisterUseCredBuildStore = (appStore) => {
  const [useCredBuildStore] = useState16(
    () => createStore5(
      () => generateUseCredBuild(
        convertToPickedStore(appStore.getState()),
        appStore.getState
      )
    )
  );
  useEffect17(() => {
    return appStore.subscribe(
      (store) => convertToPickedStore(store),
      (pickedStore) => {
        useCredBuildStore.setState(
          generateUseCredBuild(pickedStore, appStore.getState)
        );
      }
    );
  }, [appStore, useCredBuildStore]);
  return useCredBuildStore;
};
function createUseCredBuild() {
  return function useCredBuild2(selector) {
    const useCredBuildApi = useContext10(UseCredBuildStoreContext);
    if (!useCredBuildApi) {
      throw new Error("useCredBuild must be used inside <CredBuild>.");
    }
    const result = useStore3(
      useCredBuildApi,
      selector != null ? selector : ((s) => s)
    );
    return result;
  };
}
function useCredBuild() {
  useEffect17(() => {
    console.warn(
      "You're using the `useCredBuild` method without a selector, which may cause unnecessary re-renders. Replace with `createUseCredBuild` and provide a selector for improved performance."
    );
  }, []);
  return createUseCredBuild()((s) => s);
}
function useGetCredBuild() {
  const useCredBuildApi = useContext10(UseCredBuildStoreContext);
  if (!useCredBuildApi) {
    throw new Error("useCredBuildGet must be used inside <CredBuild>.");
  }
  return useCredBuildApi.getState;
}

// plugins/blocks/index.tsx
init_react_import();

// components/CredBuild/components/Components/index.tsx
init_react_import();

// lib/use-component-list.tsx
init_react_import();
import { useEffect as useEffect19, useState as useState17 } from "react";

// components/ComponentList/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/ComponentList/styles.module.css#css-module
init_react_import();
var styles_module_default12 = { "ComponentList": "_ComponentList_1jl8i_1", "ComponentList--isExpanded": "_ComponentList--isExpanded_1jl8i_5", "ComponentList-content": "_ComponentList-content_1jl8i_9", "ComponentList-title": "_ComponentList-title_1jl8i_17", "ComponentList-titleIcon": "_ComponentList-titleIcon_1jl8i_53" };

// components/ComponentList/index.tsx
import { useEffect as useEffect18 } from "react";
import { jsx as jsx33, jsxs as jsxs10 } from "react/jsx-runtime";
var getClassName18 = get_class_name_factory_default("ComponentList", styles_module_default12);
var ComponentListItem = ({
  name,
  label
}) => {
  var _a;
  const overrides = useAppStore((s) => s.overrides);
  const canInsert = useAppStore(
    (s) => s.permissions.getPermissions({
      type: name
    }).insert
  );
  useEffect18(() => {
    if (overrides.componentItem) {
      console.warn(
        "The `componentItem` override has been deprecated and renamed to `drawerItem`"
      );
    }
  }, [overrides]);
  return /* @__PURE__ */ jsx33(Drawer.Item, { label, name, isDragDisabled: !canInsert, children: (_a = overrides.componentItem) != null ? _a : overrides.drawerItem });
};
var ComponentList = ({
  children,
  title,
  id
}) => {
  const config = useAppStore((s) => s.config);
  const setUi = useAppStore((s) => s.setUi);
  const componentList = useAppStore((s) => s.state.ui.componentList);
  const { expanded = true } = componentList[id] || {};
  return /* @__PURE__ */ jsxs10("div", { className: getClassName18({ isExpanded: expanded }), children: [
    title && /* @__PURE__ */ jsxs10(
      "button",
      {
        type: "button",
        className: getClassName18("title"),
        onClick: () => setUi({
          componentList: __spreadProps(__spreadValues({}, componentList), {
            [id]: __spreadProps(__spreadValues({}, componentList[id]), {
              expanded: !expanded
            })
          })
        }),
        title: expanded ? `Collapse${title ? ` ${title}` : ""}` : `Expand${title ? ` ${title}` : ""}`,
        children: [
          /* @__PURE__ */ jsxs10("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            id.toLowerCase().includes("hero") && /* @__PURE__ */ jsx33(LayoutTemplate, { size: 12, strokeWidth: 2.5 }),
            id.toLowerCase().includes("content") && /* @__PURE__ */ jsx33(FileText, { size: 12, strokeWidth: 2.5 }),
            id.toLowerCase().includes("marketing") && /* @__PURE__ */ jsx33(Megaphone, { size: 12, strokeWidth: 2.5 }),
            id.toLowerCase().includes("layout") && /* @__PURE__ */ jsx33(Box, { size: 12, strokeWidth: 2.5 }),
            id.toLowerCase().includes("basic") && /* @__PURE__ */ jsx33(Settings, { size: 12, strokeWidth: 2.5 }),
            id === "other" && /* @__PURE__ */ jsx33(Layers, { size: 12, strokeWidth: 2.5 }),
            /* @__PURE__ */ jsx33("div", { children: title == null ? void 0 : title.replace(/[\u2600-\u27BF]|[\uD83C][\uDF00-\uDFFF]|[\uD83D][\uDC00-\uDE4F]|[\uD83D][\uDE80-\uDEFF]/g, "").trim() })
          ] }),
          /* @__PURE__ */ jsx33("div", { className: getClassName18("titleIcon"), children: expanded ? /* @__PURE__ */ jsx33(ChevronUp, { size: 12 }) : /* @__PURE__ */ jsx33(ChevronDown, { size: 12 }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx33("div", { className: getClassName18("content"), children: /* @__PURE__ */ jsx33(Drawer, { children: children || Object.keys(config.components).map((componentKey) => {
      var _a;
      return /* @__PURE__ */ jsx33(
        ComponentListItem,
        {
          label: (_a = config.components[componentKey]["label"]) != null ? _a : componentKey,
          name: componentKey
        },
        componentKey
      );
    }) }) })
  ] });
};
ComponentList.Item = ComponentListItem;

// lib/use-component-list.tsx
import { jsx as jsx34 } from "react/jsx-runtime";
var useComponentList = () => {
  const [componentList, setComponentList] = useState17();
  const config = useAppStore((s) => s.config);
  const uiComponentList = useAppStore((s) => s.state.ui.componentList);
  useEffect19(() => {
    var _a, _b, _c;
    if (Object.keys(uiComponentList).length > 0) {
      const matchedComponents = [];
      let _componentList;
      _componentList = Object.entries(uiComponentList).map(
        ([categoryKey, category]) => {
          if (!category.components) {
            return null;
          }
          category.components.forEach((componentName) => {
            matchedComponents.push(componentName);
          });
          if (category.visible === false) {
            return null;
          }
          return /* @__PURE__ */ jsx34(
            ComponentList,
            {
              id: categoryKey,
              title: category.title || categoryKey,
              children: category.components.map((componentName, i) => {
                var _a2;
                const componentConf = config.components[componentName] || {};
                return /* @__PURE__ */ jsx34(
                  ComponentList.Item,
                  {
                    label: (_a2 = componentConf["label"]) != null ? _a2 : componentName,
                    name: componentName,
                    index: i
                  },
                  componentName
                );
              })
            },
            categoryKey
          );
        }
      );
      const remainingComponents = Object.keys(config.components).filter(
        (component) => matchedComponents.indexOf(component) === -1
      );
      if (remainingComponents.length > 0 && !((_a = uiComponentList.other) == null ? void 0 : _a.components) && ((_b = uiComponentList.other) == null ? void 0 : _b.visible) !== false) {
        _componentList.push(
          /* @__PURE__ */ jsx34(
            ComponentList,
            {
              id: "other",
              title: ((_c = uiComponentList.other) == null ? void 0 : _c.title) || "Other",
              children: remainingComponents.map((componentName, i) => {
                var _a2;
                const componentConf = config.components[componentName] || {};
                return /* @__PURE__ */ jsx34(
                  ComponentList.Item,
                  {
                    name: componentName,
                    label: (_a2 = componentConf["label"]) != null ? _a2 : componentName,
                    index: i
                  },
                  componentName
                );
              })
            },
            "other"
          )
        );
      }
      setComponentList(_componentList);
    }
  }, [config.categories, config.components, uiComponentList]);
  return componentList;
};

// components/CredBuild/components/Components/index.tsx
import { useMemo as useMemo14 } from "react";
import { jsx as jsx35 } from "react/jsx-runtime";
var Components = () => {
  const overrides = useAppStore((s) => s.overrides);
  const componentList = useComponentList();
  const Wrapper = useMemo14(() => {
    if (overrides.components) {
      console.warn(
        "The `components` override has been deprecated and renamed to `drawer`"
      );
    }
    return overrides.components || overrides.drawer || "div";
  }, [overrides]);
  return /* @__PURE__ */ jsx35(Wrapper, { children: componentList ? componentList : /* @__PURE__ */ jsx35(ComponentList, { id: "all" }) });
};

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/plugins/blocks/styles.module.css#css-module
init_react_import();
var styles_module_default13 = { "BlocksPlugin": "_BlocksPlugin_1ey1i_1" };

// plugins/blocks/index.tsx
import { jsx as jsx36 } from "react/jsx-runtime";
var getClassName19 = get_class_name_factory_default("BlocksPlugin", styles_module_default13);
var blocksPlugin = () => ({
  name: "blocks",
  label: "Blocks",
  render: () => /* @__PURE__ */ jsx36("div", { className: getClassName19(), children: /* @__PURE__ */ jsx36(Components, {}) }),
  icon: /* @__PURE__ */ jsx36(Shapes, {})
});

// plugins/outline/index.tsx
init_react_import();

// components/CredBuild/components/Outline/index.tsx
init_react_import();

// components/LayerTree/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/LayerTree/styles.module.css#css-module
init_react_import();
var styles_module_default14 = { "LayerTree": "_LayerTree_nus40_1", "LayerTree-zoneTitle": "_LayerTree-zoneTitle_nus40_11", "LayerTree-helper": "_LayerTree-helper_nus40_17", "Layer": "_Layer_nus40_1", "Layer-inner": "_Layer-inner_nus40_29", "Layer--containsZone": "_Layer--containsZone_nus40_35", "Layer-clickable": "_Layer-clickable_nus40_39", "Layer--isSelected": "_Layer--isSelected_nus40_58", "Layer-chevron": "_Layer-chevron_nus40_79", "Layer--childIsSelected": "_Layer--childIsSelected_nus40_80", "Layer-zones": "_Layer-zones_nus40_84", "Layer-title": "_Layer-title_nus40_98", "Layer-name": "_Layer-name_nus40_107", "Layer-icon": "_Layer-icon_nus40_113", "Layer-zoneIcon": "_Layer-zoneIcon_nus40_118" };

// components/LayerTree/index.tsx
import {
  forwardRef as forwardRef2,
  useCallback as useCallback16,
  useContext as useContext11,
  useRef as useRef10
} from "react";
import { useVirtualizer as useVirtualizer2 } from "@tanstack/react-virtual";
import { Fragment as Fragment10, jsx as jsx37, jsxs as jsxs11 } from "react/jsx-runtime";
var getClassName20 = get_class_name_factory_default("LayerTree", styles_module_default14);
var getClassNameLayer = get_class_name_factory_default("Layer", styles_module_default14);
var DEFAULT_LAYER_ROW_HEIGHT = 32;
var LAYER_TREE_VIRTUALIZATION_OVERSCAN = 8;
var MIN_VIRTUALIZED_LAYER_COUNT = 25;
var measuredRowHeights = /* @__PURE__ */ new Map();
var getZonesByParent = (zones) => {
  return Object.keys(zones).reduce((acc, zone) => {
    const [parentId] = zone.split(":");
    acc[parentId] = [...acc[parentId] || [], zone];
    return acc;
  }, {});
};
var getZoneLabel = (zoneCompound, nodes, config, label) => {
  var _a, _b, _c, _d;
  if (label !== void 0) {
    return label;
  }
  const [componentId, slotId] = zoneCompound.split(":");
  if (!slotId) {
    return;
  }
  const componentType = (_a = nodes[componentId]) == null ? void 0 : _a.data.type;
  const configForComponent = componentType && componentType !== rootAreaId ? config.components[componentType] : config.root;
  return (_d = (_c = (_b = configForComponent == null ? void 0 : configForComponent.fields) == null ? void 0 : _b[slotId]) == null ? void 0 : _c.label) != null ? _d : slotId;
};
var buildLayerNode = ({
  config,
  itemId,
  index,
  nodes,
  zoneCompound,
  zones,
  zonesByParent
}) => {
  var _a, _b, _c;
  const nodeData = nodes[itemId];
  const componentType = ((_a = nodeData == null ? void 0 : nodeData.data.type) == null ? void 0 : _a.toString()) || "Component";
  const label = (_c = (_b = config.components[componentType]) == null ? void 0 : _b.label) != null ? _c : componentType;
  const childZoneCompounds = zonesByParent[itemId] || [];
  return {
    childZones: childZoneCompounds.map(
      (childZoneCompound) => buildLayerTree({
        config,
        nodes,
        zoneCompound: childZoneCompound,
        zones,
        zonesByParent
      })
    ),
    componentType,
    index,
    itemId,
    label,
    zoneCompound
  };
};
var buildLayerTree = ({
  config,
  label,
  nodes,
  zoneCompound,
  zones,
  zonesByParent = getZonesByParent(zones)
}) => {
  var _a, _b;
  const contentIds = (_b = (_a = zones[zoneCompound]) == null ? void 0 : _a.contentIds) != null ? _b : [];
  return {
    items: contentIds.map(
      (itemId, index) => buildLayerNode({
        config,
        itemId,
        index,
        nodes,
        zoneCompound,
        zones,
        zonesByParent
      })
    ),
    label: getZoneLabel(zoneCompound, nodes, config, label),
    zoneCompound
  };
};
var getEstimatedRowHeight = (itemId) => {
  var _a;
  return (_a = measuredRowHeights.get(itemId)) != null ? _a : DEFAULT_LAYER_ROW_HEIGHT;
};
var cacheMeasuredRowHeight = (itemId, height) => {
  if (height <= 0) {
    return;
  }
  measuredRowHeights.set(itemId, height);
};
var getScrollParent = (el) => {
  var _a;
  let current = (_a = el == null ? void 0 : el.parentElement) != null ? _a : null;
  while (current) {
    const { overflow, overflowY } = getComputedStyle(current);
    if ([overflow, overflowY].some((value) => /auto|scroll/.test(value))) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
};
var Layer = forwardRef2(function Layer2({
  childIsSelected,
  dataIndex,
  depth,
  isSelected,
  node,
  selectedId,
  selectedPathIds
}, ref) {
  const dispatch = useAppStore((s) => s.dispatch);
  const zoneStore = useContext11(ZoneStoreContext);
  const isHovering = useContextStore(
    ZoneStoreContext,
    (s) => s.hoveringComponent === node.itemId
  );
  const containsZone = node.childZones.length > 0;
  const setItemSelector = useCallback16(
    (itemSelector) => {
      dispatch({ type: "setUi", ui: { itemSelector } });
    },
    [dispatch]
  );
  const shouldRenderChildren = isSelected || childIsSelected;
  const getLayerIcon = (type) => {
    const t = type.toLowerCase();
    if (t === "text" || t === "heading" || t.includes("heading")) return /* @__PURE__ */ jsx37(Type, { size: "14", strokeWidth: 2.5 });
    if (t.includes("hero")) return /* @__PURE__ */ jsx37(LayoutTemplate, { size: "14", strokeWidth: 2.5 });
    if (t.includes("pricing")) return /* @__PURE__ */ jsx37(CreditCard, { size: "14", strokeWidth: 2.5 });
    if (t.includes("stats")) return /* @__PURE__ */ jsx37(ChartColumn, { size: "14", strokeWidth: 2.5 });
    if (t.includes("testimonials")) return /* @__PURE__ */ jsx37(Quote, { size: "14", strokeWidth: 2.5 });
    if (t.includes("about") || t.includes("info")) return /* @__PURE__ */ jsx37(Info, { size: "14", strokeWidth: 2.5 });
    if (t.includes("gallery") || t.includes("image")) return /* @__PURE__ */ jsx37(Image, { size: "14", strokeWidth: 2.5 });
    if (t.includes("marketing") || t.includes("cta")) return /* @__PURE__ */ jsx37(Megaphone, { size: "14", strokeWidth: 2.5 });
    if (t.includes("content") || t.includes("blog")) return /* @__PURE__ */ jsx37(FileText, { size: "14", strokeWidth: 2.5 });
    if (t.includes("container") || t.includes("layout") || t.includes("flex")) return /* @__PURE__ */ jsx37(Box, { size: "14", strokeWidth: 2.5 });
    return /* @__PURE__ */ jsx37(LayoutGrid, { size: "14", strokeWidth: 2.5 });
  };
  return /* @__PURE__ */ jsxs11(
    "li",
    {
      ref,
      className: getClassNameLayer({
        childIsSelected,
        containsZone,
        isHovering,
        isSelected
      }),
      "data-index": dataIndex,
      "data-credbuild-layer-tree-id": node.itemId,
      children: [
        /* @__PURE__ */ jsx37("div", { className: getClassNameLayer("inner"), children: /* @__PURE__ */ jsxs11(
          "button",
          {
            type: "button",
            className: getClassNameLayer("clickable"),
            onClick: () => {
              if (isSelected) {
                setItemSelector(null);
                return;
              }
              setItemSelector({
                index: node.index,
                zone: node.zoneCompound
              });
              zoneStore.getState().scrollToComponent(node.itemId);
            },
            onMouseEnter: (e) => {
              e.stopPropagation();
              zoneStore.setState({ hoveringComponent: node.itemId });
            },
            onMouseLeave: (e) => {
              e.stopPropagation();
              zoneStore.setState({ hoveringComponent: null });
            },
            children: [
              containsZone && /* @__PURE__ */ jsx37(
                "div",
                {
                  className: getClassNameLayer("chevron"),
                  title: isSelected ? "Collapse" : "Expand",
                  children: /* @__PURE__ */ jsx37(ChevronDown, { size: "12" })
                }
              ),
              /* @__PURE__ */ jsxs11("div", { className: getClassNameLayer("title"), children: [
                /* @__PURE__ */ jsx37("div", { className: getClassNameLayer("icon"), children: getLayerIcon(node.componentType) }),
                /* @__PURE__ */ jsx37("div", { className: getClassNameLayer("name"), children: node.label })
              ] })
            ]
          }
        ) }),
        containsZone && shouldRenderChildren && node.childZones.map((childZone) => /* @__PURE__ */ jsx37(
          "div",
          {
            className: getClassNameLayer("zones"),
            children: /* @__PURE__ */ jsx37(
              LayerTreeZone,
              {
                depth: depth + 1,
                selectedId,
                selectedPathIds,
                tree: childZone
              }
            )
          },
          childZone.zoneCompound
        ))
      ]
    }
  );
});
var LayerTreeZone = ({
  depth,
  selectedId,
  selectedPathIds,
  tree
}) => {
  const shouldVirtualize = depth === 0 && tree.items.length >= MIN_VIRTUALIZED_LAYER_COUNT;
  return /* @__PURE__ */ jsxs11(Fragment10, { children: [
    tree.label && /* @__PURE__ */ jsxs11("div", { className: getClassName20("zoneTitle"), children: [
      /* @__PURE__ */ jsx37("div", { className: getClassName20("zoneIcon"), children: /* @__PURE__ */ jsx37(Layers, { size: "16" }) }),
      tree.label
    ] }),
    shouldVirtualize ? /* @__PURE__ */ jsx37(
      VirtualizedLayerTreeItems,
      {
        depth,
        selectedId,
        selectedPathIds,
        tree
      }
    ) : /* @__PURE__ */ jsx37(
      StaticLayerTreeItems,
      {
        depth,
        selectedId,
        selectedPathIds,
        tree
      }
    )
  ] });
};
var StaticLayerTreeItems = ({
  depth,
  selectedId,
  selectedPathIds,
  tree
}) => {
  return /* @__PURE__ */ jsxs11("ul", { className: getClassName20(), children: [
    tree.items.length === 0 && /* @__PURE__ */ jsx37("div", { className: getClassName20("helper"), children: "No items" }),
    tree.items.map((node) => /* @__PURE__ */ jsx37(
      Layer,
      {
        childIsSelected: selectedPathIds.has(node.itemId),
        depth,
        isSelected: selectedId === node.itemId,
        node,
        selectedId,
        selectedPathIds
      },
      node.itemId
    ))
  ] });
};
var VirtualizedLayerTreeItems = ({
  depth,
  selectedId,
  selectedPathIds,
  tree
}) => {
  const listRef = useRef10(null);
  const virtualizer = useVirtualizer2({
    count: tree.items.length,
    estimateSize: (index) => getEstimatedRowHeight(tree.items[index].itemId),
    getItemKey: (index) => tree.items[index].itemId,
    getScrollElement: () => getScrollParent(listRef.current),
    overscan: LAYER_TREE_VIRTUALIZATION_OVERSCAN,
    measureElement: (element) => {
      const height = Math.ceil(element.getBoundingClientRect().height);
      const itemId = element.dataset.credbuildLayerTreeId;
      if (itemId) {
        cacheMeasuredRowHeight(itemId, height);
      }
      return height || DEFAULT_LAYER_ROW_HEIGHT;
    }
  });
  const virtualItems = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();
  const renderedItems = [];
  let previousEnd = 0;
  let previousIndex = -1;
  virtualItems.forEach((virtualItem) => {
    const node = tree.items[virtualItem.index];
    const gapSize = Math.max(virtualItem.start - previousEnd, 0);
    if (gapSize > 0) {
      renderedItems.push(
        /* @__PURE__ */ jsx37(
          "li",
          {
            "aria-hidden": "true",
            style: { height: `${gapSize}px` }
          },
          `gap:${tree.zoneCompound}:${previousIndex}:${virtualItem.index}`
        )
      );
    }
    renderedItems.push(
      /* @__PURE__ */ jsx37(
        Layer,
        {
          childIsSelected: selectedPathIds.has(node.itemId),
          dataIndex: virtualItem.index,
          depth,
          isSelected: selectedId === node.itemId,
          node,
          ref: virtualizer.measureElement,
          selectedId,
          selectedPathIds
        },
        node.itemId
      )
    );
    previousEnd = virtualItem.end;
    previousIndex = virtualItem.index;
  });
  const trailingGap = Math.max(totalSize - previousEnd, 0);
  if (trailingGap > 0) {
    renderedItems.push(
      /* @__PURE__ */ jsx37(
        "li",
        {
          "aria-hidden": "true",
          style: { height: `${trailingGap}px` }
        },
        `gap:${tree.zoneCompound}:${previousIndex}:end`
      )
    );
  }
  return /* @__PURE__ */ jsxs11("ul", { className: getClassName20(), ref: listRef, children: [
    tree.items.length === 0 && /* @__PURE__ */ jsx37("div", { className: getClassName20("helper"), children: "No items" }),
    renderedItems
  ] });
};
var LayerTree = ({
  selectedId,
  selectedPathIds,
  trees
}) => {
  return /* @__PURE__ */ jsx37(Fragment10, { children: trees.map((tree) => /* @__PURE__ */ jsx37(
    LayerTreeZone,
    {
      depth: 0,
      selectedId,
      selectedPathIds,
      tree
    },
    tree.zoneCompound
  )) });
};

// components/CredBuild/components/Outline/index.tsx
import { useMemo as useMemo15 } from "react";

// lib/data/find-zones-for-area.ts
init_react_import();
var findZonesForArea = (state, area) => {
  return Object.keys(state.indexes.zones).filter(
    (zone) => zone.split(":")[0] === area
  );
};

// components/CredBuild/components/Outline/index.tsx
import { useShallow as useShallow7 } from "zustand/react/shallow";
import { jsx as jsx38 } from "react/jsx-runtime";
var Outline = () => {
  const outlineOverride = useAppStore((s) => s.overrides.outline);
  const config = useAppStore((s) => s.config);
  const nodes = useAppStore((s) => s.state.indexes.nodes);
  const zones = useAppStore((s) => s.state.indexes.zones);
  const selectedId = useAppStore((s) => {
    var _a;
    return ((_a = s.selectedItem) == null ? void 0 : _a.props.id) || null;
  });
  const rootZones = useAppStore(
    useShallow7((s) => findZonesForArea(s.state, "root"))
  );
  const selectedPathIds = useMemo15(() => {
    var _a;
    const selectedPath = selectedId ? (_a = nodes[selectedId]) == null ? void 0 : _a.path : null;
    return new Set(
      (selectedPath == null ? void 0 : selectedPath.map((candidate) => candidate.split(":")[0]).filter(Boolean)) || []
    );
  }, [nodes, selectedId]);
  const trees = useMemo15(
    () => rootZones.map(
      (zoneCompound) => buildLayerTree({
        config,
        label: rootZones.length === 1 ? "" : zoneCompound.split(":")[1],
        nodes,
        zoneCompound,
        zones
      })
    ),
    [config, nodes, rootZones, zones]
  );
  const Wrapper = useMemo15(() => outlineOverride || "div", [outlineOverride]);
  return /* @__PURE__ */ jsx38(Wrapper, { children: /* @__PURE__ */ jsx38(
    LayerTree,
    {
      selectedId,
      selectedPathIds,
      trees
    }
  ) });
};

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/plugins/outline/styles.module.css#css-module
init_react_import();
var styles_module_default15 = { "OutlinePlugin": "_OutlinePlugin_q92j6_1" };

// plugins/outline/index.tsx
import { jsx as jsx39 } from "react/jsx-runtime";
var getClassName21 = get_class_name_factory_default("OutlinePlugin", styles_module_default15);
var outlinePlugin = () => ({
  name: "outline",
  label: "Outline",
  render: () => /* @__PURE__ */ jsx39("div", { className: getClassName21(), children: /* @__PURE__ */ jsx39(Outline, {}) }),
  icon: /* @__PURE__ */ jsx39(List, {})
});

// plugins/fields/index.tsx
init_react_import();

// components/Breadcrumbs/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/Breadcrumbs/styles.module.css#css-module
init_react_import();
var styles_module_default16 = { "Breadcrumbs": "_Breadcrumbs_1e0gb_1", "Breadcrumbs-breadcrumbLabel": "_Breadcrumbs-breadcrumbLabel_1e0gb_7", "Breadcrumbs-breadcrumb": "_Breadcrumbs-breadcrumb_1e0gb_7" };

// lib/use-breadcrumbs.ts
init_react_import();
import { useMemo as useMemo16 } from "react";
var useBreadcrumbs = (renderCount) => {
  var _a;
  const selectedId = useAppStore((s) => {
    var _a2;
    return (_a2 = s.selectedItem) == null ? void 0 : _a2.props.id;
  });
  const config = useAppStore((s) => s.config);
  const path = useAppStore((s) => {
    var _a2;
    return (_a2 = s.state.indexes.nodes[selectedId]) == null ? void 0 : _a2.path;
  });
  const appStore = useAppStoreApi();
  return useMemo16(() => {
    const breadcrumbs = (path == null ? void 0 : path.map((zoneCompound) => {
      var _a2, _b, _c, _d;
      const [componentId] = zoneCompound.split(":");
      if (componentId === "root") {
        return {
          label: ((_a2 = config == null ? void 0 : config.root) == null ? void 0 : _a2.label) || "Page",
          selector: null
        };
      }
      const node = appStore.getState().state.indexes.nodes[componentId];
      const parentId = node.path[node.path.length - 1];
      const contentIds = ((_b = appStore.getState().state.indexes.zones[parentId]) == null ? void 0 : _b.contentIds) || [];
      const index = contentIds.indexOf(componentId);
      const label = node ? (_d = (_c = config.components[node.data.type]) == null ? void 0 : _c.label) != null ? _d : node.data.type : "Component";
      return {
        label,
        selector: node ? {
          index,
          zone: node.path[node.path.length - 1]
        } : null
      };
    })) || [];
    if (renderCount) {
      return breadcrumbs.slice(breadcrumbs.length - renderCount);
    }
    return breadcrumbs;
  }, [path, renderCount, appStore, config.components, (_a = config == null ? void 0 : config.root) == null ? void 0 : _a.label]);
};

// components/Breadcrumbs/index.tsx
import { jsx as jsx40, jsxs as jsxs12 } from "react/jsx-runtime";
var getClassName22 = get_class_name_factory_default("Breadcrumbs", styles_module_default16);
var Breadcrumbs = ({
  children,
  numParents = 1
}) => {
  const setUi = useAppStore((s) => s.setUi);
  const breadcrumbs = useBreadcrumbs(numParents);
  return /* @__PURE__ */ jsxs12("div", { className: getClassName22(), children: [
    breadcrumbs.map((breadcrumb, i) => /* @__PURE__ */ jsxs12("div", { className: getClassName22("breadcrumb"), children: [
      /* @__PURE__ */ jsx40(
        "button",
        {
          type: "button",
          className: getClassName22("breadcrumbLabel"),
          onClick: () => setUi({ itemSelector: breadcrumb.selector }),
          children: breadcrumb.label
        }
      ),
      /* @__PURE__ */ jsx40(ChevronRight, { size: 16 })
    ] }, i)),
    children
  ] });
};

// components/CredBuild/components/Fields/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/CredBuild/components/Fields/styles.module.css#css-module
init_react_import();
var styles_module_default17 = { "CredBuildFields": "_CredBuildFields_slc6y_1", "CredBuildFields--isLoading": "_CredBuildFields--isLoading_slc6y_6", "CredBuildFields-loadingOverlay": "_CredBuildFields-loadingOverlay_slc6y_10", "CredBuildFields-loadingOverlayInner": "_CredBuildFields-loadingOverlayInner_slc6y_25", "CredBuildFields-field": "_CredBuildFields-field_slc6y_32", "CredBuildFields--wrapFields": "_CredBuildFields--wrapFields_slc6y_36" };

// components/CredBuild/components/Fields/index.tsx
import {
  memo as memo8,
  useCallback as useCallback17,
  useContext as useContext12,
  useEffect as useEffect20,
  useMemo as useMemo17
} from "react";
import { useShallow as useShallow8 } from "zustand/react/shallow";
import { Fragment as Fragment11, jsx as jsx41, jsxs as jsxs13 } from "react/jsx-runtime";
var getClassName23 = get_class_name_factory_default("CredBuildFields", styles_module_default17);
var DefaultFields = ({
  children
}) => {
  return /* @__PURE__ */ jsx41(Fragment11, { children });
};
var createOnChange = (fieldName, appStore) => (value, updatedUi) => __async(null, null, function* () {
  const { dispatch, state, selectedItem, resolveComponentData } = appStore.getState();
  const { data, ui } = state;
  const { itemSelector } = ui;
  const rootProps = data.root.props || data.root;
  const currentProps = selectedItem ? selectedItem.props : rootProps;
  const newProps = __spreadProps(__spreadValues({}, currentProps), { [fieldName]: value });
  if (selectedItem && itemSelector) {
    const resolved = yield resolveComponentData(
      __spreadProps(__spreadValues({}, selectedItem), { props: newProps }),
      "replace"
    );
    const latestSelector = getSelectorForId(
      appStore.getState().state,
      selectedItem.props.id
    );
    if (!latestSelector) return;
    dispatch({
      type: "replace",
      destinationIndex: latestSelector.index,
      destinationZone: latestSelector.zone || rootDroppableId,
      data: resolved.node,
      ui: updatedUi
    });
    return;
  }
  if (data.root.props) {
    dispatch({
      type: "replaceRoot",
      root: (yield resolveComponentData(
        __spreadProps(__spreadValues({}, data.root), { props: newProps }),
        "replace"
      )).node,
      ui: __spreadValues(__spreadValues({}, ui), updatedUi),
      recordHistory: true
    });
    return;
  }
  dispatch({
    type: "setData",
    data: { root: newProps }
  });
});
var FieldsChildInner = ({ fieldName }) => {
  const field = useAppStore((s) => s.fields.fields[fieldName]);
  const isReadOnly = useAppStore(
    (s) => ((s.selectedItem ? s.selectedItem.readOnly : s.state.data.root.readOnly) || {})[fieldName]
  );
  const id = useAppStore((s) => {
    if (!field) return null;
    return s.selectedItem ? `${s.selectedItem.props.id}_${field.type}_${fieldName}` : `root_${field.type}_${fieldName}`;
  });
  const permissions = useAppStore(
    useShallow8((s) => {
      const { selectedItem, permissions: permissions2 } = s;
      return selectedItem ? permissions2.getPermissions({ item: selectedItem }) : permissions2.getPermissions({ root: true });
    })
  );
  const appStore = useAppStoreApi();
  const onChange = useCallback17(
    (value, updatedUi) => __async(null, null, function* () {
      createOnChange(fieldName, appStore)(value, updatedUi);
    }),
    [fieldName, appStore]
  );
  const { visible = true } = field != null ? field : {};
  const fieldStore = useContext12(fieldContextStore.ctx);
  useEffect20(() => {
    return appStore.subscribe(
      (s) => {
        var _a;
        const data = s.getCurrentData();
        return (_a = data.props) == null ? void 0 : _a[fieldName];
      },
      (value) => {
        fieldStore.setState({ [fieldName]: value });
      }
    );
  }, [appStore, fieldStore, fieldName]);
  if (!field || !id || !visible) return null;
  if (field.type === "slot") return null;
  return /* @__PURE__ */ jsx41("div", { className: getClassName23("field"), children: /* @__PURE__ */ jsx41(
    AutoFieldPrivate,
    {
      field,
      name: fieldName,
      id,
      readOnly: !permissions.edit || isReadOnly,
      onChange
    }
  ) }, id);
};
var FieldsChild = ({ fieldName }) => {
  const appStore = useAppStoreApi();
  const initialValue = useMemo17(() => {
    var _a;
    const value = (_a = appStore.getState().getCurrentData().props) == null ? void 0 : _a[fieldName];
    return { [fieldName]: value };
  }, [appStore, fieldName]);
  return /* @__PURE__ */ jsx41(fieldContextStore.Provider, { value: initialValue, children: /* @__PURE__ */ jsx41(FieldsChildInner, { fieldName }) });
};
var FieldsChildMemo = memo8(FieldsChild);
var FieldsInternal = ({ wrapFields = true }) => {
  const overrides = useAppStore((s) => s.overrides);
  const componentResolving = useAppStore((s) => {
    var _a, _b;
    const loadingCount = s.selectedItem ? (_a = s.componentState[s.selectedItem.props.id]) == null ? void 0 : _a.loadingCount : (_b = s.componentState["root"]) == null ? void 0 : _b.loadingCount;
    return (loadingCount != null ? loadingCount : 0) > 0;
  });
  const itemSelector = useAppStore(useShallow8((s) => s.state.ui.itemSelector));
  const id = useAppStore((s) => {
    var _a;
    return (_a = s.selectedItem) == null ? void 0 : _a.props.id;
  });
  const appStore = useAppStoreApi();
  useRegisterFieldsSlice(appStore, id);
  const fieldsLoading = useAppStore((s) => s.fields.loading);
  const fieldNames = useAppStore(
    useShallow8((s) => {
      if (s.fields.id === id) {
        return Object.keys(s.fields.fields);
      }
      return [];
    })
  );
  const isLoading = fieldsLoading || componentResolving;
  const Wrapper = useMemo17(() => overrides.fields || DefaultFields, [overrides]);
  return /* @__PURE__ */ jsxs13(
    "form",
    {
      className: getClassName23({ wrapFields }),
      onSubmit: (e) => {
        e.preventDefault();
      },
      children: [
        /* @__PURE__ */ jsx41(Wrapper, { isLoading, itemSelector, children: fieldNames.map((fieldName) => /* @__PURE__ */ jsx41(FieldsChildMemo, { fieldName }, fieldName)) }),
        isLoading && /* @__PURE__ */ jsx41("div", { className: getClassName23("loadingOverlay"), children: /* @__PURE__ */ jsx41("div", { className: getClassName23("loadingOverlayInner"), children: /* @__PURE__ */ jsx41(Loader, { size: 16 }) }) })
      ]
    }
  );
};
var Fields = memo8(FieldsInternal);

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/plugins/fields/styles.module.css#css-module
init_react_import();
var styles_module_default18 = { "FieldsPlugin": "_FieldsPlugin_6as57_1", "FieldsPlugin-header": "_FieldsPlugin-header_6as57_7" };

// plugins/fields/index.tsx
import { jsx as jsx42, jsxs as jsxs14 } from "react/jsx-runtime";
var getClassName24 = get_class_name_factory_default("FieldsPlugin", styles_module_default18);
var CurrentTitle = () => {
  const label = useAppStore((s) => {
    var _a, _b;
    const selectedItem = s.selectedItem;
    return selectedItem ? (_b = (_a = s.config.components[selectedItem.type]) == null ? void 0 : _a.label) != null ? _b : selectedItem.type : "Page";
  });
  return label;
};
var fieldsPlugin = ({ desktopSideBar = "right" } = {}) => ({
  name: "fields",
  label: "Fields",
  render: () => /* @__PURE__ */ jsxs14("div", { className: getClassName24(), children: [
    /* @__PURE__ */ jsx42("div", { className: getClassName24("header"), children: /* @__PURE__ */ jsx42(Breadcrumbs, { numParents: 2, children: /* @__PURE__ */ jsx42(CurrentTitle, {}) }) }),
    /* @__PURE__ */ jsx42(Fields, {})
  ] }),
  icon: /* @__PURE__ */ jsx42(RectangleEllipsis, {}),
  mobileOnly: desktopSideBar === "right"
});

// components/CredBuild/index.tsx
init_react_import();
import {
  createContext as createContext8,
  useCallback as useCallback26,
  useContext as useContext15,
  useEffect as useEffect29,
  useMemo as useMemo26,
  useRef as useRef17,
  useState as useState25
} from "react";

// components/CredBuild/components/Preview/index.tsx
init_react_import();
import { useCallback as useCallback19, useEffect as useEffect22, useRef as useRef12, useMemo as useMemo19 } from "react";

// components/AutoFrame/index.tsx
init_react_import();
import {
  createContext as createContext6,
  useCallback as useCallback18,
  useContext as useContext13,
  useEffect as useEffect21,
  useRef as useRef11,
  useState as useState18
} from "react";
import hash from "object-hash";
import { createPortal as createPortal3 } from "react-dom";
import { Fragment as Fragment12, jsx as jsx43 } from "react/jsx-runtime";
var styleSelector = 'style, link[rel="stylesheet"]';
var collectStyles = (doc) => {
  const collected = [];
  doc.querySelectorAll(styleSelector).forEach((style) => {
    if (style.tagName === "STYLE") {
      const hasContent = !!style.innerHTML.trim();
      if (hasContent) {
        collected.push(style);
      }
    } else {
      collected.push(style);
    }
  });
  return collected;
};
var getStyleSheet = (el) => {
  return Array.from(document.styleSheets).find((ss) => {
    const ownerNode = ss.ownerNode;
    return ownerNode.href === el.href;
  });
};
var getStyles = (styleSheet) => {
  if (styleSheet) {
    try {
      return Array.from(styleSheet.cssRules).map((rule) => rule.cssText).join("");
    } catch (e) {
      console.warn(
        "Access to stylesheet %s is denied. Ignoring\u2026",
        styleSheet.href
      );
    }
  }
  return "";
};
var syncAttributes = (sourceElement, targetElement) => {
  const attributes = sourceElement.attributes;
  if ((attributes == null ? void 0 : attributes.length) > 0) {
    Array.from(attributes).forEach((attribute) => {
      targetElement.setAttribute(attribute.name, attribute.value);
    });
  }
};
var defer = (fn) => setTimeout(fn, 0);
var CopyHostStyles = ({
  children,
  debug = false,
  onStylesLoaded = () => null
}) => {
  const { document: doc, window: win } = useFrame();
  useEffect21(() => {
    if (!win || !doc) {
      return () => {
      };
    }
    let elements = [];
    const hashes = {};
    const lookupEl = (el) => elements.findIndex((elementMap) => elementMap.original === el);
    const mirrorEl = (el, inlineStyles = false) => __async(null, null, function* () {
      let mirror;
      if (el.nodeName === "LINK" && inlineStyles) {
        mirror = document.createElement("style");
        mirror.type = "text/css";
        let styleSheet = getStyleSheet(el);
        if (!styleSheet) {
          yield new Promise((resolve) => {
            const fn = () => {
              resolve();
              el.removeEventListener("load", fn);
            };
            el.addEventListener("load", fn);
          });
          styleSheet = getStyleSheet(el);
        }
        const styles2 = getStyles(styleSheet);
        if (!styles2) {
          if (debug) {
            console.warn(
              `Tried to load styles for link element, but couldn't find them. Skipping...`
            );
          }
          return;
        }
        mirror.innerHTML = styles2;
        mirror.setAttribute("data-href", el.getAttribute("href"));
      } else {
        mirror = el.cloneNode(true);
      }
      return mirror;
    });
    const addEl = (el) => __async(null, null, function* () {
      const index = lookupEl(el);
      if (index > -1) {
        if (debug)
          console.log(
            `Tried to add an element that was already mirrored. Updating instead...`
          );
        elements[index].mirror.innerText = el.innerText;
        return;
      }
      const mirror = yield mirrorEl(el);
      if (!mirror) {
        return;
      }
      const elHash = hash(mirror.outerHTML);
      if (hashes[elHash]) {
        if (debug)
          console.log(
            `iframe already contains element that is being mirrored. Skipping...`
          );
        return;
      }
      hashes[elHash] = true;
      doc.head.append(mirror);
      elements.push({ original: el, mirror });
      if (debug) console.log(`Added style node ${el.outerHTML}`);
    });
    const removeEl = (el) => {
      var _a, _b;
      const index = lookupEl(el);
      if (index === -1) {
        if (debug)
          console.log(
            `Tried to remove an element that did not exist. Skipping...`
          );
        return;
      }
      const elHash = hash(el.outerHTML);
      (_b = (_a = elements[index]) == null ? void 0 : _a.mirror) == null ? void 0 : _b.remove();
      delete hashes[elHash];
      if (debug) console.log(`Removed style node ${el.outerHTML}`);
    };
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
              const el = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
              if (el && el.matches(styleSelector)) {
                defer(() => addEl(el));
              }
            }
          });
          mutation.removedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
              const el = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
              if (el && el.matches(styleSelector)) {
                defer(() => removeEl(el));
              }
            }
          });
        }
      });
    });
    const parentDocument = win.parent.document;
    const collectedStyles = collectStyles(parentDocument);
    const hrefs = [];
    let stylesLoaded = 0;
    const parentHtml = parentDocument.getElementsByTagName("html")[0];
    syncAttributes(parentHtml, doc.documentElement);
    const parentBody = parentDocument.getElementsByTagName("body")[0];
    syncAttributes(parentBody, doc.body);
    Promise.all(
      collectedStyles.map((styleNode, i) => __async(null, null, function* () {
        if (styleNode.nodeName === "LINK") {
          const linkHref = styleNode.href;
          if (hrefs.indexOf(linkHref) > -1) {
            return;
          }
          hrefs.push(linkHref);
        }
        const mirror = yield mirrorEl(styleNode);
        if (!mirror) return;
        elements.push({ original: styleNode, mirror });
        return mirror;
      }))
    ).then((mirrorStyles) => {
      const filtered = mirrorStyles.filter(
        (el) => typeof el !== "undefined"
      );
      filtered.forEach((mirror) => {
        mirror.onload = () => {
          stylesLoaded = stylesLoaded + 1;
          if (stylesLoaded >= filtered.length) {
            onStylesLoaded();
          }
        };
        mirror.onerror = () => {
          console.warn(`AutoFrame couldn't load a stylesheet`);
          stylesLoaded = stylesLoaded + 1;
          if (stylesLoaded >= filtered.length) {
            onStylesLoaded();
          }
        };
      });
      doc.head.innerHTML = "";
      doc.head.append(...filtered);
      filtered.forEach((mirror) => {
        if (mirror.nodeName === "STYLE") {
          stylesLoaded = stylesLoaded + 1;
        }
      });
      if (stylesLoaded >= filtered.length) {
        onStylesLoaded();
      }
      observer.observe(parentDocument.head, { childList: true, subtree: true });
      filtered.forEach((el) => {
        const elHash = hash(el.outerHTML);
        hashes[elHash] = true;
      });
    });
    return () => {
      observer.disconnect();
    };
  }, [debug, doc, onStylesLoaded, win]);
  return /* @__PURE__ */ jsx43(Fragment12, { children });
};
var autoFrameContext = createContext6({});
var useFrame = () => useContext13(autoFrameContext);
function AutoFrame(_a) {
  var _b = _a, {
    children,
    className,
    debug,
    id,
    onReady = () => {
    },
    onNotReady = () => {
    },
    frameRef
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "debug",
    "id",
    "onReady",
    "onNotReady",
    "frameRef"
  ]);
  const [loaded, setLoaded] = useState18(false);
  const [ctx, setCtx] = useState18({});
  const [mountTarget, setMountTarget] = useState18();
  const [stylesLoaded, setStylesLoaded] = useState18(false);
  const handleStylesLoaded = useCallback18(() => {
    setStylesLoaded(true);
  }, []);
  const onReadyRef = useRef11(onReady);
  const onNotReadyRef = useRef11(onNotReady);
  useEffect21(() => {
    onReadyRef.current = onReady;
    onNotReadyRef.current = onNotReady;
  }, [onReady, onNotReady]);
  useEffect21(() => {
    var _a2;
    if (frameRef.current) {
      const doc = frameRef.current.contentDocument;
      const win = frameRef.current.contentWindow;
      setCtx((prev) => {
        if (prev.document === doc && prev.window === win) return prev;
        return {
          document: doc || void 0,
          window: win || void 0
        };
      });
      const newMountTarget = (_a2 = frameRef.current.contentDocument) == null ? void 0 : _a2.getElementById("frame-root");
      setMountTarget((prev) => {
        if (prev === newMountTarget) return prev;
        return newMountTarget;
      });
      if (doc && win && stylesLoaded) {
        onReadyRef.current();
      }
    }
  }, [frameRef, loaded, stylesLoaded]);
  return /* @__PURE__ */ jsx43(
    "iframe",
    __spreadProps(__spreadValues({}, props), {
      className,
      id,
      srcDoc: '<!DOCTYPE html><html><head></head><body><div id="frame-root" data-credbuild-entry></div></body></html>',
      ref: frameRef,
      onLoad: () => {
        setLoaded(true);
      },
      children: /* @__PURE__ */ jsx43(autoFrameContext.Provider, { value: ctx, children: loaded && mountTarget && /* @__PURE__ */ jsx43(
        CopyHostStyles,
        {
          debug,
          onStylesLoaded: handleStylesLoaded,
          children: createPortal3(children, mountTarget)
        }
      ) })
    })
  );
}
AutoFrame.displayName = "AutoFrame";
var AutoFrame_default = AutoFrame;

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/CredBuild/components/Preview/styles.module.css#css-module
init_react_import();
var styles_module_default19 = { "CredBuildPreview": "_CredBuildPreview_1z08a_1", "CredBuildPreview-frame": "_CredBuildPreview-frame_1z08a_6" };

// components/CredBuild/components/Preview/index.tsx
import { Fragment as Fragment13, jsx as jsx44 } from "react/jsx-runtime";
var getClassName25 = get_class_name_factory_default("CredBuildPreview", styles_module_default19);
var useBubbleIframeEvents = (ref) => {
  const status = useAppStore((s) => s.status);
  useEffect22(() => {
    if (ref.current && status === "READY") {
      const iframe = ref.current;
      const handlePointerMove = (event) => {
        const evt = new BubbledPointerEvent("pointermove", __spreadProps(__spreadValues({}, event), {
          bubbles: true,
          cancelable: false,
          clientX: event.clientX,
          clientY: event.clientY,
          originalTarget: event.target
        }));
        iframe.dispatchEvent(evt);
      };
      const register = () => {
        var _a;
        unregister();
        (_a = iframe.contentDocument) == null ? void 0 : _a.addEventListener(
          "pointermove",
          handlePointerMove,
          {
            capture: true
          }
        );
      };
      const unregister = () => {
        var _a;
        (_a = iframe.contentDocument) == null ? void 0 : _a.removeEventListener(
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
var Preview2 = ({ id = "credbuild-preview" }) => {
  const dispatch = useAppStore((s) => s.dispatch);
  const root = useAppStore((s) => s.state.data.root);
  const config = useAppStore((s) => s.config);
  const setStatus = useAppStore((s) => s.setStatus);
  const iframe = useAppStore((s) => s.iframe);
  const overrides = useAppStore((s) => s.overrides);
  const metadata = useAppStore((s) => s.metadata);
  const renderData = useAppStore(
    (s) => s.state.ui.previewMode === "edit" ? null : s.state.data
  );
  const Page = useCallback19(
    (pageProps) => {
      var _a, _b, _c, _d;
      const propsWithSlots = useSlots(
        config,
        { type: "root", props: pageProps },
        DropZoneEditPure
      );
      const richtextProps = useRichtextProps(
        (_b = (_a = config.root) == null ? void 0 : _a.fields) != null ? _b : {},
        pageProps
      );
      return ((_c = config.root) == null ? void 0 : _c.render) ? (_d = config.root) == null ? void 0 : _d.render(__spreadValues(__spreadValues({
        id: "credbuild-root"
      }, propsWithSlots), richtextProps)) : /* @__PURE__ */ jsx44(Fragment13, { children: propsWithSlots.children });
    },
    [config]
  );
  const Frame = useMemo19(() => overrides.iframe, [overrides]);
  const rootProps = root.props || root;
  const ref = useRef12(null);
  useBubbleIframeEvents(ref);
  const inner = !renderData ? /* @__PURE__ */ jsx44(
    Page,
    __spreadProps(__spreadValues({}, rootProps), {
      credbuild: {
        renderDropZone: DropZonePure,
        isEditing: true,
        dragRef: null,
        metadata
      },
      editMode: true,
      children: /* @__PURE__ */ jsx44(DropZonePure, { zone: rootDroppableId })
    })
  ) : /* @__PURE__ */ jsx44(Render, { data: renderData, config, metadata });
  useEffect22(() => {
    if (!iframe.enabled) {
      setStatus("READY");
    }
  }, [iframe.enabled, setStatus]);
  return /* @__PURE__ */ jsx44(
    "div",
    {
      className: getClassName25(),
      id,
      "data-credbuild-preview": true,
      onClick: (e) => {
        const el = e.target;
        if (!el.hasAttribute("data-credbuild-component") && !el.hasAttribute("data-credbuild-dropzone")) {
          dispatch({ type: "setUi", ui: { itemSelector: null } });
        }
      },
      children: iframe.enabled ? /* @__PURE__ */ jsx44(
        AutoFrame_default,
        {
          id: "preview-frame",
          className: getClassName25("frame"),
          "data-rfd-iframe": true,
          onReady: () => {
            setStatus("READY");
          },
          onNotReady: () => {
            setStatus("MOUNTED");
          },
          frameRef: ref,
          children: /* @__PURE__ */ jsx44(autoFrameContext.Consumer, { children: ({ document: document2 }) => {
            if (Frame) {
              return /* @__PURE__ */ jsx44(Frame, { document: document2, children: inner });
            }
            return inner;
          } })
        }
      ) : /* @__PURE__ */ jsx44(
        "div",
        {
          id: "preview-frame",
          className: getClassName25("frame"),
          ref,
          "data-credbuild-entry": true,
          children: inner
        }
      )
    }
  );
};

// lib/use-loaded-overrides.ts
init_react_import();
import { useMemo as useMemo20 } from "react";

// lib/load-overrides.ts
init_react_import();
var loadOverrides = ({
  overrides,
  plugins
}) => {
  const collected = __spreadValues({}, overrides);
  plugins == null ? void 0 : plugins.forEach((plugin) => {
    if (!plugin.overrides) return;
    Object.keys(plugin.overrides).forEach((_overridesType) => {
      var _a;
      const overridesType = _overridesType;
      if (!((_a = plugin.overrides) == null ? void 0 : _a[overridesType])) return;
      if (overridesType === "fieldTypes") {
        const fieldTypes = plugin.overrides.fieldTypes;
        Object.keys(fieldTypes).forEach((fieldType) => {
          collected.fieldTypes = collected.fieldTypes || {};
          const childNode2 = collected.fieldTypes[fieldType];
          const Comp2 = (props) => fieldTypes[fieldType](__spreadProps(__spreadValues({}, props), {
            children: childNode2 ? childNode2(props) : props.children
          }));
          collected.fieldTypes[fieldType] = Comp2;
        });
        return;
      }
      const childNode = collected[overridesType];
      const Comp = (props) => plugin.overrides[overridesType](__spreadProps(__spreadValues({}, props), {
        children: childNode ? childNode(props) : props.children
      }));
      collected[overridesType] = Comp;
    });
  });
  return collected;
};

// lib/use-loaded-overrides.ts
var useLoadedOverrides = ({
  overrides,
  plugins
}) => {
  return useMemo20(() => {
    return loadOverrides({ overrides, plugins });
  }, [plugins, overrides]);
};

// components/CredBuild/index.tsx
import { deepEqual as deepEqual2 } from "fast-equals";

// components/CredBuild/components/Layout/index.tsx
init_react_import();
import { useEffect as useEffect28, useMemo as useMemo25, useState as useState24 } from "react";

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/CredBuild/components/Layout/styles.module.css#css-module
init_react_import();
var styles_module_default20 = { "CredBuildLayout": "_CredBuildLayout_ildl0_1", "CredBuildLayout-inner": "_CredBuildLayout-inner_ildl0_8", "CredBuildLayout--leftSideBarVisible": "_CredBuildLayout--leftSideBarVisible_ildl0_29", "CredBuildLayout--rightSideBarVisible": "_CredBuildLayout--rightSideBarVisible_ildl0_33", "CredBuild--hidePlugins": "_CredBuild--hidePlugins_ildl0_37", "CredBuildLayout-item": "_CredBuildLayout-item_ildl0_43", "CredBuildLayout-header": "_CredBuildLayout-header_ildl0_49", "CredBuildLayout-left": "_CredBuildLayout-left_ildl0_54", "CredBuildLayout-editor": "_CredBuildLayout-editor_ildl0_67", "CredBuildLayout-right": "_CredBuildLayout-right_ildl0_76", "CredBuildLayout-sidebar": "_CredBuildLayout-sidebar_ildl0_93", "CredBuildPluginTab": "_CredBuildPluginTab_ildl0_108", "CredBuildPluginTab--visible": "_CredBuildPluginTab--visible_ildl0_115", "CredBuildPluginTab-body": "_CredBuildPluginTab-body_ildl0_119", "CredBuildLayout--mounted": "_CredBuildLayout--mounted_ildl0_135" };

// lib/use-inject-css.ts
init_react_import();
import { useEffect as useEffect23, useState as useState19 } from "react";
var styles = ``;
var useInjectStyleSheet = (initialStyles, iframeEnabled) => {
  const [el, setEl] = useState19();
  useEffect23(() => {
    setEl(document.createElement("style"));
  }, []);
  useEffect23(() => {
    var _a;
    if (!el || typeof window === "undefined") {
      return;
    }
    el.innerHTML = initialStyles;
    if (iframeEnabled) {
      const frame = getFrame();
      (_a = frame == null ? void 0 : frame.head) == null ? void 0 : _a.appendChild(el);
    }
    document.head.appendChild(el);
  }, [iframeEnabled, el, initialStyles]);
  return el;
};
var useInjectGlobalCss = (iframeEnabled) => {
  return useInjectStyleSheet(styles, iframeEnabled);
};

// components/DefaultOverride/index.tsx
init_react_import();
import { Fragment as Fragment14, jsx as jsx45 } from "react/jsx-runtime";
var DefaultOverride = ({ children }) => /* @__PURE__ */ jsx45(Fragment14, { children });

// lib/use-preview-mode-hotkeys.ts
init_react_import();
import { useCallback as useCallback20 } from "react";
var usePreviewModeHotkeys = () => {
  const appStore = useAppStoreApi();
  const toggleInteractive = useCallback20(() => {
    const dispatch = appStore.getState().dispatch;
    dispatch({
      type: "setUi",
      ui: (ui) => ({
        previewMode: ui.previewMode === "edit" ? "interactive" : "edit"
      })
    });
  }, [appStore]);
  useHotkey({ meta: true, i: true }, toggleInteractive);
  useHotkey({ ctrl: true, i: true }, toggleInteractive);
};

// components/CredBuild/components/Header/index.tsx
init_react_import();
import { memo as memo9, useCallback as useCallback21, useMemo as useMemo23, useState as useState21 } from "react";

// components/MenuBar/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/MenuBar/styles.module.css#css-module
init_react_import();
var styles_module_default21 = { "MenuBar": "_MenuBar_1m2ld_1", "MenuBar--menuOpen": "_MenuBar--menuOpen_1m2ld_14", "MenuBar-inner": "_MenuBar-inner_1m2ld_29", "MenuBar-history": "_MenuBar-history_1m2ld_45" };

// components/MenuBar/index.tsx
import { Fragment as Fragment15, jsx as jsx46, jsxs as jsxs15 } from "react/jsx-runtime";
var getClassName26 = get_class_name_factory_default("MenuBar", styles_module_default21);
function MenuBar({
  menuOpen = false,
  renderHeaderActions,
  setMenuOpen
}) {
  const back = useAppStore((s) => s.history.back);
  const forward = useAppStore((s) => s.history.forward);
  const hasFuture = useAppStore((s) => s.history.hasFuture());
  const hasPast = useAppStore((s) => s.history.hasPast());
  return /* @__PURE__ */ jsx46(
    "div",
    {
      className: getClassName26({ menuOpen }),
      onClick: (event) => {
        var _a;
        const element = event.target;
        if (window.matchMedia("(min-width: 638px)").matches) {
          return;
        }
        if (element.tagName === "A" && ((_a = element.getAttribute("href")) == null ? void 0 : _a.startsWith("#"))) {
          setMenuOpen(false);
        }
      },
      children: /* @__PURE__ */ jsxs15("div", { className: getClassName26("inner"), children: [
        /* @__PURE__ */ jsxs15("div", { className: getClassName26("history"), children: [
          /* @__PURE__ */ jsx46(
            IconButton,
            {
              type: "button",
              title: "undo",
              disabled: !hasPast,
              onClick: back,
              children: /* @__PURE__ */ jsx46(Undo2, { size: 21 })
            }
          ),
          /* @__PURE__ */ jsx46(
            IconButton,
            {
              type: "button",
              title: "redo",
              disabled: !hasFuture,
              onClick: forward,
              children: /* @__PURE__ */ jsx46(Redo2, { size: 21 })
            }
          )
        ] }),
        /* @__PURE__ */ jsx46(Fragment15, { children: renderHeaderActions && renderHeaderActions() })
      ] })
    }
  );
}

// components/ViewportControls/index.tsx
init_react_import();
import { useEffect as useEffect24, useMemo as useMemo21, useState as useState20 } from "react";

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/ViewportControls/styles.module.css#css-module
init_react_import();
var styles_module_default22 = { "ViewportControls": "_ViewportControls_1e0ai_1", "ViewportControls--fullScreen": "_ViewportControls--fullScreen_1e0ai_5", "ViewportControls-toggleButton": "_ViewportControls-toggleButton_1e0ai_14", "ViewportControls--isExpanded": "_ViewportControls--isExpanded_1e0ai_38", "ViewportControls-actions": "_ViewportControls-actions_1e0ai_42", "ViewportControls-actionsInner": "_ViewportControls-actionsInner_1e0ai_46", "ViewportControls-divider": "_ViewportControls-divider_1e0ai_75", "ViewportControls-zoomSelect": "_ViewportControls-zoomSelect_1e0ai_81", "ViewportControls-zoom": "_ViewportControls-zoom_1e0ai_81", "ViewportButton-inner": "_ViewportButton-inner_1e0ai_111", "ViewportButton--isActive": "_ViewportButton--isActive_1e0ai_119" };

// components/ViewportControls/index.tsx
import { jsx as jsx47, jsxs as jsxs16 } from "react/jsx-runtime";
var icons = {
  Smartphone: /* @__PURE__ */ jsx47(Smartphone, { size: 16 }),
  Tablet: /* @__PURE__ */ jsx47(Tablet, { size: 16 }),
  Monitor: /* @__PURE__ */ jsx47(Monitor, { size: 16 }),
  FullWidth: /* @__PURE__ */ jsx47(Expand, { size: 16 })
};
var getClassName27 = get_class_name_factory_default("ViewportControls", styles_module_default22);
var getClassNameButton = get_class_name_factory_default("ViewportButton", styles_module_default22);
var ActionButton = ({
  children,
  title,
  onClick,
  isActive,
  disabled
}) => {
  return /* @__PURE__ */ jsx47("span", { className: getClassNameButton({ isActive }), suppressHydrationWarning: true, children: /* @__PURE__ */ jsx47(
    IconButton,
    {
      type: "button",
      title,
      disabled: disabled || isActive,
      onClick,
      suppressHydrationWarning: true,
      children: /* @__PURE__ */ jsx47("span", { className: getClassNameButton("inner"), children })
    }
  ) });
};
var defaultZoomOptions = [
  { label: "25%", value: 0.25 },
  { label: "50%", value: 0.5 },
  { label: "75%", value: 0.75 },
  { label: "100%", value: 1 },
  { label: "125%", value: 1.25 },
  { label: "150%", value: 1.5 },
  { label: "200%", value: 2 }
];
var ViewportControls = ({
  autoZoom,
  zoom,
  onViewportChange,
  onZoom,
  fullScreen
}) => {
  var _a, _b;
  const viewports = useAppStore((s) => s.viewports);
  const uiViewports = useAppStore((s) => s.state.ui.viewports);
  const defaultsContainAutoZoom = defaultZoomOptions.find(
    (option) => option.value === autoZoom
  );
  const zoomOptions = useMemo21(
    () => [
      ...defaultZoomOptions,
      ...defaultsContainAutoZoom ? [] : [
        {
          value: autoZoom,
          label: `${(autoZoom * 100).toFixed(0)}% (Auto)`
        }
      ]
    ].filter((a) => a.value <= autoZoom).sort((a, b) => a.value > b.value ? 1 : -1),
    [autoZoom, defaultsContainAutoZoom]
  );
  const [activeViewport, setActiveViewport] = useState20(
    uiViewports.current.width
  );
  useEffect24(() => {
    setActiveViewport(uiViewports.current.width);
  }, [uiViewports.current.width, uiViewports]);
  const [isExpanded, setIsExpanded] = useState20(false);
  return /* @__PURE__ */ jsxs16(
    "div",
    {
      className: getClassName27({ isExpanded, fullScreen }),
      suppressHydrationWarning: true,
      children: [
        /* @__PURE__ */ jsx47("div", { className: getClassName27("actions"), children: /* @__PURE__ */ jsxs16("div", { className: getClassName27("actionsInner"), children: [
          viewports.map((viewport, i) => /* @__PURE__ */ jsx47(
            ActionButton,
            {
              title: viewport.label ? `Switch to ${viewport.label} viewport` : "Switch viewport",
              onClick: () => {
                setActiveViewport(viewport.width);
                onViewportChange(viewport);
              },
              isActive: activeViewport === viewport.width,
              children: typeof viewport.icon === "string" ? icons[viewport.icon] || viewport.icon : viewport.icon || icons.Smartphone
            },
            i
          )),
          /* @__PURE__ */ jsx47("div", { className: getClassName27("divider") }),
          /* @__PURE__ */ jsx47(
            ActionButton,
            {
              title: "Zoom viewport out",
              disabled: zoom <= ((_a = zoomOptions[0]) == null ? void 0 : _a.value),
              onClick: (e) => {
                e.stopPropagation();
                onZoom(
                  zoomOptions[Math.max(
                    zoomOptions.findIndex((option) => option.value === zoom) - 1,
                    0
                  )].value
                );
              },
              children: /* @__PURE__ */ jsx47(ZoomOut, { size: 16 })
            }
          ),
          /* @__PURE__ */ jsx47(
            ActionButton,
            {
              title: "Zoom viewport in",
              disabled: zoom >= ((_b = zoomOptions[zoomOptions.length - 1]) == null ? void 0 : _b.value),
              onClick: (e) => {
                e.stopPropagation();
                onZoom(
                  zoomOptions[Math.min(
                    zoomOptions.findIndex((option) => option.value === zoom) + 1,
                    zoomOptions.length - 1
                  )].value
                );
              },
              children: /* @__PURE__ */ jsx47(ZoomIn, { size: 16 })
            }
          ),
          /* @__PURE__ */ jsxs16("div", { className: getClassName27("zoom"), children: [
            /* @__PURE__ */ jsx47("div", { className: getClassName27("divider") }),
            /* @__PURE__ */ jsx47(
              "select",
              {
                className: getClassName27("zoomSelect"),
                value: zoom.toString(),
                onClick: (e) => {
                  e.stopPropagation();
                },
                onChange: (e) => {
                  onZoom(parseFloat(e.currentTarget.value));
                },
                children: zoomOptions.map((option) => /* @__PURE__ */ jsx47(
                  "option",
                  {
                    value: option.value,
                    label: option.label
                  },
                  option.label
                ))
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsx47(
          "button",
          {
            className: getClassName27("toggleButton"),
            title: "Toggle viewport menu",
            onClick: () => setIsExpanded((s) => !s),
            children: isExpanded ? /* @__PURE__ */ jsx47(X, { size: 16 }) : /* @__PURE__ */ jsx47(Monitor, { size: 16 })
          }
        )
      ]
    }
  );
};

// components/CredBuild/components/Header/index.tsx
import { useShallow as useShallow9 } from "zustand/react/shallow";

// lib/frame-context.tsx
init_react_import();
import {
  createContext as createContext7,
  useContext as useContext14,
  useRef as useRef13,
  useMemo as useMemo22
} from "react";
import { jsx as jsx48 } from "react/jsx-runtime";
var FrameContext = createContext7(null);
var FrameProvider = ({
  children
}) => {
  const frameRef = useRef13(null);
  const value = useMemo22(
    () => ({
      frameRef
    }),
    []
  );
  return /* @__PURE__ */ jsx48(FrameContext.Provider, { value, children });
};
var useCanvasFrame = () => {
  const context = useContext14(FrameContext);
  if (context === null) {
    throw new Error("useCanvasFrame must be used within a FrameProvider");
  }
  return context;
};

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/CredBuild/components/Header/styles.module.css#css-module
init_react_import();
var styles_module_default23 = { "CredBuildHeader": "_CredBuildHeader_qzv5u_1", "CredBuildHeader-inner": "_CredBuildHeader-inner_qzv5u_20", "CredBuildHeader-viewportTools": "_CredBuildHeader-viewportTools_qzv5u_28", "CredBuildHeader-leftActions": "_CredBuildHeader-leftActions_qzv5u_35", "CredBuildHeader-toggle": "_CredBuildHeader-toggle_qzv5u_41", "CredBuildHeader-leftSideBarToggle": "_CredBuildHeader-leftSideBarToggle_qzv5u_47", "CredBuildHeader-rightSideBarToggle": "_CredBuildHeader-rightSideBarToggle_qzv5u_48", "CredBuildHeader-title": "_CredBuildHeader-title_qzv5u_52", "CredBuildHeader-path": "_CredBuildHeader-path_qzv5u_57", "CredBuildHeader-tools": "_CredBuildHeader-tools_qzv5u_68", "CredBuildHeader-menuButton": "_CredBuildHeader-menuButton_qzv5u_75" };

// components/CredBuild/components/Header/index.tsx
import { Fragment as Fragment16, jsx as jsx49, jsxs as jsxs17 } from "react/jsx-runtime";
var getClassName28 = get_class_name_factory_default("CredBuildHeader", styles_module_default23);
var HeaderInner = ({
  hidePlugins
}) => {
  const {
    onPublish,
    renderHeader,
    renderHeaderActions,
    headerTitle,
    headerPath,
    iframe: _iframe
  } = usePropsContext();
  const dispatch = useAppStore((s) => s.dispatch);
  const appStore = useAppStoreApi();
  const defaultHeaderRender = useMemo23(() => {
    if (renderHeader) {
      console.warn(
        "`renderHeader` is deprecated. Please use `overrides.header` and the `useCredBuild` hook instead"
      );
      const RenderHeader = (_a) => {
        var _b = _a, { actions } = _b, props = __objRest(_b, ["actions"]);
        const Comp = renderHeader;
        const appState = useAppStore((s) => s.state);
        return /* @__PURE__ */ jsx49(Comp, __spreadProps(__spreadValues({}, props), { dispatch, state: appState, children: actions }));
      };
      return RenderHeader;
    }
    return DefaultOverride;
  }, [renderHeader, dispatch]);
  const defaultHeaderActionsRender = useMemo23(() => {
    if (renderHeaderActions) {
      console.warn(
        "`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `useCredBuild` hook instead."
      );
      const RenderHeader = (props) => {
        const Comp = renderHeaderActions;
        const appState = useAppStore((s) => s.state);
        return /* @__PURE__ */ jsx49(Comp, __spreadProps(__spreadValues({}, props), { dispatch, state: appState }));
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
  const [menuOpen, setMenuOpen] = useState21(false);
  const rootTitle = useAppStore((s) => {
    var _a, _b;
    const rootData = (_a = s.state.indexes.nodes["root"]) == null ? void 0 : _a.data;
    return (_b = rootData.props.title) != null ? _b : "";
  });
  const leftSideBarVisible = useAppStore((s) => s.state.ui.leftSideBarVisible);
  const rightSideBarVisible = useAppStore(
    (s) => s.state.ui.rightSideBarVisible
  );
  const {
    setUi,
    zoomConfig,
    setZoomConfig,
    _experimentalFullScreenCanvas
  } = useAppStore(
    useShallow9((s) => ({
      setUi: s.setUi,
      zoomConfig: s.zoomConfig,
      setZoomConfig: s.setZoomConfig,
      _experimentalFullScreenCanvas: s._experimentalFullScreenCanvas
    }))
  );
  const { viewports } = useAppStore(
    useShallow9((s) => ({
      viewports: s.state.ui.viewports
    }))
  );
  const { frameRef } = useCanvasFrame();
  const resetAutoZoom = useResetAutoZoom(frameRef);
  const toggleSidebars = useCallback21(
    (sidebar) => {
      const widerViewport = window.matchMedia("(min-width: 638px)").matches;
      const sideBarVisible = sidebar === "left" ? leftSideBarVisible : rightSideBarVisible;
      const oppositeSideBar = sidebar === "left" ? "rightSideBarVisible" : "leftSideBarVisible";
      dispatch({
        type: "setUi",
        ui: __spreadValues({
          [`${sidebar}SideBarVisible`]: !sideBarVisible
        }, !widerViewport ? { [oppositeSideBar]: false } : {})
      });
    },
    [dispatch, leftSideBarVisible, rightSideBarVisible]
  );
  return /* @__PURE__ */ jsx49(
    CustomHeader,
    {
      actions: /* @__PURE__ */ jsx49(Fragment16, { children: /* @__PURE__ */ jsxs17(CustomHeaderActions, { children: [
        /* @__PURE__ */ jsx49(
          Button,
          {
            href: headerPath || "/",
            newTab: true,
            variant: "secondary",
            icon: /* @__PURE__ */ jsx49(ExternalLink, { size: 14 }),
            children: "View Web"
          }
        ),
        /* @__PURE__ */ jsx49(
          Button,
          {
            onClick: () => {
              const data = appStore.getState().state.data;
              onPublish && onPublish(data);
            },
            icon: /* @__PURE__ */ jsx49(Globe, { size: 14 }),
            children: "Publish"
          }
        )
      ] }) }),
      children: /* @__PURE__ */ jsx49(
        "header",
        {
          className: getClassName28({
            leftSideBarVisible,
            rightSideBarVisible,
            hidePlugins
          }),
          children: /* @__PURE__ */ jsxs17("div", { className: getClassName28("inner"), children: [
            /* @__PURE__ */ jsxs17("div", { className: getClassName28("leftActions"), children: [
              /* @__PURE__ */ jsx49("div", { style: { marginRight: "16px" }, children: /* @__PURE__ */ jsx49(
                Button,
                {
                  href: "/dashboard",
                  variant: "secondary",
                  size: "medium",
                  icon: /* @__PURE__ */ jsx49(LayoutDashboard, { size: 14 }),
                  children: "Dashboard"
                }
              ) }),
              /* @__PURE__ */ jsxs17("div", { className: getClassName28("toggle"), children: [
                /* @__PURE__ */ jsx49("div", { className: getClassName28("leftSideBarToggle"), children: /* @__PURE__ */ jsx49(
                  IconButton,
                  {
                    type: "button",
                    onClick: () => {
                      toggleSidebars("left");
                    },
                    title: "Toggle left sidebar",
                    children: /* @__PURE__ */ jsx49(PanelLeft, { size: 16, focusable: "false" })
                  }
                ) }),
                /* @__PURE__ */ jsx49("div", { className: getClassName28("rightSideBarToggle"), children: /* @__PURE__ */ jsx49(
                  IconButton,
                  {
                    type: "button",
                    onClick: () => {
                      toggleSidebars("right");
                    },
                    title: "Toggle right sidebar",
                    children: /* @__PURE__ */ jsx49(PanelRight, { size: 16, focusable: "false" })
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsx49("div", { className: getClassName28("title"), children: /* @__PURE__ */ jsxs17(Heading, { rank: "2", size: "xs", children: [
                /* @__PURE__ */ jsx49("span", { style: { fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }, children: headerTitle || rootTitle || "Page" }),
                headerPath && /* @__PURE__ */ jsx49(Fragment16, { children: /* @__PURE__ */ jsx49("code", { className: getClassName28("path"), style: { fontSize: "10px", opacity: 0.6, marginLeft: "8px" }, children: headerPath }) })
              ] }) })
            ] }),
            /* @__PURE__ */ jsx49("div", { className: getClassName28("viewportTools"), children: /* @__PURE__ */ jsx49(
              ViewportControls,
              {
                fullScreen: _experimentalFullScreenCanvas,
                autoZoom: zoomConfig.autoZoom,
                zoom: zoomConfig.zoom,
                onViewportChange: (viewport) => {
                  const isFullWidth = viewport.width === "100%";
                  const uiViewport = __spreadProps(__spreadValues({}, viewport), {
                    height: viewport.height || "auto",
                    zoom: isFullWidth ? 1 : zoomConfig.zoom
                  });
                  const newUi = {
                    viewports: __spreadProps(__spreadValues({}, viewports), { current: uiViewport })
                  };
                  if (isFullWidth) {
                    setZoomConfig(__spreadProps(__spreadValues({}, zoomConfig), { zoom: 1 }));
                  }
                  setUi(newUi);
                },
                onZoom: (zoom) => {
                  setZoomConfig(__spreadProps(__spreadValues({}, zoomConfig), { zoom }));
                }
              }
            ) }),
            /* @__PURE__ */ jsxs17("div", { className: getClassName28("tools"), children: [
              /* @__PURE__ */ jsx49("div", { className: getClassName28("menuButton"), children: /* @__PURE__ */ jsx49(
                IconButton,
                {
                  type: "button",
                  onClick: () => {
                    return setMenuOpen(!menuOpen);
                  },
                  title: "Toggle menu bar",
                  children: menuOpen ? /* @__PURE__ */ jsx49(ChevronUp, { size: 16, focusable: "false" }) : /* @__PURE__ */ jsx49(ChevronDown, { size: 16, focusable: "false" })
                }
              ) }),
              /* @__PURE__ */ jsx49(
                MenuBar,
                {
                  dispatch,
                  onPublish,
                  menuOpen,
                  renderHeaderActions: () => /* @__PURE__ */ jsxs17(CustomHeaderActions, { children: [
                    /* @__PURE__ */ jsx49(
                      Button,
                      {
                        href: headerPath || "/",
                        newTab: true,
                        variant: "secondary",
                        icon: /* @__PURE__ */ jsx49(ExternalLink, { size: 14 }),
                        children: "View Web"
                      }
                    ),
                    /* @__PURE__ */ jsx49(
                      Button,
                      {
                        onClick: () => {
                          const data = appStore.getState().state.data;
                          onPublish && onPublish(data);
                        },
                        icon: /* @__PURE__ */ jsx49(Globe, { size: 14 }),
                        children: "Publish"
                      }
                    )
                  ] }),
                  setMenuOpen
                }
              )
            ] })
          ] })
        }
      )
    }
  );
};
var Header = memo9(HeaderInner);

// components/SidebarSection/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/SidebarSection/styles.module.css#css-module
init_react_import();
var styles_module_default24 = { "SidebarSection": "_SidebarSection_1oj6d_1", "SidebarSection-title": "_SidebarSection-title_1oj6d_12", "SidebarSection--noBorderTop": "_SidebarSection--noBorderTop_1oj6d_38", "SidebarSection-content": "_SidebarSection-content_1oj6d_42", "SidebarSection-breadcrumbLabel": "_SidebarSection-breadcrumbLabel_1oj6d_51", "SidebarSection-breadcrumbs": "_SidebarSection-breadcrumbs_1oj6d_80", "SidebarSection-breadcrumb": "_SidebarSection-breadcrumb_1oj6d_51", "SidebarSection-heading": "_SidebarSection-heading_1oj6d_92", "SidebarSection-loadingOverlay": "_SidebarSection-loadingOverlay_1oj6d_96" };

// components/SidebarSection/index.tsx
import { jsx as jsx50, jsxs as jsxs18 } from "react/jsx-runtime";
var getClassName29 = get_class_name_factory_default("SidebarSection", styles_module_default24);
var SidebarSection = ({
  children,
  title,
  background,
  showBreadcrumbs,
  noBorderTop,
  isLoading
}) => {
  return /* @__PURE__ */ jsxs18("div", { className: getClassName29({ noBorderTop }), style: { background }, children: [
    /* @__PURE__ */ jsx50("div", { className: getClassName29("title"), children: /* @__PURE__ */ jsxs18("div", { className: getClassName29("breadcrumbs"), children: [
      showBreadcrumbs && /* @__PURE__ */ jsx50(Breadcrumbs, {}),
      /* @__PURE__ */ jsx50("div", { className: getClassName29("heading"), children: /* @__PURE__ */ jsx50(Heading, { rank: "2", size: "xs", children: title }) })
    ] }) }),
    /* @__PURE__ */ jsx50("div", { className: getClassName29("content"), children }),
    isLoading && /* @__PURE__ */ jsx50("div", { className: getClassName29("loadingOverlay"), children: /* @__PURE__ */ jsx50(Loader, { size: 32 }) })
  ] });
};

// components/CredBuild/components/Canvas/index.tsx
init_react_import();
import {
  useCallback as useCallback22,
  useEffect as useEffect25,
  useMemo as useMemo24,
  useRef as useRef14,
  useState as useState22
} from "react";

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/CredBuild/components/Canvas/styles.module.css#css-module
init_react_import();
var styles_module_default25 = { "CredBuildCanvas": "_CredBuildCanvas_1ivia_1", "CredBuildCanvas--fullScreen": "_CredBuildCanvas--fullScreen_1ivia_22", "CredBuildCanvas-inner": "_CredBuildCanvas-inner_1ivia_33", "CredBuildCanvas-root": "_CredBuildCanvas-root_1ivia_42", "CredBuildCanvas--ready": "_CredBuildCanvas--ready_1ivia_67", "CredBuildCanvas-loader": "_CredBuildCanvas-loader_1ivia_72", "CredBuildCanvas--showLoader": "_CredBuildCanvas--showLoader_1ivia_82" };

// components/CredBuild/components/Canvas/index.tsx
import { useShallow as useShallow10 } from "zustand/react/shallow";
import { Fragment as Fragment17, jsx as jsx51, jsxs as jsxs19 } from "react/jsx-runtime";
var getClassName30 = get_class_name_factory_default("CredBuildCanvas", styles_module_default25);
var ZOOM_ON_CHANGE = true;
var TRANSITION_DURATION = 150;
var Canvas = () => {
  const { frameRef } = useCanvasFrame();
  const resetAutoZoom = useResetAutoZoom(frameRef);
  const { viewports: viewportOptions = defaultViewports, ui: uiProp } = usePropsContext();
  const {
    dispatch,
    overrides,
    setUi,
    zoomConfig,
    setZoomConfig,
    status,
    iframe,
    _experimentalFullScreenCanvas
  } = useAppStore(
    useShallow10((s) => ({
      dispatch: s.dispatch,
      overrides: s.overrides,
      setUi: s.setUi,
      zoomConfig: s.zoomConfig,
      setZoomConfig: s.setZoomConfig,
      status: s.status,
      iframe: s.iframe,
      _experimentalFullScreenCanvas: s._experimentalFullScreenCanvas
    }))
  );
  const {
    leftSideBarVisible,
    rightSideBarVisible,
    leftSideBarWidth,
    rightSideBarWidth,
    viewports
  } = useAppStore(
    useShallow10((s) => ({
      leftSideBarVisible: s.state.ui.leftSideBarVisible,
      rightSideBarVisible: s.state.ui.rightSideBarVisible,
      leftSideBarWidth: s.state.ui.leftSideBarWidth,
      rightSideBarWidth: s.state.ui.rightSideBarWidth,
      viewports: s.state.ui.viewports
    }))
  );
  const [showTransition, setShowTransition] = useState22(false);
  const isResizingRef = useRef14(false);
  const defaultRender = useMemo24(() => {
    const CredBuildDefault = ({ children }) => /* @__PURE__ */ jsx51(Fragment17, { children });
    return CredBuildDefault;
  }, []);
  const CustomPreview = useMemo24(
    () => overrides.preview || defaultRender,
    [overrides, defaultRender]
  );
  const getFrameDimensions = useCallback22(() => {
    if (frameRef.current) {
      const frame = frameRef.current;
      const box = getBox(frame);
      return { width: box.contentBox.width, height: box.contentBox.height };
    }
    return { width: 0, height: 0 };
  }, [frameRef]);
  useEffect25(() => {
    resetAutoZoom();
  }, [
    frameRef,
    leftSideBarVisible,
    rightSideBarVisible,
    rightSideBarWidth,
    viewports,
    resetAutoZoom
  ]);
  useEffect25(() => {
    const { height: frameHeight } = getFrameDimensions();
    if (viewports.current.height === "auto") {
      const newRootHeight = frameHeight / zoomConfig.zoom;
      if (zoomConfig.rootHeight !== newRootHeight) {
        setZoomConfig(__spreadProps(__spreadValues({}, zoomConfig), {
          rootHeight: newRootHeight
        }));
      }
    }
  }, [
    zoomConfig.zoom,
    getFrameDimensions,
    setZoomConfig,
    viewports,
    zoomConfig.rootHeight
  ]);
  useEffect25(() => {
    if (ZOOM_ON_CHANGE) {
      resetAutoZoom();
    }
  }, [viewports.current.width, viewports, resetAutoZoom]);
  useEffect25(() => {
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
  const [showLoader, setShowLoader] = useState22(false);
  useEffect25(() => {
    setTimeout(() => {
      setShowLoader(true);
    }, 500);
  }, []);
  const appStoreApi = useAppStoreApi();
  useEffect25(() => {
    var _a, _b;
    if (typeof window === "undefined") return;
    if ((_a = uiProp == null ? void 0 : uiProp.viewports) == null ? void 0 : _a.current) return;
    const viewportWidth = window.innerWidth;
    const frameWidth = (_b = frameRef.current) == null ? void 0 : _b.getBoundingClientRect().width;
    if (!viewportWidth) return;
    if (!frameWidth) return;
    if (viewportOptions.length === 0) return;
    const fullWidthViewport = Object.values(viewportOptions).find(
      (v) => v.width === "100%"
    );
    const containsFullWidthViewport = !!fullWidthViewport;
    const viewportDifferences = Object.entries(viewportOptions).filter(([_, value]) => value.width !== "100%").map(([key, value]) => ({
      key,
      diff: Math.abs(
        viewportWidth - (typeof value.width === "string" ? viewportWidth : value.width)
      ),
      value
    })).sort((a, b) => a.diff > b.diff ? 1 : -1);
    let closestViewport = viewportDifferences[0].value;
    if (closestViewport.width < frameWidth && containsFullWidthViewport) {
      closestViewport = fullWidthViewport;
    }
    if (iframe.enabled) {
      const s = appStoreApi.getState();
      const appState = {
        state: __spreadProps(__spreadValues({}, s.state), {
          ui: __spreadProps(__spreadValues({}, s.state.ui), {
            viewports: __spreadProps(__spreadValues({}, s.state.ui.viewports), {
              current: __spreadProps(__spreadValues({}, s.state.ui.viewports.current), {
                height: (closestViewport == null ? void 0 : closestViewport.height) || "auto",
                width: closestViewport == null ? void 0 : closestViewport.width
              })
            })
          })
        })
      };
      let history = s.history;
      if (s.history.histories.length === 1) {
        history = __spreadProps(__spreadValues({}, history), { histories: [appState] });
      }
      appStoreApi.setState(__spreadProps(__spreadValues({}, appState), { history }));
    }
  }, [
    viewportOptions,
    iframe,
    appStoreApi,
    uiProp == null ? void 0 : uiProp.viewports,
    frameRef
  ]);
  return /* @__PURE__ */ jsx51(
    "div",
    {
      className: getClassName30({
        ready: status === "READY" || !iframe.enabled || !iframe.waitForStyles,
        showLoader,
        fullScreen: _experimentalFullScreenCanvas
      }),
      onClick: (e) => {
        const el = e.target;
        if (!el.hasAttribute("data-credbuild-component") && !el.hasAttribute("data-credbuild-dropzone")) {
          dispatch({
            type: "setUi",
            ui: { itemSelector: null },
            recordHistory: false
          });
        }
      },
      children: /* @__PURE__ */ jsxs19("div", { className: getClassName30("inner"), ref: frameRef, children: [
        /* @__PURE__ */ jsx51(
          "div",
          {
            className: getClassName30("root"),
            style: {
              width: iframe.enabled ? viewports.current.width : "100%",
              height: zoomConfig.rootHeight,
              transform: iframe.enabled ? `scale(${zoomConfig.zoom})` : void 0,
              transition: showTransition ? `width ${TRANSITION_DURATION}ms ease-out, height ${TRANSITION_DURATION}ms ease-out, transform ${TRANSITION_DURATION}ms ease-out` : "",
              overflow: iframe.enabled ? void 0 : "auto"
            },
            suppressHydrationWarning: true,
            id: "credbuild-canvas-root",
            onTransitionEnd: () => {
              setShowTransition(false);
              isResizingRef.current = false;
            },
            children: /* @__PURE__ */ jsx51(CustomPreview, { children: /* @__PURE__ */ jsx51(Preview2, {}) })
          }
        ),
        /* @__PURE__ */ jsx51("div", { className: getClassName30("loader"), children: /* @__PURE__ */ jsx51(Loader, { size: 24 }) })
      ] })
    }
  );
};

// lib/use-sidebar-resize.ts
init_react_import();
import { useCallback as useCallback23, useEffect as useEffect26, useRef as useRef15, useState as useState23 } from "react";
function useSidebarResize(position, dispatch) {
  const [width, setWidth] = useState23(null);
  const sidebarRef = useRef15(null);
  const storeWidth = useAppStore(
    (s) => position === "left" ? s.state.ui.leftSideBarWidth : s.state.ui.rightSideBarWidth
  );
  useEffect26(() => {
    if (typeof window !== "undefined" && !storeWidth) {
      try {
        const savedWidths = localStorage.getItem("credbuild-sidebar-widths");
        if (savedWidths) {
          const widths = JSON.parse(savedWidths);
          const savedWidth = widths[position];
          const key = position === "left" ? "leftSideBarWidth" : "rightSideBarWidth";
          if (savedWidth) {
            dispatch({
              type: "setUi",
              ui: {
                [key]: savedWidth
              }
            });
          }
        }
      } catch (error) {
        console.error(
          `Failed to load ${position} sidebar width from localStorage`,
          error
        );
      }
    }
  }, [dispatch, position, storeWidth]);
  useEffect26(() => {
    if (storeWidth !== void 0) {
      setWidth(storeWidth);
    }
  }, [storeWidth]);
  const handleResizeEnd = useCallback23(
    (width2) => {
      dispatch({
        type: "setUi",
        ui: {
          [position === "left" ? "leftSideBarWidth" : "rightSideBarWidth"]: width2
        }
      });
      let widths = {};
      try {
        const savedWidths = localStorage.getItem("credbuild-sidebar-widths");
        widths = savedWidths ? JSON.parse(savedWidths) : {};
      } catch (error) {
        console.error(
          `Failed to save ${position} sidebar width to localStorage`,
          error
        );
      } finally {
        localStorage.setItem(
          "credbuild-sidebar-widths",
          JSON.stringify(__spreadProps(__spreadValues({}, widths), {
            [position]: width2
          }))
        );
      }
      window.dispatchEvent(
        new CustomEvent("viewportchange", {
          bubbles: true,
          cancelable: false
        })
      );
    },
    [dispatch, position]
  );
  return {
    width,
    setWidth,
    sidebarRef,
    handleResizeEnd
  };
}

// components/CredBuild/components/Sidebar/index.tsx
init_react_import();

// components/CredBuild/components/ResizeHandle/index.tsx
init_react_import();
import { useCallback as useCallback24, useRef as useRef16 } from "react";

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/CredBuild/components/ResizeHandle/styles.module.css#css-module
init_react_import();
var styles_module_default26 = { "ResizeHandle": "_ResizeHandle_144bf_2", "ResizeHandle--left": "_ResizeHandle--left_144bf_16", "ResizeHandle--right": "_ResizeHandle--right_144bf_20" };

// components/CredBuild/components/ResizeHandle/index.tsx
import { jsx as jsx52 } from "react/jsx-runtime";
var getClassName31 = get_class_name_factory_default("ResizeHandle", styles_module_default26);
var ResizeHandle = ({
  position,
  sidebarRef,
  onResize,
  onResizeEnd
}) => {
  const { frameRef } = useCanvasFrame();
  const resetAutoZoom = useResetAutoZoom(frameRef);
  const handleRef = useRef16(null);
  const isDragging = useRef16(false);
  const startX = useRef16(0);
  const startWidth = useRef16(0);
  const handleMouseMove = useCallback24(
    (e) => {
      if (!isDragging.current) return;
      const delta = e.clientX - startX.current;
      const newWidth = position === "left" ? startWidth.current + delta : startWidth.current - delta;
      const width = Math.max(192, newWidth);
      onResize(width);
      e.preventDefault();
    },
    [onResize, position]
  );
  const handleMouseUp = useCallback24(() => {
    var _a;
    if (!isDragging.current) return;
    isDragging.current = false;
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
    const overlay = document.getElementById("resize-overlay");
    if (overlay) {
      document.body.removeChild(overlay);
    }
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    const finalWidth = ((_a = sidebarRef.current) == null ? void 0 : _a.getBoundingClientRect().width) || 0;
    onResizeEnd(finalWidth);
    resetAutoZoom();
  }, [onResizeEnd, handleMouseMove, resetAutoZoom, sidebarRef]);
  const handleMouseDown = useCallback24(
    (e) => {
      var _a;
      isDragging.current = true;
      startX.current = e.clientX;
      startWidth.current = ((_a = sidebarRef.current) == null ? void 0 : _a.getBoundingClientRect().width) || 0;
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
      const overlay = document.createElement("div");
      overlay.id = "resize-overlay";
      overlay.setAttribute("data-resize-overlay", "");
      document.body.appendChild(overlay);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      e.preventDefault();
    },
    [handleMouseMove, handleMouseUp, sidebarRef]
  );
  return /* @__PURE__ */ jsx52(
    "div",
    {
      ref: handleRef,
      className: getClassName31({ [position]: true }),
      onMouseDown: handleMouseDown
    }
  );
};

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/CredBuild/components/Sidebar/styles.module.css#css-module
init_react_import();
var styles_module_default27 = { "Sidebar": "_Sidebar_1kcif_1", "Sidebar--isVisible": "_Sidebar--isVisible_1kcif_13", "Sidebar--left": "_Sidebar--left_1kcif_17", "Sidebar--right": "_Sidebar--right_1kcif_29", "Sidebar-resizeHandle": "_Sidebar-resizeHandle_1kcif_42" };

// components/CredBuild/components/Sidebar/index.tsx
import { Fragment as Fragment18, jsx as jsx53, jsxs as jsxs20 } from "react/jsx-runtime";
var getClassName32 = get_class_name_factory_default("Sidebar", styles_module_default27);
var Sidebar = ({
  position,
  sidebarRef,
  isVisible,
  onResize,
  onResizeEnd,
  children
}) => {
  return /* @__PURE__ */ jsxs20(Fragment18, { children: [
    /* @__PURE__ */ jsx53(
      "div",
      {
        ref: sidebarRef,
        className: getClassName32({ [position]: true, isVisible }),
        children
      }
    ),
    /* @__PURE__ */ jsx53("div", { className: `${getClassName32("resizeHandle")}`, children: /* @__PURE__ */ jsx53(
      ResizeHandle,
      {
        position,
        sidebarRef,
        onResize,
        onResizeEnd
      }
    ) })
  ] });
};

// lib/use-delete-hotkeys.ts
init_react_import();
import { useCallback as useCallback25 } from "react";
var isElementVisible = (element) => {
  let current = element;
  while (current && current !== document.body) {
    const style = window.getComputedStyle(current);
    if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0" || current.getAttribute("aria-hidden") === "true" || current.hasAttribute("hidden")) {
      return false;
    }
    current = current.parentElement;
  }
  return true;
};
var shouldBlockDeleteHotkey = (e) => {
  var _a;
  if (e == null ? void 0 : e.defaultPrevented) return true;
  const origin = ((_a = e == null ? void 0 : e.composedPath) == null ? void 0 : _a.call(e)[0]) || (e == null ? void 0 : e.target) || document.activeElement;
  if (origin instanceof HTMLElement) {
    const tag = origin.tagName.toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select") return true;
    if (origin.isContentEditable) return true;
    const role = origin.getAttribute("role");
    if (role === "textbox" || role === "combobox" || role === "searchbox" || role === "listbox" || role === "grid") {
      return true;
    }
  }
  const modal = document.querySelector(
    'dialog[open], [aria-modal="true"], [role="dialog"], [role="alertdialog"]'
  );
  if (modal && isElementVisible(modal)) {
    return true;
  }
  return false;
};
var useDeleteHotkeys = () => {
  const appStore = useAppStoreApi();
  const deleteSelectedComponent = useCallback25(
    (e) => {
      var _a;
      if (shouldBlockDeleteHotkey(e)) {
        return false;
      }
      const { state, dispatch, permissions, selectedItem } = appStore.getState();
      const sel = (_a = state.ui) == null ? void 0 : _a.itemSelector;
      if (!(sel == null ? void 0 : sel.zone) || !selectedItem) return true;
      if (!permissions.getPermissions({ item: selectedItem }).delete)
        return true;
      dispatch({
        type: "remove",
        index: sel.index,
        zone: sel.zone
      });
      return true;
    },
    [appStore]
  );
  useHotkey({ delete: true }, deleteSelectedComponent);
  useHotkey({ backspace: true }, deleteSelectedComponent);
};

// components/CredBuild/components/Nav/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/CredBuild/components/Nav/styles.module.css#css-module
init_react_import();
var styles_module_default28 = { "Nav": "_Nav_wbh7e_1", "Nav-list": "_Nav-list_wbh7e_9", "CredBuildHeader-path": "_CredBuildHeader-path_wbh7e_20", "NavItem": "_NavItem_wbh7e_38", "NavItem-link": "_NavItem-link_wbh7e_43", "NavItem-linkIcon": "_NavItem-linkIcon_wbh7e_64", "NavItem--active": "_NavItem--active_wbh7e_77", "NavItem--mobileOnly": "_NavItem--mobileOnly_wbh7e_90", "NavItem--desktopOnly": "_NavItem--desktopOnly_wbh7e_95" };

// components/CredBuild/components/Nav/index.tsx
import { jsx as jsx54, jsxs as jsxs21 } from "react/jsx-runtime";
var getClassName33 = get_class_name_factory_default("Nav", styles_module_default28);
var getClassNameItem3 = get_class_name_factory_default("NavItem", styles_module_default28);
var MenuItem = ({
  label,
  icon,
  onClick,
  isActive,
  mobileOnly,
  desktopOnly
}) => {
  return /* @__PURE__ */ jsx54(
    "li",
    {
      className: getClassNameItem3({
        active: isActive,
        mobileOnly,
        desktopOnly
      }),
      children: onClick && /* @__PURE__ */ jsxs21("div", { className: getClassNameItem3("link"), onClick, children: [
        icon && /* @__PURE__ */ jsx54("span", { className: getClassNameItem3("linkIcon"), children: icon }),
        /* @__PURE__ */ jsx54("span", { className: getClassNameItem3("linkLabel"), children: label })
      ] })
    }
  );
};
var Nav = ({
  items,
  mobileActions
}) => {
  return /* @__PURE__ */ jsxs21("nav", { className: getClassName33(), children: [
    /* @__PURE__ */ jsx54("ul", { className: getClassName33("list"), children: Object.entries(items).map(([key, item]) => /* @__PURE__ */ jsx54(MenuItem, __spreadValues({}, item), key)) }),
    mobileActions && /* @__PURE__ */ jsx54("div", { className: getClassName33("mobileActions"), children: mobileActions })
  ] });
};

// components/CredBuild/components/Layout/index.tsx
import { jsx as jsx55, jsxs as jsxs22 } from "react/jsx-runtime";
var getClassName34 = get_class_name_factory_default("CredBuild", styles_module_default20);
var getLayoutClassName = get_class_name_factory_default("CredBuildLayout", styles_module_default20);
var getPluginTabClassName = get_class_name_factory_default("CredBuildPluginTab", styles_module_default20);
var FieldSideBar = () => {
  const title = useAppStore(
    (s) => {
      var _a, _b, _c;
      return s.selectedItem ? (_b = (_a = s.config.components[s.selectedItem.type]) == null ? void 0 : _a["label"]) != null ? _b : s.selectedItem.type.toString() : ((_c = s.config.root) == null ? void 0 : _c.label) || "Page";
    }
  );
  return /* @__PURE__ */ jsx55(SidebarSection, { noBorderTop: true, showBreadcrumbs: true, title, children: /* @__PURE__ */ jsx55(Fields, {}) });
};
var PluginTab = ({
  children,
  visible,
  mobileOnly
}) => {
  return /* @__PURE__ */ jsx55("div", { className: getPluginTabClassName({ visible, mobileOnly }), children: /* @__PURE__ */ jsx55("div", { className: getPluginTabClassName("body"), children }) });
};
var Layout = ({ children }) => {
  const {
    iframe: _iframe,
    dnd,
    initialHistory: _initialHistory,
    plugins,
    height
  } = usePropsContext();
  const iframe = useMemo25(
    () => __spreadValues({
      enabled: true,
      waitForStyles: true
    }, _iframe),
    [_iframe]
  );
  useInjectGlobalCss(iframe.enabled);
  const dispatch = useAppStore((s) => s.dispatch);
  const leftSideBarVisible = useAppStore((s) => s.state.ui.leftSideBarVisible);
  const rightSideBarVisible = useAppStore(
    (s) => s.state.ui.rightSideBarVisible
  );
  const instanceId = useAppStore((s) => s.instanceId);
  const {
    width: leftWidth,
    setWidth: setLeftWidth,
    sidebarRef: leftSidebarRef,
    handleResizeEnd: handleLeftSidebarResizeEnd
  } = useSidebarResize("left", dispatch);
  const {
    width: rightWidth,
    setWidth: setRightWidth,
    sidebarRef: rightSidebarRef,
    handleResizeEnd: handleRightSidebarResizeEnd
  } = useSidebarResize("right", dispatch);
  useEffect28(() => {
    if (!window.matchMedia("(min-width: 638px)").matches) {
      dispatch({
        type: "setUi",
        ui: {
          leftSideBarVisible: false,
          rightSideBarVisible: false
        }
      });
    }
    const handleResize = () => {
      if (!window.matchMedia("(min-width: 638px)").matches) {
        dispatch({
          type: "setUi",
          ui: (ui) => __spreadValues(__spreadValues({}, ui), ui.rightSideBarVisible ? { leftSideBarVisible: false } : {})
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);
  const overrides = useAppStore((s) => s.overrides);
  const CustomCredBuild = useMemo25(
    () => overrides.credbuild || DefaultOverride,
    [overrides]
  );
  const [mounted, setMounted] = useState24(false);
  useEffect28(() => {
    setMounted(true);
  }, []);
  const ready = useAppStore((s) => s.status === "READY");
  useMonitorHotkeys();
  useEffect28(() => {
    if (ready && iframe.enabled) {
      const frameDoc = getFrame();
      if (frameDoc) {
        return monitorHotkeys(frameDoc);
      }
    }
  }, [ready, iframe.enabled]);
  usePreviewModeHotkeys();
  useDeleteHotkeys();
  const layoutOptions = {};
  if (leftWidth) {
    layoutOptions["--credbuild-user-left-side-bar-width"] = `${leftWidth}px`;
  }
  if (rightWidth) {
    layoutOptions["--credbuild-user-right-side-bar-width"] = `${rightWidth}px`;
  }
  const setUi = useAppStore((s) => s.setUi);
  const currentPlugin = useAppStore((s) => {
    var _a;
    return (_a = s.state.ui.plugin) == null ? void 0 : _a.current;
  });
  const appStoreApi = useAppStoreApi();
  const [mobilePanelHeightMode, setMobilePanelHeightMode] = useState24("toggle");
  const hasLegacySideBarPlugin = useMemo25(
    () => !!(plugins == null ? void 0 : plugins.find((p) => p.name === "legacy-side-bar")),
    [plugins]
  );
  const pluginItems = useMemo25(() => {
    const details = {};
    const defaultPlugins = [blocksPlugin(), outlinePlugin()];
    const isLegacy = (plugin) => plugin.name === "legacy-side-bar" ? -1 : 0;
    const combinedPlugins = [
      ...defaultPlugins,
      ...plugins != null ? plugins : []
    ].sort((a, b) => isLegacy(a) - isLegacy(b));
    if (!(plugins == null ? void 0 : plugins.some((p) => p.name === "fields"))) {
      combinedPlugins.push(fieldsPlugin());
    }
    combinedPlugins == null ? void 0 : combinedPlugins.forEach((plugin) => {
      var _a, _b;
      if (plugin.name && plugin.render) {
        if (details[plugin.name]) {
          delete details[plugin.name];
        }
        details[plugin.name] = {
          label: (_a = plugin.label) != null ? _a : plugin.name,
          icon: (_b = plugin.icon) != null ? _b : /* @__PURE__ */ jsx55(ToyBrick, {}),
          onClick: () => {
            var _a2;
            setMobilePanelHeightMode((_a2 = plugin.mobilePanelHeight) != null ? _a2 : "toggle");
            if (plugin.name === currentPlugin) {
              if (leftSideBarVisible) {
                setUi({ leftSideBarVisible: false });
              } else {
                setUi({ leftSideBarVisible: true });
              }
            } else {
              if (plugin.name) {
                setUi({
                  plugin: { current: plugin.name },
                  leftSideBarVisible: true
                });
              }
            }
          },
          isActive: leftSideBarVisible && currentPlugin === plugin.name,
          render: plugin.render,
          mobileOnly: hasLegacySideBarPlugin || plugin.mobileOnly,
          desktopOnly: plugin.name === "legacy-side-bar" || plugin.desktopOnly
        };
      }
    });
    return details;
  }, [plugins, currentPlugin, leftSideBarVisible, hasLegacySideBarPlugin, setUi]);
  useEffect28(() => {
    if (!currentPlugin) {
      const names = Object.keys(pluginItems);
      setUi({ plugin: { current: names[0] } });
    }
  }, [pluginItems, currentPlugin, setUi]);
  const hasDesktopFieldsPlugin = pluginItems["fields"] && pluginItems["fields"].mobileOnly === false;
  const mobilePanelExpanded = useAppStore(
    (s) => {
      var _a;
      return (_a = s.state.ui.mobilePanelExpanded) != null ? _a : false;
    }
  );
  return /* @__PURE__ */ jsxs22(
    "div",
    {
      className: `CredBuild ${getClassName34({
        hidePlugins: hasLegacySideBarPlugin
      })}`,
      id: instanceId,
      style: { height },
      children: [
        /* @__PURE__ */ jsx55(DragDropContext, { disableAutoScroll: dnd == null ? void 0 : dnd.disableAutoScroll, children: /* @__PURE__ */ jsx55(CustomCredBuild, { children: children || /* @__PURE__ */ jsx55(FrameProvider, { children: /* @__PURE__ */ jsx55(
          "div",
          {
            className: getLayoutClassName({
              leftSideBarVisible,
              mounted,
              rightSideBarVisible: !hasDesktopFieldsPlugin && rightSideBarVisible,
              isExpanded: mobilePanelExpanded,
              mobilePanelHeightToggle: mobilePanelHeightMode === "toggle",
              mobilePanelHeightMinContent: mobilePanelHeightMode === "min-content"
            }),
            style: { height },
            children: /* @__PURE__ */ jsxs22(
              "div",
              {
                className: getLayoutClassName("inner"),
                style: layoutOptions,
                children: [
                  /* @__PURE__ */ jsx55("div", { className: getLayoutClassName("header"), children: /* @__PURE__ */ jsx55(Header, { hidePlugins: hasLegacySideBarPlugin }) }),
                  /* @__PURE__ */ jsxs22(
                    Sidebar,
                    {
                      position: "left",
                      sidebarRef: leftSidebarRef,
                      isVisible: leftSideBarVisible,
                      onResize: setLeftWidth,
                      onResizeEnd: handleLeftSidebarResizeEnd,
                      children: [
                        /* @__PURE__ */ jsx55("div", { className: getLayoutClassName("nav"), children: /* @__PURE__ */ jsx55(
                          Nav,
                          {
                            items: pluginItems,
                            mobileActions: typeof window !== "undefined" && !window.matchMedia("(min-width: 638px)").matches && leftSideBarVisible && mobilePanelHeightMode === "toggle" && /* @__PURE__ */ jsx55(
                              IconButton,
                              {
                                type: "button",
                                title: "maximize",
                                onClick: () => {
                                  setUi({
                                    mobilePanelExpanded: !mobilePanelExpanded
                                  });
                                },
                                children: mobilePanelExpanded ? /* @__PURE__ */ jsx55(Minimize2, { size: 21 }) : /* @__PURE__ */ jsx55(Maximize2, { size: 21 })
                              }
                            )
                          }
                        ) }),
                        Object.entries(pluginItems).map(
                          ([id, { mobileOnly, render: Render2, label }]) => /* @__PURE__ */ jsx55(
                            PluginTab,
                            {
                              visible: currentPlugin === id,
                              mobileOnly,
                              children: /* @__PURE__ */ jsx55(Render2, {})
                            },
                            id
                          )
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx55(Canvas, {}),
                  !hasDesktopFieldsPlugin && /* @__PURE__ */ jsx55(
                    Sidebar,
                    {
                      position: "right",
                      sidebarRef: rightSidebarRef,
                      isVisible: rightSideBarVisible,
                      onResize: setRightWidth,
                      onResizeEnd: handleRightSidebarResizeEnd,
                      children: /* @__PURE__ */ jsx55(FieldSideBar, {})
                    }
                  )
                ]
              }
            )
          }
        ) }) }) }),
        /* @__PURE__ */ jsx55("div", { id: "credbuild-portal-root", className: getClassName34("portal") })
      ]
    }
  );
};

// components/CredBuild/index.tsx
import { jsx as jsx56 } from "react/jsx-runtime";
var propsContext = createContext8({});
function PropsProvider(props) {
  return /* @__PURE__ */ jsx56(propsContext.Provider, { value: props, children: props.children });
}
var usePropsContext = () => useContext15(propsContext);
function CredBuildProvider({ children }) {
  const {
    config,
    data: initialData,
    ui: initialUi,
    onChange,
    permissions = {},
    plugins,
    overrides,
    viewports = defaultViewports,
    iframe: _iframe,
    initialHistory: _initialHistory,
    metadata,
    onAction,
    fieldTransforms,
    _experimentalFullScreenCanvas,
    _experimentalVirtualization
  } = usePropsContext();
  const iframe = useMemo26(
    () => __spreadValues({
      enabled: true,
      waitForStyles: true
    }, _iframe),
    [_iframe]
  );
  const [generatedAppState] = useState25(() => {
    var _a, _b, _c;
    const initial = __spreadValues(__spreadValues({}, defaultAppState.ui), initialUi);
    let clientUiState = {};
    if (Object.keys((initialData == null ? void 0 : initialData.root) || {}).length > 0 && !((_a = initialData == null ? void 0 : initialData.root) == null ? void 0 : _a.props)) {
      console.warn(
        "Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically."
      );
    }
    const rootProps = ((_b = initialData == null ? void 0 : initialData.root) == null ? void 0 : _b.props) || (initialData == null ? void 0 : initialData.root) || {};
    const defaultedRootProps = __spreadValues(__spreadValues({}, (_c = config.root) == null ? void 0 : _c.defaultProps), rootProps);
    const root = populateIds(
      toComponent(__spreadProps(__spreadValues({}, initialData == null ? void 0 : initialData.root), { props: defaultedRootProps })),
      config
    );
    const newAppState = __spreadProps(__spreadValues({}, defaultAppState), {
      data: __spreadProps(__spreadValues({}, initialData), {
        root: __spreadProps(__spreadValues({}, initialData == null ? void 0 : initialData.root), { props: root.props }),
        content: initialData.content || []
      }),
      ui: __spreadProps(__spreadValues(__spreadValues({}, initial), clientUiState), {
        // Store categories under componentList on state to allow render functions and plugins to modify
        componentList: config.categories ? Object.entries(config.categories).reduce(
          (acc, [categoryName, category]) => {
            return __spreadProps(__spreadValues({}, acc), {
              [categoryName]: {
                title: category.title,
                components: category.components,
                expanded: category.defaultExpanded,
                visible: category.visible
              }
            });
          },
          {}
        ) : {}
      })
    });
    return walkAppState(newAppState, config);
  });
  const { appendData = true } = _initialHistory || {};
  const [blendedHistories] = useState25(
    [
      ...(_initialHistory == null ? void 0 : _initialHistory.histories) || [],
      ...appendData ? [{ state: generatedAppState }] : []
    ].map((history) => {
      let newState = __spreadValues(__spreadValues({}, generatedAppState), history.state);
      if (!history.state.indexes) {
        newState = walkAppState(newState, config);
      }
      return __spreadProps(__spreadValues({}, history), {
        state: newState
      });
    })
  );
  const initialHistoryIndex = useMemo26(() => {
    if ((_initialHistory == null ? void 0 : _initialHistory.index) !== void 0 && (_initialHistory == null ? void 0 : _initialHistory.index) >= 0 && (_initialHistory == null ? void 0 : _initialHistory.index) < blendedHistories.length) {
      return _initialHistory == null ? void 0 : _initialHistory.index;
    }
    return blendedHistories.length - 1;
  }, [_initialHistory == null ? void 0 : _initialHistory.index, blendedHistories.length]);
  const initialAppState = blendedHistories[initialHistoryIndex].state;
  const loadedOverrides = useLoadedOverrides({
    overrides,
    plugins
  });
  const loadedFieldTransforms = useMemo26(() => {
    const _plugins = plugins || [];
    const pluginFieldTransforms = _plugins.reduce(
      (acc, plugin) => __spreadValues(__spreadValues({}, acc), plugin.fieldTransforms),
      {}
    );
    return __spreadValues(__spreadValues({}, pluginFieldTransforms), fieldTransforms);
  }, [fieldTransforms, plugins]);
  const instanceId = useSafeId();
  const generateAppStore = useCallback26(
    (state) => {
      return {
        instanceId,
        state,
        config,
        plugins: plugins || [],
        overrides: loadedOverrides,
        viewports,
        iframe,
        _experimentalFullScreenCanvas: !!_experimentalFullScreenCanvas,
        _experimentalVirtualization: !!_experimentalVirtualization,
        onAction,
        metadata,
        fieldTransforms: loadedFieldTransforms
      };
    },
    [
      instanceId,
      config,
      plugins,
      loadedOverrides,
      viewports,
      iframe,
      _experimentalFullScreenCanvas,
      _experimentalVirtualization,
      onAction,
      metadata,
      loadedFieldTransforms
    ]
  );
  const [appStore] = useState25(
    () => createAppStore(generateAppStore(initialAppState))
  );
  useEffect29(() => {
    if (process.env.NODE_ENV !== "production") {
      window.__CREDBUILD_INTERNAL_DO_NOT_USE = { appStore };
    }
  }, [appStore]);
  useEffect29(() => {
    const state = appStore.getState().state;
    appStore.setState(__spreadValues({}, generateAppStore(state)));
  }, [generateAppStore, appStore]);
  useRegisterHistorySlice(appStore, {
    histories: blendedHistories,
    index: initialHistoryIndex,
    initialAppState
  });
  const previousData = useRef17(null);
  useEffect29(() => {
    return appStore.subscribe(
      (s) => s.state.data,
      (data) => {
        if (onChange) {
          if (deepEqual2(data, previousData.current)) return;
          onChange(data);
          previousData.current = data;
        }
      }
    );
  }, [onChange, appStore]);
  useRegisterPermissionsSlice(appStore, permissions);
  const uCredBuildStore = useRegisterUseCredBuildStore(appStore);
  useEffect29(() => {
    const { resolveAndCommitData } = appStore.getState();
    setTimeout(() => {
      resolveAndCommitData();
    }, 0);
  }, [appStore]);
  return /* @__PURE__ */ jsx56(appStoreContext.Provider, { value: appStore, children: /* @__PURE__ */ jsx56(UseCredBuildStoreContext.Provider, { value: uCredBuildStore, children }) });
}
function CredBuild(props) {
  return /* @__PURE__ */ jsx56(PropsProvider, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsx56(CredBuildProvider, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ jsx56(Layout, { children: props.children }) })) }));
}
CredBuild.Components = Components;
CredBuild.Fields = Fields;
CredBuild.Layout = Layout;
CredBuild.Outline = Outline;
CredBuild.Preview = Preview2;

// plugins/legacy-side-bar/index.tsx
init_react_import();
import { jsx as jsx57, jsxs as jsxs23 } from "react/jsx-runtime";
var legacySideBarPlugin = () => ({
  name: "legacy-side-bar",
  render: () => /* @__PURE__ */ jsxs23("div", { style: { overflowY: "auto" }, children: [
    /* @__PURE__ */ jsx57(SidebarSection, { title: "Components", noBorderTop: true, children: /* @__PURE__ */ jsx57(Components, {}) }),
    /* @__PURE__ */ jsx57(SidebarSection, { title: "Outline", children: /* @__PURE__ */ jsx57(Outline, {}) })
  ] })
});

// bundle/core.ts
init_react_import();

// types/API/index.ts
init_react_import();

// types/API/DropZone.ts
init_react_import();

// types/API/Viewports.ts
init_react_import();

// types/API/FieldTransforms.ts
init_react_import();

// types/index.ts
init_react_import();

// types/AppState.tsx
init_react_import();

// types/Config.tsx
init_react_import();

// types/Data.tsx
init_react_import();

// types/Fields.ts
init_react_import();

// types/Props.tsx
init_react_import();

// types/Utils.tsx
init_react_import();

export {
  overrideKeys,
  setDeep,
  Button,
  FieldLabel,
  AutoField,
  renderContext,
  Render,
  registerOverlayPortal,
  DropZone,
  Drawer,
  createUseCredBuild,
  useCredBuild,
  useGetCredBuild,
  blocksPlugin,
  outlinePlugin,
  fieldsPlugin,
  CredBuild,
  legacySideBarPlugin
};
