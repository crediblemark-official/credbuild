import {
  SlotRenderPure,
  migrate,
  resolveAllData,
  transformProps,
  useRichtextProps,
  useSlots
} from "./chunk-4SQOX3ZQ.mjs";
import "./chunk-IJHL7BIR.mjs";
import "./chunk-CDMESQDA.mjs";
import "./chunk-YH7AXYKP.mjs";
import {
  rootAreaId,
  rootDroppableId,
  rootZone,
  setupZone,
  walkTree
} from "./chunk-GUJDGRSM.mjs";
import {
  init_react_import
} from "./chunk-B4BOBGYB.mjs";

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
  const props = {
    ...item.props,
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
  };
  const renderItem = { ...item, props };
  const propsWithSlots = useSlots(config, renderItem, (slotProps) => /* @__PURE__ */ jsx(SlotRenderPure, { ...slotProps, config, metadata }));
  const richtextProps = useRichtextProps(Component?.fields, propsWithSlots);
  if (!Component) {
    return null;
  }
  return /* @__PURE__ */ jsx(Component.render, { ...propsWithSlots, ...richtextProps });
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
  const rootProps = "props" in data.root ? data.root.props : data.root;
  const title = rootProps.title || "";
  const props = {
    ...rootProps,
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
  };
  const propsWithSlots = useSlots(config, { type: "root", props }, (props2) => /* @__PURE__ */ jsx(SlotRenderPure, { ...props2, config, metadata }));
  const richtextProps = useRichtextProps(config.root?.fields, props);
  if (config.root?.render) {
    return /* @__PURE__ */ jsx(config.root.render, { ...propsWithSlots, ...richtextProps, children: /* @__PURE__ */ jsx(
      DropZoneRender,
      {
        config,
        data,
        zone: rootZone,
        metadata
      }
    ) });
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
