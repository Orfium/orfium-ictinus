import type React from 'react';
import type { TooltipPlacement } from '~/components/Tooltip/Tooltip.types';

export type ContentComponent<T> = (data: Cell<T>) => React.ReactNode;
export type Cell<T> = {
  /** the content of the cell to be displayed. You can pass also custom component. `ContentComponent: (data: Cell<T>) => React.ReactNode`. The type defines that will be a function that returns cell to use cell data.  */
  content: number | string | ContentComponent<T>;
  /** the truncated tooltip content, you can override it or it will take the content @default content */
  tooltipContent?: string;
  /** show or not the truncated tooltip @default true if the text is truncated */
  hasTruncatedTooltip?: boolean;
  /** the colSpan of the cell to be displayed */
  colSpan?: number;
  /** the type of the cell to be displayed @default normal */
  type?: 'financial' | 'normal';
  /** the alignment of the cell to be displayed */
  align?: 'left' | 'right';
  /** the width of the cell to be displayed */
  widthPercentage?: number;
};

export type Row<T> = {
  /** the id of the row */
  id: string | number;
  /** the cells of the row, see Cell type for each */
  cells: Cell<T>[];
  /** the expanded content of the row, if its expandable */
  expanded?: ({
    row,
    isSelected,
    isExpanded,
  }: {
    row: Row<T>;
    isSelected: boolean;
    isExpanded: boolean;
  }) => React.ReactNode;
  rowSpan?: number;
};

export type Selection = string | number;

export type TableType = 'normal' | 'nested-header';

export type TablePropsV4<T> = {
  /** The data for the table that needs to display. */
  data: Row<T>[];
  /** An array of titles or objects to define columns. */
  columns: (string | ExtendedColumn)[];
  /** Boolean defining if the header is fixed or not. */
  hasFixedHeader?: boolean;
  /** Boolean defining if the CTA's container is fixed or not. */
  hasFixedCTA?: boolean;
  /** Type of the table which determine the headers display. */
  type?: TableType;
  /** Boolean defining the padding all over the table cells and rows. */
  isPadded?: boolean;
  /** Function that once provided on each check will return the selection. */
  onCheck?: (data: Selection[]) => void;
  /** Function that once provided will provide the currently selected sorting configuration */
  onSort?: (column: string, order: SortingOrder) => void;
  /** Initial sorting column and order. Should be provided along with onSort */
  initialSort?: Sort;
  /** If provided sort will only work with this option (asc or desc only). By default supports bidirectional sort*/
  sortDir?: SortingOrder;
  /** Top left text on the table - showing a counter, text etc. */
  topLeftText?: string | React.ReactElement;
  /** Top right area to define a custom component for buttons or other usage. */
  topRightArea?: (data: Row<T>[], selectionData?: Selection[]) => React.ReactNode;
  /** Action cell width for Table with Expandable Rows (in %)*/
  actionWidth?: number;
  /** If true, table's expandable rows will be expanded on initial render. */
  isInitiallyExpanded?: boolean;
  /** Data test id prefix for all th/td elements */
  dataTestIdPrefix?: string;
};

export type SortingOrder = 'asc' | 'desc';

export type ExtendedColumn = {
  content: {
    label: string;
    sortingKey: string;
  };
  tooltip?: {
    content: string;
    placement?: TooltipPlacement;
  };
  isSortable?: boolean;
};

export type Sort = {
  column: string;
  order: SortingOrder;
};
