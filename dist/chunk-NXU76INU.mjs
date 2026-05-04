import {
  createReducer,
  getItem,
  makeStatePublic
} from "./chunk-MQAN4F4B.mjs";
import {
  defaultAppState,
  defaultViewports,
  getChanged,
  resolveComponentData
} from "./chunk-QGRPODT7.mjs";
import {
  get_class_name_factory_default
} from "./chunk-CYQ2TPPM.mjs";
import {
  generateId,
  walkAppState
} from "./chunk-Y5AAKZ45.mjs";
import {
  __async,
  __objRest,
  __restKey,
  __spreadProps,
  __spreadValues,
  init_react_import
} from "./chunk-2TADFG6T.mjs";

// ../../node_modules/lucide-react/dist/esm/icons/heading.js
init_react_import();

// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
init_react_import();
import { forwardRef as forwardRef2, createElement as createElement2 } from "react";

// ../../node_modules/lucide-react/dist/esm/shared/src/utils.js
init_react_import();
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
var hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};

// ../../node_modules/lucide-react/dist/esm/Icon.js
init_react_import();
import { forwardRef, createElement } from "react";

// ../../node_modules/lucide-react/dist/esm/defaultAttributes.js
init_react_import();
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// ../../node_modules/lucide-react/dist/esm/Icon.js
var Icon = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode
    } = _b, rest = __objRest(_b, [
      "color",
      "size",
      "strokeWidth",
      "absoluteStrokeWidth",
      "className",
      "children",
      "iconNode"
    ]);
    return createElement(
      "svg",
      __spreadValues(__spreadValues(__spreadProps(__spreadValues({
        ref
      }, defaultAttributes), {
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className)
      }), !children && !hasA11yProp(rest) && { "aria-hidden": "true" }), rest),
      [
        ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef2(
    (_a, ref) => {
      var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
      return createElement2(Icon, __spreadValues({
        ref,
        iconNode,
        className: mergeClasses(
          `lucide-${toKebabCase(toPascalCase(iconName))}`,
          `lucide-${iconName}`,
          className
        )
      }, props));
    }
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

// ../../node_modules/lucide-react/dist/esm/icons/heading.js
var __iconNode = [
  ["path", { d: "M6 12h12", key: "8npq4p" }],
  ["path", { d: "M6 20V4", key: "1w1bmo" }],
  ["path", { d: "M18 20V4", key: "o2hl4u" }]
];
var Heading = createLucideIcon("heading", __iconNode);

// ../../node_modules/lucide-react/dist/esm/icons/list.js
init_react_import();
var __iconNode2 = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
];
var List = createLucideIcon("list", __iconNode2);

// ../../node_modules/lucide-react/dist/esm/icons/text-align-start.js
init_react_import();
var __iconNode3 = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
];
var TextAlignStart = createLucideIcon("text-align-start", __iconNode3);

// ../../node_modules/lucide-react/dist/esm/lucide-react.js
init_react_import();

// ../../node_modules/lucide-react/dist/esm/icons/bold.js
init_react_import();
var __iconNode4 = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
];
var Bold = createLucideIcon("bold", __iconNode4);

// ../../node_modules/lucide-react/dist/esm/icons/box.js
init_react_import();
var __iconNode5 = [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
];
var Box = createLucideIcon("box", __iconNode5);

// ../../node_modules/lucide-react/dist/esm/icons/chart-column.js
init_react_import();
var __iconNode6 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
var ChartColumn = createLucideIcon("chart-column", __iconNode6);

// ../../node_modules/lucide-react/dist/esm/icons/chevron-down.js
init_react_import();
var __iconNode7 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
var ChevronDown = createLucideIcon("chevron-down", __iconNode7);

// ../../node_modules/lucide-react/dist/esm/icons/chevron-right.js
init_react_import();
var __iconNode8 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
var ChevronRight = createLucideIcon("chevron-right", __iconNode8);

// ../../node_modules/lucide-react/dist/esm/icons/chevron-up.js
init_react_import();
var __iconNode9 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
var ChevronUp = createLucideIcon("chevron-up", __iconNode9);

// ../../node_modules/lucide-react/dist/esm/icons/circle-check-big.js
init_react_import();
var __iconNode10 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
var CircleCheckBig = createLucideIcon("circle-check-big", __iconNode10);

// ../../node_modules/lucide-react/dist/esm/icons/code.js
init_react_import();
var __iconNode11 = [
  ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
  ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }]
];
var Code = createLucideIcon("code", __iconNode11);

// ../../node_modules/lucide-react/dist/esm/icons/copy.js
init_react_import();
var __iconNode12 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
var Copy = createLucideIcon("copy", __iconNode12);

// ../../node_modules/lucide-react/dist/esm/icons/corner-left-up.js
init_react_import();
var __iconNode13 = [
  ["path", { d: "M14 9 9 4 4 9", key: "1af5af" }],
  ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4", key: "1blwi3" }]
];
var CornerLeftUp = createLucideIcon("corner-left-up", __iconNode13);

// ../../node_modules/lucide-react/dist/esm/icons/credit-card.js
init_react_import();
var __iconNode14 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
var CreditCard = createLucideIcon("credit-card", __iconNode14);

// ../../node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js
init_react_import();
var __iconNode15 = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
];
var EllipsisVertical = createLucideIcon("ellipsis-vertical", __iconNode15);

// ../../node_modules/lucide-react/dist/esm/icons/expand.js
init_react_import();
var __iconNode16 = [
  ["path", { d: "m15 15 6 6", key: "1s409w" }],
  ["path", { d: "m15 9 6-6", key: "ko1vev" }],
  ["path", { d: "M21 16v5h-5", key: "1ck2sf" }],
  ["path", { d: "M21 8V3h-5", key: "1qoq8a" }],
  ["path", { d: "M3 16v5h5", key: "1t08am" }],
  ["path", { d: "m3 21 6-6", key: "wwnumi" }],
  ["path", { d: "M3 8V3h5", key: "1ln10m" }],
  ["path", { d: "M9 9 3 3", key: "v551iv" }]
];
var Expand = createLucideIcon("expand", __iconNode16);

// ../../node_modules/lucide-react/dist/esm/icons/external-link.js
init_react_import();
var __iconNode17 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
var ExternalLink = createLucideIcon("external-link", __iconNode17);

// ../../node_modules/lucide-react/dist/esm/icons/file-text.js
init_react_import();
var __iconNode18 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
var FileText = createLucideIcon("file-text", __iconNode18);

// ../../node_modules/lucide-react/dist/esm/icons/globe.js
init_react_import();
var __iconNode19 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
var Globe = createLucideIcon("globe", __iconNode19);

// ../../node_modules/lucide-react/dist/esm/icons/grip-vertical.js
init_react_import();
var __iconNode20 = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
];
var GripVertical = createLucideIcon("grip-vertical", __iconNode20);

// ../../node_modules/lucide-react/dist/esm/icons/hash.js
init_react_import();
var __iconNode21 = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
];
var Hash = createLucideIcon("hash", __iconNode21);

