import { useMemo } from "react";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "lucide-react";
import { RichtextField } from "../../../../types";

const optionNodes: Record<string, { label: string; icon?: React.FC }> = {
  h1: { label: "Heading 1", icon: Heading1 },
  h2: { label: "Heading 2", icon: Heading2 },
  h3: { label: "Heading 3", icon: Heading3 },
  h4: { label: "Heading 4", icon: Heading4 },
  h5: { label: "Heading 5", icon: Heading5 },
  h6: { label: "Heading 6", icon: Heading6 },
};

export type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const useHeadingOptions = (fieldOptions: RichtextField["options"]) => {
  const blockOptions: HeadingElement[] = useMemo(() => {
    const options: HeadingElement[] = [];

    if (fieldOptions?.heading !== false) {
      if (!fieldOptions?.heading?.levels) {
        return ["h1", "h2", "h3", "h4", "h5", "h6"];
      } else {
        if (fieldOptions?.heading.levels.includes(1)) {
          options.push("h1");
        }

        if (fieldOptions?.heading.levels.includes(2)) {
          options.push("h2");
        }

        if (fieldOptions?.heading.levels.includes(3)) {
          options.push("h3");
        }

        if (fieldOptions?.heading.levels.includes(4)) {
          options.push("h4");
        }

        if (fieldOptions?.heading.levels.includes(5)) {
          options.push("h5");
        }

        if (fieldOptions?.heading.levels.includes(6)) {
          options.push("h6");
        }
      }
    }
    return options;
  }, [fieldOptions?.heading]);

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
