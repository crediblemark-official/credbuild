## 2025-05-11 - [dangerouslySetInnerHTML XSS vulnerability]
**Vulnerability:** Found unsanitized usages of `dangerouslySetInnerHTML` in RichTextEditor components (`Render.tsx`, `EditorFallback.tsx`, `RenderFallback.tsx`) and `DropZone/index.tsx`.
**Learning:** Raw HTML content generated from `tiptap` or raw strings were passed directly into `dangerouslySetInnerHTML` without proper server-side or isomorphic sanitization, which creates an XSS vulnerability when user input contains `<script>` tags or malicious attributes.
**Prevention:** Always use `isomorphic-dompurify` or a similar DOM sanitizer when setting raw HTML into `dangerouslySetInnerHTML`, especially for Rich Text Editor components. Wrap the sanitization in `useMemo` to prevent unnecessary repeated sanitization on re-renders.
## 2025-05-11 - [Reverse Tabnabbing Vulnerability]
**Vulnerability:** Found unsanitized links with `target="_blank"` and `rel="noreferrer"` in `IconButton.tsx` and `Button.tsx`.
**Learning:** When using `target="_blank"` to open links in a new tab, it is essential to use `rel="noopener noreferrer"` instead of just `noreferrer` to prevent reverse tabnabbing vulnerabilities where the newly opened page can maliciously redirect the original page.
**Prevention:** Always enforce `rel="noopener noreferrer"` on links using `target="_blank"` to properly mitigate the risk of reverse tabnabbing.
