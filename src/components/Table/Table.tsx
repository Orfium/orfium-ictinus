import { flexRender } from '@tanstack/react-table';
import React, { useRef } from 'react';
import isEqual from 'react-fast-compare';

import { TBody, TD, TH, THead, TR, TTitle, type TableProps } from '.';
import useTable from './hooks/useTable';
import { tableContainer, tableStyles } from './Table.style';

const Table = <TData,>({
  type = 'read-only',
  rowsConfig,
  data,
  columns,
  rowSize = 'sm',
  columnsConfig,
  sorting,
  hasStickyHeader = false,
  sx,
}: TableProps<TData>) => {
  /** If true, the scrollbar of tbody is visible */
  const [hasScrollbar, setHasScrollbar] = React.useState(false);

  const isSelectable = Boolean(type === 'interactive' && rowsConfig.rowSelection);

  const tBodyRef = useRef<HTMLTableSectionElement>();
  const containerRef = useRef(null);

  React.useEffect(() => {
    if (tBodyRef?.current) {
      setHasScrollbar(tBodyRef?.current?.scrollHeight > tBodyRef?.current?.clientHeight);
    }
  }, [tBodyRef.current]);

  const table = useTable<TData>({
    type,
    data,
    columns,
    sorting,
    rowsConfig,
    columnsConfig,
  });

  const hasTitle = Boolean(columnsConfig || rowsConfig);

  return (
    <div css={tableContainer()} ref={containerRef}>
      {hasTitle && (
        <TTitle
          type={type}
          columnsConfig={columnsConfig}
          columns={columns}
          rowsConfig={rowsConfig}
          containerRef={containerRef}
          rowsCount={table.getRowModel().rows.length}
        />
      )}
      <table css={tableStyles({ sx: sx?.table })}>
        <THead hasStickyHeader={hasStickyHeader} hasScrollbar={hasScrollbar} sx={sx?.thead}>
          {table.getHeaderGroups().map((headerGroup) => (
            <TR key={headerGroup.id} sx={sx?.tr}>
              {headerGroup.headers.map((header) => (
                <TH
                  id={header.id}
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
              <TR
                key={row.id}
                sx={sx?.tr}
                {...(isSelectable && {
                  isSelectable,
                  isSelected: row.getIsSelected(),
                  onClick: (e) => {
                    row.toggleSelected();
                  },
                })}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <TD
                      columnId={cell.column.id}
                      key={cell.id}
                      rowSize={rowSize}
                      width={cell.column.getSize()}
                      sx={sx?.td}
                    >
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
