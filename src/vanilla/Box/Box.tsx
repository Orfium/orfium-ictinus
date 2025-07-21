import clsx, { type ClassValue } from 'clsx';
import React, { forwardRef, memo, type AllHTMLAttributes, type ElementType } from 'react';
import { atoms, type Atoms } from '~/css/atoms';
import { sprinkles } from '~/css/sprinkles.css';

type HTMLProperties<T = HTMLElement> = Omit<
  AllHTMLAttributes<T>,
  'as' | 'className' | 'color' | 'height' | 'width' | 'size'
>;

type Props = Atoms &
  HTMLProperties & {
    // eslint-disable-next-line react/no-unused-prop-types
    as?: ElementType;
    // eslint-disable-next-line react/no-unused-prop-types
    className?: ClassValue;
  };

export const Box = memo(
  forwardRef<HTMLElement, Props>(({ as = 'div', className, ...props }: Props, ref) => {
    const atomProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    for (const key in props) {
      if (sprinkles.properties.has(key as keyof Atoms)) {
        atomProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    const atomicClasses = atoms({
      ...atomProps,
    });

    return React.createElement(as, {
      className: clsx(atomicClasses, className),
      ...nativeProps,
      ref,
    });
  })
);

export type BoxProps = Parameters<typeof Box>[0];

Box.displayName = 'Box';
