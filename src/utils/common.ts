import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';

/** A type to turn any type optional properties to required */
export type RequiredProperties<T> = { [K in keyof T]-?: T[K] };

/** A generic type for native events */
export type EventProps = {
  onClick?: () => void;
  onBlur?: () => void;
};

//@TODO fix props to not overwrite button props from base
export type ButtonProps = Partial<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'css' | 'onBlur' | 'onClick' | 'type'>
>;

//@TODO fix props to not overwrite div props from base
export type DivProps = Partial<Omit<React.HTMLProps<HTMLDivElement>, 'size' | 'css'>>;

export type FlexDirectionProperty = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

/** URL currently used for figma version 4.5 frozen */
export const FIGMA_URL =
  'https://www.figma.com/file/3deO7jGtkly8ij4TiIUpzY/Design-System-V4.5-(%E2%9D%84%EF%B8%8FDO-NOT-EDIT)';
