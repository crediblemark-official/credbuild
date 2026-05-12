## 2024-05-11 - LayerTree Memoization Pattern
**Learning:** In highly nested, virtualized list components (like `LayerTree` and `DropZone` internals), failing to wrap pure presentational nodes with `React.memo` causes massive cascading re-renders when global UI state (like `selectedId` or hovering state) changes.
**Action:** When working on complex tree structures or virtualized lists, proactively check if node-level components are memoized, especially if they are connected to a global store that updates frequently.

## 2023-10-27 - [Zustand Primitive Optimization]
**Learning:** Returning large state objects like `s.iframe` from `useAppStore` forces global re-renders whenever the object reference updates, even if the primitive value needed by the component remains structurally the same (e.g. `enabled: boolean`).
**Action:** When extracting nested attributes from a Zustand store, return the primitive value directly instead of returning the container object and destructuring it later. E.g., `useAppStore(s => s.iframe.enabled)` instead of `useAppStore(s => s.iframe)`.
