## 2024-05-11 - LayerTree Memoization Pattern
**Learning:** In highly nested, virtualized list components (like `LayerTree` and `DropZone` internals), failing to wrap pure presentational nodes with `React.memo` causes massive cascading re-renders when global UI state (like `selectedId` or hovering state) changes.
**Action:** When working on complex tree structures or virtualized lists, proactively check if node-level components are memoized, especially if they are connected to a global store that updates frequently.