// ../../node_modules/lucide-react/dist/esm/icons/heading-1.js
init_react_import();
var __iconNode22 = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
];
var Heading1 = createLucideIcon("heading-1", __iconNode22);

// ../../node_modules/lucide-react/dist/esm/icons/heading-2.js
init_react_import();
var __iconNode23 = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
];
var Heading2 = createLucideIcon("heading-2", __iconNode23);

// ../../node_modules/lucide-react/dist/esm/icons/heading-3.js
init_react_import();
var __iconNode24 = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
];
var Heading3 = createLucideIcon("heading-3", __iconNode24);

// ../../node_modules/lucide-react/dist/esm/icons/heading-4.js
init_react_import();
var __iconNode25 = [
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17 10v3a1 1 0 0 0 1 1h3", key: "tj5zdr" }],
  ["path", { d: "M21 10v8", key: "1kdml4" }],
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }]
];
var Heading4 = createLucideIcon("heading-4", __iconNode25);

// ../../node_modules/lucide-react/dist/esm/icons/heading-5.js
init_react_import();
var __iconNode26 = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17 13v-3h4", key: "1nvgqp" }],
  [
    "path",
    { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17", key: "2nebdn" }
  ]
];
var Heading5 = createLucideIcon("heading-5", __iconNode26);

// ../../node_modules/lucide-react/dist/esm/icons/heading-6.js
init_react_import();
var __iconNode27 = [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["circle", { cx: "19", cy: "16", r: "2", key: "15mx69" }],
  ["path", { d: "M20 10c-2 2-3 3.5-3 6", key: "f35dl0" }]
];
var Heading6 = createLucideIcon("heading-6", __iconNode27);

// ../../node_modules/lucide-react/dist/esm/icons/image.js
init_react_import();
var __iconNode28 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
];
var Image = createLucideIcon("image", __iconNode28);

// ../../node_modules/lucide-react/dist/esm/icons/info.js
init_react_import();
var __iconNode29 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
var Info = createLucideIcon("info", __iconNode29);

// ../../node_modules/lucide-react/dist/esm/icons/italic.js
init_react_import();
var __iconNode30 = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
];
var Italic = createLucideIcon("italic", __iconNode30);

// ../../node_modules/lucide-react/dist/esm/icons/layers.js
init_react_import();
var __iconNode31 = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
];
var Layers = createLucideIcon("layers", __iconNode31);

// ../../node_modules/lucide-react/dist/esm/icons/layout-dashboard.js
init_react_import();
var __iconNode32 = [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
];
var LayoutDashboard = createLucideIcon("layout-dashboard", __iconNode32);

// ../../node_modules/lucide-react/dist/esm/icons/layout-grid.js
init_react_import();
var __iconNode33 = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
];
var LayoutGrid = createLucideIcon("layout-grid", __iconNode33);

// ../../node_modules/lucide-react/dist/esm/icons/layout-template.js
init_react_import();
var __iconNode34 = [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
  ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1", key: "jqznyg" }],
  ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1", key: "q5h2i8" }]
];
var LayoutTemplate = createLucideIcon("layout-template", __iconNode34);

// ../../node_modules/lucide-react/dist/esm/icons/link.js
init_react_import();
var __iconNode35 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
var Link = createLucideIcon("link", __iconNode35);

// ../../node_modules/lucide-react/dist/esm/icons/list-ordered.js
init_react_import();
var __iconNode36 = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
];
var ListOrdered = createLucideIcon("list-ordered", __iconNode36);

// ../../node_modules/lucide-react/dist/esm/icons/lock-open.js
init_react_import();
var __iconNode37 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
];
var LockOpen = createLucideIcon("lock-open", __iconNode37);

// ../../node_modules/lucide-react/dist/esm/icons/lock.js
init_react_import();
var __iconNode38 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
var Lock = createLucideIcon("lock", __iconNode38);

// ../../node_modules/lucide-react/dist/esm/icons/maximize-2.js
init_react_import();
var __iconNode39 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "m21 3-7 7", key: "1l2asr" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
];
var Maximize2 = createLucideIcon("maximize-2", __iconNode39);

// ../../node_modules/lucide-react/dist/esm/icons/megaphone.js
init_react_import();
var __iconNode40 = [
  [
    "path",
    {
      d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
      key: "q8bfy3"
    }
  ],
  ["path", { d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14", key: "1853fq" }],
  ["path", { d: "M8 6v8", key: "15ugcq" }]
];
var Megaphone = createLucideIcon("megaphone", __iconNode40);

// ../../node_modules/lucide-react/dist/esm/icons/minimize-2.js
init_react_import();
var __iconNode41 = [
  ["path", { d: "m14 10 7-7", key: "oa77jy" }],
  ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
];
var Minimize2 = createLucideIcon("minimize-2", __iconNode41);

// ../../node_modules/lucide-react/dist/esm/icons/minus.js
init_react_import();
var __iconNode42 = [["path", { d: "M5 12h14", key: "1ays0h" }]];
var Minus = createLucideIcon("minus", __iconNode42);

// ../../node_modules/lucide-react/dist/esm/icons/monitor.js
init_react_import();
var __iconNode43 = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
];
var Monitor = createLucideIcon("monitor", __iconNode43);

// ../../node_modules/lucide-react/dist/esm/icons/panel-left.js
init_react_import();
var __iconNode44 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
];
var PanelLeft = createLucideIcon("panel-left", __iconNode44);

// ../../node_modules/lucide-react/dist/esm/icons/panel-right.js
init_react_import();
var __iconNode45 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
];
var PanelRight = createLucideIcon("panel-right", __iconNode45);

// ../../node_modules/lucide-react/dist/esm/icons/plus.js
init_react_import();
var __iconNode46 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
var Plus = createLucideIcon("plus", __iconNode46);

// ../../node_modules/lucide-react/dist/esm/icons/quote.js
init_react_import();
var __iconNode47 = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
var Quote = createLucideIcon("quote", __iconNode47);

// ../../node_modules/lucide-react/dist/esm/icons/rectangle-ellipsis.js
init_react_import();
var __iconNode48 = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M17 12h.01", key: "1m0b6t" }],
  ["path", { d: "M7 12h.01", key: "eqddd0" }]
];
var RectangleEllipsis = createLucideIcon("rectangle-ellipsis", __iconNode48);

// ../../node_modules/lucide-react/dist/esm/icons/redo-2.js
init_react_import();
var __iconNode49 = [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13", key: "6uklza" }]
];
var Redo2 = createLucideIcon("redo-2", __iconNode49);

// ../../node_modules/lucide-react/dist/esm/icons/search.js
init_react_import();
var __iconNode50 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
var Search = createLucideIcon("search", __iconNode50);

// ../../node_modules/lucide-react/dist/esm/icons/settings.js
init_react_import();
var __iconNode51 = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
var Settings = createLucideIcon("settings", __iconNode51);

