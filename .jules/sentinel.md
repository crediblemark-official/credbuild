## 2025-05-11 - [dangerouslySetInnerHTML XSS vulnerability]
**Vulnerability:** Found unsanitized usages of `dangerouslySetInnerHTML` in RichTextEditor components (`Render.tsx`, `EditorFallback.tsx`, `RenderFallback.tsx`) and `DropZone/index.tsx`.
**Learning:** Raw HTML content generated from `tiptap` or raw strings were passed directly into `dangerouslySetInnerHTML` without proper server-side or isomorphic sanitization, which creates an XSS vulnerability when user input contains `<script>` tags or malicious attributes.
**Prevention:** Always use `isomorphic-dompurify` or a similar DOM sanitizer when setting raw HTML into `dangerouslySetInnerHTML`, especially for Rich Text Editor components. Wrap the sanitization in `useMemo` to prevent unnecessary repeated sanitization on re-renders.

## 2026-05-13 - [Reverse Tabnabbing Vulnerability]
**Vulnerability:** Missing `noopener` in external links using `target="_blank"` in `Button.tsx` and `IconButton.tsx`.
**Learning:** Opening links in new tabs without `noopener` allows the newly opened page to access `window.opener` and redirect the original page to a malicious site (Reverse Tabnabbing).
**Prevention:** Always use `rel="noopener noreferrer"` when creating links that open in a new tab (`target="_blank"`).
