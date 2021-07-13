import { TooltipPlacement } from '../Tooltip/Tooltip';

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
