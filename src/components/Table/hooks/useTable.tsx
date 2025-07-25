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
  getIsAllPageRowsSelected: () => boolean;
  getIsSomePageRowsSelected: () => boolean;
  getToggleAllPageRowsSelectedHandler: () => (event: unknown) => void;
  toggleAllPageRowsSelected: (value: boolean) => void;
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
                isSelected={table.getIsAllPageRowsSelected()}
                isIndeterminate={
                  table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()
                }
                onChange={() => {
                  // we cannot use getToggleAllPageRowsSelectedHandler because it will not work with the react-aria checkbox events
                  const selected = table.getIsAllPageRowsSelected(); // get selected status of current row.
                  table.toggleAllPageRowsSelected(!selected);
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
                  // isIndeterminate={row.getIsSomePageRowsSelected()}
                  onChange={row.getToggleSelectedHandler()}
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

  const isTableInteractive = type === 'interactive';

  const { rowSelection, setRowSelection, expanded, setExpanded } = rowsConfig ?? {};

  const hasRowDetails = data.some((row) => row.details) && Boolean(expanded);

  const tableData = useMemo(() => data.map((data) => data.cells), [data]);

  const hasCheckboxes = Boolean(rowSelection && isTableInteractive);

  const tColumns = useMemo(() => {
    return getColumns(columns, hasCheckboxes, hasRowDetails, theme, dataTestPrefixId);
  }, [columns, hasCheckboxes, hasRowDetails, theme, dataTestPrefixId]);

  const state = React.useMemo(() => {
    return {
      ...(sorting && { sorting: sorting.sortingColumn }),
      ...(rowSelection && isTableInteractive && { rowSelection }),
      ...(columnsConfig && { columnVisibility: columnsConfig.columnVisibility }),
      ...(expanded && { expanded }),
    };
  }, [columnsConfig, expanded, isTableInteractive, rowSelection, sorting]);

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
  });

  return {
    getHeaderGroups: table.getHeaderGroups,
    getRowModel: table.getRowModel,
    getIsAllRowsSelected: table.getIsAllRowsSelected,
    getIsSomeRowsSelected: table.getIsSomeRowsSelected,
    getToggleAllRowsSelectedHandler: table.getToggleAllRowsSelectedHandler,
    toggleAllRowsSelected: table.toggleAllRowsSelected,
    getAllLeafColumns: table.getAllLeafColumns,
    getIsAllPageRowsSelected: table.getIsAllPageRowsSelected,
    getIsSomePageRowsSelected: table.getIsSomePageRowsSelected,
    getToggleAllPageRowsSelectedHandler: table.getToggleAllPageRowsSelectedHandler,
    toggleAllPageRowsSelected: table.toggleAllPageRowsSelected,
  };
};

export default useTable;
