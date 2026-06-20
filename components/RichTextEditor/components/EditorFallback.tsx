/** Fallback component. Should not contain any tiptap imports (except for types) */

import { memo } from "react";
import DOMPurify from "@/lib/dompurify";
import { EditorProps } from "@/components/RichTextEditor/types";
import { LoadedRichTextMenuInner } from "@/components/RichTextMenu/inner";
import { EditorInner } from "@/components/RichTextEditor/components/EditorInner";

export const EditorFallback = memo((props: EditorProps) => {
  return (
    <EditorInner
      {...props}
      editor={null}
      menu={
        <LoadedRichTextMenuInner
          field={props.field}
          editor={null}
          editorState={null}
          readOnly={props.readOnly ?? false}
        />
      }
    >
      <div
        className="rich-text"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.content) }}
        contentEditable
      />
    </EditorInner>
  );
});

EditorFallback.displayName = "EditorFallback";
