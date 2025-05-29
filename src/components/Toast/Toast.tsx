import type { ReactElement, RefObject } from 'react';
import React, { forwardRef } from 'react';
import { useToast, useToastRegion } from 'react-aria';
import { createPortal, flushSync } from 'react-dom';
import { ToastQueue, useToastQueue } from 'react-stately';
import useTheme from '~/hooks/useTheme';
import Box from '../Box';
import Icon from '../Icon';
import { SlotProvider } from '../utils/Slots';
import { useDOMRef } from '../utils/useDOMRef';
import { styles } from './Toast.style';
import type {
  ToastContainerProps,
  ToastOptions,
  ToastProps,
  ToastRegionProps,
  ToastValue,
} from './Toast.types';

const DEFAULT_TIMEOUT = 5000;
const DEFAULT_MAX_VISIBLE_TOASTS = 5;

function wrapInViewTransition(fn: () => void): void {
  if ('startViewTransition' in document) {
    document
      .startViewTransition(() => {
        flushSync(fn);
      })
      .ready.catch(() => {});
  } else {
    fn();
  }
}

const toastQueue = new ToastQueue<ToastValue>({
  maxVisibleToasts: DEFAULT_MAX_VISIBLE_TOASTS,
  wrapUpdate: wrapInViewTransition,
});

export const toast = (
  children: string,
  { isDismissible = true, timeout = DEFAULT_TIMEOUT, ...options }: ToastOptions = {}
) => {
  const toastValue: ToastValue = {
    children,
    ...options,
  };

  return toastQueue.add(toastValue, {
    timeout: isDismissible ? timeout : undefined,
    onClose: options.onClose,
  });
};

toast.dismiss = (key: string) => {
  toastQueue.close(key);
};

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ state, ...props }: ToastProps, ref: RefObject<HTMLDivElement>) => {
    const domRef = useDOMRef(ref);
    const theme = useTheme();
    const { toastProps, contentProps, titleProps } = useToast(props, state, domRef);

    const actionElements =
      props.toast.content.actions &&
      (props.toast.content.actions as ReactElement).type === React.Fragment
        ? (props.toast.content.actions as ReactElement).props.children
        : props.toast.content.actions;
    const actionsArray = React.Children.toArray(actionElements);

    return (
      <div
        {...toastProps}
        ref={domRef}
        css={styles.toast}
        className="toast"
        style={
          {
            '--view-transition-name': props.toast.key,
          } as React.CSSProperties
        }
      >
        <div {...contentProps} css={styles.toastContent}>
          <SlotProvider
            slots={{
              icon: { size: 20 },
            }}
          >
            {props.toast.content.icon}
            <div {...titleProps}>{props.toast.content.children}</div>
          </SlotProvider>
        </div>
        <Box display="flex" alignItems="center" gap="6">
          {actionsArray.length > 0 ? (
            <div css={styles.toastActions}>
              <SlotProvider
                slots={{
                  button: { size: 'compact' },
                  link: { size: 2, type: 'inverted' },
                }}
              >
                {actionsArray}
              </SlotProvider>
            </div>
          ) : null}
          <Icon
            role="button"
            aria-label="Dismiss notification"
            name="close"
            onClick={() => state.close(props.toast.key)}
            color={theme.tokens.colors.get('textColor.inverted.secondary')}
            size={20}
          />
        </Box>
      </div>
    );
  }
);

Toast.displayName = 'Toast';

export const ToastContainer = forwardRef<HTMLDivElement, ToastContainerProps>(
  (
    { placement = 'bottom right', ...props }: ToastContainerProps,
    ref: RefObject<HTMLDivElement>
  ) => {
    const state = useToastQueue(toastQueue);

    return state.visibleToasts.length > 0
      ? createPortal(
          <ToastRegion ref={ref} {...props} placement={placement} state={state} />,
          document.body
        )
      : null;
  }
);

ToastContainer.displayName = 'ToastContainer';

const ToastRegion = forwardRef<HTMLDivElement, ToastRegionProps>(
  ({ placement, state, ...props }: ToastRegionProps, ref: RefObject<HTMLDivElement>) => {
    const domRef = useDOMRef(ref);
    const { regionProps } = useToastRegion(props, state, domRef);

    return (
      <div {...regionProps} ref={domRef} css={[styles.toastRegion, styles[placement]]}>
        {state.visibleToasts.map((toast) => (
          <Toast key={toast.key} toast={toast} state={state} />
        ))}
      </div>
    );
  }
);

ToastRegion.displayName = 'ToastRegion';
