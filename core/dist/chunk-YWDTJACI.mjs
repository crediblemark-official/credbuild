import {
  __spreadValues,
  init_react_import
} from "./chunk-2TADFG6T.mjs";

// components/RichTextEditor/extension.ts
init_react_import();
import { Extension } from "@tiptap/core";
import { Blockquote } from "@tiptap/extension-blockquote";
import { Bold } from "@tiptap/extension-bold";
import { Code } from "@tiptap/extension-code";
import { CodeBlock } from "@tiptap/extension-code-block";
import { Document } from "@tiptap/extension-document";
import { HardBreak } from "@tiptap/extension-hard-break";
import { Heading } from "@tiptap/extension-heading";
import { HorizontalRule } from "@tiptap/extension-horizontal-rule";
import { Italic } from "@tiptap/extension-italic";
import { Link } from "@tiptap/extension-link";
import {
  BulletList,
  ListItem,
  ListKeymap,
  OrderedList
} from "@tiptap/extension-list";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Strike } from "@tiptap/extension-strike";
import { Text } from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import { Underline } from "@tiptap/extension-underline";
var defaultCredBuildRichTextOptions = {
  textAlign: {
    types: ["heading", "paragraph"]
  }
};
var CredBuildRichText = Extension.create({
  name: "credbuildRichText",
  addExtensions() {
    const extensions = [];
    const options = __spreadValues(__spreadValues({}, this.options), defaultCredBuildRichTextOptions);
    if (options.bold !== false) {
      extensions.push(Bold.configure(options.bold));
    }
    if (options.blockquote !== false) {
      extensions.push(Blockquote.configure(options.blockquote));
    }
    if (options.code !== false) {
      extensions.push(Code.configure(options.code));
    }
    if (options.codeBlock !== false) {
      extensions.push(CodeBlock.configure(options.codeBlock));
    }
    if (options.document !== false) {
      extensions.push(Document.configure(options.document));
    }
    if (options.hardBreak !== false) {
      extensions.push(HardBreak.configure(options.hardBreak));
    }
    if (options.heading !== false) {
      extensions.push(Heading.configure(options.heading));
    }
    if (options.horizontalRule !== false) {
      extensions.push(HorizontalRule.configure(options.horizontalRule));
    }
    if (options.italic !== false) {
      extensions.push(Italic.configure(options.italic));
    }
    if (options.listItem !== false) {
      extensions.push(ListItem.configure(options.listItem));
      if (options.bulletList !== false) {
        extensions.push(BulletList.configure(options.bulletList));
      }
      if (options.orderedList !== false) {
        extensions.push(OrderedList.configure(options.orderedList));
      }
    }
    if (options.listKeymap !== false) {
      extensions.push(ListKeymap.configure(options == null ? void 0 : options.listKeymap));
    }
    if (options.link !== false) {
      extensions.push(Link.configure(options == null ? void 0 : options.link));
    }
    if (options.paragraph !== false) {
      extensions.push(Paragraph.configure(options.paragraph));
    }
    if (options.strike !== false) {
      extensions.push(Strike.configure(options.strike));
    }
    if (options.text !== false) {
      extensions.push(Text.configure(options.text));
    }
    if (options.textAlign !== false) {
      extensions.push(TextAlign.configure(options.textAlign));
    }
    if (options.underline !== false) {
      extensions.push(Underline.configure(options == null ? void 0 : options.underline));
    }
    return extensions;
  }
});

export {
  CredBuildRichText
};
