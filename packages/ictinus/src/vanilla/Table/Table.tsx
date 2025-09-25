import { forwardRef } from 'react';

import { cn } from '../../utils/cn';
import { Box, type BoxProps, extractBoxProps } from '../Box';
import * as styles from './Table.css';

export type TableProps = BoxProps<'table', styles.TableVariants>;

export const Table = forwardRef<HTMLDivElement, TableProps>(
  ({ children, className, layout = 'auto', style, ...props }, ref) => {
    const { boxProps, restProps } = extractBoxProps(props);

    return (
      <Box ref={ref} style={style} className={cn(styles.wrapper({}), className)} {...boxProps}>
        <Box asChild className={styles.table({ layout })} {...restProps}>
          <table>{children}</table>
        </Box>
      </Box>
    );
  }
);

Table.displayName = 'Table';
