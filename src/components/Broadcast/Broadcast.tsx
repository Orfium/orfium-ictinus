import React, { forwardRef, useEffect, useRef } from 'react';
import type { ReactElement, RefObject } from 'react';
import { useId } from 'react-aria';

import { getIconColor, styles } from './Broadcast.style';
import type { BroadcastProps } from './Broadcast.types';
import Icon from '../Icon';
import { SlotProvider } from '../utils/Slots';
import { useDOMRef } from '../utils/useDOMRef';

import useTheme from '~/hooks/useTheme';

export const Broadcast = forwardRef<HTMLDivElement, BroadcastProps>(
  (props: BroadcastProps, ref: RefObject<HTMLDivElement>) => {
    const {
      status = 'neutral',
      actions,
      children,
      onDismiss,
      dataTestPrefixId = '',
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
        css={styles.broadcast(props)}
        ref={domRef}
        tabIndex={0}
        role={status === 'warning' || status === 'error' ? 'alert' : 'status'}
        aria-describedby={onDismiss ? dismissId : undefined}
        data-slot="inline-alert"
        data-testid={`${dataTestPrefixId}broadcast`}
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
        {actionsArray.length > 0 ? (
          <div css={styles.actions}>
            <SlotProvider
              slots={{
                button: { size: 'compact' },
                link: { size: 2 },
              }}
            >
              {actionsArray}
            </SlotProvider>
          </div>
        ) : null}
        {onDismiss ? (
          <Icon
            role="button"
            aria-label="Dismiss notification"
            id={onDismiss ? dismissId : undefined}
            data-testid={`${dataTestPrefixId}broadcast_dismiss`}
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

Broadcast.displayName = 'Broadcast';
