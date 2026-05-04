import { H as History, g as Permissions, c as ComponentData, a as Config, U as UserGenerics, F as Fields, C as CredBuildAction, h as RootDataWithProps, i as ResolveDataTrigger, j as Plugin, k as Overrides, V as Viewports, I as IframeConfig, l as UiState, m as ComponentConfig, A as AppState, M as Metadata, n as FieldTransforms, o as RichtextField } from './actions-CEH_5LMY.js';
import { Editor } from '@tiptap/react';

type HistorySlice<D = any> = {
    index: number;
    hasPast: () => boolean;
    hasFuture: () => boolean;
    histories: History<D>[];
    record: (data: D) => void;
    back: VoidFunction;
    forward: VoidFunction;
    currentHistory: () => History;
    nextHistory: () => History<D> | null;
    prevHistory: () => History<D> | null;
    setHistories: (histories: History[]) => void;
    setHistoryIndex: (index: number) => void;
    initialAppState: D;
};

type NodeHandle = {
    sync: () => void;
    hideOverlay: () => void;
    showOverlay: () => void;
};
type NodesSlice = {
    registerNode: (id: string, handle: NodeHandle) => void;
    unregisterNode: (id: string) => void;
    syncNode: (id?: string | null) => void;
    syncNodes: (ids: Array<string | null | undefined>) => void;
    setOverlayVisible: (id: string | null | undefined, visible: boolean) => void;
};

type PermissionsArgs<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>> = {
    item?: G["UserComponentData"] | null;
    type?: keyof G["UserProps"];
    root?: boolean;
};
type GetPermissions<UserConfig extends Config = Config> = (params?: PermissionsArgs<UserConfig>) => Permissions;
type ResolvePermissions<UserConfig extends Config = Config> = (params?: PermissionsArgs<UserConfig>, force?: boolean) => void;
type RefreshPermissions<UserConfig extends Config = Config> = (params?: PermissionsArgs<UserConfig>, force?: boolean) => void;
type Cache = Record<string, {
    lastPermissions: Partial<Permissions>;
    lastData: ComponentData | null;
    lastParentId: string | null;
}>;
type PermissionsSlice = {
    cache: Cache;
    globalPermissions: Permissions;
    resolvedPermissions: Record<string, Partial<Permissions> | undefined>;
    getPermissions: GetPermissions<Config>;
    resolvePermissions: ResolvePermissions<Config>;
    refreshPermissions: RefreshPermissions<Config>;
};

type ComponentOrRootData = Omit<ComponentData<any>, "type">;
type FieldsSlice = {
    fields: Fields | Partial<Fields>;
    loading: boolean;
    lastResolvedData: Partial<ComponentOrRootData>;
    id: string | undefined;
};

type Status = "LOADING" | "MOUNTED" | "READY";
type ZoomConfig = {
    autoZoom: number;
    rootHeight: number;
    zoom: number;
};
type ComponentState = Record<string, {
    loadingCount: number;
}>;
type AppStore<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>> = {
    instanceId: string;
    state: G["UserAppState"];
    dispatch: (action: CredBuildAction) => void;
    config: UserConfig;
    componentState: ComponentState;
    setComponentState: (componentState: ComponentState) => void;
    setComponentLoading: (id: string, loading?: boolean, defer?: number) => () => void;
    unsetComponentLoading: (id: string) => void;
    pendingLoadTimeouts: Record<string, NodeJS.Timeout>;
    resolveComponentData: <T extends ComponentData | RootDataWithProps>(componentData: T, trigger: ResolveDataTrigger) => Promise<{
        node: T;
        didChange: boolean;
    }>;
    resolveAndCommitData: () => void;
    plugins: Plugin[];
    overrides: Partial<Overrides>;
    viewports: Viewports;
    zoomConfig: ZoomConfig;
    setZoomConfig: (zoomConfig: ZoomConfig) => void;
    status: Status;
    setStatus: (status: Status) => void;
    iframe: IframeConfig;
    _experimentalFullScreenCanvas: boolean;
    _experimentalVirtualization: boolean;
    selectedItem?: G["UserData"]["content"][0] | null;
    getCurrentData: () => G["UserData"]["content"][0] | G["UserData"]["root"];
    setUi: (ui: Partial<UiState>, recordHistory?: boolean) => void;
    getComponentConfig: (type?: string) => ComponentConfig | null | undefined;
    onAction?: (action: CredBuildAction, newState: AppState, state: AppState) => void;
    metadata: Metadata;
    fields: FieldsSlice;
    history: HistorySlice;
    nodes: NodesSlice;
    permissions: PermissionsSlice;
    fieldTransforms: FieldTransforms;
    currentRichText?: {
        inlineComponentId?: string;
        inline: boolean;
        field: RichtextField;
        editor: Editor;
        id: string;
    } | null;
};

export type { AppStore as A, GetPermissions as G, HistorySlice as H, RefreshPermissions as R };
