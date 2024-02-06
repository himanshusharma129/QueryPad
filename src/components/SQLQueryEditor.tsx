import React from 'react';
// import MonacoEditor, { monaco } from 'react-monaco-editor';
import { useSqlEditor } from '../context/SQLEditorContext';
import { debounce } from '../utils/Utils';
import styled from 'styled-components';

const StyledInput = styled.textarea<{ isMobile: boolean}>`
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  height: ${(props) => props.isMobile ? '100px' : '200px'};
  resize: none;

  &:focus {
    border-color: var(--primary-color);
  }
`;



const SQLQueryEditor: React.FC = () => {
  const { activeQuery, setNewActiveQuery, isMobile } = useSqlEditor();

  // const editorOptions: monaco.editor.IEditorOptions = {
  //   selectOnLineNumbers: true,
  //   automaticLayout: true,
  //   minimap: {
  //       enabled: false,
  //   },
  // };

  const debouncedSetQuery = debounce((query: string) => setNewActiveQuery(query), 50);

  return (
    <StyledInput aria-label='sql-editor' isMobile={isMobile} value={activeQuery} onChange={(e) => debouncedSetQuery(e.target.value)} />
  );

  // commented Monaco and used simple text editor to boost performance
  // return (
  //   <MonacoEditor
  //     language="sql"
  //     theme="vs-light"
  //     options={editorOptions}
  //     height="200px"
  //     value={activeQuery}
  //     onChange={(value) => {
  //       debouncedSetQuery(value);
  //     }}
  //   />
  // );
};

export default SQLQueryEditor;