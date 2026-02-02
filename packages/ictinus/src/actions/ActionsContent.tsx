import { forwardRef } from 'react';

import { cn } from '../utils/cn';
import { Box, type BoxProps } from '../vanilla/Box';
import * as styles from './ActionsContent.css';

export type ActionsContentProps = BoxProps<'div', styles.ContentVariants>;

export const ActionsContent = forwardRef<HTMLDivElement, ActionsContentProps>(
  ({ children, className, visible = 'if-needed', ...props }, ref) => {
    return (
      <Box ref={ref} className={cn(styles.content({ visible }), className)} {...props}>
        {children}
      </Box>
    );
  }
);

ActionsContent.displayName = 'ActionsContent';
