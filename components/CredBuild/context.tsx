import {
  Context,
  createContext,
  CSSProperties,
  ReactElement,
  ReactNode,
  useContext,
} from "react";
import {
  Config,
  Data,
  FieldTransforms,
  IframeConfig,
  InitialHistory,
  Metadata,
  OnAction,
  Overrides,
  Permissions,
  Plugin,
  UiState,
  UserGenerics,
  Viewports,
} from "../../types";
import { CredBuildAction } from "../../reducer";

export type CredBuildProps<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
> = {
  children?: ReactNode;
  config: UserConfig;
  data: Partial<G["UserData"] | Data>;
  ui?: Partial<UiState>;
  onChange?: (data: G["UserData"]) => void;
  onPublish?: (data: G["UserData"]) => void;
  onAction?: OnAction<G["UserData"]>;
  permissions?: Partial<Permissions>;
  plugins?: Plugin<UserConfig>[];
  overrides?: Partial<Overrides<UserConfig>>;
  fieldTransforms?: FieldTransforms<UserConfig>;
  renderHeader?: (props: {
    children: ReactNode;
    dispatch: (action: CredBuildAction) => void;
    state: G["UserAppState"];
  }) => ReactElement;
  renderHeaderActions?: (props: {
    state: G["UserAppState"];
    dispatch: (action: CredBuildAction) => void;
  }) => ReactElement;
  headerTitle?: string;
  headerPath?: string;
  viewports?: Viewports;
  iframe?: IframeConfig;
  dnd?: {
    disableAutoScroll?: boolean;
  };
  initialHistory?: InitialHistory;
  metadata?: Metadata;
  height?: CSSProperties["height"];
  _experimentalFullScreenCanvas?: boolean;
  _experimentalVirtualization?: boolean;
};

export const propsContext = createContext<Partial<CredBuildProps>>({});

export function PropsProvider<UserConfig extends Config = Config>(
  props: CredBuildProps<UserConfig>
) {
  return (
    <propsContext.Provider value={props as CredBuildProps}>
      {props.children}
    </propsContext.Provider>
  );
}

export const usePropsContext = () =>
  useContext<CredBuildProps>(propsContext as Context<CredBuildProps>);
