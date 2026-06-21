/** Fallback component. Should not contain any tiptap imports (except for types) */

import DOMPurify from "@/lib/dompurify";
import getClassNameFactory from "@/lib/get-class-name-factory";
import styles from "@/components/RichTextEditor/styles.module.css";

const getClassName = getClassNameFactory("RichTextEditor", styles);

export function RichTextRenderFallback({ content }: { content: string }) {
  return (
    <div className={getClassName()}>
      <div
        className="rich-text"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content, { ADD_ATTR: ['target'] }) }}
      />
    </div>
  );
}
