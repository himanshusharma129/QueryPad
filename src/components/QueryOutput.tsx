import React from 'react';
import { Table, Column, AutoSizer } from 'react-virtualized';
import styled from 'styled-components';
import 'react-virtualized/styles.css'
import Text from './base/Text';
import Button from './base/Button';
import { ITableProps } from '../types/TableTypes';

const TableContainer = styled.div`
  width: 100%;
  flex: 1;
`;

const StyledHeaderCell = styled.div`
  background-color: var(--brand-color);
  color: white;
  padding: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0px -10px 0 -10px !important;
`;

const StyledCell = styled.div`
  padding: 8px;
  border-bottom: 1px solid #ecf0f1;
  border-right: 1px solid #ecf0f1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: var(--background-color-secondary);
  color: var(--primary-font-color);
`;

const StyledEmptyOutput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 200px;
`;

const StyledMetaContainer = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const VirtualizedDataTable: React.FC<ITableProps> = ({ data }) => {
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  if (data.length === 0 || columns.length === 0) {
    return (
      <StyledEmptyOutput>
        <Text type='tertiary' color='rgba(0,0,0,.35)' fontSize='2em' weight='700'>
          Run a query to see some results
        </Text>
      </StyledEmptyOutput>
    );
  }

  const downloadDataAsCSV = () => {
    const csvData = [columns.join(',')].concat(
      data.map((row) => Object.values(row).join(','))
    ).join('\n');
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.csv';
    link.click();
  };

  return (
    <TableContainer>
      <StyledMetaContainer>
        <Text type='tertiary'>
          <Text type='tertiary' fontStyle='italic'>{`Fetched ${data.length} rows in 0.01sec`}</Text>
        </Text>
        <Button type='tertiary' onClick={downloadDataAsCSV}>Export</Button>
      </StyledMetaContainer>
      <AutoSizer>
        {({ width, height }: any) => (
          <Table
            headerHeight={40}
            height={height}
            rowCount={data.length}
            rowGetter={({ index }: { index: number }) => data[index]}
            rowHeight={40}
            width={width}
            headerClassName="header"
            rowClassName="row"
            overscanRowCount={10}
          >
            {columns.map((column) => (
              <Column
                key={column}
                label={column}
                dataKey={column}
                width={250}
                cellRenderer={({ cellData }: { cellData: string }) => <StyledCell>{cellData}</StyledCell>}
                headerRenderer={() => <StyledHeaderCell>{column}</StyledHeaderCell>}
              />
            ))}
          </Table>
        )}
      </AutoSizer>
    </TableContainer>
  );
};

export default VirtualizedDataTable;
