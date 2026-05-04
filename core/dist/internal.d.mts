import { Reducer } from 'react';
import { D as Data, A as AppState, O as OnAction, P as PrivateAppState, C as CredBuildAction } from './actions-CEH_5LMY.mjs';
import { A as AppStore } from './index-Cxwg4vUV.mjs';
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

type StateReducer<UserData extends Data = Data> = Reducer<PrivateAppState<UserData>, CredBuildAction>;
declare function createReducer<UserData extends Data>({ record, onAction, appStore, }: {
    record?: (appState: AppState<UserData>) => void;
    onAction?: OnAction<UserData>;
    appStore: AppStore;
}): StateReducer<UserData>;

export { createReducer };
