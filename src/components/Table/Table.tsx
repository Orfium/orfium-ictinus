import { flexRender } from '@tanstack/react-table';
import React, { useRef, useMemo, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import type { NoUndefined } from '.';
import { TBody, TH, THead, TPagination, TR, TTitle, type TableProps } from '.';
import useTable from './hooks/useTable';
import { tableContainer, tableStyles } from './Table.style';
import OptimizedTableRow from './components/OptimizedTableRow';

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

  const isSelectable = useMemo(() => Boolean(type === 'interactive' && rowsConfig?.rowSelection), [type, rowsConfig?.rowSelection]);
  const isExpandable = useMemo(() => Boolean(rowsConfig?.expanded), [rowsConfig?.expanded]);
  const hasTitle = useMemo(() => Boolean(columnsConfig || rowsConfig), [columnsConfig, rowsConfig]);

  const tBodyRef = useRef<HTMLTableSectionElement>();
  const containerRef = useRef(null);

  const detectScrollbar = useCallback(() => {
    if (tBodyRef?.current) {
      setHasScrollbar(tBodyRef?.current?.scrollHeight > tBodyRef?.current?.clientHeight);
    }
  }, []);

  React.useEffect(detectScrollbar, [detectScrollbar]);

  const table = useTable<TData>({
    type,
    data,
    columns,
    sorting,
    rowsConfig,
    columnsConfig,
    dataTestPrefixId,
  });

  const rowsCount = useMemo(() => {
    return rowsConfig?.rowsCount ?? table.getRowModel().rows.length;
  }, [rowsConfig?.rowsCount, table.getRowModel().rows.length]);

  const headerGroups = useMemo(() => table.getHeaderGroups(), [table.getHeaderGroups]);
  const rows = useMemo(() => table.getRowModel().rows, [table.getRowModel().rows]);
  const allColumnsLength = useMemo(() => table.getAllLeafColumns().length, [table.getAllLeafColumns().length]);

  const renderedHeaders = useMemo(() => {
    return headerGroups.map((headerGroup) => {
      const headers = headerGroup.headers.length - +isSelectable - +isExpandable;

      return (
        <TR key={headerGroup.id} sx={sx?.tr}>
          {headerGroup.headers.map((header) => (
            <TH
              id={header.id}
              key={header.id}
              colSpan={header.colSpan}
              rowSize={rowSize}
              width={header.getSize() || 100 / headers}
              metaData={header.column.columnDef.meta}
              {...(header.column.getCanSort() && {
                colSortingState: sorting?.sortingColumn?.find((col) => col.id === header.id)
                  ? {
                      /** Find and pass the ColumnSort object */
                      ...sorting?.sortingColumn?.find((col) => col.id === header.id),
                      /** Check if multiSort and determine the position of the ColumnSort object in the Sorting Array */
                      ...(sorting.sortingColumn.length > 1 && {
                        badge:
                          sorting?.sortingColumn?.findIndex((col) => col.id === header.id) +
                          1,
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
      );
    });
  }, [headerGroups, isSelectable, isExpandable, sx?.tr, sx?.th, rowSize, sorting, dataTestPrefixId]);

  const renderedRows = useMemo(() => {
    return rows.map((row, index) => (
      <OptimizedTableRow
        key={row.id}
        row={row}
        index={index}
        rowSize={rowSize}
        isSelectable={isSelectable}
        isExpandable={isExpandable}
        sx={{ tr: sx?.tr, td: sx?.td }}
        dataTestPrefixId={dataTestPrefixId}
        data={data}
        allColumnsLength={allColumnsLength}
      />
    ));
  }, [rows, rowSize, isSelectable, isExpandable, sx?.tr, sx?.td, dataTestPrefixId, data, allColumnsLength]);

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
          rowsCount={rowsCount}
          dataTestPrefixId={dataTestPrefixId}
        />
      )}
      <table css={tableStyles({ sx: sx?.table })} data-testid={`${dataTestPrefixId}_table`}>
        <THead hasStickyHeader={hasStickyHeader} hasScrollbar={hasScrollbar} sx={sx?.thead}>
          {renderedHeaders}
        </THead>
        <TBody hasStickyHeader={hasStickyHeader} ref={tBodyRef} sx={sx?.tbody}>
          {renderedRows}
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
