import { type Header } from '@tanstack/react-table';
import { forwardRef } from 'react';

// import { ActionsContent, ActionsRoot } from "../actions";
import { Box, type BoxProps } from '../vanilla/Box';
// import { Cover } from "../cover";
import { Icon } from '../icon';
// import { IconSort } from "../icons/IconSort";
// import { IconSortDown } from "../icons/IconSortDown";
// import { IconSortUp } from "../icons/IconSortUp";
// import { Separator } from "../separator";
import { TableHeaderCell } from '../vanilla/Table';
// import { VisuallyHidden } from "../visually-hidden";
import { cn } from '~/utils/cn';
import * as styles from './DataTableHeaderCell.css';

export type DataTableHeaderCellProps = Omit<
  BoxProps<
    typeof TableHeaderCell,
    {
      /**
       * The Header instance to render.
       */
      header: Header<unknown, unknown>;
    }
  >,
  'size'
>;

export const DataTableHeaderCell = forwardRef<HTMLTableCellElement, DataTableHeaderCellProps>(
  ({ children, header, ...props }, ref) => {
    const sortDir = header.column.getIsSorted();

    return (
      <TableHeaderCell
        aria-sort={
          header.column.getCanSort()
            ? sortDir === false
              ? 'none'
              : sortDir === 'asc'
                ? 'ascending'
                : 'descending'
            : undefined
        }
        colSpan={header.colSpan}
        ref={ref}
        {...props}
      >
        {header.column.getCanResize() && (
          <Box
            onDoubleClick={() => header.column.resetSize()}
            onMouseDown={header.getResizeHandler()}
            onTouchStart={header.getResizeHandler()}
            // orientation="vertical"
            style={{
              transform:
                header.getContext().table.options.columnResizeMode === 'onEnd' &&
                header.column.getIsResizing()
                  ? `translateX(${header.getContext().table.getState().columnSizingInfo.deltaOffset}px)`
                  : '',
            }}
            className={cn(
              styles.handle({
                resizing: header.column.getIsResizing(),
              })
            )}
          />
        )}
        {/* {header.column.getCanResize() && (
          <ActionsContent visible={header.column.getIsResizing() ? 'always' : 'if-needed'}>
            <Separator
              onDoubleClick={() => header.column.resetSize()}
              onMouseDown={header.getResizeHandler()}
              onTouchStart={header.getResizeHandler()}
              orientation="vertical"
              style={{
                transform:
                  header.getContext().table.options.columnResizeMode === 'onEnd' &&
                  header.column.getIsResizing()
                    ? `translateX(${header.getContext().table.getState().columnSizingInfo.deltaOffset}px)`
                    : '',
              }}
              {...styles.handle({
                resizing: header.column.getIsResizing(),
              })}
            />
          </ActionsContent>
        )} */}
        {children}
        {header.column.getCanSort() ? (
          <button
            type="button"
            onClick={() => header.column.toggleSorting()}
            style={{ backgroundColor: 'transparent' }}
          >
            {/* {sortDir && (
                <VisuallyHidden>
                  sorted {sortDir === 'asc' ? 'ascending' : 'descending'}
                </VisuallyHidden>
              )} */}

            <Box display="grid">
              <Icon name="sort" className={cn(styles.icon({ active: sortDir === false }))} />
              <Icon
                name="sortAscending"
                className={cn(styles.icon({ active: sortDir === 'asc' }))}
              />
              <Icon
                name="sortDescending"
                className={cn(styles.icon({ active: sortDir === 'desc' }))}
              />
            </Box>
          </button>
        ) : (
          children
        )}
      </TableHeaderCell>
    );
  }
);

DataTableHeaderCell.displayName = 'DataTableHeaderCell';
