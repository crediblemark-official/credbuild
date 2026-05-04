import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6
} from "./chunk-NXU76INU.mjs";
import {
  init_react_import
} from "./chunk-2TADFG6T.mjs";

// components/RichTextMenu/controls/HeadingSelect/use-options.ts
init_react_import();
import { useMemo } from "react";
var optionNodes = {
  h1: { label: "Heading 1", icon: Heading1 },
  h2: { label: "Heading 2", icon: Heading2 },
  h3: { label: "Heading 3", icon: Heading3 },
  h4: { label: "Heading 4", icon: Heading4 },
  h5: { label: "Heading 5", icon: Heading5 },
  h6: { label: "Heading 6", icon: Heading6 }
};
var useHeadingOptions = (fieldOptions) => {
  const blockOptions = useMemo(() => {
    var _a;
    const options = [];
    if ((fieldOptions == null ? void 0 : fieldOptions.heading) !== false) {
      if (!((_a = fieldOptions == null ? void 0 : fieldOptions.heading) == null ? void 0 : _a.levels)) {
        return ["h1", "h2", "h3", "h4", "h5", "h6"];
      } else {
        if (fieldOptions == null ? void 0 : fieldOptions.heading.levels.includes(1)) {
          options.push("h1");
        }
        if (fieldOptions == null ? void 0 : fieldOptions.heading.levels.includes(2)) {
          options.push("h2");
        }
        if (fieldOptions == null ? void 0 : fieldOptions.heading.levels.includes(3)) {
          options.push("h3");
        }
        if (fieldOptions == null ? void 0 : fieldOptions.heading.levels.includes(4)) {
          options.push("h4");
        }
        if (fieldOptions == null ? void 0 : fieldOptions.heading.levels.includes(5)) {
          options.push("h5");
        }
        if (fieldOptions == null ? void 0 : fieldOptions.heading.levels.includes(6)) {
          options.push("h6");
        }
      }
    }
    return options;
  }, [fieldOptions == null ? void 0 : fieldOptions.heading]);
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
  useHeadingOptions
};
