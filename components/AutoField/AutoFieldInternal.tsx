import {
  ReactElement,
  ReactNode,
  Suspense,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { useAppStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import { getDeep } from "@/lib/data/get-deep";
import {
  FieldLabelPropsInternal,
  FieldPropsInternalOptional,
  FieldNoLabel,
} from "./types";
import { FieldLabelInternal } from "./FieldLabel";
import { useFieldStore } from "./store";
import { NestedFieldContext } from "./context";
import { lazy } from "react";
import { RadioField } from "./fields/RadioField";
import { SelectField } from "./fields/SelectField";
import { ExternalField } from "./fields/ExternalField";
// import { ArrayField } from "./fields/ArrayField";
import { DefaultField } from "./fields/DefaultField";
import { TextareaField } from "./fields/TextareaField";
import { RichtextField } from "./fields/RichtextField";
// import { ObjectField } from "./fields/ObjectField";

const ArrayField = lazy(() => import("./fields/ArrayField").then(m => ({ default: m.ArrayField })));
const ObjectField = lazy(() => import("./fields/ObjectField/index").then(m => ({ default: m.ObjectField })));
import { useSafeId } from "@/lib/use-safe-id";
import getClassNameFactory from "@/lib/get-class-name-factory";
import styles from "./styles.module.css";
import { Field, FieldProps } from "@/types";

const getClassNameWrapper = getClassNameFactory("InputWrapper", styles);

const defaultFields = {
  array: ArrayField,
  external: ExternalField,
  object: ObjectField,
  select: SelectField,
  textarea: TextareaField,
  radio: RadioField,
  text: DefaultField,
  number: DefaultField,
  richtext: RichtextField,
};

export function AutoFieldInternal<
  ValueType = any,
  FieldType extends FieldNoLabel<ValueType> = FieldNoLabel<ValueType>
>(
  props: FieldPropsInternalOptional<ValueType, FieldType> & {
    Label?: React.FC<FieldLabelPropsInternal>;
  }
) {
  const dispatch = useAppStore((s) => s.dispatch);
  const overrides = useAppStore((s) => s.overrides);
  const readOnly = useAppStore(useShallow((s) => s.selectedItem?.readOnly));
  const nestedFieldContext = useContext(NestedFieldContext);

  const { id, Label = FieldLabelInternal } = props;

  const field = props.field as Field<ValueType>;
  const label = field.label;
  const labelIcon = field.labelIcon;

  const defaultId = useSafeId();
  const resolvedId = id || defaultId;

  const render = useMemo(
    () => ({
      ...overrides.fieldTypes,
      custom: overrides.fieldTypes?.custom,
      array: overrides.fieldTypes?.array || defaultFields.array,
      external: overrides.fieldTypes?.external || defaultFields.external,
      object: overrides.fieldTypes?.object || defaultFields.object,
      select: overrides.fieldTypes?.select || defaultFields.select,
      textarea: overrides.fieldTypes?.textarea || defaultFields.textarea,
      radio: overrides.fieldTypes?.radio || defaultFields.radio,
      text: overrides.fieldTypes?.text || defaultFields.text,
      number: overrides.fieldTypes?.number || defaultFields.number,
      richtext: overrides.fieldTypes?.richtext || defaultFields.richtext,
    }),
    [overrides]
  );

  const fieldValue = useFieldStore((s) => {
    // Always set a value for custom fields, or when an override is provided
    if (field.type === "custom" || overrides.fieldTypes?.[field.type]) {
      return getDeep(s, props.name ?? resolvedId);
    }
  });

  const mergedProps = useMemo(
    () => ({
      ...props,
      field,
      label,
      labelIcon,
      Label,
      id: resolvedId,
      value: fieldValue,
    }),
    [props, field, label, labelIcon, Label, resolvedId, fieldValue]
  );

  const onFocus = useCallback(
    (e: React.FocusEvent) => {
      if (
        mergedProps.name &&
        (e.target.nodeName === "INPUT" || e.target.nodeName === "TEXTAREA")
      ) {
        e.stopPropagation();

        dispatch({
          type: "setUi",
          ui: {
            field: { focus: mergedProps.name },
          },
        });
      }
    },
    [dispatch, mergedProps.name]
  );

  const onBlur = useCallback((e: React.FocusEvent) => {
    if ("name" in e.target) {
      dispatch({
        type: "setUi",
        ui: {
          field: { focus: null },
        },
      });
    }
  }, [dispatch]);

  let Children = useMemo(() => {
    if (field.type !== "custom" && field.type !== "slot") {
      return defaultFields[field.type];
    }

    return (_props: any) => null;
  }, [field.type]);

  const fieldKey = field.type === "custom" ? field.key : undefined;

  const fieldRender = (field as any).render;

  let FieldComponent: React.ComponentType<any> = useMemo(() => {
    // if there's an override provided for custom fields, fallback to standard behavior
    if (field.type === "custom" && !render[field.type]) {
      if (!fieldRender) {
        return null;
      }
      return fieldRender as any;
    } else if (field.type !== "slot") {
      return render[field.type] as (props: FieldProps) => ReactElement;
    }
  }, [field.type, render, fieldRender]);

  const { visible = true } = props.field;

  if (!visible) {
    return null;
  }

  if (field.type === "slot") {
    return null;
  }

  if (!FieldComponent) {
    throw new Error(`Field type for ${field.type} did not exist.`);
  }

  // ⚡ Bolt: Memoize the Context Provider value to preserve referential equality.
  const contextValue = useMemo(() => ({
    readOnlyFields: nestedFieldContext.readOnlyFields || readOnly || {},
    localName: nestedFieldContext.localName ?? mergedProps.name,
  }), [nestedFieldContext.readOnlyFields, nestedFieldContext.localName, readOnly, mergedProps.name]);

  return (
    <NestedFieldContext.Provider
      value={contextValue}
    >
      <div
        className={getClassNameWrapper({ [field.type]: true })}
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={(e) => {
          // Prevent propagation of any click events to parent field.
          // For example, a field within an array may bubble an event
          // and fail to stop propagation.
          e.stopPropagation();
        }}
      >
        <Suspense fallback={null}>
          <FieldComponent {...mergedProps}>
            <Children {...(mergedProps as any)} />
          </FieldComponent>
        </Suspense>
      </div>
    </NestedFieldContext.Provider>
  );
}

export function AutoFieldPrivate<
  ValueType = any,
  FieldType extends FieldNoLabel<ValueType> = FieldNoLabel<ValueType>
>(
  props: Omit<FieldPropsInternalOptional<ValueType, FieldType>, "value"> & {
    Label?: React.FC<FieldLabelPropsInternal>;
    value?: any;
  }
) {
  return <AutoFieldInternal<ValueType, FieldType> {...props} />;
}
