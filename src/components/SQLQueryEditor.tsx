import React from 'react';
import MonacoEditor, { monaco } from 'react-monaco-editor';

const SQLQueryEditor: React.FC = () => {
  const editorOptions: monaco.editor.IEditorOptions = {
    selectOnLineNumbers: true,
    automaticLayout: true,
    minimap: {
        enabled: false,
    },
  };

  return (
    <MonacoEditor
      language="sql"
      theme="vs-light"
      options={editorOptions}
      height="200px"
      value={'SELECT * FROM products;'}
      onChange={(value, event) => {
        console.log('### value', value, event);
      }}
    />
  );
};

export default SQLQueryEditor;