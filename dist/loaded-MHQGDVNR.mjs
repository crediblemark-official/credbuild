import {
  useListOptions
} from "./chunk-NDBRKZD6.mjs";
import {
  List,
  SelectControl,
  useControlContext
} from "./chunk-G2MMRA4C.mjs";
import "./chunk-MQAN4F4B.mjs";
import "./chunk-QGRPODT7.mjs";
import "./chunk-CYQ2TPPM.mjs";
import "./chunk-Y5AAKZ45.mjs";
import {
  init_react_import
} from "./chunk-2TADFG6T.mjs";

// components/RichTextMenu/controls/ListSelect/loaded.tsx
init_react_import();
import { useEditorState } from "@tiptap/react";
import { jsx } from "react/jsx-runtime";
function ListSelectLoaded() {
  const { options } = useControlContext();
  const listOptions = useListOptions(options);
  const { editor } = useControlContext();
  const currentValue = useEditorState({
    editor,
    selector: (ctx) => {
      var _a, _b;
      if ((_a = ctx.editor) == null ? void 0 : _a.isActive("bulletList")) return "ul";
      if ((_b = ctx.editor) == null ? void 0 : _b.isActive("orderedList")) return "ol";
      return "p";
    }
  });
  const handleChange = (val) => {
    const chain = editor == null ? void 0 : editor.chain();
    if (val === "p") {
      chain == null ? void 0 : chain.focus().setParagraph().run();
    } else if (val === "ol") {
      chain == null ? void 0 : chain.focus().toggleOrderedList().run();
    } else if (val === "ul") {
      chain == null ? void 0 : chain.focus().toggleBulletList().run();
    }
  };
  return /* @__PURE__ */ jsx(
    SelectControl,
    {
      options: listOptions,
      onChange: handleChange,
      value: currentValue != null ? currentValue : "p",
      defaultValue: "p",
      renderDefaultIcon: List
    }
  );
}
export {
  ListSelectLoaded
};
