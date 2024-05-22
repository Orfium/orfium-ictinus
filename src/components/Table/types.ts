import type { CSSObject } from '@emotion/react';
import type {
  SortingState,
  OnChangeFn,
  RowSelectionState,
  ExpandedState,
} from '@tanstack/react-table';

import type { SelectOptionValues } from 'components/Select';

export type TableProps<TData> = {
  /** If table is interactive, rows are selectable with actions */
  type?: 'interactive' | 'read-only';
  /** The Columns configuration of the Table */
  // Columns Type for Group Headers: columns: (DisplayColumn | GroupColumn)[];
  columns: DisplayColumn[];
  /** The Data of the Table */
  data: TableData<TData>;
  /** Size of Row */
  rowSize?: RowSize;
  /** Columns Configuration */
  columnsConfig?: ColumnsConfig;
  /** Rows Configuration */
  rowsConfig?: RowsConfig;
  /** Sorting Configuration */
  sorting?: SortingConfig;
  /** Whether the table has a sticky header and scrollable tbody */
  hasStickyHeader?: boolean;
  /** Pagination config */
  pagination?: PaginationConfig;
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

export type UseTableProps<TData> = Pick<
  TableProps<TData>,
  'columns' | 'data' | 'sorting' | 'rowsConfig' | 'columnsConfig'
> &
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

export type RowsConfig = {
  /** Whether a rows counter should be displayed, regardless of row selection functionality */
  hasRowsCount?: boolean;
  /** State which indicated which rows are selected */
  rowSelection?: RowSelectionState;
  /** Callback for row selection state change */
  setRowSelection?: (state: RowSelectionState) => void;
  /** Default action for rows */
  defaultAction?: JSX.Element;
  /** Bulk actions for rows */
  bulkActions?: JSX.Element;
  /** Expanded State */
  expanded?: ExpandedState;
  /** Callback for expanded state change */
  setExpanded?: OnChangeFn<ExpandedState>;
};

/** Pagination */

export type PaginationConfig = {
  /** The current page displayed */
  page: number;
  /** Total pages count */
  totalPages: number;
  /** OnChange callback for next/prev buttons */
  onChange: (page: number) => void;
  /** Whether go-to-first-page and go-to-last-page buttons are visible */
  isEnhancedPaginationVisible?: boolean;
  /** Manually disable next page */
  isNextPageDisabled?: boolean;
  /** Manually disable previous page */
  isPrevPageDisabled?: boolean;
  /** Show items per page list options */
  itemsPerPageOptions?: Omit<SelectOptionValues, 'iconProps'>[];
  /** Show items per page list selected option */
  itemsPerPage?: Omit<SelectOptionValues, 'iconProps'>;
  /** Show items per page list change callback */
  onItemsPerPageChange?: (option: Omit<SelectOptionValues, 'iconProps'>) => void;
};

export type TableData<TData> = {
  /** The visible cells of the row */
  cells: TData;
  /** Details component which is displayed when clicking the arrow button */
  details?: JSX.Element;
}[];

export type RowSize = 'sm' | 'md' | 'lg';
