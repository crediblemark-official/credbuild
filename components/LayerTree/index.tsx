import styles from "./styles.module.css";
import getClassNameFactory from "@/lib/get-class-name-factory";
import { Config } from "@/types";
import { ItemSelector } from "@/lib/data/get-item";
import { ChevronDown, LayoutGrid, Layers, Type, LayoutTemplate, Megaphone, FileText, CreditCard, Box, Quote, Info, BarChart3, Image as ImageIcon } from "lucide-react";
import { rootAreaId } from "@/lib/root-droppable-id";
import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useContext,
  useRef,
  memo,
  createContext,
  useState,
  useMemo,
} from "react";
import { ZoneStoreContext } from "@/components/DropZone/context";
import { useAppStore, useAppStoreApi } from "@/store";
import { useContextStore } from "@/lib/use-context-store";
import { NodeIndex, ZoneIndex } from "@/types/Internal";
import { useVirtualizer } from "@tanstack/react-virtual";

const getClassName = getClassNameFactory("LayerTree", styles);
const getClassNameLayer = getClassNameFactory("Layer", styles);
const DEFAULT_LAYER_ROW_HEIGHT = 32;
const LAYER_TREE_VIRTUALIZATION_OVERSCAN = 8;
const MIN_VIRTUALIZED_LAYER_COUNT = 25;
const measuredRowHeights = new Map<string, number>();

type DraggedItemInfo = {
  itemId: string;
  index: number;
  zoneCompound: string;
};

type DragContextType = {
  draggedItem: DraggedItemInfo | null;
  setDraggedItem: (item: DraggedItemInfo | null) => void;
  hoveredItemId: string | null;
  setHoveredItemId: (id: string | null) => void;
  hoverPosition: "before" | "after" | null;
  setHoverPosition: (pos: "before" | "after" | null) => void;
};

const DragContext = createContext<DragContextType | null>(null);

export type LayerZoneTree = {
  items: LayerNodeTree[];
  label?: string;
  zoneCompound: string;
};

type LayerNodeTree = {
  childZones: LayerZoneTree[];
  componentType: string;
  index: number;
  itemId: string;
  label: string;
  zoneCompound: string;
};

const getZonesByParent = (zones: ZoneIndex) => {
  return Object.keys(zones).reduce<Record<string, string[]>>((acc, zone) => {
    const [parentId] = zone.split(":");

    acc[parentId] = [...(acc[parentId] || []), zone];

    return acc;
  }, {});
};

const getZoneLabel = (
  zoneCompound: string,
  nodes: NodeIndex,
  config: Config,
  label?: string
) => {
  if (label !== undefined) {
    return label;
  }

  const [componentId, slotId] = zoneCompound.split(":");

  if (!slotId) {
    return;
  }

  const componentType = nodes[componentId]?.data.type;

  const configForComponent =
    componentType && componentType !== rootAreaId
      ? config.components[componentType]
      : config.root;

  return configForComponent?.fields?.[slotId]?.label ?? slotId;
};

const buildLayerNode = ({
  config,
  itemId,
  index,
  nodes,
  zoneCompound,
  zones,
  zonesByParent,
}: {
  config: Config;
  itemId: string;
  index: number;
  nodes: NodeIndex;
  zoneCompound: string;
  zones: ZoneIndex;
  zonesByParent: Record<string, string[]>;
}): LayerNodeTree => {
  const nodeData = nodes[itemId];
  const componentType = nodeData?.data.type?.toString() || "Component";
  const label = config.components[componentType]?.label ?? componentType;
  const childZoneCompounds = zonesByParent[itemId] || [];

  return {
    childZones: childZoneCompounds.map((childZoneCompound) =>
      buildLayerTree({
        config,
        nodes,
        zoneCompound: childZoneCompound,
        zones,
        zonesByParent,
      })
    ),
    componentType,
    index,
    itemId,
    label,
    zoneCompound,
  };
};

export const buildLayerTree = ({
  config,
  label,
  nodes,
  zoneCompound,
  zones,
  zonesByParent = getZonesByParent(zones),
}: {
  config: Config;
  label?: string;
  nodes: NodeIndex;
  zoneCompound: string;
  zones: ZoneIndex;
  zonesByParent?: Record<string, string[]>;
}): LayerZoneTree => {
  const contentIds = zones[zoneCompound]?.contentIds ?? [];

  return {
    items: contentIds.map((itemId, index) =>
      buildLayerNode({
        config,
        itemId,
        index,
        nodes,
        zoneCompound,
        zones,
        zonesByParent,
      })
    ),
    label: getZoneLabel(zoneCompound, nodes, config, label),
    zoneCompound,
  };
};

