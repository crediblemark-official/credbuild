import * as react_jsx_runtime from 'react/jsx-runtime';
import { a as Config, U as UserGenerics, M as Metadata } from './actions-CEH_5LMY.mjs';
export { m as migrate, r as resolveAllData, t as transformProps, w as walkTree } from './walk-tree-C78ZVz19.mjs';
import 'react';
import '@tiptap/react';
import '@tiptap/extension-blockquote';
import '@tiptap/extension-bold';
import '@tiptap/extension-code';
import '@tiptap/extension-code-block';
import '@tiptap/extension-hard-break';
import '@tiptap/extension-heading';
import '@tiptap/extension-horizontal-rule';
import '@tiptap/extension-italic';
import '@tiptap/extension-link';
import '@tiptap/extension-list';
import '@tiptap/extension-paragraph';
import '@tiptap/extension-strike';
import '@tiptap/extension-text-align';
import '@tiptap/extension-underline';

declare function Render<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>>({ config, data, metadata, }: {
    config: UserConfig;
    data: G["UserData"];
    metadata?: Metadata;
}): react_jsx_runtime.JSX.Element;

export { Render };
