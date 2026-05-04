import { ReactElement, CSSProperties, ReactNode, ElementType, Ref, JSX } from 'react';
import { EditorStateSnapshot, Editor, Extensions } from '@tiptap/react';
import { BlockquoteOptions } from '@tiptap/extension-blockquote';
import { BoldOptions } from '@tiptap/extension-bold';
import { CodeOptions } from '@tiptap/extension-code';
import { CodeBlockOptions } from '@tiptap/extension-code-block';
import { HardBreakOptions } from '@tiptap/extension-hard-break';
import { HeadingOptions } from '@tiptap/extension-heading';
import { HorizontalRuleOptions } from '@tiptap/extension-horizontal-rule';
import { ItalicOptions } from '@tiptap/extension-italic';
import { LinkOptions } from '@tiptap/extension-link';
import { BulletListOptions, ListItemOptions, ListKeymapOptions, OrderedListOptions } from '@tiptap/extension-list';
import { ParagraphOptions } from '@tiptap/extension-paragraph';
import { StrikeOptions } from '@tiptap/extension-strike';
import { TextAlignOptions } from '@tiptap/extension-text-align';
import { UnderlineOptions } from '@tiptap/extension-underline';

type ItemSelector = {
    index: number;
    zone?: string;
};

declare const defaultEditorState: (ctx: EditorStateSnapshot, readOnly: boolean) => {
    isAlignLeft?: undefined;
    canAlignLeft?: undefined;
    isAlignCenter?: undefined;
    canAlignCenter?: undefined;
    isAlignRight?: undefined;
    canAlignRight?: undefined;
    isAlignJustify?: undefined;
    canAlignJustify?: undefined;
    isBold?: undefined;
    canBold?: undefined;
    isItalic?: undefined;
    canItalic?: undefined;
    isUnderline?: undefined;
    canUnderline?: undefined;
    isStrike?: undefined;
    canStrike?: undefined;
    isInlineCode?: undefined;
    canInlineCode?: undefined;
    isBulletList?: undefined;
    canBulletList?: undefined;
    isOrderedList?: undefined;
    canOrderedList?: undefined;
    isCodeBlock?: undefined;
    canCodeBlock?: undefined;
    isBlockquote?: undefined;
    canBlockquote?: undefined;
    canHorizontalRule?: undefined;
} | {
    isAlignLeft: boolean;
    canAlignLeft: boolean;
    isAlignCenter: boolean;
    canAlignCenter: boolean;
    isAlignRight: boolean;
    canAlignRight: boolean;
    isAlignJustify: boolean;
    canAlignJustify: boolean;
    isBold: boolean;
    canBold: boolean;
    isItalic: boolean;
    canItalic: boolean;
    isUnderline: boolean;
    canUnderline: boolean;
    isStrike: boolean;
    canStrike: boolean;
    isInlineCode: boolean;
    canInlineCode: boolean;
    isBulletList: boolean;
    canBulletList: boolean;
    isOrderedList: boolean;
    canOrderedList: boolean;
    isCodeBlock: boolean;
    canCodeBlock: boolean;
    isBlockquote: boolean;
    canBlockquote: boolean;
    canHorizontalRule: boolean;
};

type RichTextSelector = (ctx: EditorStateSnapshot, readOnly: boolean) => Partial<Record<string, boolean>>;
type DefaultEditorState = ReturnType<typeof defaultEditorState>;
type EditorState<Selector extends RichTextSelector = RichTextSelector> = DefaultEditorState & ReturnType<Selector> & Record<string, boolean | undefined>;

