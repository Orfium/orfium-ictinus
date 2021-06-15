export type SortingOrder = 'asc' | 'desc';

export type ExtendedColumn = {
  content: string;
  tooltipContent?: string;
  isSortable?: boolean;
};

export type Sort = {
  column: string;
  order: SortingOrder;
};
