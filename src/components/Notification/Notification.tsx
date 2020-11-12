/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import {
  actionsContainer,
  infoContainer,
  notificationsContainer,
  infoIconContainer,
  infoMessageContainer,
  primaryActionContainer,
  closeIconContainer,
} from './Notification.style';
import Icon from '../Icon';

export type NotificationTypes = 'success' | 'error' | 'info' | 'alert';

export type NotificationVariants = 'inline' | 'banner' | 'toast' | 'modal';

export type Props = {
  /** The (message) informative message of the Notification */
  message: string;
  /** The variant of the Notification */
  variant: NotificationVariants;
  /** The type of the Notification */
  type: NotificationTypes;
  /** The primary action of the Notification */
  primaryAction: () => void;
  /** The title (message heading) of the Notification */
  title?: string;
  /** The description of the Notification */
  description?: string;
  /** The scondary action of the Notification */
  secondaryAction?: () => void;
};

const Notification: React.FC<Props> = ({
  message,
  variant,
  type,
  primaryAction,
  title,
  description,
  secondaryAction,
}) => {
  const iconColor =
    type === 'success'
      ? 'success'
      : type === 'error'
      ? 'error'
      : type === 'info'
      ? 'info'
      : type === 'alert'
      ? 'warning'
      : 'primary';

  return (
    <div css={notificationsContainer(type)}>
      <div css={infoContainer()}>
        <div css={infoIconContainer()}>
          <Icon name={type} color={iconColor} />
        </div>
        <div css={infoMessageContainer()}>{message}</div>
      </div>
      <div css={actionsContainer()}>
        <span
          css={primaryActionContainer()}
          onClick={e => {
            e.preventDefault();
          }}
        >
          Action
        </span>
        <div css={closeIconContainer()}>
          <Icon name="close" color="dark" />
        </div>
      </div>
    </div>
  );
};

export default Notification;
