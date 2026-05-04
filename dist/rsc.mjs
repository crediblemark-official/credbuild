import {
  SlotRenderPure,
  migrate,
  resolveAllData,
  transformProps,
  useRichtextProps,
  useSlots
} from "./chunk-32RNFTPX.mjs";
import "./chunk-6MZLFUXA.mjs";
import "./chunk-QGRPODT7.mjs";
import "./chunk-CYQ2TPPM.mjs";
import {
  rootAreaId,
  rootDroppableId,
  rootZone,
  setupZone,
  walkTree
} from "./chunk-Y5AAKZ45.mjs";
import {
  __spreadProps,
  __spreadValues,
  init_react_import
} from "./chunk-2TADFG6T.mjs";

// bundle/rsc.tsx
init_react_import();

// components/ServerRender/index.tsx
init_react_import();
import { Fragment, jsx } from "react/jsx-runtime";
function DropZoneRenderItem({
  item,
  data,
  config,
  metadata
}) {
  const Component = config.components[item.type];
  const props = __spreadProps(__spreadValues({}, item.props), {
    credbuild: {
      renderDropZone: ({ zone }) => /* @__PURE__ */ jsx(
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
  const propsWithSlots = useSlots(config, renderItem, (slotProps) => /* @__PURE__ */ jsx(SlotRenderPure, __spreadProps(__spreadValues({}, slotProps), { config, metadata })));
  const richtextProps = useRichtextProps(Component == null ? void 0 : Component.fields, propsWithSlots);
  if (!Component) {
    return null;
  }
  return /* @__PURE__ */ jsx(Component.render, __spreadValues(__spreadValues({}, propsWithSlots), richtextProps));
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
  return /* @__PURE__ */ jsx(Fragment, { children: content.map((item) => {
    return /* @__PURE__ */ jsx(
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
      renderDropZone: ({ zone }) => /* @__PURE__ */ jsx(
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
  const propsWithSlots = useSlots(config, { type: "root", props }, (props2) => /* @__PURE__ */ jsx(SlotRenderPure, __spreadProps(__spreadValues({}, props2), { config, metadata })));
  const richtextProps = useRichtextProps((_a = config.root) == null ? void 0 : _a.fields, props);
  if ((_b = config.root) == null ? void 0 : _b.render) {
    return /* @__PURE__ */ jsx(config.root.render, __spreadProps(__spreadValues(__spreadValues({}, propsWithSlots), richtextProps), { children: /* @__PURE__ */ jsx(
      DropZoneRender,
      {
        config,
        data,
        zone: rootZone,
        metadata
      }
    ) }));
  }
  return /* @__PURE__ */ jsx(
    DropZoneRender,
    {
      config,
      data,
      zone: rootZone,
      metadata
    }
  );
}
export {
  Render,
  migrate,
  resolveAllData,
  transformProps,
  walkTree
};
