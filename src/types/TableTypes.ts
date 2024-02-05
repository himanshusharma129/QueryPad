export interface ITableRow {
    [key: string]: any;
}

export type ITable = ITableRow[];
  
export interface ITableProps {
    data: ITableRow[] | [];
}
  