import { forwardRef, type ReactNode } from 'react';

import { SlotProvider } from '../../components/utils/Slots';
import { cn } from '../../utils/cn';
import { Box, type BoxProps } from '../Box';
import { Text } from '../Text';
import * as styles from './Badge.css';

export type BadgeColor = 'neutral' | 'blue' | 'red' | 'purple' | 'teal' | 'orange';
export type BadgeSize = 'normal' | 'small';
export type BadgeVariant = 'default' | 'code';

export type BadgeProps = BoxProps<
  'span',
  {
    color?: BadgeColor;
    size?: BadgeSize;
    variant?: BadgeVariant;
    children?: ReactNode;
  }
>;

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    { children, className, color = 'neutral', size = 'normal', variant = 'default', ...props },
    ref
  ) => {
    return (
      <Box
        asChild
        ref={ref}
        data-variant={variant}
        data-size={size}
        {...(variant === 'default' && { 'data-color': color })}
        className={cn(styles.badge({ color, size, variant }), className)}
        {...props}
      >
        <span>
          <SlotProvider
            slots={{
              icon: {
                size: size === 'small' ? 'xs' : 'sm',
                flexShrink: '0',
              },
              text: {
                className: styles.text({ color, size, variant }),
              },
            }}
          >
            {typeof children === 'string' ? <Text>{children}</Text> : children}
          </SlotProvider>
        </span>
      </Box>
    );
  }
);

Badge.displayName = 'Badge';
