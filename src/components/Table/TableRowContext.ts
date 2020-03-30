import { createContext } from 'react';
import { Row, TableType } from './Table';

export type TableRowContextProps<T extends {}> = {
  row: Row<T>;
  columnsHasNumberArr: boolean[];
  padded: boolean;
  onSelectionChangeExist: boolean;
  isRowSelected: boolean;
  columnCount: number;
  columns: string[];
  fixedHeader: boolean;
  tChange: () => void;
  type: TableType;
};

export const TableRowContext = createContext<TableRowContextProps<{}>>({
  row: {
    id: 0,
    cells: [],
  },
  columnsHasNumberArr: [],
  padded: false,
  onSelectionChangeExist: false,
  isRowSelected: false,
  columnCount: 0,
  columns: [],
  fixedHeader: false,
  tChange: () => {},
  type: 'normal',
});