interface CredBuildRichTextOptions {
    /**
     * If set to false, the blockquote extension will not be registered
     * @example blockquote: false
     */
    blockquote: Partial<BlockquoteOptions> | false;
    /**
     * If set to false, the bold extension will not be registered
     * @example bold: false
     */
    bold: Partial<BoldOptions> | false;
    /**
     * If set to false, the bulletList extension will not be registered
     * @example bulletList: false
     */
    bulletList: Partial<BulletListOptions> | false;
    /**
     * If set to false, the code extension will not be registered
     * @example code: false
     */
    code: Partial<CodeOptions> | false;
    /**
     * If set to false, the codeBlock extension will not be registered
     * @example codeBlock: false
     */
    codeBlock: Partial<CodeBlockOptions> | false;
    /**
     * If set to false, the document extension will not be registered
     * @example document: false
     */
    document: false;
    /**
     * If set to false, the hardBreak extension will not be registered
     * @example hardBreak: false
     */
    hardBreak: Partial<HardBreakOptions> | false;
    /**
     * If set to false, the heading extension will not be registered
     * @example heading: false
     */
    heading: Partial<HeadingOptions> | false;
    /**
     * If set to false, the horizontalRule extension will not be registered
     * @example horizontalRule: false
     */
    horizontalRule: Partial<HorizontalRuleOptions> | false;
    /**
     * If set to false, the italic extension will not be registered
     * @example italic: false
     */
    italic: Partial<ItalicOptions> | false;
    /**
     * If set to false, the listItem extension will not be registered
     * @example listItem: false
     */
    listItem: Partial<ListItemOptions> | false;
    /**
     * If set to false, the listItemKeymap extension will not be registered
     * @example listKeymap: false
     */
    listKeymap: Partial<ListKeymapOptions> | false;
    /**
     * If set to false, the link extension will not be registered
     * @example link: false
     */
    link: Partial<LinkOptions> | false;
    /**
     * If set to false, the orderedList extension will not be registered
     * @example orderedList: false
     */
    orderedList: Partial<OrderedListOptions> | false;
    /**
     * If set to false, the paragraph extension will not be registered
     * @example paragraph: false
     */
    paragraph: Partial<ParagraphOptions> | false;
    /**
     * If set to false, the strike extension will not be registered
     * @example strike: false
     */
    strike: Partial<StrikeOptions> | false;
    /**
     * If set to false, the text extension will not be registered
     * @example text: false
     */
    text: false;
    /**
     * If set to false, the textAlign extension will not be registered
     * @example text: false
     */
    textAlign: Partial<TextAlignOptions> | false;
    /**
     * If set to false, the underline extension will not be registered
     * @example underline: false
     */
    underline: Partial<UnderlineOptions> | false;
}

