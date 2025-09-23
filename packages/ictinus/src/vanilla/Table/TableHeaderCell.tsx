import { forwardRef } from 'react';

import cn from 'clsx';
import { Box, type BoxProps } from '../Box';
import * as styles from './TableHeaderCell.css';

export type TableHeaderCellProps = BoxProps<'th', NonNullable<styles.CellVariants>>;

export const TableHeaderCell = forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
  (
    {
      children,
      className,
      colSpan,
      p,
      pinned = false,
      columnBorder = false,
      px = 'lg',
      py = 'md',
      ...props
    },
    ref
  ) => (
    <Box
      asChild
      data-pinned={pinned ? '' : undefined}
      className={cn(styles.cell({ pinned, columnBorder }), className)}
      {...props}
    >
      <th colSpan={colSpan} ref={ref}>
        <Box className={styles.content()} px={p ?? px} py={p ?? py}>
          {children}
        </Box>
      </th>
    </Box>
  )
);

TableHeaderCell.displayName = 'TableHeaderCell';
