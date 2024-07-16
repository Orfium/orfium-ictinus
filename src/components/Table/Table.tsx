import { flexRender } from '@tanstack/react-table';
import React, { useRef } from 'react';
import isEqual from 'react-fast-compare';

import type { NoUndefined } from '.';
import { TBody, TD, TH, THead, TPagination, TR, TTitle, type TableProps } from '.';
import useTable from './hooks/useTable';
import { tableContainer, tableStyles } from './Table.style';

const Table = <TData extends NoUndefined<TData>>({
  type = 'read-only',
  rowsConfig,
  data,
  columns,
  rowSize = 'sm',
  columnsConfig,
  sorting,
  hasStickyHeader = false,
  pagination,
  sx,
  dataTestPrefixId = 'ictinus',
}: TableProps<TData>) => {
  /** If true, the scrollbar of tbody is visible */
  const [hasScrollbar, setHasScrollbar] = React.useState(false);

  const isSelectable = Boolean(type === 'interactive' && rowsConfig?.rowSelection);
  const isExpandable = Boolean(rowsConfig?.expanded);

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
    pagination,
    dataTestPrefixId,
  });

  const hasTitle = Boolean(columnsConfig || rowsConfig);

  return (
    <div
      css={tableContainer()}
      ref={containerRef}
      data-testid={`${dataTestPrefixId}_table_container`}
    >
      {hasTitle && (
        <TTitle
          type={type}
          columnsConfig={columnsConfig}
          columns={columns}
          rowsConfig={rowsConfig}
          containerRef={containerRef}
          rowsCount={table.getRowModel().rows.length}
          dataTestPrefixId={dataTestPrefixId}
        />
      )}
      <table css={tableStyles({ sx: sx?.table })} data-testid={`${dataTestPrefixId}_table`}>
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
                  metaData={header.column.columnDef.meta}
                  {...(header.column.getCanSort() && {
                    colSortingState: sorting?.sortingColumn?.find((col) => col.id === header.id)
                      ? {
                          /** Find and pass the ColumnSort object */
                          ...sorting?.sortingColumn?.find((col) => col.id === header.id),
                          /** Check if multiSort and determine the position of the ColumnSort object in the Sorting Array */
                          ...(sorting.sortingColumn.length > 1 && {
                            badge:
                              sorting?.sortingColumn?.findIndex((col) => col.id === header.id) + 1,
                          }),
                        }
                      : undefined,
                    onSort: header.column.toggleSorting,
                    isMultiSortable: header.column.getCanMultiSort(),
                    resetSorting: header.column.clearSorting,
                  })}
                  sx={sx?.th}
                  dataTestPrefixId={dataTestPrefixId}
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
          {table.getRowModel().rows.map((row, index) => {
            return (
              <>
                <TR
                  key={row.id}
                  sx={sx?.tr}
                  {...((isSelectable || isExpandable) && {
                    isSelectable,
                    isExpandable,
                    isSelected: row.getIsSelected(),
                    isExpanded: row.getIsExpanded(),
                    onClick: (e) => {
                      if (isExpandable) {
                        const isExpanded = row.getIsExpanded();
                        row.toggleExpanded(!isExpanded);
                      } else if (isSelectable) {
                        row.toggleSelected();
                      }
                    },
                  })}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TD
                        columnId={cell.column.id}
                        rowId={cell.id}
                        key={cell.id}
                        rowSize={rowSize}
                        width={cell.column.getSize()}
                        metaData={cell.column.columnDef.meta}
                        sx={sx?.td}
                        dataTestPrefixId={dataTestPrefixId}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TD>
                    );
                  })}
                </TR>
                {row.getIsExpanded() && (
                  <TR>
                    <TD
                      rowId={row.id}
                      colSpan={table.getAllLeafColumns().length}
                      isDetails
                      dataTestPrefixId={dataTestPrefixId}
                    >
                      {data[index].details}
                    </TD>
                  </TR>
                )}
              </>
            );
          })}
        </TBody>
      </table>
      {pagination && (
        <TPagination
          pagination={pagination}
          isSticky={hasStickyHeader && hasScrollbar}
          dataTestPrefixId={dataTestPrefixId}
        />
      )}
    </div>
  );
};

export default React.memo(Table, isEqual) as typeof Table;