type FieldOption = {
    label: string;
    value: string | number | boolean | undefined | null | object;
};
type FieldOptions = Array<FieldOption> | ReadonlyArray<FieldOption>;
interface BaseField {
    label?: string;
    labelIcon?: ReactElement;
    metadata?: FieldMetadata;
    visible?: boolean;
}
interface TextField extends BaseField {
    type: "text";
    placeholder?: string;
    contentEditable?: boolean;
}
interface NumberField extends BaseField {
    type: "number";
    placeholder?: string;
    min?: number;
    max?: number;
    step?: number;
}
interface TextareaField extends BaseField {
    type: "textarea";
    placeholder?: string;
    contentEditable?: boolean;
}
interface SelectField extends BaseField {
    type: "select";
    options: FieldOptions;
}
interface RadioField extends BaseField {
    type: "radio";
    options: FieldOptions;
}
interface RichtextField<UserSelector extends RichTextSelector = RichTextSelector> extends BaseField {
    type: "richtext";
    contentEditable?: boolean;
    initialHeight?: CSSProperties["height"];
    options?: Partial<CredBuildRichTextOptions>;
    renderMenu?: (props: {
        children: ReactNode;
        editor: Editor | null;
        editorState: EditorState<UserSelector> | null;
        readOnly: boolean;
    }) => ReactNode;
    renderInlineMenu?: (props: {
        children: ReactNode;
        editor: Editor | null;
        editorState: EditorState<UserSelector> | null;
        readOnly: boolean;
    }) => ReactNode;
    tiptap?: {
        selector?: UserSelector;
        extensions?: Extensions;
    };
}
interface ArrayField<Props extends {
    [key: string]: any;
}[] = {
    [key: string]: any;
}[], UserField extends {} = {}> extends BaseField {
    type: "array";
    arrayFields: {
        [SubPropName in keyof Props[0]]: UserField extends {
            type: PropertyKey;
        } ? Field<Props[0][SubPropName], UserField> | UserField : Field<Props[0][SubPropName], UserField>;
    };
    defaultItemProps?: Props[0] | ((index: number) => Props[0]);
    getItemSummary?: (item: Props[0], index?: number) => ReactNode;
    max?: number;
    min?: number;
}
interface ObjectField<Props extends any = {
    [key: string]: any;
}, UserField extends {} = {}> extends BaseField {
    type: "object";
    objectFields: {
        [SubPropName in keyof Props]: UserField extends {
            type: PropertyKey;
        } ? Field<Props[SubPropName]> | UserField : Field<Props[SubPropName]>;
    };
}
type Adaptor<AdaptorParams = {}, TableShape extends Record<string, any> = {}, PropShape = TableShape> = {
    name: string;
    fetchList: (adaptorParams?: AdaptorParams) => Promise<TableShape[] | null>;
    mapProp?: (value: TableShape) => PropShape;
};
type NotUndefined<T> = T extends undefined ? never : T;
type ExternalFieldWithAdaptor<Props extends any = {
    [key: string]: any;
}> = BaseField & {
    type: "external";
    placeholder?: string;
    adaptor: Adaptor<any, any, Props>;
    adaptorParams?: object;
    getItemSummary: (item: NotUndefined<Props>, index?: number) => ReactNode;
};
type CacheOpts = {
    enabled?: boolean;
};
interface ExternalField<Props extends any = {
    [key: string]: any;
}> extends BaseField {
    type: "external";
    cache?: CacheOpts;
    placeholder?: string;
    fetchList: (params: {
        query: string;
        filters: Record<string, any>;
    }) => Promise<any[] | null>;
    mapProp?: (value: any) => Props;
    mapRow?: (value: any) => Record<string, string | number | ReactElement>;
    getItemSummary?: (item: NotUndefined<Props>, index?: number) => ReactNode;
    showSearch?: boolean;
    renderFooter?: (props: {
        items: any[];
    }) => ReactElement;
    initialQuery?: string;
    filterFields?: Record<string, Field>;
    initialFilters?: Record<string, any>;
}
type CustomFieldRender<Value extends any> = (props: {
    field: CustomField<Value>;
    name: string;
    id: string;
    value: Value;
    onChange: (value: Value, uiState?: Partial<UiState>) => void;
    readOnly?: boolean;
}) => ReactElement;
interface CustomField<Value extends any> extends BaseField {
    type: "custom";
    render: CustomFieldRender<Value>;
    contentEditable?: boolean;
    key?: string;
}
interface SlotField extends BaseField {
    type: "slot";
    allow?: string[];
    disallow?: string[];
}
type Field<ValueType = any, UserField extends {} = {}> = TextField | RichtextField | NumberField | TextareaField | SelectField | RadioField | ArrayField<ValueType extends {
    [key: string]: any;
}[] ? ValueType : never, UserField> | ObjectField<ValueType, UserField> | ExternalField<ValueType> | ExternalFieldWithAdaptor<ValueType> | CustomField<ValueType> | SlotField;
type Fields<ComponentProps extends DefaultComponentProps = DefaultComponentProps, UserField extends {} = {}> = {
    [PropName in keyof Omit<ComponentProps, "editMode">]: UserField extends {
        type: PropertyKey;
    } ? Field<ComponentProps[PropName], UserField> | UserField : Field<ComponentProps[PropName]>;
};
type FieldProps<F = Field<any>, ValueType = any> = {
    field: F;
    value: ValueType;
    id?: string;
    onChange: (value: ValueType, uiState?: Partial<UiState>) => void;
    readOnly?: boolean;
};

type DropZoneProps = {
    zone: string;
    allow?: string[];
    disallow?: string[];
    style?: CSSProperties;
    minEmptyHeight?: CSSProperties["minHeight"] | number;
    className?: string;
    collisionAxis?: DragAxis;
    as?: ElementType;
    ref?: Ref<any>;
};

type CredBuildContext = {
    renderDropZone: (props: DropZoneProps) => React.ReactNode;
    metadata: Metadata;
    isEditing: boolean;
    dragRef: ((element: Element | null) => void) | null;
};
type DefaultRootFieldProps = {
    title?: string;
};
type DefaultRootRenderProps<Props extends DefaultComponentProps = DefaultRootFieldProps> = WithCredBuildProps<WithChildren<Props>>;
type DefaultRootProps = DefaultRootRenderProps;
type DefaultComponentProps = {
    [key: string]: any;
};

