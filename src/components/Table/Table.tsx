import { flexRender } from '@tanstack/react-table';
import React from 'react';

import type { TableProps } from '.';
import { TBody, TH, TD, THead, TR } from './components';
import useTable from './hooks/useTable';
import { tableContainer, tableStyles } from './Table.style';

const Table = <TData,>({ data, columns, rowSize = 'sm' }: TableProps<TData>) => {
  const table = useTable<TData>({ data, columns });

  return (
    <div css={tableContainer()}>
      <table css={tableStyles()}>
        <THead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TR key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TH key={header.id} colSpan={header.colSpan} rowSize={rowSize}>
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

export default Table;
