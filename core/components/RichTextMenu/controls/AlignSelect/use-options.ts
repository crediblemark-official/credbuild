import { useMemo } from "react";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "lucide-react";
import { RichtextField } from "../../../../types";

const optionNodes: Record<string, { label: string; icon?: React.FC }> = {
  left: { label: "Left", icon: AlignLeft },
  center: { label: "Center", icon: AlignCenter },
  right: { label: "Right", icon: AlignRight },
  justify: { label: "Justify", icon: AlignJustify },
};

export type AlignDirection = "left" | "center" | "right" | "justify";

export const useAlignOptions = (fieldOptions: RichtextField["options"]) => {
  const blockOptions: AlignDirection[] = useMemo(() => {
    const options: AlignDirection[] = [];
    if (fieldOptions?.textAlign !== false) {
      if (!fieldOptions?.textAlign?.alignments) {
        return ["left", "center", "right", "justify"];
      } else {
        if (fieldOptions?.textAlign.alignments.includes("left")) {
          options.push("left");
        }

        if (fieldOptions?.textAlign.alignments.includes("center")) {
          options.push("center");
        }

        if (fieldOptions?.textAlign.alignments.includes("right")) {
          options.push("right");
        }

        if (fieldOptions?.textAlign.alignments.includes("justify")) {
          options.push("justify");
        }
      }
    }
    return options;
  }, [fieldOptions?.textAlign]);

  return useMemo(
    () =>
      blockOptions.map((item) => ({
        value: item,
        label: optionNodes[item].label,
        icon: optionNodes[item].icon,
      })),
    [blockOptions]
  );
};
