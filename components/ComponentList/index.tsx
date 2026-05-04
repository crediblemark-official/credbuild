import styles from "./styles.module.css";
import getClassNameFactory from "../../lib/get-class-name-factory";
import { ReactNode, useEffect } from "react";
import { useAppStore } from "../../store";
import { ChevronDown, ChevronUp, LayoutTemplate, FileText, Megaphone, Box, Settings, Layers } from "lucide-react";
import { Drawer } from "../Drawer";

const getClassName = getClassNameFactory("ComponentList", styles);

const ComponentListItem = ({
  name,
  label,
}: {
  name: string;
  label?: string;
  index?: number; // TODO deprecate
}) => {
  const overrides = useAppStore((s) => s.overrides);
  const canInsert = useAppStore(
    (s) =>
      s.permissions.getPermissions({
        type: name,
      }).insert
  );

  // DEPRECATED
  useEffect(() => {
    if (overrides.componentItem) {
      console.warn(
        "The `componentItem` override has been deprecated and renamed to `drawerItem`"
      );
    }
  }, [overrides]);

  return (
    <Drawer.Item label={label} name={name} isDragDisabled={!canInsert}>
      {overrides.componentItem ?? overrides.drawerItem}
    </Drawer.Item>
  );
};

const ComponentList = ({
  children,
  title,
  id,
}: {
  id: string;
  children?: ReactNode;
  title?: string;
}) => {
  const config = useAppStore((s) => s.config);
  const setUi = useAppStore((s) => s.setUi);
  const componentList = useAppStore((s) => s.state.ui.componentList);

  const { expanded = true } = componentList[id] || {};

  return (
    <div className={getClassName({ isExpanded: expanded })}>
      {title && (
        <button
          type="button"
          className={getClassName("title")}
          onClick={() =>
            setUi({
              componentList: {
                ...componentList,
                [id]: {
                  ...componentList[id],
                  expanded: !expanded,
                },
              },
            })
          }
          title={
            expanded
              ? `Collapse${title ? ` ${title}` : ""}`
              : `Expand${title ? ` ${title}` : ""}`
          }
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {id.toLowerCase().includes("hero") && <LayoutTemplate size={12} strokeWidth={2.5} />}
            {id.toLowerCase().includes("content") && <FileText size={12} strokeWidth={2.5} />}
            {id.toLowerCase().includes("marketing") && <Megaphone size={12} strokeWidth={2.5} />}
            {id.toLowerCase().includes("layout") && <Box size={12} strokeWidth={2.5} />}
            {id.toLowerCase().includes("basic") && <Settings size={12} strokeWidth={2.5} />}
            {id === "other" && <Layers size={12} strokeWidth={2.5} />}
            <div>{title?.replace(/[\u2600-\u27BF]|[\uD83C][\uDF00-\uDFFF]|[\uD83D][\uDC00-\uDE4F]|[\uD83D][\uDE80-\uDEFF]/g, "").trim()}</div>
          </div>
          <div className={getClassName("titleIcon")}>
            {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </div>
        </button>
      )}
      <div className={getClassName("content")}>
        <Drawer>
          {children ||
            Object.keys(config.components).map((componentKey) => {
              return (
                <ComponentListItem
                  key={componentKey}
                  label={
                    config.components[componentKey]["label"] ?? componentKey
                  }
                  name={componentKey}
                />
              );
            })}
        </Drawer>
      </div>
    </div>
  );
};

ComponentList.Item = ComponentListItem;

export { ComponentList };
