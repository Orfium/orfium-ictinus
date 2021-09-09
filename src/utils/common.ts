import * as React from 'react';

/** A type to turn any type optional properties to required */
export type RequiredProperties<T> = { [K in keyof T]-?: T[K] };

/** A generic type for native events */
export type EventProps = {
  onClick?: () => void;
  onBlur?: () => void;
};

//@TODO fix props to not overwrite button props from base
export type ButtonProps = Omit<
  React.HTMLProps<HTMLButtonElement>,
  'size' | 'css' | 'onBlur' | 'onClick'
>;

//@TODO fix props to not overwrite div props from base
export type DivProps = Omit<React.HTMLProps<HTMLDivElement>, 'size' | 'css'>;

export type FlexDirectionProperty = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
