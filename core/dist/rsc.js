"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../tsup-config/react-import.js
var import_react;
var init_react_import = __esm({
  "../tsup-config/react-import.js"() {
    "use strict";
    import_react = __toESM(require("react"));
  }
});

// ../../node_modules/classnames/index.js
var require_classnames = __commonJS({
  "../../node_modules/classnames/index.js"(exports2, module2) {
    "use strict";
    init_react_import();
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module2 !== "undefined" && module2.exports) {
        classNames.default = classNames;
        module2.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// lib/get-class-name-factory.ts
var import_classnames, getClassNameFactory, get_class_name_factory_default;
var init_get_class_name_factory = __esm({
  "lib/get-class-name-factory.ts"() {
    "use strict";
    init_react_import();
    import_classnames = __toESM(require_classnames());
    getClassNameFactory = (rootClass, styles, config = { baseClass: "" }) => (options = {}) => {
      if (typeof options === "string") {
        const descendant = options;
        const style = styles[`${rootClass}-${descendant}`];
        if (style) {
          return config.baseClass + styles[`${rootClass}-${descendant}`] || "";
        }
        return "";
      } else if (typeof options === "object") {
        const modifiers = options;
        const prefixedModifiers = {};
        for (let modifier in modifiers) {
          prefixedModifiers[styles[`${rootClass}--${modifier}`]] = modifiers[modifier];
        }
        const c = styles[rootClass];
        return config.baseClass + (0, import_classnames.default)(__spreadValues({
          [c]: !!c
        }, prefixedModifiers));
      } else {
        return config.baseClass + styles[rootClass] || "";
      }
    };
    get_class_name_factory_default = getClassNameFactory;
  }
});

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/RichTextEditor/styles.module.css/#css-module-data
var init_css_module_data = __esm({
  "css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/RichTextEditor/styles.module.css/#css-module-data"() {
  }
});

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/RichTextEditor/styles.module.css#css-module
var styles_module_default;
var init_styles_module = __esm({
  "css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/RichTextEditor/styles.module.css#css-module"() {
    "use strict";
    init_react_import();
    init_css_module_data();
    styles_module_default = { "RichTextEditor": "_RichTextEditor_hp4qf_1", "RichTextEditor--editor": "_RichTextEditor--editor_hp4qf_50", "RichTextEditor--disabled": "_RichTextEditor--disabled_hp4qf_107", "RichTextEditor--isActive": "_RichTextEditor--isActive_hp4qf_111", "RichTextEditor-menu": "_RichTextEditor-menu_hp4qf_117" };
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
        const options = __spreadValues(__spreadValues({}, this.options), defaultCredBuildRichTextOptions);
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
          extensions.push(import_extension_list.ListKeymap.configure(options == null ? void 0 : options.listKeymap));
        }
        if (options.link !== false) {
          extensions.push(import_extension_link.Link.configure(options == null ? void 0 : options.link));
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
          extensions.push(import_extension_underline.Underline.configure(options == null ? void 0 : options.underline));
        }
        return extensions;
      }
    });
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
  const loadedExtensions = (0, import_react3.useMemo)(
    () => [CredBuildRichText.configure(options), ...extensions],
    [extensions, options]
  );
  const normalized = (0, import_react3.useMemo)(() => {
    if (typeof content === "object" && (content == null ? void 0 : content.type) === "doc") {
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
  const html = (0, import_react3.useMemo)(() => {
    return (0, import_html.generateHTML)(normalized, loadedExtensions);
  }, [normalized, loadedExtensions]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: getClassName2(), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "rich-text", dangerouslySetInnerHTML: { __html: html } }) });
}
var import_html, import_react3, import_jsx_runtime2, getClassName2;
var init_Render = __esm({
  "components/RichTextEditor/components/Render.tsx"() {
    "use strict";
    init_react_import();
    import_html = require("@tiptap/html");
    import_react3 = require("react");
    init_get_class_name_factory();
    init_styles_module();
    init_extension();
    import_jsx_runtime2 = require("react/jsx-runtime");
    getClassName2 = get_class_name_factory_default("RichTextEditor", styles_module_default);
  }
});

// bundle/rsc.tsx
var rsc_exports = {};
__export(rsc_exports, {
  Render: () => Render,
  migrate: () => migrate,
  resolveAllData: () => resolveAllData,
  transformProps: () => transformProps,
  walkTree: () => walkTree
});
module.exports = __toCommonJS(rsc_exports);
init_react_import();

// components/ServerRender/index.tsx
init_react_import();

// lib/root-droppable-id.ts
init_react_import();
var rootAreaId = "root";
var rootZone = "default-zone";
var rootDroppableId = `${rootAreaId}:${rootZone}`;

// lib/data/setup-zone.ts
init_react_import();
var setupZone = (data, zoneKey) => {
  if (zoneKey === rootDroppableId) {
    return data;
  }
  const newData = __spreadProps(__spreadValues({}, data), {
    zones: data.zones ? __spreadValues({}, data.zones) : {}
  });
  newData.zones[zoneKey] = newData.zones[zoneKey] || [];
  return newData;
};

// lib/use-slots.tsx
init_react_import();

// lib/field-transforms/use-field-transforms.tsx
init_react_import();
var import_react2 = require("react");

// lib/data/map-fields.ts
init_react_import();

// lib/data/default-slots.ts
init_react_import();
var defaultSlots = (value, fields) => Object.keys(fields).reduce(
  (acc, fieldName) => fields[fieldName].type === "slot" ? __spreadValues({ [fieldName]: [] }, acc) : acc,
  value
);

// lib/data/map-fields.ts
var isPromise = (v) => !!v && typeof v.then === "function";
var flatten = (values) => values.reduce((acc, item) => __spreadValues(__spreadValues({}, acc), item), {});
var containsPromise = (arr) => arr.some(isPromise);
var walkField = ({
  value,
  fields,
  mappers,
  propKey = "",
  propPath = "",
  id = "",
  config,
  recurseSlots = false
}) => {
  var _a, _b, _c;
  const fieldType = (_a = fields[propKey]) == null ? void 0 : _a.type;
  const map = mappers[fieldType];
  if (map && fieldType === "slot") {
    const content = value || [];
    const mappedContent = recurseSlots ? content.map((el) => {
      var _a2;
      const componentConfig = config.components[el.type];
      if (!componentConfig) {
        throw new Error(`Could not find component config for ${el.type}`);
      }
      const fields2 = (_a2 = componentConfig.fields) != null ? _a2 : {};
      return walkField({
        value: __spreadProps(__spreadValues({}, el), { props: defaultSlots(el.props, fields2) }),
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
      const arrayFields = ((_b = fields[propKey]) == null ? void 0 : _b.type) === "array" ? fields[propKey].arrayFields : null;
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
      const objectFields = ((_c = fields[propKey]) == null ? void 0 : _c.type) === "object" ? fields[propKey].objectFields : fields;
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
var walkObject = ({
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
function mapFields(item, mappers, config, recurseSlots = false, shouldDefaultSlots = true) {
  var _a, _b, _c, _d, _e;
  const itemType = "type" in item ? item.type : "root";
  const componentConfig = itemType === "root" ? config.root : (_a = config.components) == null ? void 0 : _a[itemType];
  const newProps = walkObject({
    value: shouldDefaultSlots ? defaultSlots((_b = item.props) != null ? _b : {}, (_c = componentConfig == null ? void 0 : componentConfig.fields) != null ? _c : {}) : item.props,
    fields: (_d = componentConfig == null ? void 0 : componentConfig.fields) != null ? _d : {},
    mappers,
    id: item.props ? (_e = item.props.id) != null ? _e : "root" : "root",
    getPropPath: (k) => k,
    config,
    recurseSlots
  });
  if (isPromise(newProps)) {
    return newProps.then((resolvedProps) => __spreadProps(__spreadValues({}, item), {
      props: resolvedProps
    }));
  }
  return __spreadProps(__spreadValues({}, item), {
    props: newProps
  });
}

// lib/field-transforms/build-mappers.ts
init_react_import();
function buildMappers(transforms, readOnly, forceReadOnly) {
  return Object.keys(transforms).reduce((acc, _fieldType) => {
    const fieldType = _fieldType;
    return __spreadProps(__spreadValues({}, acc), {
      [fieldType]: (_a) => {
        var _b = _a, {
          parentId
        } = _b, params = __objRest(_b, [
          "parentId"
        ]);
        const wildcardPath = params.propPath.replace(/\[\d+\]/g, "[*]");
        const isReadOnly = (readOnly == null ? void 0 : readOnly[params.propPath]) || (readOnly == null ? void 0 : readOnly[wildcardPath]) || forceReadOnly || false;
        const fn = transforms[fieldType];
        return fn == null ? void 0 : fn(__spreadProps(__spreadValues({}, params), {
          isReadOnly,
          componentId: parentId
        }));
      }
    });
  }, {});
}

// lib/field-transforms/use-field-transforms.tsx
function useFieldTransforms(config, item, transforms, readOnly, forceReadOnly) {
  const mappers = (0, import_react2.useMemo)(
    () => buildMappers(transforms, readOnly, forceReadOnly),
    [transforms, readOnly, forceReadOnly]
  );
  const transformedProps = (0, import_react2.useMemo)(() => {
    return mapFields(item, mappers, config).props;
  }, [config, item, mappers]);
  const mergedProps = (0, import_react2.useMemo)(
    () => __spreadValues(__spreadValues({}, item.props), transformedProps),
    [item.props, transformedProps]
  );
  return mergedProps;
}

// lib/field-transforms/default-transforms/slot-transform.tsx
init_react_import();
var getSlotTransform = (renderSlotEdit, renderSlotRender = renderSlotEdit) => ({
  slot: ({ value: content, propName, field, isReadOnly }) => {
    const render = isReadOnly ? renderSlotRender : renderSlotEdit;
    const Slot = (dzProps) => render(__spreadProps(__spreadValues({
      allow: (field == null ? void 0 : field.type) === "slot" ? field.allow : [],
      disallow: (field == null ? void 0 : field.type) === "slot" ? field.disallow : []
    }, dzProps), {
      zone: propName,
      content
    }));
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

// components/SlotRender/server.tsx
init_react_import();
var import_react5 = require("react");

// components/RichTextEditor/lib/use-richtext-props.tsx
init_react_import();
var import_react4 = require("react");

// components/RichTextEditor/components/RenderFallback.tsx
init_react_import();
init_get_class_name_factory();
init_styles_module();
var import_jsx_runtime = require("react/jsx-runtime");
var getClassName = get_class_name_factory_default("RichTextEditor", styles_module_default);
function RichTextRenderFallback({ content }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: getClassName(), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: "rich-text",
      dangerouslySetInnerHTML: { __html: content }
    }
  ) });
}

// lib/generate-id.ts
init_react_import();
var import_uuid = require("uuid");
var generateId = (type) => type ? `${type}-${(0, import_uuid.v4)()}` : (0, import_uuid.v4)();

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
  return __spreadProps(__spreadValues({}, source), {
    [key]: mapDeep(source[key], rest, render)
  });
};

// components/RichTextEditor/lib/use-richtext-props.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  const richtextKeys = (0, import_react4.useMemo)(() => findAllRichtextKeys(fields), [fields]);
  const richtextProps = (0, import_react4.useMemo)(() => {
    if (!(richtextKeys == null ? void 0 : richtextKeys.length)) return {};
    const RichTextRender2 = (0, import_react4.lazy)(
      () => Promise.resolve().then(() => (init_Render(), Render_exports)).then((m) => ({
        default: m.RichTextRender
      }))
    );
    let result = __spreadValues({}, props);
    for (const { path, field } of richtextKeys) {
      result = mapDeep(result, path, (content) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_react4.Suspense,
        {
          fallback: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RichTextRenderFallback, { content }),
          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(RichTextRender2, { content, field })
        },
        generateId()
      ));
    }
    return result;
  }, [richtextKeys, props]);
  return richtextProps;
}

// components/SlotRender/server.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var SlotRenderPure = (props) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SlotRender, __spreadValues({}, props));
var Item = ({
  config,
  item,
  metadata
}) => {
  const Component = config.components[item.type];
  const props = useSlots(config, item, (slotProps) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SlotRenderPure, __spreadProps(__spreadValues({}, slotProps), { config, metadata })));
  const richtextProps = useRichtextProps(Component.fields, props);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    Component.render,
    __spreadProps(__spreadValues(__spreadValues({}, props), richtextProps), {
      credbuild: __spreadProps(__spreadValues({}, props.credbuild), {
        metadata: metadata || {}
      })
    })
  );
};
var SlotRender = (0, import_react5.forwardRef)(
  function SlotRenderInternal({ className, style, content, config, metadata, as }, ref) {
    const El = as != null ? as : "div";
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(El, { className, style, ref, children: content.map((item) => {
      if (!config.components[item.type]) {
        return null;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Item,
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

// components/ServerRender/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function DropZoneRenderItem({
  item,
  data,
  config,
  metadata
}) {
  const Component = config.components[item.type];
  const props = __spreadProps(__spreadValues({}, item.props), {
    credbuild: {
      renderDropZone: ({ zone }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        DropZoneRender,
        {
          zone,
          data,
          areaId: item.props.id,
          config,
          metadata
        }
      ),
      metadata,
      dragRef: null,
      isEditing: false
    }
  });
  const renderItem = __spreadProps(__spreadValues({}, item), { props });
  const propsWithSlots = useSlots(config, renderItem, (slotProps) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SlotRenderPure, __spreadProps(__spreadValues({}, slotProps), { config, metadata })));
  const richtextProps = useRichtextProps(Component == null ? void 0 : Component.fields, propsWithSlots);
  if (!Component) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Component.render, __spreadValues(__spreadValues({}, propsWithSlots), richtextProps));
}
function DropZoneRender({
  zone,
  data,
  areaId = "root",
  config,
  metadata = {}
}) {
  let zoneCompound = rootDroppableId;
  let content = (data == null ? void 0 : data.content) || [];
  if (!data || !config) {
    return null;
  }
  if (areaId !== rootAreaId && zone !== rootZone) {
    zoneCompound = `${areaId}:${zone}`;
    content = setupZone(data, zoneCompound).zones[zoneCompound];
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: content.map((item) => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      DropZoneRenderItem,
      {
        item,
        data,
        config,
        metadata
      },
      item.props.id
    );
  }) });
}
function Render({
  config,
  data,
  metadata = {}
}) {
  var _a, _b;
  const rootProps = "props" in data.root ? data.root.props : data.root;
  const title = rootProps.title || "";
  const props = __spreadProps(__spreadValues({}, rootProps), {
    credbuild: {
      renderDropZone: ({ zone }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        DropZoneRender,
        {
          zone,
          data,
          config,
          metadata
        }
      ),
      isEditing: false,
      dragRef: null,
      metadata
    },
    title,
    editMode: false,
    id: "credbuild-root"
  });
  const propsWithSlots = useSlots(config, { type: "root", props }, (props2) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SlotRenderPure, __spreadProps(__spreadValues({}, props2), { config, metadata })));
  const richtextProps = useRichtextProps((_a = config.root) == null ? void 0 : _a.fields, props);
  if ((_b = config.root) == null ? void 0 : _b.render) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(config.root.render, __spreadProps(__spreadValues(__spreadValues({}, propsWithSlots), richtextProps), { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      DropZoneRender,
      {
        config,
        data,
        zone: rootZone,
        metadata
      }
    ) }));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    DropZoneRender,
    {
      config,
      data,
      zone: rootZone,
      metadata
    }
  );
}

