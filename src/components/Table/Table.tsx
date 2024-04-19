/* eslint-disable @typescript-eslint/naming-convention */
import { flexRender } from '@tanstack/react-table';
import React from 'react';
import isEqual from 'react-fast-compare';

import type { TableProps } from '.';
import { TBody, TH, TD, THead, TR, TTitle } from './components';
import useTable from './hooks/useTable';
import { tableContainer, tableStyles } from './Table.style';

const Table = <TData,>({ data, columns, rowSize = 'sm', columnsConfig }: TableProps<TData>) => {
  const { columnVisibility, setColumnVisibility } = columnsConfig ?? {};

  const hasColumnVisibilityConfig = Boolean(columnVisibility && setColumnVisibility);

  const table = useTable<TData>({
    data,
    columns,
    /** Column Visibility */
    ...(hasColumnVisibilityConfig && {
      state: {
        columnVisibility,
      },
      onColumnVisibilityChange: setColumnVisibility,
    }),
  });

  return (
    <div css={tableContainer()}>
      {hasColumnVisibilityConfig && <TTitle columnsConfig={columnsConfig} columns={columns} />}
      <table css={tableStyles()}>
        <THead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TR key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TH
                  key={header.id}
                  colSpan={header.colSpan}
                  rowSize={rowSize}
                  width={header.getSize()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TH>
              ))}
            </TR>
          ))}
        </THead>
        <TBody>
          {table.getRowModel().rows.map((row) => {
            return (
              <TR key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <TD key={cell.id} rowSize={rowSize}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TD>
                  );
                })}
              </TR>
            );
          })}
        </TBody>
      </table>
    </div>
  );
};

export default React.memo(Table, isEqual);