type WithId<Props> = Props & {
    id: string;
};
type WithCredBuildProps<Props> = Props & {
    credbuild: CredBuildContext;
    editMode?: boolean;
};
type AsFieldProps<Props> = Omit<Props, "children" | "credbuild" | "editMode">;
type WithChildren<Props> = Props & {
    children: ReactNode;
};
type UserGenerics<UserConfig extends Config = Config, UserParams extends ExtractConfigParams<UserConfig> = ExtractConfigParams<UserConfig>, UserData extends Data<UserParams["props"], UserParams["rootProps"]> | Data = Data<UserParams["props"], UserParams["rootProps"]>, UserAppState extends PrivateAppState<UserData> = PrivateAppState<UserData>, UserPublicAppState extends AppState<UserData> = AppState<UserData>, UserComponentData extends ComponentData = UserData["content"][0]> = {
    UserConfig: UserConfig;
    UserParams: UserParams;
    UserProps: UserParams["props"];
    UserRootProps: UserParams["rootProps"] & DefaultRootFieldProps;
    UserData: UserData;
    UserAppState: UserAppState;
    UserPublicAppState: UserPublicAppState;
    UserComponentData: UserComponentData;
    UserField: UserParams["field"];
};
type ExtractField<UserField extends {
    type: PropertyKey;
}, T extends UserField["type"]> = Extract<UserField, {
    type: T;
}>;

type SlotComponent = (props?: Omit<DropZoneProps, "zone">) => ReactNode;
type CredBuildComponent<Props> = (props: WithId<WithCredBuildProps<{
    [K in keyof Props]: WithDeepSlots<Props[K], SlotComponent>;
}>>) => JSX.Element;
type ResolveDataTrigger = "insert" | "replace" | "load" | "force" | "move";
type WithPartialProps<T, Props extends DefaultComponentProps> = Omit<T, "props"> & {
    props?: Partial<Props>;
};
interface ComponentConfigExtensions {
}
type ComponentConfigInternal<RenderProps extends DefaultComponentProps, FieldProps extends DefaultComponentProps, DataShape = Omit<ComponentData<FieldProps>, "type">, // NB this doesn't include AllProps, so types will not contain deep slot types. To fix, we require a breaking change.
UserField extends BaseField = {}> = {
    render: CredBuildComponent<RenderProps>;
    label?: string;
    defaultProps?: FieldProps;
    fields?: Fields<FieldProps, UserField>;
    permissions?: Partial<Permissions>;
    inline?: boolean;
    resolveFields?: (data: DataShape, params: {
        changed: Partial<Record<keyof FieldProps, boolean> & {
            id: string;
        }>;
        fields: Fields<FieldProps>;
        lastFields: Fields<FieldProps>;
        lastData: DataShape | null;
        metadata: ComponentMetadata;
        appState: AppState;
        parent: ComponentData | null;
    }) => Promise<Fields<FieldProps>> | Fields<FieldProps>;
    resolveData?: (data: DataShape, params: {
        changed: Partial<Record<keyof FieldProps, boolean> & {
            id: string;
        }>;
        lastData: DataShape | null;
        metadata: ComponentMetadata;
        trigger: ResolveDataTrigger;
        parent: ComponentData | null;
    }) => Promise<WithPartialProps<DataShape, FieldProps>> | WithPartialProps<DataShape, FieldProps>;
    resolvePermissions?: (data: DataShape, params: {
        changed: Partial<Record<keyof FieldProps, boolean> & {
            id: string;
        }>;
        lastPermissions: Partial<Permissions>;
        permissions: Partial<Permissions>;
        appState: AppState;
        lastData: DataShape | null;
        parent: ComponentData | null;
    }) => Promise<Partial<Permissions>> | Partial<Permissions>;
    metadata?: ComponentMetadata;
} & ComponentConfigExtensions;
type ComponentConfig<RenderPropsOrParams extends LeftOrExactRight<RenderPropsOrParams, DefaultComponentProps, ComponentConfigParams> = DefaultComponentProps, FieldProps extends DefaultComponentProps = RenderPropsOrParams extends {
    props: any;
} ? RenderPropsOrParams["props"] : RenderPropsOrParams, DataShape = Omit<ComponentData<FieldProps>, "type">> = RenderPropsOrParams extends ComponentConfigParams<infer ParamsRenderProps, never> ? ComponentConfigInternal<ParamsRenderProps, FieldProps, DataShape, {}> : RenderPropsOrParams extends ComponentConfigParams<infer ParamsRenderProps, infer ParamsFields> ? ComponentConfigInternal<ParamsRenderProps, FieldProps, DataShape, ParamsFields[keyof ParamsFields] & BaseField> : ComponentConfigInternal<RenderPropsOrParams, FieldProps, DataShape>;
type RootConfigInternal<RootProps extends DefaultComponentProps = DefaultComponentProps, UserField extends BaseField = {}> = Partial<ComponentConfigInternal<WithChildren<RootProps>, AsFieldProps<RootProps>, RootData<AsFieldProps<RootProps>>, UserField>>;
type RootConfig<RootPropsOrParams extends LeftOrExactRight<RootPropsOrParams, DefaultComponentProps, ComponentConfigParams> = DefaultComponentProps> = RootPropsOrParams extends ComponentConfigParams<infer Props, never> ? Partial<RootConfigInternal<WithChildren<Props>, {}>> : RootPropsOrParams extends ComponentConfigParams<infer Props, infer UserFields> ? Partial<RootConfigInternal<WithChildren<Props>, UserFields[keyof UserFields] & BaseField>> : Partial<RootConfigInternal<WithChildren<RootPropsOrParams>>>;
type Category<ComponentName> = {
    components?: ComponentName[];
    title?: string;
    visible?: boolean;
    defaultExpanded?: boolean;
};
type ConfigInternal<Props extends DefaultComponents = DefaultComponents, RootProps extends DefaultComponentProps = DefaultComponentProps, CategoryName extends string = string, UserField extends {} = {}> = {
    categories?: Record<CategoryName, Category<keyof Props>> & {
        other?: Category<keyof Props>;
    };
    components: {
        [ComponentName in keyof Props]: Omit<ComponentConfigInternal<Props[ComponentName], Props[ComponentName], Omit<ComponentData<Props[ComponentName]>, "type">, UserField>, "type">;
    };
    root?: RootConfigInternal<RootProps, UserField>;
};
type DefaultComponents = Record<string, any>;
type Config<PropsOrParams extends LeftOrExactRight<PropsOrParams, DefaultComponents, ConfigParams> = DefaultComponents | ConfigParams, RootProps extends DefaultComponentProps = any, CategoryName extends string = string> = PropsOrParams extends ConfigParams<infer ParamComponents, infer ParamRoot, infer ParamCategoryName, never> ? ConfigInternal<ParamComponents, ParamRoot, ParamCategoryName[number]> : PropsOrParams extends ConfigParams<infer ParamComponents, infer ParamRoot, infer ParamCategoryName, infer ParamFields> ? ConfigInternal<ParamComponents, ParamRoot, ParamCategoryName[number], ParamFields[keyof ParamFields] & BaseField> : PropsOrParams extends ConfigParams<infer ParamComponents, infer ParamRoot, infer ParamCategoryName, any> ? ConfigInternal<ParamComponents, ParamRoot, ParamCategoryName[number], {}> : ConfigInternal<PropsOrParams, RootProps, CategoryName>;
type ExtractConfigParams<UserConfig extends ConfigInternal> = UserConfig extends ConfigInternal<infer PropsOrParams, infer RootProps, infer CategoryName, infer UserField> ? {
    props: PropsOrParams;
    rootProps: RootProps & DefaultRootFieldProps;
    categoryNames: CategoryName;
    field: UserField extends {
        type: string;
    } ? UserField : Field;
} : never;
type ConfigParams<Components extends DefaultComponents = DefaultComponents, RootProps extends DefaultComponentProps = any, CategoryNames extends string[] = string[], UserFields extends FieldsExtension = FieldsExtension> = {
    components?: Components;
    root?: RootProps;
    categories?: CategoryNames;
    fields?: AssertHasValue<UserFields>;
};
type ComponentConfigParams<Props extends DefaultComponentProps = DefaultComponentProps, UserFields extends FieldsExtension = never> = {
    props: Props;
    fields?: AssertHasValue<UserFields>;
};

