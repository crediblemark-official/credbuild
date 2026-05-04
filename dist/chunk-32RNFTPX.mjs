import {
  styles_module_default
} from "./chunk-6MZLFUXA.mjs";
import {
  defaultAppState,
  resolveComponentData
} from "./chunk-QGRPODT7.mjs";
import {
  get_class_name_factory_default
} from "./chunk-CYQ2TPPM.mjs";
import {
  generateId,
  getZoneId,
  mapFields,
  toComponent,
  walkAppState,
  walkTree
} from "./chunk-Y5AAKZ45.mjs";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues,
  init_react_import
} from "./chunk-2TADFG6T.mjs";

// lib/migrate.ts
init_react_import();
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

// lib/transform-props.ts
init_react_import();

// lib/data/default-data.ts
init_react_import();
var defaultData = (data) => __spreadProps(__spreadValues({}, data), {
  root: data.root || {},
  content: data.content || []
});

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

// lib/resolve-all-data.ts
init_react_import();

// lib/group-zones-by-component.ts
init_react_import();
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
init_react_import();

// lib/field-transforms/use-field-transforms.tsx
init_react_import();
import { useMemo } from "react";

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
  const mappers = useMemo(
    () => buildMappers(transforms, readOnly, forceReadOnly),
    [transforms, readOnly, forceReadOnly]
  );
  const transformedProps = useMemo(() => {
    return mapFields(item, mappers, config).props;
  }, [config, item, mappers]);
  const mergedProps = useMemo(
    () => __spreadValues(__spreadValues({}, item.props), transformedProps),
    [item.props, transformedProps]
  );
  return mergedProps;
}

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

// components/RichTextEditor/lib/use-richtext-props.tsx
init_react_import();
import { lazy, Suspense, useMemo as useMemo2 } from "react";

// components/RichTextEditor/components/RenderFallback.tsx
init_react_import();
import { jsx } from "react/jsx-runtime";
var getClassName = get_class_name_factory_default("RichTextEditor", styles_module_default);
function RichTextRenderFallback({ content }) {
  return /* @__PURE__ */ jsx("div", { className: getClassName(), children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "rich-text",
      dangerouslySetInnerHTML: { __html: content }
    }
  ) });
}

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
import { jsx as jsx2 } from "react/jsx-runtime";
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
  const richtextKeys = useMemo2(() => findAllRichtextKeys(fields), [fields]);
  const richtextProps = useMemo2(() => {
    if (!(richtextKeys == null ? void 0 : richtextKeys.length)) return {};
    const RichTextRender = lazy(
      () => import("./Render-EFVUKRHS.mjs").then((m) => ({
        default: m.RichTextRender
      }))
    );
    let result = __spreadValues({}, props);
    for (const { path, field } of richtextKeys) {
      result = mapDeep(result, path, (content) => /* @__PURE__ */ jsx2(
        Suspense,
        {
          fallback: /* @__PURE__ */ jsx2(RichTextRenderFallback, { content }),
          children: /* @__PURE__ */ jsx2(RichTextRender, { content, field })
        },
        generateId()
      ));
    }
    return result;
  }, [richtextKeys, props]);
  return richtextProps;
}

// components/SlotRender/server.tsx
init_react_import();
import { forwardRef } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var SlotRenderPure = (props) => /* @__PURE__ */ jsx3(SlotRender, __spreadValues({}, props));
var Item = ({
  config,
  item,
  metadata
}) => {
  const Component = config.components[item.type];
  const props = useSlots(config, item, (slotProps) => /* @__PURE__ */ jsx3(SlotRenderPure, __spreadProps(__spreadValues({}, slotProps), { config, metadata })));
  const richtextProps = useRichtextProps(Component.fields, props);
  return /* @__PURE__ */ jsx3(
    Component.render,
    __spreadProps(__spreadValues(__spreadValues({}, props), richtextProps), {
      credbuild: __spreadProps(__spreadValues({}, props.credbuild), {
        metadata: metadata || {}
      })
    })
  );
};
var SlotRender = forwardRef(
  function SlotRenderInternal({ className, style, content, config, metadata, as }, ref) {
    const El = as != null ? as : "div";
    return /* @__PURE__ */ jsx3(El, { className, style, ref, children: content.map((item) => {
      if (!config.components[item.type]) {
        return null;
      }
      return /* @__PURE__ */ jsx3(
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

export {
  buildMappers,
  getSlotTransform,
  useSlots,
  RichTextRenderFallback,
  useRichtextProps,
  SlotRenderPure,
  SlotRender,
  migrate,
  transformProps,
  resolveAllData
};
