import { forwardRef } from 'react';

import cn from 'clsx';
import { Box, type BoxProps } from '../Box';
import * as styles from './TableRow.css';

export type TableRowProps = BoxProps<'tr'>;

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, className, ...props }, ref) => (
    <Box asChild className={cn(styles.row({}), className)} {...props}>
      <tr ref={ref}>{children}</tr>
    </Box>
  )
);

TableRow.displayName = 'TableRow';
