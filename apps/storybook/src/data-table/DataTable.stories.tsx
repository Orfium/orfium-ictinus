import {
  Box,
  DataTable,
  DataTableBody,
  DataTableEditColumns,
  DataTableHeader,
  Text,
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

    const selectedCount = table.getSelectedRowModel().rows.length;
    const totalCount = table.getRowModel().rows.length;
    const displayCount = selectedCount > 0 ? selectedCount : totalCount;
    const label = selectedCount > 0 ? 'selected' : displayCount === 1 ? 'item' : 'items';

    return (
      <DataTable table={table}>
        <DataTableHeader>
          <Box display="flex" alignItems="center" gap="sm">
            <Text typography="label02" color="active">
              {displayCount}
            </Text>
            <Text typography="label02">{label}</Text>
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

    const totalCount = table.getRowModel().rows.length;

    return (
      <DataTable table={table}>
        <DataTableHeader>
          <Box display="flex" alignItems="center" gap="sm">
            <Text typography="label02" color="active">
              {totalCount}
            </Text>
            <Text typography="label02">{totalCount === 1 ? 'item' : 'items'}</Text>
          </Box>
          <DataTableEditColumns />
        </DataTableHeader>
        <DataTableBody roundedT="0" />
      </DataTable>
    );
  },
};
