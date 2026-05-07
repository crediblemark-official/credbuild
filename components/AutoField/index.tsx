import getClassNameFactory from "@/lib/get-class-name-factory";
import { Field, FieldProps } from "@/types";

import styles from "./styles.module.css";
import {
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { RadioField } from "./fields/RadioField";
import { SelectField } from "./fields/SelectField";
import { ExternalField } from "./fields/ExternalField";
import { ArrayField } from "./fields/ArrayField";
import { DefaultField } from "./fields/DefaultField";
import { TextareaField } from "./fields/TextareaField";
import { RichtextField } from "./fields/RichtextField";
import { ObjectField } from "./fields/ObjectField";
import { useAppStore } from "@/store";
import { useSafeId } from "@/lib/use-safe-id";
import { NestedFieldContext } from "./context";
import { useShallow } from "zustand/react/shallow";
import { getDeep } from "@/lib/data/get-deep";
import {
  FieldLabelPropsInternal,
  FieldPropsInternalOptional,
  FieldPropsInternal,
  FieldNoLabel,
} from "./types";

export type {
  FieldLabelPropsInternal,
  FieldPropsInternalOptional,
  FieldPropsInternal,
  FieldNoLabel,
};
import { FieldLabelInternal } from "./FieldLabel";
import { useFieldStore, useFieldStoreApi, fieldContextStore } from "./store";

const getClassName = getClassNameFactory("Input", styles);
const getClassNameWrapper = getClassNameFactory("InputWrapper", styles);

export { FieldLabel } from "./FieldLabel";

import { AutoFieldInternal, AutoFieldPrivate } from "./AutoFieldInternal";

export { AutoFieldInternal, AutoFieldPrivate };

function AutoFieldPublicInternal<
  ValueType = any,
  FieldType extends FieldNoLabel<ValueType> = FieldNoLabel<ValueType>
>({ value, ...props }: FieldProps<FieldType, ValueType> & { value: any }) {
  const DefaultLabel = useMemo(() => {
    const DefaultLabel = (labelProps: any) => (
      <div
        {...labelProps}
        className={getClassName({ readOnly: props.readOnly })}
      />
    );

    return DefaultLabel;
  }, [props.readOnly]);

  const fieldStore = useFieldStoreApi();

  const { id: propsId, onChange: propsOnChange } = props;

  const onChange = useCallback(
    (value: any) => {
      if (!propsId) return;

      fieldStore.setState({ [propsId]: value });

      propsOnChange(value);
    },
    [fieldStore, propsOnChange, propsId]
  );

  useEffect(() => {
    if (!props.id) return;

    fieldStore.setState({ [props.id]: value });
  }, [props.id, value, fieldStore]);

  return (
    <AutoFieldInternal<ValueType, FieldType>
      {...props}
      onChange={onChange}
      Label={DefaultLabel}
    />
  );
}

export function AutoField<
  ValueType = any,
  FieldType extends FieldNoLabel<ValueType> = FieldNoLabel<ValueType>
>(props: FieldProps<FieldType, ValueType> & { value: any }) {
  const id = useSafeId();

  if (props.field.type === "slot") {
    return null;
  }

  const providerValue = useMemo(() => ({ [id]: props.value }), [id, props.value]);
  return (
    <fieldContextStore.Provider value={providerValue}>
      <AutoFieldPublicInternal<ValueType, FieldType> {...props} id={id} />
    </fieldContextStore.Provider>
  );
}
