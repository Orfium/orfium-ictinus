import { forwardRef } from 'react';

import { cn } from '../../utils/cn';
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
      bordered = false,
      px = 'lg',
      py = 'md',
      bg = 'default',
      size = 'sm',
      alignItems,
      justifyContent,
      textAlign,
      ...props
    },
    ref
  ) => (
    <Box
      asChild
      data-bordered={bordered ? '' : undefined}
      data-pinned={pinned ? '' : undefined}
      className={cn(styles.cell({ pinned }), className)}
      {...props}
    >
      <th colSpan={colSpan} ref={ref}>
        <Box
          className={cn(styles.content({ bordered, size }))}
          px={p ?? px}
          py={p ?? py}
          bg={bg}
          alignItems={alignItems}
          justifyContent={justifyContent}
          textAlign={textAlign}
        >
          {children}
        </Box>
      </th>
    </Box>
  )
);

TableHeaderCell.displayName = 'TableHeaderCell';
