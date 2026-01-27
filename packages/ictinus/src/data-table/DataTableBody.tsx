import { flexRender } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { forwardRef, type RefObject, useEffect, useRef } from 'react';
import { useDOMRef } from '~/components/utils/useDOMRef';
import { cn } from '../utils/cn';
import { Box, type BoxProps } from '../vanilla/Box';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../vanilla/Table';
import { useDataTableContext } from './DataTableContext';
import { DataTableHeaderCell } from './DataTableHeaderCell';
import { DataTableRow } from './DataTableRow';

import * as styles from './DataTableBody.css';

export type DataTableBodyProps = BoxProps<
  'div',
  {
    estimatedRowHeight?: number;
  }
>;

const COL_VIRTUALIZATION_THRESHOLD = 20;
const ROW_VIRTUALIZATION_THRESHOLD = 20;

export const DataTableBody = forwardRef<HTMLDivElement, DataTableBodyProps>(
  (
    { className, estimatedRowHeight = 44, style, ...props }: DataTableBodyProps,
    ref: RefObject<HTMLDivElement>
  ) => {
    const domRef = useDOMRef(ref);

    const { table } = useDataTableContext();

    const rows = table.getRowModel().rows;
    const previousRowsRef = useRef(rows);
    useEffect(() => {
      previousRowsRef.current = rows;
    });

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const calculateScrollTimeline = () => {
      if (!domRef.current || !scrollContainerRef.current) {
        return;
      }

      const { offsetWidth, scrollLeft, scrollWidth } = scrollContainerRef.current;

      if (scrollWidth > offsetWidth) {
        domRef.current.dataset.scrollTimeline =
          scrollLeft === 0 ? 'left' : scrollLeft >= scrollWidth - offsetWidth ? 'right' : 'middle';
      } else {
        delete domRef.current.dataset.scrollTimeline;
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(calculateScrollTimeline, []);

    const centerColumns = table.getCenterVisibleLeafColumns();

    const columnVirtualizer = useVirtualizer({
      count: centerColumns.length,
      enabled: centerColumns.length > COL_VIRTUALIZATION_THRESHOLD,
      estimateSize: (index) => centerColumns[index].getSize(),
      getItemKey: (index) => centerColumns[index].id,
      getScrollElement: () => scrollContainerRef.current,
      horizontal: true,
    });
    const virtualColumns = columnVirtualizer.getVirtualItems();
    const virtualColumnsOffset = virtualColumns[0]?.start ?? 0;

    const rowVirtualizer = useVirtualizer({
      count: rows.length,
      enabled:
        centerColumns.length > COL_VIRTUALIZATION_THRESHOLD ||
        rows.length > ROW_VIRTUALIZATION_THRESHOLD,
      estimateSize: () => estimatedRowHeight,
      getItemKey: (index) => rows[index].id,
      getScrollElement: () => scrollContainerRef.current,
    });
    const virtualRows = rowVirtualizer.getVirtualItems();

    const isSelectable = table.options.enableRowSelection !== false;
    const hasLeftPinned = table.getLeftTotalSize() > 0;
    const hasRightPinned = table.getRightTotalSize() > 0;

    return (
      <Box
        ref={domRef}
        data-selectable={isSelectable ? '' : undefined}
        data-has-left-pinned={hasLeftPinned ? '' : undefined}
        data-has-right-pinned={hasRightPinned ? '' : undefined}
        style={{
          ...assignInlineVars({
            [styles.leftTotalSizeVar]: `${table.getLeftTotalSize()}px`,
            [styles.rightTotalSizeVar]: `${table.getRightTotalSize()}px`,
            [styles.totalSizeVar]: (
              table
                .getHeaderGroups()[0]
                ?.headers.reduce(
                  (sum, header) => sum + (header.column.getCanResize() ? header.getSize() : 0),
                  0
                ) ?? 0
            ).toString(),
          }),
          ...style,
        }}
        className={cn(styles.root({}), className)}
        {...props}
      >
        <Table
          rounded="inherit"
          layout="fixed"
          onScroll={calculateScrollTimeline}
          ref={scrollContainerRef}
        >
          <TableHeader display="grid" pinned>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow display="flex" key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <DataTableHeaderCell
                    header={header}
                    key={header.id}
                    pinned={!!header.column.getIsPinned()}
                    style={{
                      ...assignInlineVars({
                        [styles.cellOffsetVar]: `${header.column.getStart(header.column.getIsPinned() || 'left')}px`,
                        [styles.cellSizeVar]: `${header.getSize()}`,
                      }),
                    }}
                    className={cn(
                      styles.cell({
                        pinned: header.column.getIsPinned() || undefined,
                        resizable: header.column.getCanResize(),
                      })
                    )}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </DataTableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody
            display="grid"
            style={
              rowVirtualizer.options.enabled
                ? { height: `${rowVirtualizer.getTotalSize()}px` }
                : undefined
            }
          >
            {(rowVirtualizer.options.enabled
              ? virtualRows.length === 0 && rows.length > 0
                ? previousRowsRef.current.map((row) => ({
                    row,
                    virtualRow: undefined,
                  }))
                : virtualRows.map((virtualRow) => ({
                    row: rows[virtualRow.index],
                    virtualRow,
                  }))
              : rows.map((row) => ({ row, virtualRow: undefined }))
            ).map(({ row, virtualRow }, index) => (
              <DataTableRow
                data-index={virtualRow?.index}
                display="flex"
                key={row.id}
                index={virtualRow?.index ?? index}
                row={row}
                ref={virtualRow ? rowVirtualizer.measureElement : undefined}
                style={
                  virtualRow
                    ? {
                        position: 'absolute',
                        transform: `translateY(${virtualRow.start}px)`,
                      }
                    : undefined
                }
              >
                {row.getLeftVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    pinned
                    style={{
                      ...assignInlineVars({
                        [styles.cellOffsetVar]: `${cell.column.getStart('left')}px`,
                        [styles.cellSizeVar]: `${cell.column.getSize()}`,
                      }),
                    }}
                    className={cn(
                      styles.cell({
                        pinned: 'left',
                        resizable: cell.column.getCanResize(),
                      })
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}

                {columnVirtualizer.options.enabled && virtualColumnsOffset > 0 && (
                  <TableCell style={{ width: virtualColumnsOffset }} />
                )}

                {(columnVirtualizer.options.enabled
                  ? virtualColumns.map((virtualCell) => {
                      const cells = row.getCenterVisibleCells();

                      return cells[virtualCell.index];
                    })
                  : row.getCenterVisibleCells()
                ).map((cell) => (
                  <TableCell
                    key={cell.id}
                    style={{
                      ...assignInlineVars({
                        [styles.cellSizeVar]: `${cell.column.getSize()}`,
                      }),
                    }}
                    className={cn(
                      styles.cell({
                        resizable: cell.column.getCanResize(),
                      })
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}

                {row.getRightVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    pinned
                    style={{
                      ...assignInlineVars({
                        [styles.cellOffsetVar]: `${cell.column.getStart('right')}px`,
                        [styles.cellSizeVar]: `${cell.column.getSize()}`,
                      }),
                    }}
                    className={cn(
                      styles.cell({
                        pinned: 'right',
                        resizable: cell.column.getCanResize(),
                      })
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </DataTableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    );
  }
);

DataTableBody.displayName = 'DataTableBody';