type BaseData<Props extends {
    [key: string]: any;
} = {
    [key: string]: any;
}> = {
    readOnly?: Partial<Record<keyof Props, boolean>>;
};
type RootDataWithProps<Props extends DefaultComponentProps = DefaultRootFieldProps> = BaseData<Props> & {
    props: Props;
};
type RootDataWithoutProps<Props extends DefaultComponentProps = DefaultRootFieldProps> = Props;
type RootData<Props extends DefaultComponentProps = DefaultRootFieldProps> = Partial<RootDataWithProps<AsFieldProps<Props>>> & Partial<RootDataWithoutProps<Props>>;
type ComponentData<Props extends DefaultComponentProps = DefaultComponentProps, Name = string, Components extends Record<string, DefaultComponentProps> = Record<string, DefaultComponentProps>> = {
    type: Name;
    props: WithDeepSlots<WithId<Props>, Content<Components>>;
} & BaseData<Props>;
type ComponentDataOptionalId<Props extends DefaultComponentProps = DefaultComponentProps, Name = string> = {
    type: Name;
    props: Props & {
        id?: string;
    };
} & BaseData<Props>;
type MappedItem = ComponentData;
type ComponentDataMap<Components extends DefaultComponents = DefaultComponents> = {
    [K in keyof Components]: ComponentData<Components[K], K extends string ? K : never, Components>;
}[keyof Components];
type Content<PropsMap extends {
    [key: string]: DefaultComponentProps;
} = {
    [key: string]: DefaultComponentProps;
}> = ComponentDataMap<PropsMap>[];
type Data<Components extends DefaultComponents = DefaultComponents, RootProps extends DefaultComponentProps = DefaultRootFieldProps> = {
    root: WithDeepSlots<RootData<RootProps>, Content<Components>>;
    content: Content<Components>;
    zones?: Record<string, Content<Components>>;
};
type Metadata = {
    [key: string]: any;
};
interface CredBuildMetadata extends Metadata {
}
interface ComponentMetadata extends CredBuildMetadata {
}
interface FieldMetadata extends Metadata {
}

