import styles from "./styles.module.css";
import getClassNameFactory from "@/lib/get-class-name-factory";
import { ReactNode, useEffect, memo } from "react";
import { useAppStore, useAppStoreApi } from "@/store";
import { ChevronDown, ChevronUp, LayoutTemplate, FileText, Megaphone, Box, Settings, Layers } from "lucide-react";
import { Drawer } from "@/components/Drawer";

const getClassName = getClassNameFactory("ComponentList", styles);

// ⚡ Bolt: Wrapped list items in React.memo to prevent massive cascading
// re-renders of all pure presentational nodes when parent list UI state changes.
const ComponentListItem = memo(({
  name,
  label,
}: {
  name: string;
  label?: string;
  index?: number; 
}) => {
  const overrides = useAppStore((s) => s.overrides);
  const canInsert = useAppStore(
    (s) =>
      s.permissions.getPermissions({
        type: name,
      }).insert
  );

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
});

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

  // ⚡ Bolt: Refactored selector to observe only the primitive `expanded` boolean
  // rather than the whole `componentList` dictionary, preventing this list
  // from re-rendering whenever *any* unrelated list is toggled.
  const expanded = useAppStore((s) => s.state.ui.componentList[id]?.expanded ?? true);
  const appStoreApi = useAppStoreApi();

  const components = Object.keys(config.components);

  return (
    <div className={getClassName({ isExpanded: expanded })}>
      {title && (
        <button
          type="button"
          className={getClassName("title")}
          onClick={() => {
            const currentComponentList = appStoreApi.getState().state.ui.componentList;
            appStoreApi.getState().setUi({
              componentList: {
                ...currentComponentList,
                [id]: {
                  ...currentComponentList[id],
                  expanded: !expanded,
                },
              },
            });
          }}
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
      <div 
        className={getClassName("content")} 
        style={{ 
          overflow: "visible",
          display: expanded ? "block" : "none"
        }}
      >
        <Drawer>
          {children ||
            components.map((componentKey, i) => {
              return (
                <ComponentListItem
                  key={componentKey}
                  label={config.components[componentKey]["label"] ?? componentKey}
                  name={componentKey}
                  index={i}
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
