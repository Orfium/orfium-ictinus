import type { Row, RowData } from '@tanstack/react-table';
import type { Table } from '@tanstack/table-core';

import { forwardRef, useState } from 'react';

import { type BoxProps, Box } from '../vanilla/Box';
import { DataTableProvider } from './DataTableContext';

export type DataTableProps = BoxProps<
  'div',
  {
    /**
     * Pass the table instance returned from `useReactTable()` hook.
     */
    table: Table<any>;
  }
>;

export const DataTable = forwardRef<HTMLDivElement, DataTableProps>(
  ({ children, table, ...props }, ref) => {
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    return (
      <Box display="flex" flexDirection="column" maxH="full" maxW="full" ref={ref} {...props}>
        <DataTableProvider
          highlightedIndex={highlightedIndex}
          setHighlightedIndex={setHighlightedIndex}
          table={table}
        >
          {children}
        </DataTableProvider>
      </Box>
    );
  }
);

DataTable.displayName = 'DataTable';

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    align?: 'flex-start' | 'center' | 'flex-end';
    label?: string;
    tooltip?: string;
    // backward compatibility with old v5 table
    contentAlign?: 'left' | 'center' | 'right';
  }

  interface TableMeta<TData extends RowData> {
    getCellProps?: (row: Row<TData>) => Omit<BoxProps<'td'>, 'size'>;
  }
}
