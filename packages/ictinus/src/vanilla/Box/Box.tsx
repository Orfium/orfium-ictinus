import { createSlot } from '@radix-ui/react-slot';
import { forwardRef, type ComponentPropsWithoutRef, type ElementType } from 'react';

import { sprinkles, type Sprinkles } from '../../sprinkles';
import { cn } from '../../utils/cn';
import { type ExtendProps } from '../../utils/ExtendProps';
import { version } from '../../version';
import { extractBoxProps } from './extractBoxProps';

const Slot = createSlot('@orfium/ictinus/Box');

export type BoxProps<T extends ElementType = 'div', P = unknown> = ExtendProps<
  ComponentPropsWithoutRef<T>,
  ExtendProps<
    Sprinkles & {
      asChild?: boolean;
      className?: string;
    },
    P
  >
>;

export const Box = forwardRef<HTMLDivElement, BoxProps>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'div';
  const { boxProps, restProps } = extractBoxProps(props);

  return (
    <Comp
      data-ictinus={version}
      ref={ref}
      className={cn(className, sprinkles(boxProps))}
      {...restProps}
    />
  );
});

Box.displayName = 'Box';
