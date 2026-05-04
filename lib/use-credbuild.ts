import {
  Config,
  UserGenerics,
  ResolveDataTrigger,
  ComponentData,
} from "../types";
import { createContext, useContext, useEffect, useState } from "react";
import { AppStore, useAppStoreApi } from "../store";
import {
  GetPermissions,
  RefreshPermissions,
} from "../store/slices/permissions";
import { HistorySlice } from "../store/slices/history";
import { createStore, StoreApi, useStore } from "zustand";
import { makeStatePublic } from "./data/make-state-public";
import { getItem, ItemSelector } from "./data/get-item";
import { resolveDataById } from "./data/resolve-data-by-id";
import { resolveDataBySelector } from "./data/resolve-data-by-selector";
import { getSelectorForId } from "./get-selector-for-id";

export type UseCredBuildData<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
> = {
  appState: G["UserPublicAppState"];
  config: UserConfig;
  dispatch: AppStore["dispatch"];
  getPermissions: GetPermissions<UserConfig>;
  refreshPermissions: RefreshPermissions<UserConfig>;
  resolveDataById: (id: string, trigger?: ResolveDataTrigger) => void;
  resolveDataBySelector: (
    selector: ItemSelector,
    trigger?: ResolveDataTrigger
  ) => void;
  selectedItem: G["UserComponentData"] | null;
  getItemBySelector: (
    selector: ItemSelector
  ) => G["UserComponentData"] | undefined;
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

export type CredBuildApi<UserConfig extends Config = Config> =
  UseCredBuildData<UserConfig>;

type UseCredBuildStore<UserConfig extends Config = Config> = CredBuildApi<UserConfig>;

type PickedStore = Pick<
  AppStore,
  "config" | "dispatch" | "selectedItem" | "permissions" | "history" | "state"
>;

export const generateUseCredBuild = (
  store: PickedStore,
  getState: ReturnType<typeof useAppStoreApi>["getState"]
): UseCredBuildStore => {
  const history: UseCredBuildStore["history"] = {
    back: store.history.back,
    forward: store.history.forward,
    setHistories: store.history.setHistories,
    setHistoryIndex: store.history.setHistoryIndex,
    hasPast: store.history.hasPast(),
    hasFuture: store.history.hasFuture(),
    histories: store.history.histories,
    index: store.history.index,
  };

  const storeData: CredBuildApi = {
    appState: makeStatePublic(store.state),
    config: store.config,
    dispatch: store.dispatch,
    getPermissions: store.permissions.getPermissions,
    refreshPermissions: store.permissions.refreshPermissions,
    resolveDataById: (id, trigger) => resolveDataById(id, getState, trigger),
    resolveDataBySelector: (selector, trigger) =>
      resolveDataBySelector(selector, getState, trigger),
    history,
    selectedItem: store.selectedItem || null,
    getItemBySelector: (selector) => getItem(selector, store.state),
    getItemById: (id) => store.state.indexes.nodes[id].data,
    getSelectorForId: (id) => getSelectorForId(store.state, id),
    getParentById: (id) => {
      const node = store.state.indexes.nodes[id];
      const parentId = node.parentId;
      if (parentId === null) return;
      const parentNode = store.state.indexes.nodes[parentId];
      if (!parentNode) return;
      return parentNode.data;
    },
  };

  (storeData as any).__private = {
    appState: store.state,
  };

  return storeData;
};

export const UseCredBuildStoreContext = createContext<StoreApi<UseCredBuildStore> | null>(
  null
);

const convertToPickedStore = (store: AppStore): PickedStore => {
  return {
    state: store.state,
    config: store.config,
    dispatch: store.dispatch,
    permissions: store.permissions,
    history: store.history,
    selectedItem: store.selectedItem,
  };
};

/**
 * Mirror changes in appStore to useCredBuildStore
 */
export const useRegisterUseCredBuildStore = (
  appStore: ReturnType<typeof useAppStoreApi>
) => {
  const [useCredBuildStore] = useState(() =>
    createStore(() =>
      generateUseCredBuild(
        convertToPickedStore(appStore.getState()),
        appStore.getState
      )
    )
  );

  useEffect(() => {
    // Subscribe here isn't doing anything as selection isn't shallow
    return appStore.subscribe(
      (store) => convertToPickedStore(store),
      (pickedStore) => {
        useCredBuildStore.setState(
          generateUseCredBuild(pickedStore, appStore.getState)
        );
      }
    );
  }, [appStore, useCredBuildStore]);

  return useCredBuildStore;
};

/**
 * createUseCredBuild
 *
 * Create a typed useCredBuild hook, which is necessary because the user may provide a generic type but not
 * a selector type, and TS does not currently support partial inference.
 * Related: https://github.com/microsoft/TypeScript/issues/26242
 *
 * @returns a typed useCredBuild function
 */
export function createUseCredBuild<UserConfig extends Config = Config>() {
  return function useCredBuild<T = CredBuildApi<UserConfig>>(
    selector: (state: UseCredBuildStore<UserConfig>) => T
  ): T {
    const useCredBuildApi = useContext(UseCredBuildStoreContext);

    if (!useCredBuildApi) {
      throw new Error("useCredBuild must be used inside <CredBuild>.");
    }

    const result = useStore(
      useCredBuildApi as unknown as StoreApi<UseCredBuildStore<UserConfig>>,
      selector ?? ((s) => s as T)
    );

    return result;
  };
}

export function useCredBuild<UserConfig extends Config = Config>() {
  useEffect(() => {
    console.warn(
      "You're using the `useCredBuild` method without a selector, which may cause unnecessary re-renders. Replace with `createUseCredBuild` and provide a selector for improved performance."
    );
  }, []);

  return createUseCredBuild<UserConfig>()((s) => s);
}

/**
 * Get the latest state without relying on a render
 *
 * @returns CredBuildApi
 */
export function useGetCredBuild() {
  const useCredBuildApi = useContext(UseCredBuildStoreContext);

  if (!useCredBuildApi) {
    throw new Error("useCredBuildGet must be used inside <CredBuild>.");
  }

  return useCredBuildApi.getState;
}