const getEstimatedRowHeight = (itemId: string) =>
  measuredRowHeights.get(itemId) ?? DEFAULT_LAYER_ROW_HEIGHT;

const cacheMeasuredRowHeight = (itemId: string, height: number) => {
  if (height <= 0) {
    return;
  }

  measuredRowHeights.set(itemId, height);
};

const getScrollParent = (el: HTMLElement | null) => {
  let current = el?.parentElement ?? null;

  while (current) {
    const { overflow, overflowY } = getComputedStyle(current);

    if ([overflow, overflowY].some((value) => /auto|scroll/.test(value))) {
      return current;
    }

    current = current.parentElement;
  }

  return null;
};

const Layer = memo(forwardRef(function Layer(
  {
    childIsSelected,
    dataIndex,
    depth,
    isSelected,
    node,
    selectedId,
    selectedPathIds,
  }: {
    childIsSelected: boolean;
    dataIndex?: number;
    depth: number;
    isSelected: boolean;
    node: LayerNodeTree;
    selectedId: string | null;
    selectedPathIds: Set<string>;
  },
  ref: ForwardedRef<HTMLLIElement>
) {
  const dispatch = useAppStore((s) => s.dispatch);
  const appStoreApi = useAppStoreApi();
  const zoneStore = useContext(ZoneStoreContext);
  const dragCtx = useContext(DragContext);
  const isHovering = useContextStore(
    ZoneStoreContext,
    (s) => s.hoveringComponent === node.itemId
  );
  const containsZone = node.childZones.length > 0;

  const setItemSelector = useCallback(
    (itemSelector: ItemSelector | null) => {
      dispatch({ type: "setUi", ui: { itemSelector } });
    },
    [dispatch]
  );

  const shouldRenderChildren = isSelected || childIsSelected;

  const getLayerIcon = (type: string) => {
    const t = type.toLowerCase();
    if (t === "text" || t === "heading" || t.includes("heading")) return <Type size="14" strokeWidth={2.5} />;
    if (t.includes("hero")) return <LayoutTemplate size="14" strokeWidth={2.5} />;
    if (t.includes("pricing")) return <CreditCard size="14" strokeWidth={2.5} />;
    if (t.includes("stats")) return <BarChart3 size="14" strokeWidth={2.5} />;
    if (t.includes("testimonials")) return <Quote size="14" strokeWidth={2.5} />;
    if (t.includes("about") || t.includes("info")) return <Info size="14" strokeWidth={2.5} />;
    if (t.includes("gallery") || t.includes("image")) return <ImageIcon size="14" strokeWidth={2.5} />;
    if (t.includes("marketing") || t.includes("cta")) return <Megaphone size="14" strokeWidth={2.5} />;
    if (t.includes("content") || t.includes("blog")) return <FileText size="14" strokeWidth={2.5} />;
    if (t.includes("container") || t.includes("layout") || t.includes("flex")) return <Box size="14" strokeWidth={2.5} />;
    
    return <LayoutGrid size="14" strokeWidth={2.5} />;
  };

  return (
    <li
      ref={ref}
      className={getClassNameLayer({
        childIsSelected,
        containsZone,
        isHovering,
        isSelected,
      })}
      data-index={dataIndex}
      data-credbuild-layer-tree-id={node.itemId}
      draggable={true}
      onDragStart={(e) => {
        dragCtx?.setDraggedItem({
          itemId: node.itemId,
          index: node.index,
          zoneCompound: node.zoneCompound,
        });
        e.dataTransfer.effectAllowed = "move";
      }}
      onDragOver={(e) => {
        e.preventDefault();
        if (!dragCtx || !dragCtx.draggedItem || dragCtx.draggedItem.itemId === node.itemId) return;

        // Prevent dropping parent inside child zone
        const targetNodeIndex = appStoreApi.getState().state.indexes.nodes[node.itemId];
        if (targetNodeIndex?.path.some((p: string) => p.split(":")[0] === dragCtx.draggedItem?.itemId)) {
          return;
        }

        const rect = e.currentTarget.getBoundingClientRect();
        const hoverClientY = e.clientY - rect.top;
        const threshold = rect.height / 2;
        const position = hoverClientY < threshold ? "before" : "after";

        dragCtx.setHoveredItemId(node.itemId);
        dragCtx.setHoverPosition(position);
      }}
      onDragLeave={() => {
        if (dragCtx?.hoveredItemId === node.itemId) {
          dragCtx.setHoveredItemId(null);
          dragCtx.setHoverPosition(null);
        }
      }}
      onDrop={(e) => {
        e.preventDefault();
        if (!dragCtx || !dragCtx.draggedItem || dragCtx.draggedItem.itemId === node.itemId) return;

        let destIndex = node.index;
        if (dragCtx.draggedItem.zoneCompound === node.zoneCompound) {
          if (dragCtx.hoverPosition === "before") {
            destIndex = dragCtx.draggedItem.index > node.index ? node.index : node.index - 1;
          } else {
            destIndex = dragCtx.draggedItem.index > node.index ? node.index + 1 : node.index;
          }
        } else {
          destIndex = dragCtx.hoverPosition === "before" ? node.index : node.index + 1;
        }

        dispatch({
          type: "move",
          sourceIndex: dragCtx.draggedItem.index,
          sourceZone: dragCtx.draggedItem.zoneCompound,
          destinationIndex: destIndex,
          destinationZone: node.zoneCompound,
        });

        // Set the UI item selector to follow the moved item
        dispatch({
          type: "setUi",
          ui: {
            itemSelector: {
              index: destIndex,
              zone: node.zoneCompound,
            },
          },
        });

        dragCtx.setDraggedItem(null);
        dragCtx.setHoveredItemId(null);
        dragCtx.setHoverPosition(null);
      }}
      onDragEnd={() => {
        dragCtx?.setDraggedItem(null);
        dragCtx?.setHoveredItemId(null);
        dragCtx?.setHoverPosition(null);
      }}
      style={{
        opacity: dragCtx?.draggedItem?.itemId === node.itemId ? 0.4 : 1,
        position: "relative",
      }}
    >
      {dragCtx?.hoveredItemId === node.itemId && dragCtx?.hoverPosition && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(to right, var(--cb-gold, #d4af37), #f3e5ab)",
            zIndex: 10,
            ...(dragCtx.hoverPosition === "before" ? { top: 0 } : { bottom: 0 })
          }}
        />
      )}
      <div className={getClassNameLayer("inner")}>
        <button
          type="button"
          className={getClassNameLayer("clickable")}
          onClick={() => {
            if (isSelected) {
              setItemSelector(null);
              return;
            }

            setItemSelector({
              index: node.index,
              zone: node.zoneCompound,
            });

            zoneStore.getState().scrollToComponent(node.itemId);
          }}
          onMouseEnter={(e) => {
            e.stopPropagation();
            zoneStore.setState({ hoveringComponent: node.itemId });
          }}
          onMouseLeave={(e) => {
            e.stopPropagation();
            zoneStore.setState({ hoveringComponent: null });
          }}
        >
          {containsZone && (
            <div
              className={getClassNameLayer("chevron")}
              title={isSelected ? "Collapse" : "Expand"}
            >
              <ChevronDown size="12" />
            </div>
          )}
          <div className={getClassNameLayer("title")}>
            <div className={getClassNameLayer("icon")}>
              {getLayerIcon(node.componentType)}
            </div>
            <div className={getClassNameLayer("name")}>{node.label}</div>
          </div>
        </button>
      </div>
      {containsZone &&
        shouldRenderChildren &&
        node.childZones.map((childZone) => (
          <div
            key={childZone.zoneCompound}
            className={getClassNameLayer("zones")}
          >
            <LayerTreeZone
              depth={depth + 1}
              selectedId={selectedId}
              selectedPathIds={selectedPathIds}
              tree={childZone}
            />
          </div>
        ))}
    </li>
  );
}));

