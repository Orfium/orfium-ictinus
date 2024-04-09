import type { HeaderGroup, RowModel } from '@tanstack/react-table';
import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import React from 'react';

import type { UseTableProps } from '../types';

type ReturnValue<TData> = {
  getHeaderGroups: () => HeaderGroup<TData>[];
  getRowModel: () => RowModel<TData>;
};

const getColumns = (columns: any[]) => {
  const tColumns = [];

  const columnHelper = createColumnHelper();

  columns.forEach((column) => {
    tColumns.push(
      columnHelper.accessor(column.id as any, {
        header: column.header,
        cell: (info) => info.getValue(),
      })
    );
  });

  return tColumns;
};

const useTable = <TData,>({ data, columns }: UseTableProps<TData>): ReturnValue<TData> => {
  const tColumns = getColumns(columns);
  const tData = React.useMemo(() => data.map((row) => row.cells), []);

  const table = useReactTable<TData>({
    /** Basic Functionality */
    data: tData,
    columns: tColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return {
    getHeaderGroups: table.getHeaderGroups,
    getRowModel: table.getRowModel,
  };
};

export default useTable;
