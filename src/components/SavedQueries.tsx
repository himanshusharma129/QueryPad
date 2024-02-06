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
  background-color: var(--background-color-primary);
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  color: var(--primary-font-color);
  cursor: pointer;
  word-wrap: break-word;
  &:hover {
    background-color: var(--background-highlight-color);
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

const StyledInputContainer = styled.div`  
  position: sticky;
  top: 0;
  background-color: var(--background-color-secondary);
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  padding-top: 10px;
`;

const StyledEmptyMessage = styled.div`
  margin-top: 16px;
`;

const StyledHeading = styled.h4`
  margin-block-end: 0;
  color: var(--primary-font-color);
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
      <StyledHeading>Saved Queries</StyledHeading>
      <StyledInputContainer>
        <StyledInput
          type="text"
          placeholder="Search queries"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </StyledInputContainer>
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