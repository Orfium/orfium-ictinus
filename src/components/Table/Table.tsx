import { flexRender } from '@tanstack/react-table';
import React, { useRef } from 'react';
import isEqual from 'react-fast-compare';

import type { TableProps } from '.';
import { TBody, TH, TD, THead, TR, TTitle } from './components';
import useTable from './hooks/useTable';
import { tableContainer, tableStyles } from './Table.style';

const Table = <TData,>({
  data,
  columns,
  rowSize = 'sm',
  columnsConfig,
  sorting,
  hasStickyHeader = false,
  sx,
}: TableProps<TData>) => {
  const { columnVisibility, setColumnVisibility } = columnsConfig ?? {};

  const hasColumnVisibilityConfig = Boolean(columnVisibility && setColumnVisibility);

  /** If true, the scrollbar of tbody is visible */
  const [hasScrollbar, setHasScrollbar] = React.useState(false);

  const tBodyRef = useRef<HTMLTableSectionElement>();

  React.useEffect(() => {
    if (tBodyRef?.current) {
      setHasScrollbar(tBodyRef?.current?.scrollHeight > tBodyRef?.current?.clientHeight);
    }
  }, [tBodyRef.current]);

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
    sorting,
  });

  return (
    <div css={tableContainer()}>
      {hasColumnVisibilityConfig && <TTitle columnsConfig={columnsConfig} columns={columns} />}
      <table css={tableStyles({ sx: sx?.table })}>
        <THead hasStickyHeader={hasStickyHeader} hasScrollbar={hasScrollbar} sx={sx?.thead}>
          {table.getHeaderGroups().map((headerGroup) => (
            <TR key={headerGroup.id} sx={sx?.tr}>
              {headerGroup.headers.map((header) => (
                <TH
                  key={header.id}
                  colSpan={header.colSpan}
                  rowSize={rowSize}
                  width={header.getSize()}
                  {...(header.column.getCanSort() && {
                    colSortingState: sorting?.sortingColumn?.find((col) => col.id === header.id),
                    onSort: header.column.toggleSorting,
                    isMultiSortable: header.column.getCanMultiSort(),
                    resetSorting: header.column.clearSorting,
                  })}
                  sx={sx?.th}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TH>
              ))}
            </TR>
          ))}
        </THead>
        <TBody hasStickyHeader={hasStickyHeader} ref={tBodyRef} sx={sx?.tbody}>
          {table.getRowModel().rows.map((row) => {
            return (
              <TR key={row.id} sx={sx?.tr}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <TD key={cell.id} rowSize={rowSize} width={cell.column.getSize()} sx={sx?.td}>
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

export default React.memo(Table, isEqual) as typeof Table;
