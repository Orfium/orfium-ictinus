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
import { AcceptedColorComponentTypes } from 'utils/themeFunctions';

export type NotificationTypes = 'success' | 'error' | 'info' | 'alert';

export type NotificationVariants = 'inline' | 'banner' | 'toast' | 'modal';

export type Props = {
  /** The (message) informative message of the Notification */
  message: string;
  /** The variant of the Notification */
  variant: NotificationVariants;
  /** The type of the Notification */
  type: NotificationTypes;
  /** The primary call-to-action label of the Notification */
  primaryCTALabel: string;
  /** The primary call-to-action of the Notification */
  primaryCTA: () => void;
  /** The title (message heading) of the Notification */
  title?: string;
  /** The description of the Notification */
  description?: string;
  /** The secondary call-to-action label of the Notification */
  secondaryCTALabel?: string;
  /** The secondary call-to-action of the Notification */
  secondaryCTA?: () => void;
};

const typeToColor = (type: string): AcceptedColorComponentTypes =>
  type === 'success'
    ? 'success'
    : type === 'error'
    ? 'error'
    : type === 'info'
    ? 'darkBlue400'
    : type === 'alert'
    ? 'warning'
    : 'primary';

const Notification: React.FC<Props> = ({
  message,
  variant,
  type,
  primaryCTALabel,
  primaryCTA,
  title,
  description,
  secondaryCTALabel,
  secondaryCTA,
}) => {
  return (
    <div css={notificationsContainer(variant, type)}>
      <div css={infoContainer()}>
        <div css={infoIconContainer()}>
          <Icon name={type} color={typeToColor(type)} />
        </div>
        <div css={infoMessageContainer()}>{message}</div>
      </div>
      <div css={actionsContainer()}>
        <span
          css={primaryActionContainer()}
          onClick={e => {
            e.preventDefault();
            primaryCTA();
          }}
        >
          {primaryCTALabel}
        </span>
        <div css={closeIconContainer()}>
          <Icon name="close" color="lightGray500" />
        </div>
      </div>
    </div>
  );
};

export default Notification;
