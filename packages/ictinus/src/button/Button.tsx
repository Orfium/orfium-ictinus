import { forwardRef, type RefObject } from 'react';
import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps,
} from 'react-aria-components';

import { SlotProvider, useSlotProps } from '../components/utils/Slots';
import { cn } from '../utils/cn';
import { Box, extractBoxProps, type BoxProps } from '../vanilla/Box';
import { Text } from '../vanilla/Text';
import * as styles from './Button.css';

export type ButtonProps = BoxProps<'button', NonNullable<styles.ButtonVariants>> &
  ButtonPrimitiveProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'normal',
      iconOnly,
      circle,
      isPending,
      isDisabled,
      children,
      ...props
    },
    ref: RefObject<HTMLButtonElement>
  ) => {
    props = useSlotProps(props, 'button');
    const domRef = useDOMRef(ref);
    const { boxProps, restProps } = extractBoxProps(props);

    return (
      <Box asChild {...boxProps}>
        <ButtonPrimitive
          ref={domRef}
          data-variant={variant}
          data-size={size}
          aria-disabled={isPending ? 'true' : undefined}
          isPending={isPending}
          isDisabled={isDisabled}
          {...restProps}
          className={cn(
            styles.button({ variant, size, iconOnly, circle, isPending, isDisabled }),
            boxProps.className
          )}
        >
          <SlotProvider
            slots={{
              icon: {
                size: size === 'normal' ? 'md' : 'sm',
                flexShrink: '0',
                visibility: isPending ? 'hidden' : 'visible',
              },
              text: {
                className: styles.text({ size, isPending }),
              },
            }}
          >
            {typeof children === 'string' ? <Text>{children}</Text> : children}
            {isPending && (
              <ProgressCircle
                aria-label={restProps['aria-label']}
                isIndeterminate
                className={styles.progress}
              />
            )}
          </SlotProvider>
        </ButtonPrimitive>
      </Box>
    );
  }
);

Button.displayName = 'Button';

import type { ProgressBarProps } from 'react-aria-components';
import { composeRenderProps, ProgressBar } from 'react-aria-components';
import { useDOMRef } from '~/components/utils/useDOMRef';

export interface ProgressCircleProps extends ProgressBarProps {
  size?: number;
}

export function ProgressCircle(props: ProgressCircleProps) {
  // SVG strokes are centered, so subtract half the stroke width from the radius to create an inner stroke.
  const strokeWidth = 4;
  const radius = `calc(50% - ${strokeWidth / 2}px)`;

  return (
    <ProgressBar
      {...props}
      style={composeRenderProps(props.style, (style) => ({
        ...style,
        width: props.size || 16,
        height: props.size || 16,
      }))}
    >
      {({ percentage, isIndeterminate }) => (
        <>
          <svg fill="none" width="100%" height="100%" viewBox="0 0 32 32">
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="currentcolor"
              opacity={0.5}
              strokeWidth={strokeWidth}
            />
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="currentcolor"
              strokeWidth={strokeWidth}
              // Normalize the path length to 100 so we can easily set stroke-dashoffset to a percentage.
              pathLength="100"
              // Add extra gap between dashes so 0% works in Chrome.
              strokeDasharray="100 200"
              strokeDashoffset={100 - (isIndeterminate || percentage == null ? 25 : percentage)}
              strokeLinecap="round"
              style={{
                rotate: '-90deg',
                transformOrigin: 'center center',
              }}
            >
              {isIndeterminate && (
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  dur="0.75s"
                  values="0;360"
                  repeatCount="indefinite"
                />
              )}
            </circle>
          </svg>
        </>
      )}
    </ProgressBar>
  );
}
