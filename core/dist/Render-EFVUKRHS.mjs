import {
  CredBuildRichText
} from "./chunk-YWDTJACI.mjs";
import {
  styles_module_default
} from "./chunk-6MZLFUXA.mjs";
import {
  get_class_name_factory_default
} from "./chunk-CYQ2TPPM.mjs";
import {
  init_react_import
} from "./chunk-2TADFG6T.mjs";

// components/RichTextEditor/components/Render.tsx
init_react_import();
import { generateHTML, generateJSON } from "@tiptap/html";
import { useMemo } from "react";
import { jsx } from "react/jsx-runtime";
var getClassName = get_class_name_factory_default("RichTextEditor", styles_module_default);
function RichTextRender({
  content,
  field
}) {
  const { tiptap = {}, options } = field;
  const { extensions = [] } = tiptap;
  const loadedExtensions = useMemo(
    () => [CredBuildRichText.configure(options), ...extensions],
    [extensions, options]
  );
  const normalized = useMemo(() => {
    if (typeof content === "object" && (content == null ? void 0 : content.type) === "doc") {
      return content;
    }
    if (typeof content === "string") {
      const isHtml = /<\/?[a-z][\s\S]*>/i.test(content);
      if (isHtml) {
        return generateJSON(content, loadedExtensions);
      }
      return {
        type: "doc",
        content: [
          { type: "paragraph", content: [{ type: "text", text: content }] }
        ]
      };
    }
    return { type: "doc", content: [] };
  }, [content, loadedExtensions]);
  const html = useMemo(() => {
    return generateHTML(normalized, loadedExtensions);
  }, [normalized, loadedExtensions]);
  return /* @__PURE__ */ jsx("div", { className: getClassName(), children: /* @__PURE__ */ jsx("div", { className: "rich-text", dangerouslySetInnerHTML: { __html: html } }) });
}
export {
  RichTextRender
};
