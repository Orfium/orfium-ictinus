import type { CSSObject } from '@emotion/react';
import type { SortingState, OnChangeFn } from '@tanstack/react-table';

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
  /** Sorting Configuration */
  sorting?: SortingConfig;
  /** Whether the table has a sticky header and scrollable tbody */
  hasStickyHeader?: boolean;
  /** Style overrides for Table component and subcomponents */
  sx?: {
    table?: CSSObject;
    thead?: CSSObject;
    tbody?: CSSObject;
    th?: CSSObject;
    tr?: CSSObject;
    td?: CSSObject;
  };
};

export type UseTableProps<TData> = Pick<TableProps<TData>, 'columns' | 'data' | 'sorting'> &
  Partial<Omit<TableProps<TData>, 'columns' | 'data'>>;

/** Columns */

export type SortingConfig = {
  /** The Sorting Column State */
  sortingColumn: SortingState;
  /** Callback to change the Sorting Column State */
  handleSorting: OnChangeFn<SortingState>;
  /** Whether multi-sorting is enabled */
  isMultiSortable?: boolean;
};

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
  /** Whether the column is sortable */
  isSortable?: boolean;
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

export type TableData<TData> = TData[];

export type RowSize = 'sm' | 'md' | 'lg';