// ../../node_modules/lucide-react/dist/esm/icons/shapes.js
init_react_import();
var __iconNode52 = [
  [
    "path",
    {
      d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",
      key: "1bo67w"
    }
  ],
  ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1", key: "1bkyp8" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "3.5", key: "w3z12y" }]
];
var Shapes = createLucideIcon("shapes", __iconNode52);

// ../../node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js
init_react_import();
var __iconNode53 = [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }]
];
var SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode53);

// ../../node_modules/lucide-react/dist/esm/icons/smartphone.js
init_react_import();
var __iconNode54 = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
var Smartphone = createLucideIcon("smartphone", __iconNode54);

// ../../node_modules/lucide-react/dist/esm/icons/square-code.js
init_react_import();
var __iconNode55 = [
  ["path", { d: "m10 9-3 3 3 3", key: "1oro0q" }],
  ["path", { d: "m14 15 3-3-3-3", key: "bz13h7" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
];
var SquareCode = createLucideIcon("square-code", __iconNode55);

// ../../node_modules/lucide-react/dist/esm/icons/strikethrough.js
init_react_import();
var __iconNode56 = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
];
var Strikethrough = createLucideIcon("strikethrough", __iconNode56);

// ../../node_modules/lucide-react/dist/esm/icons/tablet.js
init_react_import();
var __iconNode57 = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
];
var Tablet = createLucideIcon("tablet", __iconNode57);

// ../../node_modules/lucide-react/dist/esm/icons/text-align-center.js
init_react_import();
var __iconNode58 = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 19H5", key: "vjpgq2" }]
];
var TextAlignCenter = createLucideIcon("text-align-center", __iconNode58);

// ../../node_modules/lucide-react/dist/esm/icons/text-align-end.js
init_react_import();
var __iconNode59 = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 19H7", key: "4cu937" }]
];
var TextAlignEnd = createLucideIcon("text-align-end", __iconNode59);

