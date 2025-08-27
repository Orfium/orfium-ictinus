import { flexRender } from '@tanstack/react-table';
import React, { useRef } from 'react';
import isEqual from 'react-fast-compare';
import type { NoUndefined } from '.';
import TBody from './components/TBody';
import TH from './components/TH';
import THead from './components/THead';
import TPagination from './components/TPagination';
import TR from './components/TR';
import TTitle from './components/TTitle';
import OptimizedTableRow from './components/OptimizedTableRow';
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
  }, []);

  const table = useTable<TData>({
    type,
    data,
    columns,
    sorting,
    rowsConfig,
    columnsConfig,
    dataTestPrefixId,
  });

  const hasTitle = Boolean(columnsConfig || rowsConfig);
  const allColumnsLength = table.getAllLeafColumns().length;

  const memoTrSx = React.useMemo(() => ({ tr: sx?.tr, td: sx?.td }), [sx?.tr, sx?.td]);

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
          rowsCount={rowsConfig?.rowsCount ?? table.getRowModel().rows.length}
          dataTestPrefixId={dataTestPrefixId}
        />
      )}
      <table css={tableStyles({ sx: sx?.table })} data-testid={`${dataTestPrefixId}_table`}>
        <THead hasStickyHeader={hasStickyHeader} hasScrollbar={hasScrollbar} sx={sx?.thead}>
          {table.getHeaderGroups().map((headerGroup) => {
            const headers = headerGroup.headers.length - +isSelectable - +isExpandable;

            return (
              <TR
                key={headerGroup.id}
                sx={memoTrSx.tr}
                {...(isSelectable && {
                  isSelectable,
                  isSelected: table.getIsSomePageRowsSelected() || table.getIsAllPageRowsSelected(),
                })}
              >
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
          })}
        </THead>
        <TBody hasStickyHeader={hasStickyHeader} ref={tBodyRef} sx={sx?.tbody}>
          {table.getRowModel().rows.map((row, index) => {
            const isSelected = row.getIsSelected();
            const isExpanded = row.getIsExpanded();

            return (
              <OptimizedTableRow
                key={row.id}
                row={row}
                index={index}
                rowSize={rowSize}
                isSelectable={isSelectable}
                isExpandable={isExpandable}
                isSelected={isSelected}
                isExpanded={isExpanded}
                sx={memoTrSx}
                dataTestPrefixId={dataTestPrefixId}
                data={data}
                allColumnsLength={allColumnsLength}
              />
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
