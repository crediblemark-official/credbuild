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
        return config.baseClass + (0, import_classnames.default)({
          [c]: !!c,
          // only apply the class if it exists
          ...prefixedModifiers
        });
      } else {
        return config.baseClass + styles[rootClass] || "";
      }
    };
    get_class_name_factory_default = getClassNameFactory;
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/RichTextEditor/styles.module.css/#css-module-data
var init_css_module_data = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/RichTextEditor/styles.module.css/#css-module-data"() {
  }
});

// css-module:/home/crediblemark/Project/Credibuild/components/RichTextEditor/styles.module.css#css-module
var styles_module_default;
var init_styles_module = __esm({
  "css-module:/home/crediblemark/Project/Credibuild/components/RichTextEditor/styles.module.css#css-module"() {
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
  const newData = {
    ...data,
    zones: data.zones ? { ...data.zones } : {}
  };
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
  (acc, fieldName) => fields[fieldName].type === "slot" ? { [fieldName]: [], ...acc } : acc,
  value
);

// lib/data/map-fields.ts
var isPromise = (v) => !!v && typeof v.then === "function";
var flatten = (values) => values.reduce((acc, item) => ({ ...acc, ...item }), {});
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
  const mappers = (0, import_react2.useMemo)(
    () => buildMappers(transforms, readOnly, forceReadOnly),
    [transforms, readOnly, forceReadOnly]
  );
  const transformedProps = (0, import_react2.useMemo)(() => {
    return mapFields(item, mappers, config).props;
  }, [config, item, mappers]);
  const mergedProps = (0, import_react2.useMemo)(
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
  return {
    ...source,
    [key]: mapDeep(source[key], rest, render)
  };
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
    if (!richtextKeys?.length) return {};
    const RichTextRender2 = (0, import_react4.lazy)(
      () => Promise.resolve().then(() => (init_Render(), Render_exports)).then((m) => ({
        default: m.RichTextRender
      }))
    );
    let result = { ...props };
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
var SlotRenderPure = (props) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SlotRender, { ...props });
var Item = ({
  config,
  item,
  metadata
}) => {
  const Component = config.components[item.type];
  const props = useSlots(config, item, (slotProps) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SlotRenderPure, { ...slotProps, config, metadata }));
  const richtextProps = useRichtextProps(Component.fields, props);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var SlotRender = (0, import_react5.forwardRef)(
  function SlotRenderInternal({ className, style, content, config, metadata, as }, ref) {
    const El = as ?? "div";
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
  const props = {
    ...item.props,
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
  };
  const renderItem = { ...item, props };
  const propsWithSlots = useSlots(config, renderItem, (slotProps) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SlotRenderPure, { ...slotProps, config, metadata }));
  const richtextProps = useRichtextProps(Component?.fields, propsWithSlots);
  if (!Component) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Component.render, { ...propsWithSlots, ...richtextProps });
}
function DropZoneRender({
  zone,
  data,
  areaId = "root",
  config,
  metadata = {}
}) {
  let zoneCompound = rootDroppableId;
  let content = data?.content || [];
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
  const rootProps = "props" in data.root ? data.root.props : data.root;
  const title = rootProps.title || "";
  const props = {
    ...rootProps,
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
  };
  const propsWithSlots = useSlots(config, { type: "root", props }, (props2) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SlotRenderPure, { ...props2, config, metadata }));
  const richtextProps = useRichtextProps(config.root?.fields, props);
  if (config.root?.render) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(config.root.render, { ...propsWithSlots, ...richtextProps, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      DropZoneRender,
      {
        config,
        data,
        zone: rootZone,
        metadata
      }
    ) });
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
  return "type" in item ? item : {
    ...item,
    props: { ...item.props, id: "root" },
    type: "root"
  };
};

// lib/get-changed.ts
init_react_import();
var import_fast_equals = require("fast-equals");
var getChanged = (newItem, oldItem) => {
  return newItem ? Object.keys(newItem.props || {}).reduce((acc, item) => {
    const newItemProps = newItem?.props || {};
    const oldItemProps = oldItem?.props || {};
    return {
      ...acc,
      [item]: !(0, import_fast_equals.deepEqual)(oldItemProps[item], newItemProps[item])
    };
  }, {}) : {};
};

// lib/resolve-component-data.ts
var import_fast_equals2 = require("fast-equals");
var cache = { lastChange: {} };
var resolveComponentData = async (item, config, metadata = {}, onResolveStart, onResolveEnd, trigger = "replace", parent = null) => {
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

// lib/data/default-data.ts
init_react_import();
var defaultData = (data) => ({
  ...data,
  root: data.root || {},
  content: data.content || []
});

// lib/resolve-all-data.ts
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

// lib/transform-props.ts
init_react_import();

// lib/data/walk-tree.ts
init_react_import();
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
  return {
    ...node,
    props: encodeEmptyObjects(flatten2(stripSlots(node, config).props))
  };
};

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

// lib/migrate.ts
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Render,
  migrate,
  resolveAllData,
  transformProps,
  walkTree
});
