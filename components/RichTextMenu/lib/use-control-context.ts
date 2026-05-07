import { createContext, useContext } from "react";
import { EditorState } from "@/components/RichTextEditor/types";
import type { Editor } from "@tiptap/react";
import type { CredBuildRichTextOptions } from "@/components/RichTextEditor/extension";

type ControlContextType = {
  editor: Editor | null;
  editorState: EditorState | null;
  inline: boolean;
  readOnly: boolean;
  options?: Partial<CredBuildRichTextOptions>;
};

export const ControlContext = createContext<Partial<ControlContextType>>({});

export const useControlContext = () => {
  return useContext(ControlContext) as ControlContextType;
};
