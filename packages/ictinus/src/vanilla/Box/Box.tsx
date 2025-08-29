import { atoms, sprinkles, type Atoms } from '@orfium/tokens/css';
import clsx, { type ClassValue } from 'clsx';
import React, { forwardRef, type AllHTMLAttributes, type ElementType } from 'react';

type HTMLProperties<T = HTMLElement> = Omit<
  AllHTMLAttributes<T>,
  'as' | 'className' | 'color' | 'height' | 'width' | 'size'
>;

type Props = Atoms &
  HTMLProperties & {
    as?: ElementType;
    className?: ClassValue;
  };

export const Box = forwardRef<HTMLElement, Props>(
  ({ as = 'div', className, ...props }: Props, ref) => {
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
  }
);

export type BoxProps = Parameters<typeof Box>[0];

Box.displayName = 'Box';
