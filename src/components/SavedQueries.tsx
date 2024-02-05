import React from 'react';
import styled from 'styled-components';
import Text from './base/Text';
import { useSqlEditor } from '../context/SQLEditorContext';

const SavedQueriesContainer = styled.div`

`;

const QueryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const QueryListItem = styled.li`
  margin-bottom: 8px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const SavedQueries: React.FC = () => {
  const { savedQueries, setNewActiveQuery } = useSqlEditor();
  const sqlQueries: string[] = savedQueries;

  const handleQueryClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setNewActiveQuery(e.currentTarget.textContent || '');
  }

  return (
    <SavedQueriesContainer>
      <h4>Saved Queries</h4>
      {sqlQueries.length === 0 ? (
        <Text type='tertiary'>No queries available</Text>
      ) : (
        <QueryList>
          {sqlQueries.map((query: string, index: number) => (
            <QueryListItem onClick={(e) => handleQueryClick(e)} key={index}>{query}</QueryListItem>
          ))}
        </QueryList>
      )}
    </SavedQueriesContainer>
  );
};

export default SavedQueries;