const LayerTreeZone = memo(({
  depth,
  selectedId,
  selectedPathIds,
  tree,
}: {
  depth: number;
  selectedId: string | null;
  selectedPathIds: Set<string>;
  tree: LayerZoneTree;
}) => {
  const shouldVirtualize =
    depth === 0 && tree.items.length >= MIN_VIRTUALIZED_LAYER_COUNT;

  return (
    <>
      {tree.label && (
        <div className={getClassName("zoneTitle")}>
          <div className={getClassName("zoneIcon")}>
            <Layers size="16" />
          </div>
          {tree.label}
        </div>
      )}
      {shouldVirtualize ? (
        <VirtualizedLayerTreeItems
          depth={depth}
          selectedId={selectedId}
          selectedPathIds={selectedPathIds}
          tree={tree}
        />
      ) : (
        <StaticLayerTreeItems
          depth={depth}
          selectedId={selectedId}
          selectedPathIds={selectedPathIds}
          tree={tree}
        />
      )}
    </>
  );
});

const StaticLayerTreeItems = memo(({
  depth,
  selectedId,
  selectedPathIds,
  tree,
}: {
  depth: number;
  selectedId: string | null;
  selectedPathIds: Set<string>;
  tree: LayerZoneTree;
}) => {
  return (
    <ul className={getClassName()}>
      {tree.items.length === 0 && (
        <div className={getClassName("helper")}>No items</div>
      )}
      {tree.items.map((node) => (
        <Layer
          childIsSelected={selectedPathIds.has(node.itemId)}
          depth={depth}
          isSelected={selectedId === node.itemId}
          key={node.itemId}
          node={node}
          selectedId={selectedId}
          selectedPathIds={selectedPathIds}
        />
      ))}
    </ul>
  );
});

