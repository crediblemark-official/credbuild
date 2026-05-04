import {
  List,
  ListOrdered
} from "./chunk-D4FREKRG.mjs";
import {
  init_react_import
} from "./chunk-2TADFG6T.mjs";

// components/RichTextMenu/controls/ListSelect/use-options.ts
init_react_import();
import { useMemo } from "react";
var optionNodes = {
  ul: { label: "Bullet list", icon: List },
  ol: { label: "Numbered list", icon: ListOrdered }
};
var useListOptions = (fieldOptions) => {
  const blockOptions = useMemo(() => {
    if ((fieldOptions == null ? void 0 : fieldOptions.listItem) !== false) {
      return ["ul", "ol"];
    }
    return [];
  }, [fieldOptions == null ? void 0 : fieldOptions.listItem]);
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
  useListOptions
};
