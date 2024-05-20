/* eslint-disable @typescript-eslint/naming-convention */
import type { HeaderGroup, RowModel } from '@tanstack/react-table';
import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import React from 'react';

import type { UseTableProps } from '../types';
import { CheckBox } from 'components/Controls';

type ReturnValue<TData> = {
  getHeaderGroups: () => HeaderGroup<TData>[];
  getRowModel: () => RowModel<TData>;
  getIsAllRowsSelected: () => boolean;
  getIsSomeRowsSelected: () => boolean;
  getToggleAllRowsSelectedHandler: () => (event: unknown) => void;
  toggleAllRowsSelected: (value: boolean) => void;
};

const getColumns = (columns: any[], hasCheckboxes: boolean) => {
  const columnHelper = createColumnHelper();

  const base = hasCheckboxes
    ? [
        {
          id: 'checkbox_select',
          header: ({ table }) => {
            return (
              <CheckBox
                isSelected={table.getIsAllRowsSelected()}
                isIndeterminate={table.getIsSomeRowsSelected()}
                onChange={() => {
                  const selected = table.getIsAllRowsSelected(); // get selected status of current row.
                  table.toggleAllRowsSelected(!selected);
                }}
              />
            );
          },
          cell: ({ row }) => {
            return (
              <div className="px-1">
                <CheckBox
                  isSelected={row.getIsSelected()}
                  isDisabled={!row.getCanSelect()}
                  isIndeterminate={row.getIsSomeSelected()}
                  onChange={() => {
                    const selected = row.getIsSelected(); // get selected status of current row.
                    row.toggleSelected(!selected); // reverse selected status of current row.
                  }}
                />
              </div>
            );
          },
        },
      ]
    : [];

  return columns.reduce((tColumns, column) => {
    if ('columns' in column) {
      const groupConfig = {
        id: column.id,
        header: column.header,
        columns: getColumns(column.columns, false),
      };
      tColumns.push(columnHelper.group(groupConfig));
    } else {
      tColumns.push(
        columnHelper.accessor(column.id as any, {
          header: column.header,
          cell: (info) => info.getValue(),
          size: column.width ?? 'auto',
          enableSorting: column.isSortable ?? false,
        })
      );
    }

    return tColumns;
  }, base);
};

const useTable = <TData,>({
  type = 'read-only',
  data,
  columns,
  sorting,
  rowsConfig,
  columnsConfig,
  ...rest
}: UseTableProps<TData>): ReturnValue<TData> => {
  const isTableInteractive = type === 'interactive';

  const { rowSelection, setRowSelection } = rowsConfig ?? {};

  const hasCheckboxes = Boolean(rowSelection && isTableInteractive);

  const tColumns = getColumns(columns, hasCheckboxes);

  const state = React.useMemo(() => {
    return {
      ...(sorting && { sorting: sorting.sortingColumn }),
      ...(rowSelection && isTableInteractive && { rowSelection }),
      ...(columnsConfig && { columnVisibility: columnsConfig.columnVisibility }),
    };
  }, [columnsConfig, isTableInteractive, rowSelection, sorting]);

  /** Since tanstack's useTable doesn't detect array object mutations, we need to manually create new data array (new ref) to trigger a re-render */
  const [tableData, setTableData] = React.useState(data);

  React.useEffect(() => {
    setTableData([...data]);
  }, [sorting?.sortingColumn]);

  const table = useReactTable<TData>({
    /** Basic Functionality */
    data: tableData,
    columns: tColumns,
    getCoreRowModel: getCoreRowModel(),

    /** States */
    state,

    /** States callbacks and extra config */

    /** Sorting */
    ...(sorting && {
      manualSorting: true,
      onSortingChange: sorting.handleSorting,
      enableMultiSort: sorting.isMultiSortable ?? false,
    }),

    /** Row Selection */
    ...(setRowSelection &&
      isTableInteractive && {
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
      }),

    /** Column Visibility */
    ...(columnsConfig && {
      onColumnVisibilityChange: columnsConfig.setColumnVisibility,
    }),

    ...rest,
  });

  return {
    getHeaderGroups: table.getHeaderGroups,
    getRowModel: table.getRowModel,
    getIsAllRowsSelected: table.getIsAllRowsSelected,
    getIsSomeRowsSelected: table.getIsSomeRowsSelected,
    getToggleAllRowsSelectedHandler: table.getToggleAllRowsSelectedHandler,
    toggleAllRowsSelected: table.toggleAllRowsSelected,
  };
};

export default useTable;
