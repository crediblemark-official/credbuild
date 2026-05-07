"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// react-import.js
var import_react;
var init_react_import = __esm({
  "react-import.js"() {
    "use strict";
    import_react = __toESM(require("react"));
  }
});

// lib/get-class-name-factory.ts
var import_classnames, getClassNameFactory, get_class_name_factory_default;
var init_get_class_name_factory = __esm({
  "lib/get-class-name-factory.ts"() {
    "use strict";
    init_react_import();
    import_classnames = __toESM(require("classnames"));
    getClassNameFactory = (rootClass, styles2, config = { baseClass: "" }) => (options = {}) => {
      if (typeof options === "string") {
        const descendant = options;
        const style = styles2[`${rootClass}-${descendant}`];
        if (style) {
          return config.baseClass + styles2[`${rootClass}-${descendant}`] || "";
        }
        return "";
      } else if (typeof options === "object") {
        const modifiers = options;
        const prefixedModifiers = {};
        for (let modifier in modifiers) {
          prefixedModifiers[styles2[`${rootClass}--${modifier}`]] = modifiers[modifier];
        }
        const c = styles2[rootClass];
        return config.baseClass + (0, import_classnames.default)({
          [c]: !!c,
          // only apply the class if it exists
          ...prefixedModifiers
        });
      } else {
        return config.baseClass + styles2[rootClass] || "";
      }
    };
    get_class_name_factory_default = getClassNameFactory;
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/ActionBar/styles.module.css/#css-module-data
var init_css_module_data = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/ActionBar/styles.module.css/#css-module-data"() {
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/ActionBar/styles.module.css#css-module
var styles_module_default;
var init_styles_module = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/ActionBar/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data();
    styles_module_default = { "ActionBar": "_ActionBar_ze0ci_1", "ActionBar-label": "_ActionBar-label_ze0ci_18", "ActionBarAction": "_ActionBarAction_ze0ci_30", "ActionBar-group": "_ActionBar-group_ze0ci_38", "ActionBarAction--disabled": "_ActionBarAction--disabled_ze0ci_71", "ActionBarAction--active": "_ActionBarAction--active_ze0ci_93", "ActionBar-separator": "_ActionBar-separator_ze0ci_102" };
  }
});

// components/ActionBar/index.tsx
var import_jsx_runtime, getClassName, getActionClassName, ActionBar, Action, Group, Label, Separator;
var init_ActionBar = __esm({
  "components/ActionBar/index.tsx"() {
    "use strict";
    init_react_import();
    init_get_class_name_factory();
    init_styles_module();
    import_jsx_runtime = require("react/jsx-runtime");
    getClassName = get_class_name_factory_default("ActionBar", styles_module_default);
    getActionClassName = get_class_name_factory_default("ActionBarAction", styles_module_default);
    ActionBar = ({
      label,
      children
    }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        className: getClassName(),
        onClick: (e) => {
          e.stopPropagation();
        },
        children: [
          label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBar.Group, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: getClassName("label"), children: label }) }),
          children
        ]
      }
    );
    Action = ({
      children,
      label,
      onClick,
      active = false,
      disabled
    }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        type: "button",
        className: getActionClassName({ active, disabled }),
        onClick,
        title: label,
        tabIndex: 0,
        disabled,
        children
      }
    );
    Group = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: getClassName("group"), children });
    Label = ({ label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: getClassName("label"), children: label });
    Separator = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: getClassName("separator") });
    ActionBar.Action = Action;
    ActionBar.Label = Label;
    ActionBar.Group = Group;
    ActionBar.Separator = Separator;
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/AutoField/styles.module.css/#css-module-data
var init_css_module_data2 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/AutoField/styles.module.css/#css-module-data"() {
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/AutoField/styles.module.css#css-module
var styles_module_default2;
var init_styles_module2 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/AutoField/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data2();
    styles_module_default2 = { "InputWrapper": "_InputWrapper_1q7gk_1", "Input-label": "_Input-label_1q7gk_5", "Input-labelIcon": "_Input-labelIcon_1q7gk_14", "Input-disabledIcon": "_Input-disabledIcon_1q7gk_21", "Input-input": "_Input-input_1q7gk_26", "Input": "_Input_1q7gk_1", "Input--readOnly": "_Input--readOnly_1q7gk_82", "Input-radioGroupItems": "_Input-radioGroupItems_1q7gk_93", "Input-radio": "_Input-radio_1q7gk_93", "Input-radioInner": "_Input-radioInner_1q7gk_110", "Input-radioInput": "_Input-radioInput_1q7gk_155" };
  }
});

// lib/generate-id.ts
var import_uuid, generateId;
var init_generate_id = __esm({
  "lib/generate-id.ts"() {
    "use strict";
    init_react_import();
    import_uuid = require("uuid");
    generateId = (type) => type ? `${type}-${(0, import_uuid.v4)()}` : (0, import_uuid.v4)();
  }
});

// lib/use-safe-id.ts
var import_react2, useSafeId;
var init_use_safe_id = __esm({
  "lib/use-safe-id.ts"() {
    "use strict";
    init_react_import();
    import_react2 = __toESM(require("react"));
    init_generate_id();
    useSafeId = () => {
      if (typeof import_react2.default.useId !== "undefined") {
        return import_react2.default.useId();
      }
      const [id] = (0, import_react2.useState)(generateId());
      return id;
    };
  }
});

// lib/use-context-store.tsx
function useContextStore(context, selector) {
  const store = (0, import_react3.useContext)(context);
  if (!store) {
    throw new Error("useContextStore must be used inside context");
  }
  return (0, import_zustand.useStore)(store, (0, import_shallow.useShallow)(selector));
}
function createStoreProvider(ContextComponent) {
  const StoreProvider = ({
    children,
    value
  }) => {
    const [store] = (0, import_react3.useState)(() => (0, import_zustand.createStore)(() => value));
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ContextComponent.Provider, { value: store, children });
  };
  return StoreProvider;
}
function createContextStore(defaultValue) {
  const ctx = (0, import_react3.createContext)(
    (0, import_zustand.createStore)((0, import_middleware.subscribeWithSelector)(() => defaultValue))
  );
  return {
    ctx,
    Provider: createStoreProvider(ctx)
  };
}
var import_react3, import_zustand, import_middleware, import_shallow, import_jsx_runtime2;
var init_use_context_store = __esm({
  "lib/use-context-store.tsx"() {
    "use strict";
    init_react_import();
    import_react3 = require("react");
    import_zustand = require("zustand");
    import_middleware = require("zustand/middleware");
    import_shallow = require("zustand/react/shallow");
    import_jsx_runtime2 = require("react/jsx-runtime");
  }
});

// components/AutoField/store.ts
function useFieldStore(selector) {
  const store = (0, import_react4.useContext)(fieldContextStore.ctx);
  if (!store) {
    throw new Error("useContextStore must be used inside context");
  }
  return (0, import_zustand2.useStore)(store, (0, import_shallow2.useShallow)(selector));
}
var import_react4, import_shallow2, import_zustand2, fieldContextStore, useFieldStoreApi;
var init_store = __esm({
  "components/AutoField/store.ts"() {
    "use strict";
    init_react_import();
    import_react4 = require("react");
    import_shallow2 = require("zustand/react/shallow");
    init_use_context_store();
    import_zustand2 = require("zustand");
    fieldContextStore = createContextStore({});
    useFieldStoreApi = () => (0, import_react4.useContext)(fieldContextStore.ctx);
  }
});

// node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase, toCamelCase, toPascalCase, mergeClasses, hasA11yProp;
var init_utils = __esm({
  "node_modules/lucide-react/dist/esm/shared/src/utils.js"() {
    "use strict";
    init_react_import();
    toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    toCamelCase = (string) => string.replace(
      /^([A-Z])|[\s-_]+(\w)/g,
      (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
    );
    toPascalCase = (string) => {
      const camelCase = toCamelCase(string);
      return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
    };
    mergeClasses = (...classes) => classes.filter((className, index, array) => {
      return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
    hasA11yProp = (props) => {
      for (const prop in props) {
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
          return true;
        }
      }
    };
  }
});

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes;
var init_defaultAttributes = __esm({
  "node_modules/lucide-react/dist/esm/defaultAttributes.js"() {
    "use strict";
    init_react_import();
    defaultAttributes = {
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
  }
});

// node_modules/lucide-react/dist/esm/Icon.js
var import_react5, Icon;
var init_Icon = __esm({
  "node_modules/lucide-react/dist/esm/Icon.js"() {
    "use strict";
    init_react_import();
    import_react5 = require("react");
    init_defaultAttributes();
    init_utils();
    Icon = (0, import_react5.forwardRef)(
      ({
        color = "currentColor",
        size = 24,
        strokeWidth = 2,
        absoluteStrokeWidth,
        className = "",
        children,
        iconNode,
        ...rest
      }, ref) => (0, import_react5.createElement)(
        "svg",
        {
          ref,
          ...defaultAttributes,
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: mergeClasses("lucide", className),
          ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
          ...rest
        },
        [
          ...iconNode.map(([tag, attrs]) => (0, import_react5.createElement)(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      )
    );
  }
});

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react6, createLucideIcon;
var init_createLucideIcon = __esm({
  "node_modules/lucide-react/dist/esm/createLucideIcon.js"() {
    "use strict";
    init_react_import();
    import_react6 = require("react");
    init_utils();
    init_Icon();
    createLucideIcon = (iconName, iconNode) => {
      const Component = (0, import_react6.forwardRef)(
        ({ className, ...props }, ref) => (0, import_react6.createElement)(Icon, {
          ref,
          iconNode,
          className: mergeClasses(
            `lucide-${toKebabCase(toPascalCase(iconName))}`,
            `lucide-${iconName}`,
            className
          ),
          ...props
        })
      );
      Component.displayName = toPascalCase(iconName);
      return Component;
    };
  }
});

// node_modules/lucide-react/dist/esm/icons/bold.js
var __iconNode, Bold;
var init_bold = __esm({
  "node_modules/lucide-react/dist/esm/icons/bold.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode = [
      [
        "path",
        { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
      ]
    ];
    Bold = createLucideIcon("bold", __iconNode);
  }
});

// node_modules/lucide-react/dist/esm/icons/box.js
var __iconNode2, Box;
var init_box = __esm({
  "node_modules/lucide-react/dist/esm/icons/box.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode2 = [
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
    Box = createLucideIcon("box", __iconNode2);
  }
});

// node_modules/lucide-react/dist/esm/icons/chart-column.js
var __iconNode3, ChartColumn;
var init_chart_column = __esm({
  "node_modules/lucide-react/dist/esm/icons/chart-column.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode3 = [
      ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
      ["path", { d: "M18 17V9", key: "2bz60n" }],
      ["path", { d: "M13 17V5", key: "1frdt8" }],
      ["path", { d: "M8 17v-3", key: "17ska0" }]
    ];
    ChartColumn = createLucideIcon("chart-column", __iconNode3);
  }
});

// node_modules/lucide-react/dist/esm/icons/chevron-down.js
var __iconNode4, ChevronDown;
var init_chevron_down = __esm({
  "node_modules/lucide-react/dist/esm/icons/chevron-down.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
    ChevronDown = createLucideIcon("chevron-down", __iconNode4);
  }
});

// node_modules/lucide-react/dist/esm/icons/chevron-right.js
var __iconNode5, ChevronRight;
var init_chevron_right = __esm({
  "node_modules/lucide-react/dist/esm/icons/chevron-right.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode5 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
    ChevronRight = createLucideIcon("chevron-right", __iconNode5);
  }
});

// node_modules/lucide-react/dist/esm/icons/chevron-up.js
var __iconNode6, ChevronUp;
var init_chevron_up = __esm({
  "node_modules/lucide-react/dist/esm/icons/chevron-up.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode6 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
    ChevronUp = createLucideIcon("chevron-up", __iconNode6);
  }
});

// node_modules/lucide-react/dist/esm/icons/circle-check-big.js
var __iconNode7, CircleCheckBig;
var init_circle_check_big = __esm({
  "node_modules/lucide-react/dist/esm/icons/circle-check-big.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode7 = [
      ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
      ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
    ];
    CircleCheckBig = createLucideIcon("circle-check-big", __iconNode7);
  }
});

// node_modules/lucide-react/dist/esm/icons/code.js
var __iconNode8, Code;
var init_code = __esm({
  "node_modules/lucide-react/dist/esm/icons/code.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode8 = [
      ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
      ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }]
    ];
    Code = createLucideIcon("code", __iconNode8);
  }
});

// node_modules/lucide-react/dist/esm/icons/copy.js
var __iconNode9, Copy;
var init_copy = __esm({
  "node_modules/lucide-react/dist/esm/icons/copy.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode9 = [
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
    ];
    Copy = createLucideIcon("copy", __iconNode9);
  }
});

// node_modules/lucide-react/dist/esm/icons/corner-left-up.js
var __iconNode10, CornerLeftUp;
var init_corner_left_up = __esm({
  "node_modules/lucide-react/dist/esm/icons/corner-left-up.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode10 = [
      ["path", { d: "M14 9 9 4 4 9", key: "1af5af" }],
      ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4", key: "1blwi3" }]
    ];
    CornerLeftUp = createLucideIcon("corner-left-up", __iconNode10);
  }
});

// node_modules/lucide-react/dist/esm/icons/credit-card.js
var __iconNode11, CreditCard;
var init_credit_card = __esm({
  "node_modules/lucide-react/dist/esm/icons/credit-card.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode11 = [
      ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
      ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
    ];
    CreditCard = createLucideIcon("credit-card", __iconNode11);
  }
});

// node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js
var __iconNode12, EllipsisVertical;
var init_ellipsis_vertical = __esm({
  "node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode12 = [
      ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
      ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
      ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
    ];
    EllipsisVertical = createLucideIcon("ellipsis-vertical", __iconNode12);
  }
});

// node_modules/lucide-react/dist/esm/icons/expand.js
var __iconNode13, Expand;
var init_expand = __esm({
  "node_modules/lucide-react/dist/esm/icons/expand.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode13 = [
      ["path", { d: "m15 15 6 6", key: "1s409w" }],
      ["path", { d: "m15 9 6-6", key: "ko1vev" }],
      ["path", { d: "M21 16v5h-5", key: "1ck2sf" }],
      ["path", { d: "M21 8V3h-5", key: "1qoq8a" }],
      ["path", { d: "M3 16v5h5", key: "1t08am" }],
      ["path", { d: "m3 21 6-6", key: "wwnumi" }],
      ["path", { d: "M3 8V3h5", key: "1ln10m" }],
      ["path", { d: "M9 9 3 3", key: "v551iv" }]
    ];
    Expand = createLucideIcon("expand", __iconNode13);
  }
});

// node_modules/lucide-react/dist/esm/icons/external-link.js
var __iconNode14, ExternalLink;
var init_external_link = __esm({
  "node_modules/lucide-react/dist/esm/icons/external-link.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode14 = [
      ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
      ["path", { d: "M10 14 21 3", key: "gplh6r" }],
      ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
    ];
    ExternalLink = createLucideIcon("external-link", __iconNode14);
  }
});

// node_modules/lucide-react/dist/esm/icons/file-text.js
var __iconNode15, FileText;
var init_file_text = __esm({
  "node_modules/lucide-react/dist/esm/icons/file-text.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode15 = [
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
    FileText = createLucideIcon("file-text", __iconNode15);
  }
});

// node_modules/lucide-react/dist/esm/icons/globe.js
var __iconNode16, Globe;
var init_globe = __esm({
  "node_modules/lucide-react/dist/esm/icons/globe.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode16 = [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
      ["path", { d: "M2 12h20", key: "9i4pu4" }]
    ];
    Globe = createLucideIcon("globe", __iconNode16);
  }
});

// node_modules/lucide-react/dist/esm/icons/grip-vertical.js
var __iconNode17, GripVertical;
var init_grip_vertical = __esm({
  "node_modules/lucide-react/dist/esm/icons/grip-vertical.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode17 = [
      ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
      ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
      ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
      ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
      ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
      ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
    ];
    GripVertical = createLucideIcon("grip-vertical", __iconNode17);
  }
});

// node_modules/lucide-react/dist/esm/icons/hash.js
var __iconNode18, Hash;
var init_hash = __esm({
  "node_modules/lucide-react/dist/esm/icons/hash.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode18 = [
      ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
      ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
      ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
      ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
    ];
    Hash = createLucideIcon("hash", __iconNode18);
  }
});

// node_modules/lucide-react/dist/esm/icons/heading-1.js
var __iconNode19, Heading1;
var init_heading_1 = __esm({
  "node_modules/lucide-react/dist/esm/icons/heading-1.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode19 = [
      ["path", { d: "M4 12h8", key: "17cfdx" }],
      ["path", { d: "M4 18V6", key: "1rz3zl" }],
      ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
    ];
    Heading1 = createLucideIcon("heading-1", __iconNode19);
  }
});

// node_modules/lucide-react/dist/esm/icons/heading-2.js
var __iconNode20, Heading2;
var init_heading_2 = __esm({
  "node_modules/lucide-react/dist/esm/icons/heading-2.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode20 = [
      ["path", { d: "M4 12h8", key: "17cfdx" }],
      ["path", { d: "M4 18V6", key: "1rz3zl" }],
      ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
    ];
    Heading2 = createLucideIcon("heading-2", __iconNode20);
  }
});

// node_modules/lucide-react/dist/esm/icons/heading-3.js
var __iconNode21, Heading3;
var init_heading_3 = __esm({
  "node_modules/lucide-react/dist/esm/icons/heading-3.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode21 = [
      ["path", { d: "M4 12h8", key: "17cfdx" }],
      ["path", { d: "M4 18V6", key: "1rz3zl" }],
      ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
      ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
    ];
    Heading3 = createLucideIcon("heading-3", __iconNode21);
  }
});

// node_modules/lucide-react/dist/esm/icons/heading-4.js
var __iconNode22, Heading4;
var init_heading_4 = __esm({
  "node_modules/lucide-react/dist/esm/icons/heading-4.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode22 = [
      ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ["path", { d: "M17 10v3a1 1 0 0 0 1 1h3", key: "tj5zdr" }],
      ["path", { d: "M21 10v8", key: "1kdml4" }],
      ["path", { d: "M4 12h8", key: "17cfdx" }],
      ["path", { d: "M4 18V6", key: "1rz3zl" }]
    ];
    Heading4 = createLucideIcon("heading-4", __iconNode22);
  }
});

// node_modules/lucide-react/dist/esm/icons/heading-5.js
var __iconNode23, Heading5;
var init_heading_5 = __esm({
  "node_modules/lucide-react/dist/esm/icons/heading-5.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode23 = [
      ["path", { d: "M4 12h8", key: "17cfdx" }],
      ["path", { d: "M4 18V6", key: "1rz3zl" }],
      ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ["path", { d: "M17 13v-3h4", key: "1nvgqp" }],
      [
        "path",
        { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17", key: "2nebdn" }
      ]
    ];
    Heading5 = createLucideIcon("heading-5", __iconNode23);
  }
});

// node_modules/lucide-react/dist/esm/icons/heading-6.js
var __iconNode24, Heading6;
var init_heading_6 = __esm({
  "node_modules/lucide-react/dist/esm/icons/heading-6.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode24 = [
      ["path", { d: "M4 12h8", key: "17cfdx" }],
      ["path", { d: "M4 18V6", key: "1rz3zl" }],
      ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ["circle", { cx: "19", cy: "16", r: "2", key: "15mx69" }],
      ["path", { d: "M20 10c-2 2-3 3.5-3 6", key: "f35dl0" }]
    ];
    Heading6 = createLucideIcon("heading-6", __iconNode24);
  }
});

// node_modules/lucide-react/dist/esm/icons/heading.js
var __iconNode25, Heading;
var init_heading = __esm({
  "node_modules/lucide-react/dist/esm/icons/heading.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode25 = [
      ["path", { d: "M6 12h12", key: "8npq4p" }],
      ["path", { d: "M6 20V4", key: "1w1bmo" }],
      ["path", { d: "M18 20V4", key: "o2hl4u" }]
    ];
    Heading = createLucideIcon("heading", __iconNode25);
  }
});

// node_modules/lucide-react/dist/esm/icons/image.js
var __iconNode26, Image;
var init_image = __esm({
  "node_modules/lucide-react/dist/esm/icons/image.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode26 = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
      ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
      ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
    ];
    Image = createLucideIcon("image", __iconNode26);
  }
});

// node_modules/lucide-react/dist/esm/icons/info.js
var __iconNode27, Info;
var init_info = __esm({
  "node_modules/lucide-react/dist/esm/icons/info.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode27 = [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 16v-4", key: "1dtifu" }],
      ["path", { d: "M12 8h.01", key: "e9boi3" }]
    ];
    Info = createLucideIcon("info", __iconNode27);
  }
});

// node_modules/lucide-react/dist/esm/icons/italic.js
var __iconNode28, Italic;
var init_italic = __esm({
  "node_modules/lucide-react/dist/esm/icons/italic.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode28 = [
      ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
      ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
      ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
    ];
    Italic = createLucideIcon("italic", __iconNode28);
  }
});

// node_modules/lucide-react/dist/esm/icons/layers.js
var __iconNode29, Layers;
var init_layers = __esm({
  "node_modules/lucide-react/dist/esm/icons/layers.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode29 = [
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
    Layers = createLucideIcon("layers", __iconNode29);
  }
});

// node_modules/lucide-react/dist/esm/icons/layout-dashboard.js
var __iconNode30, LayoutDashboard;
var init_layout_dashboard = __esm({
  "node_modules/lucide-react/dist/esm/icons/layout-dashboard.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode30 = [
      ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
      ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
      ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
      ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
    ];
    LayoutDashboard = createLucideIcon("layout-dashboard", __iconNode30);
  }
});

// node_modules/lucide-react/dist/esm/icons/layout-grid.js
var __iconNode31, LayoutGrid;
var init_layout_grid = __esm({
  "node_modules/lucide-react/dist/esm/icons/layout-grid.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode31 = [
      ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
      ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
      ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
      ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
    ];
    LayoutGrid = createLucideIcon("layout-grid", __iconNode31);
  }
});

// node_modules/lucide-react/dist/esm/icons/layout-template.js
var __iconNode32, LayoutTemplate;
var init_layout_template = __esm({
  "node_modules/lucide-react/dist/esm/icons/layout-template.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode32 = [
      ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
      ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1", key: "jqznyg" }],
      ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1", key: "q5h2i8" }]
    ];
    LayoutTemplate = createLucideIcon("layout-template", __iconNode32);
  }
});

// node_modules/lucide-react/dist/esm/icons/link.js
var __iconNode33, Link;
var init_link = __esm({
  "node_modules/lucide-react/dist/esm/icons/link.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode33 = [
      ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
      ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
    ];
    Link = createLucideIcon("link", __iconNode33);
  }
});

// node_modules/lucide-react/dist/esm/icons/list-ordered.js
var __iconNode34, ListOrdered;
var init_list_ordered = __esm({
  "node_modules/lucide-react/dist/esm/icons/list-ordered.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode34 = [
      ["path", { d: "M11 5h10", key: "1cz7ny" }],
      ["path", { d: "M11 12h10", key: "1438ji" }],
      ["path", { d: "M11 19h10", key: "11t30w" }],
      ["path", { d: "M4 4h1v5", key: "10yrso" }],
      ["path", { d: "M4 9h2", key: "r1h2o0" }],
      ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
    ];
    ListOrdered = createLucideIcon("list-ordered", __iconNode34);
  }
});

// node_modules/lucide-react/dist/esm/icons/list.js
var __iconNode35, List;
var init_list = __esm({
  "node_modules/lucide-react/dist/esm/icons/list.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode35 = [
      ["path", { d: "M3 5h.01", key: "18ugdj" }],
      ["path", { d: "M3 12h.01", key: "nlz23k" }],
      ["path", { d: "M3 19h.01", key: "noohij" }],
      ["path", { d: "M8 5h13", key: "1pao27" }],
      ["path", { d: "M8 12h13", key: "1za7za" }],
      ["path", { d: "M8 19h13", key: "m83p4d" }]
    ];
    List = createLucideIcon("list", __iconNode35);
  }
});

// node_modules/lucide-react/dist/esm/icons/lock-open.js
var __iconNode36, LockOpen;
var init_lock_open = __esm({
  "node_modules/lucide-react/dist/esm/icons/lock-open.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode36 = [
      ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
      ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
    ];
    LockOpen = createLucideIcon("lock-open", __iconNode36);
  }
});

// node_modules/lucide-react/dist/esm/icons/lock.js
var __iconNode37, Lock;
var init_lock = __esm({
  "node_modules/lucide-react/dist/esm/icons/lock.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode37 = [
      ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
      ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
    ];
    Lock = createLucideIcon("lock", __iconNode37);
  }
});

// node_modules/lucide-react/dist/esm/icons/maximize-2.js
var __iconNode38, Maximize2;
var init_maximize_2 = __esm({
  "node_modules/lucide-react/dist/esm/icons/maximize-2.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode38 = [
      ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
      ["path", { d: "m21 3-7 7", key: "1l2asr" }],
      ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
      ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
    ];
    Maximize2 = createLucideIcon("maximize-2", __iconNode38);
  }
});

// node_modules/lucide-react/dist/esm/icons/megaphone.js
var __iconNode39, Megaphone;
var init_megaphone = __esm({
  "node_modules/lucide-react/dist/esm/icons/megaphone.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode39 = [
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
    Megaphone = createLucideIcon("megaphone", __iconNode39);
  }
});

// node_modules/lucide-react/dist/esm/icons/minimize-2.js
var __iconNode40, Minimize2;
var init_minimize_2 = __esm({
  "node_modules/lucide-react/dist/esm/icons/minimize-2.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode40 = [
      ["path", { d: "m14 10 7-7", key: "oa77jy" }],
      ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
      ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
      ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
    ];
    Minimize2 = createLucideIcon("minimize-2", __iconNode40);
  }
});

// node_modules/lucide-react/dist/esm/icons/minus.js
var __iconNode41, Minus;
var init_minus = __esm({
  "node_modules/lucide-react/dist/esm/icons/minus.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode41 = [["path", { d: "M5 12h14", key: "1ays0h" }]];
    Minus = createLucideIcon("minus", __iconNode41);
  }
});

// node_modules/lucide-react/dist/esm/icons/monitor.js
var __iconNode42, Monitor;
var init_monitor = __esm({
  "node_modules/lucide-react/dist/esm/icons/monitor.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode42 = [
      ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
      ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
      ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
    ];
    Monitor = createLucideIcon("monitor", __iconNode42);
  }
});

// node_modules/lucide-react/dist/esm/icons/panel-left.js
var __iconNode43, PanelLeft;
var init_panel_left = __esm({
  "node_modules/lucide-react/dist/esm/icons/panel-left.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode43 = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M9 3v18", key: "fh3hqa" }]
    ];
    PanelLeft = createLucideIcon("panel-left", __iconNode43);
  }
});

// node_modules/lucide-react/dist/esm/icons/panel-right.js
var __iconNode44, PanelRight;
var init_panel_right = __esm({
  "node_modules/lucide-react/dist/esm/icons/panel-right.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode44 = [
      ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
      ["path", { d: "M15 3v18", key: "14nvp0" }]
    ];
    PanelRight = createLucideIcon("panel-right", __iconNode44);
  }
});

// node_modules/lucide-react/dist/esm/icons/plus.js
var __iconNode45, Plus;
var init_plus = __esm({
  "node_modules/lucide-react/dist/esm/icons/plus.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode45 = [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
      ["path", { d: "M12 5v14", key: "s699le" }]
    ];
    Plus = createLucideIcon("plus", __iconNode45);
  }
});

// node_modules/lucide-react/dist/esm/icons/quote.js
var __iconNode46, Quote;
var init_quote = __esm({
  "node_modules/lucide-react/dist/esm/icons/quote.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode46 = [
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
    Quote = createLucideIcon("quote", __iconNode46);
  }
});

// node_modules/lucide-react/dist/esm/icons/rectangle-ellipsis.js
var __iconNode47, RectangleEllipsis;
var init_rectangle_ellipsis = __esm({
  "node_modules/lucide-react/dist/esm/icons/rectangle-ellipsis.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode47 = [
      ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
      ["path", { d: "M12 12h.01", key: "1mp3jc" }],
      ["path", { d: "M17 12h.01", key: "1m0b6t" }],
      ["path", { d: "M7 12h.01", key: "eqddd0" }]
    ];
    RectangleEllipsis = createLucideIcon("rectangle-ellipsis", __iconNode47);
  }
});

// node_modules/lucide-react/dist/esm/icons/redo-2.js
var __iconNode48, Redo2;
var init_redo_2 = __esm({
  "node_modules/lucide-react/dist/esm/icons/redo-2.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode48 = [
      ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
      ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13", key: "6uklza" }]
    ];
    Redo2 = createLucideIcon("redo-2", __iconNode48);
  }
});

// node_modules/lucide-react/dist/esm/icons/search.js
var __iconNode49, Search;
var init_search = __esm({
  "node_modules/lucide-react/dist/esm/icons/search.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode49 = [
      ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
    ];
    Search = createLucideIcon("search", __iconNode49);
  }
});

// node_modules/lucide-react/dist/esm/icons/settings.js
var __iconNode50, Settings;
var init_settings = __esm({
  "node_modules/lucide-react/dist/esm/icons/settings.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode50 = [
      [
        "path",
        {
          d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
          key: "1i5ecw"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
    ];
    Settings = createLucideIcon("settings", __iconNode50);
  }
});

// node_modules/lucide-react/dist/esm/icons/shapes.js
var __iconNode51, Shapes;
var init_shapes = __esm({
  "node_modules/lucide-react/dist/esm/icons/shapes.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode51 = [
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
    Shapes = createLucideIcon("shapes", __iconNode51);
  }
});

// node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js
var __iconNode52, SlidersHorizontal;
var init_sliders_horizontal = __esm({
  "node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode52 = [
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
    SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode52);
  }
});

// node_modules/lucide-react/dist/esm/icons/smartphone.js
var __iconNode53, Smartphone;
var init_smartphone = __esm({
  "node_modules/lucide-react/dist/esm/icons/smartphone.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode53 = [
      ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
      ["path", { d: "M12 18h.01", key: "mhygvu" }]
    ];
    Smartphone = createLucideIcon("smartphone", __iconNode53);
  }
});

// node_modules/lucide-react/dist/esm/icons/square-code.js
var __iconNode54, SquareCode;
var init_square_code = __esm({
  "node_modules/lucide-react/dist/esm/icons/square-code.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode54 = [
      ["path", { d: "m10 9-3 3 3 3", key: "1oro0q" }],
      ["path", { d: "m14 15 3-3-3-3", key: "bz13h7" }],
      ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
    ];
    SquareCode = createLucideIcon("square-code", __iconNode54);
  }
});

// node_modules/lucide-react/dist/esm/icons/strikethrough.js
var __iconNode55, Strikethrough;
var init_strikethrough = __esm({
  "node_modules/lucide-react/dist/esm/icons/strikethrough.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode55 = [
      ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
      ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
    ];
    Strikethrough = createLucideIcon("strikethrough", __iconNode55);
  }
});

// node_modules/lucide-react/dist/esm/icons/tablet.js
var __iconNode56, Tablet;
var init_tablet = __esm({
  "node_modules/lucide-react/dist/esm/icons/tablet.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode56 = [
      ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
      ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
    ];
    Tablet = createLucideIcon("tablet", __iconNode56);
  }
});

// node_modules/lucide-react/dist/esm/icons/text-align-center.js
var __iconNode57, TextAlignCenter;
var init_text_align_center = __esm({
  "node_modules/lucide-react/dist/esm/icons/text-align-center.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode57 = [
      ["path", { d: "M21 5H3", key: "1fi0y6" }],
      ["path", { d: "M17 12H7", key: "16if0g" }],
      ["path", { d: "M19 19H5", key: "vjpgq2" }]
    ];
    TextAlignCenter = createLucideIcon("text-align-center", __iconNode57);
  }
});

// node_modules/lucide-react/dist/esm/icons/text-align-end.js
var __iconNode58, TextAlignEnd;
var init_text_align_end = __esm({
  "node_modules/lucide-react/dist/esm/icons/text-align-end.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode58 = [
      ["path", { d: "M21 5H3", key: "1fi0y6" }],
      ["path", { d: "M21 12H9", key: "dn1m92" }],
      ["path", { d: "M21 19H7", key: "4cu937" }]
    ];
    TextAlignEnd = createLucideIcon("text-align-end", __iconNode58);
  }
});

// node_modules/lucide-react/dist/esm/icons/text-align-justify.js
var __iconNode59, TextAlignJustify;
var init_text_align_justify = __esm({
  "node_modules/lucide-react/dist/esm/icons/text-align-justify.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode59 = [
      ["path", { d: "M3 5h18", key: "1u36vt" }],
      ["path", { d: "M3 12h18", key: "1i2n21" }],
      ["path", { d: "M3 19h18", key: "awlh7x" }]
    ];
    TextAlignJustify = createLucideIcon("text-align-justify", __iconNode59);
  }
});

// node_modules/lucide-react/dist/esm/icons/text-align-start.js
var __iconNode60, TextAlignStart;
var init_text_align_start = __esm({
  "node_modules/lucide-react/dist/esm/icons/text-align-start.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode60 = [
      ["path", { d: "M21 5H3", key: "1fi0y6" }],
      ["path", { d: "M15 12H3", key: "6jk70r" }],
      ["path", { d: "M17 19H3", key: "z6ezky" }]
    ];
    TextAlignStart = createLucideIcon("text-align-start", __iconNode60);
  }
});

// node_modules/lucide-react/dist/esm/icons/toy-brick.js
var __iconNode61, ToyBrick;
var init_toy_brick = __esm({
  "node_modules/lucide-react/dist/esm/icons/toy-brick.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode61 = [
      ["rect", { width: "18", height: "12", x: "3", y: "8", rx: "1", key: "158fvp" }],
      ["path", { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3", key: "s0042v" }],
      ["path", { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3", key: "9wmeh2" }]
    ];
    ToyBrick = createLucideIcon("toy-brick", __iconNode61);
  }
});

// node_modules/lucide-react/dist/esm/icons/trash.js
var __iconNode62, Trash;
var init_trash = __esm({
  "node_modules/lucide-react/dist/esm/icons/trash.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode62 = [
      ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
      ["path", { d: "M3 6h18", key: "d0wm0j" }],
      ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
    ];
    Trash = createLucideIcon("trash", __iconNode62);
  }
});

// node_modules/lucide-react/dist/esm/icons/type.js
var __iconNode63, Type;
var init_type = __esm({
  "node_modules/lucide-react/dist/esm/icons/type.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode63 = [
      ["path", { d: "M12 4v16", key: "1654pz" }],
      ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
      ["path", { d: "M9 20h6", key: "s66wpe" }]
    ];
    Type = createLucideIcon("type", __iconNode63);
  }
});

// node_modules/lucide-react/dist/esm/icons/underline.js
var __iconNode64, Underline;
var init_underline = __esm({
  "node_modules/lucide-react/dist/esm/icons/underline.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode64 = [
      ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
      ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
    ];
    Underline = createLucideIcon("underline", __iconNode64);
  }
});

// node_modules/lucide-react/dist/esm/icons/undo-2.js
var __iconNode65, Undo2;
var init_undo_2 = __esm({
  "node_modules/lucide-react/dist/esm/icons/undo-2.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode65 = [
      ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
      ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
    ];
    Undo2 = createLucideIcon("undo-2", __iconNode65);
  }
});

// node_modules/lucide-react/dist/esm/icons/x.js
var __iconNode66, X;
var init_x = __esm({
  "node_modules/lucide-react/dist/esm/icons/x.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode66 = [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
    ];
    X = createLucideIcon("x", __iconNode66);
  }
});

// node_modules/lucide-react/dist/esm/icons/zoom-in.js
var __iconNode67, ZoomIn;
var init_zoom_in = __esm({
  "node_modules/lucide-react/dist/esm/icons/zoom-in.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode67 = [
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
      ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
      ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
    ];
    ZoomIn = createLucideIcon("zoom-in", __iconNode67);
  }
});

// node_modules/lucide-react/dist/esm/icons/zoom-out.js
var __iconNode68, ZoomOut;
var init_zoom_out = __esm({
  "node_modules/lucide-react/dist/esm/icons/zoom-out.js"() {
    "use strict";
    init_react_import();
    init_createLucideIcon();
    __iconNode68 = [
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
      ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
    ];
    ZoomOut = createLucideIcon("zoom-out", __iconNode68);
  }
});

// node_modules/lucide-react/dist/esm/lucide-react.js
var init_lucide_react = __esm({
  "node_modules/lucide-react/dist/esm/lucide-react.js"() {
    "use strict";
    init_react_import();
    init_chart_column();
    init_circle_check_big();
    init_ellipsis_vertical();
    init_layers();
    init_lock_open();
    init_panel_left();
    init_rectangle_ellipsis();
    init_square_code();
    init_text_align_center();
    init_text_align_end();
    init_text_align_justify();
    init_text_align_start();
    init_bold();
    init_box();
    init_chevron_down();
    init_chevron_right();
    init_chevron_up();
    init_code();
    init_copy();
    init_corner_left_up();
    init_credit_card();
    init_expand();
    init_external_link();
    init_file_text();
    init_globe();
    init_grip_vertical();
    init_hash();
    init_heading_1();
    init_heading_2();
    init_heading_3();
    init_heading_4();
    init_heading_5();
    init_heading_6();
    init_heading();
    init_image();
    init_info();
    init_italic();
    init_layout_dashboard();
    init_layout_grid();
    init_layout_template();
    init_link();
    init_list_ordered();
    init_list();
    init_lock();
    init_maximize_2();
    init_megaphone();
    init_minimize_2();
    init_minus();
    init_monitor();
    init_panel_right();
    init_plus();
    init_quote();
    init_redo_2();
    init_search();
    init_settings();
    init_shapes();
    init_sliders_horizontal();
    init_smartphone();
    init_strikethrough();
    init_tablet();
    init_toy_brick();
    init_trash();
    init_type();
    init_underline();
    init_undo_2();
    init_x();
    init_zoom_in();
    init_zoom_out();
  }
});

// lib/root-droppable-id.ts
var rootAreaId, rootZone, rootDroppableId;
var init_root_droppable_id = __esm({
  "lib/root-droppable-id.ts"() {
    "use strict";
    init_react_import();
    rootAreaId = "root";
    rootZone = "default-zone";
    rootDroppableId = `${rootAreaId}:${rootZone}`;
  }
});

// lib/get-zone-id.ts
var getZoneId;
var init_get_zone_id = __esm({
  "lib/get-zone-id.ts"() {
    "use strict";
    init_react_import();
    init_root_droppable_id();
    getZoneId = (zoneCompound) => {
      if (!zoneCompound) {
        return [];
      }
      if (zoneCompound && zoneCompound.indexOf(":") > -1) {
        return zoneCompound.split(":");
      }
      return [rootDroppableId, zoneCompound];
    };
  }
});

// lib/data/for-related-zones.ts
function forRelatedZones(item, data, cb, path = []) {
  Object.entries(data.zones || {}).forEach(([zoneCompound, content]) => {
    const [parentId] = getZoneId(zoneCompound);
    if (parentId === item.props.id) {
      cb(path, zoneCompound, content);
    }
  });
}
var init_for_related_zones = __esm({
  "lib/data/for-related-zones.ts"() {
    "use strict";
    init_react_import();
    init_get_zone_id();
  }
});

// lib/data/default-slots.ts
var defaultSlots;
var init_default_slots = __esm({
  "lib/data/default-slots.ts"() {
    "use strict";
    init_react_import();
    defaultSlots = (value, fields) => Object.keys(fields).reduce(
      (acc, fieldName) => fields[fieldName].type === "slot" ? { [fieldName]: [], ...acc } : acc,
      value
    );
  }
});

// lib/data/map-fields.ts
function mapFields(item, mappers, config, recurseSlots = false, shouldDefaultSlots = true) {
  const itemType = "type" in item ? item.type : "root";
  const componentConfig = itemType === "root" ? config.root : config.components?.[itemType];
  const newProps = walkObject({
    value: shouldDefaultSlots ? defaultSlots(item.props ?? {}, componentConfig?.fields ?? {}) : item.props,
    fields: componentConfig?.fields ?? {},
    mappers,
    id: item.props ? item.props.id ?? "root" : "root",
    getPropPath: (k) => k,
    config,
    recurseSlots
  });
  if (isPromise(newProps)) {
    return newProps.then((resolvedProps) => ({
      ...item,
      props: resolvedProps
    }));
  }
  return {
    ...item,
    props: newProps
  };
}
var isPromise, flatten, containsPromise, walkField, walkObject;
var init_map_fields = __esm({
  "lib/data/map-fields.ts"() {
    "use strict";
    init_react_import();
    init_default_slots();
    isPromise = (v) => !!v && typeof v.then === "function";
    flatten = (values) => values.reduce((acc, item) => ({ ...acc, ...item }), {});
    containsPromise = (arr) => arr.some(isPromise);
    walkField = ({
      value,
      fields,
      mappers,
      propKey = "",
      propPath = "",
      id = "",
      config,
      recurseSlots = false
    }) => {
      const fieldType = fields[propKey]?.type;
      const map = mappers[fieldType];
      if (map && fieldType === "slot") {
        const content = value || [];
        const mappedContent = recurseSlots ? content.map((el) => {
          const componentConfig = config.components[el.type];
          if (!componentConfig) {
            throw new Error(`Could not find component config for ${el.type}`);
          }
          const fields2 = componentConfig.fields ?? {};
          return walkField({
            value: { ...el, props: defaultSlots(el.props, fields2) },
            fields: fields2,
            mappers,
            id: el.props.id,
            config,
            recurseSlots
          });
        }) : content;
        if (containsPromise(mappedContent)) {
          return Promise.all(mappedContent);
        }
        return map({
          value: mappedContent,
          parentId: id,
          propName: propPath,
          field: fields[propKey],
          propPath
        });
      } else if (map && fields[propKey]) {
        return map({
          value,
          parentId: id,
          propName: propKey,
          field: fields[propKey],
          propPath
        });
      }
      if (value && typeof value === "object") {
        if (Array.isArray(value)) {
          const arrayFields = fields[propKey]?.type === "array" ? fields[propKey].arrayFields : null;
          if (!arrayFields) return value;
          const newValue = value.map(
            (el, idx) => walkField({
              value: el,
              fields: arrayFields,
              mappers,
              propKey,
              propPath: `${propPath}[${idx}]`,
              id,
              config,
              recurseSlots
            })
          );
          if (containsPromise(newValue)) {
            return Promise.all(newValue);
          }
          return newValue;
        } else if ("$$typeof" in value) {
          return value;
        } else {
          const objectFields = fields[propKey]?.type === "object" ? fields[propKey].objectFields : fields;
          return walkObject({
            value,
            fields: objectFields,
            mappers,
            id,
            getPropPath: (k) => `${propPath}.${k}`,
            config,
            recurseSlots
          });
        }
      }
      return value;
    };
    walkObject = ({
      value,
      fields,
      mappers,
      id,
      getPropPath,
      config,
      recurseSlots
    }) => {
      const newProps = Object.entries(value).map(([k, v]) => {
        const opts = {
          value: v,
          fields,
          mappers,
          propKey: k,
          propPath: getPropPath(k),
          id,
          config,
          recurseSlots
        };
        const newValue = walkField(opts);
        if (isPromise(newValue)) {
          return newValue.then((resolvedValue) => ({
            [k]: resolvedValue
          }));
        }
        return {
          [k]: newValue
        };
      }, {});
      if (containsPromise(newProps)) {
        return Promise.all(newProps).then(flatten);
      }
      return flatten(newProps);
    };
  }
});

// lib/data/strip-slots.ts
var stripSlots;
var init_strip_slots = __esm({
  "lib/data/strip-slots.ts"() {
    "use strict";
    init_react_import();
    init_map_fields();
    stripSlots = (data, config) => {
      return mapFields(data, { slot: () => null }, config);
    };
  }
});

// lib/data/flatten-node.ts
function encodeEmptyObjects(props = {}) {
  const result = {};
  for (const key in props) {
    if (!Object.prototype.hasOwnProperty.call(props, key)) continue;
    const val = props[key];
    if (Array.isArray(val) && val.length === 0) {
      result[key] = emptyArrayStr;
    } else if (isPureObject(val) && Object.keys(val).length === 0) {
      result[key] = emptyObjectStr;
    } else {
      result[key] = val;
    }
  }
  return result;
}
function decodeEmptyObjects(props = {}) {
  const result = {};
  for (const key in props) {
    if (!Object.prototype.hasOwnProperty.call(props, key)) continue;
    const val = props[key];
    if (val === emptyArrayStr) {
      result[key] = [];
    } else if (val === emptyObjectStr) {
      result[key] = {};
    } else {
      result[key] = val;
    }
  }
  return result;
}
var import_flat, flatten2, unflatten, isPureObject, emptyArrayStr, emptyObjectStr, flattenNode, expandNode;
var init_flatten_node = __esm({
  "lib/data/flatten-node.ts"() {
    "use strict";
    init_react_import();
    import_flat = __toESM(require("flat"));
    init_strip_slots();
    ({ flatten: flatten2, unflatten } = import_flat.default);
    isPureObject = (val) => val != null && Object.prototype.toString.call(val) === "[object Object]";
    emptyArrayStr = "__credbuild_[]";
    emptyObjectStr = "__credbuild_{}";
    flattenNode = (node, config) => {
      return {
        ...node,
        props: encodeEmptyObjects(flatten2(stripSlots(node, config).props))
      };
    };
    expandNode = (node) => {
      const props = unflatten(decodeEmptyObjects(node.props));
      return {
        ...node,
        props
      };
    };
  }
});

// lib/data/to-component.ts
var toComponent;
var init_to_component = __esm({
  "lib/data/to-component.ts"() {
    "use strict";
    init_react_import();
    toComponent = (item) => {
      return "type" in item ? item : {
        ...item,
        props: { ...item.props, id: "root" },
        type: "root"
      };
    };
  }
});

// lib/data/walk-app-state.ts
function walkAppState(state, config, mapContent = (content) => content, mapNodeOrSkip = (item) => item) {
  let newZones = {};
  const newZoneIndex = {};
  const newNodeIndex = {};
  const processContent = (path, zoneCompound, content, zoneType, newId) => {
    const [parentId] = zoneCompound.split(":");
    const mappedContent = (mapContent(content, zoneCompound, zoneType) ?? content) || [];
    const [_2, zone] = zoneCompound.split(":");
    const newZoneCompound = `${newId || parentId}:${zone}`;
    const newContent2 = mappedContent.map(
      (zoneChild, index) => processItem(zoneChild, [...path, newZoneCompound], index)
    );
    newZoneIndex[newZoneCompound] = {
      contentIds: newContent2.map((item) => item.props.id),
      type: zoneType
    };
    return [newZoneCompound, newContent2];
  };
  const processRelatedZones = (item, newId, initialPath) => {
    forRelatedZones(
      item,
      state.data,
      (relatedPath, relatedZoneCompound, relatedContent) => {
        const [zoneCompound, newContent2] = processContent(
          relatedPath,
          relatedZoneCompound,
          relatedContent,
          "dropzone",
          newId
        );
        newZones[zoneCompound] = newContent2;
      },
      initialPath
    );
  };
  const processItem = (item, path, index) => {
    const mappedItem = mapNodeOrSkip(item, path, index);
    if (!mappedItem) return item;
    const id = mappedItem.props.id;
    const newProps = {
      ...mapFields(
        mappedItem,
        {
          slot: ({ value, parentId: parentId2, propPath }) => {
            const content = value;
            const zoneCompound = `${parentId2}:${propPath}`;
            const [_2, newContent2] = processContent(
              path,
              zoneCompound,
              content,
              "slot",
              parentId2
            );
            return newContent2;
          }
        },
        config
      ).props,
      id
    };
    processRelatedZones(item, id, path);
    const newItem = { ...mappedItem, props: newProps };
    const thisZoneCompound = path[path.length - 1];
    const [parentId, zone] = thisZoneCompound ? thisZoneCompound.split(":") : [null, ""];
    newNodeIndex[id] = {
      data: newItem,
      flatData: flattenNode(newItem, config),
      path,
      parentId,
      zone
    };
    const finalData = { ...newItem, props: { ...newItem.props } };
    if (newProps.id === "root") {
      delete finalData["type"];
      delete finalData.props["id"];
    }
    return finalData;
  };
  const zones = state.data.zones || {};
  const [_, newContent] = processContent(
    [],
    rootDroppableId,
    state.data.content,
    "root"
  );
  const processedContent = newContent;
  const zonesAlreadyProcessed = Object.keys(newZones);
  Object.keys(zones || {}).forEach((zoneCompound) => {
    const [parentId] = zoneCompound.split(":");
    if (zonesAlreadyProcessed.includes(zoneCompound)) {
      return;
    }
    const [_2, newContent2] = processContent(
      [rootDroppableId],
      zoneCompound,
      zones[zoneCompound],
      "dropzone",
      parentId
    );
    newZones[zoneCompound] = newContent2;
  }, newZones);
  let rootAsComponent = toComponent({
    props: { ...state.data.root.props ?? state.data.root }
  });
  if (state.data.root.readOnly) {
    rootAsComponent.readOnly = state.data.root.readOnly;
  }
  const processedRoot = processItem(rootAsComponent, [], -1);
  const root = {
    ...state.data.root,
    ...processedRoot
  };
  return {
    ...state,
    data: {
      root,
      content: processedContent,
      zones: {
        ...state.data.zones,
        ...newZones
      }
    },
    indexes: {
      nodes: { ...state.indexes.nodes, ...newNodeIndex },
      zones: { ...state.indexes.zones, ...newZoneIndex }
    }
  };
}
var init_walk_app_state = __esm({
  "lib/data/walk-app-state.ts"() {
    "use strict";
    init_react_import();
    init_for_related_zones();
    init_root_droppable_id();
    init_map_fields();
    init_flatten_node();
    init_to_component();
  }
});

// reducer/actions/set.ts
var setAction;
var init_set = __esm({
  "reducer/actions/set.ts"() {
    "use strict";
    init_react_import();
    init_walk_app_state();
    setAction = (state, action, appStore) => {
      if (typeof action.state === "object") {
        const newState = {
          ...state,
          ...action.state
        };
        if (action.state.indexes) {
          return newState;
        }
        console.warn(
          "`set` is expensive and may cause unnecessary re-renders. Consider using a more atomic action instead."
        );
        return walkAppState(newState, appStore.config);
      }
      return { ...state, ...action.state(state) };
    };
  }
});

// lib/data/insert.ts
var insert;
var init_insert = __esm({
  "lib/data/insert.ts"() {
    "use strict";
    init_react_import();
    insert = (list, index, item) => {
      const result = Array.from(list || []);
      result.splice(index, 0, item);
      return result;
    };
  }
});

// lib/data/get-ids-for-parent.ts
var getIdsForParent;
var init_get_ids_for_parent = __esm({
  "lib/data/get-ids-for-parent.ts"() {
    "use strict";
    init_react_import();
    getIdsForParent = (zoneCompound, state) => {
      const [parentId] = zoneCompound.split(":");
      const node = state.indexes.nodes[parentId];
      return (node?.path || []).map((p) => p.split(":")[0]);
    };
  }
});

// lib/data/walk-tree.ts
function walkTree(data, config, callbackFn) {
  const walkItem = (item) => {
    return mapFields(
      item,
      {
        slot: ({ value, parentId, propName }) => {
          const content = value;
          return callbackFn(content, { parentId, propName }) ?? content;
        }
      },
      config,
      true
    );
  };
  if ("props" in data) {
    return walkItem(data);
  }
  const _data = data;
  const zones = _data.zones ?? {};
  const mappedContent = _data.content.map(walkItem);
  return {
    root: walkItem(_data.root),
    content: callbackFn(mappedContent, {
      parentId: "root",
      propName: "default-zone"
    }) ?? mappedContent,
    zones: Object.keys(zones).reduce(
      (acc, zoneCompound) => ({
        ...acc,
        [zoneCompound]: zones[zoneCompound].map(walkItem)
      }),
      {}
    )
  };
}
var init_walk_tree = __esm({
  "lib/data/walk-tree.ts"() {
    "use strict";
    init_react_import();
    init_map_fields();
  }
});

// lib/data/populate-ids.ts
var populateIds;
var init_populate_ids = __esm({
  "lib/data/populate-ids.ts"() {
    "use strict";
    init_react_import();
    init_generate_id();
    init_walk_tree();
    populateIds = (data, config, override = false) => {
      const id = generateId(data.type);
      return walkTree(
        {
          ...data,
          props: override ? { ...data.props, id } : { ...data.props }
        },
        config,
        (contents) => contents.map((item) => {
          const id2 = generateId(item.type);
          return {
            ...item,
            props: override ? { ...item.props, id: id2 } : { id: id2, ...item.props }
          };
        })
      );
    };
  }
});

// reducer/actions/insert.ts
function insertAction(state, action, appStore) {
  const id = action.id || generateId(action.componentType);
  const emptyComponentData = populateIds(
    {
      type: action.componentType,
      props: {
        ...appStore.config.components[action.componentType].defaultProps || {},
        id
      }
    },
    appStore.config
  );
  const [parentId] = action.destinationZone.split(":");
  const idsInPath = getIdsForParent(action.destinationZone, state);
  return walkAppState(
    state,
    appStore.config,
    (content, zoneCompound) => {
      if (zoneCompound === action.destinationZone) {
        return insert(
          content || [],
          action.destinationIndex,
          emptyComponentData
        );
      }
      return content;
    },
    (childItem, path) => {
      if (childItem.props.id === id || childItem.props.id === parentId) {
        return childItem;
      } else if (idsInPath.includes(childItem.props.id)) {
        return childItem;
      } else if (path.includes(action.destinationZone)) {
        return childItem;
      }
      return null;
    }
  );
}
var init_insert2 = __esm({
  "reducer/actions/insert.ts"() {
    "use strict";
    init_react_import();
    init_insert();
    init_generate_id();
    init_walk_app_state();
    init_get_ids_for_parent();
    init_populate_ids();
  }
});

// reducer/actions/replace.ts
var replaceAction;
var init_replace = __esm({
  "reducer/actions/replace.ts"() {
    "use strict";
    init_react_import();
    init_walk_app_state();
    init_get_ids_for_parent();
    init_walk_tree();
    init_generate_id();
    replaceAction = (state, action, appStore) => {
      const [parentId] = action.destinationZone.split(":");
      const idsInPath = getIdsForParent(action.destinationZone, state);
      const originalId = state.indexes.zones[action.destinationZone].contentIds[action.destinationIndex];
      const idChanged = originalId !== action.data.props.id;
      if (idChanged) {
        throw new Error(
          `Can't change the id during a replace action. Please us "remove" and "insert" to define a new node.`
        );
      }
      const newSlotIds = [];
      const data = walkTree(action.data, appStore.config, (contents, opts) => {
        newSlotIds.push(`${opts.parentId}:${opts.propName}`);
        return contents.map((item) => {
          const id = generateId(item.type);
          return {
            ...item,
            props: { id, ...item.props }
          };
        });
      });
      const stateWithDeepSlotsRemoved = {
        ...state,
        ui: { ...state.ui, ...action.ui }
      };
      Object.keys(state.indexes.zones).forEach((zoneCompound) => {
        const id = zoneCompound.split(":")[0];
        if (id === originalId) {
          if (!newSlotIds.includes(zoneCompound)) {
            delete stateWithDeepSlotsRemoved.indexes.zones[zoneCompound];
          }
        }
      });
      return walkAppState(
        stateWithDeepSlotsRemoved,
        appStore.config,
        (content, zoneCompound) => {
          const newContent = [...content];
          if (zoneCompound === action.destinationZone) {
            newContent[action.destinationIndex] = data;
          }
          return newContent;
        },
        (childItem, path) => {
          const pathIds = path.map((p) => p.split(":")[0]);
          if (childItem.props.id === data.props.id) {
            return data;
          } else if (childItem.props.id === parentId) {
            return childItem;
          } else if (idsInPath.indexOf(childItem.props.id) > -1) {
            return childItem;
          } else if (pathIds.indexOf(data.props.id) > -1) {
            return childItem;
          }
          return null;
        }
      );
    };
  }
});

// reducer/actions/replace-root.ts
var replaceRootAction;
var init_replace_root = __esm({
  "reducer/actions/replace-root.ts"() {
    "use strict";
    init_react_import();
    init_walk_app_state();
    replaceRootAction = (state, action, appStore) => {
      return walkAppState(
        state,
        appStore.config,
        (content) => content,
        (childItem) => {
          if (childItem.props.id === "root") {
            return {
              ...childItem,
              props: { ...childItem.props, ...action.root.props },
              readOnly: action.root.readOnly
            };
          }
          return childItem;
        }
      );
    };
  }
});

// lib/data/get-item.ts
function getItem(selector, state) {
  const zone = state.indexes.zones?.[selector.zone || rootDroppableId];
  return zone ? state.indexes.nodes[zone.contentIds[selector.index]]?.data : void 0;
}
var init_get_item = __esm({
  "lib/data/get-item.ts"() {
    "use strict";
    init_react_import();
    init_root_droppable_id();
  }
});

// reducer/actions/duplicate.ts
function duplicateAction(state, action, appStore) {
  const item = getItem(
    { index: action.sourceIndex, zone: action.sourceZone },
    state
  );
  const idsInPath = getIdsForParent(action.sourceZone, state);
  const newItem = {
    ...item,
    props: {
      ...item.props,
      id: generateId(item.type)
    }
  };
  const modified = walkAppState(
    state,
    appStore.config,
    (content, zoneCompound) => {
      if (zoneCompound === action.sourceZone) {
        return insert(content, action.sourceIndex + 1, item);
      }
      return content;
    },
    (childItem, path, index) => {
      const zoneCompound = path[path.length - 1];
      const parents = path.map((p) => p.split(":")[0]);
      if (parents.indexOf(newItem.props.id) > -1) {
        return {
          ...childItem,
          props: {
            ...childItem.props,
            id: generateId(childItem.type)
          }
        };
      }
      if (zoneCompound === action.sourceZone && index === action.sourceIndex + 1) {
        return newItem;
      }
      const [sourceZoneParent] = action.sourceZone.split(":");
      if (sourceZoneParent === childItem.props.id || idsInPath.indexOf(childItem.props.id) > -1) {
        return childItem;
      }
      return null;
    }
  );
  return {
    ...modified,
    ui: {
      ...modified.ui,
      itemSelector: {
        index: action.sourceIndex + 1,
        zone: action.sourceZone
      }
    }
  };
}
var init_duplicate = __esm({
  "reducer/actions/duplicate.ts"() {
    "use strict";
    init_react_import();
    init_generate_id();
    init_walk_app_state();
    init_get_ids_for_parent();
    init_get_item();
    init_insert();
  }
});

// lib/data/remove.ts
var remove;
var init_remove = __esm({
  "lib/data/remove.ts"() {
    "use strict";
    init_react_import();
    remove = (list, index) => {
      const result = Array.from(list);
      result.splice(index, 1);
      return result;
    };
  }
});

// reducer/actions/move.ts
var moveAction;
var init_move = __esm({
  "reducer/actions/move.ts"() {
    "use strict";
    init_react_import();
    init_insert();
    init_remove();
    init_get_item();
    init_walk_app_state();
    init_get_ids_for_parent();
    moveAction = (state, action, appStore) => {
      if (action.sourceZone === action.destinationZone && action.sourceIndex === action.destinationIndex) {
        return state;
      }
      const item = getItem(
        { zone: action.sourceZone, index: action.sourceIndex },
        state
      );
      if (!item) return state;
      const idsInSourcePath = getIdsForParent(action.sourceZone, state);
      const idsInDestinationPath = getIdsForParent(action.destinationZone, state);
      return walkAppState(
        state,
        appStore.config,
        (content, zoneCompound) => {
          if (zoneCompound === action.sourceZone && zoneCompound === action.destinationZone) {
            return insert(
              remove(content, action.sourceIndex),
              action.destinationIndex,
              item
            );
          } else if (zoneCompound === action.sourceZone) {
            return remove(content, action.sourceIndex);
          } else if (zoneCompound === action.destinationZone) {
            return insert(content, action.destinationIndex, item);
          }
          return content;
        },
        (childItem, path) => {
          const [sourceZoneParent] = action.sourceZone.split(":");
          const [destinationZoneParent] = action.destinationZone.split(":");
          const childId = childItem.props.id;
          if (sourceZoneParent === childId || destinationZoneParent === childId || item.props.id === childId || idsInSourcePath.indexOf(childId) > -1 || idsInDestinationPath.indexOf(childId) > -1 || path.includes(action.destinationZone)) {
            return childItem;
          }
          return null;
        }
      );
    };
  }
});

// reducer/actions/reorder.ts
var reorderAction;
var init_reorder = __esm({
  "reducer/actions/reorder.ts"() {
    "use strict";
    init_react_import();
    init_move();
    reorderAction = (state, action, appStore) => {
      return moveAction(
        state,
        {
          type: "move",
          sourceIndex: action.sourceIndex,
          sourceZone: action.destinationZone,
          destinationIndex: action.destinationIndex,
          destinationZone: action.destinationZone
        },
        appStore
      );
    };
  }
});

// reducer/actions/remove.ts
var removeAction;
var init_remove2 = __esm({
  "reducer/actions/remove.ts"() {
    "use strict";
    init_react_import();
    init_remove();
    init_get_item();
    init_walk_app_state();
    removeAction = (state, action, appStore) => {
      const item = getItem({ index: action.index, zone: action.zone }, state);
      const nodesToDelete = Object.entries(state.indexes.nodes).reduce(
        (acc, [nodeId, nodeData]) => {
          const pathIds = nodeData.path.map((p) => p.split(":")[0]);
          if (pathIds.includes(item.props.id)) {
            return [...acc, nodeId];
          }
          return acc;
        },
        [item.props.id]
      );
      const newState = walkAppState(
        state,
        appStore.config,
        (content, zoneCompound) => {
          if (zoneCompound === action.zone) {
            return remove(content, action.index);
          }
          return content;
        }
      );
      Object.keys(newState.data.zones || {}).forEach((zoneCompound) => {
        const parentId = zoneCompound.split(":")[0];
        if (nodesToDelete.includes(parentId) && newState.data.zones) {
          delete newState.data.zones[zoneCompound];
        }
      });
      Object.keys(newState.indexes.zones).forEach((zoneCompound) => {
        const parentId = zoneCompound.split(":")[0];
        if (nodesToDelete.includes(parentId)) {
          delete newState.indexes.zones[zoneCompound];
        }
      });
      nodesToDelete.forEach((id) => {
        delete newState.indexes.nodes[id];
      });
      return newState;
    };
  }
});

// lib/data/setup-zone.ts
var setupZone;
var init_setup_zone = __esm({
  "lib/data/setup-zone.ts"() {
    "use strict";
    init_react_import();
    init_root_droppable_id();
    setupZone = (data, zoneKey) => {
      if (zoneKey === rootDroppableId) {
        return data;
      }
      const newData = {
        ...data,
        zones: data.zones ? { ...data.zones } : {}
      };
      newData.zones[zoneKey] = newData.zones[zoneKey] || [];
      return newData;
    };
  }
});

// reducer/actions/register-zone.ts
function registerZoneAction(state, action) {
  if (zoneCache[action.zone]) {
    return {
      ...state,
      data: {
        ...state.data,
        zones: {
          ...state.data.zones,
          [action.zone]: zoneCache[action.zone]
        }
      },
      indexes: {
        ...state.indexes,
        zones: {
          ...state.indexes.zones,
          [action.zone]: {
            ...state.indexes.zones[action.zone],
            contentIds: zoneCache[action.zone].map((item) => item.props.id),
            type: "dropzone"
          }
        }
      }
    };
  }
  return { ...state, data: setupZone(state.data, action.zone) };
}
function unregisterZoneAction(state, action) {
  const _zones = { ...state.data.zones || {} };
  const zoneIndex = { ...state.indexes.zones || {} };
  if (_zones[action.zone]) {
    zoneCache[action.zone] = _zones[action.zone];
    delete _zones[action.zone];
  }
  delete zoneIndex[action.zone];
  return {
    ...state,
    data: {
      ...state.data,
      zones: _zones
    },
    indexes: {
      ...state.indexes,
      zones: zoneIndex
    }
  };
}
var zoneCache;
var init_register_zone = __esm({
  "reducer/actions/register-zone.ts"() {
    "use strict";
    init_react_import();
    init_setup_zone();
    zoneCache = {};
  }
});

// reducer/actions/set-data.ts
var setDataAction;
var init_set_data = __esm({
  "reducer/actions/set-data.ts"() {
    "use strict";
    init_react_import();
    init_walk_app_state();
    setDataAction = (state, action, appStore) => {
      if (typeof action.data === "object") {
        console.warn(
          "`setData` is expensive and may cause unnecessary re-renders. Consider using a more atomic action instead."
        );
        return walkAppState(
          {
            ...state,
            data: {
              ...state.data,
              ...action.data
            }
          },
          appStore.config
        );
      }
      return walkAppState(
        {
          ...state,
          data: {
            ...state.data,
            ...action.data(state.data)
          }
        },
        appStore.config
      );
    };
  }
});

// reducer/actions/set-ui.ts
var setUiAction;
var init_set_ui = __esm({
  "reducer/actions/set-ui.ts"() {
    "use strict";
    init_react_import();
    setUiAction = (state, action) => {
      if (typeof action.ui === "object") {
        return {
          ...state,
          ui: {
            ...state.ui,
            ...action.ui
          }
        };
      }
      return {
        ...state,
        ui: {
          ...state.ui,
          ...action.ui(state.ui)
        }
      };
    };
  }
});

// lib/data/make-state-public.ts
var makeStatePublic;
var init_make_state_public = __esm({
  "lib/data/make-state-public.ts"() {
    "use strict";
    init_react_import();
    makeStatePublic = (state) => {
      const { data, ui } = state;
      return { data, ui };
    };
  }
});

// reducer/actions.tsx
var init_actions = __esm({
  "reducer/actions.tsx"() {
    "use strict";
    init_react_import();
  }
});

// reducer/index.ts
function storeInterceptor(reducer, record, onAction) {
  return (state, action) => {
    const newAppState = reducer(state, action);
    const isValidType = ![
      "registerZone",
      "unregisterZone",
      "setData",
      "setUi",
      "set"
    ].includes(action.type);
    if (typeof action.recordHistory !== "undefined" ? action.recordHistory : isValidType) {
      if (record) record(newAppState);
    }
    onAction?.(action, makeStatePublic(newAppState), makeStatePublic(state));
    return newAppState;
  };
}
function createReducer({
  record,
  onAction,
  appStore
}) {
  return storeInterceptor(
    (state, action) => {
      if (action.type === "set") {
        return setAction(state, action, appStore);
      }
      if (action.type === "insert") {
        return insertAction(state, action, appStore);
      }
      if (action.type === "replace") {
        return replaceAction(state, action, appStore);
      }
      if (action.type === "replaceRoot") {
        return replaceRootAction(state, action, appStore);
      }
      if (action.type === "duplicate") {
        return duplicateAction(state, action, appStore);
      }
      if (action.type === "reorder") {
        return reorderAction(state, action, appStore);
      }
      if (action.type === "move") {
        return moveAction(state, action, appStore);
      }
      if (action.type === "remove") {
        return removeAction(state, action, appStore);
      }
      if (action.type === "registerZone") {
        return registerZoneAction(state, action);
      }
      if (action.type === "unregisterZone") {
        return unregisterZoneAction(state, action);
      }
      if (action.type === "setData") {
        return setDataAction(state, action, appStore);
      }
      if (action.type === "setUi") {
        return setUiAction(state, action);
      }
      return state;
    },
    record,
    onAction
  );
}
var init_reducer = __esm({
  "reducer/index.ts"() {
    "use strict";
    init_react_import();
    init_set();
    init_insert2();
    init_replace();
    init_replace_root();
    init_duplicate();
    init_reorder();
    init_move();
    init_remove2();
    init_register_zone();
    init_set_data();
    init_set_ui();
    init_make_state_public();
    init_actions();
  }
});

// components/ViewportControls/default-viewports.ts
var defaultViewports;
var init_default_viewports = __esm({
  "components/ViewportControls/default-viewports.ts"() {
    "use strict";
    init_react_import();
    defaultViewports = [
      { width: 360, height: "auto", icon: "Smartphone", label: "Small" },
      { width: 768, height: "auto", icon: "Tablet", label: "Medium" },
      { width: 1280, height: "auto", icon: "Monitor", label: "Large" },
      { width: "100%", height: "auto", icon: "FullWidth", label: "Full-width" }
    ];
  }
});

// lib/use-hotkey.ts
var import_react7, import_zustand3, import_middleware2, keyCodeMap, useHotkeyStore, monitorHotkeys, useMonitorHotkeys, useHotkey;
var init_use_hotkey = __esm({
  "lib/use-hotkey.ts"() {
    "use strict";
    init_react_import();
    import_react7 = require("react");
    import_zustand3 = require("zustand");
    import_middleware2 = require("zustand/middleware");
    keyCodeMap = {
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
    useHotkeyStore = (0, import_zustand3.create)()(
      (0, import_middleware2.subscribeWithSelector)((set) => ({
        held: {},
        hold: (key) => set((s) => s.held[key] ? s : { held: { ...s.held, [key]: true } }),
        release: (key) => set((s) => s.held[key] ? { held: { ...s.held, [key]: false } } : s),
        reset: (held = {}) => set(() => ({ held })),
        triggers: {}
      }))
    );
    monitorHotkeys = (doc) => {
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
    useMonitorHotkeys = () => {
      (0, import_react7.useEffect)(() => monitorHotkeys(document), []);
    };
    useHotkey = (combo, cb) => {
      (0, import_react7.useEffect)(() => {
        const key = `${Object.keys(combo).join("+")}`;
        useHotkeyStore.setState((s) => ({
          triggers: {
            ...s.triggers,
            [key]: { combo, cb }
          }
        }));
        return () => {
          useHotkeyStore.setState((s) => {
            const { [key]: _, ...triggers } = s.triggers;
            return { triggers };
          });
        };
      }, [combo, cb]);
    };
  }
});

// store/slices/history.ts
function debounce(func, timeout3 = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout3);
  };
}
function useRegisterHistorySlice(appStore, {
  histories,
  index,
  initialAppState
}) {
  (0, import_react8.useEffect)(
    () => appStore.setState({
      history: {
        ...appStore.getState().history,
        histories,
        index,
        initialAppState
      }
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
var import_react8, EMPTY_HISTORY_INDEX, tidyState, createHistorySlice;
var init_history = __esm({
  "store/slices/history.ts"() {
    "use strict";
    init_react_import();
    init_generate_id();
    import_react8 = require("react");
    init_use_hotkey();
    EMPTY_HISTORY_INDEX = 0;
    tidyState = (state) => {
      return {
        ...state,
        ui: {
          ...state.ui,
          field: {
            ...state.ui.field,
            focus: null
          }
        }
      };
    };
    createHistorySlice = (set, get) => {
      const record = debounce((state) => {
        const { histories, index } = get().history;
        const history = {
          state,
          id: generateId("history")
        };
        const newHistories = [...histories.slice(0, index + 1), history];
        set({
          history: {
            ...get().history,
            histories: newHistories,
            index: newHistories.length - 1
          }
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
          const { history, dispatch } = get();
          if (history.hasPast()) {
            const state = tidyState(
              history.prevHistory()?.state || history.initialAppState
            );
            dispatch({
              type: "set",
              state
            });
            set({ history: { ...history, index: history.index - 1 } });
          }
        },
        forward: () => {
          const { history, dispatch } = get();
          if (history.hasFuture()) {
            const state = history.nextHistory()?.state;
            dispatch({ type: "set", state: state ? tidyState(state) : {} });
            set({ history: { ...history, index: history.index + 1 } });
          }
        },
        setHistories: (histories) => {
          const { dispatch, history } = get();
          dispatch({
            type: "set",
            state: histories[histories.length - 1]?.state || history.initialAppState
          });
          set({ history: { ...history, histories, index: histories.length - 1 } });
        },
        setHistoryIndex: (index) => {
          const { dispatch, history } = get();
          dispatch({
            type: "set",
            state: history.histories[index]?.state || history.initialAppState
          });
          set({ history: { ...history, index } });
        },
        record
      };
    };
  }
});

// store/slices/nodes.ts
var createNodesSlice;
var init_nodes = __esm({
  "store/slices/nodes.ts"() {
    "use strict";
    init_react_import();
    createNodesSlice = (_set, _get) => {
      const registry = /* @__PURE__ */ new Map();
      return {
        registerNode: (id, handle) => {
          registry.set(id, handle);
        },
        unregisterNode: (id) => {
          registry.delete(id);
        },
        syncNode: (id) => {
          if (!id) return;
          registry.get(id)?.sync();
        },
        syncNodes: (ids) => {
          ids.forEach((id) => {
            if (!id) return;
            registry.get(id)?.sync();
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
  }
});

// lib/data/flatten-data.ts
var flattenData;
var init_flatten_data = __esm({
  "lib/data/flatten-data.ts"() {
    "use strict";
    init_react_import();
    init_walk_app_state();
    flattenData = (state, config) => {
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
  }
});

// lib/get-changed.ts
var import_fast_equals, getChanged;
var init_get_changed = __esm({
  "lib/get-changed.ts"() {
    "use strict";
    init_react_import();
    import_fast_equals = require("fast-equals");
    getChanged = (newItem, oldItem) => {
      return newItem ? Object.keys(newItem.props || {}).reduce((acc, item) => {
        const newItemProps = newItem?.props || {};
        const oldItemProps = oldItem?.props || {};
        return {
          ...acc,
          [item]: !(0, import_fast_equals.deepEqual)(oldItemProps[item], newItemProps[item])
        };
      }, {}) : {};
    };
  }
});

// store/slices/permissions.ts
var import_react9, createPermissionsSlice, useRegisterPermissionsSlice;
var init_permissions = __esm({
  "store/slices/permissions.ts"() {
    "use strict";
    init_react_import();
    import_react9 = require("react");
    init_flatten_data();
    init_get_changed();
    init_make_state_public();
    createPermissionsSlice = (set, get) => {
      const resolvePermissions = async (params = {}, force) => {
        const { state, permissions, config } = get();
        const { cache: cache2, globalPermissions } = permissions;
        const resolvePermissionsForItem = async (item2, force2 = false) => {
          const { config: config2, state: appState, setComponentLoading } = get();
          const itemCache = cache2[item2.props.id];
          const nodes = appState.indexes.nodes;
          const parentId = nodes[item2.props.id]?.parentId;
          const parentNode = parentId ? nodes[parentId] : null;
          const parentData = parentNode?.data ?? null;
          const componentConfig = item2.type === "root" ? config2.root : config2.components[item2.type];
          if (!componentConfig) {
            return;
          }
          const initialPermissions = {
            ...globalPermissions,
            ...componentConfig.permissions
          };
          if (componentConfig.resolvePermissions) {
            const changed = getChanged(item2, itemCache?.lastData);
            const propsChanged = Object.values(changed).some((el) => el === true);
            const parentChanged = itemCache?.lastParentId !== parentId;
            if (propsChanged || parentChanged || force2) {
              const clearTimeout2 = setComponentLoading(item2.props.id, true, 50);
              const resolvedPermissions = await componentConfig.resolvePermissions(
                item2,
                {
                  changed,
                  lastPermissions: itemCache?.lastPermissions || null,
                  permissions: initialPermissions,
                  appState: makeStatePublic(appState),
                  lastData: itemCache?.lastData || null,
                  parent: parentData
                }
              );
              const latest = get().permissions;
              set({
                permissions: {
                  ...latest,
                  cache: {
                    ...latest.cache,
                    [item2.props.id]: {
                      lastParentId: parentId,
                      lastData: item2,
                      lastPermissions: resolvedPermissions
                    }
                  },
                  resolvedPermissions: {
                    ...latest.resolvedPermissions,
                    [item2.props.id]: resolvedPermissions
                  }
                }
              });
              clearTimeout2();
            }
          }
        };
        const resolvePermissionsForRoot = (force2 = false) => {
          const { state: appState } = get();
          resolvePermissionsForItem(
            // Shim the root data in by conforming to component data shape
            {
              type: "root",
              props: { ...appState.data.root.props, id: "root" }
            },
            force2
          );
        };
        const { item, type, root } = params;
        if (item) {
          await resolvePermissionsForItem(item, force);
        } else if (type) {
          flattenData(state, config).filter((item2) => item2.type === type).map(async (item2) => {
            await resolvePermissionsForItem(item2, force);
          });
        } else if (root) {
          resolvePermissionsForRoot(force);
        } else {
          flattenData(state, config).map(async (item2) => {
            await resolvePermissionsForItem(item2, force);
          });
        }
      };
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
            const initialPermissions = {
              ...globalPermissions,
              ...componentConfig?.permissions
            };
            const resolvedForItem = resolvedPermissions[item.props.id];
            return resolvedForItem ? { ...globalPermissions, ...resolvedForItem } : initialPermissions;
          } else if (type) {
            const componentConfig = config.components[type];
            return {
              ...globalPermissions,
              ...componentConfig?.permissions
            };
          } else if (root) {
            const rootConfig = config.root;
            const initialPermissions = {
              ...globalPermissions,
              ...rootConfig?.permissions
            };
            const resolvedForItem = resolvedPermissions["root"];
            return resolvedForItem ? { ...globalPermissions, ...resolvedForItem } : initialPermissions;
          }
          return globalPermissions;
        },
        resolvePermissions,
        refreshPermissions
      };
    };
    useRegisterPermissionsSlice = (appStore, globalPermissions) => {
      (0, import_react9.useEffect)(() => {
        const { permissions } = appStore.getState();
        const { globalPermissions: existingGlobalPermissions } = permissions;
        appStore.setState({
          permissions: {
            ...permissions,
            globalPermissions: {
              ...existingGlobalPermissions,
              ...globalPermissions
            }
          }
        });
        permissions.resolvePermissions();
      }, [globalPermissions, appStore]);
      (0, import_react9.useEffect)(() => {
        return appStore.subscribe(
          (s) => s.state.data,
          () => {
            appStore.getState().permissions.resolvePermissions();
          }
        );
      }, [appStore]);
      (0, import_react9.useEffect)(() => {
        return appStore.subscribe(
          (s) => s.config,
          () => {
            appStore.getState().permissions.resolvePermissions();
          }
        );
      }, [appStore]);
    };
  }
});

// store/slices/fields.ts
var import_react10, createFieldsSlice, useRegisterFieldsSlice;
var init_fields = __esm({
  "store/slices/fields.ts"() {
    "use strict";
    init_react_import();
    import_react10 = require("react");
    init_get_changed();
    init_make_state_public();
    createFieldsSlice = (_set, _get) => {
      return {
        fields: {},
        loading: false,
        lastResolvedData: {},
        id: void 0
      };
    };
    useRegisterFieldsSlice = (appStore, id) => {
      const resolveFields = (0, import_react10.useCallback)(
        async (reset) => {
          const { fields, lastResolvedData } = appStore.getState().fields;
          const metadata = appStore.getState().metadata;
          const nodes = appStore.getState().state.indexes.nodes;
          const node = nodes[id || "root"];
          const componentData = node?.data;
          const parentNode = node?.parentId ? nodes[node.parentId] : null;
          const parent = parentNode?.data || null;
          const { getComponentConfig, state } = appStore.getState();
          const componentConfig = getComponentConfig(componentData?.type);
          if (!componentData || !componentConfig) return;
          const defaultFields2 = componentConfig.fields || {};
          const resolver = componentConfig.resolveFields;
          let lastFields = fields;
          if (reset) {
            appStore.setState((s) => ({
              fields: { ...s.fields, fields: defaultFields2, id }
            }));
            lastFields = defaultFields2;
          }
          if (resolver) {
            const timeout3 = setTimeout(() => {
              appStore.setState((s) => ({
                fields: { ...s.fields, loading: true }
              }));
            }, 50);
            const lastData = lastResolvedData.props?.id === id ? lastResolvedData : null;
            const changed = getChanged(componentData, lastData);
            const newFields = await resolver(componentData, {
              changed,
              fields: defaultFields2,
              lastFields,
              metadata: { ...metadata, ...componentConfig.metadata },
              lastData,
              appState: makeStatePublic(state),
              parent
            });
            clearTimeout(timeout3);
            if (appStore.getState().selectedItem?.props.id !== id) {
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
              fields: { ...s.fields, fields: defaultFields2, id }
            }));
          }
        },
        [id, appStore]
      );
      (0, import_react10.useEffect)(() => {
        resolveFields(true);
        return appStore.subscribe(
          (s) => s.state.indexes.nodes[id || "root"],
          () => resolveFields()
        );
      }, [id, appStore, resolveFields]);
    };
  }
});

// lib/resolve-component-data.ts
var import_fast_equals2, cache, resolveComponentData;
var init_resolve_component_data = __esm({
  "lib/resolve-component-data.ts"() {
    "use strict";
    init_react_import();
    init_map_fields();
    init_to_component();
    init_get_changed();
    import_fast_equals2 = require("fast-equals");
    cache = { lastChange: {} };
    resolveComponentData = async (item, config, metadata = {}, onResolveStart, onResolveEnd, trigger = "replace", parent = null) => {
      const configForItem = "type" in item && item.type !== "root" ? config.components[item.type] : config.root;
      const resolvedItem = {
        ...item
      };
      const shouldRunResolver = configForItem?.resolveData && item.props;
      const id = "id" in item.props ? item.props.id : "root";
      if (shouldRunResolver) {
        const {
          item: oldItem = null,
          resolved = {},
          parentId: oldParentId = null
        } = cache.lastChange[id] || {};
        const isRootOrInserted = oldParentId === null;
        const parentChanged = !isRootOrInserted && parent?.props.id !== oldParentId;
        const dataChanged = item && !(0, import_fast_equals2.deepEqual)(item, oldItem);
        const shouldSkip = trigger === "move" && !parentChanged || trigger !== "move" && trigger !== "force" && !dataChanged;
        if (shouldSkip) {
          return { node: resolved, didChange: false };
        }
        const changed = getChanged(item, oldItem);
        if (onResolveStart) {
          onResolveStart(item);
        }
        const { props: resolvedProps, readOnly = {} } = await configForItem.resolveData(item, {
          changed,
          lastData: oldItem,
          metadata: { ...metadata, ...configForItem.metadata },
          trigger,
          parent
        });
        resolvedItem.props = {
          ...item.props,
          ...resolvedProps
        };
        if (Object.keys(readOnly).length) {
          resolvedItem.readOnly = readOnly;
        }
      }
      const itemAsComponentData = toComponent(resolvedItem);
      let itemWithResolvedChildren = await mapFields(
        resolvedItem,
        {
          slot: async ({ value }) => {
            const content = value;
            return await Promise.all(
              content.map(
                async (childItem) => (await resolveComponentData(
                  childItem,
                  config,
                  metadata,
                  onResolveStart,
                  onResolveEnd,
                  trigger,
                  itemAsComponentData
                )).node
              )
            );
          }
        },
        config
      );
      if (shouldRunResolver && onResolveEnd) {
        onResolveEnd(resolvedItem);
      }
      cache.lastChange[id] = {
        item,
        resolved: itemWithResolvedChildren,
        parentId: parent?.props.id
      };
      return {
        node: itemWithResolvedChildren,
        didChange: !(0, import_fast_equals2.deepEqual)(item, itemWithResolvedChildren)
      };
    };
  }
});

// lib/data/to-root.ts
var toRoot;
var init_to_root = __esm({
  "lib/data/to-root.ts"() {
    "use strict";
    init_react_import();
    toRoot = (item) => {
      if ("type" in item && item.type !== "root") {
        throw new Error("Converting non-root item to root.");
      }
      const { readOnly } = item;
      if (item.props) {
        if ("id" in item.props) {
          const { id, ...props } = item.props;
          return { props, readOnly };
        }
        return { props: item.props, readOnly };
      }
      return { props: {}, readOnly };
    };
  }
});

// store/default-app-state.ts
var defaultAppState;
var init_default_app_state = __esm({
  "store/default-app-state.ts"() {
    "use strict";
    init_react_import();
    init_default_viewports();
    defaultAppState = {
      data: { content: [], root: {}, zones: {} },
      ui: {
        leftSideBarVisible: true,
        rightSideBarVisible: true,
        arrayState: {},
        itemSelector: null,
        componentList: {},
        isDragging: false,
        previewMode: "edit",
        viewports: {
          current: {
            width: defaultViewports[0].width,
            height: defaultViewports[0].height || "auto"
          },
          options: [],
          controlsVisible: true
        },
        field: { focus: null },
        plugin: { current: null }
      },
      indexes: {
        nodes: {},
        zones: {}
      }
    };
  }
});

// store/index.ts
function useAppStore(selector) {
  const context = (0, import_react11.useContext)(appStoreContext);
  return (0, import_zustand4.useStore)(context, selector);
}
function useAppStoreApi() {
  return (0, import_react11.useContext)(appStoreContext);
}
var import_zustand4, import_middleware3, import_react11, defaultPageFields, createAppStore, appStoreContext;
var init_store2 = __esm({
  "store/index.ts"() {
    "use strict";
    "use client";
    init_react_import();
    init_reducer();
    init_get_item();
    init_default_viewports();
    import_zustand4 = require("zustand");
    import_middleware3 = require("zustand/middleware");
    import_react11 = require("react");
    init_history();
    init_nodes();
    init_permissions();
    init_fields();
    init_resolve_component_data();
    init_walk_app_state();
    init_to_root();
    init_generate_id();
    init_default_app_state();
    defaultPageFields = {
      title: { type: "text" }
    };
    createAppStore = (initialAppStore) => (0, import_zustand4.create)()(
      (0, import_middleware3.subscribeWithSelector)((set, get) => ({
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
        fieldTransforms: {},
        ...initialAppStore,
        fields: createFieldsSlice(set, get),
        history: createHistorySlice(set, get),
        nodes: createNodesSlice(set, get),
        permissions: createPermissionsSlice(set, get),
        getCurrentData: () => {
          const s = get();
          return s.selectedItem ?? s.state.data.root;
        },
        getComponentConfig: (type) => {
          const { config, selectedItem } = get();
          const rootFields = config.root?.fields || defaultPageFields;
          return type && type !== "root" ? config.components[type] : selectedItem ? config.components[selectedItem.type] : { ...config.root, fields: rootFields };
        },
        selectedItem: initialAppStore?.state?.ui.itemSelector ? getItem(
          initialAppStore?.state?.ui.itemSelector,
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
          return { ...s, state, selectedItem };
        }),
        setZoomConfig: (zoomConfig) => set({ zoomConfig }),
        setStatus: (status) => set({ status }),
        setComponentState: (componentState) => set({ componentState }),
        pendingLoadTimeouts: {},
        setComponentLoading: (id, loading = true, defer2 = 0) => {
          const { setComponentState, pendingLoadTimeouts } = get();
          const loadId = generateId();
          const setLoading = () => {
            const { componentState } = get();
            setComponentState({
              ...componentState,
              [id]: {
                ...componentState[id],
                loadingCount: (componentState[id]?.loadingCount || 0) + 1
              }
            });
          };
          const unsetLoading = () => {
            const { componentState } = get();
            clearTimeout(timeout3);
            delete pendingLoadTimeouts[loadId];
            set({ pendingLoadTimeouts });
            setComponentState({
              ...componentState,
              [id]: {
                ...componentState[id],
                loadingCount: Math.max(
                  (componentState[id]?.loadingCount || 0) - 1,
                  0
                )
              }
            });
          };
          const timeout3 = setTimeout(() => {
            if (loading) {
              setLoading();
            } else {
              unsetLoading();
            }
            delete pendingLoadTimeouts[loadId];
            set({ pendingLoadTimeouts });
          }, defer2);
          set({
            pendingLoadTimeouts: {
              ...pendingLoadTimeouts,
              [id]: timeout3
            }
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
          return { ...s, state, selectedItem };
        }),
        resolveComponentData: async (componentData, trigger) => {
          const { config, metadata, setComponentLoading, permissions, state } = get();
          const componentId = "id" in componentData.props ? componentData.props.id : "root";
          const parentId = state.indexes.nodes[componentId]?.parentId;
          const parentNode = parentId ? state.indexes.nodes[parentId] : null;
          const parentData = parentNode?.data ?? null;
          const timeouts = {};
          return await resolveComponentData(
            componentData,
            config,
            metadata,
            (item) => {
              const id = "id" in item.props ? item.props.id : "root";
              timeouts[id] = setComponentLoading(id, true, 50);
            },
            async (item) => {
              const id = "id" in item.props ? item.props.id : "root";
              if ("type" in item) {
                await permissions.refreshPermissions({ item });
              } else {
                await permissions.refreshPermissions({ root: true });
              }
              timeouts[id]();
            },
            trigger,
            parentData
          );
        },
        resolveAndCommitData: async () => {
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
        }
      }))
    );
    appStoreContext = (0, import_react11.createContext)(createAppStore());
  }
});

// components/AutoField/FieldLabel.tsx
var import_react12, import_jsx_runtime3, getClassName2, FieldLabel, FieldLabelInternal;
var init_FieldLabel = __esm({
  "components/AutoField/FieldLabel.tsx"() {
    "use strict";
    init_react_import();
    init_get_class_name_factory();
    init_styles_module2();
    import_react12 = require("react");
    init_lucide_react();
    init_store2();
    import_jsx_runtime3 = require("react/jsx-runtime");
    getClassName2 = get_class_name_factory_default("Input", styles_module_default2);
    FieldLabel = ({
      children,
      icon,
      label,
      el = "label",
      readOnly,
      className
    }) => {
      const El = el;
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(El, { className, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: getClassName2("label"), children: [
          icon ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: getClassName2("labelIcon"), children: icon }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, {}),
          label,
          readOnly && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: getClassName2("disabledIcon"), title: "Read-only", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Lock, { size: "12" }) })
        ] }),
        children
      ] });
    };
    FieldLabelInternal = ({
      children,
      icon,
      label,
      el = "label",
      readOnly
    }) => {
      const overrides = useAppStore((s) => s.overrides);
      const Wrapper = (0, import_react12.useMemo)(
        () => overrides.fieldLabel || FieldLabel,
        [overrides]
      );
      if (!label) {
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
  }
});

// lib/data/get-deep.ts
var getDeep;
var init_get_deep = __esm({
  "lib/data/get-deep.ts"() {
    "use strict";
    init_react_import();
    getDeep = (node, path) => {
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
  }
});

// components/AutoField/context.tsx
var import_react13, import_jsx_runtime4, NestedFieldContext, useNestedFieldContext, NestedFieldProvider;
var init_context = __esm({
  "components/AutoField/context.tsx"() {
    "use strict";
    init_react_import();
    import_react13 = require("react");
    import_jsx_runtime4 = require("react/jsx-runtime");
    NestedFieldContext = (0, import_react13.createContext)({});
    useNestedFieldContext = () => {
      const context = (0, import_react13.useContext)(NestedFieldContext);
      return {
        ...context,
        readOnlyFields: context.readOnlyFields || {}
      };
    };
    NestedFieldProvider = ({
      children,
      name,
      subName,
      wildcardName = name,
      readOnlyFields
    }) => {
      const subPath = `${name}.${subName}`;
      const wildcardSubPath = `${wildcardName}.${subName}`;
      const subReadOnlyFields = (0, import_react13.useMemo)(
        () => Object.keys(readOnlyFields).reduce((acc, readOnlyKey) => {
          const isLocal = readOnlyKey.indexOf(subPath) > -1 || readOnlyKey.indexOf(wildcardSubPath) > -1;
          if (isLocal) {
            const subPathPattern = new RegExp(
              `^(${name}|${wildcardName}).`.replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\./g, "\\.").replace(/\*/g, "\\*")
            );
            const localName = readOnlyKey.replace(subPathPattern, "");
            return {
              ...acc,
              [localName]: readOnlyFields[readOnlyKey]
            };
          }
          return acc;
        }, {}),
        [name, wildcardName, readOnlyFields, subPath, wildcardSubPath]
      );
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        NestedFieldContext.Provider,
        {
          value: { readOnlyFields: subReadOnlyFields, localName: subName },
          children
        }
      );
    };
  }
});

// components/AutoField/lib/use-deep-field.ts
var useDeepField;
var init_use_deep_field = __esm({
  "components/AutoField/lib/use-deep-field.ts"() {
    "use strict";
    init_react_import();
    init_get_deep();
    init_store();
    useDeepField = (path) => {
      return useFieldStore((s) => getDeep(s, path));
    };
  }
});

// components/AutoField/fields/RadioField/index.tsx
var import_jsx_runtime5, getClassName3, RadioField;
var init_RadioField = __esm({
  "components/AutoField/fields/RadioField/index.tsx"() {
    "use strict";
    init_react_import();
    init_get_class_name_factory();
    init_styles_module2();
    init_lucide_react();
    init_use_deep_field();
    import_jsx_runtime5 = require("react/jsx-runtime");
    getClassName3 = get_class_name_factory_default("Input", styles_module_default2);
    RadioField = ({
      field,
      onChange,
      readOnly,
      id,
      name = id,
      label,
      labelIcon,
      Label: Label2
    }) => {
      const value = useDeepField(name);
      if (field.type !== "radio" || !field.options) {
        return null;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        Label2,
        {
          icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CircleCheckBig, { size: 16 }),
          label: label || name,
          readOnly,
          el: "div",
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: getClassName3("radioGroupItems"), id, children: field.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
            "label",
            {
              className: getClassName3("radio"),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  "input",
                  {
                    type: "radio",
                    className: getClassName3("radioInput"),
                    value: JSON.stringify({ value: option.value }),
                    name,
                    onChange: (e) => {
                      onChange(JSON.parse(e.target.value).value);
                    },
                    disabled: readOnly,
                    checked: value === option.value
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: getClassName3("radioInner"), children: option.label || option.value?.toString() })
              ]
            },
            option.label + option.value
          )) })
        }
      );
    };
  }
});

// components/AutoField/fields/SelectField/index.tsx
var import_jsx_runtime6, getClassName4, SelectField;
var init_SelectField = __esm({
  "components/AutoField/fields/SelectField/index.tsx"() {
    "use strict";
    init_react_import();
    init_get_class_name_factory();
    init_styles_module2();
    init_lucide_react();
    init_use_deep_field();
    import_jsx_runtime6 = require("react/jsx-runtime");
    getClassName4 = get_class_name_factory_default("Input", styles_module_default2);
    SelectField = ({
      field,
      onChange,
      label,
      labelIcon,
      Label: Label2,
      id,
      name = id,
      readOnly
    }) => {
      const value = useDeepField(name);
      if (field.type !== "select" || !field.options) {
        return null;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        Label2,
        {
          label: label || name,
          icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ChevronDown, { size: 16 }),
          readOnly,
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "select",
            {
              id,
              title: label || name,
              className: getClassName4("input"),
              disabled: readOnly,
              onChange: (e) => {
                onChange(JSON.parse(e.target.value).value);
              },
              value: JSON.stringify({ value }),
              children: field.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/ExternalInput/styles.module.css/#css-module-data
var init_css_module_data3 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/ExternalInput/styles.module.css/#css-module-data"() {
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/ExternalInput/styles.module.css#css-module
var styles_module_default3;
var init_styles_module3 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/ExternalInput/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data3();
    styles_module_default3 = { "ExternalInput-actions": "_ExternalInput-actions_1gpb4_1", "ExternalInput-button": "_ExternalInput-button_1gpb4_5", "ExternalInput--dataSelected": "_ExternalInput--dataSelected_1gpb4_24", "ExternalInput--readOnly": "_ExternalInput--readOnly_1gpb4_31", "ExternalInput-detachButton": "_ExternalInput-detachButton_1gpb4_35", "ExternalInput": "_ExternalInput_1gpb4_1", "ExternalInputModal": "_ExternalInputModal_1gpb4_79", "ExternalInputModal-grid": "_ExternalInputModal-grid_1gpb4_89", "ExternalInputModal--filtersToggled": "_ExternalInputModal--filtersToggled_1gpb4_100", "ExternalInputModal-filters": "_ExternalInputModal-filters_1gpb4_105", "ExternalInputModal-masthead": "_ExternalInputModal-masthead_1gpb4_124", "ExternalInputModal-tableWrapper": "_ExternalInputModal-tableWrapper_1gpb4_133", "ExternalInputModal-table": "_ExternalInputModal-table_1gpb4_133", "ExternalInputModal-thead": "_ExternalInputModal-thead_1gpb4_149", "ExternalInputModal-th": "_ExternalInputModal-th_1gpb4_149", "ExternalInputModal-td": "_ExternalInputModal-td_1gpb4_164", "ExternalInputModal-tr": "_ExternalInputModal-tr_1gpb4_169", "ExternalInputModal-tbody": "_ExternalInputModal-tbody_1gpb4_176", "ExternalInputModal--hasData": "_ExternalInputModal--hasData_1gpb4_202", "ExternalInputModal-loadingBanner": "_ExternalInputModal-loadingBanner_1gpb4_206", "ExternalInputModal--isLoading": "_ExternalInputModal--isLoading_1gpb4_223", "ExternalInputModal-searchForm": "_ExternalInputModal-searchForm_1gpb4_227", "ExternalInputModal-search": "_ExternalInputModal-search_1gpb4_227", "ExternalInputModal-searchIcon": "_ExternalInputModal-searchIcon_1gpb4_264", "ExternalInputModal-searchIconText": "_ExternalInputModal-searchIconText_1gpb4_289", "ExternalInputModal-searchInput": "_ExternalInputModal-searchInput_1gpb4_299", "ExternalInputModal-searchActions": "_ExternalInputModal-searchActions_1gpb4_313", "ExternalInputModal-searchActionIcon": "_ExternalInputModal-searchActionIcon_1gpb4_326", "ExternalInputModal-footerContainer": "_ExternalInputModal-footerContainer_1gpb4_330", "ExternalInputModal-footer": "_ExternalInputModal-footer_1gpb4_330", "ExternalInputModal-field": "_ExternalInputModal-field_1gpb4_343" };
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/Modal/styles.module.css/#css-module-data
var init_css_module_data4 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/Modal/styles.module.css/#css-module-data"() {
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/Modal/styles.module.css#css-module
var styles_module_default4;
var init_styles_module4 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/Modal/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data4();
    styles_module_default4 = { "Modal": "_Modal_b422s_1", "Modal--isOpen": "_Modal--isOpen_b422s_15", "Modal-inner": "_Modal-inner_b422s_19" };
  }
});

// components/Modal/index.tsx
var import_react14, import_react_dom, import_jsx_runtime7, getClassName5, Modal;
var init_Modal = __esm({
  "components/Modal/index.tsx"() {
    "use strict";
    init_react_import();
    import_react14 = require("react");
    init_get_class_name_factory();
    init_styles_module4();
    import_react_dom = require("react-dom");
    import_jsx_runtime7 = require("react/jsx-runtime");
    getClassName5 = get_class_name_factory_default("Modal", styles_module_default4);
    Modal = ({
      children,
      onClose,
      isOpen
    }) => {
      const [rootEl, setRootEl] = (0, import_react14.useState)(null);
      (0, import_react14.useEffect)(() => {
        setRootEl(document.getElementById("credbuild-portal-root"));
      }, []);
      if (!rootEl) {
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {});
      }
      return (0, import_react_dom.createPortal)(
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: getClassName5({ isOpen }), onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "div",
          {
            className: getClassName5("inner"),
            onClick: (e) => e.stopPropagation(),
            children
          }
        ) }),
        rootEl
      );
    };
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/Heading/styles.module.css/#css-module-data
var init_css_module_data5 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/Heading/styles.module.css/#css-module-data"() {
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/Heading/styles.module.css#css-module
var styles_module_default5;
var init_styles_module5 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/Heading/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data5();
    styles_module_default5 = { "Heading": "_Heading_1tpsl_1", "Heading--xxxxl": "_Heading--xxxxl_1tpsl_12", "Heading--xxxl": "_Heading--xxxl_1tpsl_18", "Heading--xxl": "_Heading--xxl_1tpsl_22", "Heading--xl": "_Heading--xl_1tpsl_26", "Heading--l": "_Heading--l_1tpsl_30", "Heading--m": "_Heading--m_1tpsl_34", "Heading--s": "_Heading--s_1tpsl_38", "Heading--xs": "_Heading--xs_1tpsl_42" };
  }
});

// components/Heading/index.tsx
var import_jsx_runtime8, getClassName6, Heading7;
var init_Heading = __esm({
  "components/Heading/index.tsx"() {
    "use strict";
    init_react_import();
    init_styles_module5();
    init_get_class_name_factory();
    import_jsx_runtime8 = require("react/jsx-runtime");
    getClassName6 = get_class_name_factory_default("Heading", styles_module_default5);
    Heading7 = ({ children, rank, size = "m" }) => {
      const Tag = rank ? `h${rank}` : "span";
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        Tag,
        {
          className: getClassName6({
            [size]: true
          }),
          children
        }
      );
    };
  }
});

// lib/filter.ts
var init_filter = __esm({
  "lib/filter.ts"() {
    "use strict";
    init_react_import();
  }
});

// lib/data/reorder.ts
var reorder;
var init_reorder2 = __esm({
  "lib/data/reorder.ts"() {
    "use strict";
    init_react_import();
    reorder = (list, startIndex, endIndex) => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    };
  }
});

// lib/data/replace.ts
var replace;
var init_replace2 = __esm({
  "lib/data/replace.ts"() {
    "use strict";
    init_react_import();
    replace = (list, index, newItem) => {
      const result = Array.from(list);
      result.splice(index, 1);
      result.splice(index, 0, newItem);
      return result;
    };
  }
});

// node_modules/tiny-invariant/dist/esm/tiny-invariant.js
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
var isProduction, prefix;
var init_tiny_invariant = __esm({
  "node_modules/tiny-invariant/dist/esm/tiny-invariant.js"() {
    "use strict";
    init_react_import();
    isProduction = process.env.NODE_ENV === "production";
    prefix = "Invariant failed";
  }
});

// node_modules/css-box-model/dist/css-box-model.esm.js
var getRect, expand, shrink, noSpacing, createBox, parse, calculateBox, getBox;
var init_css_box_model_esm = __esm({
  "node_modules/css-box-model/dist/css-box-model.esm.js"() {
    "use strict";
    init_react_import();
    init_tiny_invariant();
    getRect = function getRect2(_ref) {
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
    expand = function expand2(target, expandBy) {
      return {
        top: target.top - expandBy.top,
        left: target.left - expandBy.left,
        bottom: target.bottom + expandBy.bottom,
        right: target.right + expandBy.right
      };
    };
    shrink = function shrink2(target, shrinkBy) {
      return {
        top: target.top + shrinkBy.top,
        left: target.left + shrinkBy.left,
        bottom: target.bottom - shrinkBy.bottom,
        right: target.right - shrinkBy.right
      };
    };
    noSpacing = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    createBox = function createBox2(_ref2) {
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
    parse = function parse2(raw) {
      var value = raw.slice(0, -2);
      var suffix = raw.slice(-2);
      if (suffix !== "px") {
        return 0;
      }
      var result = Number(value);
      !!isNaN(result) ? process.env.NODE_ENV !== "production" ? invariant(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : invariant(false) : void 0;
      return result;
    };
    calculateBox = function calculateBox2(borderBox, styles2) {
      var margin = {
        top: parse(styles2.marginTop),
        right: parse(styles2.marginRight),
        bottom: parse(styles2.marginBottom),
        left: parse(styles2.marginLeft)
      };
      var padding = {
        top: parse(styles2.paddingTop),
        right: parse(styles2.paddingRight),
        bottom: parse(styles2.paddingBottom),
        left: parse(styles2.paddingLeft)
      };
      var border = {
        top: parse(styles2.borderTopWidth),
        right: parse(styles2.borderRightWidth),
        bottom: parse(styles2.borderBottomWidth),
        left: parse(styles2.borderLeftWidth)
      };
      return createBox({
        borderBox,
        margin,
        padding,
        border
      });
    };
    getBox = function getBox2(el) {
      var borderBox = el.getBoundingClientRect();
      var styles2 = window.getComputedStyle(el);
      return calculateBox(borderBox, styles2);
    };
  }
});

// lib/get-zoom-config.ts
var RESET_ZOOM_SMALLER_THAN_FRAME, getZoomConfig;
var init_get_zoom_config = __esm({
  "lib/get-zoom-config.ts"() {
    "use strict";
    init_react_import();
    init_css_box_model_esm();
    RESET_ZOOM_SMALLER_THAN_FRAME = true;
    getZoomConfig = (uiViewport, frame, zoom) => {
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
  }
});

// lib/use-reset-auto-zoom.ts
var import_react15, useResetAutoZoom;
var init_use_reset_auto_zoom = __esm({
  "lib/use-reset-auto-zoom.ts"() {
    "use strict";
    init_react_import();
    import_react15 = require("react");
    init_store2();
    init_get_zoom_config();
    useResetAutoZoom = (frameRef) => {
      const appStoreApi = useAppStoreApi();
      const resetAutoZoom = (0, import_react15.useCallback)(
        (options) => {
          const { state, zoomConfig, setZoomConfig } = appStoreApi.getState();
          const { viewports } = state.ui;
          const newViewports = options?.viewports || viewports;
          if (frameRef.current) {
            setZoomConfig(
              getZoomConfig(newViewports?.current, frameRef.current, zoomConfig.zoom)
            );
          }
        },
        [appStoreApi, frameRef]
      );
      return resetAutoZoom;
    };
  }
});

// lib/index.ts
var init_lib = __esm({
  "lib/index.ts"() {
    "use strict";
    init_react_import();
    init_filter();
    init_get_class_name_factory();
    init_reorder2();
    init_replace2();
    init_use_reset_auto_zoom();
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/Loader/styles.module.css/#css-module-data
var init_css_module_data6 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/Loader/styles.module.css/#css-module-data"() {
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/Loader/styles.module.css#css-module
var styles_module_default6;
var init_styles_module6 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/Loader/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data6();
    styles_module_default6 = { "Loader": "_Loader_nacdm_13", "loader-animation": "_loader-animation_nacdm_1" };
  }
});

// components/Loader/index.tsx
var import_jsx_runtime9, getClassName7, Loader;
var init_Loader = __esm({
  "components/Loader/index.tsx"() {
    "use strict";
    init_react_import();
    init_lib();
    init_styles_module6();
    import_jsx_runtime9 = require("react/jsx-runtime");
    getClassName7 = get_class_name_factory_default("Loader", styles_module_default6);
    Loader = ({
      color,
      size = 16,
      ...props
    }) => {
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "span",
        {
          className: getClassName7(),
          style: {
            width: size,
            height: size,
            color
          },
          "aria-label": "loading",
          ...props
        }
      );
    };
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/Button/Button.module.css/#css-module-data
var init_css_module_data7 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/Button/Button.module.css/#css-module-data"() {
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/Button/Button.module.css#css-module
var Button_module_default;
var init_Button_module = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/Button/Button.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data7();
    Button_module_default = { "Button": "_Button_164uz_1", "Button--medium": "_Button--medium_164uz_29", "Button--large": "_Button--large_164uz_34", "Button-icon": "_Button-icon_164uz_38", "Button--primary": "_Button--primary_164uz_42", "Button--secondary": "_Button--secondary_164uz_63", "Button--flush": "_Button--flush_164uz_80", "Button--disabled": "_Button--disabled_164uz_84", "Button--fullWidth": "_Button--fullWidth_164uz_92", "Button-spinner": "_Button-spinner_164uz_97" };
  }
});

// lib/filter-data-attrs.ts
var dataAttrRe, filterDataAttrs;
var init_filter_data_attrs = __esm({
  "lib/filter-data-attrs.ts"() {
    "use strict";
    init_react_import();
    dataAttrRe = /^(data-.*)$/;
    filterDataAttrs = (props) => {
      let filteredProps = {};
      for (const prop in props) {
        if (Object.prototype.hasOwnProperty.call(props, prop) && dataAttrRe.test(prop)) {
          filteredProps[prop] = props[prop];
        }
      }
      return filteredProps;
    };
  }
});

// components/Button/Button.tsx
var import_react16, import_jsx_runtime10, getClassName8, Button;
var init_Button = __esm({
  "components/Button/Button.tsx"() {
    "use strict";
    "use client";
    init_react_import();
    import_react16 = require("react");
    init_Button_module();
    init_get_class_name_factory();
    init_Loader();
    init_filter_data_attrs();
    import_jsx_runtime10 = require("react/jsx-runtime");
    getClassName8 = get_class_name_factory_default("Button", Button_module_default);
    Button = ({
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
      loading: loadingProp = false,
      ...props
    }) => {
      const [loading, setLoading] = (0, import_react16.useState)(loadingProp);
      (0, import_react16.useEffect)(() => setLoading(loadingProp), [loadingProp]);
      const ElementType = href ? "a" : type ? "button" : "span";
      const dataAttrs = filterDataAttrs(props);
      const el = /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
        ElementType,
        {
          className: getClassName8({
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
          href,
          ...dataAttrs,
          children: [
            icon && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: getClassName8("icon"), children: icon }),
            children,
            loading && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: getClassName8("spinner"), children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Loader, { size: 14 }) })
          ]
        }
      );
      return el;
    };
  }
});

// components/Button/index.ts
var init_Button2 = __esm({
  "components/Button/index.ts"() {
    "use strict";
    init_react_import();
    init_Button();
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/IconButton/IconButton.module.css/#css-module-data
var init_css_module_data8 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/IconButton/IconButton.module.css/#css-module-data"() {
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/IconButton/IconButton.module.css#css-module
var IconButton_module_default;
var init_IconButton_module = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/IconButton/IconButton.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data8();
    IconButton_module_default = { "IconButton": "_IconButton_1a0fz_1", "IconButton--active": "_IconButton--active_1a0fz_14", "IconButton--disabled": "_IconButton--disabled_1a0fz_24", "IconButton-title": "_IconButton-title_1a0fz_37" };
  }
});

// components/IconButton/IconButton.tsx
var import_react17, import_jsx_runtime11, getClassName9, IconButton;
var init_IconButton = __esm({
  "components/IconButton/IconButton.tsx"() {
    "use strict";
    init_react_import();
    import_react17 = require("react");
    init_IconButton_module();
    init_get_class_name_factory();
    init_Loader();
    import_jsx_runtime11 = require("react/jsx-runtime");
    getClassName9 = get_class_name_factory_default("IconButton", IconButton_module_default);
    IconButton = ({
      active = false,
      children,
      href,
      onClick,
      type,
      disabled,
      tabIndex,
      newTab,
      fullWidth,
      title,
      suppressHydrationWarning
    }) => {
      const [loading, setLoading] = (0, import_react17.useState)(false);
      const ElementType = href ? "a" : "button";
      const el = /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        ElementType,
        {
          className: getClassName9({
            active,
            disabled,
            fullWidth
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
          href,
          title,
          suppressHydrationWarning,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: getClassName9("title"), children: title }),
            children,
            loading && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
              "\xA0\xA0",
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Loader, { size: 14 })
            ] })
          ]
        }
      );
      return el;
    };
  }
});

// components/IconButton/index.ts
var init_IconButton2 = __esm({
  "components/IconButton/index.ts"() {
    "use strict";
    init_react_import();
    init_IconButton();
  }
});

// components/ExternalInput/index.tsx
var import_react18, import_jsx_runtime12, getClassName10, getClassNameModal, dataCache, ExternalInput;
var init_ExternalInput = __esm({
  "components/ExternalInput/index.tsx"() {
    "use strict";
    init_react_import();
    import_react18 = require("react");
    init_styles_module3();
    init_get_class_name_factory();
    init_lucide_react();
    init_Modal();
    init_Heading();
    init_Loader();
    init_Button2();
    init_AutoField();
    init_IconButton2();
    import_jsx_runtime12 = require("react/jsx-runtime");
    getClassName10 = get_class_name_factory_default("ExternalInput", styles_module_default3);
    getClassNameModal = get_class_name_factory_default("ExternalInputModal", styles_module_default3);
    dataCache = {};
    ExternalInput = ({
      field,
      onChange,
      value = null,
      name,
      id,
      readOnly
    }) => {
      const {
        mapProp = (val) => val,
        mapRow = (val) => val,
        filterFields
      } = field || {};
      const { enabled: shouldCacheData } = field.cache ?? { enabled: true };
      const [data, setData] = (0, import_react18.useState)([]);
      const [isOpen, setOpen] = (0, import_react18.useState)(false);
      const [isLoading, setIsLoading] = (0, import_react18.useState)(true);
      const hasFilterFields = !!filterFields;
      const [filters, setFilters] = (0, import_react18.useState)(field.initialFilters || {});
      const [filtersToggled, setFiltersToggled] = (0, import_react18.useState)(hasFilterFields);
      const mappedData = (0, import_react18.useMemo)(() => {
        return data.map(mapRow);
      }, [data, mapRow]);
      const keys = (0, import_react18.useMemo)(() => {
        const validKeys = /* @__PURE__ */ new Set();
        for (const item of mappedData) {
          for (const key of Object.keys(item)) {
            if (typeof item[key] === "string" || typeof item[key] === "number" || (0, import_react18.isValidElement)(item[key])) {
              validKeys.add(key);
            }
          }
        }
        return Array.from(validKeys);
      }, [mappedData]);
      const [searchQuery, setSearchQuery] = (0, import_react18.useState)(field.initialQuery || "");
      const search = (0, import_react18.useCallback)(
        async (query, filters2) => {
          setIsLoading(true);
          const cacheKey = `${id}-${query}-${JSON.stringify(filters2)}`;
          let listData;
          if (shouldCacheData && dataCache[cacheKey]) {
            listData = dataCache[cacheKey];
          } else {
            listData = await field.fetchList({ query, filters: filters2 });
          }
          if (listData) {
            setData(listData);
            setIsLoading(false);
            if (shouldCacheData) {
              dataCache[cacheKey] = listData;
            }
          }
        },
        [id, field, shouldCacheData]
      );
      const Footer = (0, import_react18.useCallback)(
        (props) => field.renderFooter ? field.renderFooter(props) : /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: getClassNameModal("footer"), children: [
          props.items.length,
          " result",
          props.items.length === 1 ? "" : "s"
        ] }),
        [field]
      );
      (0, import_react18.useEffect)(() => {
        search(searchQuery, filters);
      }, [search, searchQuery, filters]);
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
        "div",
        {
          className: getClassName10({
            dataSelected: !!value,
            modalVisible: isOpen,
            readOnly
          }),
          id,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: getClassName10("actions"), children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                "button",
                {
                  type: "button",
                  onClick: () => setOpen(true),
                  className: getClassName10("button"),
                  disabled: readOnly,
                  children: value ? field.getItemSummary ? field.getItemSummary(value) : "External item" : /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Link, { size: "16" }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: field.placeholder })
                  ] })
                }
              ),
              value && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                "button",
                {
                  type: "button",
                  className: getClassName10("detachButton"),
                  onClick: () => {
                    onChange(null);
                  },
                  disabled: readOnly,
                  children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(LockOpen, { size: 16 })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Modal, { onClose: () => setOpen(false), isOpen, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
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
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: getClassNameModal("masthead"), children: field.showSearch ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: getClassNameModal("searchForm"), children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { className: getClassNameModal("search"), children: [
                      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: getClassNameModal("searchIconText"), children: "Search" }),
                      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: getClassNameModal("searchIcon"), children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Search, { size: "18" }) }),
                      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: getClassNameModal("searchActions"), children: [
                      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Button, { type: "submit", loading: isLoading, fullWidth: true, children: "Search" }),
                      hasFilterFields && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: getClassNameModal("searchActionIcon"), children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                        IconButton,
                        {
                          type: "button",
                          title: "Toggle filters",
                          onClick: (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setFiltersToggled(!filtersToggled);
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SlidersHorizontal, { size: 20 })
                        }
                      ) })
                    ] })
                  ] }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Heading7, { rank: "2", size: "xs", children: field.placeholder || "Select data" }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: getClassNameModal("grid"), children: [
                    hasFilterFields && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: getClassNameModal("filters"), children: hasFilterFields && Object.keys(filterFields).map((fieldName) => {
                      const filterField = filterFields[fieldName];
                      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                        "div",
                        {
                          className: getClassNameModal("field"),
                          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(FieldLabel, { label: filterField.label || fieldName, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                            AutoField,
                            {
                              field: filterField,
                              id: `external_field_${fieldName}_filter`,
                              value: filters[fieldName],
                              onChange: (value2) => {
                                setFilters((filters2) => {
                                  const newFilters = {
                                    ...filters2,
                                    [fieldName]: value2
                                  };
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
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: getClassNameModal("tableWrapper"), children: [
                      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("table", { className: getClassNameModal("table"), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("thead", { className: getClassNameModal("thead"), children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", { className: getClassNameModal("tr"), children: keys.map((key) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                          "th",
                          {
                            className: getClassNameModal("th"),
                            style: { textAlign: "left" },
                            children: key
                          },
                          key
                        )) }) }),
                        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tbody", { className: getClassNameModal("tbody"), children: mappedData.map((item, i) => {
                          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                            "tr",
                            {
                              style: { whiteSpace: "nowrap" },
                              className: getClassNameModal("tr"),
                              onClick: () => {
                                onChange(mapProp(data[i]));
                                setOpen(false);
                              },
                              children: keys.map((key) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("td", { className: getClassNameModal("td"), children: item[key] }, key))
                            },
                            i
                          );
                        }) })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: getClassNameModal("loadingBanner"), children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Loader, { size: 24 }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: getClassNameModal("footerContainer"), children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Footer, { items: mappedData }) })
                ]
              }
            ) })
          ]
        }
      );
    };
  }
});

// components/AutoField/fields/ExternalField/index.tsx
var import_react19, import_jsx_runtime13, ExternalField;
var init_ExternalField = __esm({
  "components/AutoField/fields/ExternalField/index.tsx"() {
    "use strict";
    init_react_import();
    import_react19 = require("react");
    init_ExternalInput();
    init_lucide_react();
    init_use_deep_field();
    import_jsx_runtime13 = require("react/jsx-runtime");
    ExternalField = ({
      field,
      onChange,
      id,
      name = id,
      label,
      labelIcon,
      Label: Label2,
      readOnly
    }) => {
      const value = useDeepField(name);
      const validField = field;
      const deprecatedField = field;
      (0, import_react19.useEffect)(() => {
        if (deprecatedField.adaptor) {
          console.error(
            "Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release."
          );
        }
      }, [deprecatedField.adaptor]);
      if (field.type !== "external") {
        return null;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        Label2,
        {
          label: label || name,
          icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Link, { size: 16 }),
          el: "div",
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            ExternalInput,
            {
              name,
              field: {
                ...validField,
                // DEPRECATED
                placeholder: deprecatedField.adaptor?.name ? `Select from ${deprecatedField.adaptor.name}` : validField.placeholder || "Select data",
                mapProp: deprecatedField.adaptor?.mapProp || validField.mapProp,
                mapRow: validField.mapRow,
                fetchList: deprecatedField.adaptor?.fetchList ? async () => await deprecatedField.adaptor.fetchList(
                  deprecatedField.adaptorParams
                ) : validField.fetchList
              },
              onChange,
              value,
              id,
              readOnly
            }
          )
        }
      );
    };
  }
});

// components/AutoField/lib/use-is-focused.ts
var useIsFocused;
var init_use_is_focused = __esm({
  "components/AutoField/lib/use-is-focused.ts"() {
    "use strict";
    init_react_import();
    init_store2();
    useIsFocused = (path) => {
      return useAppStore((s) => s.state.ui.field.focus === path);
    };
  }
});

// components/AutoField/lib/use-local-value.ts
var import_react20, useLocalValue;
var init_use_local_value = __esm({
  "components/AutoField/lib/use-local-value.ts"() {
    "use strict";
    init_react_import();
    import_react20 = require("react");
    init_use_deep_field();
    init_use_is_focused();
    useLocalValue = (path, onChange) => {
      const value = useDeepField(path);
      const isFocused = useIsFocused(path);
      const [localValue, setLocalValue] = (0, import_react20.useState)(value?.toString());
      const onChangeLocal = (0, import_react20.useCallback)(
        (val) => {
          setLocalValue(val);
          onChange(val);
        },
        [onChange]
      );
      (0, import_react20.useEffect)(() => {
        if (!isFocused) {
          setLocalValue(value);
        }
      }, [isFocused, value]);
      return [localValue ?? "", onChangeLocal];
    };
  }
});

// components/AutoField/fields/DefaultField/index.tsx
var import_jsx_runtime14, getClassName11, DefaultField;
var init_DefaultField = __esm({
  "components/AutoField/fields/DefaultField/index.tsx"() {
    "use strict";
    init_react_import();
    init_get_class_name_factory();
    init_styles_module2();
    init_lucide_react();
    init_use_local_value();
    import_jsx_runtime14 = require("react/jsx-runtime");
    getClassName11 = get_class_name_factory_default("Input", styles_module_default2);
    DefaultField = ({
      field,
      onChange,
      readOnly,
      id,
      name = id,
      label,
      labelIcon,
      Label: Label2
    }) => {
      const [localValue, onChangeLocal] = useLocalValue(name, onChange);
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        Label2,
        {
          label: label || name,
          icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
            field.type === "text" && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Type, { size: 16 }),
            field.type === "number" && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Hash, { size: 16 })
          ] }),
          readOnly,
          children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            "input",
            {
              className: getClassName11("input"),
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
  }
});

// components/AutoField/fields/TextareaField/index.tsx
var import_jsx_runtime15, getClassName12, TextareaField;
var init_TextareaField = __esm({
  "components/AutoField/fields/TextareaField/index.tsx"() {
    "use strict";
    init_react_import();
    init_get_class_name_factory();
    init_styles_module2();
    init_lucide_react();
    init_use_local_value();
    import_jsx_runtime15 = require("react/jsx-runtime");
    getClassName12 = get_class_name_factory_default("Input", styles_module_default2);
    TextareaField = ({
      field,
      onChange,
      readOnly,
      id,
      name = id,
      label,
      labelIcon,
      Label: Label2
    }) => {
      const [localValue, onChangeLocal] = useLocalValue(name, onChange);
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        Label2,
        {
          label: label || name,
          icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Type, { size: 16 }),
          readOnly,
          children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            "textarea",
            {
              id,
              className: getClassName12("input"),
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
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/RichTextMenu/styles.module.css/#css-module-data
var init_css_module_data9 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/RichTextMenu/styles.module.css/#css-module-data"() {
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/RichTextMenu/styles.module.css#css-module
var styles_module_default7;
var init_styles_module7 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/RichTextMenu/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data9();
    styles_module_default7 = { "RichTextMenu": "_RichTextMenu_193iw_1", "RichTextMenu--form": "_RichTextMenu--form_193iw_7", "RichTextMenu-group": "_RichTextMenu-group_193iw_17", "RichTextMenu--inline": "_RichTextMenu--inline_193iw_35" };
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/RichTextMenu/components/Control/styles.module.css/#css-module-data
var init_css_module_data10 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/RichTextMenu/components/Control/styles.module.css/#css-module-data"() {
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/RichTextMenu/components/Control/styles.module.css#css-module
var styles_module_default8;
var init_styles_module8 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/RichTextMenu/components/Control/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data10();
    styles_module_default8 = { "Control": "_Control_1aveu_1", "Control--inline": "_Control--inline_1aveu_6" };
  }
});

// components/RichTextMenu/lib/use-control-context.ts
var import_react21, ControlContext, useControlContext;
var init_use_control_context = __esm({
  "components/RichTextMenu/lib/use-control-context.ts"() {
    "use strict";
    init_react_import();
    import_react21 = require("react");
    ControlContext = (0, import_react21.createContext)({});
    useControlContext = () => {
      return (0, import_react21.useContext)(ControlContext);
    };
  }
});

// components/RichTextMenu/components/Control/index.tsx
function Control({
  icon,
  disabled,
  active,
  onClick,
  title
}) {
  const { inline } = useControlContext();
  if (inline) {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: getClassName13({ inline: true }), children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      Action,
      {
        onClick,
        disabled,
        active,
        label: title,
        children: icon
      }
    ) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: getClassName13(), children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    IconButton,
    {
      onClick,
      disabled,
      active,
      title,
      children: icon
    }
  ) });
}
var import_jsx_runtime16, getClassName13;
var init_Control = __esm({
  "components/RichTextMenu/components/Control/index.tsx"() {
    "use strict";
    init_react_import();
    init_IconButton2();
    init_ActionBar();
    init_lib();
    init_styles_module8();
    init_use_control_context();
    import_jsx_runtime16 = require("react/jsx-runtime");
    getClassName13 = get_class_name_factory_default("Control", styles_module_default8);
  }
});

// components/RichTextMenu/controls/AlignLeft.tsx
function AlignLeft() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(TextAlignStart, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor?.chain().focus().setTextAlign("left").run();
      },
      disabled: !editorState?.canAlignLeft,
      active: editorState?.isAlignLeft,
      title: "Align left"
    }
  );
}
var import_jsx_runtime17;
var init_AlignLeft = __esm({
  "components/RichTextMenu/controls/AlignLeft.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime17 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/AlignCenter.tsx
function AlignCenter() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TextAlignCenter, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor?.chain().focus().setTextAlign("center").run();
      },
      disabled: !editorState?.canAlignCenter,
      active: editorState?.isAlignCenter,
      title: "Align center"
    }
  );
}
var import_jsx_runtime18;
var init_AlignCenter = __esm({
  "components/RichTextMenu/controls/AlignCenter.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime18 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/AlignRight.tsx
function AlignRight() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(TextAlignEnd, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor?.chain().focus().setTextAlign("right").run();
      },
      disabled: !editorState?.canAlignRight,
      active: editorState?.isAlignRight,
      title: "Align right"
    }
  );
}
var import_jsx_runtime19;
var init_AlignRight = __esm({
  "components/RichTextMenu/controls/AlignRight.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime19 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/AlignJustify.tsx
function AlignJustify() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TextAlignJustify, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor?.chain().focus().setTextAlign("justify").run();
      },
      disabled: !editorState?.canAlignJustify,
      active: editorState?.isAlignJustify,
      title: "Justify"
    }
  );
}
var import_jsx_runtime20;
var init_AlignJustify = __esm({
  "components/RichTextMenu/controls/AlignJustify.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime20 = require("react/jsx-runtime");
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/Select/styles.module.css/#css-module-data
var init_css_module_data11 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/Select/styles.module.css/#css-module-data"() {
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/Select/styles.module.css#css-module
var styles_module_default9;
var init_styles_module9 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/Select/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data11();
    styles_module_default9 = { "Select": "_Select_16son_1", "Select-button": "_Select-button_16son_6", "Select--hasOptions": "_Select--hasOptions_16son_19", "Select--disabled": "_Select--disabled_16son_23", "Select-buttonIcon": "_Select-buttonIcon_16son_27", "Select--standalone": "_Select--standalone_16son_33", "Select--actionBar": "_Select--actionBar_16son_38", "Select--hasValue": "_Select--hasValue_16son_44", "Select-items": "_Select-items_16son_61", "SelectItem": "_SelectItem_16son_72", "SelectItem--isSelected": "_SelectItem--isSelected_16son_87", "SelectItem-icon": "_SelectItem-icon_16son_93" };
  }
});

// components/Select/index.tsx
var import_react22, import_react_popover, import_jsx_runtime21, getClassName14, getItemClassName, Item, Select;
var init_Select = __esm({
  "components/Select/index.tsx"() {
    "use strict";
    init_react_import();
    init_styles_module9();
    import_react22 = require("react");
    import_react_popover = require("@radix-ui/react-popover");
    init_lucide_react();
    init_lib();
    import_jsx_runtime21 = require("react/jsx-runtime");
    getClassName14 = get_class_name_factory_default("Select", styles_module_default9);
    getItemClassName = get_class_name_factory_default("SelectItem", styles_module_default9);
    Item = ({
      children,
      isSelected,
      onClick
    }) => {
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { className: getItemClassName({ isSelected }), onClick, children });
    };
    Select = ({
      children,
      options,
      onChange,
      value,
      defaultValue,
      mode,
      disabled = false
    }) => {
      const [open, setOpen] = (0, import_react22.useState)(false);
      const hasOptions = options.length > 0;
      const isDisabled = disabled || !hasOptions;
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        "div",
        {
          className: getClassName14({
            hasValue: value !== defaultValue,
            hasOptions,
            actionBar: mode === "actionBar",
            standalone: mode === "standalone",
            disabled: isDisabled
          }),
          children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_react_popover.Popover, { open, onOpenChange: setOpen, children: [
            hasOptions ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react_popover.PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("button", { className: getClassName14("button"), children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: getClassName14("buttonIcon"), children }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ChevronDown, { size: 12 })
            ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: getClassName14("button"), children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: getClassName14("buttonIcon"), children }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ChevronDown, { size: 12 })
            ] }) }),
            options.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react_popover.PopoverPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react_popover.PopoverContent, { align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("ul", { className: getClassName14("items"), "data-credbuild-rte-menu": true, children: options.map((option) => {
              const Icon2 = option.icon;
              return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
                Item,
                {
                  isSelected: value === option.value,
                  onClick: () => {
                    onChange(option.value);
                    setOpen(false);
                  },
                  children: [
                    Icon2 && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: getItemClassName("icon"), children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icon2, { size: 16 }) }),
                    option.label
                  ]
                }
              ) }, option.value);
            }) }) }) })
          ] })
        }
      );
    };
  }
});

// components/RichTextMenu/components/SelectControl/index.tsx
function SelectControl({
  renderDefaultIcon,
  onChange,
  options,
  value,
  defaultValue
}) {
  const { inline, readOnly } = useControlContext();
  const optionsByValue = (0, import_react23.useMemo)(
    () => options.reduce(
      (acc, option) => ({ ...acc, [option.value]: option }),
      {}
    ),
    [options]
  );
  const Node2 = (value && optionsByValue[value]?.icon) ?? renderDefaultIcon;
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    Select,
    {
      options,
      onChange,
      value,
      defaultValue,
      mode: inline ? "actionBar" : "standalone",
      disabled: readOnly,
      children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Node2, {})
    }
  );
}
var import_react23, import_jsx_runtime22;
var init_SelectControl = __esm({
  "components/RichTextMenu/components/SelectControl/index.tsx"() {
    "use strict";
    init_react_import();
    init_use_control_context();
    import_react23 = require("react");
    init_Select();
    import_jsx_runtime22 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/AlignSelect/use-options.ts
var import_react24, optionNodes, useAlignOptions;
var init_use_options = __esm({
  "components/RichTextMenu/controls/AlignSelect/use-options.ts"() {
    "use strict";
    init_react_import();
    import_react24 = require("react");
    init_lucide_react();
    optionNodes = {
      left: { label: "Left", icon: TextAlignStart },
      center: { label: "Center", icon: TextAlignCenter },
      right: { label: "Right", icon: TextAlignEnd },
      justify: { label: "Justify", icon: TextAlignJustify }
    };
    useAlignOptions = (fieldOptions) => {
      const blockOptions = (0, import_react24.useMemo)(() => {
        const options = [];
        if (fieldOptions?.textAlign !== false) {
          if (!fieldOptions?.textAlign?.alignments) {
            return ["left", "center", "right", "justify"];
          } else {
            if (fieldOptions?.textAlign.alignments.includes("left")) {
              options.push("left");
            }
            if (fieldOptions?.textAlign.alignments.includes("center")) {
              options.push("center");
            }
            if (fieldOptions?.textAlign.alignments.includes("right")) {
              options.push("right");
            }
            if (fieldOptions?.textAlign.alignments.includes("justify")) {
              options.push("justify");
            }
          }
        }
        return options;
      }, [fieldOptions?.textAlign]);
      return (0, import_react24.useMemo)(
        () => blockOptions.map((item) => ({
          value: item,
          label: optionNodes[item].label,
          icon: optionNodes[item].icon
        })),
        [blockOptions]
      );
    };
  }
});

// components/RichTextMenu/controls/AlignSelect/fallback.tsx
function AlignSelectFallback() {
  const ctx = useControlContext();
  const alignOptions = useAlignOptions(ctx.options);
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    SelectControl,
    {
      options: alignOptions,
      onChange: () => {
      },
      value: "left",
      defaultValue: "left",
      renderDefaultIcon: TextAlignStart
    }
  );
}
var import_jsx_runtime23;
var init_fallback = __esm({
  "components/RichTextMenu/controls/AlignSelect/fallback.tsx"() {
    "use strict";
    init_react_import();
    init_use_control_context();
    init_lucide_react();
    init_SelectControl();
    init_use_options();
    import_jsx_runtime23 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/AlignSelect/loaded.tsx
var loaded_exports = {};
__export(loaded_exports, {
  AlignSelectLoaded: () => AlignSelectLoaded
});
function AlignSelectLoaded() {
  const { options } = useControlContext();
  const alignOptions = useAlignOptions(options);
  const { editor } = useControlContext();
  const currentValue = (0, import_react25.useEditorState)({
    editor,
    selector: (ctx) => {
      if (ctx.editor?.isActive({ textAlign: "center" })) {
        return "center";
      } else if (ctx.editor?.isActive({ textAlign: "right" })) {
        return "right";
      } else if (ctx.editor?.isActive({ textAlign: "justify" })) {
        return "justify";
      }
      return options?.textAlign ? options.textAlign.defaultAlignment ?? "left" : "left";
    }
  }) ?? "left";
  const handleChange = (val) => {
    const chain = editor?.chain();
    chain?.focus().setTextAlign(val).run();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    SelectControl,
    {
      options: alignOptions,
      onChange: handleChange,
      value: currentValue,
      defaultValue: "left",
      renderDefaultIcon: TextAlignStart
    }
  );
}
var import_react25, import_jsx_runtime24;
var init_loaded = __esm({
  "components/RichTextMenu/controls/AlignSelect/loaded.tsx"() {
    "use strict";
    init_react_import();
    import_react25 = require("@tiptap/react");
    init_use_control_context();
    init_lucide_react();
    init_SelectControl();
    init_use_options();
    import_jsx_runtime24 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/AlignSelect/index.tsx
var import_react26, import_jsx_runtime25, AlignSelectLoaded2, AlignSelect;
var init_AlignSelect = __esm({
  "components/RichTextMenu/controls/AlignSelect/index.tsx"() {
    "use strict";
    init_react_import();
    import_react26 = require("react");
    init_fallback();
    import_jsx_runtime25 = require("react/jsx-runtime");
    AlignSelectLoaded2 = (0, import_react26.lazy)(
      () => Promise.resolve().then(() => (init_loaded(), loaded_exports)).then((m) => ({
        default: m.AlignSelectLoaded
      }))
    );
    AlignSelect = () => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react26.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(AlignSelectFallback, {}), children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(AlignSelectLoaded2, {}) });
  }
});

// components/RichTextMenu/controls/Bold.tsx
function Bold2() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Bold, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor?.chain().focus().toggleBold().run();
      },
      disabled: !editorState?.canBold,
      active: editorState?.isBold,
      title: "Bold"
    }
  );
}
var import_jsx_runtime26;
var init_Bold = __esm({
  "components/RichTextMenu/controls/Bold.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime26 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/Italic.tsx
function Italic2() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Italic, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor?.chain().focus().toggleItalic().run();
      },
      disabled: !editorState?.canItalic,
      active: editorState?.isItalic,
      title: "Italic"
    }
  );
}
var import_jsx_runtime27;
var init_Italic = __esm({
  "components/RichTextMenu/controls/Italic.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime27 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/Underline.tsx
function Underline2() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Underline, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor?.chain().focus().toggleUnderline().run();
      },
      disabled: !editorState?.canUnderline,
      active: editorState?.isUnderline,
      title: "Underline"
    }
  );
}
var import_jsx_runtime28;
var init_Underline = __esm({
  "components/RichTextMenu/controls/Underline.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime28 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/Strikethrough.tsx
function Strikethrough2() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Strikethrough, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor?.chain().focus().toggleStrike().run();
      },
      disabled: !editorState?.canStrike,
      active: editorState?.isStrike,
      title: "Strikethrough"
    }
  );
}
var import_jsx_runtime29;
var init_Strikethrough = __esm({
  "components/RichTextMenu/controls/Strikethrough.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime29 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/InlineCode.tsx
function InlineCode() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Code, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor?.chain().focus().toggleCode().run();
      },
      disabled: !editorState?.canInlineCode,
      active: editorState?.isInlineCode,
      title: "Inline code"
    }
  );
}
var import_jsx_runtime30;
var init_InlineCode = __esm({
  "components/RichTextMenu/controls/InlineCode.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime30 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/BulletList.tsx
function BulletList() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(List, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor?.chain().focus().toggleBulletList().run();
      },
      disabled: !editorState?.canBulletList,
      active: editorState?.isBulletList,
      title: "Bullet list"
    }
  );
}
var import_jsx_runtime31;
var init_BulletList = __esm({
  "components/RichTextMenu/controls/BulletList.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime31 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/OrderedList.tsx
function OrderedList() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(ListOrdered, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor?.chain().focus().toggleOrderedList().run();
      },
      disabled: !editorState?.canOrderedList,
      active: editorState?.isOrderedList,
      title: "Ordered list"
    }
  );
}
var import_jsx_runtime32;
var init_OrderedList = __esm({
  "components/RichTextMenu/controls/OrderedList.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime32 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/CodeBlock.tsx
function CodeBlock() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(SquareCode, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor?.chain().focus().toggleCodeBlock().run();
      },
      disabled: !editorState?.canCodeBlock,
      active: editorState?.isCodeBlock,
      title: "Code block"
    }
  );
}
var import_jsx_runtime33;
var init_CodeBlock = __esm({
  "components/RichTextMenu/controls/CodeBlock.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime33 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/Blockquote.tsx
function Blockquote() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Quote, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor?.chain().focus().toggleBlockquote().run();
      },
      disabled: !editorState?.canBlockquote,
      active: editorState?.isBlockquote,
      title: "Blockquote"
    }
  );
}
var import_jsx_runtime34;
var init_Blockquote = __esm({
  "components/RichTextMenu/controls/Blockquote.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime34 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/HorizontalRule.tsx
function HorizontalRule() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    Control,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Minus, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor?.chain().focus().setHorizontalRule().run();
      },
      disabled: !editorState?.canHorizontalRule,
      title: "Horizontal rule"
    }
  );
}
var import_jsx_runtime35;
var init_HorizontalRule = __esm({
  "components/RichTextMenu/controls/HorizontalRule.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_Control();
    init_use_control_context();
    import_jsx_runtime35 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/HeadingSelect/use-options.ts
var import_react27, optionNodes2, useHeadingOptions;
var init_use_options2 = __esm({
  "components/RichTextMenu/controls/HeadingSelect/use-options.ts"() {
    "use strict";
    init_react_import();
    import_react27 = require("react");
    init_lucide_react();
    optionNodes2 = {
      h1: { label: "Heading 1", icon: Heading1 },
      h2: { label: "Heading 2", icon: Heading2 },
      h3: { label: "Heading 3", icon: Heading3 },
      h4: { label: "Heading 4", icon: Heading4 },
      h5: { label: "Heading 5", icon: Heading5 },
      h6: { label: "Heading 6", icon: Heading6 }
    };
    useHeadingOptions = (fieldOptions) => {
      const blockOptions = (0, import_react27.useMemo)(() => {
        const options = [];
        if (fieldOptions?.heading !== false) {
          if (!fieldOptions?.heading?.levels) {
            return ["h1", "h2", "h3", "h4", "h5", "h6"];
          } else {
            if (fieldOptions?.heading.levels.includes(1)) {
              options.push("h1");
            }
            if (fieldOptions?.heading.levels.includes(2)) {
              options.push("h2");
            }
            if (fieldOptions?.heading.levels.includes(3)) {
              options.push("h3");
            }
            if (fieldOptions?.heading.levels.includes(4)) {
              options.push("h4");
            }
            if (fieldOptions?.heading.levels.includes(5)) {
              options.push("h5");
            }
            if (fieldOptions?.heading.levels.includes(6)) {
              options.push("h6");
            }
          }
        }
        return options;
      }, [fieldOptions?.heading]);
      return (0, import_react27.useMemo)(
        () => blockOptions.map((item) => ({
          value: item,
          label: optionNodes2[item].label,
          icon: optionNodes2[item].icon
        })),
        [blockOptions]
      );
    };
  }
});

// components/RichTextMenu/controls/HeadingSelect/fallback.tsx
function HeadingSelectFallback() {
  const ctx = useControlContext();
  const headingOptions = useHeadingOptions(ctx.options);
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    SelectControl,
    {
      options: headingOptions,
      onChange: () => {
      },
      value: "p",
      defaultValue: "p",
      renderDefaultIcon: Heading
    }
  );
}
var import_jsx_runtime36;
var init_fallback2 = __esm({
  "components/RichTextMenu/controls/HeadingSelect/fallback.tsx"() {
    "use strict";
    init_react_import();
    init_lucide_react();
    init_SelectControl();
    init_use_control_context();
    init_use_options2();
    import_jsx_runtime36 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/HeadingSelect/loaded.tsx
var loaded_exports2 = {};
__export(loaded_exports2, {
  HeadingSelectLoaded: () => HeadingSelectLoaded
});
function HeadingSelectLoaded() {
  const { options } = useControlContext();
  const headingOptions = useHeadingOptions(options);
  const { editor } = useControlContext();
  const currentValue = (0, import_react28.useEditorState)({
    editor,
    selector: (ctx) => {
      if (ctx.editor?.isActive("paragraph")) return "p";
      for (let level = 1; level <= 6; level++) {
        if (ctx.editor?.isActive("heading", { level })) {
          return `h${level}`;
        }
      }
      return "p";
    }
  });
  const handleChange = (val) => {
    const chain = editor?.chain();
    if (val === "p") {
      chain?.focus().setParagraph().run();
    } else {
      const level = parseInt(val.replace("h", ""), 10);
      chain?.focus().toggleHeading({ level }).run();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    SelectControl,
    {
      options: headingOptions,
      onChange: handleChange,
      value: currentValue ?? "p",
      defaultValue: "p",
      renderDefaultIcon: Heading
    }
  );
}
var import_react28, import_jsx_runtime37;
var init_loaded2 = __esm({
  "components/RichTextMenu/controls/HeadingSelect/loaded.tsx"() {
    "use strict";
    init_react_import();
    import_react28 = require("@tiptap/react");
    init_use_control_context();
    init_lucide_react();
    init_SelectControl();
    init_use_options2();
    import_jsx_runtime37 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/HeadingSelect/index.tsx
var import_react29, import_jsx_runtime38, HeadingSelectLoaded2, HeadingSelect;
var init_HeadingSelect = __esm({
  "components/RichTextMenu/controls/HeadingSelect/index.tsx"() {
    "use strict";
    init_react_import();
    import_react29 = require("react");
    init_fallback2();
    import_jsx_runtime38 = require("react/jsx-runtime");
    HeadingSelectLoaded2 = (0, import_react29.lazy)(
      () => Promise.resolve().then(() => (init_loaded2(), loaded_exports2)).then((m) => ({
        default: m.HeadingSelectLoaded
      }))
    );
    HeadingSelect = () => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react29.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(HeadingSelectFallback, {}), children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(HeadingSelectLoaded2, {}) });
  }
});

// components/RichTextMenu/controls/ListSelect/use-options.ts
var import_react30, optionNodes3, useListOptions;
var init_use_options3 = __esm({
  "components/RichTextMenu/controls/ListSelect/use-options.ts"() {
    "use strict";
    init_react_import();
    import_react30 = require("react");
    init_lucide_react();
    optionNodes3 = {
      ul: { label: "Bullet list", icon: List },
      ol: { label: "Numbered list", icon: ListOrdered }
    };
    useListOptions = (fieldOptions) => {
      const blockOptions = (0, import_react30.useMemo)(() => {
        if (fieldOptions?.listItem !== false) {
          return ["ul", "ol"];
        }
        return [];
      }, [fieldOptions?.listItem]);
      return (0, import_react30.useMemo)(
        () => blockOptions.map((item) => ({
          value: item,
          label: optionNodes3[item].label,
          icon: optionNodes3[item].icon
        })),
        [blockOptions]
      );
    };
  }
});

// components/RichTextMenu/controls/ListSelect/fallback.tsx
function ListSelectFallback() {
  const ctx = useControlContext();
  const listOptions = useListOptions(ctx.options);
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    SelectControl,
    {
      options: listOptions,
      onChange: () => {
      },
      value: "p",
      defaultValue: "p",
      renderDefaultIcon: List
    }
  );
}
var import_jsx_runtime39;
var init_fallback3 = __esm({
  "components/RichTextMenu/controls/ListSelect/fallback.tsx"() {
    "use strict";
    init_react_import();
    init_SelectControl();
    init_use_control_context();
    init_lucide_react();
    init_use_options3();
    import_jsx_runtime39 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/ListSelect/loaded.tsx
var loaded_exports3 = {};
__export(loaded_exports3, {
  ListSelectLoaded: () => ListSelectLoaded
});
function ListSelectLoaded() {
  const { options } = useControlContext();
  const listOptions = useListOptions(options);
  const { editor } = useControlContext();
  const currentValue = (0, import_react31.useEditorState)({
    editor,
    selector: (ctx) => {
      if (ctx.editor?.isActive("bulletList")) return "ul";
      if (ctx.editor?.isActive("orderedList")) return "ol";
      return "p";
    }
  });
  const handleChange = (val) => {
    const chain = editor?.chain();
    if (val === "p") {
      chain?.focus().setParagraph().run();
    } else if (val === "ol") {
      chain?.focus().toggleOrderedList().run();
    } else if (val === "ul") {
      chain?.focus().toggleBulletList().run();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    SelectControl,
    {
      options: listOptions,
      onChange: handleChange,
      value: currentValue ?? "p",
      defaultValue: "p",
      renderDefaultIcon: List
    }
  );
}
var import_react31, import_jsx_runtime40;
var init_loaded3 = __esm({
  "components/RichTextMenu/controls/ListSelect/loaded.tsx"() {
    "use strict";
    init_react_import();
    import_react31 = require("@tiptap/react");
    init_use_control_context();
    init_SelectControl();
    init_lucide_react();
    init_use_options3();
    import_jsx_runtime40 = require("react/jsx-runtime");
  }
});

// components/RichTextMenu/controls/ListSelect/index.tsx
var import_react32, import_jsx_runtime41, ListSelectLoaded2, ListSelect;
var init_ListSelect = __esm({
  "components/RichTextMenu/controls/ListSelect/index.tsx"() {
    "use strict";
    init_react_import();
    import_react32 = require("react");
    init_fallback3();
    import_jsx_runtime41 = require("react/jsx-runtime");
    ListSelectLoaded2 = (0, import_react32.lazy)(
      () => Promise.resolve().then(() => (init_loaded3(), loaded_exports3)).then((m) => ({
        default: m.ListSelectLoaded
      }))
    );
    ListSelect = () => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react32.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(ListSelectFallback, {}), children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(ListSelectLoaded2, {}) });
  }
});

// components/RichTextMenu/controls/index.ts
var init_controls = __esm({
  "components/RichTextMenu/controls/index.ts"() {
    "use strict";
    init_react_import();
    init_AlignLeft();
    init_AlignCenter();
    init_AlignRight();
    init_AlignJustify();
    init_AlignSelect();
    init_Bold();
    init_Italic();
    init_Underline();
    init_Strikethrough();
    init_InlineCode();
    init_BulletList();
    init_OrderedList();
    init_CodeBlock();
    init_Blockquote();
    init_HorizontalRule();
    init_HeadingSelect();
    init_ListSelect();
  }
});

// components/RichTextMenu/inner.tsx
var import_react33, import_jsx_runtime42, getClassName15, DefaultMenu, RichTextMenu, Group2, LoadedRichTextMenuInner;
var init_inner = __esm({
  "components/RichTextMenu/inner.tsx"() {
    "use strict";
    init_react_import();
    init_get_class_name_factory();
    init_styles_module7();
    import_react33 = require("react");
    init_controls();
    init_use_control_context();
    init_Control();
    init_AlignSelect();
    import_jsx_runtime42 = require("react/jsx-runtime");
    getClassName15 = get_class_name_factory_default("RichTextMenu", styles_module_default7);
    DefaultMenu = ({ children }) => {
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(RichTextMenu, { children });
    };
    RichTextMenu = ({ children }) => {
      const { inline } = useControlContext();
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: getClassName15({ inline, form: !inline }), "data-credbuild-rte-menu": true, children });
    };
    Group2 = ({ children }) => {
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: getClassName15("group"), children });
    };
    RichTextMenu.Group = Group2;
    RichTextMenu.Control = Control;
    RichTextMenu.AlignCenter = AlignCenter;
    RichTextMenu.AlignJustify = AlignJustify;
    RichTextMenu.AlignLeft = AlignLeft;
    RichTextMenu.AlignRight = AlignRight;
    RichTextMenu.AlignSelect = AlignSelect;
    RichTextMenu.Blockquote = Blockquote;
    RichTextMenu.Bold = Bold2;
    RichTextMenu.BulletList = BulletList;
    RichTextMenu.CodeBlock = CodeBlock;
    RichTextMenu.HeadingSelect = HeadingSelect;
    RichTextMenu.HorizontalRule = HorizontalRule;
    RichTextMenu.InlineCode = InlineCode;
    RichTextMenu.Italic = Italic2;
    RichTextMenu.ListSelect = ListSelect;
    RichTextMenu.OrderedList = OrderedList;
    RichTextMenu.Strikethrough = Strikethrough2;
    RichTextMenu.Underline = Underline2;
    LoadedRichTextMenuInner = ({
      editor = null,
      editorState = null,
      field,
      readOnly,
      inline
    }) => {
      const { renderMenu, renderInlineMenu } = field;
      const InlineMenu = (0, import_react33.useMemo)(
        () => renderInlineMenu || DefaultMenu,
        [renderInlineMenu]
      );
      const Menu = (0, import_react33.useMemo)(() => renderMenu || DefaultMenu, [renderMenu]);
      return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
        ControlContext.Provider,
        {
          value: { editor, editorState, inline, options: field.options, readOnly },
          children: inline ? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            InlineMenu,
            {
              editor,
              editorState,
              readOnly,
              children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Group2, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Bold2, {}),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Italic2, {}),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Underline2, {})
              ] })
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Menu, { editor, editorState, readOnly, children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Group2, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(HeadingSelect, {}),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(ListSelect, {})
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Group2, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Bold2, {}),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Italic2, {}),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Underline2, {})
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Group2, { children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(AlignSelect, {}) })
          ] })
        }
      );
    };
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/RichTextEditor/styles.module.css/#css-module-data
var init_css_module_data12 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/RichTextEditor/styles.module.css/#css-module-data"() {
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/RichTextEditor/styles.module.css#css-module
var styles_module_default10;
var init_styles_module10 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/RichTextEditor/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data12();
    styles_module_default10 = { "RichTextEditor": "_RichTextEditor_hp4qf_1", "RichTextEditor--editor": "_RichTextEditor--editor_hp4qf_50", "RichTextEditor--disabled": "_RichTextEditor--disabled_hp4qf_107", "RichTextEditor--isActive": "_RichTextEditor--isActive_hp4qf_111", "RichTextEditor-menu": "_RichTextEditor-menu_hp4qf_117" };
  }
});

// components/RichTextEditor/components/EditorInner.tsx
var import_react34, import_jsx_runtime43, getClassName16, EditorInner;
var init_EditorInner = __esm({
  "components/RichTextEditor/components/EditorInner.tsx"() {
    "use strict";
    init_react_import();
    import_react34 = require("react");
    init_styles_module10();
    init_get_class_name_factory();
    init_store2();
    import_jsx_runtime43 = require("react/jsx-runtime");
    getClassName16 = get_class_name_factory_default("RichTextEditor", styles_module_default10);
    EditorInner = (0, import_react34.memo)(
      ({
        children,
        menu,
        readOnly = false,
        field,
        inline = false,
        editor,
        id
      }) => {
        const { initialHeight } = field;
        const isActive = useAppStore(
          (s) => s.currentRichText?.id === id && inline === s.currentRichText.inline
        );
        const appStoreApi = useAppStoreApi();
        const handleHotkeyCapture = (0, import_react34.useCallback)(
          (event) => {
            if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "i") {
              event.stopPropagation();
              event.preventDefault();
              editor?.commands.toggleItalic?.();
            }
            if (event.key.toLowerCase() === "backspace") {
              event.stopPropagation();
            }
          },
          [editor]
        );
        const handleBlur = (0, import_react34.useCallback)(
          (e) => {
            const targetInMenu = !!e.relatedTarget?.closest?.(
              "[data-credbuild-rte-menu]"
            );
            if (e.relatedTarget && !targetInMenu) {
              appStoreApi.setState({
                currentRichText: null
              });
            } else {
              e.stopPropagation();
            }
          },
          [appStoreApi]
        );
        return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
          "div",
          {
            className: getClassName16({
              editor: !inline,
              inline,
              isActive,
              disabled: readOnly
            }),
            style: inline ? {} : { height: initialHeight ?? 192, overflowY: "auto" },
            onKeyDownCapture: handleHotkeyCapture,
            onBlur: handleBlur,
            children: [
              !inline && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: getClassName16("menu"), children: menu }),
              children
            ]
          }
        );
      }
    );
    EditorInner.displayName = "EditorInner";
  }
});

// components/RichTextEditor/components/EditorFallback.tsx
var import_react35, import_jsx_runtime44, EditorFallback;
var init_EditorFallback = __esm({
  "components/RichTextEditor/components/EditorFallback.tsx"() {
    "use strict";
    init_react_import();
    import_react35 = require("react");
    init_inner();
    init_EditorInner();
    import_jsx_runtime44 = require("react/jsx-runtime");
    EditorFallback = (0, import_react35.memo)((props) => {
      return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
        EditorInner,
        {
          ...props,
          editor: null,
          menu: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            LoadedRichTextMenuInner,
            {
              field: props.field,
              editor: null,
              editorState: null,
              readOnly: props.readOnly ?? false
            }
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            "div",
            {
              className: "rich-text",
              dangerouslySetInnerHTML: { __html: props.content },
              contentEditable: true
            }
          )
        }
      );
    });
    EditorFallback.displayName = "EditorFallback";
  }
});

// components/RichTextEditor/lib/use-synced-editor.ts
function useSyncedEditor({
  content,
  onChange,
  extensions,
  editable = true,
  onFocusChange,
  name
}) {
  const [debouncedState, setDebouncedState] = (0, import_use_debounce.useDebounce)(null, 50, {
    leading: true,
    maxWait: 200
  });
  const syncingRef = (0, import_react37.useRef)(false);
  const lastSyncedRef = (0, import_react37.useRef)("");
  const editTimer = (0, import_react37.useRef)(null);
  const isPending = !!editTimer.current;
  const isFocused = useAppStore((s) => s.state.ui.field.focus === name);
  const resetTimer = (clearOn) => {
    if (editTimer.current) {
      clearTimeout(editTimer.current);
    }
    editTimer.current = setTimeout(() => {
      if (lastSyncedRef.current === clearOn) {
        editTimer.current = null;
      }
    }, 200);
  };
  const appStoreApi = useAppStoreApi();
  const editor = (0, import_react36.useEditor)({
    extensions,
    content,
    editable,
    immediatelyRender: false,
    parseOptions: { preserveWhitespace: "full" },
    onUpdate: ({ editor: editor2 }) => {
      if (syncingRef.current || !isFocused) {
        appStoreApi.getState().setUi({ field: { focus: name } });
        return;
      }
      const html = editor2.getHTML();
      const { from, to } = editor2.state.selection;
      setDebouncedState({ from, to, html });
      resetTimer(html);
      lastSyncedRef.current = html;
    }
  });
  (0, import_react37.useEffect)(() => {
    if (!editor) return;
    const handleFocus = () => {
      onFocusChange?.(editor);
    };
    editor.on("focus", handleFocus);
    return () => {
      editor.off("focus", handleFocus);
    };
  }, [editor, onFocusChange]);
  (0, import_react37.useEffect)(() => {
    if (debouncedState) {
      const { ui } = appStoreApi.getState().state;
      onChange(debouncedState.html, {
        field: {
          ...ui.field,
          metadata: { from: debouncedState.from, to: debouncedState.to }
        }
      });
    }
  }, [editor, debouncedState, onChange, appStoreApi, name]);
  (0, import_react37.useEffect)(() => {
    editor?.setEditable(editable);
  }, [editor, editable]);
  (0, import_react37.useEffect)(() => {
    if (!editor) return;
    if (isPending) {
      return;
    }
    const current = editor.getHTML();
    if (current === content) return;
    syncingRef.current = true;
    editor.commands.setContent(content, { emitUpdate: false });
    const { ui } = appStoreApi.getState().state;
    if (typeof ui.field.metadata?.from !== "undefined") {
      editor.commands.setTextSelection({
        from: ui.field.metadata.from,
        to: ui.field.metadata.to
      });
    }
    syncingRef.current = false;
  }, [content, editor, appStoreApi, isPending]);
  return editor;
}
var import_react36, import_react37, import_use_debounce;
var init_use_synced_editor = __esm({
  "components/RichTextEditor/lib/use-synced-editor.ts"() {
    "use strict";
    init_react_import();
    import_react36 = require("@tiptap/react");
    import_react37 = require("react");
    import_use_debounce = require("use-debounce");
    init_store2();
  }
});

// components/RichTextEditor/extension.ts
var import_core, import_extension_blockquote, import_extension_bold, import_extension_code, import_extension_code_block, import_extension_document, import_extension_hard_break, import_extension_heading, import_extension_horizontal_rule, import_extension_italic, import_extension_link, import_extension_list, import_extension_paragraph, import_extension_strike, import_extension_text, import_extension_text_align, import_extension_underline, defaultCredBuildRichTextOptions, CredBuildRichText;
var init_extension = __esm({
  "components/RichTextEditor/extension.ts"() {
    "use strict";
    init_react_import();
    import_core = require("@tiptap/core");
    import_extension_blockquote = require("@tiptap/extension-blockquote");
    import_extension_bold = require("@tiptap/extension-bold");
    import_extension_code = require("@tiptap/extension-code");
    import_extension_code_block = require("@tiptap/extension-code-block");
    import_extension_document = require("@tiptap/extension-document");
    import_extension_hard_break = require("@tiptap/extension-hard-break");
    import_extension_heading = require("@tiptap/extension-heading");
    import_extension_horizontal_rule = require("@tiptap/extension-horizontal-rule");
    import_extension_italic = require("@tiptap/extension-italic");
    import_extension_link = require("@tiptap/extension-link");
    import_extension_list = require("@tiptap/extension-list");
    import_extension_paragraph = require("@tiptap/extension-paragraph");
    import_extension_strike = require("@tiptap/extension-strike");
    import_extension_text = require("@tiptap/extension-text");
    import_extension_text_align = __toESM(require("@tiptap/extension-text-align"));
    import_extension_underline = require("@tiptap/extension-underline");
    defaultCredBuildRichTextOptions = {
      textAlign: {
        types: ["heading", "paragraph"]
      }
    };
    CredBuildRichText = import_core.Extension.create({
      name: "credbuildRichText",
      addExtensions() {
        const extensions = [];
        const options = {
          ...this.options,
          ...defaultCredBuildRichTextOptions
        };
        if (options.bold !== false) {
          extensions.push(import_extension_bold.Bold.configure(options.bold));
        }
        if (options.blockquote !== false) {
          extensions.push(import_extension_blockquote.Blockquote.configure(options.blockquote));
        }
        if (options.code !== false) {
          extensions.push(import_extension_code.Code.configure(options.code));
        }
        if (options.codeBlock !== false) {
          extensions.push(import_extension_code_block.CodeBlock.configure(options.codeBlock));
        }
        if (options.document !== false) {
          extensions.push(import_extension_document.Document.configure(options.document));
        }
        if (options.hardBreak !== false) {
          extensions.push(import_extension_hard_break.HardBreak.configure(options.hardBreak));
        }
        if (options.heading !== false) {
          extensions.push(import_extension_heading.Heading.configure(options.heading));
        }
        if (options.horizontalRule !== false) {
          extensions.push(import_extension_horizontal_rule.HorizontalRule.configure(options.horizontalRule));
        }
        if (options.italic !== false) {
          extensions.push(import_extension_italic.Italic.configure(options.italic));
        }
        if (options.listItem !== false) {
          extensions.push(import_extension_list.ListItem.configure(options.listItem));
          if (options.bulletList !== false) {
            extensions.push(import_extension_list.BulletList.configure(options.bulletList));
          }
          if (options.orderedList !== false) {
            extensions.push(import_extension_list.OrderedList.configure(options.orderedList));
          }
        }
        if (options.listKeymap !== false) {
          extensions.push(import_extension_list.ListKeymap.configure(options?.listKeymap));
        }
        if (options.link !== false) {
          extensions.push(import_extension_link.Link.configure(options?.link));
        }
        if (options.paragraph !== false) {
          extensions.push(import_extension_paragraph.Paragraph.configure(options.paragraph));
        }
        if (options.strike !== false) {
          extensions.push(import_extension_strike.Strike.configure(options.strike));
        }
        if (options.text !== false) {
          extensions.push(import_extension_text.Text.configure(options.text));
        }
        if (options.textAlign !== false) {
          extensions.push(import_extension_text_align.default.configure(options.textAlign));
        }
        if (options.underline !== false) {
          extensions.push(import_extension_underline.Underline.configure(options?.underline));
        }
        return extensions;
      }
    });
  }
});

// components/RichTextEditor/selector.ts
var defaultEditorState;
var init_selector = __esm({
  "components/RichTextEditor/selector.ts"() {
    "use strict";
    init_react_import();
    defaultEditorState = (ctx, readOnly) => {
      const editor = ctx.editor;
      if (!editor) return {};
      const canChain = () => editor.can().chain();
      return {
        isAlignLeft: editor.isActive({ textAlign: "left" }),
        canAlignLeft: !readOnly && canChain().setTextAlign?.("left").run(),
        isAlignCenter: editor.isActive({ textAlign: "center" }),
        canAlignCenter: !readOnly && canChain().setTextAlign?.("center").run(),
        isAlignRight: editor.isActive({ textAlign: "right" }),
        canAlignRight: !readOnly && canChain().setTextAlign?.("right").run(),
        isAlignJustify: editor.isActive({ textAlign: "justify" }),
        canAlignJustify: !readOnly && canChain().setTextAlign?.("justify").run(),
        isBold: editor.isActive("bold"),
        canBold: !readOnly && canChain().toggleBold?.().run(),
        isItalic: editor.isActive("italic"),
        canItalic: !readOnly && canChain().toggleItalic?.().run(),
        isUnderline: editor.isActive("underline"),
        canUnderline: !readOnly && canChain().toggleUnderline?.().run(),
        isStrike: editor.isActive("strike"),
        canStrike: !readOnly && canChain().toggleStrike?.().run(),
        isInlineCode: editor.isActive("code"),
        canInlineCode: !readOnly && canChain().toggleCode?.().run(),
        isBulletList: editor.isActive("bulletList"),
        canBulletList: !readOnly && canChain().toggleBulletList?.().run(),
        isOrderedList: editor.isActive("orderedList"),
        canOrderedList: !readOnly && canChain().toggleOrderedList?.().run(),
        isCodeBlock: editor.isActive("codeBlock"),
        canCodeBlock: !readOnly && canChain().toggleCodeBlock?.().run(),
        isBlockquote: editor.isActive("blockquote"),
        canBlockquote: !readOnly && canChain().toggleBlockquote?.().run(),
        canHorizontalRule: !readOnly && canChain().setHorizontalRule?.().run()
      };
    };
  }
});

// components/RichTextMenu/full.tsx
var full_exports = {};
__export(full_exports, {
  LoadedRichTextMenuFull: () => LoadedRichTextMenuFull
});
var import_react38, import_react39, import_jsx_runtime45, LoadedRichTextMenuFull;
var init_full = __esm({
  "components/RichTextMenu/full.tsx"() {
    "use strict";
    init_react_import();
    import_react38 = require("@tiptap/react");
    import_react39 = require("react");
    init_selector();
    init_inner();
    import_jsx_runtime45 = require("react/jsx-runtime");
    LoadedRichTextMenuFull = ({
      editor,
      field,
      readOnly,
      inline
    }) => {
      const { tiptap = {} } = field;
      const { selector } = tiptap;
      const resolvedSelector = (0, import_react39.useMemo)(() => {
        return (ctx) => ({
          ...defaultEditorState(ctx, readOnly),
          ...selector ? selector(ctx, readOnly) : {}
        });
      }, [selector, readOnly]);
      const editorState = (0, import_react38.useEditorState)({
        editor,
        selector: resolvedSelector
      });
      if (!editor || !editorState) {
        return null;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
        LoadedRichTextMenuInner,
        {
          editor,
          editorState,
          field,
          readOnly,
          inline
        }
      );
    };
  }
});

// components/RichTextMenu/index.tsx
var import_react40, import_jsx_runtime46, LoadedRichTextMenuFull2, LoadedRichTextMenu;
var init_RichTextMenu = __esm({
  "components/RichTextMenu/index.tsx"() {
    "use strict";
    init_react_import();
    import_react40 = require("react");
    init_inner();
    import_jsx_runtime46 = require("react/jsx-runtime");
    LoadedRichTextMenuFull2 = (0, import_react40.lazy)(
      () => Promise.resolve().then(() => (init_full(), full_exports)).then((m) => ({
        default: m.LoadedRichTextMenuFull
      }))
    );
    LoadedRichTextMenu = (props) => {
      return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react40.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(LoadedRichTextMenuInner, { ...props }), children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(LoadedRichTextMenuFull2, { ...props }) });
    };
  }
});

// components/RichTextEditor/components/Editor.tsx
var Editor_exports = {};
__export(Editor_exports, {
  Editor: () => Editor
});
var import_react41, import_react42, import_jsx_runtime47, Editor;
var init_Editor = __esm({
  "components/RichTextEditor/components/Editor.tsx"() {
    "use strict";
    init_react_import();
    import_react41 = require("react");
    init_use_synced_editor();
    init_extension();
    import_react42 = require("@tiptap/react");
    init_store2();
    init_RichTextMenu();
    init_EditorInner();
    import_jsx_runtime47 = require("react/jsx-runtime");
    Editor = (0, import_react41.memo)((props) => {
      const {
        onChange,
        content,
        readOnly = false,
        field,
        inline = false,
        onFocus,
        id,
        name
      } = props;
      const { tiptap = {}, options } = field;
      const { extensions = [] } = tiptap;
      const loadedExtensions = (0, import_react41.useMemo)(
        () => [CredBuildRichText.configure(options), ...extensions],
        [extensions, options]
      );
      const appStoreApi = useAppStoreApi();
      const focusName = `${name}${inline ? "::inline" : ""}`;
      const editor = useSyncedEditor({
        content,
        onChange,
        extensions: loadedExtensions,
        editable: !readOnly,
        name: focusName,
        onFocusChange: (editor2) => {
          if (editor2) {
            const s = appStoreApi.getState();
            appStoreApi.setState({
              currentRichText: {
                field,
                editor: editor2,
                id,
                inline
              },
              state: {
                ...s.state,
                ui: {
                  ...s.state.ui,
                  field: {
                    ...s.state.ui.field,
                    focus: focusName
                  }
                }
              }
            });
            onFocus?.(editor2);
          }
        }
      });
      const menuEditor = useAppStore((s) => {
        if (!inline && s.currentRichText?.id === id && s.currentRichText?.inlineComponentId) {
          return s.currentRichText.editor;
        }
        return editor;
      });
      if (!editor) return null;
      return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
        EditorInner,
        {
          ...props,
          editor,
          menu: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
            LoadedRichTextMenu,
            {
              field,
              editor: menuEditor,
              readOnly
            }
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react42.EditorContent, { editor, className: "rich-text" })
        }
      );
    });
    Editor.displayName = "Editor";
  }
});

// components/AutoField/fields/RichtextField/index.tsx
var import_react43, import_jsx_runtime48, Editor2, RichtextField;
var init_RichtextField = __esm({
  "components/AutoField/fields/RichtextField/index.tsx"() {
    "use strict";
    init_react_import();
    import_react43 = require("react");
    init_lucide_react();
    init_EditorFallback();
    init_use_deep_field();
    import_jsx_runtime48 = require("react/jsx-runtime");
    Editor2 = (0, import_react43.lazy)(
      () => Promise.resolve().then(() => (init_Editor(), Editor_exports)).then((m) => ({
        default: m.Editor
      }))
    );
    RichtextField = ({
      onChange,
      readOnly = false,
      id,
      name = id,
      label,
      labelIcon,
      Label: Label2,
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
      return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_jsx_runtime48.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
        Label2,
        {
          label: label || name,
          icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Type, { size: 16 }),
          readOnly,
          el: "div",
          children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react43.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(EditorFallback, { ...editorProps }), children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Editor2, { ...editorProps }) })
        }
      ) });
    };
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/AutoField/fields/ArrayField/styles.module.css/#css-module-data
var init_css_module_data13 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/AutoField/fields/ArrayField/styles.module.css/#css-module-data"() {
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/AutoField/fields/ArrayField/styles.module.css#css-module
var styles_module_default11;
var init_styles_module11 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/AutoField/fields/ArrayField/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data13();
    styles_module_default11 = { "ArrayField": "_ArrayField_1q029_5", "ArrayField--isDraggingFrom": "_ArrayField--isDraggingFrom_1q029_13", "ArrayField-addButton": "_ArrayField-addButton_1q029_18", "ArrayField--hasItems": "_ArrayField--hasItems_1q029_33", "ArrayField-inner": "_ArrayField-inner_1q029_59", "ArrayFieldItem": "_ArrayFieldItem_1q029_67", "ArrayFieldItem--isDragging": "_ArrayFieldItem--isDragging_1q029_78", "ArrayFieldItem--isExpanded": "_ArrayFieldItem--isExpanded_1q029_82", "ArrayFieldItem-summary": "_ArrayFieldItem-summary_1q029_97", "ArrayFieldItem--noFields": "_ArrayFieldItem--noFields_1q029_122", "ArrayField--addDisabled": "_ArrayField--addDisabled_1q029_131", "ArrayFieldItem-body": "_ArrayFieldItem-body_1q029_170", "ArrayFieldItem-fieldset": "_ArrayFieldItem-fieldset_1q029_179", "ArrayFieldItem-rhs": "_ArrayFieldItem-rhs_1q029_187", "ArrayFieldItem-actions": "_ArrayFieldItem-actions_1q029_193" };
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/DragIcon/styles.module.css/#css-module-data
var init_css_module_data14 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/DragIcon/styles.module.css/#css-module-data"() {
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/DragIcon/styles.module.css#css-module
var styles_module_default12;
var init_styles_module12 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/DragIcon/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data14();
    styles_module_default12 = { "DragIcon": "_DragIcon_ei1r9_1", "DragIcon--disabled": "_DragIcon--disabled_ei1r9_8" };
  }
});

// components/DragIcon/index.tsx
var import_jsx_runtime49, getClassName17, DragIcon;
var init_DragIcon = __esm({
  "components/DragIcon/index.tsx"() {
    "use strict";
    init_react_import();
    init_lib();
    init_lucide_react();
    init_styles_module12();
    import_jsx_runtime49 = require("react/jsx-runtime");
    getClassName17 = get_class_name_factory_default("DragIcon", styles_module_default12);
    DragIcon = ({ isDragDisabled }) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("div", { className: getClassName17({ disabled: isDragDisabled }), children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(GripVertical, { size: 12, strokeWidth: 2.5 }) });
  }
});

// lib/dnd/use-sensors.ts
var import_react44, import_react45, import_utilities, touchDefault, otherDefault, useSensors;
var init_use_sensors = __esm({
  "lib/dnd/use-sensors.ts"() {
    "use strict";
    init_react_import();
    import_react44 = require("react");
    import_react45 = require("@dnd-kit/react");
    import_utilities = require("@dnd-kit/dom/utilities");
    touchDefault = { delay: { value: 200, tolerance: 10 } };
    otherDefault = {
      delay: { value: 200, tolerance: 10 },
      distance: { value: 5 }
    };
    useSensors = ({
      other = otherDefault,
      mouse,
      touch = touchDefault
    } = {
      touch: touchDefault,
      other: otherDefault
    }) => {
      const [sensors] = (0, import_react44.useState)(() => [
        import_react45.PointerSensor.configure({
          activationConstraints(event, source) {
            const { pointerType, target } = event;
            if (pointerType === "mouse" && (0, import_utilities.isElement)(target) && (source.handle === target || source.handle?.contains(target))) {
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
  }
});

// lib/dnd/collision/collision-debug.ts
var DEBUG, debugElements, timeout, collisionDebug;
var init_collision_debug = __esm({
  "lib/dnd/collision/collision-debug.ts"() {
    "use strict";
    init_react_import();
    DEBUG = false;
    debugElements = {};
    collisionDebug = (a, b, id, color, label) => {
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
        const existingEl = debugElements[debugId];
        let line = debugElements[debugId]?.line;
        let text = debugElements[debugId]?.text;
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
  }
});

// lib/dnd/collision/directional/index.ts
var import_abstract, distanceChange, directionalCollision;
var init_directional = __esm({
  "lib/dnd/collision/directional/index.ts"() {
    "use strict";
    init_react_import();
    import_abstract = require("@dnd-kit/abstract");
    init_collision_debug();
    distanceChange = "increasing";
    directionalCollision = (input, previous) => {
      const { dragOperation, droppable } = input;
      const { shape: dropShape } = droppable;
      const { position } = dragOperation;
      const dragShape = dragOperation.shape?.current;
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
          type: import_abstract.CollisionType.Collision
        };
      }
      return null;
    };
  }
});

// lib/dnd/collision/dynamic/get-direction.ts
var getDirection;
var init_get_direction = __esm({
  "lib/dnd/collision/dynamic/get-direction.ts"() {
    "use strict";
    init_react_import();
    getDirection = (dragAxis, delta) => {
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
  }
});

// lib/dnd/collision/dynamic/get-midpoint-impact.ts
var getMidpointImpact;
var init_get_midpoint_impact = __esm({
  "lib/dnd/collision/dynamic/get-midpoint-impact.ts"() {
    "use strict";
    init_react_import();
    getMidpointImpact = (dragShape, dropShape, direction, offsetMultiplier = 0) => {
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
  }
});

// lib/dnd/collision/dynamic/track-movement-interval.ts
var import_geometry, INTERVAL_SENSITIVITY, intervalCache, trackMovementInterval;
var init_track_movement_interval = __esm({
  "lib/dnd/collision/dynamic/track-movement-interval.ts"() {
    "use strict";
    init_react_import();
    import_geometry = require("@dnd-kit/geometry");
    init_get_direction();
    INTERVAL_SENSITIVITY = 10;
    intervalCache = {
      current: { x: 0, y: 0 },
      delta: { x: 0, y: 0 },
      previous: { x: 0, y: 0 },
      direction: null
    };
    trackMovementInterval = (point, dragAxis = "dynamic") => {
      intervalCache.current = point;
      intervalCache.delta = {
        x: point.x - intervalCache.previous.x,
        y: point.y - intervalCache.previous.y
      };
      intervalCache.direction = getDirection(dragAxis, intervalCache.delta) || intervalCache.direction;
      if (Math.abs(intervalCache.delta.x) > INTERVAL_SENSITIVITY || Math.abs(intervalCache.delta.y) > INTERVAL_SENSITIVITY) {
        intervalCache.previous = import_geometry.Point.from(point);
      }
      return intervalCache;
    };
  }
});

// lib/dnd/collision/dynamic/store.ts
var import_vanilla, collisionStore;
var init_store3 = __esm({
  "lib/dnd/collision/dynamic/store.ts"() {
    "use strict";
    init_react_import();
    import_vanilla = require("zustand/vanilla");
    collisionStore = (0, import_vanilla.createStore)(() => ({
      fallbackEnabled: false
    }));
  }
});

// lib/dnd/collision/dynamic/index.ts
var import_abstract2, import_collision, flushNext, createDynamicCollisionDetector;
var init_dynamic = __esm({
  "lib/dnd/collision/dynamic/index.ts"() {
    "use strict";
    init_react_import();
    import_abstract2 = require("@dnd-kit/abstract");
    init_directional();
    init_get_direction();
    init_get_midpoint_impact();
    init_track_movement_interval();
    init_collision_debug();
    import_collision = require("@dnd-kit/collision");
    init_store3();
    flushNext = "";
    createDynamicCollisionDetector = (dragAxis, midpointOffset = 0.05) => ((input) => {
      const { dragOperation, droppable } = input;
      const { position } = dragOperation;
      const dragShape = dragOperation.shape?.current;
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
      if (dragOperation.source?.id === droppable.id) {
        const collision = directionalCollision(input, interval.previous);
        collisionDebug(dragCenter, dropCenter, droppable.id.toString(), "yellow");
        if (collision) {
          return {
            ...collision,
            priority: import_abstract2.CollisionPriority.Highest,
            data
          };
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
          priority: import_abstract2.CollisionPriority.High,
          type: import_abstract2.CollisionType.Collision
        };
        const shouldFlushId = flushNext === droppable.id;
        flushNext = "";
        return { ...collision, id: shouldFlushId ? "flush" : collision.id, data };
      }
      if (fallbackEnabled && dragOperation.source?.id !== droppable.id) {
        const xAxisIntersection = dropShape.boundingRectangle.right > dragShape.boundingRectangle.left && dropShape.boundingRectangle.left < dragShape.boundingRectangle.right;
        const yAxisIntersection = dropShape.boundingRectangle.bottom > dragShape.boundingRectangle.top && dropShape.boundingRectangle.top < dragShape.boundingRectangle.bottom;
        if (dragAxis === "y" && xAxisIntersection || yAxisIntersection) {
          const fallbackCollision = (0, import_collision.closestCorners)(input);
          if (fallbackCollision) {
            const direction = getDirection(dragAxis, {
              x: dragShape.center.x - (droppable.shape?.center.x || 0),
              y: dragShape.center.y - (droppable.shape?.center.y || 0)
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
              return {
                ...fallbackCollision,
                priority: import_abstract2.CollisionPriority.Low,
                data
              };
            }
            collisionDebug(
              dragCenter,
              dropCenter,
              droppable.id.toString(),
              "orange",
              direction || ""
            );
            return {
              ...fallbackCollision,
              priority: import_abstract2.CollisionPriority.Lowest,
              data
            };
          }
        }
      }
      collisionDebug(dragCenter, dropCenter, droppable.id.toString(), "hotpink");
      return null;
    });
  }
});

// components/Sortable/styles.css
var init_styles = __esm({
  "components/Sortable/styles.css"() {
  }
});

// components/Sortable/index.tsx
var import_react46, import_sortable, import_jsx_runtime50, SortableProvider, Sortable;
var init_Sortable = __esm({
  "components/Sortable/index.tsx"() {
    "use strict";
    init_react_import();
    import_react46 = require("@dnd-kit/react");
    init_use_sensors();
    init_dynamic();
    init_styles();
    import_sortable = require("@dnd-kit/react/sortable");
    import_jsx_runtime50 = require("react/jsx-runtime");
    SortableProvider = ({
      children,
      onDragStart,
      onDragEnd,
      onMove
    }) => {
      const sensors = useSensors({
        mouse: { distance: { value: 5 } }
      });
      return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
        import_react46.DragDropProvider,
        {
          sensors,
          onDragStart: (event) => onDragStart(event.operation.source?.id.toString() ?? ""),
          onDragOver: (event, manager) => {
            event.preventDefault();
            const { operation } = event;
            const { source, target } = operation;
            if (!source || !target) return;
            let sourceIndex = source.data.index;
            let targetIndex = target.data.index;
            const collisionData = manager.collisionObserver.collisions[0]?.data;
            if (sourceIndex !== targetIndex && source.id !== target.id) {
              const collisionPosition = collisionData?.direction === "up" ? "before" : "after";
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
    Sortable = ({
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
      } = (0, import_sortable.useSortable)({
        id,
        type,
        index,
        disabled,
        data: { index },
        collisionDetector: createDynamicCollisionDetector("y")
      });
      return children({ isDragging, isDropping, ref: sortableRef, handleRef });
    };
  }
});

// components/AutoField/subfield.tsx
var import_react47, import_jsx_runtime51, SubFieldInternal, SubField;
var init_subfield = __esm({
  "components/AutoField/subfield.tsx"() {
    "use strict";
    init_react_import();
    import_react47 = require("react");
    init_AutoFieldInternal();
    init_context();
    import_jsx_runtime51 = require("react/jsx-runtime");
    SubFieldInternal = ({
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
      const localIndexName = typeof index !== "undefined" ? `${localName}[${index}]` : localName ?? subName;
      const localWildcardName = typeof index !== "undefined" ? `${localName}[*]` : localName;
      const localSubPath = `${localIndexName}.${subName}`;
      const localWildcardSubPath = `${localWildcardName}.${subName}`;
      const { readOnlyFields } = useNestedFieldContext();
      const subReadOnly = forceReadOnly ? forceReadOnly : typeof readOnlyFields[subPath] !== "undefined" ? readOnlyFields[localSubPath] : readOnlyFields[localWildcardSubPath];
      const label = field.label || subName;
      return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
        NestedFieldProvider,
        {
          name: localIndexName,
          wildcardName: localWildcardName,
          subName,
          readOnlyFields,
          children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
            AutoFieldPrivate2,
            {
              name: subPath,
              label,
              id,
              readOnly: subReadOnly,
              field: {
                ...field,
                label
                // May be used by custom fields
              },
              onChange: (val, ui) => {
                onChange(val, ui, subName);
              }
            }
          )
        }
      );
    };
    SubField = (0, import_react47.memo)(SubFieldInternal);
  }
});

// lib/data/set-deep.ts
function setDeep(node, path, newVal) {
  const parts = path.split(".");
  const newNode = { ...node };
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
  return { ...node, ...newNode };
}
var init_set_deep = __esm({
  "lib/data/set-deep.ts"() {
    "use strict";
    init_react_import();
  }
});

// components/AutoField/fields/ArrayField/index.tsx
var ArrayField_exports = {};
__export(ArrayField_exports, {
  ArrayField: () => ArrayField
});
var import_react48, import_jsx_runtime52, getClassName18, getClassNameItem, ItemSummaryInner, ItemSummary, ArrayFieldItemInternal, ArrayFieldItem, ArrayField;
var init_ArrayField = __esm({
  "components/AutoField/fields/ArrayField/index.tsx"() {
    "use strict";
    init_react_import();
    init_get_class_name_factory();
    init_styles_module11();
    init_lucide_react();
    init_store();
    init_IconButton2();
    init_lib();
    import_react48 = require("react");
    init_DragIcon();
    init_store2();
    init_Sortable();
    init_context();
    init_map_fields();
    init_populate_ids();
    init_default_slots();
    init_get_deep();
    init_subfield();
    init_set_deep();
    import_jsx_runtime52 = require("react/jsx-runtime");
    getClassName18 = get_class_name_factory_default("ArrayField", styles_module_default11);
    getClassNameItem = get_class_name_factory_default("ArrayFieldItem", styles_module_default11);
    ItemSummaryInner = ({
      index,
      originalIndex,
      field,
      name
    }) => {
      const data = useFieldStore((s) => {
        const path = `${[name]}[${index}]`;
        return getDeep(s, path);
      });
      const itemSummary = (0, import_react48.useMemo)(() => {
        if (data && field.getItemSummary) {
          return field.getItemSummary(data, index);
        }
        return `Item #${originalIndex}`;
      }, [data, field, originalIndex, index]);
      return itemSummary;
    };
    ItemSummary = (0, import_react48.memo)(ItemSummaryInner);
    ArrayFieldItemInternal = ({
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
        return s.state.ui.arrayState[arrayId]?.openId === id;
      });
      const canEdit = useAppStore(
        (s) => s.permissions.getPermissions({ item: s.selectedItem }).edit
      );
      const hasVisibleFields = (0, import_react48.useMemo)(() => {
        if (!field.arrayFields) {
          return false;
        }
        return Object.values(field.arrayFields).some(
          (subField) => subField.type !== "slot" && subField.visible !== false
        );
      }, [field.arrayFields]);
      return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Sortable, { id, index: dragIndex, disabled: readOnly, children: ({ isDragging, ref, handleRef }) => /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
        "div",
        {
          ref,
          className: getClassNameItem({
            isExpanded: isExpanded && hasVisibleFields,
            isDragging,
            noFields: !hasVisibleFields
          }),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
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
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                    ItemSummary,
                    {
                      index,
                      originalIndex,
                      field,
                      name
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: getClassNameItem("rhs"), children: [
                    !readOnly && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: getClassNameItem("actions"), children: actions }),
                    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(DragIcon, {}) })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: getClassNameItem("body"), children: isExpanded && hasVisibleFields && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("fieldset", { className: getClassNameItem("fieldset"), children: Object.keys(field.arrayFields).map((subName) => {
              const subField = field.arrayFields[subName];
              return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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
    ArrayFieldItem = (0, import_react48.memo)(ArrayFieldItemInternal);
    ArrayField = ({
      field,
      onChange,
      id,
      name = id,
      label,
      labelIcon,
      readOnly,
      Label: Label2 = (props) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { ...props })
    }) => {
      const setUi = useAppStore((s) => s.setUi);
      const appStoreApi = useAppStoreApi();
      const fieldStore = useFieldStoreApi();
      const { localName = name } = useNestedFieldContext();
      const getValue = (0, import_react48.useCallback)(() => getDeep(fieldStore.getState(), name) ?? [], [fieldStore, name]);
      const getArrayState = (0, import_react48.useCallback)(() => {
        const { state } = appStoreApi.getState();
        const thisState = state.ui.arrayState[id];
        if (thisState?.items?.length) return thisState;
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
      const defaultArrayState = (0, import_react48.useMemo)(getArrayState, [getArrayState]);
      const mirror = useAppStore((s) => {
        const thisArrayState = s.state.ui.arrayState[id];
        return thisArrayState ?? defaultArrayState;
      });
      const appStore = useAppStoreApi();
      const mapArrayStateToUi = (0, import_react48.useCallback)(
        (partialArrayState) => {
          const state = appStore.getState().state;
          return {
            arrayState: {
              ...state.ui.arrayState,
              [id]: { ...getArrayState(), ...partialArrayState }
            }
          };
        },
        [appStore, id, getArrayState]
      );
      const getHighestIndex = (0, import_react48.useCallback)(() => {
        return getArrayState().items.reduce(
          (acc, item) => item._originalIndex > acc ? item._originalIndex : acc,
          -1
        );
      }, [getArrayState]);
      const regenerateArrayState = (0, import_react48.useCallback)((value) => {
        let highestIndex = getHighestIndex();
        const arrayState = getArrayState();
        const newItems = Array.from(value || []).map((item, idx) => {
          const arrayStateItem = arrayState.items[idx];
          const newItem = {
            _originalIndex: arrayStateItem?._originalIndex ?? highestIndex + 1,
            _currentIndex: arrayStateItem?._currentIndex ?? idx,
            _arrayId: arrayState.items[idx]?._arrayId || `${id}-${highestIndex + 1}`
          };
          if (newItem._originalIndex > highestIndex) {
            highestIndex = newItem._originalIndex;
          }
          return newItem;
        });
        return { ...arrayState, items: newItems };
      }, [getArrayState, getHighestIndex, id]);
      const [draggedItem, setDraggedItem] = (0, import_react48.useState)("");
      const isDraggingAny = !!draggedItem;
      const valueRef = (0, import_react48.useRef)([]);
      (0, import_react48.useEffect)(() => {
        valueRef.current = getValue();
      }, [getValue]);
      const uniqifyItem = (0, import_react48.useCallback)(
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
      const syncCurrentIndexes = (0, import_react48.useCallback)(() => {
        const arrayState = getArrayState();
        const newArrayStateItems = arrayState.items.map((item, index) => ({
          ...item,
          _currentIndex: index
        }));
        const state = appStore.getState().state;
        const newUi = {
          arrayState: {
            ...state.ui.arrayState,
            [id]: { ...arrayState, items: newArrayStateItems }
          }
        };
        setUi(newUi, false);
      }, [appStore, id, getArrayState, setUi]);
      const updateValue = (0, import_react48.useCallback)(
        (newValue) => {
          const newArrayState = regenerateArrayState(newValue);
          setUi(mapArrayStateToUi(newArrayState), false);
          onChange(newValue);
        },
        [regenerateArrayState, setUi, mapArrayStateToUi, onChange]
      );
      (0, import_react48.useEffect)(() => {
        const newArrayState = regenerateArrayState(getValue());
        setUi(mapArrayStateToUi(newArrayState), false);
      }, [numItems, getValue, mapArrayStateToUi, regenerateArrayState, setUi]);
      if (field.type !== "array" || !field.arrayFields) {
        return null;
      }
      const addDisabled = field.max !== void 0 && mirror?.items.length >= field.max || readOnly;
      return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
        Label2,
        {
          label: label || name,
          icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(List, { size: 16 }),
          el: "div",
          readOnly,
          children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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
                  arrayState: {
                    ...state.ui.arrayState,
                    [id]: { ...arrayState, items: newArrayStateItems }
                  }
                };
                setUi(newUi, false);
                valueRef.current = newValue;
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
                "div",
                {
                  className: getClassName18({
                    hasItems: numItems > 0,
                    addDisabled
                  }),
                  children: [
                    mirror.items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: getClassName18("inner"), "data-dnd-container": true, children: mirror.items.map((item, index) => {
                      const {
                        _arrayId = `${id}-${index}`,
                        _originalIndex = index,
                        _currentIndex = index
                      } = item;
                      return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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
                              replace(value, index, {
                                ...data,
                                [subName]: val
                              }),
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
                          actions: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_jsx_runtime52.Fragment, { children: [
                            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: getClassNameItem("action"), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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
                                children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Copy, { size: 16 })
                              }
                            ) }),
                            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: getClassNameItem("action"), children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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
                                children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Trash, { size: 16 })
                              }
                            ) })
                          ] })
                        },
                        _arrayId
                      );
                    }) }),
                    !addDisabled && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
                      "button",
                      {
                        type: "button",
                        className: getClassName18("addButton"),
                        onClick: () => {
                          if (isDraggingAny) return;
                          const value = getValue();
                          const existingValue = value || [];
                          const defaultProps = typeof field.defaultItemProps === "function" ? field.defaultItemProps(existingValue.length) : field.defaultItemProps ?? {};
                          const newItem = defaultSlots(
                            uniqifyItem(defaultProps),
                            field.arrayFields
                          );
                          const newValue = [...existingValue, newItem];
                          updateValue(newValue);
                        },
                        children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Plus, { size: 21 })
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
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/AutoField/fields/ObjectField/styles.module.css/#css-module-data
var init_css_module_data15 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/AutoField/fields/ObjectField/styles.module.css/#css-module-data"() {
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/AutoField/fields/ObjectField/styles.module.css#css-module
var styles_module_default13;
var init_styles_module13 = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/AutoField/fields/ObjectField/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data15();
    styles_module_default13 = { "ObjectField": "_ObjectField_b2xjm_5", "ObjectField-fieldset": "_ObjectField-fieldset_b2xjm_13" };
  }
});

// components/AutoField/fields/ObjectField/index.tsx
var ObjectField_exports = {};
__export(ObjectField_exports, {
  ObjectField: () => ObjectField
});
var import_jsx_runtime53, getClassName19, ObjectField;
var init_ObjectField = __esm({
  "components/AutoField/fields/ObjectField/index.tsx"() {
    "use strict";
    init_react_import();
    init_get_class_name_factory();
    init_styles_module13();
    init_lucide_react();
    init_context();
    init_store2();
    init_get_deep();
    init_subfield();
    init_store();
    import_jsx_runtime53 = require("react/jsx-runtime");
    getClassName19 = get_class_name_factory_default("ObjectField", styles_module_default13);
    ObjectField = ({
      field,
      onChange,
      id,
      name = id,
      label,
      labelIcon,
      Label: Label2,
      readOnly
    }) => {
      const { localName = name } = useNestedFieldContext();
      const fieldStore = useFieldStoreApi();
      const canEdit = useAppStore(
        (s) => s.permissions.getPermissions({ item: s.selectedItem }).edit
      );
      const getValue = () => getDeep(fieldStore.getState(), name) ?? {};
      if (field.type !== "object" || !field.objectFields) {
        return null;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
        Label2,
        {
          label: label || name,
          icon: labelIcon || /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(EllipsisVertical, { size: 16 }),
          el: "div",
          readOnly,
          children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: getClassName19(), children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("fieldset", { className: getClassName19("fieldset"), children: Object.keys(field.objectFields).map((subName) => {
            const subField = field.objectFields[subName];
            const subPath = `${localName}.${subName}`;
            return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
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
                  onChange({ ...value, [subName2]: subValue }, ui);
                }
              },
              subPath
            );
          }) }) })
        }
      );
    };
  }
});

// components/AutoField/AutoFieldInternal.tsx
function AutoFieldInternal(props) {
  const dispatch = useAppStore((s) => s.dispatch);
  const overrides = useAppStore((s) => s.overrides);
  const readOnly = useAppStore((0, import_shallow3.useShallow)((s) => s.selectedItem?.readOnly));
  const nestedFieldContext = (0, import_react49.useContext)(NestedFieldContext);
  const { id, Label: Label2 = FieldLabelInternal } = props;
  const field = props.field;
  const label = field.label;
  const labelIcon = field.labelIcon;
  const defaultId = useSafeId();
  const resolvedId = id || defaultId;
  const render = (0, import_react49.useMemo)(
    () => ({
      ...overrides.fieldTypes,
      custom: overrides.fieldTypes?.custom,
      array: overrides.fieldTypes?.array || defaultFields.array,
      external: overrides.fieldTypes?.external || defaultFields.external,
      object: overrides.fieldTypes?.object || defaultFields.object,
      select: overrides.fieldTypes?.select || defaultFields.select,
      textarea: overrides.fieldTypes?.textarea || defaultFields.textarea,
      radio: overrides.fieldTypes?.radio || defaultFields.radio,
      text: overrides.fieldTypes?.text || defaultFields.text,
      number: overrides.fieldTypes?.number || defaultFields.number,
      richtext: overrides.fieldTypes?.richtext || defaultFields.richtext
    }),
    [overrides]
  );
  const fieldValue = useFieldStore((s) => {
    if (field.type === "custom" || overrides.fieldTypes?.[field.type]) {
      return getDeep(s, props.name ?? resolvedId);
    }
  });
  const mergedProps = (0, import_react49.useMemo)(
    () => ({
      ...props,
      field,
      label,
      labelIcon,
      Label: Label2,
      id: resolvedId,
      value: fieldValue
    }),
    [props, field, label, labelIcon, Label2, resolvedId, fieldValue]
  );
  const onFocus = (0, import_react49.useCallback)(
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
  const onBlur = (0, import_react49.useCallback)((e) => {
    if ("name" in e.target) {
      dispatch({
        type: "setUi",
        ui: {
          field: { focus: null }
        }
      });
    }
  }, [dispatch]);
  let Children = (0, import_react49.useMemo)(() => {
    if (field.type !== "custom" && field.type !== "slot") {
      return defaultFields[field.type];
    }
    return (_props) => null;
  }, [field.type]);
  const fieldKey = field.type === "custom" ? field.key : void 0;
  const fieldRender = field.render;
  let FieldComponent = (0, import_react49.useMemo)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
    NestedFieldContext.Provider,
    {
      value: {
        readOnlyFields: nestedFieldContext.readOnlyFields || readOnly || {},
        localName: nestedFieldContext.localName ?? mergedProps.name
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
        "div",
        {
          className: getClassNameWrapper(),
          onFocus,
          onBlur,
          onClick: (e) => {
            e.stopPropagation();
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_react49.Suspense, { fallback: null, children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(FieldComponent, { ...mergedProps, children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(Children, { ...mergedProps }) }) })
        }
      )
    }
  );
}
function AutoFieldPrivate2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(AutoFieldInternal, { ...props });
}
var import_react49, import_shallow3, import_react50, import_jsx_runtime54, ArrayField2, ObjectField2, getClassNameWrapper, defaultFields;
var init_AutoFieldInternal = __esm({
  "components/AutoField/AutoFieldInternal.tsx"() {
    "use strict";
    init_react_import();
    import_react49 = require("react");
    init_store2();
    import_shallow3 = require("zustand/react/shallow");
    init_get_deep();
    init_FieldLabel();
    init_store();
    init_context();
    import_react50 = require("react");
    init_RadioField();
    init_SelectField();
    init_ExternalField();
    init_DefaultField();
    init_TextareaField();
    init_RichtextField();
    init_use_safe_id();
    init_get_class_name_factory();
    init_styles_module2();
    import_jsx_runtime54 = require("react/jsx-runtime");
    ArrayField2 = (0, import_react50.lazy)(() => Promise.resolve().then(() => (init_ArrayField(), ArrayField_exports)).then((m) => ({ default: m.ArrayField })));
    ObjectField2 = (0, import_react50.lazy)(() => Promise.resolve().then(() => (init_ObjectField(), ObjectField_exports)).then((m) => ({ default: m.ObjectField })));
    getClassNameWrapper = get_class_name_factory_default("InputWrapper", styles_module_default2);
    defaultFields = {
      array: ArrayField2,
      external: ExternalField,
      object: ObjectField2,
      select: SelectField,
      textarea: TextareaField,
      radio: RadioField,
      text: DefaultField,
      number: DefaultField,
      richtext: RichtextField
    };
  }
});

// components/AutoField/index.tsx
function AutoFieldPublicInternal({ value, ...props }) {
  const DefaultLabel = (0, import_react51.useMemo)(() => {
    const DefaultLabel2 = (labelProps) => /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
      "div",
      {
        ...labelProps,
        className: getClassName20({ readOnly: props.readOnly })
      }
    );
    return DefaultLabel2;
  }, [props.readOnly]);
  const fieldStore = useFieldStoreApi();
  const { id: propsId, onChange: propsOnChange } = props;
  const onChange = (0, import_react51.useCallback)(
    (value2) => {
      if (!propsId) return;
      fieldStore.setState({ [propsId]: value2 });
      propsOnChange(value2);
    },
    [fieldStore, propsOnChange, propsId]
  );
  (0, import_react51.useEffect)(() => {
    if (!props.id) return;
    fieldStore.setState({ [props.id]: value });
  }, [props.id, value, fieldStore]);
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
    AutoFieldInternal,
    {
      ...props,
      onChange,
      Label: DefaultLabel
    }
  );
}
function AutoField(props) {
  const id = useSafeId();
  if (props.field.type === "slot") {
    return null;
  }
  const providerValue = (0, import_react51.useMemo)(() => ({ [id]: props.value }), [id, props.value]);
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(fieldContextStore.Provider, { value: providerValue, children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(AutoFieldPublicInternal, { ...props, id }) });
}
var import_react51, import_jsx_runtime55, getClassName20, getClassNameWrapper2;
var init_AutoField = __esm({
  "components/AutoField/index.tsx"() {
    "use strict";
    init_react_import();
    init_get_class_name_factory();
    init_styles_module2();
    import_react51 = require("react");
    init_use_safe_id();
    init_store();
    init_FieldLabel();
    init_AutoFieldInternal();
    import_jsx_runtime55 = require("react/jsx-runtime");
    getClassName20 = get_class_name_factory_default("Input", styles_module_default2);
    getClassNameWrapper2 = get_class_name_factory_default("InputWrapper", styles_module_default2);
  }
});

// components/RichTextEditor/components/Render.tsx
var Render_exports = {};
__export(Render_exports, {
  RichTextRender: () => RichTextRender
});
function RichTextRender({
  content,
  field
}) {
  const { tiptap = {}, options } = field;
  const { extensions = [] } = tiptap;
  const loadedExtensions = (0, import_react65.useMemo)(
    () => [CredBuildRichText.configure(options), ...extensions],
    [extensions, options]
  );
  const normalized = (0, import_react65.useMemo)(() => {
    if (typeof content === "object" && content?.type === "doc") {
      return content;
    }
    if (typeof content === "string") {
      const isHtml = /<\/?[a-z][\s\S]*>/i.test(content);
      if (isHtml) {
        return (0, import_html.generateJSON)(content, loadedExtensions);
      }
      return {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: content }] }
        ]
      };
    }
    return { type: "doc", content: [] };
  }, [content, loadedExtensions]);
  const html = (0, import_react65.useMemo)(() => {
    return (0, import_html.generateHTML)(normalized, loadedExtensions);
  }, [normalized, loadedExtensions]);
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: getClassName24(), children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "rich-text", dangerouslySetInnerHTML: { __html: html } }) });
}
var import_html, import_react65, import_jsx_runtime60, getClassName24;
var init_Render = __esm({
  "components/RichTextEditor/components/Render.tsx"() {
    "use strict";
    init_react_import();
    import_html = require("@tiptap/html");
    import_react65 = require("react");
    init_get_class_name_factory();
    init_styles_module10();
    init_extension();
    import_jsx_runtime60 = require("react/jsx-runtime");
    getClassName24 = get_class_name_factory_default("RichTextEditor", styles_module_default10);
  }
});

// bundle/index.ts
var index_exports = {};
__export(index_exports, {
  Action: () => Action,
  ActionBar: () => ActionBar,
  AutoField: () => AutoField,
  Button: () => Button,
  CredBuild: () => CredBuild,
  Drawer: () => Drawer,
  DropZone: () => DropZone,
  FieldLabel: () => FieldLabel,
  Group: () => Group,
  IconButton: () => IconButton,
  Label: () => Label,
  Render: () => Render,
  RichTextMenu: () => RichTextMenu,
  Separator: () => Separator,
  blocksPlugin: () => blocksPlugin,
  createUseCredBuild: () => createUseCredBuild,
  fieldsPlugin: () => fieldsPlugin,
  legacySideBarPlugin: () => legacySideBarPlugin,
  migrate: () => migrate,
  outlinePlugin: () => outlinePlugin,
  overrideKeys: () => overrideKeys,
  registerOverlayPortal: () => registerOverlayPortal,
  resolveAllData: () => resolveAllData,
  setDeep: () => setDeep,
  transformProps: () => transformProps,
  useCredBuild: () => useCredBuild,
  useGetCredBuild: () => useGetCredBuild,
  walkTree: () => walkTree
});
module.exports = __toCommonJS(index_exports);
init_react_import();

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

// bundle/core.ts
init_ActionBar();
init_AutoField();
init_Button2();

// components/Drawer/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/Credibuild/components/Drawer/styles.module.css#css-module
init_react_import();
var styles_module_default14 = { "Drawer": "_Drawer_e1509_1", "Drawer-draggable": "_Drawer-draggable_e1509_7", "Drawer-draggableBg": "_Drawer-draggableBg_e1509_11", "DrawerItem-draggable": "_DrawerItem-draggable_e1509_21", "DrawerItem--disabled": "_DrawerItem--disabled_e1509_34", "DrawerItem": "_DrawerItem_e1509_21", "Drawer--isDraggingFrom": "_Drawer--isDraggingFrom_e1509_43", "DrawerItem-default": "_DrawerItem-default_e1509_44", "DrawerItem-name": "_DrawerItem-name_e1509_61" };

// components/Drawer/index.tsx
init_get_class_name_factory();
init_DragIcon();
var import_react53 = require("react");
init_generate_id();

// components/DragDropContext/context.tsx
init_react_import();
var import_react52 = require("react");
var dragListenerContext = (0, import_react52.createContext)({
  dragListeners: {}
});
function useDragListener(type, fn, deps = []) {
  const { setDragListeners } = (0, import_react52.useContext)(dragListenerContext);
  const id = (0, import_react52.useId)();
  const fnRef = (0, import_react52.useRef)(fn);
  (0, import_react52.useEffect)(() => {
    fnRef.current = fn;
  }, [fn]);
  (0, import_react52.useEffect)(() => {
    if (setDragListeners) {
      const wrappedFn = ((...args) => {
        return fnRef.current(...args);
      });
      setDragListeners((old) => ({
        ...old,
        [type]: [...old[type] || [], { id, fn: wrappedFn }]
      }));
      return () => {
        setDragListeners((old) => ({
          ...old,
          [type]: (old[type] || []).filter((item) => item.id !== id)
        }));
      };
    }
  }, [type, setDragListeners, id]);
}

// components/Drawer/index.tsx
init_use_safe_id();
var import_react54 = require("@dnd-kit/react");
var import_jsx_runtime56 = require("react/jsx-runtime");
var getClassName21 = get_class_name_factory_default("Drawer", styles_module_default14);
var getClassNameItem2 = get_class_name_factory_default("DrawerItem", styles_module_default14);
var DrawerItemInner = ({
  children,
  name,
  label,
  dragRef,
  isDragDisabled
}) => {
  const CustomInner = (0, import_react53.useMemo)(
    () => children || (({ children: children2 }) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: getClassNameItem2("default"), children: children2 })),
    [children]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
    "div",
    {
      className: getClassNameItem2({ disabled: isDragDisabled }),
      ref: dragRef,
      onMouseDown: (e) => e.preventDefault(),
      "data-testid": dragRef ? `drawer-item:${name}` : "",
      "data-credbuild-drawer-item": true,
      children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(CustomInner, { name, children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: getClassNameItem2("draggableWrapper"), children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: getClassNameItem2("draggable"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: getClassNameItem2("name"), children: label ?? name }),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: getClassNameItem2("icon"), children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(DragIcon, {}) })
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
  const { ref } = (0, import_react54.useDraggable)({
    id,
    data: { componentType: name },
    disabled: isDragDisabled,
    type: "drawer"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: getClassName21("draggable"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: getClassName21("draggableBg"), children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(DrawerItemInner, { name, label, children }) }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: getClassName21("draggableFg"), children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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
  const [dynamicId, setDynamicId] = (0, import_react53.useState)(generateId(resolvedId));
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
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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
  const { ref } = (0, import_react54.useDroppable)({
    id,
    type: "void",
    collisionPriority: 0
    // Never collide with this, but we use it so NestedDroppablePlugin respects the Drawer
  });
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
    "div",
    {
      className: getClassName21(),
      ref,
      "data-credbuild-dnd": id,
      "data-credbuild-drawer": true,
      "data-credbuild-dnd-void": true,
      children
    }
  );
};
Drawer.Item = DrawerItem;

// components/DropZone/index.tsx
init_react_import();
var import_react73 = require("react");

// components/DraggableComponent/index.tsx
init_react_import();
var import_react57 = require("react");

// css-module:/home/crediblemark/Project/Credibuild/components/DraggableComponent/styles.module.css#css-module
init_react_import();
var styles_module_default15 = { "DraggableComponent": "_DraggableComponent_yrtpz_1", "DraggableComponent-overlayWrapper": "_DraggableComponent-overlayWrapper_yrtpz_12", "DraggableComponent-overlay": "_DraggableComponent-overlay_yrtpz_12", "DraggableComponent-loadingOverlay": "_DraggableComponent-loadingOverlay_yrtpz_34", "DraggableComponent--hover": "_DraggableComponent--hover_yrtpz_50", "DraggableComponent--isSelected": "_DraggableComponent--isSelected_yrtpz_57", "DraggableComponent-actionsOverlay": "_DraggableComponent-actionsOverlay_yrtpz_71", "DraggableComponent-actions": "_DraggableComponent-actions_yrtpz_71" };

// components/DraggableComponent/index.tsx
init_get_class_name_factory();
init_lucide_react();
init_store2();
init_Loader();
init_ActionBar();
var import_react_dom2 = require("react-dom");

// components/DropZone/context.tsx
init_react_import();
var import_react55 = require("react");
init_store2();
var import_zustand5 = require("zustand");
var import_jsx_runtime57 = require("react/jsx-runtime");
var dropZoneContext = (0, import_react55.createContext)(null);
var ZoneStoreContext = (0, import_react55.createContext)(
  (0, import_zustand5.createStore)(() => ({
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
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(ZoneStoreContext.Provider, { value: store, children });
};
var DropZoneProvider = ({
  children,
  value
}) => {
  const dispatch = useAppStore((s) => s.dispatch);
  const registerZone = (0, import_react55.useCallback)(
    (zoneCompound) => {
      dispatch({
        type: "registerZone",
        zone: zoneCompound
      });
    },
    [dispatch]
  );
  const memoValue = (0, import_react55.useMemo)(
    () => ({
      registerZone,
      ...value
    }),
    [value, registerZone]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_jsx_runtime57.Fragment, { children: memoValue && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(dropZoneContext.Provider, { value: memoValue, children }) });
};

// components/DraggableComponent/index.tsx
init_dynamic();

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

// components/DraggableComponent/index.tsx
var import_shallow4 = require("zustand/react/shallow");
init_get_item();
var import_sortable2 = require("@dnd-kit/react/sortable");
init_use_context_store();

// lib/dnd/use-on-drag-finished.ts
init_react_import();
var import_react56 = require("react");
init_store2();
var useOnDragFinished = (cb, _deps = []) => {
  const appStore = useAppStoreApi();
  return (0, import_react56.useCallback)(() => {
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

// components/DraggableComponent/index.tsx
init_RichTextMenu();

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
var import_jsx_runtime58 = require("react/jsx-runtime");
var getClassName22 = get_class_name_factory_default("DraggableComponent", styles_module_default15);
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
}) => /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(ActionBar, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(ActionBar.Group, { children: [
    parentAction,
    label && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(ActionBar.Label, { label })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(ActionBar.Group, { children })
] });
var DefaultOverlay = ({
  children
}) => /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_jsx_runtime58.Fragment, { children });
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
    (s) => s.selectedItem?.props.id === id ? s.zoomConfig.zoom : 1
  );
  const _experimentalFullScreenCanvas = useAppStore(
    (s) => s._experimentalFullScreenCanvas
  );
  const overrides = useAppStore((s) => s.overrides);
  const dispatch = useAppStore((s) => s.dispatch);
  const iframe = useAppStore((s) => s.iframe);
  const lastMeasureRef = (0, import_react57.useRef)(0);
  const ctx = (0, import_react57.useContext)(dropZoneContext);
  const [localZones, setLocalZones] = (0, import_react57.useState)({});
  const registerLocalZone = (0, import_react57.useCallback)(
    (zoneCompound2, active) => {
      ctx?.registerLocalZone?.(zoneCompound2, active);
      setLocalZones((obj) => ({
        ...obj,
        [zoneCompound2]: active
      }));
    },
    [setLocalZones, ctx]
  );
  const unregisterLocalZone = (0, import_react57.useCallback)(
    (zoneCompound2) => {
      ctx?.unregisterLocalZone?.(zoneCompound2);
      setLocalZones((obj) => {
        const newLocalZones = {
          ...obj
        };
        delete newLocalZones[zoneCompound2];
        return newLocalZones;
      });
    },
    [setLocalZones, ctx]
  );
  const containsActiveZone = Object.values(localZones).filter(Boolean).length > 0;
  const path = useAppStore((0, import_shallow4.useShallow)((s) => s.state.indexes.nodes[id]?.path));
  const permissions = useAppStore(
    (0, import_shallow4.useShallow)((s) => {
      const item = getItem({ index, zone: zoneCompound }, s.state);
      return s.permissions.getPermissions({ item });
    })
  );
  const zoneStore = (0, import_react57.useContext)(ZoneStoreContext);
  const [dragAxis, setDragAxis] = (0, import_react57.useState)(userDragAxis || autoDragAxis);
  const dynamicCollisionDetector = (0, import_react57.useMemo)(
    () => createDynamicCollisionDetector(dragAxis),
    [dragAxis]
  );
  const {
    ref: sortableRef,
    isDragging: thisIsDragging,
    sortable
  } = (0, import_sortable2.useSortable)({
    id,
    index,
    group: zoneCompound,
    type: "component",
    data: {
      areaId: ctx?.areaId,
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
  (0, import_react57.useEffect)(() => {
    const isEnabled = zoneStore.getState().enabledIndex[zoneCompound];
    sortable.droppable.disabled = !isEnabled;
    sortable.draggable.disabled = !permissions.drag;
    const cleanup = zoneStore.subscribe((s) => {
      sortable.droppable.disabled = !s.enabledIndex[zoneCompound];
    });
    if (ref.current && !permissions.drag) {
      ref.current.setAttribute("data-credbuild-disabled", "");
      return () => {
        ref.current?.removeAttribute("data-credbuild-disabled");
        cleanup();
      };
    }
    return cleanup;
  }, [permissions.drag, zoneCompound, sortable.draggable, sortable.droppable, zoneStore]);
  const [, setRerender] = (0, import_react57.useState)(0);
  const ref = (0, import_react57.useRef)(null);
  const refSetter = (0, import_react57.useCallback)(
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
  const [portalEl, setPortalEl] = (0, import_react57.useState)();
  (0, import_react57.useEffect)(() => {
    setPortalEl(
      iframe.enabled ? ref.current?.ownerDocument.body : ref.current?.closest("[data-credbuild-preview]") ?? document.body
    );
  }, [iframe.enabled]);
  const getStyle = (0, import_react57.useCallback)(() => {
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
    const portalContainerRect = portalContainerEl?.getBoundingClientRect();
    const portalScroll = portalContainerEl ? getDeepScrollPosition(portalContainerEl) : { x: 0, y: 0 };
    const deepScrollPosition = targetIsFixed ? { x: 0, y: 0 } : getDeepScrollPosition(el);
    const scroll = targetIsFixed ? { x: 0, y: 0 } : {
      x: deepScrollPosition.x - portalScroll.x - (portalContainerRect?.left ?? 0),
      y: deepScrollPosition.y - portalScroll.y - (portalContainerRect?.top ?? 0)
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
  const [style, setStyle] = (0, import_react57.useState)();
  const lastRectRef = (0, import_react57.useRef)(null);
  const syncRafRef = (0, import_react57.useRef)(null);
  const sync = (0, import_react57.useCallback)(() => {
    setStyle(getStyle());
    if (itemRef) {
      assignRefs([itemRef], ref.current);
    }
  }, [getStyle, itemRef]);
  const scheduleSync = (0, import_react57.useCallback)(() => {
    if (syncRafRef.current != null) return;
    syncRafRef.current = requestAnimationFrame(() => {
      syncRafRef.current = null;
      sync();
    });
  }, [sync]);
  (0, import_react57.useEffect)(() => {
    return () => {
      if (syncRafRef.current != null) {
        cancelAnimationFrame(syncRafRef.current);
        syncRafRef.current = null;
      }
    };
  }, []);
  (0, import_react57.useEffect)(() => {
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
  const hideOverlay = (0, import_react57.useCallback)(() => {
    setIsVisible(false);
  }, []);
  const showOverlay = (0, import_react57.useCallback)(() => {
    setIsVisible(true);
  }, []);
  const nodeHandleRef = (0, import_react57.useRef)({
    sync: () => null,
    hideOverlay: () => null,
    showOverlay: () => null
  });
  (0, import_react57.useLayoutEffect)(() => {
    nodeHandleRef.current.sync = sync;
    nodeHandleRef.current.hideOverlay = hideOverlay;
    nodeHandleRef.current.showOverlay = showOverlay;
  }, [hideOverlay, showOverlay, sync]);
  (0, import_react57.useEffect)(() => {
    registerNode(id, nodeHandleRef.current);
    return () => {
      unregisterNode(id);
    };
  }, [id, registerNode, unregisterNode]);
  const CustomActionBar = (0, import_react57.useMemo)(
    () => overrides.actionBar || DefaultActionBar,
    [overrides.actionBar]
  );
  const CustomOverlay = (0, import_react57.useMemo)(
    () => overrides.componentOverlay || DefaultOverlay,
    [overrides.componentOverlay]
  );
  const onClick = (0, import_react57.useCallback)(
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
  const onSelectParent = (0, import_react57.useCallback)(() => {
    const { nodes, zones } = appStore.getState().state.indexes;
    const node = nodes[id];
    const parentNode = node?.parentId ? nodes[node?.parentId] : null;
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
  const onDuplicate = (0, import_react57.useCallback)(() => {
    dispatch({
      type: "duplicate",
      sourceIndex: index,
      sourceZone: zoneCompound
    });
  }, [index, zoneCompound, dispatch]);
  const onDelete = (0, import_react57.useCallback)(() => {
    dispatch({
      type: "remove",
      index,
      zone: zoneCompound
    });
  }, [index, zoneCompound, dispatch]);
  const [hover, setHover] = (0, import_react57.useState)(false);
  const indicativeHover = useContextStore(
    ZoneStoreContext,
    (s) => s.hoveringComponent === id
  );
  (0, import_react57.useEffect)(() => {
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
  const [isVisible, setIsVisible] = (0, import_react57.useState)(false);
  const [dragFinished, setDragFinished] = (0, import_react57.useState)(true);
  const [_, startTransition] = (0, import_react57.useTransition)();
  (0, import_react57.useEffect)(() => {
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
  const [thisWasDragging, setThisWasDragging] = (0, import_react57.useState)(false);
  const onDragFinished = useOnDragFinished(
    (0, import_react57.useCallback)(
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
  (0, import_react57.useEffect)(() => {
    if (thisIsDragging) {
      setThisWasDragging(true);
    }
  }, [thisIsDragging]);
  (0, import_react57.useEffect)(() => {
    if (thisWasDragging) return onDragFinished();
  }, [thisWasDragging, onDragFinished]);
  (0, import_react57.useEffect)(() => {
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
  const syncActionsPosition = (0, import_react57.useCallback)(
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
  (0, import_react57.useEffect)(() => {
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
  const parentAction = (0, import_react57.useMemo)(
    () => ctx?.areaId && ctx?.areaId !== "root" && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(ActionBar.Action, { onClick: onSelectParent, label: "Select parent", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(CornerLeftUp, { size: 16 }) }),
    [ctx?.areaId, onSelectParent]
  );
  const nextContextValue = (0, import_react57.useMemo)(
    () => ({
      ...ctx,
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
    (s) => s.currentRichText?.inlineComponentId === id ? s.currentRichText : null
  );
  const hasNormalActions = permissions.duplicate || permissions.delete;
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(DropZoneProvider, { value: nextContextValue, children: [
    dragFinished && isVisible && (0, import_react_dom2.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(
        "div",
        {
          className: getClassName22({
            isSelected,
            isDragging: thisIsDragging,
            hover: hover || indicativeHover
          }),
          style: { ...style },
          "data-credbuild-overlay": true,
          children: [
            debug,
            isLoading && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: getClassName22("loadingOverlay"), children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(Loader, {}) }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
              "div",
              {
                className: getClassName22("actionsOverlay"),
                style: {
                  top: actionsOverlayTop / zoom
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
                  "div",
                  {
                    className: getClassName22("actions"),
                    style: {
                      transform: `scale(${1 / zoom}`,
                      top: actionsTop / zoom,
                      right: 0,
                      paddingLeft: actionsSide,
                      paddingRight: actionsSide
                    },
                    ref: syncActionsPosition,
                    children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(
                      CustomActionBar,
                      {
                        parentAction,
                        label: DEBUG2 ? id : label,
                        children: [
                          richText && /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
                            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
                              LoadedRichTextMenu,
                              {
                                editor: richText.editor,
                                field: richText.field,
                                inline: true,
                                readOnly: false
                              }
                            ),
                            hasNormalActions && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(ActionBar.Separator, {})
                          ] }),
                          permissions.duplicate && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(ActionBar.Action, { onClick: onDuplicate, label: "Duplicate", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(Copy, { size: 16 }) }),
                          permissions.delete && /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(ActionBar.Action, { onClick: onDelete, label: "Delete", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(Trash, { size: 16 }) })
                        ]
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: getClassName22("overlayWrapper"), children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
              CustomOverlay,
              {
                componentId: id,
                componentType,
                hover,
                isSelected,
                children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: getClassName22("overlay") })
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

// components/DropZone/index.tsx
init_setup_zone();
init_root_droppable_id();
init_lib();

// css-module:/home/crediblemark/Project/Credibuild/components/DropZone/styles.module.css#css-module
init_react_import();
var styles_module_default16 = { "DropZone": "_DropZone_1vmgt_1", "DropZone--hasChildren": "_DropZone--hasChildren_1vmgt_11", "DropZone--isAreaSelected": "_DropZone--isAreaSelected_1vmgt_24", "DropZone--hoveringOverArea": "_DropZone--hoveringOverArea_1vmgt_25", "DropZone--isRootZone": "_DropZone--isRootZone_1vmgt_25", "DropZone--isDestination": "_DropZone--isDestination_1vmgt_35", "DropZone-item": "_DropZone-item_1vmgt_47", "DropZone-hitbox": "_DropZone-hitbox_1vmgt_51", "DropZone--isEnabled": "_DropZone--isEnabled_1vmgt_59", "DropZone--isAnimating": "_DropZone--isAnimating_1vmgt_68" };

// components/DropZone/index.tsx
init_store2();
var import_react74 = require("@dnd-kit/react");
var import_collision2 = require("@dnd-kit/collision");

// components/DropZone/lib/use-min-empty-height.ts
init_react_import();
var import_react58 = require("react");
init_use_context_store();
init_store2();
var getNumItems = (appStore, zoneCompound) => appStore.getState().state.indexes.zones[zoneCompound].contentIds.length;
var useMinEmptyHeight = ({
  zoneCompound,
  userMinEmptyHeight,
  ref
}) => {
  const appStore = useAppStoreApi();
  const [prevHeight, setPrevHeight] = (0, import_react58.useState)(0);
  const [isAnimating, setIsAnimating] = (0, import_react58.useState)(false);
  const { draggedItem, isZone } = useContextStore(ZoneStoreContext, (s) => {
    return {
      draggedItem: s.draggedItem?.data.zone === zoneCompound ? s.draggedItem : null,
      isZone: s.draggedItem?.data.zone === zoneCompound
    };
  });
  const numItems = (0, import_react58.useRef)(0);
  const onDragFinished = useOnDragFinished(
    (0, import_react58.useCallback)(
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
          nodes.setOverlayVisible(selectedItem?.props.id, false);
          setTimeout(() => {
            const contentIds = zones[zoneCompound]?.contentIds || [];
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
  (0, import_react58.useEffect)(() => {
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
var import_react61 = require("react");

// lib/dnd/use-rendered-callback.ts
init_react_import();
var import_react59 = require("@dnd-kit/react");
var import_react60 = require("react");
function useRenderedCallback(callback, _deps = []) {
  const manager = (0, import_react59.useDragDropManager)();
  return (0, import_react60.useCallback)(
    async (...args) => {
      await manager?.renderer.rendering;
      return callback(...args);
    },
    [manager, callback]
  );
}

// components/DropZone/lib/use-content-with-preview.ts
init_insert();
init_use_context_store();
init_store2();
var useContentIdsWithPreview = (contentIds, zoneCompound) => {
  const zoneStore = (0, import_react61.useContext)(ZoneStoreContext);
  const preview = useContextStore(
    ZoneStoreContext,
    (s) => s.previewIndex[zoneCompound]
  );
  const isDragging = useAppStore((s) => s.state.ui.isDragging);
  const [contentIdsWithPreview, setContentIdsWithPreview] = (0, import_react61.useState)(contentIds);
  const [localPreview, setLocalPreview] = (0, import_react61.useState)(
    preview
  );
  const updateContent = useRenderedCallback(
    (0, import_react61.useCallback)(
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
  (0, import_react61.useEffect)(() => {
    const s = zoneStore.getState();
    const draggedItemId = s.draggedItem?.id;
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
var import_react62 = require("react");
init_store2();
var GRID_DRAG_AXIS = "dynamic";
var FLEX_ROW_DRAG_AXIS = "x";
var DEFAULT_DRAG_AXIS = "y";
var useDragAxis = (ref, collisionAxis) => {
  const status = useAppStore((s) => s.status);
  const [dragAxis, setDragAxis] = (0, import_react62.useState)(
    collisionAxis || DEFAULT_DRAG_AXIS
  );
  const calculateDragAxis = (0, import_react62.useCallback)(() => {
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
  (0, import_react62.useEffect)(() => {
    const onViewportChange = () => {
      calculateDragAxis();
    };
    window.addEventListener("viewportchange", onViewportChange);
    return () => {
      window.removeEventListener("viewportchange", onViewportChange);
    };
  }, [calculateDragAxis]);
  (0, import_react62.useEffect)(calculateDragAxis, [status, collisionAxis, calculateDragAxis]);
  return [dragAxis, calculateDragAxis];
};

// components/DropZone/index.tsx
init_use_context_store();
var import_shallow6 = require("zustand/react/shallow");

// components/Render/context.tsx
init_react_import();
var import_react63 = __toESM(require("react"));
var renderContext = import_react63.default.createContext({
  config: { components: {} },
  data: { root: {}, content: [] },
  metadata: {}
});

// lib/use-slots.tsx
init_react_import();

// lib/field-transforms/use-field-transforms.tsx
init_react_import();
var import_react64 = require("react");
init_map_fields();

// lib/field-transforms/build-mappers.ts
init_react_import();
function buildMappers(transforms, readOnly, forceReadOnly) {
  return Object.keys(transforms).reduce((acc, _fieldType) => {
    const fieldType = _fieldType;
    return {
      ...acc,
      [fieldType]: ({
        parentId,
        ...params
      }) => {
        const wildcardPath = params.propPath.replace(/\[\d+\]/g, "[*]");
        const isReadOnly = readOnly?.[params.propPath] || readOnly?.[wildcardPath] || forceReadOnly || false;
        const fn = transforms[fieldType];
        return fn?.({
          ...params,
          isReadOnly,
          componentId: parentId
        });
      }
    };
  }, {});
}

// lib/field-transforms/use-field-transforms.tsx
function useFieldTransforms(config, item, transforms, readOnly, forceReadOnly) {
  const mappers = (0, import_react64.useMemo)(
    () => buildMappers(transforms, readOnly, forceReadOnly),
    [transforms, readOnly, forceReadOnly]
  );
  const transformedProps = (0, import_react64.useMemo)(() => {
    return mapFields(item, mappers, config).props;
  }, [config, item, mappers]);
  const mergedProps = (0, import_react64.useMemo)(
    () => ({ ...item.props, ...transformedProps }),
    [item.props, transformedProps]
  );
  return mergedProps;
}

// lib/field-transforms/default-transforms/slot-transform.tsx
init_react_import();
var getSlotTransform = (renderSlotEdit, renderSlotRender = renderSlotEdit) => ({
  slot: ({ value: content, propName, field, isReadOnly }) => {
    const render = isReadOnly ? renderSlotRender : renderSlotEdit;
    const Slot = (dzProps) => render({
      allow: field?.type === "slot" ? field.allow : [],
      disallow: field?.type === "slot" ? field.disallow : [],
      ...dzProps,
      zone: propName,
      content
    });
    return Slot;
  }
});

// lib/use-slots.tsx
function useSlots(config, item, renderSlotEdit, renderSlotRender = renderSlotEdit, readOnly, forceReadOnly) {
  return useFieldTransforms(
    config,
    item,
    getSlotTransform(renderSlotEdit, renderSlotRender),
    readOnly,
    forceReadOnly
  );
}

// components/SlotRender/index.tsx
init_react_import();
var import_shallow5 = require("zustand/react/shallow");
init_store2();

// components/SlotRender/server.tsx
init_react_import();
var import_react67 = require("react");

// components/RichTextEditor/lib/use-richtext-props.tsx
init_react_import();
var import_react66 = require("react");

// components/RichTextEditor/components/RenderFallback.tsx
init_react_import();
init_get_class_name_factory();
init_styles_module10();
var import_jsx_runtime59 = require("react/jsx-runtime");
var getClassName23 = get_class_name_factory_default("RichTextEditor", styles_module_default10);
function RichTextRenderFallback({ content }) {
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: getClassName23(), children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
    "div",
    {
      className: "rich-text",
      dangerouslySetInnerHTML: { __html: content }
    }
  ) });
}

// components/RichTextEditor/lib/use-richtext-props.tsx
init_generate_id();

// components/RichTextEditor/lib/mapDeep.ts
init_react_import();
var mapDeep = (source, path, render) => {
  if (!source) {
    return null;
  }
  if (path.length === 0) {
    return render(source);
  }
  const [key, ...rest] = path;
  if (Array.isArray(source)) {
    return source.map((item) => mapDeep(item, path, render));
  }
  return {
    ...source,
    [key]: mapDeep(source[key], rest, render)
  };
};

// components/RichTextEditor/lib/use-richtext-props.tsx
var import_jsx_runtime61 = require("react/jsx-runtime");
var findAllRichtextKeys = (fields, path = []) => {
  if (!fields) return [];
  const result = [];
  for (const [key, field] of Object.entries(fields)) {
    const currentPath = [...path, key];
    if (field.type === "richtext") {
      result.push({
        path: currentPath,
        field
      });
    }
    if (field.type === "array" && "arrayFields" in field) {
      result.push(...findAllRichtextKeys(field.arrayFields, currentPath));
    }
    if (field.type === "object" && "objectFields" in field) {
      result.push(...findAllRichtextKeys(field.objectFields, currentPath));
    }
  }
  return result;
};
function useRichtextProps(fields, props) {
  const richtextKeys = (0, import_react66.useMemo)(() => findAllRichtextKeys(fields), [fields]);
  const richtextProps = (0, import_react66.useMemo)(() => {
    if (!richtextKeys?.length) return {};
    const RichTextRender3 = (0, import_react66.lazy)(
      () => Promise.resolve().then(() => (init_Render(), Render_exports)).then((m) => ({
        default: m.RichTextRender
      }))
    );
    let result = { ...props };
    for (const { path, field } of richtextKeys) {
      result = mapDeep(result, path, (content) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
        import_react66.Suspense,
        {
          fallback: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(RichTextRenderFallback, { content }),
          children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(RichTextRender3, { content, field })
        },
        generateId()
      ));
    }
    return result;
  }, [richtextKeys, props]);
  return richtextProps;
}

// components/SlotRender/server.tsx
var import_jsx_runtime62 = require("react/jsx-runtime");
var SlotRenderPure = (props) => /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(SlotRender, { ...props });
var Item2 = ({
  config,
  item,
  metadata
}) => {
  const Component = config.components[item.type];
  const props = useSlots(config, item, (slotProps) => /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(SlotRenderPure, { ...slotProps, config, metadata }));
  const richtextProps = useRichtextProps(Component.fields, props);
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
    Component.render,
    {
      ...props,
      ...richtextProps,
      credbuild: {
        ...props.credbuild,
        metadata: metadata || {}
      }
    }
  );
};
var SlotRender = (0, import_react67.forwardRef)(
  function SlotRenderInternal({ className, style, content, config, metadata, as }, ref) {
    const El = as ?? "div";
    return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(El, { className, style, ref, children: content.map((item) => {
      if (!config.components[item.type]) {
        return null;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
        Item2,
        {
          config,
          item,
          metadata
        },
        item.props.id
      );
    }) });
  }
);

// components/SlotRender/index.tsx
var import_jsx_runtime63 = require("react/jsx-runtime");
var ContextSlotRender = ({
  componentId,
  zone
}) => {
  const config = useAppStore((s) => s.config);
  const metadata = useAppStore((s) => s.metadata);
  const slotContent = useAppStore(
    (0, import_shallow5.useShallow)((s) => {
      const indexes = s.state.indexes;
      const contentIds = indexes.zones[`${componentId}:${zone}`]?.contentIds ?? [];
      return contentIds.map((contentId) => indexes.nodes[contentId].flatData);
    })
  );
  return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
    SlotRenderPure,
    {
      content: slotContent,
      zone,
      config,
      metadata
    }
  );
};

// components/DropZone/index.tsx
init_flatten_node();

// lib/field-transforms/use-field-transforms-tracked.tsx
init_react_import();
var import_react68 = require("react");
init_map_fields();
function useFieldTransformsTracked(config, item, transforms, readOnly, forceReadOnly) {
  const prevProps = (0, import_react68.useRef)(null);
  const prevResult = (0, import_react68.useRef)(item.props);
  const mappers = (0, import_react68.useMemo)(
    () => buildMappers(transforms, readOnly, forceReadOnly),
    [transforms, readOnly, forceReadOnly]
  );
  const transformedProps = (0, import_react68.useMemo)(() => {
    const changedProps = {};
    const componentConfig = item.type === "root" ? config.root : config.components?.[item.type];
    let changeIncludesSlot = false;
    for (const fieldName in item.props) {
      const fieldType = componentConfig?.fields?.[fieldName]?.type;
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
      { ...item, props: changedProps },
      mappers,
      config,
      false,
      changeIncludesSlot
    ).props;
    prevResult.current = { ...prevResult.current, ...mapped };
    return prevResult.current;
  }, [config, item, mappers]);
  const mergedProps = (0, import_react68.useMemo)(
    () => ({ ...item.props, ...transformedProps }),
    [item.props, transformedProps]
  );
  return mergedProps;
}

// lib/field-transforms/default-transforms/inline-text-transform.tsx
init_react_import();

// components/InlineTextField/index.tsx
init_react_import();
var import_react69 = require("react");

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

// components/InlineTextField/index.tsx
init_store2();

// css-module:/home/crediblemark/Project/Credibuild/components/InlineTextField/styles.module.css#css-module
init_react_import();
var styles_module_default17 = { "InlineTextField": "_InlineTextField_104qp_1" };

// components/InlineTextField/index.tsx
init_lib();
init_set_deep();

// lib/get-selector-for-id.ts
init_react_import();
var getSelectorForId = (state, id) => {
  const node = state.indexes.nodes[id];
  if (!node) return;
  const zoneCompound = `${node.parentId}:${node.zone}`;
  const index = state.indexes.zones[zoneCompound].contentIds.indexOf(id);
  return { zone: zoneCompound, index };
};

// components/InlineTextField/index.tsx
var import_jsx_runtime64 = require("react/jsx-runtime");
var getClassName25 = get_class_name_factory_default("InlineTextField", styles_module_default17);
var InlineTextFieldInternal = ({
  propPath,
  componentId,
  value,
  isReadOnly,
  opts = {}
}) => {
  const ref = (0, import_react69.useRef)(null);
  const appStoreApi = useAppStoreApi();
  const disableLineBreaks = opts.disableLineBreaks ?? false;
  (0, import_react69.useEffect)(() => {
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
      const handleInput = async (e) => {
        const appStore2 = appStoreApi.getState();
        const node = appStore2.state.indexes.nodes[componentId];
        const zoneCompound = `${node.parentId}:${node.zone}`;
        const index = appStore2.state.indexes.zones[zoneCompound]?.contentIds.indexOf(
          componentId
        );
        let value2 = e.target.innerText;
        if (disableLineBreaks) {
          value2 = value2.replaceAll(/\n/gm, "");
        }
        const newProps = setDeep(node.data.props, propPath, value2);
        const resolvedData = await appStore2.resolveComponentData(
          { ...node.data, props: newProps },
          "replace"
        );
        appStore2.dispatch({
          type: "replace",
          data: resolvedData.node,
          destinationIndex: index,
          destinationZone: zoneCompound
        });
      };
      const el = ref.current;
      el.addEventListener("input", handleInput);
      return () => {
        el.removeEventListener("input", handleInput);
        cleanupPortal?.();
      };
    }
  }, [appStoreApi, ref, value, disableLineBreaks, componentId, propPath]);
  const [isHovering, setIsHovering] = (0, import_react69.useState)(false);
  const [isFocused, setIsFocused] = (0, import_react69.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
    "span",
    {
      className: getClassName25(),
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
var InlineTextField = (0, import_react69.memo)(InlineTextFieldInternal);

// lib/field-transforms/default-transforms/inline-text-transform.tsx
var import_jsx_runtime65 = require("react/jsx-runtime");
var getInlineTextTransform = () => ({
  text: ({ value, componentId, field, propPath, isReadOnly }) => {
    if (field.contentEditable) {
      return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
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
init_EditorFallback();
init_store2();
init_set_deep();
var import_react70 = require("react");
var import_jsx_runtime66 = require("react/jsx-runtime");
var Editor3 = (0, import_react70.lazy)(
  () => Promise.resolve().then(() => (init_Editor(), Editor_exports)).then((m) => ({
    default: m.Editor
  }))
);
var RichTextRender2 = (0, import_react70.lazy)(
  () => Promise.resolve().then(() => (init_Render(), Render_exports)).then((m) => ({
    default: m.RichTextRender
  }))
);
var InlineEditorWrapper = (0, import_react70.memo)(
  ({
    value,
    componentId,
    propPath,
    field,
    id
  }) => {
    const portalRef = (0, import_react70.useRef)(null);
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
    (0, import_react70.useEffect)(() => {
      if (!portalRef.current) return;
      const cleanup = registerOverlayPortal(portalRef.current, {
        disableDragOnFocus: true
      });
      return () => cleanup?.();
    }, []);
    const handleChange = (0, import_react70.useCallback)(
      async (content, ui) => {
        const appStore = appStoreApi.getState();
        const node = appStore.state.indexes.nodes[componentId];
        const zoneCompound = `${node.parentId}:${node.zone}`;
        const index = appStore.state.indexes.zones[zoneCompound]?.contentIds.indexOf(
          componentId
        );
        const newProps = setDeep(node.data.props, propPath, content);
        const resolvedData = await appStore.resolveComponentData(
          { ...node.data, props: newProps },
          "replace"
        );
        appStore.dispatch({
          type: "replace",
          data: resolvedData.node,
          destinationIndex: index,
          destinationZone: zoneCompound,
          ui
        });
      },
      [appStoreApi, componentId, propPath]
    );
    const handleFocus = (0, import_react70.useCallback)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react70.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(RichTextRenderFallback, { content: value }), children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(RichTextRender2, { content: value, field }) });
    const editorProps = {
      content: value,
      onChange: handleChange,
      field,
      inline: true,
      onFocus: handleFocus,
      id,
      name: propPath
    };
    return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
      "div",
      {
        ref: portalRef,
        onClick: onClickHandler,
        onClickCapture: onClickCaptureHandler,
        children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react70.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(EditorFallback, { ...editorProps }), children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Editor3, { ...editorProps }) })
      }
    );
  }
);
InlineEditorWrapper.displayName = "InlineEditorWrapper";
var getRichTextTransform = () => ({
  richtext: ({ value, componentId, field, propPath, isReadOnly }) => {
    const { contentEditable = true, tiptap } = field;
    if (contentEditable === false || isReadOnly) {
      return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(RichTextRender2, { content: value, field });
    }
    const id = `${componentId}_${field.type}_${propPath}`;
    return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
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
var import_fast_equals3 = require("fast-equals");
var import_react71 = require("react");

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
var import_jsx_runtime67 = require("react/jsx-runtime");
var RenderComponent = ({
  Component,
  componentProps: renderProps
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(Component, { ...renderProps });
};
var MemoizeComponent = (0, import_react71.memo)(RenderComponent, (prev, next) => {
  let credbuildEquals = true;
  if ("credbuild" in prev.componentProps && "credbuild" in next.componentProps) {
    credbuildEquals = (0, import_fast_equals3.deepEqual)(prev.componentProps.credbuild, next.componentProps.credbuild);
  }
  return prev.Component === next.Component && shallowEqual(prev.componentProps, next.componentProps, ["credbuild"]) && credbuildEquals;
});

// components/DropZone/VirtualizedDropZone.tsx
init_react_import();
var import_react72 = require("react");
init_store2();
var import_react_virtual = require("@tanstack/react-virtual");
init_use_context_store();

// lib/get-frame.ts
init_react_import();
var getFrame = () => {
  if (typeof window === "undefined") return;
  let frameEl = document.querySelector("#preview-frame");
  if (frameEl?.tagName === "IFRAME") {
    return frameEl.contentDocument || document;
  }
  return frameEl?.ownerDocument || document;
};

// components/DropZone/VirtualizedDropZone.tsx
var import_jsx_runtime68 = require("react/jsx-runtime");
var ROOT_ZONE_VIRTUALIZATION_OVERSCAN = 5;
var DEFAULT_VIRTUALIZED_ITEM_HEIGHT = 320;
var measuredItemHeights = /* @__PURE__ */ new Map();
var getEstimatedItemHeight = (componentId) => measuredItemHeights.get(componentId) ?? DEFAULT_VIRTUALIZED_ITEM_HEIGHT;
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
  const selectedId = useAppStore((s) => s.selectedItem?.props.id ?? null);
  const frame = getFrame();
  const zoneStore = (0, import_react72.useContext)(ZoneStoreContext);
  const draggedItemId = useContextStore(ZoneStoreContext, (s) => {
    const draggedId = s.draggedItem?.id;
    return draggedId ? String(draggedId) : null;
  });
  const dragTargetParentId = useContextStore(ZoneStoreContext, (s) => {
    if (s.draggedItem?.id) {
      const parentZone = Object.keys(s.previewIndex ?? {})[0];
      return parentZone?.split(":")[0];
    }
    return null;
  });
  const iframeWindow = frame?.defaultView;
  const measureRefsRef = (0, import_react72.useRef)(/* @__PURE__ */ new Map());
  const appStoreApi = useAppStoreApi();
  const resolveIndex = (0, import_react72.useCallback)(
    (targetId) => {
      if (!targetId || targetId === "root") {
        return -1;
      }
      const directIndex = contentIds.indexOf(targetId);
      if (directIndex > -1) {
        return directIndex;
      }
      const path = appStoreApi.getState().state.indexes.nodes?.[targetId]?.path ?? [];
      for (let i = path.length - 1; i >= 0; i -= 1) {
        const candidateId = path[i]?.split(":")[0];
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
  const pinnedIndexes = (0, import_react72.useMemo)(() => {
    const nextPinnedIndexes = /* @__PURE__ */ new Set();
    [selectedId, draggedItemId, dragTargetParentId].forEach((targetId) => {
      const currentIndex = resolveIndex(targetId);
      if (currentIndex > -1) {
        nextPinnedIndexes.add(currentIndex);
      }
    });
    return Array.from(nextPinnedIndexes).sort((a, b) => a - b);
  }, [dragTargetParentId, draggedItemId, resolveIndex, selectedId]);
  const rangeExtractor = (0, import_react72.useCallback)(
    (range) => {
      const indexes = (0, import_react_virtual.defaultRangeExtractor)(range);
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
  const virtualizer = (0, import_react_virtual.useVirtualizer)({
    count: contentIds.length,
    getItemKey: (index) => contentIds[index],
    estimateSize: (index) => getEstimatedItemHeight(contentIds[index]),
    getScrollElement: () => iframeWindow ?? null,
    overscan: ROOT_ZONE_VIRTUALIZATION_OVERSCAN,
    observeElementRect: (instance, cb) => iframeWindow ? (0, import_react_virtual.observeWindowRect)(instance, cb) : (0, import_react_virtual.observeElementRect)(instance, cb),
    observeElementOffset: (instance, cb) => iframeWindow ? (0, import_react_virtual.observeWindowOffset)(instance, cb) : (0, import_react_virtual.observeElementOffset)(instance, cb),
    scrollToFn: (offset, options, instance) => iframeWindow ? (0, import_react_virtual.windowScroll)(offset, options, instance) : (0, import_react_virtual.elementScroll)(offset, options, instance),
    rangeExtractor,
    initialOffset: () => iframeWindow ? iframeWindow.scrollY : 0
  });
  (0, import_react72.useEffect)(() => {
    zoneStore.getState().registerRootVirtualizer(zoneCompound, {
      resolveIndex: (targetId) => resolveIndex(targetId),
      virtualizer
    });
    return () => {
      zoneStore.getState().unregisterRootVirtualizer(zoneCompound);
    };
  }, [resolveIndex, virtualizer, zoneCompound, zoneStore]);
  const getMeasureRef = (0, import_react72.useCallback)((componentId) => {
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
  (0, import_react72.useEffect)(() => {
    const validIds = new Set(contentIds);
    Array.from(measureRefsRef.current.keys()).forEach((componentId) => {
      if (!validIds.has(componentId)) {
        measureRefsRef.current.delete(componentId);
      }
    });
  }, [contentIds]);
  const virtualItems = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();
  const renderedItems = (0, import_react72.useMemo)(() => {
    const items = [];
    let previousEnd = 0;
    let previousIndex = -1;
    virtualItems.forEach((virtualItem) => {
      if (!virtualItem) return;
      const componentId = contentIds[virtualItem.index];
      const gapSize = Math.max(virtualItem.start - previousEnd, 0);
      if (gapSize > 0) {
        items.push(
          /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_jsx_runtime68.Fragment, { children: renderedItems });
};

// components/DropZone/index.tsx
var import_jsx_runtime69 = (
  // Safe to use this since the HTML is set by the user
  require("react/jsx-runtime")
);
var getClassName26 = get_class_name_factory_default("DropZone", styles_module_default16);
var getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
var RENDER_DEBUG = false;
var InsertPreview = ({
  element,
  label,
  override
}) => {
  if (element) {
    return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { dangerouslySetInnerHTML: { __html: element.outerHTML } });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(DrawerItemInner, { name: label, children: override });
};
var DropZoneEditPure = (props) => /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(DropZoneEdit, { ...props });
var DropZoneChild = ({
  zoneCompound,
  componentId,
  index,
  dragAxis,
  collisionAxis,
  inDroppableZone,
  itemRef
}) => {
  const metadata = useAppStore((s) => s.metadata);
  const ctx = (0, import_react73.useContext)(dropZoneContext);
  const { depth = 1 } = ctx ?? {};
  const zoneStore = (0, import_react73.useContext)(ZoneStoreContext);
  const nodeProps = useAppStore(
    (0, import_shallow6.useShallow)((s) => {
      return s.state.indexes.nodes[componentId]?.flatData.props;
    })
  );
  const nodeType = useAppStore(
    (s) => s.state.indexes.nodes[componentId]?.data.type
  );
  const nodeReadOnly = useAppStore(
    (0, import_shallow6.useShallow)((s) => s.state.indexes.nodes[componentId]?.data.readOnly)
  );
  const appStore = useAppStoreApi();
  const item = (0, import_react73.useMemo)(() => {
    if (nodeProps) {
      const expanded = expandNode({
        type: nodeType,
        props: nodeProps
      });
      return expanded;
    }
    const preview = zoneStore.getState().previewIndex[zoneCompound];
    if (componentId === preview?.props.id) {
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
    (s) => item?.type ? s.config.components[item.type] : null
  );
  const credbuildProps = (0, import_react73.useMemo)(
    () => ({
      renderDropZone: DropZoneEditPure,
      isEditing: true,
      dragRef: null,
      metadata: { ...metadata, ...componentConfig?.metadata }
    }),
    [metadata, componentConfig?.metadata]
  );
  const overrides = useAppStore((s) => s.overrides);
  const isLoading = useAppStore(
    (s) => s.componentState[componentId]?.loadingCount > 0
  );
  const isSelected = useAppStore(
    (s) => s.selectedItem?.props.id === componentId || false
  );
  let label = componentConfig?.label ?? item?.type.toString() ?? "Component";
  const defaultsProps = (0, import_react73.useMemo)(
    () => ({
      ...componentConfig?.defaultProps,
      ...item?.props,
      credbuild: credbuildProps,
      editMode: true
      // DEPRECATED
    }),
    [componentConfig?.defaultProps, item?.props, credbuildProps]
  );
  const defaultedNode = (0, import_react73.useMemo)(
    () => ({ type: item?.type ?? nodeType, props: defaultsProps }),
    [item?.type, nodeType, defaultsProps]
  );
  const config = useAppStore((s) => s.config);
  const plugins = useAppStore((s) => s.plugins);
  const userFieldTransforms = useAppStore((s) => s.fieldTransforms);
  const combinedFieldTransforms = (0, import_react73.useMemo)(
    () => ({
      ...getSlotTransform(DropZoneEditPure, (slotProps) => /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(ContextSlotRender, { componentId, zone: slotProps.zone })),
      ...getInlineTextTransform(),
      ...getRichTextTransform(),
      ...plugins.reduce(
        (acc, plugin) => ({ ...acc, ...plugin.fieldTransforms }),
        {}
      ),
      ...userFieldTransforms
    }),
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
  const Render2 = componentConfig ? componentConfig.render : () => /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("div", { style: { padding: 48, textAlign: "center" }, children: [
    "No configuration for ",
    item.type
  ] });
  let componentType = item.type;
  const isInserting = "previewType" in item ? item.previewType === "insert" : false;
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
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
        if (componentConfig?.inline && !isInserting) {
          return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
            MemoizeComponent,
            {
              Component: Render2,
              componentProps: {
                ...transformedProps,
                credbuild: { ...transformedProps.credbuild, dragRef }
              }
            }
          );
        }
        return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { ref: dragRef, children: isInserting ? /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
          InsertPreview,
          {
            label,
            override: overrides.componentItem ?? overrides.drawerItem,
            element: "element" in item && item.element ? item.element : void 0
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
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
var DropZoneChildMemo = (0, import_react73.memo)(DropZoneChild);
var DropZoneEdit = (0, import_react73.forwardRef)(
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
    const ctx = (0, import_react73.useContext)(dropZoneContext);
    const appStoreApi = useAppStoreApi();
    const {
      // These all need setting via context
      areaId,
      depth = 0,
      registerLocalZone,
      unregisterLocalZone
    } = ctx ?? {};
    const path = useAppStore(
      (0, import_shallow6.useShallow)((s) => areaId ? s.state.indexes.nodes[areaId]?.path : null)
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
      (0, import_shallow6.useShallow)((s) => {
        return s.state.indexes.zones[zoneCompound]?.contentIds;
      })
    );
    const zoneType = useAppStore(
      (0, import_shallow6.useShallow)((s) => {
        return s.state.indexes.zones[zoneCompound]?.type;
      })
    );
    (0, import_react73.useEffect)(() => {
      if (!zoneType || zoneType === "dropzone") {
        if (ctx?.registerZone) {
          ctx?.registerZone(zoneCompound);
        }
      }
    }, [zoneType, appStoreApi, ctx, zoneCompound]);
    (0, import_react73.useEffect)(() => {
      if (zoneType === "dropzone") {
        if (zoneCompound !== rootDroppableId) {
          console.warn(
            "DropZones have been deprecated in favor of slot fields and will be removed in a future version of CredBuild. Please see the migration guide: https://www.credbuild.com/docs/guides/migrations/dropzones-to-slots"
          );
        }
      }
    }, [zoneType, zoneCompound]);
    const contentIds = (0, import_react73.useMemo)(() => {
      return zoneContentIds || [];
    }, [zoneContentIds]);
    const ref = (0, import_react73.useRef)(null);
    const acceptsTarget = (0, import_react73.useCallback)(
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
      const draggedComponentType = s.draggedItem?.data.componentType;
      return acceptsTarget(draggedComponentType);
    });
    const hoveringOverArea = inNextDeepestArea || isRootZone;
    const isEnabled = useContextStore(ZoneStoreContext, (s) => {
      let _isEnabled = true;
      const isDeepestZone = s.zoneDepthIndex[zoneCompound] ?? false;
      _isEnabled = isDeepestZone;
      if (_isEnabled) {
        _isEnabled = targetAccepted;
      }
      return _isEnabled;
    });
    (0, import_react73.useEffect)(() => {
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
    const zoneStore = (0, import_react73.useContext)(ZoneStoreContext);
    (0, import_react73.useEffect)(() => {
      const { enabledIndex } = zoneStore.getState();
      zoneStore.setState({
        enabledIndex: { ...enabledIndex, [zoneCompound]: isEnabled }
      });
    }, [isEnabled, zoneStore, zoneCompound]);
    const droppableConfig = {
      id: zoneCompound,
      collisionPriority: isEnabled ? depth : 0,
      disabled: !isDropEnabled,
      collisionDetector: import_collision2.pointerIntersection,
      type: "dropzone",
      data: {
        areaId,
        depth,
        isDroppableTarget: targetAccepted,
        path: path || []
      }
    };
    const { ref: dropRef } = (0, import_react74.useDroppable)(droppableConfig);
    const isAreaSelected = useAppStore(
      (s) => s?.selectedItem && areaId === s?.selectedItem.props.id
    );
    const [dragAxis] = useDragAxis(ref, collisionAxis);
    const [minEmptyHeight, isAnimating] = useMinEmptyHeight({
      zoneCompound,
      userMinEmptyHeight,
      ref
    });
    const setRefs = (0, import_react73.useCallback)(
      (node) => {
        assignRefs([ref, dropRef, userRef], node);
      },
      [dropRef, userRef]
    );
    const _experimentalVirtualization = useAppStore(
      (s) => s._experimentalVirtualization
    );
    const El = as ?? "div";
    const isRootAreaZone = (areaId ?? rootAreaId) === rootAreaId && depth === 0;
    const shouldVirtualizeItems = _experimentalVirtualization && isRootAreaZone;
    return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
      El,
      {
        className: `${getClassName26({
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
        style: {
          ...style,
          "--min-empty-height": minEmptyHeight,
          backgroundColor: RENDER_DEBUG ? getRandomColor() : style?.backgroundColor
        },
        children: shouldVirtualizeItems ? /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
          VirtualizedDropZone,
          {
            contentIds: contentIdsWithPreview,
            zoneCompound,
            renderItem: (props) => /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
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
        ) : contentIdsWithPreview.map((componentId, i) => /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
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
  const props = useSlots(config, item, (slotProps) => /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(SlotRenderPure, { ...slotProps, config, metadata }));
  const nextContextValue = (0, import_react73.useMemo)(
    () => ({
      areaId: props.id,
      depth: 1
    }),
    [props]
  );
  const richtextProps = useRichtextProps(Component.fields, props);
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(DropZoneProvider, { value: nextContextValue, children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
    Component.render,
    {
      ...props,
      ...richtextProps,
      credbuild: {
        ...props.credbuild,
        renderDropZone: DropZoneRenderPure,
        metadata: { ...metadata, ...Component.metadata }
      }
    }
  ) }, props.id);
};
var DropZoneRenderPure = (props) => /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(DropZoneRender, { ...props });
var DropZoneRender = (0, import_react73.forwardRef)(
  function DropZoneRenderInternal({ className, style, zone, as }, ref) {
    const ctx = (0, import_react73.useContext)(dropZoneContext);
    const { areaId = "root" } = ctx || {};
    const { config, data, metadata } = (0, import_react73.useContext)(renderContext);
    let zoneCompound = `${areaId}:${zone}`;
    const content = (0, import_react73.useMemo)(() => {
      if (zoneCompound !== rootDroppableId) {
        return setupZone(data, zoneCompound).zones[zoneCompound];
      }
      return data?.content || [];
    }, [data, zoneCompound]);
    (0, import_react73.useEffect)(() => {
      if (!content) {
        if (ctx?.registerZone) {
          ctx?.registerZone(zoneCompound);
        }
      }
    }, [content, ctx, zoneCompound]);
    const El = as ?? "div";
    if (!data || !config) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(El, { className, style, ref, children: content.map((item) => {
      const Component = config.components[item.type];
      if (Component) {
        return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
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
var DropZonePure = (props) => /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(DropZone, { ...props });
var DropZone = (0, import_react73.forwardRef)(
  function DropZone2(props, ref) {
    const ctx = (0, import_react73.useContext)(dropZoneContext);
    if (ctx?.mode === "edit") {
      return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_jsx_runtime69.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(DropZoneEdit, { ...props, ref }) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_jsx_runtime69.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(DropZoneRender, { ...props, ref }) });
  }
);

// bundle/core.ts
init_IconButton2();

// components/CredBuild/index.tsx
init_react_import();
var import_react100 = require("react");
init_store2();

// components/CredBuild/components/Fields/index.tsx
init_react_import();
init_Loader();
init_root_droppable_id();
init_AutoField();
init_store();
init_store2();

// css-module:/home/crediblemark/Project/Credibuild/components/CredBuild/components/Fields/styles.module.css#css-module
init_react_import();
var styles_module_default18 = { "CredBuildFields": "_CredBuildFields_slc6y_1", "CredBuildFields--isLoading": "_CredBuildFields--isLoading_slc6y_6", "CredBuildFields-loadingOverlay": "_CredBuildFields-loadingOverlay_slc6y_10", "CredBuildFields-loadingOverlayInner": "_CredBuildFields-loadingOverlayInner_slc6y_25", "CredBuildFields-field": "_CredBuildFields-field_slc6y_32", "CredBuildFields--wrapFields": "_CredBuildFields--wrapFields_slc6y_36" };

// components/CredBuild/components/Fields/index.tsx
init_lib();
var import_react75 = require("react");
init_fields();
var import_shallow7 = require("zustand/react/shallow");
var import_jsx_runtime70 = require("react/jsx-runtime");
var getClassName27 = get_class_name_factory_default("CredBuildFields", styles_module_default18);
var DefaultFields = ({
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_jsx_runtime70.Fragment, { children });
};
var createOnChange = (fieldName, appStore) => async (value, updatedUi) => {
  const { dispatch, state, selectedItem, resolveComponentData: resolveComponentData2 } = appStore.getState();
  const { data, ui } = state;
  const { itemSelector } = ui;
  const rootProps = data.root.props || data.root;
  const currentProps = selectedItem ? selectedItem.props : rootProps;
  const newProps = { ...currentProps, [fieldName]: value };
  if (selectedItem && itemSelector) {
    const resolved = await resolveComponentData2(
      { ...selectedItem, props: newProps },
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
      root: (await resolveComponentData2(
        { ...data.root, props: newProps },
        "replace"
      )).node,
      ui: { ...ui, ...updatedUi },
      recordHistory: true
    });
    return;
  }
  dispatch({
    type: "setData",
    data: { root: newProps }
  });
};
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
    (0, import_shallow7.useShallow)((s) => {
      const { selectedItem, permissions: permissions2 } = s;
      return selectedItem ? permissions2.getPermissions({ item: selectedItem }) : permissions2.getPermissions({ root: true });
    })
  );
  const appStore = useAppStoreApi();
  const onChange = (0, import_react75.useCallback)(
    async (value, updatedUi) => {
      createOnChange(fieldName, appStore)(value, updatedUi);
    },
    [fieldName, appStore]
  );
  const { visible = true } = field ?? {};
  const fieldStore = (0, import_react75.useContext)(fieldContextStore.ctx);
  (0, import_react75.useEffect)(() => {
    return appStore.subscribe(
      (s) => {
        const data = s.getCurrentData();
        return data.props?.[fieldName];
      },
      (value) => {
        fieldStore.setState({ [fieldName]: value });
      }
    );
  }, [appStore, fieldStore, fieldName]);
  if (!field || !id || !visible) return null;
  if (field.type === "slot") return null;
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: getClassName27("field"), children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
    AutoFieldPrivate2,
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
  const initialValue = (0, import_react75.useMemo)(() => {
    const value = appStore.getState().getCurrentData().props?.[fieldName];
    return { [fieldName]: value };
  }, [appStore, fieldName]);
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(fieldContextStore.Provider, { value: initialValue, children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(FieldsChildInner, { fieldName }) });
};
var FieldsChildMemo = (0, import_react75.memo)(FieldsChild);
var FieldsInternal = ({ wrapFields = true }) => {
  const overrides = useAppStore((s) => s.overrides);
  const componentResolving = useAppStore((s) => {
    const loadingCount = s.selectedItem ? s.componentState[s.selectedItem.props.id]?.loadingCount : s.componentState["root"]?.loadingCount;
    return (loadingCount ?? 0) > 0;
  });
  const itemSelector = useAppStore((0, import_shallow7.useShallow)((s) => s.state.ui.itemSelector));
  const id = useAppStore((s) => s.selectedItem?.props.id);
  const appStore = useAppStoreApi();
  useRegisterFieldsSlice(appStore, id);
  const fieldsLoading = useAppStore((s) => s.fields.loading);
  const fieldNames = useAppStore(
    (0, import_shallow7.useShallow)((s) => {
      if (s.fields.id === id) {
        return Object.keys(s.fields.fields);
      }
      return [];
    })
  );
  const isLoading = fieldsLoading || componentResolving;
  const Wrapper = (0, import_react75.useMemo)(() => overrides.fields || DefaultFields, [overrides]);
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(
    "form",
    {
      className: getClassName27({ wrapFields }),
      onSubmit: (e) => {
        e.preventDefault();
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(Wrapper, { isLoading, itemSelector, children: fieldNames.map((fieldName) => /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(FieldsChildMemo, { fieldName }, fieldName)) }),
        isLoading && /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: getClassName27("loadingOverlay"), children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: getClassName27("loadingOverlayInner"), children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(Loader, { size: 16 }) }) })
      ]
    }
  );
};
var Fields = (0, import_react75.memo)(FieldsInternal);

// components/CredBuild/components/Components/index.tsx
init_react_import();

// lib/use-component-list.tsx
init_react_import();
var import_react77 = require("react");

// components/ComponentList/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/Credibuild/components/ComponentList/styles.module.css#css-module
init_react_import();
var styles_module_default19 = { "ComponentList": "_ComponentList_1jl8i_1", "ComponentList--isExpanded": "_ComponentList--isExpanded_1jl8i_5", "ComponentList-content": "_ComponentList-content_1jl8i_9", "ComponentList-title": "_ComponentList-title_1jl8i_17", "ComponentList-titleIcon": "_ComponentList-titleIcon_1jl8i_53" };

// components/ComponentList/index.tsx
init_get_class_name_factory();
var import_react76 = require("react");
init_store2();
init_lucide_react();
var import_jsx_runtime71 = require("react/jsx-runtime");
var getClassName28 = get_class_name_factory_default("ComponentList", styles_module_default19);
var ComponentListItem = ({
  name,
  label
}) => {
  const overrides = useAppStore((s) => s.overrides);
  const canInsert = useAppStore(
    (s) => s.permissions.getPermissions({
      type: name
    }).insert
  );
  (0, import_react76.useEffect)(() => {
    if (overrides.componentItem) {
      console.warn(
        "The `componentItem` override has been deprecated and renamed to `drawerItem`"
      );
    }
  }, [overrides]);
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(Drawer.Item, { label, name, isDragDisabled: !canInsert, children: overrides.componentItem ?? overrides.drawerItem });
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
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { className: getClassName28({ isExpanded: expanded }), children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
      "button",
      {
        type: "button",
        className: getClassName28("title"),
        onClick: () => setUi({
          componentList: {
            ...componentList,
            [id]: {
              ...componentList[id],
              expanded: !expanded
            }
          }
        }),
        title: expanded ? `Collapse${title ? ` ${title}` : ""}` : `Expand${title ? ` ${title}` : ""}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            id.toLowerCase().includes("hero") && /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(LayoutTemplate, { size: 12, strokeWidth: 2.5 }),
            id.toLowerCase().includes("content") && /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(FileText, { size: 12, strokeWidth: 2.5 }),
            id.toLowerCase().includes("marketing") && /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(Megaphone, { size: 12, strokeWidth: 2.5 }),
            id.toLowerCase().includes("layout") && /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(Box, { size: 12, strokeWidth: 2.5 }),
            id.toLowerCase().includes("basic") && /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(Settings, { size: 12, strokeWidth: 2.5 }),
            id === "other" && /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(Layers, { size: 12, strokeWidth: 2.5 }),
            /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { children: title?.replace(/[\u2600-\u27BF]|[\uD83C][\uDF00-\uDFFF]|[\uD83D][\uDC00-\uDE4F]|[\uD83D][\uDE80-\uDEFF]/g, "").trim() })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { className: getClassName28("titleIcon"), children: expanded ? /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(ChevronUp, { size: 12 }) : /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(ChevronDown, { size: 12 }) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { className: getClassName28("content"), children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(Drawer, { children: children || Object.keys(config.components).map((componentKey) => {
      return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
        ComponentListItem,
        {
          label: config.components[componentKey]["label"] ?? componentKey,
          name: componentKey
        },
        componentKey
      );
    }) }) })
  ] });
};
ComponentList.Item = ComponentListItem;

// lib/use-component-list.tsx
init_store2();
var import_jsx_runtime72 = require("react/jsx-runtime");
var useComponentList = () => {
  const [componentList, setComponentList] = (0, import_react77.useState)();
  const config = useAppStore((s) => s.config);
  const uiComponentList = useAppStore((s) => s.state.ui.componentList);
  (0, import_react77.useEffect)(() => {
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
          return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
            ComponentList,
            {
              id: categoryKey,
              title: category.title || categoryKey,
              children: category.components.map((componentName, i) => {
                const componentConf = config.components[componentName] || {};
                return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
                  ComponentList.Item,
                  {
                    label: componentConf["label"] ?? componentName,
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
      if (remainingComponents.length > 0 && !uiComponentList.other?.components && uiComponentList.other?.visible !== false) {
        _componentList.push(
          /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
            ComponentList,
            {
              id: "other",
              title: uiComponentList.other?.title || "Other",
              children: remainingComponents.map((componentName, i) => {
                const componentConf = config.components[componentName] || {};
                return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
                  ComponentList.Item,
                  {
                    name: componentName,
                    label: componentConf["label"] ?? componentName,
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
init_store2();
var import_react78 = require("react");
var import_jsx_runtime73 = require("react/jsx-runtime");
var Components = () => {
  const overrides = useAppStore((s) => s.overrides);
  const componentList = useComponentList();
  const Wrapper = (0, import_react78.useMemo)(() => {
    if (overrides.components) {
      console.warn(
        "The `components` override has been deprecated and renamed to `drawer`"
      );
    }
    return overrides.components || overrides.drawer || "div";
  }, [overrides]);
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(Wrapper, { children: componentList ? componentList : /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(ComponentList, { id: "all" }) });
};

// components/CredBuild/components/Preview/index.tsx
init_react_import();
init_root_droppable_id();
var import_react81 = require("react");
init_store2();

// components/AutoFrame/index.tsx
init_react_import();
var import_react79 = require("react");
var import_object_hash = __toESM(require("object-hash"));
var import_react_dom3 = require("react-dom");
var import_jsx_runtime74 = require("react/jsx-runtime");
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
  if (attributes?.length > 0) {
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
  (0, import_react79.useEffect)(() => {
    if (!win || !doc) {
      return () => {
      };
    }
    let elements = [];
    const hashes = {};
    const lookupEl = (el) => elements.findIndex((elementMap) => elementMap.original === el);
    const mirrorEl = async (el, inlineStyles = false) => {
      let mirror;
      if (el.nodeName === "LINK" && inlineStyles) {
        mirror = document.createElement("style");
        mirror.type = "text/css";
        let styleSheet = getStyleSheet(el);
        if (!styleSheet) {
          await new Promise((resolve) => {
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
    };
    const addEl = async (el) => {
      const index = lookupEl(el);
      if (index > -1) {
        if (debug)
          console.log(
            `Tried to add an element that was already mirrored. Updating instead...`
          );
        elements[index].mirror.innerText = el.innerText;
        return;
      }
      const mirror = await mirrorEl(el);
      if (!mirror) {
        return;
      }
      const elHash = (0, import_object_hash.default)(mirror.outerHTML);
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
    };
    const removeEl = (el) => {
      const index = lookupEl(el);
      if (index === -1) {
        if (debug)
          console.log(
            `Tried to remove an element that did not exist. Skipping...`
          );
        return;
      }
      const elHash = (0, import_object_hash.default)(el.outerHTML);
      elements[index]?.mirror?.remove();
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
      collectedStyles.map(async (styleNode, i) => {
        if (styleNode.nodeName === "LINK") {
          const linkHref = styleNode.href;
          if (hrefs.indexOf(linkHref) > -1) {
            return;
          }
          hrefs.push(linkHref);
        }
        const mirror = await mirrorEl(styleNode);
        if (!mirror) return;
        elements.push({ original: styleNode, mirror });
        return mirror;
      })
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
        const elHash = (0, import_object_hash.default)(el.outerHTML);
        hashes[elHash] = true;
      });
    });
    return () => {
      observer.disconnect();
    };
  }, [debug, doc, onStylesLoaded, win]);
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(import_jsx_runtime74.Fragment, { children });
};
var autoFrameContext = (0, import_react79.createContext)({});
var useFrame = () => (0, import_react79.useContext)(autoFrameContext);
function AutoFrame({
  children,
  className,
  debug,
  id,
  onReady = () => {
  },
  onNotReady = () => {
  },
  frameRef,
  ...props
}) {
  const [loaded, setLoaded] = (0, import_react79.useState)(false);
  const [ctx, setCtx] = (0, import_react79.useState)({});
  const [mountTarget, setMountTarget] = (0, import_react79.useState)();
  const [stylesLoaded, setStylesLoaded] = (0, import_react79.useState)(false);
  const handleStylesLoaded = (0, import_react79.useCallback)(() => {
    setStylesLoaded(true);
  }, []);
  const onReadyRef = (0, import_react79.useRef)(onReady);
  const onNotReadyRef = (0, import_react79.useRef)(onNotReady);
  (0, import_react79.useEffect)(() => {
    onReadyRef.current = onReady;
    onNotReadyRef.current = onNotReady;
  }, [onReady, onNotReady]);
  (0, import_react79.useEffect)(() => {
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
      const newMountTarget = frameRef.current.contentDocument?.getElementById("frame-root");
      setMountTarget((prev) => {
        if (prev === newMountTarget) return prev;
        return newMountTarget;
      });
      if (doc && win && stylesLoaded) {
        onReadyRef.current();
      }
    }
  }, [frameRef, loaded, stylesLoaded]);
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
    "iframe",
    {
      ...props,
      className,
      id,
      srcDoc: '<!DOCTYPE html><html><head></head><body><div id="frame-root" data-credbuild-entry></div></body></html>',
      ref: frameRef,
      onLoad: () => {
        setLoaded(true);
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(autoFrameContext.Provider, { value: ctx, children: loaded && mountTarget && /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
        CopyHostStyles,
        {
          debug,
          onStylesLoaded: handleStylesLoaded,
          children: (0, import_react_dom3.createPortal)(children, mountTarget)
        }
      ) })
    }
  );
}
AutoFrame.displayName = "AutoFrame";
var AutoFrame_default = AutoFrame;

// css-module:/home/crediblemark/Project/Credibuild/components/CredBuild/components/Preview/styles.module.css#css-module
init_react_import();
var styles_module_default20 = { "CredBuildPreview": "_CredBuildPreview_1z08a_1", "CredBuildPreview-frame": "_CredBuildPreview-frame_1z08a_6" };

// components/CredBuild/components/Preview/index.tsx
init_lib();

// components/Render/index.tsx
init_react_import();
init_root_droppable_id();
var import_react80 = require("react");
var import_jsx_runtime75 = require("react/jsx-runtime");
function Render({
  config,
  data,
  metadata = {}
}) {
  const defaultedData = {
    ...data,
    root: data.root || {},
    content: data.content || []
  };
  const rootProps = "props" in defaultedData.root ? defaultedData.root.props : defaultedData.root;
  const title = rootProps?.title || "";
  const pageProps = {
    ...rootProps,
    credbuild: {
      renderDropZone: DropZonePure,
      isEditing: false,
      dragRef: null,
      metadata
    },
    title,
    editMode: false,
    id: "credbuild-root"
  };
  const propsWithSlots = useSlots(
    config,
    { type: "root", props: pageProps },
    (props) => /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(SlotRender, { ...props, config, metadata })
  );
  const richtextProps = useRichtextProps(config.root?.fields, pageProps);
  const nextContextValue = (0, import_react80.useMemo)(
    () => ({
      mode: "render",
      depth: 0
    }),
    []
  );
  if (config.root?.render) {
    return /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(renderContext.Provider, { value: { config, data: defaultedData, metadata }, children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(DropZoneProvider, { value: nextContextValue, children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(config.root.render, { ...propsWithSlots, ...richtextProps, children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(DropZoneRenderPure, { zone: rootZone }) }) }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(renderContext.Provider, { value: { config, data: defaultedData, metadata }, children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(DropZoneProvider, { value: nextContextValue, children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(DropZoneRenderPure, { zone: rootZone }) }) });
}

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

// components/CredBuild/components/Preview/index.tsx
var import_jsx_runtime76 = require("react/jsx-runtime");
var getClassName29 = get_class_name_factory_default("CredBuildPreview", styles_module_default20);
var useBubbleIframeEvents = (ref) => {
  const status = useAppStore((s) => s.status);
  (0, import_react81.useEffect)(() => {
    if (ref.current && status === "READY") {
      const iframe = ref.current;
      const handlePointerMove = (event) => {
        const evt = new BubbledPointerEvent("pointermove", {
          ...event,
          bubbles: true,
          cancelable: false,
          clientX: event.clientX,
          clientY: event.clientY,
          originalTarget: event.target
        });
        iframe.dispatchEvent(evt);
      };
      const register = () => {
        unregister();
        iframe.contentDocument?.addEventListener(
          "pointermove",
          handlePointerMove,
          {
            capture: true
          }
        );
      };
      const unregister = () => {
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
var Preview = ({ id = "credbuild-preview" }) => {
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
  const Page = (0, import_react81.useCallback)(
    (pageProps) => {
      const propsWithSlots = useSlots(
        config,
        { type: "root", props: pageProps },
        DropZoneEditPure
      );
      const richtextProps = useRichtextProps(
        config.root?.fields ?? {},
        pageProps
      );
      return config.root?.render ? config.root?.render({
        id: "credbuild-root",
        ...propsWithSlots,
        ...richtextProps
      }) : /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(import_jsx_runtime76.Fragment, { children: propsWithSlots.children });
    },
    [config]
  );
  const Frame = (0, import_react81.useMemo)(() => overrides.iframe, [overrides]);
  const rootProps = root.props || root;
  const ref = (0, import_react81.useRef)(null);
  useBubbleIframeEvents(ref);
  const inner = !renderData ? /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
    Page,
    {
      ...rootProps,
      credbuild: {
        renderDropZone: DropZonePure,
        isEditing: true,
        dragRef: null,
        metadata
      },
      editMode: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(DropZonePure, { zone: rootDroppableId })
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(Render, { data: renderData, config, metadata });
  (0, import_react81.useEffect)(() => {
    if (!iframe.enabled) {
      setStatus("READY");
    }
  }, [iframe.enabled, setStatus]);
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
    "div",
    {
      className: getClassName29(),
      id,
      "data-credbuild-preview": true,
      onClick: (e) => {
        const el = e.target;
        if (!el.hasAttribute("data-credbuild-component") && !el.hasAttribute("data-credbuild-dropzone")) {
          dispatch({ type: "setUi", ui: { itemSelector: null } });
        }
      },
      children: iframe.enabled ? /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
        AutoFrame_default,
        {
          id: "preview-frame",
          className: getClassName29("frame"),
          "data-rfd-iframe": true,
          onReady: () => {
            setStatus("READY");
          },
          onNotReady: () => {
            setStatus("MOUNTED");
          },
          frameRef: ref,
          children: /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(autoFrameContext.Consumer, { children: ({ document: document2 }) => {
            if (Frame) {
              return /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(Frame, { document: document2, children: inner });
            }
            return inner;
          } })
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
        "div",
        {
          id: "preview-frame",
          className: getClassName29("frame"),
          ref,
          "data-credbuild-entry": true,
          children: inner
        }
      )
    }
  );
};

// components/CredBuild/components/Outline/index.tsx
init_react_import();

// components/LayerTree/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/Credibuild/components/LayerTree/styles.module.css#css-module
init_react_import();
var styles_module_default21 = { "LayerTree": "_LayerTree_nus40_1", "LayerTree-zoneTitle": "_LayerTree-zoneTitle_nus40_11", "LayerTree-helper": "_LayerTree-helper_nus40_17", "Layer": "_Layer_nus40_1", "Layer-inner": "_Layer-inner_nus40_29", "Layer--containsZone": "_Layer--containsZone_nus40_35", "Layer-clickable": "_Layer-clickable_nus40_39", "Layer--isSelected": "_Layer--isSelected_nus40_58", "Layer-chevron": "_Layer-chevron_nus40_79", "Layer--childIsSelected": "_Layer--childIsSelected_nus40_80", "Layer-zones": "_Layer-zones_nus40_84", "Layer-title": "_Layer-title_nus40_98", "Layer-name": "_Layer-name_nus40_107", "Layer-icon": "_Layer-icon_nus40_113", "Layer-zoneIcon": "_Layer-zoneIcon_nus40_118" };

// components/LayerTree/index.tsx
init_get_class_name_factory();
init_lucide_react();
init_root_droppable_id();
var import_react82 = require("react");
init_store2();
init_use_context_store();
var import_react_virtual2 = require("@tanstack/react-virtual");
var import_jsx_runtime77 = require("react/jsx-runtime");
var getClassName30 = get_class_name_factory_default("LayerTree", styles_module_default21);
var getClassNameLayer = get_class_name_factory_default("Layer", styles_module_default21);
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
  if (label !== void 0) {
    return label;
  }
  const [componentId, slotId] = zoneCompound.split(":");
  if (!slotId) {
    return;
  }
  const componentType = nodes[componentId]?.data.type;
  const configForComponent = componentType && componentType !== rootAreaId ? config.components[componentType] : config.root;
  return configForComponent?.fields?.[slotId]?.label ?? slotId;
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
  const nodeData = nodes[itemId];
  const componentType = nodeData?.data.type?.toString() || "Component";
  const label = config.components[componentType]?.label ?? componentType;
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
  const contentIds = zones[zoneCompound]?.contentIds ?? [];
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
var getEstimatedRowHeight = (itemId) => measuredRowHeights.get(itemId) ?? DEFAULT_LAYER_ROW_HEIGHT;
var cacheMeasuredRowHeight = (itemId, height) => {
  if (height <= 0) {
    return;
  }
  measuredRowHeights.set(itemId, height);
};
var getScrollParent = (el) => {
  let current = el?.parentElement ?? null;
  while (current) {
    const { overflow, overflowY } = getComputedStyle(current);
    if ([overflow, overflowY].some((value) => /auto|scroll/.test(value))) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
};
var Layer = (0, import_react82.forwardRef)(function Layer2({
  childIsSelected,
  dataIndex,
  depth,
  isSelected,
  node,
  selectedId,
  selectedPathIds
}, ref) {
  const dispatch = useAppStore((s) => s.dispatch);
  const zoneStore = (0, import_react82.useContext)(ZoneStoreContext);
  const isHovering = useContextStore(
    ZoneStoreContext,
    (s) => s.hoveringComponent === node.itemId
  );
  const containsZone = node.childZones.length > 0;
  const setItemSelector = (0, import_react82.useCallback)(
    (itemSelector) => {
      dispatch({ type: "setUi", ui: { itemSelector } });
    },
    [dispatch]
  );
  const shouldRenderChildren = isSelected || childIsSelected;
  const getLayerIcon = (type) => {
    const t = type.toLowerCase();
    if (t === "text" || t === "heading" || t.includes("heading")) return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(Type, { size: "14", strokeWidth: 2.5 });
    if (t.includes("hero")) return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(LayoutTemplate, { size: "14", strokeWidth: 2.5 });
    if (t.includes("pricing")) return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(CreditCard, { size: "14", strokeWidth: 2.5 });
    if (t.includes("stats")) return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(ChartColumn, { size: "14", strokeWidth: 2.5 });
    if (t.includes("testimonials")) return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(Quote, { size: "14", strokeWidth: 2.5 });
    if (t.includes("about") || t.includes("info")) return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(Info, { size: "14", strokeWidth: 2.5 });
    if (t.includes("gallery") || t.includes("image")) return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(Image, { size: "14", strokeWidth: 2.5 });
    if (t.includes("marketing") || t.includes("cta")) return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(Megaphone, { size: "14", strokeWidth: 2.5 });
    if (t.includes("content") || t.includes("blog")) return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(FileText, { size: "14", strokeWidth: 2.5 });
    if (t.includes("container") || t.includes("layout") || t.includes("flex")) return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(Box, { size: "14", strokeWidth: 2.5 });
    return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(LayoutGrid, { size: "14", strokeWidth: 2.5 });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: getClassNameLayer("inner"), children: /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(
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
              containsZone && /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
                "div",
                {
                  className: getClassNameLayer("chevron"),
                  title: isSelected ? "Collapse" : "Expand",
                  children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(ChevronDown, { size: "12" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: getClassNameLayer("title"), children: [
                /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: getClassNameLayer("icon"), children: getLayerIcon(node.componentType) }),
                /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: getClassNameLayer("name"), children: node.label })
              ] })
            ]
          }
        ) }),
        containsZone && shouldRenderChildren && node.childZones.map((childZone) => /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
          "div",
          {
            className: getClassNameLayer("zones"),
            children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(import_jsx_runtime77.Fragment, { children: [
    tree.label && /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { className: getClassName30("zoneTitle"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: getClassName30("zoneIcon"), children: /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(Layers, { size: "16" }) }),
      tree.label
    ] }),
    shouldVirtualize ? /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
      VirtualizedLayerTreeItems,
      {
        depth,
        selectedId,
        selectedPathIds,
        tree
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("ul", { className: getClassName30(), children: [
    tree.items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: getClassName30("helper"), children: "No items" }),
    tree.items.map((node) => /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
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
  const listRef = (0, import_react82.useRef)(null);
  const virtualizer = (0, import_react_virtual2.useVirtualizer)({
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
        /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
        "li",
        {
          "aria-hidden": "true",
          style: { height: `${trailingGap}px` }
        },
        `gap:${tree.zoneCompound}:${previousIndex}:end`
      )
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("ul", { className: getClassName30(), ref: listRef, children: [
    tree.items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: getClassName30("helper"), children: "No items" }),
    renderedItems
  ] });
};
var LayerTree = ({
  selectedId,
  selectedPathIds,
  trees
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(import_jsx_runtime77.Fragment, { children: trees.map((tree) => /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
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
init_store2();
var import_react83 = require("react");

// lib/data/find-zones-for-area.ts
init_react_import();
var findZonesForArea = (state, area) => {
  return Object.keys(state.indexes.zones).filter(
    (zone) => zone.split(":")[0] === area
  );
};

// components/CredBuild/components/Outline/index.tsx
var import_shallow8 = require("zustand/react/shallow");
var import_jsx_runtime78 = require("react/jsx-runtime");
var Outline = () => {
  const outlineOverride = useAppStore((s) => s.overrides.outline);
  const config = useAppStore((s) => s.config);
  const nodes = useAppStore((s) => s.state.indexes.nodes);
  const zones = useAppStore((s) => s.state.indexes.zones);
  const selectedId = useAppStore((s) => s.selectedItem?.props.id || null);
  const rootZones = useAppStore(
    (0, import_shallow8.useShallow)((s) => findZonesForArea(s.state, "root"))
  );
  const selectedPathIds = (0, import_react83.useMemo)(() => {
    const selectedPath = selectedId ? nodes[selectedId]?.path : null;
    return new Set(
      selectedPath?.map((candidate) => candidate.split(":")[0]).filter(Boolean) || []
    );
  }, [nodes, selectedId]);
  const trees = (0, import_react83.useMemo)(
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
  const Wrapper = (0, import_react83.useMemo)(() => outlineOverride || "div", [outlineOverride]);
  return /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(Wrapper, { children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
    LayerTree,
    {
      selectedId,
      selectedPathIds,
      trees
    }
  ) });
};

// components/CredBuild/index.tsx
init_default_viewports();

// lib/use-loaded-overrides.ts
init_react_import();
var import_react84 = require("react");

// lib/load-overrides.ts
init_react_import();
var loadOverrides = ({
  overrides,
  plugins
}) => {
  const collected = { ...overrides };
  plugins?.forEach((plugin) => {
    if (!plugin.overrides) return;
    Object.keys(plugin.overrides).forEach((_overridesType) => {
      const overridesType = _overridesType;
      if (!plugin.overrides?.[overridesType]) return;
      if (overridesType === "fieldTypes") {
        const fieldTypes = plugin.overrides.fieldTypes;
        Object.keys(fieldTypes).forEach((fieldType) => {
          collected.fieldTypes = collected.fieldTypes || {};
          const childNode2 = collected.fieldTypes[fieldType];
          const Comp2 = (props) => fieldTypes[fieldType]({
            ...props,
            children: childNode2 ? childNode2(props) : props.children
          });
          collected.fieldTypes[fieldType] = Comp2;
        });
        return;
      }
      const childNode = collected[overridesType];
      const Comp = (props) => plugin.overrides[overridesType]({
        ...props,
        children: childNode ? childNode(props) : props.children
      });
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
  return (0, import_react84.useMemo)(() => {
    return loadOverrides({ overrides, plugins });
  }, [plugins, overrides]);
};

// components/CredBuild/index.tsx
init_history();
init_permissions();

// lib/use-credbuild.ts
init_react_import();
var import_react85 = require("react");
var import_zustand6 = require("zustand");
init_make_state_public();
init_get_item();

// lib/data/resolve-data-by-id.ts
init_react_import();

// lib/data/resolve-and-replace-data.ts
init_react_import();
init_to_component();
async function resolveAndReplaceData(currentData, getState, trigger = "force") {
  const resolvedResult = await getState().resolveComponentData(
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
}

// lib/data/resolve-data-by-id.ts
async function resolveDataById(id, getState, trigger) {
  const node = getState().state.indexes.nodes[id];
  if (!node) {
    console.warn(
      `Warning: Could not find component with id "${id}" to resolve its data. Component may have been removed or the id is invalid.`
    );
    return;
  }
  await resolveAndReplaceData(node.data, getState, trigger);
}

// lib/data/resolve-data-by-selector.ts
init_react_import();
init_get_item();
init_to_component();
async function resolveDataBySelector(selector, getState, trigger) {
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
  await resolveAndReplaceData(itemAsComponent, getState, trigger);
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
var UseCredBuildStoreContext = (0, import_react85.createContext)(
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
  const [useCredBuildStore] = (0, import_react85.useState)(
    () => (0, import_zustand6.createStore)(
      () => generateUseCredBuild(
        convertToPickedStore(appStore.getState()),
        appStore.getState
      )
    )
  );
  (0, import_react85.useEffect)(() => {
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
    const useCredBuildApi = (0, import_react85.useContext)(UseCredBuildStoreContext);
    if (!useCredBuildApi) {
      throw new Error("useCredBuild must be used inside <CredBuild>.");
    }
    const result = (0, import_zustand6.useStore)(
      useCredBuildApi,
      selector ?? ((s) => s)
    );
    return result;
  };
}
function useCredBuild() {
  (0, import_react85.useEffect)(() => {
    console.warn(
      "You're using the `useCredBuild` method without a selector, which may cause unnecessary re-renders. Replace with `createUseCredBuild` and provide a selector for improved performance."
    );
  }, []);
  return createUseCredBuild()((s) => s);
}
function useGetCredBuild() {
  const useCredBuildApi = (0, import_react85.useContext)(UseCredBuildStoreContext);
  if (!useCredBuildApi) {
    throw new Error("useCredBuildGet must be used inside <CredBuild>.");
  }
  return useCredBuildApi.getState;
}

// components/CredBuild/index.tsx
init_walk_app_state();
var import_fast_equals4 = require("fast-equals");
init_populate_ids();
init_to_component();

// components/CredBuild/components/Layout/index.tsx
init_react_import();
var import_react99 = require("react");
init_lib();

// components/CredBuild/context.tsx
init_react_import();
var import_react86 = require("react");
var import_jsx_runtime79 = require("react/jsx-runtime");
var propsContext = (0, import_react86.createContext)({});
function PropsProvider(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(propsContext.Provider, { value: props, children: props.children });
}
var usePropsContext = () => (0, import_react86.useContext)(propsContext);

// css-module:/home/crediblemark/Project/Credibuild/components/CredBuild/components/Layout/styles.module.css#css-module
init_react_import();
var styles_module_default22 = { "CredBuildLayout": "_CredBuildLayout_ildl0_1", "CredBuildLayout-inner": "_CredBuildLayout-inner_ildl0_8", "CredBuildLayout--leftSideBarVisible": "_CredBuildLayout--leftSideBarVisible_ildl0_29", "CredBuildLayout--rightSideBarVisible": "_CredBuildLayout--rightSideBarVisible_ildl0_33", "CredBuild--hidePlugins": "_CredBuild--hidePlugins_ildl0_37", "CredBuildLayout-item": "_CredBuildLayout-item_ildl0_43", "CredBuildLayout-header": "_CredBuildLayout-header_ildl0_49", "CredBuildLayout-left": "_CredBuildLayout-left_ildl0_54", "CredBuildLayout-editor": "_CredBuildLayout-editor_ildl0_67", "CredBuildLayout-right": "_CredBuildLayout-right_ildl0_76", "CredBuildLayout-sidebar": "_CredBuildLayout-sidebar_ildl0_93", "CredBuildPluginTab": "_CredBuildPluginTab_ildl0_108", "CredBuildPluginTab--visible": "_CredBuildPluginTab--visible_ildl0_115", "CredBuildPluginTab-body": "_CredBuildPluginTab-body_ildl0_119", "CredBuildLayout--mounted": "_CredBuildLayout--mounted_ildl0_135" };

// lib/use-inject-css.ts
init_react_import();
var import_react87 = require("react");
var styles = ``;
var useInjectStyleSheet = (initialStyles, iframeEnabled) => {
  const [el, setEl] = (0, import_react87.useState)();
  (0, import_react87.useEffect)(() => {
    setEl(document.createElement("style"));
  }, []);
  (0, import_react87.useEffect)(() => {
    if (!el || typeof window === "undefined") {
      return;
    }
    el.innerHTML = initialStyles;
    if (iframeEnabled) {
      const frame = getFrame();
      frame?.head?.appendChild(el);
    }
    document.head.appendChild(el);
  }, [iframeEnabled, el, initialStyles]);
  return el;
};
var useInjectGlobalCss = (iframeEnabled) => {
  return useInjectStyleSheet(styles, iframeEnabled);
};

// components/CredBuild/components/Layout/index.tsx
init_store2();

// components/DefaultOverride/index.tsx
init_react_import();
var import_jsx_runtime80 = require("react/jsx-runtime");
var DefaultOverride = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(import_jsx_runtime80.Fragment, { children });

// components/CredBuild/components/Layout/index.tsx
init_use_hotkey();

// lib/use-preview-mode-hotkeys.ts
init_react_import();
var import_react88 = require("react");
init_use_hotkey();
init_store2();
var usePreviewModeHotkeys = () => {
  const appStore = useAppStoreApi();
  const toggleInteractive = (0, import_react88.useCallback)(() => {
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

// components/DragDropContext/index.tsx
init_react_import();
var import_react89 = require("@dnd-kit/react");
init_store2();
var import_react90 = require("react");
var import_dom = require("@dnd-kit/dom");
init_get_item();

// lib/dnd/NestedDroppablePlugin.ts
init_react_import();
var import_abstract3 = require("@dnd-kit/abstract");

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
      cancel?.();
      cancel = timeout2(() => {
        func.apply(context, args);
        lastRan = time();
      }, limit - (now - lastRan));
    }
  };
}

// lib/global-position.ts
init_react_import();
var GlobalPosition = class {
  constructor(target, original) {
    this.scaleFactor = 1;
    this.frameEl = null;
    this.frameRect = null;
    this.target = target;
    this.original = original;
    this.frameEl = document.querySelector("iframe#preview-frame");
    if (this.frameEl) {
      this.frameRect = this.frameEl.getBoundingClientRect();
      this.scaleFactor = this.frameRect.width / (this.frameEl.contentWindow?.innerWidth || 1);
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

// lib/dnd/NestedDroppablePlugin.ts
init_root_droppable_id();
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
var getZoneId2 = (candidate) => {
  let id = candidate?.id;
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
  const candidates = getPointerCollisions(position, manager);
  if (candidates.length > 0) {
    const sortedCandidates = depthSort(candidates);
    const draggable = manager.dragOperation.source;
    const draggedCandidateIndex = sortedCandidates.findIndex(
      (candidate) => candidate.id === draggable?.id
    );
    const draggedCandidateId = draggable?.id;
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
    const zone = getZoneId2(primaryCandidate);
    const area = primaryCandidateIsComponent && primaryCandidateData.containsActiveZone ? filteredCandidates[0].id : filteredCandidates[0]?.data.areaId;
    return { zone, area };
  }
  return {
    zone: rootDroppableId,
    area: rootAreaId
  };
};
var createNestedDroppablePlugin = ({ onChange }, id) => class NestedDroppablePlugin extends import_abstract3.Plugin {
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
init_insert2();
init_generate_id();
init_get_item();
var insertComponent = async (componentType, zone, index, appStore) => {
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
  dispatch({
    ...insertActionData,
    // Dispatch insert rather set, as user's may rely on this via onAction
    // We must always record history here so the insert is added to user history
    // If the user has defined a resolveData method, they will end up with 2 history
    // entries on insert - one for the initial insert, and one when the data resolves
    recordHistory: true
  });
  const itemSelector = { index, zone };
  dispatch({ type: "setUi", ui: { itemSelector } });
  const itemData = getItem(itemSelector, insertedState);
  if (!itemData) return;
  const resolveComponentData2 = getState().resolveComponentData;
  const resolved = await resolveComponentData2(itemData, "insert");
  if (!resolved.didChange) return;
  const latestItemSelector = getSelectorForId(getState().state, id);
  if (!latestItemSelector) return;
  dispatch({
    type: "replace",
    destinationZone: latestItemSelector.zone,
    destinationIndex: latestItemSelector.index,
    data: resolved.node
  });
};

// lib/move-component.ts
init_react_import();
init_root_droppable_id();
var moveComponent = async (id, sourceSelector, destinationSelector, appStore) => {
  const dispatch = appStore.getState().dispatch;
  dispatch({
    type: "move",
    sourceIndex: sourceSelector.index,
    sourceZone: sourceSelector.zone ?? rootDroppableId,
    destinationIndex: destinationSelector.index,
    destinationZone: destinationSelector.zone ?? rootDroppableId,
    recordHistory: false
  });
  const componentData = appStore.getState().state.indexes.nodes[id]?.data;
  if (!componentData) return;
  const resolveComponentData2 = appStore.getState().resolveComponentData;
  const resolvedData = await resolveComponentData2(componentData, "move");
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
      destinationZone: latestItemSelector.zone ?? rootDroppableId
    });
};

// components/DragDropContext/index.tsx
var import_use_debounce2 = require("use-debounce");
init_store3();
init_generate_id();
var import_zustand7 = require("zustand");

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
init_use_sensors();
var import_state = require("@dnd-kit/state");
var import_jsx_runtime81 = require("react/jsx-runtime");
var DEBUG3 = false;
var AREA_CHANGE_DEBOUNCE_MS = 100;
var useTempDisableFallback = (timeout3) => {
  const lastFallbackDisable = (0, import_react90.useRef)(null);
  return (0, import_react90.useCallback)((manager) => {
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
  const debouncedParamsRef = (0, import_react90.useRef)(null);
  const tempDisableFallback = useTempDisableFallback(100);
  const [zoneStore] = (0, import_react90.useState)(() => {
    const rootVirtualizers = /* @__PURE__ */ new Map();
    return (0, import_zustand7.createStore)(() => ({
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
          const el = frame?.querySelector(`[data-credbuild-component="${id}"]`);
          el?.scrollIntoView({ behavior: "smooth" });
        }
      }
    }));
  });
  const getChanged2 = (0, import_react90.useCallback)(
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
  const setDeepestAndCollide = (0, import_react90.useCallback)(
    (params, manager) => {
      const { zoneChanged, areaChanged } = getChanged2(params);
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
    [zoneStore, getChanged2, tempDisableFallback]
  );
  const setDeepestDb = (0, import_use_debounce2.useDebouncedCallback)(
    setDeepestAndCollide,
    AREA_CHANGE_DEBOUNCE_MS
  );
  const cancelDb = () => {
    setDeepestDb.cancel();
    debouncedParamsRef.current = null;
  };
  (0, import_react90.useEffect)(() => {
    if (DEBUG3) {
      return zoneStore.subscribe(
        (s) => console.log(
          s.previewIndex,
          Object.entries(s.zoneDepthIndex || {})[0]?.[0],
          Object.entries(s.areaDepthIndex || {})[0]?.[0]
        )
      );
    }
  }, [zoneStore]);
  const [plugins] = (0, import_react90.useState)(() => [
    ...disableAutoScroll ? import_dom.defaultPreset.plugins.filter((plugin) => plugin !== import_dom.AutoScroller) : import_dom.defaultPreset.plugins,
    createNestedDroppablePlugin(
      {
        onChange: (params, manager) => {
          const state = zoneStore.getState();
          const { zoneChanged, areaChanged } = getChanged2(params);
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
          if (params.zone !== "void" && state?.zoneDepthIndex["void"]) {
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
  const [dragListeners, setDragListeners] = (0, import_react90.useState)({});
  const dragMode = (0, import_react90.useRef)(null);
  const initialSelector = (0, import_react90.useRef)(void 0);
  const nextContextValue = (0, import_react90.useMemo)(
    () => ({
      mode: "edit",
      areaId: "root",
      depth: 0
    }),
    []
  );
  return /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
    dragListenerContext.Provider,
    {
      value: {
        dragListeners,
        setDragListeners
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
        import_react89.DragDropProvider,
        {
          plugins,
          sensors,
          onDragEnd: (event, manager) => {
            const entryEl = getFrame()?.querySelector("[data-credbuild-entry]");
            entryEl?.removeAttribute("data-credbuild-dragging");
            const { source, target } = event.operation;
            if (!source) {
              zoneStore.setState({ draggedItem: null });
              return;
            }
            const { zone, index } = source.data;
            const { previewIndex = {} } = zoneStore.getState() || {};
            const thisPreview = previewIndex[zone]?.props.id === source.id ? previewIndex[zone] : null;
            const onAnimationEnd = () => {
              zoneStore.setState({ draggedItem: null });
              if (event.canceled || target?.type === "void") {
                zoneStore.setState({ previewIndex: {} });
                dragListeners.dragend?.forEach((item) => {
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
              const movedToNewPosition = initialSelector.current?.zone !== thisPreview?.zone || initialSelector.current?.index !== thisPreview?.index;
              dispatch({
                type: "setUi",
                ui: {
                  itemSelector: { index, zone },
                  isDragging: false
                },
                recordHistory: movedToNewPosition
              });
              dragListeners.dragend?.forEach((item) => {
                const fn = typeof item === "function" ? item : item.fn;
                if (typeof fn === "function") {
                  fn(event, manager);
                }
              });
            };
            let dispose;
            dispose = (0, import_state.effect)(() => {
              if (source.status === "idle") {
                onAnimationEnd();
                dispose?.();
              }
            });
          },
          onDragOver: (event, manager) => {
            event.preventDefault();
            const draggedItem = zoneStore.getState()?.draggedItem;
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
              const collisionData = manager.collisionObserver.collisions[0]?.data;
              const dir = getDeepDir(target.element);
              const collisionPosition = collisionData?.direction === "up" || dir === "ltr" && collisionData?.direction === "left" || dir === "rtl" && collisionData?.direction === "right" ? "before" : "after";
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
            const path = appStore.getState().state.indexes.nodes[target.id]?.path || [];
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
            dragListeners.dragover?.forEach((item) => {
              const fn = typeof item === "function" ? item : item.fn;
              if (typeof fn === "function") {
                fn(event, manager);
              }
            });
          },
          onDragStart: (event, manager) => {
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
            dragListeners.dragstart?.forEach((item) => {
              const fn = typeof item === "function" ? item : item.fn;
              if (typeof fn === "function") {
                fn(event, manager);
              }
            });
          },
          onBeforeDragStart: (event) => {
            const isNewComponent = event.operation.source?.type === "drawer";
            dragMode.current = isNewComponent ? "new" : "existing";
            initialSelector.current = void 0;
            zoneStore.setState({ draggedItem: event.operation.source });
            if (appStore.getState().selectedItem?.props.id !== event.operation.source?.id) {
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
            const entryEl = getFrame()?.querySelector("[data-credbuild-entry]");
            entryEl?.setAttribute("data-credbuild-dragging", "true");
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(ZoneStoreProvider, { store: zoneStore, children: /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(DropZoneProvider, { value: nextContextValue, children }) })
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
  return /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(DragDropContextClient, { disableAutoScroll, children });
};

// components/CredBuild/components/Header/index.tsx
init_react_import();
var import_react93 = require("react");
init_store2();
init_lucide_react();
init_Heading();
init_IconButton();

// components/MenuBar/index.tsx
init_react_import();
init_lucide_react();
init_IconButton();
init_get_class_name_factory();

// css-module:/home/crediblemark/Project/Credibuild/components/MenuBar/styles.module.css#css-module
init_react_import();
var styles_module_default23 = { "MenuBar": "_MenuBar_1m2ld_1", "MenuBar--menuOpen": "_MenuBar--menuOpen_1m2ld_14", "MenuBar-inner": "_MenuBar-inner_1m2ld_29", "MenuBar-history": "_MenuBar-history_1m2ld_45" };

// components/MenuBar/index.tsx
init_store2();
var import_jsx_runtime82 = require("react/jsx-runtime");
var getClassName31 = get_class_name_factory_default("MenuBar", styles_module_default23);
function MenuBar({
  menuOpen = false,
  renderHeaderActions,
  setMenuOpen
}) {
  const back = useAppStore((s) => s.history.back);
  const forward = useAppStore((s) => s.history.forward);
  const hasFuture = useAppStore((s) => s.history.hasFuture());
  const hasPast = useAppStore((s) => s.history.hasPast());
  return /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
    "div",
    {
      className: getClassName31({ menuOpen }),
      onClick: (event) => {
        const element = event.target;
        if (window.matchMedia("(min-width: 638px)").matches) {
          return;
        }
        if (element.tagName === "A" && element.getAttribute("href")?.startsWith("#")) {
          setMenuOpen(false);
        }
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("div", { className: getClassName31("inner"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)("div", { className: getClassName31("history"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
            IconButton,
            {
              type: "button",
              title: "undo",
              disabled: !hasPast,
              onClick: back,
              children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(Undo2, { size: 21 })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
            IconButton,
            {
              type: "button",
              title: "redo",
              disabled: !hasFuture,
              onClick: forward,
              children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(Redo2, { size: 21 })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_jsx_runtime82.Fragment, { children: renderHeaderActions && renderHeaderActions() })
      ] })
    }
  );
}

// components/CredBuild/components/Header/index.tsx
init_Button2();
init_lib();

// components/ViewportControls/index.tsx
init_react_import();
init_lucide_react();
init_IconButton2();
init_store2();
var import_react91 = require("react");
init_lib();

// css-module:/home/crediblemark/Project/Credibuild/components/ViewportControls/styles.module.css#css-module
init_react_import();
var styles_module_default24 = { "ViewportControls": "_ViewportControls_1e0ai_1", "ViewportControls--fullScreen": "_ViewportControls--fullScreen_1e0ai_5", "ViewportControls-toggleButton": "_ViewportControls-toggleButton_1e0ai_14", "ViewportControls--isExpanded": "_ViewportControls--isExpanded_1e0ai_38", "ViewportControls-actions": "_ViewportControls-actions_1e0ai_42", "ViewportControls-actionsInner": "_ViewportControls-actionsInner_1e0ai_46", "ViewportControls-divider": "_ViewportControls-divider_1e0ai_75", "ViewportControls-zoomSelect": "_ViewportControls-zoomSelect_1e0ai_81", "ViewportControls-zoom": "_ViewportControls-zoom_1e0ai_81", "ViewportButton-inner": "_ViewportButton-inner_1e0ai_111", "ViewportButton--isActive": "_ViewportButton--isActive_1e0ai_119" };

// components/ViewportControls/index.tsx
var import_jsx_runtime83 = require("react/jsx-runtime");
var icons = {
  Smartphone: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(Smartphone, { size: 16 }),
  Tablet: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(Tablet, { size: 16 }),
  Monitor: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(Monitor, { size: 16 }),
  FullWidth: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(Expand, { size: 16 })
};
var getClassName32 = get_class_name_factory_default("ViewportControls", styles_module_default24);
var getClassNameButton = get_class_name_factory_default("ViewportButton", styles_module_default24);
var ActionButton = ({
  children,
  title,
  onClick,
  isActive,
  disabled
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("span", { className: getClassNameButton({ isActive }), suppressHydrationWarning: true, children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
    IconButton,
    {
      type: "button",
      title,
      disabled: disabled || isActive,
      onClick,
      suppressHydrationWarning: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("span", { className: getClassNameButton("inner"), children })
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
  const viewports = useAppStore((s) => s.viewports);
  const uiViewports = useAppStore((s) => s.state.ui.viewports);
  const defaultsContainAutoZoom = defaultZoomOptions.find(
    (option) => option.value === autoZoom
  );
  const zoomOptions = (0, import_react91.useMemo)(
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
  const [activeViewport, setActiveViewport] = (0, import_react91.useState)(
    uiViewports.current.width
  );
  (0, import_react91.useEffect)(() => {
    setActiveViewport(uiViewports.current.width);
  }, [uiViewports.current.width, uiViewports]);
  const [isExpanded, setIsExpanded] = (0, import_react91.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)(
    "div",
    {
      className: getClassName32({ isExpanded, fullScreen }),
      suppressHydrationWarning: true,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("div", { className: getClassName32("actions"), children: /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)("div", { className: getClassName32("actionsInner"), children: [
          viewports.map((viewport, i) => /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("div", { className: getClassName32("divider") }),
          /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
            ActionButton,
            {
              title: "Zoom viewport out",
              disabled: zoom <= zoomOptions[0]?.value,
              onClick: (e) => {
                e.stopPropagation();
                onZoom(
                  zoomOptions[Math.max(
                    zoomOptions.findIndex((option) => option.value === zoom) - 1,
                    0
                  )].value
                );
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(ZoomOut, { size: 16 })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
            ActionButton,
            {
              title: "Zoom viewport in",
              disabled: zoom >= zoomOptions[zoomOptions.length - 1]?.value,
              onClick: (e) => {
                e.stopPropagation();
                onZoom(
                  zoomOptions[Math.min(
                    zoomOptions.findIndex((option) => option.value === zoom) + 1,
                    zoomOptions.length - 1
                  )].value
                );
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(ZoomIn, { size: 16 })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime83.jsxs)("div", { className: getClassName32("zoom"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("div", { className: getClassName32("divider") }),
            /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
              "select",
              {
                className: getClassName32("zoomSelect"),
                value: zoom.toString(),
                onClick: (e) => {
                  e.stopPropagation();
                },
                onChange: (e) => {
                  onZoom(parseFloat(e.currentTarget.value));
                },
                children: zoomOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
          "button",
          {
            className: getClassName32("toggleButton"),
            title: "Toggle viewport menu",
            onClick: () => setIsExpanded((s) => !s),
            children: isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(X, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(Monitor, { size: 16 })
          }
        )
      ]
    }
  );
};

// components/CredBuild/components/Header/index.tsx
var import_shallow9 = require("zustand/react/shallow");

// lib/frame-context.tsx
init_react_import();
var import_react92 = require("react");
var import_jsx_runtime84 = require("react/jsx-runtime");
var FrameContext = (0, import_react92.createContext)(null);
var FrameProvider = ({
  children
}) => {
  const frameRef = (0, import_react92.useRef)(null);
  const value = (0, import_react92.useMemo)(
    () => ({
      frameRef
    }),
    []
  );
  return /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(FrameContext.Provider, { value, children });
};
var useCanvasFrame = () => {
  const context = (0, import_react92.useContext)(FrameContext);
  if (context === null) {
    throw new Error("useCanvasFrame must be used within a FrameProvider");
  }
  return context;
};

// css-module:/home/crediblemark/Project/Credibuild/components/CredBuild/components/Header/styles.module.css#css-module
init_react_import();
var styles_module_default25 = { "CredBuildHeader": "_CredBuildHeader_qzv5u_1", "CredBuildHeader-inner": "_CredBuildHeader-inner_qzv5u_20", "CredBuildHeader-viewportTools": "_CredBuildHeader-viewportTools_qzv5u_28", "CredBuildHeader-leftActions": "_CredBuildHeader-leftActions_qzv5u_35", "CredBuildHeader-toggle": "_CredBuildHeader-toggle_qzv5u_41", "CredBuildHeader-leftSideBarToggle": "_CredBuildHeader-leftSideBarToggle_qzv5u_47", "CredBuildHeader-rightSideBarToggle": "_CredBuildHeader-rightSideBarToggle_qzv5u_48", "CredBuildHeader-title": "_CredBuildHeader-title_qzv5u_52", "CredBuildHeader-path": "_CredBuildHeader-path_qzv5u_57", "CredBuildHeader-tools": "_CredBuildHeader-tools_qzv5u_68", "CredBuildHeader-menuButton": "_CredBuildHeader-menuButton_qzv5u_75" };

// components/CredBuild/components/Header/index.tsx
var import_jsx_runtime85 = require("react/jsx-runtime");
var getClassName33 = get_class_name_factory_default("CredBuildHeader", styles_module_default25);
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
  const defaultHeaderRender = (0, import_react93.useMemo)(() => {
    if (renderHeader) {
      console.warn(
        "`renderHeader` is deprecated. Please use `overrides.header` and the `useCredBuild` hook instead"
      );
      const RenderHeader = ({ actions, ...props }) => {
        const Comp = renderHeader;
        const appState = useAppStore((s) => s.state);
        return /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Comp, { ...props, dispatch, state: appState, children: actions });
      };
      return RenderHeader;
    }
    return DefaultOverride;
  }, [renderHeader, dispatch]);
  const defaultHeaderActionsRender = (0, import_react93.useMemo)(() => {
    if (renderHeaderActions) {
      console.warn(
        "`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `useCredBuild` hook instead."
      );
      const RenderHeader = (props) => {
        const Comp = renderHeaderActions;
        const appState = useAppStore((s) => s.state);
        return /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Comp, { ...props, dispatch, state: appState });
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
  const [menuOpen, setMenuOpen] = (0, import_react93.useState)(false);
  const rootTitle = useAppStore((s) => {
    const rootData = s.state.indexes.nodes["root"]?.data;
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
    _experimentalFullScreenCanvas
  } = useAppStore(
    (0, import_shallow9.useShallow)((s) => ({
      setUi: s.setUi,
      zoomConfig: s.zoomConfig,
      setZoomConfig: s.setZoomConfig,
      _experimentalFullScreenCanvas: s._experimentalFullScreenCanvas
    }))
  );
  const { viewports } = useAppStore(
    (0, import_shallow9.useShallow)((s) => ({
      viewports: s.state.ui.viewports
    }))
  );
  const { frameRef } = useCanvasFrame();
  const resetAutoZoom = useResetAutoZoom(frameRef);
  const toggleSidebars = (0, import_react93.useCallback)(
    (sidebar) => {
      const widerViewport = window.matchMedia("(min-width: 638px)").matches;
      const sideBarVisible = sidebar === "left" ? leftSideBarVisible : rightSideBarVisible;
      const oppositeSideBar = sidebar === "left" ? "rightSideBarVisible" : "leftSideBarVisible";
      dispatch({
        type: "setUi",
        ui: {
          [`${sidebar}SideBarVisible`]: !sideBarVisible,
          ...!widerViewport ? { [oppositeSideBar]: false } : {}
        }
      });
    },
    [dispatch, leftSideBarVisible, rightSideBarVisible]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
    CustomHeader,
    {
      actions: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_jsx_runtime85.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(CustomHeaderActions, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
          Button,
          {
            href: headerPath || "/",
            newTab: true,
            variant: "secondary",
            icon: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(ExternalLink, { size: 14 }),
            children: "View Web"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
          Button,
          {
            onClick: () => {
              const data = appStore.getState().state.data;
              onPublish && onPublish(data);
            },
            icon: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Globe, { size: 14 }),
            children: "Publish"
          }
        )
      ] }) }),
      children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
        "header",
        {
          className: getClassName33({
            leftSideBarVisible,
            rightSideBarVisible,
            hidePlugins
          }),
          children: /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { className: getClassName33("inner"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { className: getClassName33("leftActions"), children: [
              /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { style: { marginRight: "16px" }, children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
                Button,
                {
                  href: "/dashboard",
                  variant: "secondary",
                  size: "medium",
                  icon: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(LayoutDashboard, { size: 14 }),
                  children: "Dashboard"
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { className: getClassName33("toggle"), children: [
                /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { className: getClassName33("leftSideBarToggle"), children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
                  IconButton,
                  {
                    type: "button",
                    onClick: () => {
                      toggleSidebars("left");
                    },
                    title: "Toggle left sidebar",
                    children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(PanelLeft, { size: 16, focusable: "false" })
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { className: getClassName33("rightSideBarToggle"), children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
                  IconButton,
                  {
                    type: "button",
                    onClick: () => {
                      toggleSidebars("right");
                    },
                    title: "Toggle right sidebar",
                    children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(PanelRight, { size: 16, focusable: "false" })
                  }
                ) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { className: getClassName33("title"), children: /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(Heading7, { rank: "2", size: "xs", children: [
                /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("span", { style: { fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }, children: headerTitle || rootTitle || "Page" }),
                headerPath && /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_jsx_runtime85.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("code", { className: getClassName33("path"), style: { fontSize: "10px", opacity: 0.6, marginLeft: "8px" }, children: headerPath }) })
              ] }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { className: getClassName33("viewportTools"), children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
              ViewportControls,
              {
                fullScreen: _experimentalFullScreenCanvas,
                autoZoom: zoomConfig.autoZoom,
                zoom: zoomConfig.zoom,
                onViewportChange: (viewport) => {
                  const isFullWidth = viewport.width === "100%";
                  const uiViewport = {
                    ...viewport,
                    height: viewport.height || "auto",
                    zoom: isFullWidth ? 1 : zoomConfig.zoom
                  };
                  const newUi = {
                    viewports: { ...viewports, current: uiViewport }
                  };
                  if (isFullWidth) {
                    setZoomConfig({ ...zoomConfig, zoom: 1 });
                  }
                  setUi(newUi);
                },
                onZoom: (zoom) => {
                  setZoomConfig({ ...zoomConfig, zoom });
                }
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { className: getClassName33("tools"), children: [
              /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { className: getClassName33("menuButton"), children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
                IconButton,
                {
                  type: "button",
                  onClick: () => {
                    return setMenuOpen(!menuOpen);
                  },
                  title: "Toggle menu bar",
                  children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(ChevronUp, { size: 16, focusable: "false" }) : /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(ChevronDown, { size: 16, focusable: "false" })
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
                MenuBar,
                {
                  dispatch,
                  onPublish,
                  menuOpen,
                  renderHeaderActions: () => /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(CustomHeaderActions, { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
                      Button,
                      {
                        href: headerPath || "/",
                        newTab: true,
                        variant: "secondary",
                        icon: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(ExternalLink, { size: 14 }),
                        children: "View Web"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
                      Button,
                      {
                        onClick: () => {
                          const data = appStore.getState().state.data;
                          onPublish && onPublish(data);
                        },
                        icon: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Globe, { size: 14 }),
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
var Header = (0, import_react93.memo)(HeaderInner);

// components/SidebarSection/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/Credibuild/components/SidebarSection/styles.module.css#css-module
init_react_import();
var styles_module_default26 = { "SidebarSection": "_SidebarSection_1oj6d_1", "SidebarSection-title": "_SidebarSection-title_1oj6d_12", "SidebarSection--noBorderTop": "_SidebarSection--noBorderTop_1oj6d_38", "SidebarSection-content": "_SidebarSection-content_1oj6d_42", "SidebarSection-breadcrumbLabel": "_SidebarSection-breadcrumbLabel_1oj6d_51", "SidebarSection-breadcrumbs": "_SidebarSection-breadcrumbs_1oj6d_80", "SidebarSection-breadcrumb": "_SidebarSection-breadcrumb_1oj6d_51", "SidebarSection-heading": "_SidebarSection-heading_1oj6d_92", "SidebarSection-loadingOverlay": "_SidebarSection-loadingOverlay_1oj6d_96" };

// components/SidebarSection/index.tsx
init_get_class_name_factory();
init_Heading();
init_Loader();

// components/Breadcrumbs/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/Credibuild/components/Breadcrumbs/styles.module.css#css-module
init_react_import();
var styles_module_default27 = { "Breadcrumbs": "_Breadcrumbs_1e0gb_1", "Breadcrumbs-breadcrumbLabel": "_Breadcrumbs-breadcrumbLabel_1e0gb_7", "Breadcrumbs-breadcrumb": "_Breadcrumbs-breadcrumb_1e0gb_7" };

// components/Breadcrumbs/index.tsx
init_get_class_name_factory();
init_lucide_react();

// lib/use-breadcrumbs.ts
init_react_import();
var import_react94 = require("react");
init_store2();
var useBreadcrumbs = (renderCount) => {
  const selectedId = useAppStore((s) => s.selectedItem?.props.id);
  const config = useAppStore((s) => s.config);
  const path = useAppStore((s) => s.state.indexes.nodes[selectedId]?.path);
  const appStore = useAppStoreApi();
  return (0, import_react94.useMemo)(() => {
    const breadcrumbs = path?.map((zoneCompound) => {
      const [componentId] = zoneCompound.split(":");
      if (componentId === "root") {
        return {
          label: config?.root?.label || "Page",
          selector: null
        };
      }
      const node = appStore.getState().state.indexes.nodes[componentId];
      const parentId = node.path[node.path.length - 1];
      const contentIds = appStore.getState().state.indexes.zones[parentId]?.contentIds || [];
      const index = contentIds.indexOf(componentId);
      const label = node ? config.components[node.data.type]?.label ?? node.data.type : "Component";
      return {
        label,
        selector: node ? {
          index,
          zone: node.path[node.path.length - 1]
        } : null
      };
    }) || [];
    if (renderCount) {
      return breadcrumbs.slice(breadcrumbs.length - renderCount);
    }
    return breadcrumbs;
  }, [path, renderCount, appStore, config.components, config?.root?.label]);
};

// components/Breadcrumbs/index.tsx
init_store2();
var import_jsx_runtime86 = require("react/jsx-runtime");
var getClassName34 = get_class_name_factory_default("Breadcrumbs", styles_module_default27);
var Breadcrumbs = ({
  children,
  numParents = 1
}) => {
  const setUi = useAppStore((s) => s.setUi);
  const breadcrumbs = useBreadcrumbs(numParents);
  return /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("div", { className: getClassName34(), children: [
    breadcrumbs.map((breadcrumb, i) => /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)("div", { className: getClassName34("breadcrumb"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
        "button",
        {
          type: "button",
          className: getClassName34("breadcrumbLabel"),
          onClick: () => setUi({ itemSelector: breadcrumb.selector }),
          children: breadcrumb.label
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(ChevronRight, { size: 16 })
    ] }, i)),
    children
  ] });
};

// components/SidebarSection/index.tsx
var import_jsx_runtime87 = require("react/jsx-runtime");
var getClassName35 = get_class_name_factory_default("SidebarSection", styles_module_default26);
var SidebarSection = ({
  children,
  title,
  background,
  showBreadcrumbs,
  noBorderTop,
  isLoading
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)("div", { className: getClassName35({ noBorderTop }), style: { background }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("div", { className: getClassName35("title"), children: /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)("div", { className: getClassName35("breadcrumbs"), children: [
      showBreadcrumbs && /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(Breadcrumbs, {}),
      /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("div", { className: getClassName35("heading"), children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(Heading7, { rank: "2", size: "xs", children: title }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("div", { className: getClassName35("content"), children }),
    isLoading && /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("div", { className: getClassName35("loadingOverlay"), children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(Loader, { size: 32 }) })
  ] });
};

// components/CredBuild/components/Canvas/index.tsx
init_react_import();
init_css_box_model_esm();
var import_react95 = require("react");
init_store2();

// css-module:/home/crediblemark/Project/Credibuild/components/CredBuild/components/Canvas/styles.module.css#css-module
init_react_import();
var styles_module_default28 = { "CredBuildCanvas": "_CredBuildCanvas_1ivia_1", "CredBuildCanvas--fullScreen": "_CredBuildCanvas--fullScreen_1ivia_22", "CredBuildCanvas-inner": "_CredBuildCanvas-inner_1ivia_33", "CredBuildCanvas-root": "_CredBuildCanvas-root_1ivia_42", "CredBuildCanvas--ready": "_CredBuildCanvas--ready_1ivia_67", "CredBuildCanvas-loader": "_CredBuildCanvas-loader_1ivia_72", "CredBuildCanvas--showLoader": "_CredBuildCanvas--showLoader_1ivia_82" };

// components/CredBuild/components/Canvas/index.tsx
init_lib();
init_Loader();
var import_shallow10 = require("zustand/react/shallow");
init_default_viewports();
var import_jsx_runtime88 = require("react/jsx-runtime");
var getClassName36 = get_class_name_factory_default("CredBuildCanvas", styles_module_default28);
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
    (0, import_shallow10.useShallow)((s) => ({
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
    (0, import_shallow10.useShallow)((s) => ({
      leftSideBarVisible: s.state.ui.leftSideBarVisible,
      rightSideBarVisible: s.state.ui.rightSideBarVisible,
      leftSideBarWidth: s.state.ui.leftSideBarWidth,
      rightSideBarWidth: s.state.ui.rightSideBarWidth,
      viewports: s.state.ui.viewports
    }))
  );
  const [showTransition, setShowTransition] = (0, import_react95.useState)(false);
  const isResizingRef = (0, import_react95.useRef)(false);
  const defaultRender = (0, import_react95.useMemo)(() => {
    const CredBuildDefault = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(import_jsx_runtime88.Fragment, { children });
    return CredBuildDefault;
  }, []);
  const CustomPreview = (0, import_react95.useMemo)(
    () => overrides.preview || defaultRender,
    [overrides, defaultRender]
  );
  const getFrameDimensions = (0, import_react95.useCallback)(() => {
    if (frameRef.current) {
      const frame = frameRef.current;
      const box = getBox(frame);
      return { width: box.contentBox.width, height: box.contentBox.height };
    }
    return { width: 0, height: 0 };
  }, [frameRef]);
  (0, import_react95.useEffect)(() => {
    resetAutoZoom();
  }, [
    frameRef,
    leftSideBarVisible,
    rightSideBarVisible,
    rightSideBarWidth,
    viewports,
    resetAutoZoom
  ]);
  (0, import_react95.useEffect)(() => {
    const { height: frameHeight } = getFrameDimensions();
    if (viewports.current.height === "auto") {
      const newRootHeight = frameHeight / zoomConfig.zoom;
      if (zoomConfig.rootHeight !== newRootHeight) {
        setZoomConfig({
          ...zoomConfig,
          rootHeight: newRootHeight
        });
      }
    }
  }, [
    zoomConfig.zoom,
    getFrameDimensions,
    setZoomConfig,
    viewports,
    zoomConfig.rootHeight
  ]);
  (0, import_react95.useEffect)(() => {
    if (ZOOM_ON_CHANGE) {
      resetAutoZoom();
    }
  }, [viewports.current.width, viewports, resetAutoZoom]);
  (0, import_react95.useEffect)(() => {
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
  const [showLoader, setShowLoader] = (0, import_react95.useState)(false);
  (0, import_react95.useEffect)(() => {
    setTimeout(() => {
      setShowLoader(true);
    }, 500);
  }, []);
  const appStoreApi = useAppStoreApi();
  (0, import_react95.useEffect)(() => {
    if (typeof window === "undefined") return;
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
        state: {
          ...s.state,
          ui: {
            ...s.state.ui,
            viewports: {
              ...s.state.ui.viewports,
              current: {
                ...s.state.ui.viewports.current,
                height: closestViewport?.height || "auto",
                width: closestViewport?.width
              }
            }
          }
        }
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
    frameRef
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(
    "div",
    {
      className: getClassName36({
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
      children: /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)("div", { className: getClassName36("inner"), ref: frameRef, children: [
        /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(
          "div",
          {
            className: getClassName36("root"),
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
            children: /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(CustomPreview, { children: /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(Preview, {}) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("div", { className: getClassName36("loader"), children: /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(Loader, { size: 24 }) })
      ] })
    }
  );
};

// lib/use-sidebar-resize.ts
init_react_import();
var import_react96 = require("react");
init_store2();
function useSidebarResize(position, dispatch) {
  const [width, setWidth] = (0, import_react96.useState)(null);
  const sidebarRef = (0, import_react96.useRef)(null);
  const storeWidth = useAppStore(
    (s) => position === "left" ? s.state.ui.leftSideBarWidth : s.state.ui.rightSideBarWidth
  );
  (0, import_react96.useEffect)(() => {
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
  (0, import_react96.useEffect)(() => {
    if (storeWidth !== void 0) {
      setWidth(storeWidth);
    }
  }, [storeWidth]);
  const handleResizeEnd = (0, import_react96.useCallback)(
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
          JSON.stringify({
            ...widths,
            [position]: width2
          })
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
var import_react97 = require("react");
init_get_class_name_factory();

// css-module:/home/crediblemark/Project/Credibuild/components/CredBuild/components/ResizeHandle/styles.module.css#css-module
init_react_import();
var styles_module_default29 = { "ResizeHandle": "_ResizeHandle_144bf_2", "ResizeHandle--left": "_ResizeHandle--left_144bf_16", "ResizeHandle--right": "_ResizeHandle--right_144bf_20" };

// components/CredBuild/components/ResizeHandle/index.tsx
init_lib();
var import_jsx_runtime89 = require("react/jsx-runtime");
var getClassName37 = get_class_name_factory_default("ResizeHandle", styles_module_default29);
var ResizeHandle = ({
  position,
  sidebarRef,
  onResize,
  onResizeEnd
}) => {
  const { frameRef } = useCanvasFrame();
  const resetAutoZoom = useResetAutoZoom(frameRef);
  const handleRef = (0, import_react97.useRef)(null);
  const isDragging = (0, import_react97.useRef)(false);
  const startX = (0, import_react97.useRef)(0);
  const startWidth = (0, import_react97.useRef)(0);
  const handleMouseMove = (0, import_react97.useCallback)(
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
  const handleMouseUp = (0, import_react97.useCallback)(() => {
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
    const finalWidth = sidebarRef.current?.getBoundingClientRect().width || 0;
    onResizeEnd(finalWidth);
    resetAutoZoom();
  }, [onResizeEnd, handleMouseMove, resetAutoZoom, sidebarRef]);
  const handleMouseDown = (0, import_react97.useCallback)(
    (e) => {
      isDragging.current = true;
      startX.current = e.clientX;
      startWidth.current = sidebarRef.current?.getBoundingClientRect().width || 0;
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
  return /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
    "div",
    {
      ref: handleRef,
      className: getClassName37({ [position]: true }),
      onMouseDown: handleMouseDown
    }
  );
};

// components/CredBuild/components/Sidebar/index.tsx
init_get_class_name_factory();

// css-module:/home/crediblemark/Project/Credibuild/components/CredBuild/components/Sidebar/styles.module.css#css-module
init_react_import();
var styles_module_default30 = { "Sidebar": "_Sidebar_1kcif_1", "Sidebar--isVisible": "_Sidebar--isVisible_1kcif_13", "Sidebar--left": "_Sidebar--left_1kcif_17", "Sidebar--right": "_Sidebar--right_1kcif_29", "Sidebar-resizeHandle": "_Sidebar-resizeHandle_1kcif_42" };

// components/CredBuild/components/Sidebar/index.tsx
var import_jsx_runtime90 = require("react/jsx-runtime");
var getClassName38 = get_class_name_factory_default("Sidebar", styles_module_default30);
var Sidebar = ({
  position,
  sidebarRef,
  isVisible,
  onResize,
  onResizeEnd,
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)(import_jsx_runtime90.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(
      "div",
      {
        ref: sidebarRef,
        className: getClassName38({ [position]: true, isVisible }),
        children
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("div", { className: `${getClassName38("resizeHandle")}`, children: /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(
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
var import_react98 = require("react");
init_use_hotkey();
init_store2();
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
  if (e?.defaultPrevented) return true;
  const origin = e?.composedPath?.()[0] || e?.target || document.activeElement;
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
  const deleteSelectedComponent = (0, import_react98.useCallback)(
    (e) => {
      if (shouldBlockDeleteHotkey(e)) {
        return false;
      }
      const { state, dispatch, permissions, selectedItem } = appStore.getState();
      const sel = state.ui?.itemSelector;
      if (!sel?.zone || !selectedItem) return true;
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

// css-module:/home/crediblemark/Project/Credibuild/components/CredBuild/components/Nav/styles.module.css#css-module
init_react_import();
var styles_module_default31 = { "Nav": "_Nav_wbh7e_1", "Nav-list": "_Nav-list_wbh7e_9", "CredBuildHeader-path": "_CredBuildHeader-path_wbh7e_20", "NavItem": "_NavItem_wbh7e_38", "NavItem-link": "_NavItem-link_wbh7e_43", "NavItem-linkIcon": "_NavItem-linkIcon_wbh7e_64", "NavItem--active": "_NavItem--active_wbh7e_77", "NavItem--mobileOnly": "_NavItem--mobileOnly_wbh7e_90", "NavItem--desktopOnly": "_NavItem--desktopOnly_wbh7e_95" };

// components/CredBuild/components/Nav/index.tsx
init_lib();
var import_jsx_runtime91 = require("react/jsx-runtime");
var getClassName39 = get_class_name_factory_default("Nav", styles_module_default31);
var getClassNameItem3 = get_class_name_factory_default("NavItem", styles_module_default31);
var MenuItem = ({
  label,
  icon,
  onClick,
  isActive,
  mobileOnly,
  desktopOnly
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(
    "li",
    {
      className: getClassNameItem3({
        active: isActive,
        mobileOnly,
        desktopOnly
      }),
      children: onClick && /* @__PURE__ */ (0, import_jsx_runtime91.jsxs)("div", { className: getClassNameItem3("link"), onClick, children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime91.jsx)("span", { className: getClassNameItem3("linkIcon"), children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime91.jsx)("span", { className: getClassNameItem3("linkLabel"), children: label })
      ] })
    }
  );
};
var Nav = ({
  items,
  mobileActions
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime91.jsxs)("nav", { className: getClassName39(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime91.jsx)("ul", { className: getClassName39("list"), children: Object.entries(items).map(([key, item]) => /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(MenuItem, { ...item }, key)) }),
    mobileActions && /* @__PURE__ */ (0, import_jsx_runtime91.jsx)("div", { className: getClassName39("mobileActions"), children: mobileActions })
  ] });
};

// components/CredBuild/components/Layout/index.tsx
init_IconButton2();
init_lucide_react();

// plugins/blocks/index.tsx
init_react_import();
init_lucide_react();

// css-module:/home/crediblemark/Project/Credibuild/plugins/blocks/styles.module.css#css-module
init_react_import();
var styles_module_default32 = { "BlocksPlugin": "_BlocksPlugin_1ey1i_1" };

// plugins/blocks/index.tsx
init_lib();
var import_jsx_runtime92 = require("react/jsx-runtime");
var getClassName40 = get_class_name_factory_default("BlocksPlugin", styles_module_default32);
var blocksPlugin = () => ({
  name: "blocks",
  label: "Blocks",
  render: () => /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("div", { className: getClassName40(), children: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(Components, {}) }),
  icon: /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(Shapes, {})
});

// plugins/outline/index.tsx
init_react_import();
init_lucide_react();

// css-module:/home/crediblemark/Project/Credibuild/plugins/outline/styles.module.css#css-module
init_react_import();
var styles_module_default33 = { "OutlinePlugin": "_OutlinePlugin_q92j6_1" };

// plugins/outline/index.tsx
init_lib();
var import_jsx_runtime93 = require("react/jsx-runtime");
var getClassName41 = get_class_name_factory_default("OutlinePlugin", styles_module_default33);
var outlinePlugin = () => ({
  name: "outline",
  label: "Outline",
  render: () => /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("div", { className: getClassName41(), children: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(Outline, {}) }),
  icon: /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(List, {})
});

// plugins/fields/index.tsx
init_react_import();
init_lucide_react();
init_store2();

// css-module:/home/crediblemark/Project/Credibuild/plugins/fields/styles.module.css#css-module
init_react_import();
var styles_module_default34 = { "FieldsPlugin": "_FieldsPlugin_6as57_1", "FieldsPlugin-header": "_FieldsPlugin-header_6as57_7" };

// plugins/fields/index.tsx
init_lib();
var import_jsx_runtime94 = require("react/jsx-runtime");
var getClassName42 = get_class_name_factory_default("FieldsPlugin", styles_module_default34);
var CurrentTitle = () => {
  const label = useAppStore((s) => {
    const selectedItem = s.selectedItem;
    return selectedItem ? s.config.components[selectedItem.type]?.label ?? selectedItem.type : "Page";
  });
  return label;
};
var fieldsPlugin = ({ desktopSideBar = "right" } = {}) => ({
  name: "fields",
  label: "Fields",
  render: () => /* @__PURE__ */ (0, import_jsx_runtime94.jsxs)("div", { className: getClassName42(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime94.jsx)("div", { className: getClassName42("header"), children: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(Breadcrumbs, { numParents: 2, children: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(CurrentTitle, {}) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(Fields, {})
  ] }),
  icon: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(RectangleEllipsis, {}),
  mobileOnly: desktopSideBar === "right"
});

// components/CredBuild/components/Layout/index.tsx
var import_jsx_runtime95 = require("react/jsx-runtime");
var getClassName43 = get_class_name_factory_default("CredBuild", styles_module_default22);
var getLayoutClassName = get_class_name_factory_default("CredBuildLayout", styles_module_default22);
var getPluginTabClassName = get_class_name_factory_default("CredBuildPluginTab", styles_module_default22);
var FieldSideBar = () => {
  const title = useAppStore(
    (s) => s.selectedItem ? s.config.components[s.selectedItem.type]?.["label"] ?? s.selectedItem.type.toString() : s.config.root?.label || "Page"
  );
  return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(SidebarSection, { noBorderTop: true, showBreadcrumbs: true, title, children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(Fields, {}) });
};
var PluginTab = ({
  children,
  visible,
  mobileOnly
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("div", { className: getPluginTabClassName({ visible, mobileOnly }), children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("div", { className: getPluginTabClassName("body"), children }) });
};
var Layout = ({ children }) => {
  const {
    iframe: _iframe,
    dnd,
    initialHistory: _initialHistory,
    plugins,
    height
  } = usePropsContext();
  const iframe = (0, import_react99.useMemo)(
    () => ({
      enabled: true,
      waitForStyles: true,
      ..._iframe
    }),
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
  (0, import_react99.useEffect)(() => {
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
          ui: (ui) => ({
            ...ui,
            ...ui.rightSideBarVisible ? { leftSideBarVisible: false } : {}
          })
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);
  const overrides = useAppStore((s) => s.overrides);
  const CustomCredBuild = (0, import_react99.useMemo)(
    () => overrides.credbuild || DefaultOverride,
    [overrides]
  );
  const [mounted, setMounted] = (0, import_react99.useState)(false);
  (0, import_react99.useEffect)(() => {
    setMounted(true);
  }, []);
  const ready = useAppStore((s) => s.status === "READY");
  useMonitorHotkeys();
  (0, import_react99.useEffect)(() => {
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
  const currentPlugin = useAppStore((s) => s.state.ui.plugin?.current);
  const appStoreApi = useAppStoreApi();
  const [mobilePanelHeightMode, setMobilePanelHeightMode] = (0, import_react99.useState)("toggle");
  const hasLegacySideBarPlugin = (0, import_react99.useMemo)(
    () => !!plugins?.find((p) => p.name === "legacy-side-bar"),
    [plugins]
  );
  const pluginItems = (0, import_react99.useMemo)(() => {
    const details = {};
    const defaultPlugins = [blocksPlugin(), outlinePlugin()];
    const isLegacy = (plugin) => plugin.name === "legacy-side-bar" ? -1 : 0;
    const combinedPlugins = [
      ...defaultPlugins,
      ...plugins ?? []
    ].sort((a, b) => isLegacy(a) - isLegacy(b));
    if (!plugins?.some((p) => p.name === "fields")) {
      combinedPlugins.push(fieldsPlugin());
    }
    combinedPlugins?.forEach((plugin) => {
      if (plugin.name && plugin.render) {
        if (details[plugin.name]) {
          delete details[plugin.name];
        }
        details[plugin.name] = {
          label: plugin.label ?? plugin.name,
          icon: plugin.icon ?? /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(ToyBrick, {}),
          onClick: () => {
            setMobilePanelHeightMode(plugin.mobilePanelHeight ?? "toggle");
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
  (0, import_react99.useEffect)(() => {
    if (!currentPlugin) {
      const names = Object.keys(pluginItems);
      setUi({ plugin: { current: names[0] } });
    }
  }, [pluginItems, currentPlugin, setUi]);
  const hasDesktopFieldsPlugin = pluginItems["fields"] && pluginItems["fields"].mobileOnly === false;
  const mobilePanelExpanded = useAppStore(
    (s) => s.state.ui.mobilePanelExpanded ?? false
  );
  return /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)(
    "div",
    {
      className: `CredBuild ${getClassName43({
        hidePlugins: hasLegacySideBarPlugin
      })}`,
      id: instanceId,
      style: { height },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(DragDropContext, { disableAutoScroll: dnd?.disableAutoScroll, children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(CustomCredBuild, { children: children || /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(FrameProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
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
            children: /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)(
              "div",
              {
                className: getLayoutClassName("inner"),
                style: layoutOptions,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("div", { className: getLayoutClassName("header"), children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(Header, { hidePlugins: hasLegacySideBarPlugin }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime95.jsxs)(
                    Sidebar,
                    {
                      position: "left",
                      sidebarRef: leftSidebarRef,
                      isVisible: leftSideBarVisible,
                      onResize: setLeftWidth,
                      onResizeEnd: handleLeftSidebarResizeEnd,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("div", { className: getLayoutClassName("nav"), children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
                          Nav,
                          {
                            items: pluginItems,
                            mobileActions: typeof window !== "undefined" && !window.matchMedia("(min-width: 638px)").matches && leftSideBarVisible && mobilePanelHeightMode === "toggle" && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
                              IconButton,
                              {
                                type: "button",
                                title: "maximize",
                                onClick: () => {
                                  setUi({
                                    mobilePanelExpanded: !mobilePanelExpanded
                                  });
                                },
                                children: mobilePanelExpanded ? /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(Minimize2, { size: 21 }) : /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(Maximize2, { size: 21 })
                              }
                            )
                          }
                        ) }),
                        Object.entries(pluginItems).map(
                          ([id, { mobileOnly, render: Render2, label }]) => /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
                            PluginTab,
                            {
                              visible: currentPlugin === id,
                              mobileOnly,
                              children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(Render2, {})
                            },
                            id
                          )
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(Canvas, {}),
                  !hasDesktopFieldsPlugin && /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
                    Sidebar,
                    {
                      position: "right",
                      sidebarRef: rightSidebarRef,
                      isVisible: rightSideBarVisible,
                      onResize: setRightWidth,
                      onResizeEnd: handleRightSidebarResizeEnd,
                      children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(FieldSideBar, {})
                    }
                  )
                ]
              }
            )
          }
        ) }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime95.jsx)("div", { id: "credbuild-portal-root", className: getClassName43("portal") })
      ]
    }
  );
};

// components/CredBuild/index.tsx
init_use_safe_id();
var import_jsx_runtime96 = require("react/jsx-runtime");
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
  const iframe = (0, import_react100.useMemo)(
    () => ({
      enabled: true,
      waitForStyles: true,
      ..._iframe
    }),
    [_iframe]
  );
  const [generatedAppState] = (0, import_react100.useState)(() => {
    const initial = { ...defaultAppState.ui, ...initialUi };
    let clientUiState = {};
    if (Object.keys(initialData?.root || {}).length > 0 && !initialData?.root?.props) {
      console.warn(
        "Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically."
      );
    }
    const rootProps = initialData?.root?.props || initialData?.root || {};
    const defaultedRootProps = {
      ...config.root?.defaultProps,
      ...rootProps
    };
    const root = populateIds(
      toComponent({ ...initialData?.root, props: defaultedRootProps }),
      config
    );
    const newAppState = {
      ...defaultAppState,
      data: {
        ...initialData,
        root: { ...initialData?.root, props: root.props },
        content: initialData.content || []
      },
      ui: {
        ...initial,
        ...clientUiState,
        // Store categories under componentList on state to allow render functions and plugins to modify
        componentList: config.categories ? Object.entries(config.categories).reduce(
          (acc, [categoryName, category]) => {
            return {
              ...acc,
              [categoryName]: {
                title: category.title,
                components: category.components,
                expanded: category.defaultExpanded,
                visible: category.visible
              }
            };
          },
          {}
        ) : {}
      }
    };
    return walkAppState(newAppState, config);
  });
  const { appendData = true } = _initialHistory || {};
  const [blendedHistories] = (0, import_react100.useState)(
    [
      ..._initialHistory?.histories || [],
      ...appendData ? [{ state: generatedAppState }] : []
    ].map((history) => {
      let newState = { ...generatedAppState, ...history.state };
      if (!history.state.indexes) {
        newState = walkAppState(newState, config);
      }
      return {
        ...history,
        state: newState
      };
    })
  );
  const initialHistoryIndex = (0, import_react100.useMemo)(() => {
    if (_initialHistory?.index !== void 0 && _initialHistory?.index >= 0 && _initialHistory?.index < blendedHistories.length) {
      return _initialHistory?.index;
    }
    return blendedHistories.length - 1;
  }, [_initialHistory?.index, blendedHistories.length]);
  const initialAppState = blendedHistories[initialHistoryIndex].state;
  const loadedOverrides = useLoadedOverrides({
    overrides,
    plugins
  });
  const loadedFieldTransforms = (0, import_react100.useMemo)(() => {
    const _plugins = plugins || [];
    const pluginFieldTransforms = _plugins.reduce(
      (acc, plugin) => ({ ...acc, ...plugin.fieldTransforms }),
      {}
    );
    return {
      ...pluginFieldTransforms,
      ...fieldTransforms
    };
  }, [fieldTransforms, plugins]);
  const instanceId = useSafeId();
  const generateAppStore = (0, import_react100.useCallback)(
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
  const [appStore] = (0, import_react100.useState)(
    () => createAppStore(generateAppStore(initialAppState))
  );
  (0, import_react100.useEffect)(() => {
    if (process.env.NODE_ENV !== "production") {
      window.__CREDBUILD_INTERNAL_DO_NOT_USE = { appStore };
    }
  }, [appStore]);
  (0, import_react100.useEffect)(() => {
    const state = appStore.getState().state;
    appStore.setState({
      ...generateAppStore(state)
    });
  }, [generateAppStore, appStore]);
  useRegisterHistorySlice(appStore, {
    histories: blendedHistories,
    index: initialHistoryIndex,
    initialAppState
  });
  const previousData = (0, import_react100.useRef)(null);
  (0, import_react100.useEffect)(() => {
    return appStore.subscribe(
      (s) => s.state.data,
      (data) => {
        if (onChange) {
          if ((0, import_fast_equals4.deepEqual)(data, previousData.current)) return;
          onChange(data);
          previousData.current = data;
        }
      }
    );
  }, [onChange, appStore]);
  useRegisterPermissionsSlice(appStore, permissions);
  const uCredBuildStore = useRegisterUseCredBuildStore(appStore);
  (0, import_react100.useEffect)(() => {
    const { resolveAndCommitData } = appStore.getState();
    setTimeout(() => {
      resolveAndCommitData();
    }, 0);
  }, [appStore]);
  return /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(appStoreContext.Provider, { value: appStore, children: /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(UseCredBuildStoreContext.Provider, { value: uCredBuildStore, children }) });
}
function CredBuild(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(PropsProvider, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(CredBuildProvider, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(Layout, { children: props.children }) }) });
}
CredBuild.Components = Components;
CredBuild.Fields = Fields;
CredBuild.Layout = Layout;
CredBuild.Outline = Outline;
CredBuild.Preview = Preview;

// bundle/core.ts
init_inner();

// lib/migrate.ts
init_react_import();
init_default_app_state();
init_walk_app_state();
init_walk_tree();
var migrations = [
  // Migrate root to root.props
  (data) => {
    const rootProps = data.root.props || data.root;
    if (Object.keys(data.root).length > 0 && !data.root.props) {
      console.warn(
        "Migration applied: Root props moved from `root` to `root.props`."
      );
      return {
        ...data,
        root: {
          props: {
            ...rootProps
          }
        }
      };
    }
    return data;
  },
  // Migrate zones to slots
  (data, config, migrationOptions) => {
    if (!config) return data;
    console.log("Migrating DropZones to slots...");
    const updatedItems = {};
    const appState = { ...defaultAppState, data };
    const { indexes } = walkAppState(appState, config);
    const deletedCompounds = [];
    walkAppState(appState, config, (content, zoneCompound, zoneType) => {
      if (zoneType === "dropzone") {
        const [id, slotName] = zoneCompound.split(":");
        const nodeData = indexes.nodes[id].data;
        const componentType = nodeData.type;
        const configForComponent = id === "root" ? config.root : config.components[componentType];
        if (configForComponent?.fields?.[slotName]?.type === "slot") {
          updatedItems[id] = {
            ...nodeData,
            props: {
              ...nodeData.props,
              ...updatedItems[id]?.props,
              [slotName]: content
            }
          };
          deletedCompounds.push(zoneCompound);
        }
        return content;
      }
      return content;
    });
    const updated = walkAppState(
      appState,
      config,
      (content) => content,
      (item) => {
        return updatedItems[item.props.id] ?? item;
      }
    );
    deletedCompounds.forEach((zoneCompound) => {
      const [_, propName] = zoneCompound.split(":");
      console.log(
        `\u2713 Success: Migrated "${zoneCompound}" from DropZone to slot field "${propName}"`
      );
      delete updated.data.zones?.[zoneCompound];
    });
    if (migrationOptions?.migrateDynamicZonesForComponent) {
      const unmigratedZonesGrouped = {};
      Object.keys(updated.data.zones ?? {}).forEach((zoneCompound) => {
        const [componentId, propName] = zoneCompound.split(":");
        const content = updated.data.zones?.[zoneCompound];
        if (!content) {
          return;
        }
        if (!unmigratedZonesGrouped[componentId]) {
          unmigratedZonesGrouped[componentId] = {};
        }
        if (!unmigratedZonesGrouped[componentId][propName]) {
          unmigratedZonesGrouped[componentId][propName] = content;
        }
      });
      Object.keys(unmigratedZonesGrouped).forEach((componentId) => {
        updated.data = walkTree(updated.data, config, (content) => {
          return content.map((child) => {
            if (child.props.id !== componentId) {
              return child;
            }
            const migrateFn = migrationOptions?.migrateDynamicZonesForComponent?.[child.type];
            if (!migrateFn) {
              return child;
            }
            const zones = unmigratedZonesGrouped[componentId];
            const migratedProps = migrateFn(child.props, zones);
            Object.keys(zones).forEach((propName) => {
              const zoneCompound = `${componentId}:${propName}`;
              console.log(`\u2713 Success: Migrated "${zoneCompound}" DropZone`);
              delete updated.data.zones?.[zoneCompound];
            });
            return {
              ...child,
              props: migratedProps
            };
          });
        });
      });
    }
    Object.keys(updated.data.zones ?? {}).forEach((zoneCompound) => {
      const [_, propName] = zoneCompound.split(":");
      throw new Error(
        `Could not migrate DropZone "${zoneCompound}" to slot field. No slot exists with the name "${propName}".`
      );
    });
    delete updated.data.zones;
    return updated.data;
  }
];
function migrate(data, config, migrationOptions) {
  return migrations?.reduce(
    (acc, migration) => migration(acc, config, migrationOptions),
    data
  );
}

// lib/transform-props.ts
init_react_import();
init_walk_tree();

// lib/data/default-data.ts
init_react_import();
var defaultData = (data) => ({
  ...data,
  root: data.root || {},
  content: data.content || []
});

// lib/transform-props.ts
function transformProps(data, propTransforms, config = { components: {} }) {
  const mapItem = (item) => {
    if (propTransforms[item.type]) {
      return {
        ...item,
        props: {
          id: item.props.id,
          ...propTransforms[item.type](item.props)
        }
      };
    }
    return item;
  };
  const defaultedData = defaultData(data);
  const rootProps = defaultedData.root.props || defaultedData.root;
  let newRoot = { ...defaultedData.root };
  if (propTransforms["root"]) {
    newRoot.props = propTransforms["root"](rootProps);
  }
  const dataWithUpdatedRoot = { ...defaultedData, root: newRoot };
  const updatedData = walkTree(
    dataWithUpdatedRoot,
    config,
    (content) => content.map(mapItem)
  );
  if (!defaultedData.root.props) {
    updatedData.root = updatedData.root.props;
  }
  return updatedData;
}

// lib/resolve-all-data.ts
init_react_import();
init_resolve_component_data();

// lib/group-zones-by-component.ts
init_react_import();
init_get_zone_id();
var groupZonesByComponent = (data) => {
  const zoneEntries = Object.entries(data.zones ?? {});
  return zoneEntries.reduce((acc, [zoneCompound, zoneContent]) => {
    const [componentId, zoneName] = getZoneId(zoneCompound);
    if (!componentId.length || !zoneName.length) return acc;
    if (!acc[componentId]) {
      acc[componentId] = [];
    }
    acc[componentId].push({ zoneCompound, content: zoneContent });
    return acc;
  }, {});
};

// lib/resolve-all-data.ts
init_to_component();
init_map_fields();
async function resolveAllData(data, config, metadata = {}, onResolveStart, onResolveEnd) {
  const defaultedData = defaultData(data);
  const zonesByComponent = groupZonesByComponent(defaultedData);
  let resolvedZones = {};
  const resolveNode = async (_node, parent) => {
    const node = toComponent(_node);
    onResolveStart?.(node);
    const resolved = (await resolveComponentData(
      node,
      config,
      metadata,
      () => {
      },
      () => {
      },
      "force",
      parent
    )).node;
    const resolvedAsComponent = toComponent(resolved);
    const resolvedDeepPromise = mapFields(
      resolved,
      {
        slot: ({ value }) => processContent(value, resolvedAsComponent)
      },
      config
    );
    let resolveZonePromises = [];
    if (zonesByComponent[resolvedAsComponent.props.id]) {
      resolveZonePromises = zonesByComponent[resolvedAsComponent.props.id].map(
        async ({ zoneCompound, content }) => {
          resolvedZones[zoneCompound] = await processContent(
            content,
            resolvedAsComponent
          );
        }
      );
    }
    const resolvedDeep = await resolvedDeepPromise;
    await Promise.all(resolveZonePromises);
    onResolveEnd?.(toComponent(resolvedDeep));
    return resolvedDeep;
  };
  const processContent = async (content, parent) => {
    return Promise.all(content.map((item) => resolveNode(item, parent)));
  };
  const result = defaultData({});
  result.root = await resolveNode(defaultedData.root, null);
  result.content = await processContent(
    defaultedData.content,
    toComponent(result.root)
  );
  result.zones = resolvedZones;
  return result;
}

// bundle/core.ts
init_set_deep();
init_walk_tree();

// plugins/legacy-side-bar/index.tsx
init_react_import();
var import_jsx_runtime97 = require("react/jsx-runtime");
var legacySideBarPlugin = () => ({
  name: "legacy-side-bar",
  render: () => /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)("div", { style: { overflowY: "auto" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(SidebarSection, { title: "Components", noBorderTop: true, children: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(Components, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(SidebarSection, { title: "Outline", children: /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(Outline, {}) })
  ] })
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Action,
  ActionBar,
  AutoField,
  Button,
  CredBuild,
  Drawer,
  DropZone,
  FieldLabel,
  Group,
  IconButton,
  Label,
  Render,
  RichTextMenu,
  Separator,
  blocksPlugin,
  createUseCredBuild,
  fieldsPlugin,
  legacySideBarPlugin,
  migrate,
  outlinePlugin,
  overrideKeys,
  registerOverlayPortal,
  resolveAllData,
  setDeep,
  transformProps,
  useCredBuild,
  useGetCredBuild,
  walkTree
});
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
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
lucide-react/dist/esm/icons/heading.js:
lucide-react/dist/esm/icons/image.js:
lucide-react/dist/esm/icons/info.js:
lucide-react/dist/esm/icons/italic.js:
lucide-react/dist/esm/icons/layers.js:
lucide-react/dist/esm/icons/layout-dashboard.js:
lucide-react/dist/esm/icons/layout-grid.js:
lucide-react/dist/esm/icons/layout-template.js:
lucide-react/dist/esm/icons/link.js:
lucide-react/dist/esm/icons/list-ordered.js:
lucide-react/dist/esm/icons/list.js:
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
lucide-react/dist/esm/icons/text-align-start.js:
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
