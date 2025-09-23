import { createSlot } from '@radix-ui/react-slot';
import { type ElementType, forwardRef } from 'react';

import cn from 'clsx';
import { type ExtendProps } from '../../utils/ExtendProps';
import { Box, type BoxProps } from '../Box';
import * as styles from './Text.css';

const Slot = createSlot('@orfium/ictinus/Text');

export type TextProps<T extends ElementType = 'p', P = unknown> = BoxProps<
  T,
  ExtendProps<styles.TextVariants, P>
>;

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ asChild, children, className, lineClamp, truncate, ...props }, ref) => {
    const Comp = asChild ? Slot : 'p';

    return (
      <Box
        asChild
        ref={ref}
        className={cn(styles.text({ lineClamp, truncate }), className)}
        {...props}
      >
        <Comp>{children}</Comp>
      </Box>
    );
  }
);

Text.displayName = '@orfium/ictinus/Text';