type ItemWithId = {
    _arrayId: string;
    _originalIndex: number;
    _currentIndex: number;
};
type ArrayState = {
    items: ItemWithId[];
    openId: string;
};
type UiState = {
    leftSideBarVisible: boolean;
    rightSideBarVisible: boolean;
    leftSideBarWidth?: number | null;
    rightSideBarWidth?: number | null;
    mobilePanelExpanded?: boolean;
    itemSelector: ItemSelector | null;
    arrayState: Record<string, ArrayState | undefined>;
    previewMode: "interactive" | "edit";
    componentList: Record<string, {
        components?: string[];
        title?: string;
        visible?: boolean;
        expanded?: boolean;
    }>;
    isDragging: boolean;
    viewports: {
        current: {
            width: number | "100%";
            height: number | "auto";
        };
        controlsVisible: boolean;
        options: Viewport[];
    };
    field: {
        focus?: string | null;
        metadata?: Record<string, any>;
    };
    plugin: {
        current: string | null;
    };
};
type AppState<UserData extends Data = Data> = {
    data: UserData;
    ui: UiState;
};

type ZoneType = "root" | "dropzone" | "slot";
type CredBuildNodeData = {
    data: ComponentData;
    flatData: ComponentData;
    parentId: string | null;
    zone: string;
    path: string[];
};
type CredBuildZoneData = {
    contentIds: string[];
    type: ZoneType;
};
type NodeIndex = Record<string, CredBuildNodeData>;
type ZoneIndex = Record<string, CredBuildZoneData>;
type PrivateAppState<UserData extends Data = Data> = AppState<UserData> & {
    indexes: {
        nodes: NodeIndex;
        zones: ZoneIndex;
    };
};
type BuiltinTypes = Date | RegExp | Error | Function | symbol | null | undefined;
/**
 * Recursively walk T and replace Slots with SlotComponents
 */
type WithDeepSlots<T, SlotType = T> = T extends Slot ? SlotType : T extends (infer U)[] ? Array<WithDeepSlots<U, SlotType>> : T extends (infer U)[] ? WithDeepSlots<U, SlotType>[] : T extends BuiltinTypes ? T : T extends object ? {
    [K in keyof T]: WithDeepSlots<T[K], SlotType>;
} : T;
type FieldsExtension = {
    [Type in string]: {
        type: Type;
    };
};
type Exact<T, Target> = Record<Exclude<keyof T, keyof Target>, never>;
type LeftOrExactRight<Union, Left, Right> = (Left & Union extends Right ? Exact<Union, Right> : Left) | (Right & Exact<Union, Right>);
type AssertHasValue<T, True = T, False = never> = [keyof T] extends [
    never
] ? False : True;
type RenderFunc<Props extends {
    [key: string]: any;
} = {
    children: ReactNode;
}> = (props: Props) => ReactElement;
type PluginInternal = Plugin & {
    mobileOnly?: boolean;
    desktopOnly?: boolean;
};

type MapFnParams<ThisField = Field> = {
    value: any;
    parentId: string;
    propName: string;
    field: ThisField;
    propPath: string;
};

