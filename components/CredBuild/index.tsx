/* eslint-disable react-hooks/rules-of-hooks */
import {
  Context,
  createContext,
  CSSProperties,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import type {
  UiState,
  IframeConfig,
  OnAction,
  Overrides,
  Permissions,
  Plugin,
  InitialHistory,
  UserGenerics,
  Config,
  Data,
  Metadata,
  AsFieldProps,
  DefaultComponentProps,
} from "../../types";

import { CredBuildAction } from "../../reducer";
import { createAppStore, defaultAppState, appStoreContext } from "../../store";
import { Fields } from "./components/Fields";
import { Components } from "./components/Components";
import { Preview } from "./components/Preview";
import { Outline } from "./components/Outline";
import { defaultViewports } from "../ViewportControls/default-viewports";
import { Viewports } from "../../types";
import { useLoadedOverrides } from "../../lib/use-loaded-overrides";
import { useRegisterHistorySlice } from "../../store/slices/history";
import { useRegisterPermissionsSlice } from "../../store/slices/permissions";
import {
  UseCredBuildStoreContext,
  useRegisterUseCredBuildStore,
} from "../../lib/use-credbuild";
import { walkAppState } from "../../lib/data/walk-app-state";
import { PrivateAppState } from "../../types/Internal";
import { deepEqual } from "fast-equals";
import { FieldTransforms } from "../../types/API/FieldTransforms";
import { populateIds } from "../../lib/data/populate-ids";
import { toComponent } from "../../lib/data/to-component";
import { Layout } from "./components/Layout";
import { useSafeId } from "../../lib/use-safe-id";

type CredBuildProps<
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

const propsContext = createContext<Partial<CredBuildProps>>({});

function PropsProvider<UserConfig extends Config = Config>(
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

function CredBuildProvider<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
>({ children }: PropsWithChildren) {
  const {
    config,
    data: initialData,
    ui: initialUi,
    onChange,
    permissions = {},
    plugins,
    overrides,
    viewports = defaultViewports,
    iframe: _iframe,
    initialHistory: _initialHistory,
    metadata,
    onAction,
    fieldTransforms,
    _experimentalFullScreenCanvas,
    _experimentalVirtualization,
  } = usePropsContext();

  const iframe: IframeConfig = useMemo(
    () => ({
      enabled: true,
      waitForStyles: true,
      ..._iframe,
    }),
    [_iframe]
  );

  const [generatedAppState] = useState<G["UserAppState"]>(() => {
    const initial = { ...defaultAppState.ui, ...initialUi };

    let clientUiState: Partial<G["UserAppState"]["ui"]> = {};

    // DEPRECATED
    if (
      Object.keys(initialData?.root || {}).length > 0 &&
      !initialData?.root?.props
    ) {
      console.warn(
        "Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically."
      );
    }

    // Deprecated
    const rootProps = initialData?.root?.props || initialData?.root || {};

    const defaultedRootProps = {
      ...config.root?.defaultProps,
      ...(rootProps as AsFieldProps<DefaultComponentProps> | AsFieldProps<any>),
    };

    const root = populateIds(
      toComponent({ ...initialData?.root, props: defaultedRootProps }),
      config
    );

    const newAppState = {
      ...defaultAppState,
      data: {
        ...initialData,
        root: { ...initialData?.root, props: root.props },
        content: initialData.content || [],
      },
      ui: {
        ...initial,
        ...clientUiState,
        // Store categories under componentList on state to allow render functions and plugins to modify
        componentList: config.categories
          ? Object.entries(config.categories).reduce(
              (acc, [categoryName, category]) => {
                return {
                  ...acc,
                  [categoryName]: {
                    title: category.title,
                    components: category.components,
                    expanded: category.defaultExpanded,
                    visible: category.visible,
                  },
                };
              },
              {}
            )
          : {},
      },
    } as G["UserAppState"];

    return walkAppState(newAppState, config);
  });

  const { appendData = true } = _initialHistory || {};

  const [blendedHistories] = useState(
    [
      ...(_initialHistory?.histories || []),
      ...(appendData ? [{ state: generatedAppState }] : []),
    ].map((history) => {
      // Inject default data to enable partial history injections
      let newState = { ...generatedAppState, ...history.state };

      // The history generally doesn't include the indexes, so calculate them for each state item
      if (!(history.state as PrivateAppState).indexes) {
        newState = walkAppState(newState, config);
      }

      return {
        ...history,
        state: newState,
      };
    })
  );

  const initialHistoryIndex = useMemo(() => {
    if (
      _initialHistory?.index !== undefined &&
      _initialHistory?.index >= 0 &&
      _initialHistory?.index < blendedHistories.length
    ) {
      return _initialHistory?.index;
    }

    return blendedHistories.length - 1;
  }, [_initialHistory?.index, blendedHistories.length]);
  const initialAppState = blendedHistories[initialHistoryIndex].state;

  // Load all plugins into the overrides
  const loadedOverrides = useLoadedOverrides({
    overrides: overrides,
    plugins: plugins,
  });

  const loadedFieldTransforms = useMemo(() => {
    const _plugins: Plugin[] = plugins || [];
    const pluginFieldTransforms = _plugins.reduce<FieldTransforms>(
      (acc, plugin) => ({ ...acc, ...plugin.fieldTransforms }),
      {}
    );

    return {
      ...pluginFieldTransforms,
      ...fieldTransforms,
    };
  }, [fieldTransforms, plugins]);

  const instanceId = useSafeId();

  const generateAppStore = useCallback(
    (state?: PrivateAppState) => {
      return {
        instanceId,
        state,
        config,
        plugins: plugins || [],
        overrides: loadedOverrides,
        viewports,
        iframe,
        _experimentalFullScreenCanvas: !!_experimentalFullScreenCanvas,
        _experimentalVirtualization: !!_experimentalVirtualization,
        onAction,
        metadata,
        fieldTransforms: loadedFieldTransforms,
      };
    },
    [
      instanceId,
      config,
      plugins,
      loadedOverrides,
      viewports,
      iframe,
      _experimentalFullScreenCanvas,
      _experimentalVirtualization,
      onAction,
      metadata,
      loadedFieldTransforms,
    ]
  );

  const [appStore] = useState(() =>
    createAppStore(generateAppStore(initialAppState))
  );

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      (window as any).__CREDBUILD_INTERNAL_DO_NOT_USE = { appStore };
    }
  }, [appStore]);

  useEffect(() => {
    const state = appStore.getState().state;

    appStore.setState({
      ...generateAppStore(state),
    });
  }, [generateAppStore, appStore]);

  useRegisterHistorySlice(appStore, {
    histories: blendedHistories,
    index: initialHistoryIndex,
    initialAppState,
  });

  const previousData = useRef<Data>(null);

  useEffect(() => {
    return appStore.subscribe(
      (s) => s.state.data,
      (data) => {
        if (onChange) {
          if (deepEqual(data, previousData.current)) return;

          onChange(data as G["UserData"]);

          previousData.current = data;
        }
      }
    );
  }, [onChange, appStore]);

  useRegisterPermissionsSlice(appStore, permissions);

  const uCredBuildStore = useRegisterUseCredBuildStore(appStore);

  useEffect(() => {
    const { resolveAndCommitData } = appStore.getState();

    // Don't block render
    setTimeout(() => {
      resolveAndCommitData();
    }, 0);
  }, [appStore]);

  return (
    <appStoreContext.Provider value={appStore}>
      <UseCredBuildStoreContext.Provider value={uCredBuildStore}>
        {children}
      </UseCredBuildStoreContext.Provider>
    </appStoreContext.Provider>
  );
}

export function CredBuild<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
>(props: CredBuildProps<UserConfig>) {
  return (
    <PropsProvider {...props}>
      <CredBuildProvider {...props}>
        <Layout>{props.children}</Layout>
      </CredBuildProvider>
    </PropsProvider>
  );
}

CredBuild.Components = Components;
CredBuild.Fields = Fields;
CredBuild.Layout = Layout;
CredBuild.Outline = Outline;
CredBuild.Preview = Preview;
