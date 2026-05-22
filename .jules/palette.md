## 2024-05-13 - Add ARIA Labels and State Indicators to Custom Interactive Components
**Learning:** Custom interactive components like `ObjectField`, `ComponentList`, `ViewportControls`, and `ArrayField` often lack essential ARIA attributes such as `aria-expanded`, `aria-controls`, and `aria-label`. This makes them inaccessible to screen readers, which rely on these attributes to understand the state and purpose of the components.
**Action:** When creating or updating custom interactive components, always include appropriate ARIA attributes. For collapsible sections, use `aria-expanded` and `aria-controls`. For icon-only buttons, use `aria-label` to provide a descriptive name.

## 2026-05-22 - Native buttons in custom fields need manual ARIA props
**Learning:** Highly custom UI fields (like ResponsiveSliderField and ArrayField) often use native `<button>` elements with inline SVGs instead of the standard `<IconButton>` component, and therefore miss out on standard accessibility props like `aria-label` or `aria-expanded`.
**Action:** When working on form or custom fields, explicitly verify that all native `<button>` elements have required `aria-*` attributes and `type="button"`.
