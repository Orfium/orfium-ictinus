import { createSlot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { forwardRef, type ComponentPropsWithoutRef, type ElementType } from 'react';
import { version } from '../../../package.json';
import { sprinkles, type Sprinkles } from '../../sprinkles';
import { extractBoxProps } from './extractBoxProps';

const Slot = createSlot('@orfium/ictinus/Box');

export type BoxProps<T extends ElementType = 'div'> = ComponentPropsWithoutRef<T> &
  Sprinkles & {
    asChild?: boolean;
    className?: string;
  };

export const Box = forwardRef<HTMLDivElement, BoxProps>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'div';
  const { boxProps, restProps } = extractBoxProps(props);

  return (
    <Comp
      data-ictinus={version}
      ref={ref}
      className={clsx(className, sprinkles(boxProps))}
      {...restProps}
    />
  );
});

Box.displayName = 'Box';