// ../../node_modules/lucide-react/dist/esm/icons/text-align-justify.js
init_react_import();
var __iconNode60 = [
  ["path", { d: "M3 5h18", key: "1u36vt" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 19h18", key: "awlh7x" }]
];
var TextAlignJustify = createLucideIcon("text-align-justify", __iconNode60);

// ../../node_modules/lucide-react/dist/esm/icons/toy-brick.js
init_react_import();
var __iconNode61 = [
  ["rect", { width: "18", height: "12", x: "3", y: "8", rx: "1", key: "158fvp" }],
  ["path", { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3", key: "s0042v" }],
  ["path", { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3", key: "9wmeh2" }]
];
var ToyBrick = createLucideIcon("toy-brick", __iconNode61);

// ../../node_modules/lucide-react/dist/esm/icons/trash.js
init_react_import();
var __iconNode62 = [
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
var Trash = createLucideIcon("trash", __iconNode62);

// ../../node_modules/lucide-react/dist/esm/icons/type.js
init_react_import();
var __iconNode63 = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
];
var Type = createLucideIcon("type", __iconNode63);

// ../../node_modules/lucide-react/dist/esm/icons/underline.js
init_react_import();
var __iconNode64 = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
];
var Underline = createLucideIcon("underline", __iconNode64);

// ../../node_modules/lucide-react/dist/esm/icons/undo-2.js
init_react_import();
var __iconNode65 = [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
];
var Undo2 = createLucideIcon("undo-2", __iconNode65);

// ../../node_modules/lucide-react/dist/esm/icons/x.js
init_react_import();
var __iconNode66 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
var X = createLucideIcon("x", __iconNode66);

// ../../node_modules/lucide-react/dist/esm/icons/zoom-in.js
init_react_import();
var __iconNode67 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
];
var ZoomIn = createLucideIcon("zoom-in", __iconNode67);

// ../../node_modules/lucide-react/dist/esm/icons/zoom-out.js
init_react_import();
var __iconNode68 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
];
var ZoomOut = createLucideIcon("zoom-out", __iconNode68);

// store/index.ts
init_react_import();
import { create as create2, useStore } from "zustand";
import { subscribeWithSelector as subscribeWithSelector2 } from "zustand/middleware";
import { createContext, useContext } from "react";

// store/slices/history.ts
init_react_import();
import { useEffect as useEffect2 } from "react";

// lib/use-hotkey.ts
init_react_import();
import { useEffect } from "react";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
var keyCodeMap = {
  ControlLeft: "ctrl",
  ControlRight: "ctrl",
  MetaLeft: "meta",
  MetaRight: "meta",
  ShiftLeft: "shift",
  ShiftRight: "shift",
  KeyA: "a",
  KeyB: "b",
  KeyC: "c",
  KeyD: "d",
  KeyE: "e",
  KeyF: "f",
  KeyG: "g",
  KeyH: "h",
  KeyI: "i",
  KeyJ: "j",
  KeyK: "k",
  KeyL: "l",
  KeyM: "m",
  KeyN: "n",
  KeyO: "o",
  KeyP: "p",
  KeyQ: "q",
  KeyR: "r",
  KeyS: "s",
  KeyT: "t",
  KeyU: "u",
  KeyV: "v",
  KeyW: "w",
  KeyX: "x",
  KeyY: "y",
  KeyZ: "z",
  Delete: "delete",
  Backspace: "backspace",
  AltRight: "altRight"
};
var useHotkeyStore = create()(
  subscribeWithSelector((set) => ({
    held: {},
    hold: (key) => set((s) => s.held[key] ? s : { held: __spreadProps(__spreadValues({}, s.held), { [key]: true }) }),
    release: (key) => set((s) => s.held[key] ? { held: __spreadProps(__spreadValues({}, s.held), { [key]: false }) } : s),
    reset: (held = {}) => set(() => ({ held })),
    triggers: {}
  }))
);
var monitorHotkeys = (doc) => {
  const onKeyDown = (e) => {
    if (e.getModifierState("AltGraph")) {
      useHotkeyStore.getState().hold("altRight");
      return;
    }
    const key = keyCodeMap[e.code];
    if (key) {
      useHotkeyStore.getState().hold(key);
      const { held, triggers } = useHotkeyStore.getState();
      Object.values(triggers).forEach(({ combo, cb }) => {
        const conditionMet = Object.entries(combo).every(
          ([key2, value]) => value === !!held[key2]
        ) && Object.entries(held).every(
          ([key2, value]) => value === !!combo[key2]
        );
        if (conditionMet) {
          const handled = cb(e);
          if (handled !== false) {
            e.preventDefault();
          }
        }
      });
      if (key !== "meta" && key !== "ctrl" && key !== "shift") {
        useHotkeyStore.getState().release(key);
      }
    }
  };
  const onKeyUp = (e) => {
    if (!e.getModifierState("AltGraph") && e.code === "ControlRight") {
      useHotkeyStore.getState().release("altRight");
      return;
    }
    const key = keyCodeMap[e.code];
    if (key) {
      if (key === "meta") {
        useHotkeyStore.getState().reset();
      } else {
        useHotkeyStore.getState().release(key);
      }
    }
  };
  const onVisibilityChanged = (e) => {
    if (document.visibilityState === "hidden") {
      useHotkeyStore.getState().reset();
    }
  };
  const onBlur = () => {
    useHotkeyStore.getState().reset();
  };
  window.addEventListener("blur", onBlur);
  doc.addEventListener("keydown", onKeyDown);
  doc.addEventListener("keyup", onKeyUp);
  doc.addEventListener("visibilitychange", onVisibilityChanged);
  return () => {
    doc.removeEventListener("keydown", onKeyDown);
    doc.removeEventListener("keyup", onKeyUp);
    doc.removeEventListener("visibilitychange", onVisibilityChanged);
    window.removeEventListener("blur", onBlur);
  };
};
var useMonitorHotkeys = () => {
  useEffect(() => monitorHotkeys(document), []);
};
var useHotkey = (combo, cb) => {
  useEffect(() => {
    const key = `${Object.keys(combo).join("+")}`;
    useHotkeyStore.setState((s) => ({
      triggers: __spreadProps(__spreadValues({}, s.triggers), {
        [key]: { combo, cb }
      })
    }));
    return () => {
      useHotkeyStore.setState((s) => {
        const _a = s.triggers, { [key]: _ } = _a, triggers = __objRest(_a, [__restKey(key)]);
        return { triggers };
      });
    };
  }, [combo, cb]);
};

// store/slices/history.ts
var EMPTY_HISTORY_INDEX = 0;
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
var tidyState = (state) => {
  return __spreadProps(__spreadValues({}, state), {
    ui: __spreadProps(__spreadValues({}, state.ui), {
      field: __spreadProps(__spreadValues({}, state.ui.field), {
        focus: null
      })
    })
  });
};
var createHistorySlice = (set, get) => {
  const record = debounce((state) => {
    const { histories, index } = get().history;
    const history = {
      state,
      id: generateId("history")
    };
    const newHistories = [...histories.slice(0, index + 1), history];
    set({
      history: __spreadProps(__spreadValues({}, get().history), {
        histories: newHistories,
        index: newHistories.length - 1
      })
    });
  }, 250);
  return {
    initialAppState: {},
    index: EMPTY_HISTORY_INDEX,
    histories: [],
    hasPast: () => get().history.index > EMPTY_HISTORY_INDEX,
    hasFuture: () => get().history.index < get().history.histories.length - 1,
    prevHistory: () => {
      const { history } = get();
      return history.hasPast() ? history.histories[history.index - 1] : null;
    },
    nextHistory: () => {
      const s = get().history;
      return s.hasFuture() ? s.histories[s.index + 1] : null;
    },
    currentHistory: () => get().history.histories[get().history.index],
    back: () => {
      var _a;
      const { history, dispatch } = get();
      if (history.hasPast()) {
        const state = tidyState(
          ((_a = history.prevHistory()) == null ? void 0 : _a.state) || history.initialAppState
        );
        dispatch({
          type: "set",
          state
        });
        set({ history: __spreadProps(__spreadValues({}, history), { index: history.index - 1 }) });
      }
    },
    forward: () => {
      var _a;
      const { history, dispatch } = get();
      if (history.hasFuture()) {
        const state = (_a = history.nextHistory()) == null ? void 0 : _a.state;
        dispatch({ type: "set", state: state ? tidyState(state) : {} });
        set({ history: __spreadProps(__spreadValues({}, history), { index: history.index + 1 }) });
      }
    },
    setHistories: (histories) => {
      var _a;
      const { dispatch, history } = get();
      dispatch({
        type: "set",
        state: ((_a = histories[histories.length - 1]) == null ? void 0 : _a.state) || history.initialAppState
      });
      set({ history: __spreadProps(__spreadValues({}, history), { histories, index: histories.length - 1 }) });
    },
    setHistoryIndex: (index) => {
      var _a;
      const { dispatch, history } = get();
      dispatch({
        type: "set",
        state: ((_a = history.histories[index]) == null ? void 0 : _a.state) || history.initialAppState
      });
      set({ history: __spreadProps(__spreadValues({}, history), { index }) });
    },
    record
  };
};
function useRegisterHistorySlice(appStore, {
  histories,
  index,
  initialAppState
}) {
  useEffect2(
    () => appStore.setState({
      history: __spreadProps(__spreadValues({}, appStore.getState().history), {
        histories,
        index,
        initialAppState
      })
    }),
    [histories, index, initialAppState, appStore]
  );
  const back = () => {
    appStore.getState().history.back();
  };
  const forward = () => {
    appStore.getState().history.forward();
  };
  useHotkey({ altRight: false, meta: true, z: true }, back);
  useHotkey({ altRight: false, meta: true, shift: true, z: true }, forward);
  useHotkey({ altRight: false, meta: true, y: true }, forward);
  useHotkey({ altRight: false, ctrl: true, z: true }, back);
  useHotkey({ altRight: false, ctrl: true, shift: true, z: true }, forward);
  useHotkey({ altRight: false, ctrl: true, y: true }, forward);
}

// store/slices/nodes.ts
init_react_import();
var createNodesSlice = (_set, _get) => {
  const registry = /* @__PURE__ */ new Map();
  return {
    registerNode: (id, handle) => {
      registry.set(id, handle);
    },
    unregisterNode: (id) => {
      registry.delete(id);
    },
    syncNode: (id) => {
      var _a;
      if (!id) return;
      (_a = registry.get(id)) == null ? void 0 : _a.sync();
    },
    syncNodes: (ids) => {
      ids.forEach((id) => {
        var _a;
        if (!id) return;
        (_a = registry.get(id)) == null ? void 0 : _a.sync();
      });
    },
    setOverlayVisible: (id, visible) => {
      if (!id) return;
      const node = registry.get(id);
      if (!node) return;
      if (visible) {
        node.showOverlay();
        return;
      }
      node.hideOverlay();
    }
  };
};

// store/slices/permissions.ts
init_react_import();
import { useEffect as useEffect3 } from "react";

// lib/data/flatten-data.ts
init_react_import();
var flattenData = (state, config) => {
  const data = [];
  walkAppState(
    state,
    config,
    (content) => content,
    (item) => {
      data.push(item);
      return item;
    }
  );
  return data;
};

// store/slices/permissions.ts
var createPermissionsSlice = (set, get) => {
  const resolvePermissions = (..._0) => __async(null, [..._0], function* (params = {}, force) {
    const { state, permissions, config } = get();
    const { cache, globalPermissions } = permissions;
    const resolvePermissionsForItem = (item2, force2 = false) => __async(null, null, function* () {
      var _a, _b;
      const { config: config2, state: appState, setComponentLoading } = get();
      const itemCache = cache[item2.props.id];
      const nodes = appState.indexes.nodes;
      const parentId = (_a = nodes[item2.props.id]) == null ? void 0 : _a.parentId;
      const parentNode = parentId ? nodes[parentId] : null;
      const parentData = (_b = parentNode == null ? void 0 : parentNode.data) != null ? _b : null;
      const componentConfig = item2.type === "root" ? config2.root : config2.components[item2.type];
      if (!componentConfig) {
        return;
      }
      const initialPermissions = __spreadValues(__spreadValues({}, globalPermissions), componentConfig.permissions);
      if (componentConfig.resolvePermissions) {
        const changed = getChanged(item2, itemCache == null ? void 0 : itemCache.lastData);
        const propsChanged = Object.values(changed).some((el) => el === true);
        const parentChanged = (itemCache == null ? void 0 : itemCache.lastParentId) !== parentId;
        if (propsChanged || parentChanged || force2) {
          const clearTimeout2 = setComponentLoading(item2.props.id, true, 50);
          const resolvedPermissions = yield componentConfig.resolvePermissions(
            item2,
            {
              changed,
              lastPermissions: (itemCache == null ? void 0 : itemCache.lastPermissions) || null,
              permissions: initialPermissions,
              appState: makeStatePublic(appState),
              lastData: (itemCache == null ? void 0 : itemCache.lastData) || null,
              parent: parentData
            }
          );
          const latest = get().permissions;
          set({
            permissions: __spreadProps(__spreadValues({}, latest), {
              cache: __spreadProps(__spreadValues({}, latest.cache), {
                [item2.props.id]: {
                  lastParentId: parentId,
                  lastData: item2,
                  lastPermissions: resolvedPermissions
                }
              }),
              resolvedPermissions: __spreadProps(__spreadValues({}, latest.resolvedPermissions), {
                [item2.props.id]: resolvedPermissions
              })
            })
          });
          clearTimeout2();
        }
      }
    });
    const resolvePermissionsForRoot = (force2 = false) => {
      const { state: appState } = get();
      resolvePermissionsForItem(
        // Shim the root data in by conforming to component data shape
        {
          type: "root",
          props: __spreadProps(__spreadValues({}, appState.data.root.props), { id: "root" })
        },
        force2
      );
    };
    const { item, type, root } = params;
    if (item) {
      yield resolvePermissionsForItem(item, force);
    } else if (type) {
      flattenData(state, config).filter((item2) => item2.type === type).map((item2) => __async(null, null, function* () {
        yield resolvePermissionsForItem(item2, force);
      }));
    } else if (root) {
      resolvePermissionsForRoot(force);
    } else {
      flattenData(state, config).map((item2) => __async(null, null, function* () {
        yield resolvePermissionsForItem(item2, force);
      }));
    }
  });
  const refreshPermissions = (params) => resolvePermissions(params, true);
  return {
    cache: {},
    globalPermissions: {
      drag: true,
      edit: true,
      delete: true,
      duplicate: true,
      insert: true
    },
    resolvedPermissions: {},
    getPermissions: ({ item, type, root } = {}) => {
      const { config, permissions } = get();
      const { globalPermissions, resolvedPermissions } = permissions;
      if (item) {
        const componentConfig = config.components[item.type];
        const initialPermissions = __spreadValues(__spreadValues({}, globalPermissions), componentConfig == null ? void 0 : componentConfig.permissions);
        const resolvedForItem = resolvedPermissions[item.props.id];
        return resolvedForItem ? __spreadValues(__spreadValues({}, globalPermissions), resolvedForItem) : initialPermissions;
      } else if (type) {
        const componentConfig = config.components[type];
        return __spreadValues(__spreadValues({}, globalPermissions), componentConfig == null ? void 0 : componentConfig.permissions);
      } else if (root) {
        const rootConfig = config.root;
        const initialPermissions = __spreadValues(__spreadValues({}, globalPermissions), rootConfig == null ? void 0 : rootConfig.permissions);
        const resolvedForItem = resolvedPermissions["root"];
        return resolvedForItem ? __spreadValues(__spreadValues({}, globalPermissions), resolvedForItem) : initialPermissions;
      }
      return globalPermissions;
    },
    resolvePermissions,
    refreshPermissions
  };
};
var useRegisterPermissionsSlice = (appStore, globalPermissions) => {
  useEffect3(() => {
    const { permissions } = appStore.getState();
    const { globalPermissions: existingGlobalPermissions } = permissions;
    appStore.setState({
      permissions: __spreadProps(__spreadValues({}, permissions), {
        globalPermissions: __spreadValues(__spreadValues({}, existingGlobalPermissions), globalPermissions)
      })
    });
    permissions.resolvePermissions();
  }, [globalPermissions, appStore]);
  useEffect3(() => {
    return appStore.subscribe(
      (s) => s.state.data,
      () => {
        appStore.getState().permissions.resolvePermissions();
      }
    );
  }, [appStore]);
  useEffect3(() => {
    return appStore.subscribe(
      (s) => s.config,
      () => {
        appStore.getState().permissions.resolvePermissions();
      }
    );
  }, [appStore]);
};

// store/slices/fields.ts
init_react_import();
import { useCallback, useEffect as useEffect4 } from "react";
var createFieldsSlice = (_set, _get) => {
  return {
    fields: {},
    loading: false,
    lastResolvedData: {},
    id: void 0
  };
};
var useRegisterFieldsSlice = (appStore, id) => {
  const resolveFields = useCallback(
    (reset) => __async(null, null, function* () {
      var _a, _b;
      const { fields, lastResolvedData } = appStore.getState().fields;
      const metadata = appStore.getState().metadata;
      const nodes = appStore.getState().state.indexes.nodes;
      const node = nodes[id || "root"];
      const componentData = node == null ? void 0 : node.data;
      const parentNode = (node == null ? void 0 : node.parentId) ? nodes[node.parentId] : null;
      const parent = (parentNode == null ? void 0 : parentNode.data) || null;
      const { getComponentConfig, state } = appStore.getState();
      const componentConfig = getComponentConfig(componentData == null ? void 0 : componentData.type);
      if (!componentData || !componentConfig) return;
      const defaultFields = componentConfig.fields || {};
      const resolver = componentConfig.resolveFields;
      let lastFields = fields;
      if (reset) {
        appStore.setState((s) => ({
          fields: __spreadProps(__spreadValues({}, s.fields), { fields: defaultFields, id })
        }));
        lastFields = defaultFields;
      }
      if (resolver) {
        const timeout = setTimeout(() => {
          appStore.setState((s) => ({
            fields: __spreadProps(__spreadValues({}, s.fields), { loading: true })
          }));
        }, 50);
        const lastData = ((_a = lastResolvedData.props) == null ? void 0 : _a.id) === id ? lastResolvedData : null;
        const changed = getChanged(componentData, lastData);
        const newFields = yield resolver(componentData, {
          changed,
          fields: defaultFields,
          lastFields,
          metadata: __spreadValues(__spreadValues({}, metadata), componentConfig.metadata),
          lastData,
          appState: makeStatePublic(state),
          parent
        });
        clearTimeout(timeout);
        if (((_b = appStore.getState().selectedItem) == null ? void 0 : _b.props.id) !== id) {
          return;
        }
        appStore.setState({
          fields: {
            fields: newFields,
            loading: false,
            lastResolvedData: componentData,
            id
          }
        });
      } else {
        appStore.setState((s) => ({
          fields: __spreadProps(__spreadValues({}, s.fields), { fields: defaultFields, id })
        }));
      }
    }),
    [id, appStore]
  );
  useEffect4(() => {
    resolveFields(true);
    return appStore.subscribe(
      (s) => s.state.indexes.nodes[id || "root"],
      () => resolveFields()
    );
  }, [id, appStore, resolveFields]);
};

// lib/data/to-root.ts
init_react_import();
var toRoot = (item) => {
  if ("type" in item && item.type !== "root") {
    throw new Error("Converting non-root item to root.");
  }
  const { readOnly } = item;
  if (item.props) {
    if ("id" in item.props) {
      const _a = item.props, { id } = _a, props = __objRest(_a, ["id"]);
      return { props, readOnly };
    }
    return { props: item.props, readOnly };
  }
  return { props: {}, readOnly };
};

// store/index.ts
var defaultPageFields = {
  title: { type: "text" }
};
var createAppStore = (initialAppStore) => create2()(
  subscribeWithSelector2((set, get) => {
    var _a, _b;
    return __spreadProps(__spreadValues({
      instanceId: generateId(),
      state: defaultAppState,
      config: { components: {} },
      componentState: {},
      plugins: [],
      overrides: {},
      viewports: defaultViewports,
      zoomConfig: {
        autoZoom: 1,
        rootHeight: 0,
        zoom: 1
      },
      status: "LOADING",
      iframe: {},
      _experimentalFullScreenCanvas: false,
      _experimentalVirtualization: false,
      metadata: {},
      fieldTransforms: {}
    }, initialAppStore), {
      fields: createFieldsSlice(set, get),
      history: createHistorySlice(set, get),
      nodes: createNodesSlice(set, get),
      permissions: createPermissionsSlice(set, get),
      getCurrentData: () => {
        var _a2;
        const s = get();
        return (_a2 = s.selectedItem) != null ? _a2 : s.state.data.root;
      },
      getComponentConfig: (type) => {
        var _a2;
        const { config, selectedItem } = get();
        const rootFields = ((_a2 = config.root) == null ? void 0 : _a2.fields) || defaultPageFields;
        return type && type !== "root" ? config.components[type] : selectedItem ? config.components[selectedItem.type] : __spreadProps(__spreadValues({}, config.root), { fields: rootFields });
      },
      selectedItem: ((_a = initialAppStore == null ? void 0 : initialAppStore.state) == null ? void 0 : _a.ui.itemSelector) ? getItem(
        (_b = initialAppStore == null ? void 0 : initialAppStore.state) == null ? void 0 : _b.ui.itemSelector,
        initialAppStore.state
      ) : null,
      dispatch: (action) => set((s) => {
        const { record } = get().history;
        const reducer = createReducer({
          record,
          appStore: s
        });
        const state = reducer(s.state, action);
        const selectedItem = state.ui.itemSelector ? getItem(state.ui.itemSelector, state) : null;
        return __spreadProps(__spreadValues({}, s), { state, selectedItem });
      }),
      setZoomConfig: (zoomConfig) => set({ zoomConfig }),
      setStatus: (status) => set({ status }),
      setComponentState: (componentState) => set({ componentState }),
      pendingLoadTimeouts: {},
      setComponentLoading: (id, loading = true, defer = 0) => {
        const { setComponentState, pendingLoadTimeouts } = get();
        const loadId = generateId();
        const setLoading = () => {
          var _a2;
          const { componentState } = get();
          setComponentState(__spreadProps(__spreadValues({}, componentState), {
            [id]: __spreadProps(__spreadValues({}, componentState[id]), {
              loadingCount: (((_a2 = componentState[id]) == null ? void 0 : _a2.loadingCount) || 0) + 1
            })
          }));
        };
        const unsetLoading = () => {
          var _a2;
          const { componentState } = get();
          clearTimeout(timeout);
          delete pendingLoadTimeouts[loadId];
          set({ pendingLoadTimeouts });
          setComponentState(__spreadProps(__spreadValues({}, componentState), {
            [id]: __spreadProps(__spreadValues({}, componentState[id]), {
              loadingCount: Math.max(
                (((_a2 = componentState[id]) == null ? void 0 : _a2.loadingCount) || 0) - 1,
                0
              )
            })
          }));
        };
        const timeout = setTimeout(() => {
          if (loading) {
            setLoading();
          } else {
            unsetLoading();
          }
          delete pendingLoadTimeouts[loadId];
          set({ pendingLoadTimeouts });
        }, defer);
        set({
          pendingLoadTimeouts: __spreadProps(__spreadValues({}, pendingLoadTimeouts), {
            [id]: timeout
          })
        });
        return unsetLoading;
      },
      unsetComponentLoading: (id) => {
        const { setComponentLoading } = get();
        setComponentLoading(id, false);
      },
      // Helper
      setUi: (ui, recordHistory) => set((s) => {
        const dispatch = createReducer({
          record: () => {
          },
          appStore: s
        });
        const state = dispatch(s.state, {
          type: "setUi",
          ui,
          recordHistory
        });
        const selectedItem = state.ui.itemSelector ? getItem(state.ui.itemSelector, state) : null;
        return __spreadProps(__spreadValues({}, s), { state, selectedItem });
      }),
      resolveComponentData: (componentData, trigger) => __async(null, null, function* () {
        var _a2, _b2;
        const { config, metadata, setComponentLoading, permissions, state } = get();
        const componentId = "id" in componentData.props ? componentData.props.id : "root";
        const parentId = (_a2 = state.indexes.nodes[componentId]) == null ? void 0 : _a2.parentId;
        const parentNode = parentId ? state.indexes.nodes[parentId] : null;
        const parentData = (_b2 = parentNode == null ? void 0 : parentNode.data) != null ? _b2 : null;
        const timeouts = {};
        return yield resolveComponentData(
          componentData,
          config,
          metadata,
          (item) => {
            const id = "id" in item.props ? item.props.id : "root";
            timeouts[id] = setComponentLoading(id, true, 50);
          },
          (item) => __async(null, null, function* () {
            const id = "id" in item.props ? item.props.id : "root";
            if ("type" in item) {
              yield permissions.refreshPermissions({ item });
            } else {
              yield permissions.refreshPermissions({ root: true });
            }
            timeouts[id]();
          }),
          trigger,
          parentData
        );
      }),
      resolveAndCommitData: () => __async(null, null, function* () {
        const { config, state, dispatch, resolveComponentData: resolveComponentData2 } = get();
        walkAppState(
          state,
          config,
          (content) => content,
          (childItem, path) => {
            if (path.length > 1) return childItem;
            resolveComponentData2(childItem, "load").then((resolved) => {
              const { state: state2 } = get();
              const node = state2.indexes.nodes[resolved.node.props.id];
              if (node && resolved.didChange) {
                if (resolved.node.props.id === "root") {
                  dispatch({
                    type: "replaceRoot",
                    root: toRoot(resolved.node)
                  });
                } else {
                  const zoneCompound = `${node.parentId}:${node.zone}`;
                  const parentZone = state2.indexes.zones[zoneCompound];
                  const index = parentZone.contentIds.indexOf(
                    resolved.node.props.id
                  );
                  dispatch({
                    type: "replace",
                    data: resolved.node,
                    destinationIndex: index,
                    destinationZone: zoneCompound
                  });
                }
              }
            });
            return childItem;
          }
        );
      })
    });
  })
);
var appStoreContext = createContext(createAppStore());
function useAppStore(selector) {
  const context = useContext(appStoreContext);
  return useStore(context, selector);
}
function useAppStoreApi() {
  return useContext(appStoreContext);
}

// components/RichTextMenu/lib/use-control-context.ts
init_react_import();
import { createContext as createContext2, useContext as useContext2 } from "react";
var ControlContext = createContext2({});
var useControlContext = () => {
  return useContext2(ControlContext);
};

// components/RichTextMenu/components/SelectControl/index.tsx
init_react_import();
import { useMemo } from "react";

// components/Select/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/Select/styles.module.css#css-module
init_react_import();
var styles_module_default = { "Select": "_Select_16son_1", "Select-button": "_Select-button_16son_6", "Select--hasOptions": "_Select--hasOptions_16son_19", "Select--disabled": "_Select--disabled_16son_23", "Select-buttonIcon": "_Select-buttonIcon_16son_27", "Select--standalone": "_Select--standalone_16son_33", "Select--actionBar": "_Select--actionBar_16son_38", "Select--hasValue": "_Select--hasValue_16son_44", "Select-items": "_Select-items_16son_61", "SelectItem": "_SelectItem_16son_72", "SelectItem--isSelected": "_SelectItem--isSelected_16son_87", "SelectItem-icon": "_SelectItem-icon_16son_93" };

// components/Select/index.tsx
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger
} from "@radix-ui/react-popover";

// lib/index.ts
init_react_import();

// lib/filter.ts
init_react_import();

// lib/data/reorder.ts
init_react_import();
var reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// lib/data/replace.ts
init_react_import();
var replace = (list, index, newItem) => {
  const result = Array.from(list);
  result.splice(index, 1);
  result.splice(index, 0, newItem);
  return result;
};

// lib/use-reset-auto-zoom.ts
init_react_import();
import { useCallback as useCallback2 } from "react";

// lib/get-zoom-config.ts
init_react_import();

// ../../node_modules/css-box-model/dist/css-box-model.esm.js
init_react_import();

// ../../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
init_react_import();
var isProduction = process.env.NODE_ENV === "production";
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}

// ../../node_modules/css-box-model/dist/css-box-model.esm.js
var getRect = function getRect2(_ref) {
  var top = _ref.top, right = _ref.right, bottom = _ref.bottom, left = _ref.left;
  var width = right - left;
  var height = bottom - top;
  var rect = {
    top,
    right,
    bottom,
    left,
    width,
    height,
    x: left,
    y: top,
    center: {
      x: (right + left) / 2,
      y: (bottom + top) / 2
    }
  };
  return rect;
};
var expand = function expand2(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink2(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox2(_ref2) {
  var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox,
    borderBox: getRect(borderBox),
    paddingBox,
    contentBox,
    margin,
    border,
    padding
  };
};
var parse = function parse2(raw) {
  var value = raw.slice(0, -2);
  var suffix = raw.slice(-2);
  if (suffix !== "px") {
    return 0;
  }
  var result = Number(value);
  !!isNaN(result) ? process.env.NODE_ENV !== "production" ? invariant(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : invariant(false) : void 0;
  return result;
};
var calculateBox = function calculateBox2(borderBox, styles) {
  var margin = {
    top: parse(styles.marginTop),
    right: parse(styles.marginRight),
    bottom: parse(styles.marginBottom),
    left: parse(styles.marginLeft)
  };
  var padding = {
    top: parse(styles.paddingTop),
    right: parse(styles.paddingRight),
    bottom: parse(styles.paddingBottom),
    left: parse(styles.paddingLeft)
  };
  var border = {
    top: parse(styles.borderTopWidth),
    right: parse(styles.borderRightWidth),
    bottom: parse(styles.borderBottomWidth),
    left: parse(styles.borderLeftWidth)
  };
  return createBox({
    borderBox,
    margin,
    padding,
    border
  });
};
var getBox = function getBox2(el) {
  var borderBox = el.getBoundingClientRect();
  var styles = window.getComputedStyle(el);
  return calculateBox(borderBox, styles);
};

// lib/get-zoom-config.ts
var RESET_ZOOM_SMALLER_THAN_FRAME = true;
var getZoomConfig = (uiViewport, frame, zoom) => {
  const box = getBox(frame);
  const { width: frameWidth, height: frameHeight } = box.contentBox;
  const viewportHeight = uiViewport.height === "auto" ? frameHeight : uiViewport.height;
  let rootHeight = 0;
  let autoZoom = 1;
  if (typeof uiViewport.width === "number" && (uiViewport.width > frameWidth || viewportHeight > frameHeight)) {
    const widthZoom = Math.min(frameWidth / uiViewport.width, 1);
    const heightZoom = Math.min(frameHeight / viewportHeight, 1);
    zoom = widthZoom;
    if (widthZoom < heightZoom) {
      rootHeight = viewportHeight / zoom;
    } else {
      rootHeight = viewportHeight;
      zoom = heightZoom;
    }
    autoZoom = zoom;
  } else {
    if (RESET_ZOOM_SMALLER_THAN_FRAME) {
      autoZoom = 1;
      zoom = 1;
      rootHeight = viewportHeight;
    }
  }
  return { autoZoom, rootHeight, zoom };
};

// lib/use-reset-auto-zoom.ts
var useResetAutoZoom = (frameRef) => {
  const appStoreApi = useAppStoreApi();
  const resetAutoZoom = useCallback2(
    (options) => {
      const { state, zoomConfig, setZoomConfig } = appStoreApi.getState();
      const { viewports } = state.ui;
      const newViewports = (options == null ? void 0 : options.viewports) || viewports;
      if (frameRef.current) {
        setZoomConfig(
          getZoomConfig(newViewports == null ? void 0 : newViewports.current, frameRef.current, zoomConfig.zoom)
        );
      }
    },
    [appStoreApi, frameRef]
  );
  return resetAutoZoom;
};

// components/Select/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var getClassName = get_class_name_factory_default("Select", styles_module_default);
var getItemClassName = get_class_name_factory_default("SelectItem", styles_module_default);
var Item = ({
  children,
  isSelected,
  onClick
}) => {
  return /* @__PURE__ */ jsx("button", { className: getItemClassName({ isSelected }), onClick, children });
};
var Select = ({
  children,
  options,
  onChange,
  value,
  defaultValue,
  mode,
  disabled = false
}) => {
  const [open, setOpen] = useState(false);
  const hasOptions = options.length > 0;
  const isDisabled = disabled || !hasOptions;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: getClassName({
        hasValue: value !== defaultValue,
        hasOptions,
        actionBar: mode === "actionBar",
        standalone: mode === "standalone",
        disabled: isDisabled
      }),
      children: /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
        hasOptions ? /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("button", { className: getClassName("button"), children: [
          /* @__PURE__ */ jsx("span", { className: getClassName("buttonIcon"), children }),
          /* @__PURE__ */ jsx(ChevronDown, { size: 12 })
        ] }) }) : /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: getClassName("button"), children: [
          /* @__PURE__ */ jsx("span", { className: getClassName("buttonIcon"), children }),
          /* @__PURE__ */ jsx(ChevronDown, { size: 12 })
        ] }) }),
        options.length > 0 && /* @__PURE__ */ jsx(PopoverPortal, { children: /* @__PURE__ */ jsx(PopoverContent, { align: "start", children: /* @__PURE__ */ jsx("ul", { className: getClassName("items"), "data-credbuild-rte-menu": true, children: options.map((option) => {
          const Icon2 = option.icon;
          return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            Item,
            {
              isSelected: value === option.value,
              onClick: () => {
                onChange(option.value);
                setOpen(false);
              },
              children: [
                Icon2 && /* @__PURE__ */ jsx("div", { className: getItemClassName("icon"), children: /* @__PURE__ */ jsx(Icon2, { size: 16 }) }),
                option.label
              ]
            }
          ) }, option.value);
        }) }) }) })
      ] })
    }
  );
};

