## 2024-05-24 - Custom Button Accessibility
**Learning:** When reviewing highly custom UI fields like responsive sliders and inline arrays, native `<button>` tags are sometimes used instead of the unified `<IconButton>` component, resulting in missing ARIA labels or `aria-pressed` states on icon-only interactive elements.
**Action:** Always verify `aria-label` and interactive states (like `aria-expanded` and `aria-pressed`) on custom button implementations, especially within complex configuration fields like `AutoField`.
