import { useControlContext } from "@/components/RichTextMenu/lib/use-control-context";
import { JSXElementConstructor, useMemo } from "react";
import { Select } from "@/components/Select";

export type Option<T = string> = { label: string; value: T; icon?: React.FC };
export type Options<T = string> = Option<T>[];

export function SelectControl<ValueType extends string = string>({
  renderDefaultIcon,
  onChange,
  options,
  value,
  defaultValue,
  title,
}: {
  renderDefaultIcon: JSXElementConstructor<any>;
  onChange: (val: ValueType) => void;
  options: Option<ValueType>[];
  value: ValueType;
  defaultValue: ValueType;
  title?: string;
}) {
  const { inline, readOnly } = useControlContext();

  type OptionsByValue = Record<ValueType, Option>;

  const optionsByValue = useMemo(
    () =>
      options.reduce<OptionsByValue>(
        (acc, option) => ({ ...acc, [option.value]: option }),
        {} as OptionsByValue
      ),
    [options]
  );

  const Node = (value && optionsByValue[value]?.icon) ?? renderDefaultIcon;

  return (
    <Select
      options={options}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      mode={inline ? "actionBar" : "standalone"}
      disabled={readOnly}
      title={title}
    >
      <Node />
    </Select>
  );
}
