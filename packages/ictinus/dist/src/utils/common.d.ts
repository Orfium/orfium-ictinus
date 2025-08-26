import { ButtonHTMLAttributes } from 'react';
import type * as React from 'react';
type FunctionProps = {
    children: () => React.ReactNode;
};
export declare const Function: ({ children }: FunctionProps) => React.ReactNode;
/** A type to turn any type optional properties to required */
export type RequiredProperties<T> = {
    [K in keyof T]-?: T[K];
};
/** A generic type for native events */
export type EventProps = {
    onClick?: () => void;
    onBlur?: () => void;
};
export type CommonButtonProps = Partial<Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'css' | 'onBlur' | 'onClick' | 'type' | 'disabled'>>;
export type DivProps = Partial<Omit<React.HTMLProps<HTMLDivElement>, 'color' | 'size' | 'css'>>;
export type FlexDirectionProperty = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export {};
