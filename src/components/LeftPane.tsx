import React, { useEffect } from 'react';
import styled from 'styled-components';
import { products, customers } from '../data/rawData.js';
import Loader from './base/Loader';
import Text from './base/Text';
import SavedQueries from './SavedQueries';
import { ITable } from '../types/TableTypes.js';

const StyledLeftSidebar = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(background-color-secondary);
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  flex: 1;
  padding: 0px 20px 10px 20px;
  overflow: auto;
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: none;
  }
`;

const StyledTableInfoContainer = styled.div``;

// TODO: Make it an accordion
const StyledTableInfo = styled.div`
  margin-bottom: 20px;
  h4 {
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    padding-left: 10px;
    margin: 0;
    li {
      margin-bottom: 5px;
    }
  }
`;

const StyledSearchInput = styled.input`
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

const LeftPane: React.FC = () => {
  const [tables, setTables] = React.useState<ITable>([]);
  const [searchTerm, setSearchTerm] = React.useState('');

  useEffect(() => {
    const productsTableKeys = Object.keys(products[0]);
    const customersTableKeys = Object.keys(customers[0]);
    // add more tables here

    setTables([{ products: productsTableKeys }, { customers: customersTableKeys }]);
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredTables = tables.filter((table) => {
    const tableName = Object.keys(table)[0];
    const tableHeaders = table[tableName];

    return tableHeaders.some((header: string) => header.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  return (
    <StyledLeftSidebar>
      <Section>
        <StyledInputContainer>
          <StyledSearchInput type="text" value={searchTerm} onChange={handleSearch} placeholder="Search attributes" />
        </StyledInputContainer>
        <StyledTableInfoContainer>
          {tables.length === 0 ? (
            <Loader />
          ) : (
            filteredTables.length === 0 ? (
              <StyledEmptyMessage><Text type='tertiary'>No tables found</Text></StyledEmptyMessage>
            ) : (
              filteredTables.map((table, index) => {
                const tableName = Object.keys(table)[0];
                const tableHeaders = table[tableName];

                return (
                  <StyledTableInfo key={index}>
                    <h4>{tableName}</h4>
                    <ul>
                      {tableHeaders.map((header: string, index: number) => (
                        <li key={index}><Text type='tertiary'>{header}</Text></li>
                      ))}
                    </ul>
                  </StyledTableInfo>
                );
              })
            )
          )}
        </StyledTableInfoContainer>
      </Section>
      <Section>
        <SavedQueries />
      </Section>
    </StyledLeftSidebar>
  );
};

export default LeftPane;