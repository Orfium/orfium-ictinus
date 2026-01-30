import { forwardRef } from 'react';

import { cn } from '../utils/cn';
import { Box, type BoxProps } from '../vanilla/Box';
import * as styles from './ActionsRoot.css';

export type ActionsRootProps = BoxProps<'div'>;

export const ActionsRoot = forwardRef<HTMLDivElement, ActionsRootProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Box ref={ref} className={cn(styles.root({}), className)} {...props}>
        {children}
      </Box>
    );
  }
);

ActionsRoot.displayName = 'ActionsRoot';
