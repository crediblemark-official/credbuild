import {
  useAlignOptions
} from "./chunk-5HVA2ODB.mjs";
import {
  useHeadingOptions
} from "./chunk-TH35N27N.mjs";
import {
  useListOptions
} from "./chunk-X7EHBO34.mjs";
import {
  Bold,
  Code,
  ControlContext,
  Heading,
  Italic,
  List,
  ListOrdered,
  Minus,
  Quote,
  SelectControl,
  SquareCode,
  Strikethrough,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignJustify,
  TextAlignStart,
  Underline,
  useControlContext
} from "./chunk-D4FREKRG.mjs";
import {
  get_class_name_factory_default
} from "./chunk-CYQ2TPPM.mjs";
import {
  __objRest,
  __spreadValues,
  init_react_import
} from "./chunk-2TADFG6T.mjs";

// components/ActionBar/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/ActionBar/styles.module.css#css-module
init_react_import();
var styles_module_default = { "ActionBar": "_ActionBar_ze0ci_1", "ActionBar-label": "_ActionBar-label_ze0ci_18", "ActionBarAction": "_ActionBarAction_ze0ci_30", "ActionBar-group": "_ActionBar-group_ze0ci_38", "ActionBarAction--disabled": "_ActionBarAction--disabled_ze0ci_71", "ActionBarAction--active": "_ActionBarAction--active_ze0ci_93", "ActionBar-separator": "_ActionBar-separator_ze0ci_102" };

// components/ActionBar/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var getClassName = get_class_name_factory_default("ActionBar", styles_module_default);
var getActionClassName = get_class_name_factory_default("ActionBarAction", styles_module_default);
var ActionBar = ({
  label,
  children
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: getClassName(),
    onClick: (e) => {
      e.stopPropagation();
    },
    children: [
      label && /* @__PURE__ */ jsx(ActionBar.Group, { children: /* @__PURE__ */ jsx("div", { className: getClassName("label"), children: label }) }),
      children
    ]
  }
);
var Action = ({
  children,
  label,
  onClick,
  active = false,
  disabled
}) => /* @__PURE__ */ jsx(
  "button",
  {
    type: "button",
    className: getActionClassName({ active, disabled }),
    onClick,
    title: label,
    tabIndex: 0,
    disabled,
    children
  }
);
var Group = ({ children }) => /* @__PURE__ */ jsx("div", { className: getClassName("group"), children });
var Label = ({ label }) => /* @__PURE__ */ jsx("div", { className: getClassName("label"), children: label });
var Separator = () => /* @__PURE__ */ jsx("div", { className: getClassName("separator") });
ActionBar.Action = Action;
ActionBar.Label = Label;
ActionBar.Group = Group;
ActionBar.Separator = Separator;

// components/IconButton/IconButton.tsx
init_react_import();
import { useState } from "react";

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/IconButton/IconButton.module.css#css-module
init_react_import();
var IconButton_module_default = { "IconButton": "_IconButton_1a0fz_1", "IconButton--active": "_IconButton--active_1a0fz_14", "IconButton--disabled": "_IconButton--disabled_1a0fz_24", "IconButton-title": "_IconButton-title_1a0fz_37" };

// components/Loader/index.tsx
init_react_import();

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/Loader/styles.module.css#css-module
init_react_import();
var styles_module_default2 = { "Loader": "_Loader_nacdm_13", "loader-animation": "_loader-animation_nacdm_1" };

// components/Loader/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var getClassName2 = get_class_name_factory_default("Loader", styles_module_default2);
var Loader = (_a) => {
  var _b = _a, {
    color,
    size = 16
  } = _b, props = __objRest(_b, [
    "color",
    "size"
  ]);
  return /* @__PURE__ */ jsx2(
    "span",
    __spreadValues({
      className: getClassName2(),
      style: {
        width: size,
        height: size,
        color
      },
      "aria-label": "loading"
    }, props)
  );
};

