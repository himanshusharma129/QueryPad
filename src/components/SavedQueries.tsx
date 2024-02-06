import React, { useState } from 'react';
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
  word-wrap: break-word;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: var(--primary-color);
  }
`;

const StyledEmptyMessage = styled.div`
  margin-top: 16px;
`;

const SavedQueries: React.FC = () => {
  const { savedQueries, setNewActiveQuery } = useSqlEditor();
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setNewActiveQuery(e.currentTarget.textContent || '');
  }

  const filteredQueries = savedQueries.filter(query =>
    query.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SavedQueriesContainer>
      <h4>Saved Queries</h4>
      <StyledInput
        type="text"
        placeholder="Search queries"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredQueries.length === 0 ? (
        <StyledEmptyMessage><Text type='tertiary'>No queries found</Text></StyledEmptyMessage>
      ) : (
        <QueryList>
          {filteredQueries.map((query: string, index: number) => (
            <QueryListItem onClick={(e) => handleQueryClick(e)} key={index}>{query}</QueryListItem>
          ))}
        </QueryList>
      )}
    </SavedQueriesContainer>
  );
};

export default SavedQueries;