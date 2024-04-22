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
        })
      );
    }

    return tColumns;
  }, []);
};

const useTable = <TData,>({ data, columns, ...rest }: UseTableProps<TData>): ReturnValue<TData> => {
  const tColumns = React.useMemo(() => getColumns(columns), [columns]);
  const tData = React.useMemo(() => data.map((row) => row.cells), []);

  const table = useReactTable<TData>({
    /** Basic Functionality */
    data: tData,
    columns: tColumns,
    getCoreRowModel: getCoreRowModel(),
    ...rest,
  });

  return {
    getHeaderGroups: table.getHeaderGroups,
    getRowModel: table.getRowModel,
  };
};

export default useTable;
