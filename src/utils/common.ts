import * as React from 'react';

/** URL currently used for figma */
export const FIGMA_URL =
  'https://www.figma.com/file/8kMPBNYHHXz2AtkzeeDmk5/Design-System-V4---%E2%9A%A0%EF%B8%8F-Working-File-(do-not-update-libraries)';

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
