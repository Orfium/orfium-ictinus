import { createSlot } from '@radix-ui/react-slot';
import { forwardRef, type ReactElement } from 'react';

import { cn } from '../utils/cn';
import { Box, type BoxProps } from '../vanilla/Box';
import * as styles from './Skeleton.css';

const Slot = createSlot('@orfium/ictinus/Skeleton');

export type SkeletonProps = BoxProps<
  'span',
  {
    children?: ReactElement;
    circle?: boolean;
    rounded?: BoxProps['rounded'];
  }
>;

export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(
  ({ asChild = true, children, circle, className, rounded = '2', ...props }, ref) => {
    return (
      <Box
        asChild={asChild}
        rounded={circle || rounded === '7' ? '7' : rounded}
        className={cn(styles.skeleton({}), className)}
        {...props}
      >
        <Slot ref={ref}>{children ? children : <span />}</Slot>
      </Box>
    );
  }
);

Skeleton.displayName = 'Skeleton';
