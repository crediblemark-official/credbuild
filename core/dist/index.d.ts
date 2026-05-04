import { p as Field, q as FieldProps, r as DropZoneProps, a as Config, U as UserGenerics, D as Data, l as UiState, O as OnAction, g as Permissions, j as Plugin, k as Overrides, n as FieldTransforms, C as CredBuildAction, V as Viewports, I as IframeConfig, s as InitialHistory, M as Metadata, i as ResolveDataTrigger, t as ItemSelector, c as ComponentData, u as PluginInternal } from './actions-CEH_5LMY.js';
export { v as Adaptor, A as AppState, w as ArrayField, x as ArrayState, y as AsFieldProps, B as BaseData, z as BaseField, E as CacheOpts, m as ComponentConfig, G as ComponentConfigExtensions, J as ComponentConfigParams, K as ComponentDataMap, L as ComponentDataOptionalId, N as ComponentMetadata, Q as ConfigParams, b as Content, S as CredBuildComponent, T as CredBuildContext, X as CredBuildMetadata, Y as CustomField, Z as CustomFieldRender, e as DefaultComponentProps, d as DefaultComponents, f as DefaultRootFieldProps, _ as DefaultRootProps, $ as DefaultRootRenderProps, a0 as Direction, a1 as DragAxis, a2 as ExternalField, a3 as ExternalFieldWithAdaptor, a4 as ExtractConfigParams, a5 as ExtractField, a6 as FieldMetadata, a7 as FieldRenderFunctions, a8 as FieldTransformFn, a9 as FieldTransformFnParams, F as Fields, H as History, aa as ItemWithId, ab as MappedItem, ac as NumberField, ad as ObjectField, ae as OverrideKey, af as RadioField, ag as RichText, o as RichtextField, ah as RootConfig, R as RootData, h as RootDataWithProps, ai as RootDataWithoutProps, aj as SelectField, ak as Slot, al as SlotComponent, am as SlotField, an as TextField, ao as TextareaField, ap as Viewport, aq as WithChildren, ar as WithCredBuildProps, W as WithId, as as WithSlotProps, at as overrideKeys } from './actions-CEH_5LMY.js';
export { m as migrate, r as resolveAllData, t as transformProps, w as walkTree } from './walk-tree-B4ZvMfxS.js';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import react__default, { ReactNode, SyntheticEvent, ReactElement, CSSProperties } from 'react';
import { A as AppStore, G as GetPermissions, R as RefreshPermissions, H as HistorySlice } from './index-CkSfgrvw.js';
import '@tiptap/react';
import '@tiptap/extension-blockquote';
import '@tiptap/extension-bold';
import '@tiptap/extension-code';
import '@tiptap/extension-code-block';
import '@tiptap/extension-hard-break';
import '@tiptap/extension-heading';
import '@tiptap/extension-horizontal-rule';
import '@tiptap/extension-italic';
import '@tiptap/extension-link';
import '@tiptap/extension-list';
import '@tiptap/extension-paragraph';
import '@tiptap/extension-strike';
import '@tiptap/extension-text-align';
import '@tiptap/extension-underline';

