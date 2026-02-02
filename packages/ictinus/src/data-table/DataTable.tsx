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
