/* eslint-disable @typescript-eslint/naming-convention */
import type { HeaderGroup, RowModel } from '@tanstack/react-table';
import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import React from 'react';

import type { UseTableProps } from '../types';

type ReturnValue<TData> = {
  getHeaderGroups: () => HeaderGroup<TData>[];
  getRowModel: () => RowModel<TData>;
};

const getColumns = (columns: any[]) => {
  const columnHelper = createColumnHelper();

  return columns.reduce((tColumns, column) => {
    if ('columns' in column) {
      const groupConfig = {
        id: column.id,
        header: column.header,
        columns: getColumns(column.columns),
      };
      tColumns.push(columnHelper.group(groupConfig));
    } else {
      tColumns.push(
        columnHelper.accessor(column.id as any, {
          header: column.header,
          cell: (info) => info.getValue(),
          size: column.width,
          enableSorting: column.isSortable ?? false,
        })
      );
    }

    return tColumns;
  }, []);
};

const useTable = <TData,>({
  data,
  columns,
  sorting,
  ...rest
}: UseTableProps<TData>): ReturnValue<TData> => {
  const tColumns = React.useMemo(() => getColumns(columns), [columns]);

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
    /** Sorting */
    ...(sorting && {
      manualSorting: true,
      state: {
        sorting: sorting.sortingColumn,
      },
      onSortingChange: sorting.handleSorting,
      enableMultiSort: sorting.isMultiSortable ?? false,
    }),
    ...rest,
  });

  return {
    getHeaderGroups: table.getHeaderGroups,
    getRowModel: table.getRowModel,
  };
};

export default useTable;
