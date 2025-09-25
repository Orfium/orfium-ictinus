import { forwardRef } from 'react';

import { cn } from '../../utils/cn';
import { Box, type BoxProps } from '../Box';
import * as styles from './TableBody.css';

export type TableBodyProps = BoxProps<'tbody'>;

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className, ...props }, ref) => (
    <Box asChild className={cn(styles.body, className)} {...props}>
      <tbody ref={ref}>{children}</tbody>
    </Box>
  )
);

TableBody.displayName = 'TableBody';
