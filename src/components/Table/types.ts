export type TableProps<TData> = {
  /** The Columns configuration of the Table */
  columns: DisplayColumn[];
  /** The Data of the Table */
  data: TableData<TData>;
  /** Size of Row */
  rowSize?: RowSize;
};

export type UseTableProps<TData> = Pick<TableProps<TData>, 'columns' | 'data'>;

/** Columns */

export type DisplayColumn = {
  /** The id of the column; must be the same as the column key in the Data type */
  id: string;
  /** The label of the column on the table */
  header: string;
};

/** Rows & Cells  */

export type TableData<TData> = {
  cells: TData;
}[];

export type RowSize = 'sm' | 'md' | 'lg';
