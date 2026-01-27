import { forwardRef } from 'react';

import { cn } from '../../utils/cn';
import { Box, type BoxProps } from '../Box';
import * as styles from './TableCell.css';

export type TableCellProps = BoxProps<'td', NonNullable<styles.CellVariants>>;

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  (
    {
      children,
      className,
      colSpan,
      pinned = false,
      bordered = false,
      px = 'lg',
      py = 'md',
      p,
      // bg = 'default',
      size,
      alignItems,
      justifyContent,
      textAlign,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        asChild
        data-bordered={bordered ? '' : undefined}
        data-pinned={pinned ? '' : undefined}
        className={cn(styles.cell({ pinned }), className)}
        {...props}
      >
        <td colSpan={colSpan} ref={ref}>
          <Box
            className={cn(styles.content({ bordered, size }))}
            px={p ?? px}
            py={p ?? py}
            // bg={bg}
            alignItems={alignItems}
            justifyContent={justifyContent}
            textAlign={textAlign}
          >
            {children}
          </Box>
        </td>
      </Box>
    );
  }
);

TableCell.displayName = 'TableCell';