type FieldTransformFnParams<T> = Omit<MapFnParams<T>, "parentId"> & {
    isReadOnly: boolean;
    componentId: string;
};
type FieldTransformFn<T> = (params: FieldTransformFnParams<T>) => any;
type FieldTransforms<UserConfig extends Config = Config<{
    fields: {};
}>, // Setting fields: {} helps TS choose default field types
G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>, UserField extends {
    type: string;
} = Field | G["UserField"]> = Partial<{
    [Type in UserField["type"]]: FieldTransformFn<ExtractField<UserField, Type>>;
}>;

declare const overrideKeys: readonly ["header", "headerActions", "fields", "fieldLabel", "drawer", "drawerItem", "componentOverlay", "outline", "credbuild", "preview"];
type OverrideKey = (typeof overrideKeys)[number];
type OverridesGeneric<Shape extends {
    [key in OverrideKey]: any;
}> = Shape;
type Overrides<UserConfig extends Config = Config> = OverridesGeneric<{
    fieldTypes: Partial<FieldRenderFunctions<UserConfig>>;
    header: RenderFunc<{
        actions: ReactNode;
        children: ReactNode;
    }>;
    actionBar: RenderFunc<{
        label?: string;
        children: ReactNode;
        parentAction: ReactNode;
    }>;
    headerActions: RenderFunc<{
        children: ReactNode;
    }>;
    preview: RenderFunc;
    fields: RenderFunc<{
        children: ReactNode;
        isLoading: boolean;
        itemSelector?: ItemSelector | null;
    }>;
    fieldLabel: RenderFunc<{
        children?: ReactNode;
        icon?: ReactNode;
        label: string;
        el?: "label" | "div";
        readOnly?: boolean;
        className?: string;
    }>;
    components: RenderFunc;
    componentItem: RenderFunc<{
        children: ReactNode;
        name: string;
    }>;
    drawer: RenderFunc;
    drawerItem: RenderFunc<{
        children: ReactNode;
        name: string;
    }>;
    iframe: RenderFunc<{
        children: ReactNode;
        document?: Document;
    }>;
    outline: RenderFunc;
    componentOverlay: RenderFunc<{
        children: ReactNode;
        hover: boolean;
        isSelected: boolean;
        componentId: string;
        componentType: string;
    }>;
    credbuild: RenderFunc;
}>;
type FieldRenderFunctions<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>, UserField extends {
    type: string;
} = Field | G["UserField"]> = Omit<{
    [Type in UserField["type"]]: React.FunctionComponent<FieldProps<ExtractField<UserField, Type>, any> & {
        children: ReactNode;
        name: string;
    }>;
}, "custom">;

type Direction = "left" | "right" | "up" | "down" | null;
type DragAxis = "dynamic" | "y" | "x";

type iconTypes = "Smartphone" | "Monitor" | "Tablet";
type Viewport = {
    width: number | "100%";
    height?: number | "auto";
    label?: string;
    icon?: iconTypes | ReactNode;
};
type Viewports = Viewport[];

type Permissions = {
    drag: boolean;
    duplicate: boolean;
    delete: boolean;
    edit: boolean;
    insert: boolean;
} & Record<string, boolean>;
type IframeConfig = {
    enabled?: boolean;
    waitForStyles?: boolean;
};
type OnAction<UserData extends Data = Data> = (action: CredBuildAction, appState: AppState<UserData>, prevAppState: AppState<UserData>) => void;
type Plugin<UserConfig extends Config = Config> = {
    name?: string;
    label?: string;
    icon?: ReactNode;
    render?: () => ReactElement;
    overrides?: Partial<Overrides<UserConfig>>;
    fieldTransforms?: FieldTransforms<UserConfig>;
    mobilePanelHeight?: "toggle" | "min-content";
};
type History<D = any> = {
    state: D;
    id?: string;
};
type InitialHistoryAppend<AS = Partial<AppState>> = {
    histories: History<AS>[];
    index?: number;
    appendData?: true;
};
type InitialHistoryNoAppend<AS = Partial<AppState>> = {
    histories: [History<AS>, ...History<AS>[]];
    index?: number;
    appendData?: false;
};
type InitialHistory<AS = Partial<AppState>> = InitialHistoryAppend<AS> | InitialHistoryNoAppend<AS>;
type Slot<Props extends {
    [key: string]: DefaultComponentProps;
} = {
    [key: string]: DefaultComponentProps;
}> = {
    [K in keyof Props]: ComponentDataOptionalId<Props[K], K extends string ? K : never>;
}[keyof Props][];
type WithSlotProps<Target extends Record<string, any>, Components extends DefaultComponents = DefaultComponents, SlotType extends Content<Components> = Content<Components>> = WithDeepSlots<Target, SlotType>;
type RichText = string | ReactNode;