// components/IconButton/IconButton.tsx
import { Fragment, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var getClassName3 = get_class_name_factory_default("IconButton", IconButton_module_default);
var IconButton = ({
  active = false,
  children,
  href,
  onClick,
  type,
  disabled,
  tabIndex,
  newTab,
  fullWidth,
  title,
  suppressHydrationWarning
}) => {
  const [loading, setLoading] = useState(false);
  const ElementType = href ? "a" : "button";
  const el = /* @__PURE__ */ jsxs2(
    ElementType,
    {
      className: getClassName3({
        active,
        disabled,
        fullWidth
      }),
      onClick: (e) => {
        if (!onClick) return;
        setLoading(true);
        Promise.resolve(onClick(e)).then(() => {
          setLoading(false);
        });
      },
      type,
      disabled: disabled || loading,
      tabIndex,
      target: newTab ? "_blank" : void 0,
      rel: newTab ? "noreferrer" : void 0,
      href,
      title,
      suppressHydrationWarning,
      children: [
        /* @__PURE__ */ jsx3("span", { className: getClassName3("title"), children: title }),
        children,
        loading && /* @__PURE__ */ jsxs2(Fragment, { children: [
          "\xA0\xA0",
          /* @__PURE__ */ jsx3(Loader, { size: 14 })
        ] })
      ]
    }
  );
  return el;
};

// components/RichTextMenu/inner.tsx
init_react_import();

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/RichTextMenu/styles.module.css#css-module
init_react_import();
var styles_module_default3 = { "RichTextMenu": "_RichTextMenu_193iw_1", "RichTextMenu--form": "_RichTextMenu--form_193iw_7", "RichTextMenu-group": "_RichTextMenu-group_193iw_17", "RichTextMenu--inline": "_RichTextMenu--inline_193iw_35" };

// components/RichTextMenu/inner.tsx
import { useMemo } from "react";

// components/RichTextMenu/controls/index.ts
init_react_import();

// components/RichTextMenu/controls/AlignLeft.tsx
init_react_import();

// components/RichTextMenu/components/Control/index.tsx
init_react_import();

// components/IconButton/index.ts
init_react_import();

// css-module:/home/crediblemark/Project/NEXT_CMS/packages/core/components/RichTextMenu/components/Control/styles.module.css#css-module
init_react_import();
var styles_module_default4 = { "Control": "_Control_1aveu_1", "Control--inline": "_Control--inline_1aveu_6" };

// components/RichTextMenu/components/Control/index.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var getClassName4 = get_class_name_factory_default("Control", styles_module_default4);
function Control({
  icon,
  disabled,
  active,
  onClick,
  title
}) {
  const { inline } = useControlContext();
  if (inline) {
    return /* @__PURE__ */ jsx4("span", { className: getClassName4({ inline: true }), children: /* @__PURE__ */ jsx4(
      Action,
      {
        onClick,
        disabled,
        active,
        label: title,
        children: icon
      }
    ) });
  }
  return /* @__PURE__ */ jsx4("span", { className: getClassName4(), children: /* @__PURE__ */ jsx4(
    IconButton,
    {
      onClick,
      disabled,
      active,
      title,
      children: icon
    }
  ) });
}

// components/RichTextMenu/controls/AlignLeft.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
function AlignLeft() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ jsx5(
    Control,
    {
      icon: /* @__PURE__ */ jsx5(TextAlignStart, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().setTextAlign("left").run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canAlignLeft),
      active: editorState == null ? void 0 : editorState.isAlignLeft,
      title: "Align left"
    }
  );
}

// components/RichTextMenu/controls/AlignCenter.tsx
init_react_import();
import { jsx as jsx6 } from "react/jsx-runtime";
function AlignCenter() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ jsx6(
    Control,
    {
      icon: /* @__PURE__ */ jsx6(TextAlignCenter, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().setTextAlign("center").run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canAlignCenter),
      active: editorState == null ? void 0 : editorState.isAlignCenter,
      title: "Align center"
    }
  );
}

// components/RichTextMenu/controls/AlignRight.tsx
init_react_import();
import { jsx as jsx7 } from "react/jsx-runtime";
function AlignRight() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ jsx7(
    Control,
    {
      icon: /* @__PURE__ */ jsx7(TextAlignEnd, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().setTextAlign("right").run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canAlignRight),
      active: editorState == null ? void 0 : editorState.isAlignRight,
      title: "Align right"
    }
  );
}

