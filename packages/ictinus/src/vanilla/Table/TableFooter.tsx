import { forwardRef } from 'react';

import cn from 'clsx';
import { Box, type BoxProps } from '../Box';
import * as styles from './TableFooter.css';

export type TableFooterProps = BoxProps<'tfoot'>;

export const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ children, className, ...props }, ref) => (
    <Box asChild className={cn(styles.footer, className)} {...props}>
      <tfoot ref={ref}>{children}</tfoot>
    </Box>
  )
);

TableFooter.displayName = 'TableFooter';
