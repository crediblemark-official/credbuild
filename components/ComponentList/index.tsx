import styles from "./styles.module.css";
import getClassNameFactory from "@/lib/get-class-name-factory";
import { ReactNode, useEffect, useRef } from "react";
import { useAppStore } from "@/store";
import { ChevronDown, ChevronUp, LayoutTemplate, FileText, Megaphone, Box, Settings, Layers } from "lucide-react";
import { Drawer } from "@/components/Drawer";
import { useVirtualizer } from "@tanstack/react-virtual";

const getClassName = getClassNameFactory("ComponentList", styles);

const ComponentListItem = ({
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
  const parentRef = useRef<HTMLDivElement>(null);

  const { expanded = true } = componentList[id] || {};

  const components = Object.keys(config.components);
  
  const virtualizer = useVirtualizer({
    count: components.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 32, // Estimated height of each item
    overscan: 5,
  });

  return (
    <div className={getClassName({ isExpanded: expanded })}>
      {title && (
        <button
          type="button"
          className={getClassName("title")}
          aria-expanded={expanded}
          aria-controls={`${id}-content`}
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
        id={`${id}-content`}
        ref={parentRef}
        className={getClassName("content")} 
        style={{ 
          maxHeight: expanded ? '500px' : '0px', 
          overflowY: 'auto',
          transition: 'max-height 0.3s ease-in-out'
        }}
      >
        <div
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          <Drawer>
            {children ||
              virtualizer.getVirtualItems().map((virtualItem) => {
                const componentKey = components[virtualItem.index];
                return (
                  <div
                    key={virtualItem.key}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: `${virtualItem.size}px`,
                      transform: `translateY(${virtualItem.start}px)`,
                    }}
                  >
                    <ComponentListItem
                      label={config.components[componentKey]["label"] ?? componentKey}
                      name={componentKey}
                    />
                  </div>
                );
              })}
          </Drawer>
        </div>
      </div>
    </div>
  );
};

ComponentList.Item = ComponentListItem;

export { ComponentList };