// components/RichTextMenu/controls/AlignJustify.tsx
init_react_import();
import { jsx as jsx8 } from "react/jsx-runtime";
function AlignJustify() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ jsx8(
    Control,
    {
      icon: /* @__PURE__ */ jsx8(TextAlignJustify, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().setTextAlign("justify").run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canAlignJustify),
      active: editorState == null ? void 0 : editorState.isAlignJustify,
      title: "Justify"
    }
  );
}

// components/RichTextMenu/controls/AlignSelect/index.tsx
init_react_import();
import { lazy, Suspense } from "react";

// components/RichTextMenu/controls/AlignSelect/fallback.tsx
init_react_import();
import { jsx as jsx9 } from "react/jsx-runtime";
function AlignSelectFallback() {
  const ctx = useControlContext();
  const alignOptions = useAlignOptions(ctx.options);
  return /* @__PURE__ */ jsx9(
    SelectControl,
    {
      options: alignOptions,
      onChange: () => {
      },
      value: "left",
      defaultValue: "left",
      renderDefaultIcon: TextAlignStart
    }
  );
}

// components/RichTextMenu/controls/AlignSelect/index.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var AlignSelectLoaded = lazy(
  () => import("./loaded-R3T7HQK4.mjs").then((m) => ({
    default: m.AlignSelectLoaded
  }))
);
var AlignSelect = () => /* @__PURE__ */ jsx10(Suspense, { fallback: /* @__PURE__ */ jsx10(AlignSelectFallback, {}), children: /* @__PURE__ */ jsx10(AlignSelectLoaded, {}) });

// components/RichTextMenu/controls/Bold.tsx
init_react_import();
import { jsx as jsx11 } from "react/jsx-runtime";
function Bold2() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ jsx11(
    Control,
    {
      icon: /* @__PURE__ */ jsx11(Bold, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().toggleBold().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canBold),
      active: editorState == null ? void 0 : editorState.isBold,
      title: "Bold"
    }
  );
}

// components/RichTextMenu/controls/Italic.tsx
init_react_import();
import { jsx as jsx12 } from "react/jsx-runtime";
function Italic2() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ jsx12(
    Control,
    {
      icon: /* @__PURE__ */ jsx12(Italic, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().toggleItalic().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canItalic),
      active: editorState == null ? void 0 : editorState.isItalic,
      title: "Italic"
    }
  );
}

// components/RichTextMenu/controls/Underline.tsx
init_react_import();
import { jsx as jsx13 } from "react/jsx-runtime";
function Underline2() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ jsx13(
    Control,
    {
      icon: /* @__PURE__ */ jsx13(Underline, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().toggleUnderline().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canUnderline),
      active: editorState == null ? void 0 : editorState.isUnderline,
      title: "Underline"
    }
  );
}

// components/RichTextMenu/controls/Strikethrough.tsx
init_react_import();
import { jsx as jsx14 } from "react/jsx-runtime";
function Strikethrough2() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ jsx14(
    Control,
    {
      icon: /* @__PURE__ */ jsx14(Strikethrough, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().toggleStrike().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canStrike),
      active: editorState == null ? void 0 : editorState.isStrike,
      title: "Strikethrough"
    }
  );
}

// components/RichTextMenu/controls/InlineCode.tsx
init_react_import();
import { jsx as jsx15 } from "react/jsx-runtime";
function InlineCode() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ jsx15(
    Control,
    {
      icon: /* @__PURE__ */ jsx15(Code, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().toggleCode().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canInlineCode),
      active: editorState == null ? void 0 : editorState.isInlineCode,
      title: "Inline code"
    }
  );
}

// components/RichTextMenu/controls/BulletList.tsx
init_react_import();
import { jsx as jsx16 } from "react/jsx-runtime";
function BulletList() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ jsx16(
    Control,
    {
      icon: /* @__PURE__ */ jsx16(List, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().toggleBulletList().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canBulletList),
      active: editorState == null ? void 0 : editorState.isBulletList,
      title: "Bullet list"
    }
  );
}

