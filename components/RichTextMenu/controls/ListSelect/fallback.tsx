import { SelectControl } from "@/components/RichTextMenu/components/SelectControl";
import { useControlContext } from "@/components/RichTextMenu/lib/use-control-context";
import { List } from "lucide-react";
import { ListElement, useListOptions } from "./use-options";

export function ListSelectFallback() {
  const ctx = useControlContext();
  const listOptions = useListOptions(ctx.options);

  return (
    <SelectControl<ListElement | "p">
      options={listOptions}
      onChange={() => {}}
      value="p"
      defaultValue="p"
      renderDefaultIcon={List}
    />
  );
}
