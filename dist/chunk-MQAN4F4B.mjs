import {
  generateId,
  rootDroppableId,
  setupZone,
  walkAppState,
  walkTree
} from "./chunk-Y5AAKZ45.mjs";
import {
  __spreadProps,
  __spreadValues,
  init_react_import
} from "./chunk-2TADFG6T.mjs";

// reducer/index.ts
init_react_import();

// reducer/actions/set.ts
init_react_import();
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

// reducer/actions/insert.ts
init_react_import();

// lib/data/insert.ts
init_react_import();
var insert = (list, index, item) => {
  const result = Array.from(list || []);
  result.splice(index, 0, item);
  return result;
};

// lib/data/get-ids-for-parent.ts
init_react_import();
var getIdsForParent = (zoneCompound, state) => {
  const [parentId] = zoneCompound.split(":");
  const node = state.indexes.nodes[parentId];
  return ((node == null ? void 0 : node.path) || []).map((p) => p.split(":")[0]);
};

// lib/data/populate-ids.ts
init_react_import();
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
init_react_import();
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
init_react_import();
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

// reducer/actions/duplicate.ts
init_react_import();

// lib/data/get-item.ts
init_react_import();
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

// reducer/actions/reorder.ts
init_react_import();

// reducer/actions/move.ts
init_react_import();

// lib/data/remove.ts
init_react_import();
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
init_react_import();
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

// reducer/actions/register-zone.ts
init_react_import();
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
init_react_import();
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
init_react_import();
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
init_react_import();
var makeStatePublic = (state) => {
  const { data, ui } = state;
  return { data, ui };
};

// reducer/actions.tsx
init_react_import();

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

export {
  insert,
  populateIds,
  insertAction,
  getItem,
  makeStatePublic,
  createReducer
};
