/* eslint-disable @typescript-eslint/naming-convention */
import type { Column, HeaderGroup, RowModel } from '@tanstack/react-table';
import {
  createColumnHelper,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import useTheme from 'hooks/useTheme';
import { concat } from 'lodash-es';
import React, { useMemo } from 'react';
import type { Theme } from 'theme';

import { CheckBox } from 'components/Controls';
import Icon from 'components/Icon';

import Typography from '~/components/Typography';
import { lineEllipsis } from '~/theme/functions';

type ReturnValue<TData> = {
  getHeaderGroups: () => HeaderGroup<TData>[];
  getRowModel: () => RowModel<TData>;
  getIsAllRowsSelected: () => boolean;
  getIsSomeRowsSelected: () => boolean;
  getToggleAllRowsSelectedHandler: () => (event: unknown) => void;
  toggleAllRowsSelected: (value: boolean) => void;
  getAllLeafColumns: () => Column<TData, unknown>[];
};

const getColumns = (
  columns: any[],
  hasCheckboxes: boolean,
  hasRowDetails: boolean,
  theme: Theme,
  dataTestPrefixId: string
) => {
  const columnHelper = createColumnHelper();

  const prefix = hasCheckboxes
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
                dataTestPrefixId={`${dataTestPrefixId}_table_select_all`}
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
                  dataTestPrefixId={`${dataTestPrefixId}_table_select_${row.id}`}
                />
              </div>
            );
          },
          meta: {
            contentAlign: 'left',
          },
        },
      ]
    : [];

  const suffix = hasRowDetails
    ? [
        {
          id: 'details_iconButton',
          header: () => {
            return <></>;
          },
          cell: ({ row }) => {
            return (
              <Icon
                name={row.getIsExpanded() ? 'triangleDown' : 'triangleRight'}
                size={theme.dimension.sizing.get('icon.md')}
                color={theme.tokens.colors.get('textColor.default.secondary')}
                onClick={() => {
                  const isExpanded = row.getIsExpanded();
                  row.toggleExpanded(!isExpanded);
                }}
                dataTestId={`${dataTestPrefixId}_table_expand_${row.id}`}
              />
            );
          },
          meta: {
            contentAlign: 'left',
          },
        },
      ]
    : [];

  const base = columns.reduce((tColumns, column) => {
    if ('columns' in column) {
      const groupConfig = {
        id: column.id,
        header: column.header,
        columns: getColumns(column.columns, false, false, theme, dataTestPrefixId),
      };
      tColumns.push(columnHelper.group(groupConfig));
    } else {
      tColumns.push(
        columnHelper.accessor(column.id as any, {
          header: column.header,
          cell: (info) => {
            const value = info.getValue();

            if (typeof value === 'string' || typeof value === 'number') {
              return (
                <Typography variant="body02" component="span" css={lineEllipsis}>
                  {value}
                </Typography>
              );
            }

            return value;
          },
          size: column.width ?? 'auto',
          minSize: column.width,
          enableSorting: column.isSortable ?? false,
          meta: {
            contentAlign: column.contentAlign ?? 'left',
          },
        })
      );
    }

    return tColumns;
  }, prefix);

  return concat(base, suffix);
};

const useTable = <TData,>({
  type = 'read-only',
  data,
  columns,
  sorting,
  rowsConfig,
  columnsConfig,
  dataTestPrefixId,
  ...rest
}): ReturnValue<TData> => {
  const theme = useTheme();

  const isTableInteractive = useMemo(() => type === 'interactive', [type]);
  const { rowSelection, setRowSelection, expanded, setExpanded } = rowsConfig ?? {};

  const hasRowDetails = useMemo(() => {
    return data.some((row) => row.details) && Boolean(expanded);
  }, [data, expanded]);

  const tableData = useMemo(() => data.map((data) => data.cells), [data]);

  const hasCheckboxes = useMemo(() => {
    return Boolean(rowSelection && isTableInteractive);
  }, [rowSelection, isTableInteractive]);

  const tColumns = getColumns(columns, hasCheckboxes, hasRowDetails, theme, dataTestPrefixId);

  const state = useMemo(() => {
    return {
      ...(sorting && { sorting: sorting.sortingColumn }),
      ...(rowSelection && isTableInteractive && { rowSelection }),
      ...(columnsConfig && { columnVisibility: columnsConfig.columnVisibility }),
      ...(expanded && { expanded }),
    };
  }, [columnsConfig, expanded, isTableInteractive, rowSelection, sorting]);

  const tableConfig = useMemo(() => {
    return {
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

      /** Row Details */
      ...(expanded &&
        setExpanded && {
          getExpandedRowModel: getExpandedRowModel(),
          onExpandedChange: setExpanded,
        }),

      /** Column Visibility */
      ...(columnsConfig && {
        onColumnVisibilityChange: columnsConfig.setColumnVisibility,
      }),

      ...rest,
    };
  }, [
    tableData,
    tColumns,
    state,
    sorting,
    setRowSelection,
    isTableInteractive,
    expanded,
    setExpanded,
    columnsConfig,
    rest,
  ]);

  const table = useReactTable<TData>(tableConfig);

  const returnValue = useMemo(() => ({
    getHeaderGroups: table.getHeaderGroups,
    getRowModel: table.getRowModel,
    getIsAllRowsSelected: table.getIsAllRowsSelected,
    getIsSomeRowsSelected: table.getIsSomeRowsSelected,
    getToggleAllRowsSelectedHandler: table.getToggleAllRowsSelectedHandler,
    toggleAllRowsSelected: table.toggleAllRowsSelected,
    getAllLeafColumns: table.getAllLeafColumns,
  }), [table]);

  return returnValue;
};

export default useTable;
