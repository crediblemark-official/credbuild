import { getDeep } from "@/lib/data/get-deep";
import { useFieldStore } from "@/components/AutoField/store";

export const useDeepField = (path: string) => {
  return useFieldStore((s) => getDeep(s, path));
};
