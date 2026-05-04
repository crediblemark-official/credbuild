import {
  __spreadProps,
  __spreadValues,
  init_react_import
} from "./chunk-2TADFG6T.mjs";

// lib/data/walk-tree.ts
init_react_import();

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

// lib/root-droppable-id.ts
init_react_import();
var rootAreaId = "root";
var rootZone = "default-zone";
var rootDroppableId = `${rootAreaId}:${rootZone}`;

// lib/data/flatten-node.ts
init_react_import();
import flat from "flat";

// lib/data/strip-slots.ts
init_react_import();
var stripSlots = (data, config) => {
  return mapFields(data, { slot: () => null }, config);
};

// lib/data/flatten-node.ts
var { flatten: flatten2, unflatten } = flat;
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
var flattenNode = (node, config) => {
  return __spreadProps(__spreadValues({}, node), {
    props: encodeEmptyObjects(flatten2(stripSlots(node, config).props))
  });
};
var expandNode = (node) => {
  const props = unflatten(decodeEmptyObjects(node.props));
  return __spreadProps(__spreadValues({}, node), {
    props
  });
};

// lib/data/to-component.ts
init_react_import();
var toComponent = (item) => {
  return "type" in item ? item : __spreadProps(__spreadValues({}, item), {
    props: __spreadProps(__spreadValues({}, item.props), { id: "root" }),
    type: "root"
  });
};

// lib/data/walk-app-state.ts
init_react_import();

// lib/data/for-related-zones.ts
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

// lib/data/for-related-zones.ts
function forRelatedZones(item, data, cb, path = []) {
  Object.entries(data.zones || {}).forEach(([zoneCompound, content]) => {
    const [parentId] = getZoneId(zoneCompound);
    if (parentId === item.props.id) {
      cb(path, zoneCompound, content);
    }
  });
}

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

// lib/generate-id.ts
init_react_import();
import { v4 as uuidv4 } from "uuid";
var generateId = (type) => type ? `${type}-${uuidv4()}` : uuidv4();

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

export {
  rootAreaId,
  rootZone,
  rootDroppableId,
  getZoneId,
  defaultSlots,
  walkField,
  mapFields,
  expandNode,
  toComponent,
  walkAppState,
  generateId,
  walkTree,
  setupZone
};
