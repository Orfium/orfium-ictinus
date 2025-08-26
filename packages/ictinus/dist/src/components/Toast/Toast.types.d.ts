import { ReactElement, ReactNode } from 'react';
import { AriaToastProps, AriaToastRegionProps } from 'react-aria';
import { QueuedToast, ToastState } from 'react-stately';
/** Placement of the toast @default 'bottom right' */
export type ToastPlacement = 'bottom left' | 'bottom right';
/** Represents the possible status values for a toast. */
export type ToastStatus = 'neutral' | 'informational' | 'error' | 'warning' | 'success';
export type ToastValue = {
    /** The status of the toast. @default 'neutral' */
    status?: ToastStatus;
    /** Action buttons/links to display in the toast */
    actions?: ReactElement | ReactElement[];
    /** The main content of the toast */
    children?: ReactNode;
    /** Whether the toast is automatically dismissed */
    isDismissible?: boolean;
    /** Whether the toast should close when an action is clicked */
    shouldCloseOnAction?: boolean;
    /** Show the specified icon per status */
    hasIcon?: boolean;
};
export type ToastOptions = Partial<ToastValue> & {
    /** Container placement for this specific toast */
    placement?: ToastPlacement;
    /** Maximum visible toasts for this specific toast */
    maxVisibleToasts?: number;
    /** Handler that is called when the toast is closed, either by the user or after a timeout. */
    onClose?: () => void;
    /** A timeout to automatically close the toast after, in milliseconds. */
    timeout?: number;
};
export type ToastProps = AriaToastProps<ToastValue> & {
    toast: QueuedToast<ToastValue>;
    state: ToastState<ToastValue>;
};
export type ToastContainerProps = {
    placement?: ToastPlacement;
    maxVisibleToasts?: number;
};
export type ToastRegionProps = AriaToastRegionProps & {
    placement?: ToastPlacement;
    state: ToastState<ToastValue>;
};
