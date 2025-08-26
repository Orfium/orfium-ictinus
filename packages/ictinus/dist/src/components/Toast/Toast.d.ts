import { ReactElement, default as React } from 'react';
import { ToastContainerProps, ToastOptions, ToastValue } from './Toast.types';
export declare const toast: {
    (children: string | ReactElement, { isDismissible, timeout, ...options }?: ToastOptions): string;
    dismiss(key: string): void;
};
export declare const Toast: React.ForwardRefExoticComponent<import('react-aria').AriaToastProps<ToastValue> & {
    toast: import('react-stately').QueuedToast<ToastValue>;
    state: import('react-stately').ToastState<ToastValue>;
} & React.RefAttributes<HTMLDivElement>>;
export declare const ToastContainer: React.ForwardRefExoticComponent<ToastContainerProps & React.RefAttributes<HTMLDivElement>>;
