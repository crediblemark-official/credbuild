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

// bundle/internal.ts
var internal_exports = {};
__export(internal_exports, {
  createReducer: () => createReducer
});
module.exports = __toCommonJS(internal_exports);

// ../tsup-config/react-import.js
var import_react = __toESM(require("react"));

// lib/root-droppable-id.ts
var rootAreaId = "root";
var rootZone = "default-zone";
var rootDroppableId = `${rootAreaId}:${rootZone}`;

// lib/get-zone-id.ts
var getZoneId = (zoneCompound) => {
  if (!zoneCompound) {
    return [];
  }
  if (zoneCompound && zoneCompound.indexOf(":") > -1) {
    return zoneCompound.split(":");
  }
  return [rootDroppableId, zoneCompound];
};

// lib/data/for-related-zones.ts
function forRelatedZones(item, data, cb, path = []) {
  Object.entries(data.zones || {}).forEach(([zoneCompound, content]) => {
    const [parentId] = getZoneId(zoneCompound);
    if (parentId === item.props.id) {
      cb(path, zoneCompound, content);
    }
  });
}

// lib/data/default-slots.ts
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

// lib/data/flatten-node.ts
var import_flat = __toESM(require("flat"));

// lib/data/strip-slots.ts
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

// lib/data/to-component.ts
var toComponent = (item) => {
  return "type" in item ? item : __spreadProps(__spreadValues({}, item), {
    props: __spreadProps(__spreadValues({}, item.props), { id: "root" }),
    type: "root"
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

// reducer/actions/set.ts
var setAction = (state, action, appStore) => {
  if (typeof action.state === "object") {
    const newState = __spreadValues(__spreadValues({}, state), action.state);
    if (action.state.indexes) {
      return newState;
    }
    console.warn(
      "`set` is expensive and may cause unnecessary re-renders. Consider using a more atomic action instead."
    );
    return walkAppState(newState, appStore.config);
  }
  return __spreadValues(__spreadValues({}, state), action.state(state));
};

// lib/data/insert.ts
var insert = (list, index, item) => {
  const result = Array.from(list || []);
  result.splice(index, 0, item);
  return result;
};

// lib/generate-id.ts
var import_uuid = require("uuid");
var generateId = (type) => type ? `${type}-${(0, import_uuid.v4)()}` : (0, import_uuid.v4)();

// lib/data/get-ids-for-parent.ts
var getIdsForParent = (zoneCompound, state) => {
  const [parentId] = zoneCompound.split(":");
  const node = state.indexes.nodes[parentId];
  return ((node == null ? void 0 : node.path) || []).map((p) => p.split(":")[0]);
};

// lib/data/walk-tree.ts
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

// lib/data/populate-ids.ts
var populateIds = (data, config, override = false) => {
  const id = generateId(data.type);
  return walkTree(
    __spreadProps(__spreadValues({}, data), {
      props: override ? __spreadProps(__spreadValues({}, data.props), { id }) : __spreadValues({}, data.props)
    }),
    config,
    (contents) => contents.map((item) => {
      const id2 = generateId(item.type);
      return __spreadProps(__spreadValues({}, item), {
        props: override ? __spreadProps(__spreadValues({}, item.props), { id: id2 }) : __spreadValues({ id: id2 }, item.props)
      });
    })
  );
};

// reducer/actions/insert.ts
function insertAction(state, action, appStore) {
  const id = action.id || generateId(action.componentType);
  const emptyComponentData = populateIds(
    {
      type: action.componentType,
      props: __spreadProps(__spreadValues({}, appStore.config.components[action.componentType].defaultProps || {}), {
        id
      })
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

// reducer/actions/replace.ts
var replaceAction = (state, action, appStore) => {
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
      return __spreadProps(__spreadValues({}, item), {
        props: __spreadValues({ id }, item.props)
      });
    });
  });
  const stateWithDeepSlotsRemoved = __spreadProps(__spreadValues({}, state), {
    ui: __spreadValues(__spreadValues({}, state.ui), action.ui)
  });
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

// reducer/actions/replace-root.ts
var replaceRootAction = (state, action, appStore) => {
  return walkAppState(
    state,
    appStore.config,
    (content) => content,
    (childItem) => {
      if (childItem.props.id === "root") {
        return __spreadProps(__spreadValues({}, childItem), {
          props: __spreadValues(__spreadValues({}, childItem.props), action.root.props),
          readOnly: action.root.readOnly
        });
      }
      return childItem;
    }
  );
};

// lib/data/get-item.ts
function getItem(selector, state) {
  var _a, _b;
  const zone = (_a = state.indexes.zones) == null ? void 0 : _a[selector.zone || rootDroppableId];
  return zone ? (_b = state.indexes.nodes[zone.contentIds[selector.index]]) == null ? void 0 : _b.data : void 0;
}

// reducer/actions/duplicate.ts
function duplicateAction(state, action, appStore) {
  const item = getItem(
    { index: action.sourceIndex, zone: action.sourceZone },
    state
  );
  const idsInPath = getIdsForParent(action.sourceZone, state);
  const newItem = __spreadProps(__spreadValues({}, item), {
    props: __spreadProps(__spreadValues({}, item.props), {
      id: generateId(item.type)
    })
  });
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
        return __spreadProps(__spreadValues({}, childItem), {
          props: __spreadProps(__spreadValues({}, childItem.props), {
            id: generateId(childItem.type)
          })
        });
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
  return __spreadProps(__spreadValues({}, modified), {
    ui: __spreadProps(__spreadValues({}, modified.ui), {
      itemSelector: {
        index: action.sourceIndex + 1,
        zone: action.sourceZone
      }
    })
  });
}

// lib/data/remove.ts
var remove = (list, index) => {
  const result = Array.from(list);
  result.splice(index, 1);
  return result;
};

// reducer/actions/move.ts
var moveAction = (state, action, appStore) => {
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

// reducer/actions/reorder.ts
var reorderAction = (state, action, appStore) => {
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

// reducer/actions/remove.ts
var removeAction = (state, action, appStore) => {
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

// lib/data/setup-zone.ts
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

// reducer/actions/register-zone.ts
var zoneCache = {};
function registerZoneAction(state, action) {
  if (zoneCache[action.zone]) {
    return __spreadProps(__spreadValues({}, state), {
      data: __spreadProps(__spreadValues({}, state.data), {
        zones: __spreadProps(__spreadValues({}, state.data.zones), {
          [action.zone]: zoneCache[action.zone]
        })
      }),
      indexes: __spreadProps(__spreadValues({}, state.indexes), {
        zones: __spreadProps(__spreadValues({}, state.indexes.zones), {
          [action.zone]: __spreadProps(__spreadValues({}, state.indexes.zones[action.zone]), {
            contentIds: zoneCache[action.zone].map((item) => item.props.id),
            type: "dropzone"
          })
        })
      })
    });
  }
  return __spreadProps(__spreadValues({}, state), { data: setupZone(state.data, action.zone) });
}
function unregisterZoneAction(state, action) {
  const _zones = __spreadValues({}, state.data.zones || {});
  const zoneIndex = __spreadValues({}, state.indexes.zones || {});
  if (_zones[action.zone]) {
    zoneCache[action.zone] = _zones[action.zone];
    delete _zones[action.zone];
  }
  delete zoneIndex[action.zone];
  return __spreadProps(__spreadValues({}, state), {
    data: __spreadProps(__spreadValues({}, state.data), {
      zones: _zones
    }),
    indexes: __spreadProps(__spreadValues({}, state.indexes), {
      zones: zoneIndex
    })
  });
}

// reducer/actions/set-data.ts
var setDataAction = (state, action, appStore) => {
  if (typeof action.data === "object") {
    console.warn(
      "`setData` is expensive and may cause unnecessary re-renders. Consider using a more atomic action instead."
    );
    return walkAppState(
      __spreadProps(__spreadValues({}, state), {
        data: __spreadValues(__spreadValues({}, state.data), action.data)
      }),
      appStore.config
    );
  }
  return walkAppState(
    __spreadProps(__spreadValues({}, state), {
      data: __spreadValues(__spreadValues({}, state.data), action.data(state.data))
    }),
    appStore.config
  );
};

// reducer/actions/set-ui.ts
var setUiAction = (state, action) => {
  if (typeof action.ui === "object") {
    return __spreadProps(__spreadValues({}, state), {
      ui: __spreadValues(__spreadValues({}, state.ui), action.ui)
    });
  }
  return __spreadProps(__spreadValues({}, state), {
    ui: __spreadValues(__spreadValues({}, state.ui), action.ui(state.ui))
  });
};

// lib/data/make-state-public.ts
var makeStatePublic = (state) => {
  const { data, ui } = state;
  return { data, ui };
};

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
    onAction == null ? void 0 : onAction(action, makeStatePublic(newAppState), makeStatePublic(state));
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createReducer
});
