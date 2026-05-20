## 2025-05-11 - [dangerouslySetInnerHTML XSS vulnerability]
**Vulnerability:** Found unsanitized usages of `dangerouslySetInnerHTML` in RichTextEditor components (`Render.tsx`, `EditorFallback.tsx`, `RenderFallback.tsx`) and `DropZone/index.tsx`.
**Learning:** Raw HTML content generated from `tiptap` or raw strings were passed directly into `dangerouslySetInnerHTML` without proper server-side or isomorphic sanitization, which creates an XSS vulnerability when user input contains `<script>` tags or malicious attributes.
**Prevention:** Always use `isomorphic-dompurify` or a similar DOM sanitizer when setting raw HTML into `dangerouslySetInnerHTML`, especially for Rich Text Editor components. Wrap the sanitization in `useMemo` to prevent unnecessary repeated sanitization on re-renders.

## 2025-05-12 - [Reverse Tabnabbing Mitigation]
**Vulnerability:** Found uses of `target="_blank"` in Button components without explicit `noopener`.
**Learning:** Relying solely on `noreferrer` might leave older or specific browsers vulnerable to reverse tabnabbing, where the new tab can access `window.opener`.
**Prevention:** Always combine `noopener noreferrer` when rendering `target="_blank"` anchors.
