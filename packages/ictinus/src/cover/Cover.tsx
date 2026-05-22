import { forwardRef } from 'react';

import { cn } from '../utils/cn';
import { Box, type BoxProps } from '../vanilla/Box';
import * as styles from './Cover.css';

export type CoverProps = BoxProps<'div', styles.CoverVariants>;

/**
 * Use `Cover` to to expand and fill up the whole area of the parent which has `position: relative` using the `::before` pseudo element.
 */
export const Cover = forwardRef<HTMLDivElement, CoverProps>(
  ({ className, disabled = false, inset = false, ...props }, ref) => (
    <Box ref={ref} className={cn(styles.cover({ disabled, inset }), className)} {...props} />
  )
);

Cover.displayName = 'Cover';