// lib/resolve-all-data.ts
init_react_import();

// lib/resolve-component-data.ts
init_react_import();

// lib/data/to-component.ts
init_react_import();
var toComponent = (item) => {
  return "type" in item ? item : __spreadProps(__spreadValues({}, item), {
    props: __spreadProps(__spreadValues({}, item.props), { id: "root" }),
    type: "root"
  });
};

// lib/get-changed.ts
init_react_import();
var import_fast_equals = require("fast-equals");
var getChanged = (newItem, oldItem) => {
  return newItem ? Object.keys(newItem.props || {}).reduce((acc, item) => {
    const newItemProps = (newItem == null ? void 0 : newItem.props) || {};
    const oldItemProps = (oldItem == null ? void 0 : oldItem.props) || {};
    return __spreadProps(__spreadValues({}, acc), {
      [item]: !(0, import_fast_equals.deepEqual)(oldItemProps[item], newItemProps[item])
    });
  }, {}) : {};
};

// lib/resolve-component-data.ts
var import_fast_equals2 = require("fast-equals");
var cache = { lastChange: {} };
var resolveComponentData = (_0, _1, ..._2) => __async(null, [_0, _1, ..._2], function* (item, config, metadata = {}, onResolveStart, onResolveEnd, trigger = "replace", parent = null) {
  const configForItem = "type" in item && item.type !== "root" ? config.components[item.type] : config.root;
  const resolvedItem = __spreadValues({}, item);
  const shouldRunResolver = (configForItem == null ? void 0 : configForItem.resolveData) && item.props;
  const id = "id" in item.props ? item.props.id : "root";
  if (shouldRunResolver) {
    const {
      item: oldItem = null,
      resolved = {},
      parentId: oldParentId = null
    } = cache.lastChange[id] || {};
    const isRootOrInserted = oldParentId === null;
    const parentChanged = !isRootOrInserted && (parent == null ? void 0 : parent.props.id) !== oldParentId;
    const dataChanged = item && !(0, import_fast_equals2.deepEqual)(item, oldItem);
    const shouldSkip = trigger === "move" && !parentChanged || trigger !== "move" && trigger !== "force" && !dataChanged;
    if (shouldSkip) {
      return { node: resolved, didChange: false };
    }
    const changed = getChanged(item, oldItem);
    if (onResolveStart) {
      onResolveStart(item);
    }
    const { props: resolvedProps, readOnly = {} } = yield configForItem.resolveData(item, {
      changed,
      lastData: oldItem,
      metadata: __spreadValues(__spreadValues({}, metadata), configForItem.metadata),
      trigger,
      parent
    });
    resolvedItem.props = __spreadValues(__spreadValues({}, item.props), resolvedProps);
    if (Object.keys(readOnly).length) {
      resolvedItem.readOnly = readOnly;
    }
  }
  const itemAsComponentData = toComponent(resolvedItem);
  let itemWithResolvedChildren = yield mapFields(
    resolvedItem,
    {
      slot: (_02) => __async(null, [_02], function* ({ value }) {
        const content = value;
        return yield Promise.all(
          content.map(
            (childItem) => __async(null, null, function* () {
              return (yield resolveComponentData(
                childItem,
                config,
                metadata,
                onResolveStart,
                onResolveEnd,
                trigger,
                itemAsComponentData
              )).node;
            })
          )
        );
      })
    },
    config
  );
  if (shouldRunResolver && onResolveEnd) {
    onResolveEnd(resolvedItem);
  }
  cache.lastChange[id] = {
    item,
    resolved: itemWithResolvedChildren,
    parentId: parent == null ? void 0 : parent.props.id
  };
  return {
    node: itemWithResolvedChildren,
    didChange: !(0, import_fast_equals2.deepEqual)(item, itemWithResolvedChildren)
  };
});

