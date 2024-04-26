import * as React from 'react';

import { Row, TableType } from './Table';
import { ExtendedColumn } from 'components/Table/types';

export type TableRowContextProps<T extends { [key: string]: unknown }> = {
  row: Row<T>;
  columnsWithWidth: number[];
  padded: boolean;
  onSelectionChangeExist: boolean;
  isRowSelected: boolean;
  columnCount: number;
  columns: (string | ExtendedColumn)[];
  fixedHeader: boolean;
  tChange: () => void;
  type: TableType;
  bordered: boolean;
  actionWidth?: number;
};

export const TableRowContext = React.createContext<
  TableRowContextProps<{ [key: string]: unknown }>
>({
  row: {
    id: 0,
    cells: [],
  },
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
}) as React.Context<TableRowContextProps<{ [key: string]: unknown }>>;
