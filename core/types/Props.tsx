import { DropZoneProps } from "../components/DropZone/types";
import { Metadata } from "./Data";
import { WithChildren, WithCredBuildProps } from "./Utils";

export type CredBuildContext = {
  renderDropZone: (props: DropZoneProps) => React.ReactNode;
  metadata: Metadata;
  isEditing: boolean;
  dragRef: ((element: Element | null) => void) | null;
};

export type DefaultRootFieldProps = {
  title?: string;
};

export type DefaultRootRenderProps<
  Props extends DefaultComponentProps = DefaultRootFieldProps
> = WithCredBuildProps<WithChildren<Props>>;

export type DefaultRootProps = DefaultRootRenderProps; // Deprecated

export type DefaultComponentProps = { [key: string]: any };