const VirtualizedLayerTreeItems = memo(({
  depth,
  selectedId,
  selectedPathIds,
  tree,
}: {
  depth: number;
  selectedId: string | null;
  selectedPathIds: Set<string>;
  tree: LayerZoneTree;
}) => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const virtualizer = useVirtualizer({
    count: tree.items.length,
    estimateSize: (index) => getEstimatedRowHeight(tree.items[index].itemId),
    getItemKey: (index) => tree.items[index].itemId,
    getScrollElement: () => getScrollParent(listRef.current),
    overscan: LAYER_TREE_VIRTUALIZATION_OVERSCAN,
    measureElement: (element: HTMLElement) => {
      const height = Math.ceil(element.getBoundingClientRect().height);
      const itemId = element.dataset.credbuildLayerTreeId;

      if (itemId) {
        cacheMeasuredRowHeight(itemId, height);
      }

      return height || DEFAULT_LAYER_ROW_HEIGHT;
    },
  });

  const virtualItems = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();
  const renderedItems = [];
  let previousEnd = 0;
  let previousIndex = -1;

  virtualItems.forEach((virtualItem) => {
    const node = tree.items[virtualItem.index];
    const gapSize = Math.max(virtualItem.start - previousEnd, 0);

    if (gapSize > 0) {
      renderedItems.push(
        <li
          key={`gap:${tree.zoneCompound}:${previousIndex}:${virtualItem.index}`}
          aria-hidden="true"
          style={{ height: `${gapSize}px` }}
        />
      );
    }

    renderedItems.push(
      <Layer
        childIsSelected={selectedPathIds.has(node.itemId)}
        dataIndex={virtualItem.index}
        depth={depth}
        isSelected={selectedId === node.itemId}
        key={node.itemId}
        node={node}
        ref={virtualizer.measureElement}
        selectedId={selectedId}
        selectedPathIds={selectedPathIds}
      />
    );

    previousEnd = virtualItem.end;
    previousIndex = virtualItem.index;
  });

  const trailingGap = Math.max(totalSize - previousEnd, 0);

  if (trailingGap > 0) {
    renderedItems.push(
      <li
        key={`gap:${tree.zoneCompound}:${previousIndex}:end`}
        aria-hidden="true"
        style={{ height: `${trailingGap}px` }}
      />
    );
  }

  return (
    <ul className={getClassName()} ref={listRef}>
      {tree.items.length === 0 && (
        <div className={getClassName("helper")}>No items</div>
      )}
      {renderedItems}
    </ul>
  );
});

export const LayerTree = memo(({
  selectedId,
  selectedPathIds,
  trees,
}: {
  selectedId: string | null;
  selectedPathIds: Set<string>;
  trees: LayerZoneTree[];
}) => {
  const [draggedItem, setDraggedItem] = useState<DraggedItemInfo | null>(null);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [hoverPosition, setHoverPosition] = useState<"before" | "after" | null>(null);

  const dragContextValue = useMemo(() => ({
    draggedItem,
    setDraggedItem,
    hoveredItemId,
    setHoveredItemId,
    hoverPosition,
    setHoverPosition,
  }), [draggedItem, hoveredItemId, hoverPosition]);

  return (
    <DragContext.Provider
      value={dragContextValue}
    >
      {trees.map((tree) => (
        <LayerTreeZone
          depth={0}
          key={tree.zoneCompound}
          selectedId={selectedId}
          selectedPathIds={selectedPathIds}
          tree={tree}
        />
      ))}
    </DragContext.Provider>
  );
});
