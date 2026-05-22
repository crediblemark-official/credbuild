## 2024-05-11 - LayerTree Memoization Pattern
**Learning:** In highly nested, virtualized list components (like `LayerTree` and `DropZone` internals), failing to wrap pure presentational nodes with `React.memo` causes massive cascading re-renders when global UI state (like `selectedId` or hovering state) changes.
**Action:** When working on complex tree structures or virtualized lists, proactively check if node-level components are memoized, especially if they are connected to a global store that updates frequently.

## 2026-05-22 - Optimize ComponentList using React.memo and primitive selectors
**Learning:** In the `ComponentList` sidebar component, failing to memoize the items and destructuring the entire `componentList` dictionary from Zustand leads to large numbers of pure components unnecessarily re-rendering whenever *any* unrelated list is toggled.
**Action:** Apply `React.memo` to presentation-only list items and use targeted primitive selectors like `useAppStore((s) => s.state.ui.componentList[id]?.expanded)` instead of listening to the whole object.
