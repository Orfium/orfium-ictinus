import { createSlot } from '@radix-ui/react-slot';
import { type ElementType, forwardRef } from 'react';

import { cn } from '../../utils/cn';
import { type ExtendProps } from '../../utils/ExtendProps';
import { Box, type BoxProps } from '../Box';
import * as styles from './Text.css';

const Slot = createSlot('@orfium/ictinus/Text');

export type TextProps<T extends ElementType = 'span', P = unknown> = BoxProps<
  T,
  ExtendProps<styles.TextVariants, P>
>;

export const Text = forwardRef<HTMLSpanElement, TextProps>(
  ({ asChild, children, className, lineClamp, truncate, ...props }, ref) => {
    const Comp = asChild ? Slot : 'span';

    return (
      <Box
        asChild
        ref={ref as any} // Box expects HTMLDivElement ref, but asChild forwards to span at runtime
        className={cn(styles.text({ lineClamp, truncate }), className)}
        {...props}
      >
        <Comp>{children}</Comp>
      </Box>
    );
  }
);

Text.displayName = 'Text';
