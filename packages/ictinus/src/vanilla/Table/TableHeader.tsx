import { forwardRef } from 'react';

import { cn } from '../../utils/cn';
import { Box, type BoxProps } from '../Box';
import * as styles from './TableHeader.css';

export type TableHeaderProps = BoxProps<'thead', NonNullable<styles.HeaderVariants>>;

export const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ children, className, pinned, ...props }, ref) => (
    <Box
      asChild
      data-pinned={pinned ? '' : undefined}
      className={cn(styles.header({ pinned }), className)}
      {...props}
    >
      <thead ref={ref}>{children}</thead>
    </Box>
  )
);

TableHeader.displayName = 'TableHeader';
