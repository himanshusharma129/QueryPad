import React from 'react';
import { Table, Column, AutoSizer } from 'react-virtualized';
import styled from 'styled-components';
import 'react-virtualized/styles.css'

interface TableRow {
  [key: string]: any;
}

interface TableProps {
  data: TableRow[];
}

const TableContainer = styled.div`
  width: 100%;
  height: 600px;
`;

const StyledHeaderCell = styled.div`
  background-color: var(--primary-color);
  color: #ffffff;
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
`;

const VirtualizedDataTable: React.FC<TableProps> = ({ data }) => {
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <TableContainer>
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
