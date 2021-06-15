export type SortingOrder = 'asc' | 'desc';

export type ExtendedColumn = {
  content: string;
  tooltipContent?: string;
  initialSortOrder?: SortingOrder;
};
