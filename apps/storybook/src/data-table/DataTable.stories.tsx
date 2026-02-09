import { Button } from '@orfium/ictinus';
import {
  Box,
  DataTable,
  DataTableBody,
  DataTableBulkActions,
  DataTableCounter,
  DataTableEditColumns,
  DataTableHeader,
} from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnPinningState,
  type RowSelectionState,
  type VisibilityState,
} from '@tanstack/react-table';
import { useState } from 'react';
import { columns, data, simpleColumns } from './columns';

const meta: Meta<typeof DataTable> = {
  title: 'Vanilla/DataTable',
  component: DataTable,
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  render: () => {
    const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
      left: ['select', 'firstName'],
    });
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

    const table = useReactTable({
      columns,
      data,
      debugTable: true,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      enableMultiSort: true,
      state: {
        columnPinning,
        columnVisibility,
        rowSelection,
      },
      onColumnPinningChange: setColumnPinning,
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
    });

    return (
      <DataTable table={table}>
        <DataTableHeader>
          <Box display="flex" alignItems="center" gap="lg">
            <DataTableCounter singular="Friend" plural="Friends" />
            <DataTableBulkActions>
              <Button
                size="compact"
                onClick={() => {
                  const selectedData = table.getSelectedRowModel().rows.map((row) => row.original);
                  alert(JSON.stringify(selectedData, null, 2));
                }}
              >
                Bulk
              </Button>
              <Button size="compact">Bulk 2</Button>
            </DataTableBulkActions>
          </Box>
          <DataTableEditColumns />
        </DataTableHeader>
        <DataTableBody roundedT="0" />
      </DataTable>
    );
  },
};

export const Simple: Story = {
  render: () => {
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

    const table = useReactTable({
      columns: simpleColumns,
      data,
      getCoreRowModel: getCoreRowModel(),
      enableRowSelection: false,
      enableSorting: false,
      enableColumnResizing: false,
      state: {
        columnVisibility,
      },
      onColumnVisibilityChange: setColumnVisibility,
    });

    return (
      <DataTable table={table}>
        <DataTableHeader>
          <DataTableCounter />
          <DataTableEditColumns />
        </DataTableHeader>
        <DataTableBody roundedT="0" />
      </DataTable>
    );
  },
};