// lib/group-zones-by-component.ts
init_react_import();

// lib/get-zone-id.ts
init_react_import();
var getZoneId = (zoneCompound) => {
  if (!zoneCompound) {
    return [];
  }
  if (zoneCompound && zoneCompound.indexOf(":") > -1) {
    return zoneCompound.split(":");
  }
  return [rootDroppableId, zoneCompound];
};

// lib/group-zones-by-component.ts
var groupZonesByComponent = (data) => {
  var _a;
  const zoneEntries = Object.entries((_a = data.zones) != null ? _a : {});
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

// lib/data/default-data.ts
init_react_import();
var defaultData = (data) => __spreadProps(__spreadValues({}, data), {
  root: data.root || {},
  content: data.content || []
});

// lib/resolve-all-data.ts
function resolveAllData(_0, _1) {
  return __async(this, arguments, function* (data, config, metadata = {}, onResolveStart, onResolveEnd) {
    const defaultedData = defaultData(data);
    const zonesByComponent = groupZonesByComponent(defaultedData);
    let resolvedZones = {};
    const resolveNode = (_node, parent) => __async(null, null, function* () {
      const node = toComponent(_node);
      onResolveStart == null ? void 0 : onResolveStart(node);
      const resolved = (yield resolveComponentData(
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
          (_02) => __async(null, [_02], function* ({ zoneCompound, content }) {
            resolvedZones[zoneCompound] = yield processContent(
              content,
              resolvedAsComponent
            );
          })
        );
      }
      const resolvedDeep = yield resolvedDeepPromise;
      yield Promise.all(resolveZonePromises);
      onResolveEnd == null ? void 0 : onResolveEnd(toComponent(resolvedDeep));
      return resolvedDeep;
    });
    const processContent = (content, parent) => __async(null, null, function* () {
      return Promise.all(content.map((item) => resolveNode(item, parent)));
    });
    const result = defaultData({});
    result.root = yield resolveNode(defaultedData.root, null);
    result.content = yield processContent(
      defaultedData.content,
      toComponent(result.root)
    );
    result.zones = resolvedZones;
    return result;
  });
}

// lib/transform-props.ts
init_react_import();

// lib/data/walk-tree.ts
init_react_import();
function walkTree(data, config, callbackFn) {
  var _a, _b;
  const walkItem = (item) => {
    return mapFields(
      item,
      {
        slot: ({ value, parentId, propName }) => {
          var _a2;
          const content = value;
          return (_a2 = callbackFn(content, { parentId, propName })) != null ? _a2 : content;
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
  const zones = (_a = _data.zones) != null ? _a : {};
  const mappedContent = _data.content.map(walkItem);
  return {
    root: walkItem(_data.root),
    content: (_b = callbackFn(mappedContent, {
      parentId: "root",
      propName: "default-zone"
    })) != null ? _b : mappedContent,
    zones: Object.keys(zones).reduce(
      (acc, zoneCompound) => __spreadProps(__spreadValues({}, acc), {
        [zoneCompound]: zones[zoneCompound].map(walkItem)
      }),
      {}
    )
  };
}

// lib/transform-props.ts
function transformProps(data, propTransforms, config = { components: {} }) {
  const mapItem = (item) => {
    if (propTransforms[item.type]) {
      return __spreadProps(__spreadValues({}, item), {
        props: __spreadValues({
          id: item.props.id
        }, propTransforms[item.type](item.props))
      });
    }
    return item;
  };
  const defaultedData = defaultData(data);
  const rootProps = defaultedData.root.props || defaultedData.root;
  let newRoot = __spreadValues({}, defaultedData.root);
  if (propTransforms["root"]) {
    newRoot.props = propTransforms["root"](rootProps);
  }
  const dataWithUpdatedRoot = __spreadProps(__spreadValues({}, defaultedData), { root: newRoot });
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

// lib/migrate.ts
init_react_import();

// store/default-app-state.ts
init_react_import();

// components/ViewportControls/default-viewports.ts
init_react_import();
var defaultViewports = [
  { width: 360, height: "auto", icon: "Smartphone", label: "Small" },
  { width: 768, height: "auto", icon: "Tablet", label: "Medium" },
  { width: 1280, height: "auto", icon: "Monitor", label: "Large" },
  { width: "100%", height: "auto", icon: "FullWidth", label: "Full-width" }
];

// store/default-app-state.ts
var defaultAppState = {
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

// lib/data/walk-app-state.ts
init_react_import();

// lib/data/for-related-zones.ts
init_react_import();
function forRelatedZones(item, data, cb, path = []) {
  Object.entries(data.zones || {}).forEach(([zoneCompound, content]) => {
    const [parentId] = getZoneId(zoneCompound);
    if (parentId === item.props.id) {
      cb(path, zoneCompound, content);
    }
  });
}

// lib/data/flatten-node.ts
init_react_import();
var import_flat = __toESM(require("flat"));

// lib/data/strip-slots.ts
init_react_import();
var stripSlots = (data, config) => {
  return mapFields(data, { slot: () => null }, config);
};

// lib/data/flatten-node.ts
var { flatten: flatten2, unflatten } = import_flat.default;
var isPureObject = (val) => val != null && Object.prototype.toString.call(val) === "[object Object]";
var emptyArrayStr = "__credbuild_[]";
var emptyObjectStr = "__credbuild_{}";
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
var flattenNode = (node, config) => {
  return __spreadProps(__spreadValues({}, node), {
    props: encodeEmptyObjects(flatten2(stripSlots(node, config).props))
  });
};

// lib/data/walk-app-state.ts
function walkAppState(state, config, mapContent = (content) => content, mapNodeOrSkip = (item) => item) {
  var _a;
  let newZones = {};
  const newZoneIndex = {};
  const newNodeIndex = {};
  const processContent = (path, zoneCompound, content, zoneType, newId) => {
    var _a2;
    const [parentId] = zoneCompound.split(":");
    const mappedContent = ((_a2 = mapContent(content, zoneCompound, zoneType)) != null ? _a2 : content) || [];
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
    const newProps = __spreadProps(__spreadValues({}, mapFields(
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
    ).props), {
      id
    });
    processRelatedZones(item, id, path);
    const newItem = __spreadProps(__spreadValues({}, mappedItem), { props: newProps });
    const thisZoneCompound = path[path.length - 1];
    const [parentId, zone] = thisZoneCompound ? thisZoneCompound.split(":") : [null, ""];
    newNodeIndex[id] = {
      data: newItem,
      flatData: flattenNode(newItem, config),
      path,
      parentId,
      zone
    };
    const finalData = __spreadProps(__spreadValues({}, newItem), { props: __spreadValues({}, newItem.props) });
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
    props: __spreadValues({}, (_a = state.data.root.props) != null ? _a : state.data.root)
  });
  if (state.data.root.readOnly) {
    rootAsComponent.readOnly = state.data.root.readOnly;
  }
  const processedRoot = processItem(rootAsComponent, [], -1);
  const root = __spreadValues(__spreadValues({}, state.data.root), processedRoot);
  return __spreadProps(__spreadValues({}, state), {
    data: {
      root,
      content: processedContent,
      zones: __spreadValues(__spreadValues({}, state.data.zones), newZones)
    },
    indexes: {
      nodes: __spreadValues(__spreadValues({}, state.indexes.nodes), newNodeIndex),
      zones: __spreadValues(__spreadValues({}, state.indexes.zones), newZoneIndex)
    }
  });
}

// lib/migrate.ts
var migrations = [
  // Migrate root to root.props
  (data) => {
    const rootProps = data.root.props || data.root;
    if (Object.keys(data.root).length > 0 && !data.root.props) {
      console.warn(
        "Migration applied: Root props moved from `root` to `root.props`."
      );
      return __spreadProps(__spreadValues({}, data), {
        root: {
          props: __spreadValues({}, rootProps)
        }
      });
    }
    return data;
  },
  // Migrate zones to slots
  (data, config, migrationOptions) => {
    var _a, _b;
    if (!config) return data;
    console.log("Migrating DropZones to slots...");
    const updatedItems = {};
    const appState = __spreadProps(__spreadValues({}, defaultAppState), { data });
    const { indexes } = walkAppState(appState, config);
    const deletedCompounds = [];
    walkAppState(appState, config, (content, zoneCompound, zoneType) => {
      var _a2, _b2, _c;
      if (zoneType === "dropzone") {
        const [id, slotName] = zoneCompound.split(":");
        const nodeData = indexes.nodes[id].data;
        const componentType = nodeData.type;
        const configForComponent = id === "root" ? config.root : config.components[componentType];
        if (((_b2 = (_a2 = configForComponent == null ? void 0 : configForComponent.fields) == null ? void 0 : _a2[slotName]) == null ? void 0 : _b2.type) === "slot") {
          updatedItems[id] = __spreadProps(__spreadValues({}, nodeData), {
            props: __spreadProps(__spreadValues(__spreadValues({}, nodeData.props), (_c = updatedItems[id]) == null ? void 0 : _c.props), {
              [slotName]: content
            })
          });
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
        var _a2;
        return (_a2 = updatedItems[item.props.id]) != null ? _a2 : item;
      }
    );
    deletedCompounds.forEach((zoneCompound) => {
      var _a2;
      const [_, propName] = zoneCompound.split(":");
      console.log(
        `\u2713 Success: Migrated "${zoneCompound}" from DropZone to slot field "${propName}"`
      );
      (_a2 = updated.data.zones) == null ? true : delete _a2[zoneCompound];
    });
    if (migrationOptions == null ? void 0 : migrationOptions.migrateDynamicZonesForComponent) {
      const unmigratedZonesGrouped = {};
      Object.keys((_a = updated.data.zones) != null ? _a : {}).forEach((zoneCompound) => {
        var _a2;
        const [componentId, propName] = zoneCompound.split(":");
        const content = (_a2 = updated.data.zones) == null ? void 0 : _a2[zoneCompound];
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
            var _a2;
            if (child.props.id !== componentId) {
              return child;
            }
            const migrateFn = (_a2 = migrationOptions == null ? void 0 : migrationOptions.migrateDynamicZonesForComponent) == null ? void 0 : _a2[child.type];
            if (!migrateFn) {
              return child;
            }
            const zones = unmigratedZonesGrouped[componentId];
            const migratedProps = migrateFn(child.props, zones);
            Object.keys(zones).forEach((propName) => {
              var _a3;
              const zoneCompound = `${componentId}:${propName}`;
              console.log(`\u2713 Success: Migrated "${zoneCompound}" DropZone`);
              (_a3 = updated.data.zones) == null ? true : delete _a3[zoneCompound];
            });
            return __spreadProps(__spreadValues({}, child), {
              props: migratedProps
            });
          });
        });
      });
    }
    Object.keys((_b = updated.data.zones) != null ? _b : {}).forEach((zoneCompound) => {
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
  return migrations == null ? void 0 : migrations.reduce(
    (acc, migration) => migration(acc, config, migrationOptions),
    data
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Render,
  migrate,
  resolveAllData,
  transformProps,
  walkTree
});
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
