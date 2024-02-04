import React from 'react';
import styled from 'styled-components';
import Text from './base/Text';

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
`;

const SavedQueries: React.FC = () => {
    const sqlQueries: string[] = ['SELECT * FROM users', 'SELECT * FROM products', 'SELECT * FROM orders',
    'SELECT * FROM users', 'SELECT * FROM products', 'SELECT * FROM orders',
    'SELECT * FROM users', 'SELECT * FROM products', 'SELECT * FROM orders',
    'SELECT * FROM users', 'SELECT * FROM products', 'SELECT * FROM orders',
    'SELECT * FROM users', 'SELECT * FROM products', 'SELECT * FROM orders',
    'SELECT * FROM users', 'SELECT * FROM products', 'SELECT * FROM orders',
    'SELECT * FROM users', 'SELECT * FROM products', 'SELECT * FROM orders'
];

  return (
    <SavedQueriesContainer>
      <h4>Saved Queries</h4>
      {sqlQueries.length === 0 ? (
        <Text type='tertiary'>No queries available</Text>
      ) : (
        <QueryList>
          {sqlQueries.map((query: string, index: number) => (
            <QueryListItem key={index}>{query}</QueryListItem>
          ))}
        </QueryList>
      )}
    </SavedQueriesContainer>
  );
};

export default SavedQueries;
