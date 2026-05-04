import {
  mapFields,
  toComponent
} from "./chunk-Y5AAKZ45.mjs";
import {
  __async,
  __spreadProps,
  __spreadValues,
  init_react_import
} from "./chunk-2TADFG6T.mjs";

// components/ViewportControls/default-viewports.ts
init_react_import();
var defaultViewports = [
  { width: 360, height: "auto", icon: "Smartphone", label: "Small" },
  { width: 768, height: "auto", icon: "Tablet", label: "Medium" },
  { width: 1280, height: "auto", icon: "Monitor", label: "Large" },
  { width: "100%", height: "auto", icon: "FullWidth", label: "Full-width" }
];

// lib/resolve-component-data.ts
init_react_import();

// lib/get-changed.ts
init_react_import();
import { deepEqual } from "fast-equals";
var getChanged = (newItem, oldItem) => {
  return newItem ? Object.keys(newItem.props || {}).reduce((acc, item) => {
    const newItemProps = (newItem == null ? void 0 : newItem.props) || {};
    const oldItemProps = (oldItem == null ? void 0 : oldItem.props) || {};
    return __spreadProps(__spreadValues({}, acc), {
      [item]: !deepEqual(oldItemProps[item], newItemProps[item])
    });
  }, {}) : {};
};

// lib/resolve-component-data.ts
import { deepEqual as deepEqual2 } from "fast-equals";
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
    const dataChanged = item && !deepEqual2(item, oldItem);
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
    didChange: !deepEqual2(item, itemWithResolvedChildren)
  };
});

// store/default-app-state.ts
init_react_import();
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

export {
  defaultViewports,
  getChanged,
  resolveComponentData,
  defaultAppState
};
