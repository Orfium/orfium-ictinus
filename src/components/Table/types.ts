import type { TableOptions } from '@tanstack/react-table';

export type TableProps<TData> = {
  /** The Columns configuration of the Table */
  columns: (DisplayColumn | GroupColumn)[];
  /** The Data of the Table */
  data: TableData<TData>;
  /** Size of Row */
  rowSize?: RowSize;
  /** Columns Configuration */
  columnsConfig?: ColumnsConfig;
};

export type UseTableProps<TData> = Pick<TableProps<TData>, 'columns' | 'data'> &
  Partial<Omit<TableOptions<TData>, 'columns' | 'data'>>;

/** Columns */

export type ColumnsConfig = {
  /** State that indicates which columns are visible: an object where every key is a column id and the value is a boolean indicating whether it is visible or not */
  columnVisibility?: Record<string, boolean>;
  /** Callback for visibility state change */
  setColumnVisibility?: (state: Record<string, boolean>) => void;
};

export type DisplayColumn = {
  /** The id of the column; must be the same as the column key in the Data type */
  id: string;
  /** The label of the column on the table */
  header: string;
  /** Whether the toggle visibility functionality is disabled for this column */
  isAlwaysVisible?: boolean;
};

export type GroupColumn = {
  id: string;
  /** The label of the column on the table */
  header: string;
  /** Sub columns of the group */
  columns: (DisplayColumn | GroupColumn)[];
};

/** Rows & Cells  */

export type TableData<TData> = {
  cells: TData;
}[];

export type RowSize = 'sm' | 'md' | 'lg';
