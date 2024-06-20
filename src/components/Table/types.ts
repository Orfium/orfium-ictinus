import type { CSSObject } from '@emotion/react';
import type {
  SortingState,
  OnChangeFn,
  RowSelectionState,
  ExpandedState,
} from '@tanstack/react-table';

import type { SelectOptionValues } from 'components/Select';

import type { TestProps } from '~/utils/types';

export type NoUndefined<T> = {
  [K in keyof T]-?: Exclude<T[K], undefined>;
};

export { SortingState, ExpandedState };

export type TableProps<TData extends NoUndefined<TData>> = {
  /** If table is interactive, rows are selectable with actions */
  type?: 'interactive' | 'read-only';
  /** The Columns configuration of the Table */
  // Columns Type for Group Headers: columns: (DisplayColumn | GroupColumn)[];
  columns: TableColumn<TData>[];
  /** The Data of the Table */
  data: TableRow<TData>[];
  /** Size of Row */
  rowSize?: RowSize;
  /** Columns Configuration */
  columnsConfig?: ColumnsConfig<TData>;
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
} & TestProps;

export type UseTableProps<TData extends NoUndefined<TData>> = Pick<
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

export type ColumnsConfig<TData> = {
  /** State that indicates which columns are visible: an object where every key is a column id and the value is a boolean indicating whether it is visible or not */
  columnVisibility?: Record<keyof TData, boolean>;
  /** Callback for visibility state change */
  setColumnVisibility?: (state: Record<keyof TData, boolean>) => void;
};

export type ContentAlign = 'left' | 'center' | 'right';

export type TableColumn<TData> = {
  /** The id of the column; must be the same as the column key in the Data type */
  id: keyof TData;
  /** The label of the column on the table */
  header: string;
  /** Whether the toggle visibility functionality is disabled for this column */
  isAlwaysVisible?: boolean;
  /** Whether the column is sortable */
  isSortable?: boolean;
  /** The width of the column (value is percentage number e.g. 25) */
  width?: number;
  /** Content align inside the td */
  contentAlign?: ContentAlign;
};

// export type GroupColumn<TData> = {
//   /** The id of the group of columns */
//   id: keyof TData;
//   /** The label of the column on the table */
//   header: string;
//   /** Sub columns of the group */
//   columns: (DisplayColumn<TData> | GroupColumn<TData>)[];
// };

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

export type TableRow<TData extends NoUndefined<TData>> = {
  /** The visible cells of the row */
  cells: TData;
  /** Details component which is displayed when clicking the arrow button */
  details?: JSX.Element;
};

export type RowSize = 'sm' | 'md' | 'lg';

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
  showItemsOptions?: Omit<SelectOptionValues, 'iconProps'>[];
  /** Show items per page list selected option */
  showItems?: Omit<SelectOptionValues, 'iconProps'>;
  /** Show items per page list change callback */
  onShowItemsChange?: (option: Omit<SelectOptionValues, 'iconProps'>) => void;
};
