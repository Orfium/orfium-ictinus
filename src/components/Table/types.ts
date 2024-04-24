import type { TableOptions } from '@tanstack/react-table';

export type TableProps<TData> = {
  /** The Columns configuration of the Table */
  // Columns Type for Group Headers: columns: (DisplayColumn | GroupColumn)[];
  columns: DisplayColumn[];
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
  /** The width of the column (value is percentage number e.g. 25) */
  width?: number;
};

export type GroupColumn = {
  /** The id of the group of columns */
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
