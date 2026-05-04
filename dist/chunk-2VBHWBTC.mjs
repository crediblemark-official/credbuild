import {
  TextAlignCenter,
  TextAlignEnd,
  TextAlignJustify,
  TextAlignStart
} from "./chunk-N4OWBRRK.mjs";
import {
  init_react_import
} from "./chunk-2TADFG6T.mjs";

// components/RichTextMenu/controls/AlignSelect/use-options.ts
init_react_import();
import { useMemo } from "react";
var optionNodes = {
  left: { label: "Left", icon: TextAlignStart },
  center: { label: "Center", icon: TextAlignCenter },
  right: { label: "Right", icon: TextAlignEnd },
  justify: { label: "Justify", icon: TextAlignJustify }
};
var useAlignOptions = (fieldOptions) => {
  const blockOptions = useMemo(() => {
    var _a;
    const options = [];
    if ((fieldOptions == null ? void 0 : fieldOptions.textAlign) !== false) {
      if (!((_a = fieldOptions == null ? void 0 : fieldOptions.textAlign) == null ? void 0 : _a.alignments)) {
        return ["left", "center", "right", "justify"];
      } else {
        if (fieldOptions == null ? void 0 : fieldOptions.textAlign.alignments.includes("left")) {
          options.push("left");
        }
        if (fieldOptions == null ? void 0 : fieldOptions.textAlign.alignments.includes("center")) {
          options.push("center");
        }
        if (fieldOptions == null ? void 0 : fieldOptions.textAlign.alignments.includes("right")) {
          options.push("right");
        }
        if (fieldOptions == null ? void 0 : fieldOptions.textAlign.alignments.includes("justify")) {
          options.push("justify");
        }
      }
    }
    return options;
  }, [fieldOptions == null ? void 0 : fieldOptions.textAlign]);
  return useMemo(
    () => blockOptions.map((item) => ({
      value: item,
      label: optionNodes[item].label,
      icon: optionNodes[item].icon
    })),
    [blockOptions]
  );
};

export {
  useAlignOptions
};
