import { Button, Switch } from '@orfium/ictinus';
import {
  Box,
  DataTable,
  DataTableBody,
  Menu,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuTrigger,
  Text,
} from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type VisibilityState,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
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
    const table = useReactTable({
      columns,
      data,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      state: {
        columnPinning: {
          left: ['select', 'firstName'],
        },
        pagination: { pageIndex: 0, pageSize: data.length },
      },
    });

    return (
      <DataTable table={table}>
        <DataTableBody />
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

    // Get all columns except the first one (which is always visible)
    const hidableColumns = table.getAllColumns().filter((column) => column.id !== 'firstName');

    // Compute selected columns based on visibility state
    const selectedColumns = useMemo(() => {
      const selected = new Set<string>();
      for (const column of hidableColumns) {
        if (column.getIsVisible()) {
          selected.add(column.id);
        }
      }
      return selected;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [columnVisibility]);

    return (
      <DataTable table={table}>
        <Box
          bg="default"
          px="lg"
          py="sm"
          h="11"
          borderT="1"
          borderL="1"
          borderR="1"
          borderColor="decorative.default"
          roundedT="2"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          w="full"
        >
          <Box display="flex" alignItems="center" gap="sm">
            <Text data-testid="assets-table-items-count" typography="label02" color="active">
              {table.getRowModel().rows.length}
            </Text>
            <Text typography="label02">items</Text>
          </Box>
          <Menu>
            <MenuTrigger>
              <Button dataTestId="assets-edit-columns" type="secondary" size="compact">
                Edit columns
              </Button>
            </MenuTrigger>
            <MenuContent
              selectionMode="multiple"
              popover={{ placement: 'bottom right' }}
              style={{ minWidth: '280px' }}
              selectedKeys={selectedColumns}
              onSelectionChange={(keys) => {
                const newVisibility: VisibilityState = {};
                for (const column of hidableColumns) {
                  if (keys === 'all') {
                    newVisibility[column.id] = true;
                  } else {
                    newVisibility[column.id] = keys.has(column.id);
                  }
                }
                setColumnVisibility(newVisibility);
              }}
            >
              <MenuItem id="assetName" isDisabled style={{ cursor: 'not-allowed' }}>
                <Box display="flex" alignItems="center" justifyContent="space-between" gap="sm">
                  <MenuLabel>
                    <Text color="inverted.secondary" typography="body02">
                      First name
                    </Text>
                  </MenuLabel>
                  <Switch isDisabled />
                </Box>
              </MenuItem>
              {hidableColumns.map((column) => {
                const isSelected = selectedColumns.has(column.id);

                return (
                  <MenuItem
                    key={column.id}
                    id={column.id}
                    data-testid={`assets-edit-columns-menu-item-${column.id}`}
                  >
                    <Box display="flex" alignItems="center" justifyContent="space-between" gap="sm">
                      <MenuLabel>
                        <Text
                          color={isSelected ? 'active' : 'primary'}
                          typography={isSelected ? 'label02' : 'body02'}
                        >
                          {(column.columnDef.meta as { label?: string })?.label}
                        </Text>
                      </MenuLabel>
                      <Switch isSelected={isSelected} />
                    </Box>
                  </MenuItem>
                );
              })}
            </MenuContent>
          </Menu>
        </Box>
        <DataTableBody roundedT="0" />
      </DataTable>
    );
  },
};
