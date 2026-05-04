import {
  LoadedRichTextMenuInner
} from "./chunk-4CMJSCRJ.mjs";
import "./chunk-PODT62JK.mjs";
import "./chunk-GQ3A2HTO.mjs";
import "./chunk-HLABALSA.mjs";
import "./chunk-ZA4EXS7Q.mjs";
import "./chunk-MQAN4F4B.mjs";
import "./chunk-QGRPODT7.mjs";
import "./chunk-CYQ2TPPM.mjs";
import "./chunk-Y5AAKZ45.mjs";
import {
  __spreadValues,
  init_react_import
} from "./chunk-2TADFG6T.mjs";

// components/RichTextMenu/full.tsx
init_react_import();
import { useEditorState } from "@tiptap/react";
import { useMemo } from "react";

// components/RichTextEditor/selector.ts
init_react_import();
var defaultEditorState = (ctx, readOnly) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
  const editor = ctx.editor;
  if (!editor) return {};
  const canChain = () => editor.can().chain();
  return {
    isAlignLeft: editor.isActive({ textAlign: "left" }),
    canAlignLeft: !readOnly && ((_b = (_a = canChain()).setTextAlign) == null ? void 0 : _b.call(_a, "left").run()),
    isAlignCenter: editor.isActive({ textAlign: "center" }),
    canAlignCenter: !readOnly && ((_d = (_c = canChain()).setTextAlign) == null ? void 0 : _d.call(_c, "center").run()),
    isAlignRight: editor.isActive({ textAlign: "right" }),
    canAlignRight: !readOnly && ((_f = (_e = canChain()).setTextAlign) == null ? void 0 : _f.call(_e, "right").run()),
    isAlignJustify: editor.isActive({ textAlign: "justify" }),
    canAlignJustify: !readOnly && ((_h = (_g = canChain()).setTextAlign) == null ? void 0 : _h.call(_g, "justify").run()),
    isBold: editor.isActive("bold"),
    canBold: !readOnly && ((_j = (_i = canChain()).toggleBold) == null ? void 0 : _j.call(_i).run()),
    isItalic: editor.isActive("italic"),
    canItalic: !readOnly && ((_l = (_k = canChain()).toggleItalic) == null ? void 0 : _l.call(_k).run()),
    isUnderline: editor.isActive("underline"),
    canUnderline: !readOnly && ((_n = (_m = canChain()).toggleUnderline) == null ? void 0 : _n.call(_m).run()),
    isStrike: editor.isActive("strike"),
    canStrike: !readOnly && ((_p = (_o = canChain()).toggleStrike) == null ? void 0 : _p.call(_o).run()),
    isInlineCode: editor.isActive("code"),
    canInlineCode: !readOnly && ((_r = (_q = canChain()).toggleCode) == null ? void 0 : _r.call(_q).run()),
    isBulletList: editor.isActive("bulletList"),
    canBulletList: !readOnly && ((_t = (_s = canChain()).toggleBulletList) == null ? void 0 : _t.call(_s).run()),
    isOrderedList: editor.isActive("orderedList"),
    canOrderedList: !readOnly && ((_v = (_u = canChain()).toggleOrderedList) == null ? void 0 : _v.call(_u).run()),
    isCodeBlock: editor.isActive("codeBlock"),
    canCodeBlock: !readOnly && ((_x = (_w = canChain()).toggleCodeBlock) == null ? void 0 : _x.call(_w).run()),
    isBlockquote: editor.isActive("blockquote"),
    canBlockquote: !readOnly && ((_z = (_y = canChain()).toggleBlockquote) == null ? void 0 : _z.call(_y).run()),
    canHorizontalRule: !readOnly && ((_B = (_A = canChain()).setHorizontalRule) == null ? void 0 : _B.call(_A).run())
  };
};

// components/RichTextMenu/full.tsx
import { jsx } from "react/jsx-runtime";
var LoadedRichTextMenuFull = ({
  editor,
  field,
  readOnly,
  inline
}) => {
  const { tiptap = {} } = field;
  const { selector } = tiptap;
  const resolvedSelector = useMemo(() => {
    return (ctx) => __spreadValues(__spreadValues({}, defaultEditorState(ctx, readOnly)), selector ? selector(ctx, readOnly) : {});
  }, [selector, readOnly]);
  const editorState = useEditorState({
    editor,
    selector: resolvedSelector
  });
  if (!editor || !editorState) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    LoadedRichTextMenuInner,
    {
      editor,
      editorState,
      field,
      readOnly,
      inline
    }
  );
};
export {
  LoadedRichTextMenuFull
};