declare const ActionBar: {
    ({ label, children, }: {
        label?: string;
        children?: ReactNode;
    }): react_jsx_runtime.JSX.Element;
    Action: ({ children, label, onClick, active, disabled, }: {
        children: ReactNode;
        label?: string;
        onClick: (e: SyntheticEvent) => void;
        active?: boolean;
        disabled?: boolean;
    }) => react_jsx_runtime.JSX.Element;
    Label: ({ label }: {
        label: string;
    }) => react_jsx_runtime.JSX.Element;
    Group: ({ children }: {
        children: ReactNode;
    }) => react_jsx_runtime.JSX.Element;
    Separator: () => react_jsx_runtime.JSX.Element;
};
declare const Action: ({ children, label, onClick, active, disabled, }: {
    children: ReactNode;
    label?: string;
    onClick: (e: SyntheticEvent) => void;
    active?: boolean;
    disabled?: boolean;
}) => react_jsx_runtime.JSX.Element;
declare const Group: ({ children }: {
    children: ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const Label: ({ label }: {
    label: string;
}) => react_jsx_runtime.JSX.Element;
declare const Separator: () => react_jsx_runtime.JSX.Element;

declare const FieldLabel: ({ children, icon, label, el, readOnly, className, }: {
    children?: ReactNode;
    icon?: ReactNode;
    label: string;
    el?: "label" | "div";
    readOnly?: boolean;
    className?: string;
}) => react_jsx_runtime.JSX.Element;

type FieldNoLabel<Props extends any = any> = Omit<Field<Props>, "label">;
declare function AutoField<ValueType = any, FieldType extends FieldNoLabel<ValueType> = FieldNoLabel<ValueType>>(props: FieldProps<FieldType, ValueType> & {
    value: any;
}): react_jsx_runtime.JSX.Element | null;

declare const Button: ({ children, href, onClick, variant, type, disabled, tabIndex, newTab, fullWidth, icon, size, loading: loadingProp, ...props }: {
    children: ReactNode;
    href?: string;
    onClick?: (e: any) => void | Promise<void>;
    variant?: "primary" | "secondary";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    tabIndex?: number;
    newTab?: boolean;
    fullWidth?: boolean;
    icon?: ReactNode;
    size?: "medium" | "large";
    loading?: boolean;
}) => react_jsx_runtime.JSX.Element;

declare const Drawer: {
    ({ children, droppableId, direction, }: {
        children: ReactNode;
        droppableId?: string;
        direction?: "vertical" | "horizontal";
    }): react_jsx_runtime.JSX.Element;
    Item: ({ name, children, id, label, index, isDragDisabled, }: {
        name: string;
        children?: (props: {
            children: ReactNode;
            name: string;
        }) => ReactElement;
        id?: string;
        label?: string;
        index?: number;
        isDragDisabled?: boolean;
    }) => react_jsx_runtime.JSX.Element;
};

declare const DropZone: react.ForwardRefExoticComponent<Omit<DropZoneProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const IconButton: ({ active, children, href, onClick, type, disabled, tabIndex, newTab, fullWidth, title, suppressHydrationWarning, }: {
    active?: boolean;
    children: ReactNode;
    href?: string;
    onClick?: (e: SyntheticEvent) => void | Promise<void>;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    tabIndex?: number;
    newTab?: boolean;
    fullWidth?: boolean;
    title: string;
    suppressHydrationWarning?: boolean;
}) => react_jsx_runtime.JSX.Element;

type CredBuildProps<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>> = {
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
declare function CredBuild<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>>(props: CredBuildProps<UserConfig>): react_jsx_runtime.JSX.Element;
declare namespace CredBuild {
    var Components: () => react_jsx_runtime.JSX.Element;
    var Fields: react.MemoExoticComponent<({ wrapFields }: {
        wrapFields?: boolean;
    }) => react_jsx_runtime.JSX.Element>;
    var Layout: ({ children }: {
        children?: ReactNode;
    }) => react_jsx_runtime.JSX.Element;
    var Outline: () => react_jsx_runtime.JSX.Element;
    var Preview: ({ id }: {
        id?: string;
    }) => react_jsx_runtime.JSX.Element;
}

declare const renderContext: react__default.Context<{
    config: Config;
    data: Data;
    metadata: Metadata;
}>;
declare function Render<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>>({ config, data, metadata, }: {
    config: UserConfig;
    data: Partial<G["UserData"] | Data>;
    metadata?: Metadata;
}): react_jsx_runtime.JSX.Element;

declare function AlignLeft(): react_jsx_runtime.JSX.Element;

declare function AlignCenter(): react_jsx_runtime.JSX.Element;

declare function AlignRight(): react_jsx_runtime.JSX.Element;

declare function AlignJustify(): react_jsx_runtime.JSX.Element;

declare function Bold(): react_jsx_runtime.JSX.Element;

declare function Italic(): react_jsx_runtime.JSX.Element;

declare function Underline(): react_jsx_runtime.JSX.Element;

declare function Strikethrough(): react_jsx_runtime.JSX.Element;

declare function InlineCode(): react_jsx_runtime.JSX.Element;

declare function BulletList(): react_jsx_runtime.JSX.Element;

declare function OrderedList(): react_jsx_runtime.JSX.Element;

declare function CodeBlock(): react_jsx_runtime.JSX.Element;

declare function Blockquote(): react_jsx_runtime.JSX.Element;

declare function HorizontalRule(): react_jsx_runtime.JSX.Element;

declare function Control({ icon, disabled, active, onClick, title, }: {
    icon: ReactNode;
    disabled?: boolean;
    active?: boolean;
    onClick: (e: SyntheticEvent) => any;
    title: string;
}): react_jsx_runtime.JSX.Element;

declare const RichTextMenu: {
    ({ children }: {
        children: ReactNode;
    }): react_jsx_runtime.JSX.Element;
    Group: ({ children }: {
        children: ReactNode;
    }) => react_jsx_runtime.JSX.Element;
    Control: typeof Control;
    AlignCenter: typeof AlignCenter;
    AlignJustify: typeof AlignJustify;
    AlignLeft: typeof AlignLeft;
    AlignRight: typeof AlignRight;
    AlignSelect: () => react_jsx_runtime.JSX.Element;
    Blockquote: typeof Blockquote;
    Bold: typeof Bold;
    BulletList: typeof BulletList;
    CodeBlock: typeof CodeBlock;
    HeadingSelect: () => react_jsx_runtime.JSX.Element;
    HorizontalRule: typeof HorizontalRule;
    InlineCode: typeof InlineCode;
    Italic: typeof Italic;
    ListSelect: () => react_jsx_runtime.JSX.Element;
    OrderedList: typeof OrderedList;
    Strikethrough: typeof Strikethrough;
    Underline: typeof Underline;
};

declare const registerOverlayPortal: (el: HTMLElement | null | undefined, opts?: {
    disableDrag?: boolean;
    disableDragOnFocus?: boolean;
}) => (() => void) | undefined;

/**
 * Helper function to set a value based on a dot-notated path
 */
declare function setDeep<T extends Record<string, any>>(node: T, path: string, newVal: any): T;

type UseCredBuildData<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>> = {
    appState: G["UserPublicAppState"];
    config: UserConfig;
    dispatch: AppStore["dispatch"];
    getPermissions: GetPermissions<UserConfig>;
    refreshPermissions: RefreshPermissions<UserConfig>;
    resolveDataById: (id: string, trigger?: ResolveDataTrigger) => void;
    resolveDataBySelector: (selector: ItemSelector, trigger?: ResolveDataTrigger) => void;
    selectedItem: G["UserComponentData"] | null;
    getItemBySelector: (selector: ItemSelector) => G["UserComponentData"] | undefined;
    getItemById: (id: string) => G["UserComponentData"] | undefined;
    getSelectorForId: (id: string) => Required<ItemSelector> | undefined;
    getParentById: (id: string) => ComponentData | undefined;
    history: {
        back: HistorySlice["back"];
        forward: HistorySlice["forward"];
        setHistories: HistorySlice["setHistories"];
        setHistoryIndex: HistorySlice["setHistoryIndex"];
        histories: HistorySlice["histories"];
        index: HistorySlice["index"];
        hasPast: boolean;
        hasFuture: boolean;
    };
};
type CredBuildApi<UserConfig extends Config = Config> = UseCredBuildData<UserConfig>;
type UseCredBuildStore<UserConfig extends Config = Config> = CredBuildApi<UserConfig>;
/**
 * createUseCredBuild
 *
 * Create a typed useCredBuild hook, which is necessary because the user may provide a generic type but not
 * a selector type, and TS does not currently support partial inference.
 * Related: https://github.com/microsoft/TypeScript/issues/26242
 *
 * @returns a typed useCredBuild function
 */
declare function createUseCredBuild<UserConfig extends Config = Config>(): <T = CredBuildApi<UserConfig>>(selector: (state: UseCredBuildStore<UserConfig>) => T) => T;
declare function useCredBuild<UserConfig extends Config = Config>(): UseCredBuildStore<UserConfig>;
/**
 * Get the latest state without relying on a render
 *
 * @returns CredBuildApi
 */
declare function useGetCredBuild(): () => UseCredBuildStore<Config>;

declare const blocksPlugin: () => Plugin;

declare const fieldsPlugin: (params?: {
    desktopSideBar?: "left" | "right";
}) => PluginInternal;

declare const outlinePlugin: () => Plugin;

declare const legacySideBarPlugin: () => Plugin;

export { Action, ActionBar, AutoField, Button, ComponentData, Config, CredBuild, CredBuildAction, type CredBuildApi, Data, Drawer, DropZone, Field, FieldLabel, FieldProps, FieldTransforms, Group, IconButton, IframeConfig, InitialHistory, Label, Metadata, OnAction, Overrides, Permissions, Plugin, Render, ResolveDataTrigger, RichTextMenu, Separator, UiState, type UseCredBuildData, UserGenerics, Viewports, blocksPlugin, createUseCredBuild, fieldsPlugin, legacySideBarPlugin, outlinePlugin, registerOverlayPortal, renderContext, setDeep, useCredBuild, useGetCredBuild };
