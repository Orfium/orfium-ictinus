import { default as React } from 'react';
export type WindowProps = {
    rowHeight: number;
    children: Array<JSX.Element>;
    gap?: number;
    isVirtualizationEnabled?: boolean;
} & React.InputHTMLAttributes<HTMLUListElement>;
/**
 * Custom component to implement virtualization of a Ul list
 * We used a custom solution in order to provide a semantically correct UL list with accessibility (aria) included.
 * Other solutions such as react-window etc couldn't override to use UL lists and pass with ...rest properties
 * */
declare const Window: React.ForwardRefExoticComponent<{
    rowHeight: number;
    children: Array<JSX.Element>;
    gap?: number;
    isVirtualizationEnabled?: boolean;
} & React.InputHTMLAttributes<HTMLUListElement> & React.RefAttributes<HTMLUListElement>>;
export default Window;