// components/RichTextMenu/controls/OrderedList.tsx
init_react_import();
import { jsx as jsx17 } from "react/jsx-runtime";
function OrderedList() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ jsx17(
    Control,
    {
      icon: /* @__PURE__ */ jsx17(ListOrdered, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().toggleOrderedList().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canOrderedList),
      active: editorState == null ? void 0 : editorState.isOrderedList,
      title: "Ordered list"
    }
  );
}

// components/RichTextMenu/controls/CodeBlock.tsx
init_react_import();
import { jsx as jsx18 } from "react/jsx-runtime";
function CodeBlock() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ jsx18(
    Control,
    {
      icon: /* @__PURE__ */ jsx18(SquareCode, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().toggleCodeBlock().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canCodeBlock),
      active: editorState == null ? void 0 : editorState.isCodeBlock,
      title: "Code block"
    }
  );
}

// components/RichTextMenu/controls/Blockquote.tsx
init_react_import();
import { jsx as jsx19 } from "react/jsx-runtime";
function Blockquote() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ jsx19(
    Control,
    {
      icon: /* @__PURE__ */ jsx19(Quote, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().toggleBlockquote().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canBlockquote),
      active: editorState == null ? void 0 : editorState.isBlockquote,
      title: "Blockquote"
    }
  );
}

// components/RichTextMenu/controls/HorizontalRule.tsx
init_react_import();
import { jsx as jsx20 } from "react/jsx-runtime";
function HorizontalRule() {
  const { editor, editorState } = useControlContext();
  return /* @__PURE__ */ jsx20(
    Control,
    {
      icon: /* @__PURE__ */ jsx20(Minus, {}),
      onClick: (e) => {
        e.stopPropagation();
        editor == null ? void 0 : editor.chain().focus().setHorizontalRule().run();
      },
      disabled: !(editorState == null ? void 0 : editorState.canHorizontalRule),
      title: "Horizontal rule"
    }
  );
}

// components/RichTextMenu/controls/HeadingSelect/index.tsx
init_react_import();
import { lazy as lazy2, Suspense as Suspense2 } from "react";

// components/RichTextMenu/controls/HeadingSelect/fallback.tsx
init_react_import();
import { jsx as jsx21 } from "react/jsx-runtime";
function HeadingSelectFallback() {
  const ctx = useControlContext();
  const headingOptions = useHeadingOptions(ctx.options);
  return /* @__PURE__ */ jsx21(
    SelectControl,
    {
      options: headingOptions,
      onChange: () => {
      },
      value: "p",
      defaultValue: "p",
      renderDefaultIcon: Heading
    }
  );
}

// components/RichTextMenu/controls/HeadingSelect/index.tsx
import { jsx as jsx22 } from "react/jsx-runtime";
var HeadingSelectLoaded = lazy2(
  () => import("./loaded-WTUKCSNF.mjs").then((m) => ({
    default: m.HeadingSelectLoaded
  }))
);
var HeadingSelect = () => /* @__PURE__ */ jsx22(Suspense2, { fallback: /* @__PURE__ */ jsx22(HeadingSelectFallback, {}), children: /* @__PURE__ */ jsx22(HeadingSelectLoaded, {}) });

// components/RichTextMenu/controls/ListSelect/index.tsx
init_react_import();
import { lazy as lazy3, Suspense as Suspense3 } from "react";

// components/RichTextMenu/controls/ListSelect/fallback.tsx
init_react_import();
import { jsx as jsx23 } from "react/jsx-runtime";
function ListSelectFallback() {
  const ctx = useControlContext();
  const listOptions = useListOptions(ctx.options);
  return /* @__PURE__ */ jsx23(
    SelectControl,
    {
      options: listOptions,
      onChange: () => {
      },
      value: "p",
      defaultValue: "p",
      renderDefaultIcon: List
    }
  );
}