// components/RichTextMenu/components/SelectControl/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function SelectControl({
  renderDefaultIcon,
  onChange,
  options,
  value,
  defaultValue
}) {
  var _a, _b;
  const { inline, readOnly } = useControlContext();
  const optionsByValue = useMemo(
    () => options.reduce(
      (acc, option) => __spreadProps(__spreadValues({}, acc), { [option.value]: option }),
      {}
    ),
    [options]
  );
  const Node = (_b = value && ((_a = optionsByValue[value]) == null ? void 0 : _a.icon)) != null ? _b : renderDefaultIcon;
  return /* @__PURE__ */ jsx2(
    Select,
    {
      options,
      onChange,
      value,
      defaultValue,
      mode: inline ? "actionBar" : "standalone",
      disabled: readOnly,
      children: /* @__PURE__ */ jsx2(Node, {})
    }
  );
}

export {
  Bold,
  Box,
  ChartColumn,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleCheckBig,
  Code,
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
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Heading,
  Image,
  Info,
  Italic,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  LayoutTemplate,
  Link,
  ListOrdered,
  List,
  LockOpen,
  Lock,
  Maximize2,
  Megaphone,
  Minimize2,
  Minus,
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
  SquareCode,
  Strikethrough,
  Tablet,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignJustify,
  TextAlignStart,
  ToyBrick,
  Trash,
  Type,
  Underline,
  Undo2,
  X,
  ZoomIn,
  ZoomOut,
  reorder,
  replace,
  monitorHotkeys,
  useMonitorHotkeys,
  useHotkey,
  useRegisterHistorySlice,
  useRegisterPermissionsSlice,
  useRegisterFieldsSlice,
  createAppStore,
  appStoreContext,
  useAppStore,
  useAppStoreApi,
  getBox,
  useResetAutoZoom,
  ControlContext,
  useControlContext,
  SelectControl
};
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/heading.js:
lucide-react/dist/esm/icons/list.js:
lucide-react/dist/esm/icons/text-align-start.js:
lucide-react/dist/esm/icons/bold.js:
lucide-react/dist/esm/icons/box.js:
lucide-react/dist/esm/icons/chart-column.js:
lucide-react/dist/esm/icons/chevron-down.js:
lucide-react/dist/esm/icons/chevron-right.js:
lucide-react/dist/esm/icons/chevron-up.js:
lucide-react/dist/esm/icons/circle-check-big.js:
lucide-react/dist/esm/icons/code.js:
lucide-react/dist/esm/icons/copy.js:
lucide-react/dist/esm/icons/corner-left-up.js:
lucide-react/dist/esm/icons/credit-card.js:
lucide-react/dist/esm/icons/ellipsis-vertical.js:
lucide-react/dist/esm/icons/expand.js:
lucide-react/dist/esm/icons/external-link.js:
lucide-react/dist/esm/icons/file-text.js:
lucide-react/dist/esm/icons/globe.js:
lucide-react/dist/esm/icons/grip-vertical.js:
lucide-react/dist/esm/icons/hash.js:
lucide-react/dist/esm/icons/heading-1.js:
lucide-react/dist/esm/icons/heading-2.js:
lucide-react/dist/esm/icons/heading-3.js:
lucide-react/dist/esm/icons/heading-4.js:
lucide-react/dist/esm/icons/heading-5.js:
lucide-react/dist/esm/icons/heading-6.js:
lucide-react/dist/esm/icons/image.js:
lucide-react/dist/esm/icons/info.js:
lucide-react/dist/esm/icons/italic.js:
lucide-react/dist/esm/icons/layers.js:
lucide-react/dist/esm/icons/layout-dashboard.js:
lucide-react/dist/esm/icons/layout-grid.js:
lucide-react/dist/esm/icons/layout-template.js:
lucide-react/dist/esm/icons/link.js:
lucide-react/dist/esm/icons/list-ordered.js:
lucide-react/dist/esm/icons/lock-open.js:
lucide-react/dist/esm/icons/lock.js:
lucide-react/dist/esm/icons/maximize-2.js:
lucide-react/dist/esm/icons/megaphone.js:
lucide-react/dist/esm/icons/minimize-2.js:
lucide-react/dist/esm/icons/minus.js:
lucide-react/dist/esm/icons/monitor.js:
lucide-react/dist/esm/icons/panel-left.js:
lucide-react/dist/esm/icons/panel-right.js:
lucide-react/dist/esm/icons/plus.js:
lucide-react/dist/esm/icons/quote.js:
lucide-react/dist/esm/icons/rectangle-ellipsis.js:
lucide-react/dist/esm/icons/redo-2.js:
lucide-react/dist/esm/icons/search.js:
lucide-react/dist/esm/icons/settings.js:
lucide-react/dist/esm/icons/shapes.js:
lucide-react/dist/esm/icons/sliders-horizontal.js:
lucide-react/dist/esm/icons/smartphone.js:
lucide-react/dist/esm/icons/square-code.js:
lucide-react/dist/esm/icons/strikethrough.js:
lucide-react/dist/esm/icons/tablet.js:
lucide-react/dist/esm/icons/text-align-center.js:
lucide-react/dist/esm/icons/text-align-end.js:
lucide-react/dist/esm/icons/text-align-justify.js:
lucide-react/dist/esm/icons/toy-brick.js:
lucide-react/dist/esm/icons/trash.js:
lucide-react/dist/esm/icons/type.js:
lucide-react/dist/esm/icons/underline.js:
lucide-react/dist/esm/icons/undo-2.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/icons/zoom-in.js:
lucide-react/dist/esm/icons/zoom-out.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.556.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
