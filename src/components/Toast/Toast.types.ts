import type { ReactElement, ReactNode } from 'react';
import type { AriaToastProps, AriaToastRegionProps } from 'react-aria';
import type { QueuedToast, ToastState } from 'react-stately';

export type ToastPlacement = 'bottom left' | 'bottom right';

export type ToastOptions = {
  actions?: ReactElement | ReactElement[];
  icon?: ReactNode;
  isDismissible?: boolean;
  placement?: ToastPlacement;
  maxVisibleToasts?: number;
  /** Handler that is called when the toast is closed, either by the user or after a timeout. */
  onClose?: () => void;
  /** A timeout to automatically close the toast after, in milliseconds. */
  timeout?: number;
};

export type ToastValue = {
  actions?: ReactElement | ReactElement[];
  children?: ReactNode;
  icon?: ReactNode;
  isDismissible?: boolean;
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
