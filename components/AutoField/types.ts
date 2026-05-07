import { ReactNode } from "react";
import { Field, FieldProps } from "../../types";

export type FieldLabelPropsInternal = {
  children?: ReactNode;
  icon?: ReactNode;
  label?: string;
  el?: "label" | "div";
  readOnly?: boolean;
};

export type FieldNoLabel<Props extends any = any> = Omit<Field<Props>, "label">;

export type FieldPropsInternal<ValueType = any, F = Field<any>> = FieldProps<
  F,
  ValueType
> & {
  Label: React.FC<FieldLabelPropsInternal>;
  label?: string;
  labelIcon?: ReactNode;
  id: string;
  name?: string;
};

export type FieldPropsInternalOptional<ValueType = any, F = Field<any>> = Omit<
  FieldProps<F, ValueType>,
  "value"
> & {
  Label?: React.FC<FieldLabelPropsInternal>;
  label?: string;
  labelIcon?: ReactNode;
  name?: string;
};
