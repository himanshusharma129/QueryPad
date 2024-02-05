import React from 'react';
import MonacoEditor, { monaco } from 'react-monaco-editor';
import { useSqlEditor } from '../context/SQLEditorContext';
import { debounce } from '../utils/Utils';

const SQLQueryEditor: React.FC = () => {
  const { activeQuery, setNewActiveQuery } = useSqlEditor();

  const editorOptions: monaco.editor.IEditorOptions = {
    selectOnLineNumbers: true,
    automaticLayout: true,
    minimap: {
        enabled: false,
    },
  };

  const debouncedSetQuery = debounce((query: string) => setNewActiveQuery(query), 300);

  return (
    <MonacoEditor
      language="sql"
      theme="vs-light"
      options={editorOptions}
      height="200px"
      value={activeQuery}
      onChange={(value) => {
        debouncedSetQuery(value);
      }}
    />
  );
};

export default SQLQueryEditor;