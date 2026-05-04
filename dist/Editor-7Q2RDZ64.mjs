import {
  CredBuildRichText
} from "./chunk-YWDTJACI.mjs";
import {
  EditorInner,
  LoadedRichTextMenu
} from "./chunk-PAA3NMJP.mjs";
import "./chunk-6MZLFUXA.mjs";
import "./chunk-IA6OZJKO.mjs";
import "./chunk-5HVA2ODB.mjs";
import "./chunk-TH35N27N.mjs";
import "./chunk-X7EHBO34.mjs";
import {
  useAppStore,
  useAppStoreApi
} from "./chunk-D4FREKRG.mjs";
import "./chunk-MQAN4F4B.mjs";
import "./chunk-QGRPODT7.mjs";
import "./chunk-CYQ2TPPM.mjs";
import "./chunk-Y5AAKZ45.mjs";
import {
  __spreadProps,
  __spreadValues,
  init_react_import
} from "./chunk-2TADFG6T.mjs";

// components/RichTextEditor/components/Editor.tsx
init_react_import();
import { memo, useMemo } from "react";

// components/RichTextEditor/lib/use-synced-editor.ts
init_react_import();
import { useEditor } from "@tiptap/react";
import { useEffect, useRef } from "react";
import { useDebounce } from "use-debounce";
function useSyncedEditor({
  content,
  onChange,
  extensions,
  editable = true,
  onFocusChange,
  name
}) {
  const [debouncedState, setDebouncedState] = useDebounce(null, 50, {
    leading: true,
    maxWait: 200
  });
  const syncingRef = useRef(false);
  const lastSyncedRef = useRef("");
  const editTimer = useRef(null);
  const isPending = !!editTimer.current;
  const isFocused = useAppStore((s) => s.state.ui.field.focus === name);
  const resetTimer = (clearOn) => {
    if (editTimer.current) {
      clearTimeout(editTimer.current);
    }
    editTimer.current = setTimeout(() => {
      if (lastSyncedRef.current === clearOn) {
        editTimer.current = null;
      }
    }, 200);
  };
  const appStoreApi = useAppStoreApi();
  const editor = useEditor({
    extensions,
    content,
    editable,
    immediatelyRender: false,
    parseOptions: { preserveWhitespace: "full" },
    onUpdate: ({ editor: editor2 }) => {
      if (syncingRef.current || !isFocused) {
        appStoreApi.getState().setUi({ field: { focus: name } });
        return;
      }
      const html = editor2.getHTML();
      const { from, to } = editor2.state.selection;
      setDebouncedState({ from, to, html });
      resetTimer(html);
      lastSyncedRef.current = html;
    }
  });
  useEffect(() => {
    if (!editor) return;
    const handleFocus = () => {
      onFocusChange == null ? void 0 : onFocusChange(editor);
    };
    editor.on("focus", handleFocus);
    return () => {
      editor.off("focus", handleFocus);
    };
  }, [editor, onFocusChange]);
  useEffect(() => {
    if (debouncedState) {
      const { ui } = appStoreApi.getState().state;
      onChange(debouncedState.html, {
        field: __spreadProps(__spreadValues({}, ui.field), {
          metadata: { from: debouncedState.from, to: debouncedState.to }
        })
      });
    }
  }, [editor, debouncedState, onChange, appStoreApi, name]);
  useEffect(() => {
    editor == null ? void 0 : editor.setEditable(editable);
  }, [editor, editable]);
  useEffect(() => {
    var _a;
    if (!editor) return;
    if (isPending) {
      return;
    }
    const current = editor.getHTML();
    if (current === content) return;
    syncingRef.current = true;
    editor.commands.setContent(content, { emitUpdate: false });
    const { ui } = appStoreApi.getState().state;
    if (typeof ((_a = ui.field.metadata) == null ? void 0 : _a.from) !== "undefined") {
      editor.commands.setTextSelection({
        from: ui.field.metadata.from,
        to: ui.field.metadata.to
      });
    }
    syncingRef.current = false;
  }, [content, editor, appStoreApi, isPending]);
  return editor;
}

// components/RichTextEditor/components/Editor.tsx
import { EditorContent } from "@tiptap/react";
import { jsx } from "react/jsx-runtime";
var Editor = memo((props) => {
  const {
    onChange,
    content,
    readOnly = false,
    field,
    inline = false,
    onFocus,
    id,
    name
  } = props;
  const { tiptap = {}, options } = field;
  const { extensions = [] } = tiptap;
  const loadedExtensions = useMemo(
    () => [CredBuildRichText.configure(options), ...extensions],
    [extensions, options]
  );
  const appStoreApi = useAppStoreApi();
  const focusName = `${name}${inline ? "::inline" : ""}`;
  const editor = useSyncedEditor({
    content,
    onChange,
    extensions: loadedExtensions,
    editable: !readOnly,
    name: focusName,
    onFocusChange: (editor2) => {
      if (editor2) {
        const s = appStoreApi.getState();
        appStoreApi.setState({
          currentRichText: {
            field,
            editor: editor2,
            id,
            inline
          },
          state: __spreadProps(__spreadValues({}, s.state), {
            ui: __spreadProps(__spreadValues({}, s.state.ui), {
              field: __spreadProps(__spreadValues({}, s.state.ui.field), {
                focus: focusName
              })
            })
          })
        });
        onFocus == null ? void 0 : onFocus(editor2);
      }
    }
  });
  const menuEditor = useAppStore((s) => {
    var _a, _b;
    if (!inline && ((_a = s.currentRichText) == null ? void 0 : _a.id) === id && ((_b = s.currentRichText) == null ? void 0 : _b.inlineComponentId)) {
      return s.currentRichText.editor;
    }
    return editor;
  });
  if (!editor) return null;
  return /* @__PURE__ */ jsx(
    EditorInner,
    __spreadProps(__spreadValues({}, props), {
      editor,
      menu: /* @__PURE__ */ jsx(
        LoadedRichTextMenu,
        {
          field,
          editor: menuEditor,
          readOnly
        }
      ),
      children: /* @__PURE__ */ jsx(EditorContent, { editor, className: "rich-text" })
    })
  );
});
Editor.displayName = "Editor";
export {
  Editor
};
