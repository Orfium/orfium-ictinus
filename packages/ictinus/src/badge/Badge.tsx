import { forwardRef, type RefObject } from 'react';

import { SlotProvider, useSlotProps } from '../components/utils/Slots';
import { useDOMRef } from '../components/utils/useDOMRef';
import { cn } from '../utils/cn';
import { Box, type BoxProps } from '../vanilla/Box';
import { Text } from '../vanilla/Text';
import * as styles from './Badge.css';

export type BadgeProps = BoxProps<'span', NonNullable<styles.BadgeVariants>>;

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (props, ref: RefObject<HTMLSpanElement>) => {
    props = useSlotProps(props, 'badge');
    const { children, className, colorScheme, size, ...restProps } = props;

    const domRef = useDOMRef(ref);

    return (
      <Box asChild className={cn(styles.badge({ colorScheme, size }), className)} {...restProps}>
        <span ref={domRef}>
          <SlotProvider
            slots={{
              icon: { size: size === 'small' ? 'xs' : 'sm', flexShrink: '0' },
              text: { className: styles.badgeText({ size }) },
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

export type CodeBadgeProps = Omit<BadgeProps, 'colorScheme'>;

export const CodeBadge = forwardRef<HTMLSpanElement, CodeBadgeProps>(
  (props, ref: RefObject<HTMLSpanElement>) => {
    props = useSlotProps(props, 'codeBadge');
    const { children, className, size, ...restProps } = props;

    const domRef = useDOMRef(ref);

    return (
      <Box asChild className={cn(styles.codeBadge({ size }), className)} {...restProps}>
        <span ref={domRef}>
          <SlotProvider
            slots={{
              icon: { size: size === 'small' ? 'xs' : 'sm', flexShrink: '0' },
              text: { className: styles.codeBadgeText({ size }) },
            }}
          >
            {typeof children === 'string' ? <Text>{children}</Text> : children}
          </SlotProvider>
        </span>
      </Box>
    );
  }
);

CodeBadge.displayName = 'CodeBadge';
