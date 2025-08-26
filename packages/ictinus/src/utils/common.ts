import type * as React from 'react';
import type { ButtonHTMLAttributes } from 'react';

type FunctionProps = {
  children: () => React.ReactNode;
};
export const Function = ({ children }: FunctionProps) => children();

/** A type to turn any type optional properties to required */
export type RequiredProperties<T> = { [K in keyof T]-?: T[K] };

/** A generic type for native events */
export type EventProps = {
  onClick?: () => void;
  onBlur?: () => void;
};

//@TODO fix props to not overwrite button props from base
export type CommonButtonProps = Partial<
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'size' | 'css' | 'onBlur' | 'onClick' | 'type' | 'disabled'
  >
>;

//@TODO fix props to not overwrite div props from base
export type DivProps = Partial<Omit<React.HTMLProps<HTMLDivElement>, 'color' | 'size' | 'css'>>;

export type FlexDirectionProperty = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
