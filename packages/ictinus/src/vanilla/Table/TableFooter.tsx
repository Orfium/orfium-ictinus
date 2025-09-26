import { forwardRef } from 'react';

import { cn } from '../../utils/cn';
import { Box, type BoxProps } from '../Box';
import * as styles from './TableFooter.css';

export type TableFooterProps = BoxProps<'tfoot', NonNullable<styles.FooterVariants>>;

export const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ children, className, pinned = false, ...props }, ref) => (
    <Box asChild className={cn(styles.footer({ pinned }), className)} {...props}>
      <tfoot ref={ref}>{children}</tfoot>
    </Box>
  )
);

TableFooter.displayName = 'TableFooter';
