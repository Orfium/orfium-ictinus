import * as React from 'react';

import type { Row, TableType } from './Table';

export type TableRowContextProps<T extends { [key: string]: unknown }> = {
  row: Row<T>;
  columnsWithWidth: number[];
  isPadded: boolean;
  hasOnSelectionChange: boolean;
  isRowSelected: boolean;
  columnCount: number;
  columns: string[];
  hasFixedHeader: boolean;
  tChange: () => void;
  type: TableType;
  isBordered: boolean;
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
  isPadded: false,
  hasOnSelectionChange: false,
  isRowSelected: false,
  columnCount: 0,
  columns: [],
  hasFixedHeader: false,
  tChange: () => {},
  type: 'normal',
  isBordered: false,
}) as React.Context<TableRowContextProps<{ [key: string]: unknown }>>;
