import React, { forwardRef, useId, useMemo } from 'react';
import type { ReactElement } from 'react';

import { getIconColor, styles } from './InlineAlert.style';
import type { InlineAlertProps } from './InlineAlert.types';
import Icon from '../Icon';

import useTheme from '~/hooks/useTheme';

export const InlineAlert = forwardRef<HTMLDivElement, InlineAlertProps>(function InlineAlert(
  props: InlineAlertProps,
  ref
) {
  const { status = 'neutral', actions, children, onDismiss, testId, ...otherProps } = props;

  const theme = useTheme();
  const dismissId = useId();

  const actionsArray = useMemo(() => {
    const actionElements =
      actions && (actions as ReactElement).type === React.Fragment
        ? (actions as ReactElement).props.children
        : actions;

    return React.Children.toArray(actionElements);
  }, [actions]);

  return (
    <div
      {...otherProps}
      css={styles['inline-alert'](props)}
      ref={ref}
      tabIndex={0}
      role={status === 'warning' || status === 'error' ? 'alert' : 'status'}
      aria-live="polite"
      aria-describedby={onDismiss ? dismissId : undefined}
      data-slot="inline-alert"
      data-testid={testId}
    >
      {status !== 'neutral' && (
        <Icon
          role="img"
          aria-hidden="true"
          name={status}
          css={styles.icon}
          color={getIconColor(status, theme)}
        />
      )}
      <div css={styles.content}>{children}</div>
      {actionsArray.length > 0 && <div css={styles.actions}>{actionsArray}</div>}
      {onDismiss && (
        <Icon
          role="button"
          aria-label="Dismiss notification"
          id={onDismiss ? dismissId : undefined}
          name="close"
          css={styles.dismiss}
          onClick={onDismiss}
          size={20}
        />
      )}
    </div>
  );
});
