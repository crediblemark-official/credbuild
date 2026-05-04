import { useAppStoreApi } from "../../store";
import { ResolveDataTrigger } from "../../types";
import { CredBuildNodeData } from "../../types/Internal";
import { resolveAndReplaceData } from "./resolve-and-replace-data";

export async function resolveDataById(
  id: string,
  getState: ReturnType<typeof useAppStoreApi>["getState"],
  trigger?: ResolveDataTrigger
) {
  const node: CredBuildNodeData | undefined = getState().state.indexes.nodes[id];

  if (!node) {
    console.warn(
      `Warning: Could not find component with id "${id}" to resolve its data. Component may have been removed or the id is invalid.`
    );
    return;
  }

  await resolveAndReplaceData(node.data, getState, trigger);
}
