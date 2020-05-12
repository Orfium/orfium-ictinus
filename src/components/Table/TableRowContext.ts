import { createContext, Context } from 'react';
import { Row, TableType } from './Table';

export type TableRowContextProps<T extends {}> = {
  row: Row<T>;
  columnsHasNumberArr: boolean[];
  columnsWithWidth: number[];
  padded: boolean;
  onSelectionChangeExist: boolean;
  isRowSelected: boolean;
  columnCount: number;
  columns: string[];
  fixedHeader: boolean;
  tChange: () => void;
  type: TableType;
  bordered: boolean;
};

export const TableRowContext = createContext<TableRowContextProps<{}>>({
  row: {
    id: 0,
    cells: [],
  },
  columnsHasNumberArr: [],
  columnsWithWidth: [],
  padded: false,
  onSelectionChangeExist: false,
  isRowSelected: false,
  columnCount: 0,
  columns: [],
  fixedHeader: false,
  tChange: () => {},
  type: 'normal',
  bordered: false,
}) as Context<TableRowContextProps<{}>>;
