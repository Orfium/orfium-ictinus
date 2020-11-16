/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import {
  actionsContainer,
  infoContainer,
  notificationsContainer,
  infoIconContainer,
  infoMessageContainer,
  headMessageContainer,
  primaryActionContainer,
  closeIconContainer,
} from './CompactNotification.style';
import Icon from '../../../Icon';
import { AcceptedColorComponentTypes } from 'utils/themeFunctions';
import { NotificationTypes } from '../../Notification';

export type CompactNotificationVariants = 'inline' | 'banner';

export type Props = {
  /** Show notification icon based on the type */
  withIcon: boolean;
  /** Use color filling */
  withFilling: boolean;
  /** The (message) informative message of the Notification */
  message: string;
  /** The variant of the Notification */
  variant: CompactNotificationVariants;
  /** The type of the Notification */
  type: NotificationTypes;
  /** The primary call-to-action label of the Notification */
  primaryCTALabel: string;
  /** The primary call-to-action of the Notification */
  primaryCTA: () => void;
  /** The title (message heading) of the Notification */
  title?: string;
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

const CompactNotification: React.FC<Props> = ({
  withIcon,
  withFilling,
  message,
  variant,
  type,
  primaryCTALabel,
  primaryCTA,
  title,
}) => {
  return (
    <div css={notificationsContainer(withFilling, variant, type)}>
      <div css={infoContainer()}>
        {withIcon && (
          <div css={infoIconContainer()}>
            <Icon name={type} color={typeToColor(type)} />
          </div>
        )}
        {variant === 'banner' && <div css={headMessageContainer()}>{title}</div>}
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

export default CompactNotification;
