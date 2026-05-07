/* eslint-disable react-hooks/rules-of-hooks */
import { createUseCredBuild } from "./use-credbuild";
import { Plugin } from "@/types";
import { ActionBar } from "@/components/ActionBar";
import { IconButton } from "@/components/IconButton";
import { LogsIcon } from "lucide-react";
import { useAppStoreApi } from "@/store";

const useCredBuild = createUseCredBuild();

export const debugPlugin: Plugin = {
  overrides: {
    actionBar: ({ children, parentAction }) => {
      const item = useCredBuild((s) => s.selectedItem);
      return (
        <ActionBar>
          <ActionBar.Group>
            {parentAction}
            <ActionBar.Label label={item?.props.id} />
          </ActionBar.Group>

          <ActionBar.Group>{children}</ActionBar.Group>
          <ActionBar.Group>
            <ActionBar.Action
              onClick={() => {
                if (typeof window !== "undefined") {
                  (window as unknown as Record<string, unknown>).log = item;
                }
              }}
            >
              <LogsIcon />
            </ActionBar.Action>
          </ActionBar.Group>
        </ActionBar>
      );
    },
    headerActions: ({ children }) => {
      const appStoreApi = useAppStoreApi();

      return (
        <>
          <IconButton
            onClick={() => {
              if (typeof window !== "undefined") {
                (window as unknown as Record<string, unknown>).log = appStoreApi.getState();
              }
            }}
            title="Log state"
          >
            <LogsIcon />
          </IconButton>
          {children}
        </>
      );
    },
  },
};
