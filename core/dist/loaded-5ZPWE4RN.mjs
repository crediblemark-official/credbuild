import {
  useHeadingOptions
} from "./chunk-L62S4RFF.mjs";
import {
  Heading,
  SelectControl,
  useControlContext
} from "./chunk-QJTROSHI.mjs";
import "./chunk-MQAN4F4B.mjs";
import "./chunk-QGRPODT7.mjs";
import "./chunk-CYQ2TPPM.mjs";
import "./chunk-Y5AAKZ45.mjs";
import {
  init_react_import
} from "./chunk-2TADFG6T.mjs";

// components/RichTextMenu/controls/HeadingSelect/loaded.tsx
init_react_import();
import { useEditorState } from "@tiptap/react";
import { jsx } from "react/jsx-runtime";
function HeadingSelectLoaded() {
  const { options } = useControlContext();
  const headingOptions = useHeadingOptions(options);
  const { editor } = useControlContext();
  const currentValue = useEditorState({
    editor,
    selector: (ctx) => {
      var _a, _b;
      if ((_a = ctx.editor) == null ? void 0 : _a.isActive("paragraph")) return "p";
      for (let level = 1; level <= 6; level++) {
        if ((_b = ctx.editor) == null ? void 0 : _b.isActive("heading", { level })) {
          return `h${level}`;
        }
      }
      return "p";
    }
  });
  const handleChange = (val) => {
    const chain = editor == null ? void 0 : editor.chain();
    if (val === "p") {
      chain == null ? void 0 : chain.focus().setParagraph().run();
    } else {
      const level = parseInt(val.replace("h", ""), 10);
      chain == null ? void 0 : chain.focus().toggleHeading({ level }).run();
    }
  };
  return /* @__PURE__ */ jsx(
    SelectControl,
    {
      options: headingOptions,
      onChange: handleChange,
      value: currentValue != null ? currentValue : "p",
      defaultValue: "p",
      renderDefaultIcon: Heading
    }
  );
}
export {
  HeadingSelectLoaded
};