// components/RichTextMenu/controls/ListSelect/index.tsx
import { jsx as jsx24 } from "react/jsx-runtime";
var ListSelectLoaded = lazy3(
  () => import("./loaded-OSE63DAL.mjs").then((m) => ({
    default: m.ListSelectLoaded
  }))
);
var ListSelect = () => /* @__PURE__ */ jsx24(Suspense3, { fallback: /* @__PURE__ */ jsx24(ListSelectFallback, {}), children: /* @__PURE__ */ jsx24(ListSelectLoaded, {}) });

// components/RichTextMenu/inner.tsx
import { jsx as jsx25, jsxs as jsxs3 } from "react/jsx-runtime";
var getClassName5 = get_class_name_factory_default("RichTextMenu", styles_module_default3);
var DefaultMenu = ({ children }) => {
  return /* @__PURE__ */ jsx25(RichTextMenu, { children });
};
var RichTextMenu = ({ children }) => {
  const { inline } = useControlContext();
  return /* @__PURE__ */ jsx25("div", { className: getClassName5({ inline, form: !inline }), "data-credbuild-rte-menu": true, children });
};
var Group2 = ({ children }) => {
  return /* @__PURE__ */ jsx25("div", { className: getClassName5("group"), children });
};
RichTextMenu.Group = Group2;
RichTextMenu.Control = Control;
RichTextMenu.AlignCenter = AlignCenter;
RichTextMenu.AlignJustify = AlignJustify;
RichTextMenu.AlignLeft = AlignLeft;
RichTextMenu.AlignRight = AlignRight;
RichTextMenu.AlignSelect = AlignSelect;
RichTextMenu.Blockquote = Blockquote;
RichTextMenu.Bold = Bold2;
RichTextMenu.BulletList = BulletList;
RichTextMenu.CodeBlock = CodeBlock;
RichTextMenu.HeadingSelect = HeadingSelect;
RichTextMenu.HorizontalRule = HorizontalRule;
RichTextMenu.InlineCode = InlineCode;
RichTextMenu.Italic = Italic2;
RichTextMenu.ListSelect = ListSelect;
RichTextMenu.OrderedList = OrderedList;
RichTextMenu.Strikethrough = Strikethrough2;
RichTextMenu.Underline = Underline2;
var LoadedRichTextMenuInner = ({
  editor = null,
  editorState = null,
  field,
  readOnly,
  inline
}) => {
  const { renderMenu, renderInlineMenu } = field;
  const InlineMenu = useMemo(
    () => renderInlineMenu || DefaultMenu,
    [renderInlineMenu]
  );
  const Menu = useMemo(() => renderMenu || DefaultMenu, [renderMenu]);
  return /* @__PURE__ */ jsx25(
    ControlContext.Provider,
    {
      value: { editor, editorState, inline, options: field.options, readOnly },
      children: inline ? /* @__PURE__ */ jsx25(
        InlineMenu,
        {
          editor,
          editorState,
          readOnly,
          children: /* @__PURE__ */ jsxs3(Group2, { children: [
            /* @__PURE__ */ jsx25(Bold2, {}),
            /* @__PURE__ */ jsx25(Italic2, {}),
            /* @__PURE__ */ jsx25(Underline2, {})
          ] })
        }
      ) : /* @__PURE__ */ jsxs3(Menu, { editor, editorState, readOnly, children: [
        /* @__PURE__ */ jsxs3(Group2, { children: [
          /* @__PURE__ */ jsx25(HeadingSelect, {}),
          /* @__PURE__ */ jsx25(ListSelect, {})
        ] }),
        /* @__PURE__ */ jsxs3(Group2, { children: [
          /* @__PURE__ */ jsx25(Bold2, {}),
          /* @__PURE__ */ jsx25(Italic2, {}),
          /* @__PURE__ */ jsx25(Underline2, {})
        ] }),
        /* @__PURE__ */ jsx25(Group2, { children: /* @__PURE__ */ jsx25(AlignSelect, {}) })
      ] })
    }
  );
};

export {
  ActionBar,
  Action,
  Group,
  Label,
  Separator,
  Loader,
  IconButton,
  RichTextMenu,
  LoadedRichTextMenuInner
};
