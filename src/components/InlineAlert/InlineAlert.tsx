import React, { forwardRef, useEffect, useRef } from 'react';
import type { ReactElement, RefObject } from 'react';
import { useId } from 'react-aria';

import { getIconColor, styles } from './InlineAlert.style';
import type { InlineAlertProps } from './InlineAlert.types';
import Icon from '../Icon';
import { useDOMRef } from '../utils/useDOMRef';

import useTheme from '~/hooks/useTheme';

export const InlineAlert = forwardRef<HTMLDivElement, InlineAlertProps>(
  (props: InlineAlertProps, ref: RefObject<HTMLDivElement>) => {
    const {
      status = 'neutral',
      actions,
      children,
      onDismiss,
      testId,
      dismissTestId,
      hasAutoFocus,
      ...otherProps
    } = props;
    const theme = useTheme();
    const dismissId = useId();
    const domRef = useDOMRef(ref);

    const actionElements =
      actions && (actions as ReactElement).type === React.Fragment
        ? (actions as ReactElement).props.children
        : actions;
    const actionsArray = React.Children.toArray(actionElements);

    const autoFocusRef = useRef(hasAutoFocus);
    useEffect(() => {
      if (autoFocusRef.current && domRef.current) {
        domRef.current.focus();
      }
      autoFocusRef.current = false;
    }, [domRef]);

    return (
      <div
        {...otherProps}
        css={styles['inline-alert'](props)}
        ref={domRef}
        tabIndex={0}
        role={status === 'warning' || status === 'error' ? 'alert' : 'status'}
        aria-describedby={onDismiss ? dismissId : undefined}
        data-slot="inline-alert"
        data-testid={testId}
      >
        {status !== 'neutral' ? (
          <Icon
            role="img"
            aria-hidden="true"
            name={status}
            css={styles.icon}
            color={getIconColor(status, theme)}
          />
        ) : null}
        <div css={styles.content}>{children}</div>
        {actionsArray.length > 0 ? <div css={styles.actions}>{actionsArray}</div> : null}
        {onDismiss ? (
          <Icon
            role="button"
            aria-label="Dismiss notification"
            id={onDismiss ? dismissId : undefined}
            data-testid={dismissTestId}
            name="close"
            css={styles.dismiss}
            onClick={onDismiss}
            size={20}
          />
        ) : null}
      </div>
    );
  }
);

InlineAlert.displayName = 'InlineAlert';
