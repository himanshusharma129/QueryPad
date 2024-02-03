import React, { useEffect } from 'react';
import styled from 'styled-components';
import { products, customers } from '../data/rawData.js';
import Loader from './base/Loader.tsx';

const StyledLeftSidebar = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(background-color-secondary);
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  flex: 1;
  padding: 20px;
  border-bottom: 1px solid var(--primary-color);
  overflow: auto;

  &:last-child {
    border-bottom: none;
  }
`;

interface TableItem {
  [key: string]: string[];
}



const LeftPane: React.FC = () => {
  const [tables, setTable] = React.useState<Array<TableItem>>([]);

  useEffect(() => {
    const productsTableKeys = Object.keys(products[0]),
      customersTableKeys = Object.keys(customers[0]); // add more tables here
    
    setTable([{ products: productsTableKeys }, { customers: customersTableKeys }]);
  }, []);

  return (
    <StyledLeftSidebar>
      <Section>
        {tables.length === 0 ? (
          <Loader />
        ) : (
          tables.map((table, index) => {
            console.log(table, index);
            const tableName = Object.keys(table)[0],
              tableHeaders = table[tableName];

            return (
            
            <Section key={index}>
              <h2>{tableName}</h2>
              <ul>
                {tableHeaders.map((header, index) => (
                  <li key={index}>{header}</li>
                ))}
              </ul>              
            </Section>
          )})
        )}
      </Section>
      <Section>
        <h2>Section 2</h2>
        <p>This is the content for the second section.</p>
      </Section>
    </StyledLeftSidebar>
  );
};

export default LeftPane;