type InsertAction = {
    type: "insert";
    componentType: string;
    destinationIndex: number;
    destinationZone: string;
    id?: string;
};
type DuplicateAction = {
    type: "duplicate";
    sourceIndex: number;
    sourceZone: string;
};
type ReplaceAction<UserData extends Data = Data> = {
    type: "replace";
    destinationIndex: number;
    destinationZone: string;
    data: ComponentData;
    ui?: Partial<AppState<UserData>["ui"]>;
};
type ReplaceRootAction<UserData extends Data = Data> = {
    type: "replaceRoot";
    root: RootData;
    ui?: Partial<AppState<UserData>["ui"]>;
};
type ReorderAction = {
    type: "reorder";
    sourceIndex: number;
    destinationIndex: number;
    destinationZone: string;
};
type MoveAction = {
    type: "move";
    sourceIndex: number;
    sourceZone: string;
    destinationIndex: number;
    destinationZone: string;
};
type RemoveAction = {
    type: "remove";
    index: number;
    zone: string;
};
type SetUiAction = {
    type: "setUi";
    ui: Partial<UiState> | ((previous: UiState) => Partial<UiState>);
};
type SetDataAction = {
    type: "setData";
    data: Partial<Data> | ((previous: Data) => Partial<Data>);
};
type SetAction<UserData extends Data = Data> = {
    type: "set";
    state: Partial<PrivateAppState<UserData>> | ((previous: PrivateAppState<UserData>) => Partial<PrivateAppState<UserData>>);
};
type RegisterZoneAction = {
    type: "registerZone";
    zone: string;
};
type UnregisterZoneAction = {
    type: "unregisterZone";
    zone: string;
};
type CredBuildAction = {
    recordHistory?: boolean;
} & (ReorderAction | InsertAction | MoveAction | ReplaceAction | ReplaceRootAction | RemoveAction | DuplicateAction | SetAction | SetDataAction | SetUiAction | RegisterZoneAction | UnregisterZoneAction);

export { type DefaultRootRenderProps as $, type AppState as A, type BaseData as B, type CredBuildAction as C, type Data as D, type CacheOpts as E, type Fields as F, type ComponentConfigExtensions as G, type History as H, type IframeConfig as I, type ComponentConfigParams as J, type ComponentDataMap as K, type ComponentDataOptionalId as L, type Metadata as M, type ComponentMetadata as N, type OnAction as O, type PrivateAppState as P, type ConfigParams as Q, type RootData as R, type CredBuildComponent as S, type CredBuildContext as T, type UserGenerics as U, type Viewports as V, type WithId as W, type CredBuildMetadata as X, type CustomField as Y, type CustomFieldRender as Z, type DefaultRootProps as _, type Config as a, type Direction as a0, type DragAxis as a1, type ExternalField as a2, type ExternalFieldWithAdaptor as a3, type ExtractConfigParams as a4, type ExtractField as a5, type FieldMetadata as a6, type FieldRenderFunctions as a7, type FieldTransformFn as a8, type FieldTransformFnParams as a9, type ItemWithId as aa, type MappedItem as ab, type NumberField as ac, type ObjectField as ad, type OverrideKey as ae, type RadioField as af, type RichText as ag, type RootConfig as ah, type RootDataWithoutProps as ai, type SelectField as aj, type Slot as ak, type SlotComponent as al, type SlotField as am, type TextField as an, type TextareaField as ao, type Viewport as ap, type WithChildren as aq, type WithCredBuildProps as ar, type WithSlotProps as as, overrideKeys as at, type Content as b, type ComponentData as c, type DefaultComponents as d, type DefaultComponentProps as e, type DefaultRootFieldProps as f, type Permissions as g, type RootDataWithProps as h, type ResolveDataTrigger as i, type Plugin as j, type Overrides as k, type UiState as l, type ComponentConfig as m, type FieldTransforms as n, type RichtextField as o, type Field as p, type FieldProps as q, type DropZoneProps as r, type InitialHistory as s, type ItemSelector as t, type PluginInternal as u, type Adaptor as v, type ArrayField as w, type ArrayState as x, type AsFieldProps as y, type BaseField as z };
