import { a as Config, D as Data, W as WithId, U as UserGenerics, b as Content, c as ComponentData, d as DefaultComponents, e as DefaultComponentProps, f as DefaultRootFieldProps, M as Metadata, R as RootData } from './actions-CEH_5LMY.mjs';

type MigrationOptions<UserConfig extends Config> = {
    migrateDynamicZonesForComponent?: {
        [ComponentName in keyof UserConfig["components"]]: (props: WithId<UserGenerics<UserConfig>["UserProps"][ComponentName]>, zones: Record<string, Content>) => ComponentData["props"];
    };
};
declare function migrate<UserConfig extends Config = Config>(data: Data, config?: UserConfig, migrationOptions?: MigrationOptions<UserConfig>): Data;

type PropTransform<Components extends DefaultComponents = DefaultComponents, RootProps extends DefaultComponentProps = DefaultRootFieldProps> = Partial<{
    [ComponentName in keyof Components]: (props: Components[ComponentName] & {
        [key: string]: any;
    }) => Components[ComponentName];
} & {
    root: (props: RootProps & {
        [key: string]: any;
    }) => RootProps;
}>;
declare function transformProps<Components extends DefaultComponents = DefaultComponents, RootProps extends DefaultComponentProps = DefaultRootFieldProps>(data: Partial<Data>, propTransforms: PropTransform<Components, RootProps>, config?: Config): Data;

declare function resolveAllData<Components extends DefaultComponents = DefaultComponents, RootProps extends Record<string, any> = DefaultRootFieldProps>(data: Partial<Data>, config: Config, metadata?: Metadata, onResolveStart?: (item: ComponentData) => void, onResolveEnd?: (item: ComponentData) => void): Promise<Data<Components, RootProps>>;

type WalkTreeOptions = {
    parentId: string;
    propName: string;
};
declare function walkTree<T extends ComponentData | RootData | G["UserData"], UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>>(data: T, config: UserConfig, callbackFn: (data: Content, options: WalkTreeOptions) => Content | null | void): T;

export { migrate as m, resolveAllData as r, transformProps as t, walkTree as w };
