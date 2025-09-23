import { forwardRef } from 'react';

import cn from 'clsx';
import { Box, type BoxProps } from '../Box';
import * as styles from './TableCell.css';

export type TableCellProps = BoxProps<'td', NonNullable<styles.CellVariants>>;

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ children, className, colSpan, pinned = false, columnBorder = false, ...props }, ref) => {
    return (
      <Box
        asChild
        data-pinned={pinned ? '' : undefined}
        className={cn(styles.cell({ pinned, columnBorder }), className)}
        {...props}
      >
        <td colSpan={colSpan} ref={ref}>
          {children}
        </td>
      </Box>
    );
  }
);

TableCell.displayName = 'TableCell';
