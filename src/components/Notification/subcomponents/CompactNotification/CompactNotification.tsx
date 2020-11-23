/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import {
  actionsContainer,
  infoContainer,
  notificationsContainer,
  iconContainer,
  primaryActionContainer,
  closeActionContainer,
} from './CompactNotification.style';
import Icon from '../../../Icon';
import { NotificationTypes } from '../../Notification';
import { AcceptedIconNames } from 'components/Icon/types';

export type CompactNotificationVariants = 'inline';

export type Props = {
  /** The informative message of the Notification */
  message: string;
  /** The variant of the Notification */
  variant: CompactNotificationVariants;
  /** The type of the Notification */
  type: NotificationTypes;
  /** Show notification icon based on the type */
  withIcon: boolean;
  /** Use color filling */
  withFilling: boolean;
  /** The primary call-to-action label of the Notification */
  primaryCTALabel?: string;
  /** The primary call-to-action of the Notification */
  primaryCTA?: () => void;
  /** The closing call-to-action of the Notification */
  closeCTA?: () => void;
};

const typeToIconName = (type: string): AcceptedIconNames =>
  type === 'warning' ? 'alert' : (type as AcceptedIconNames);

const CompactNotification: React.FC<Props> = ({
  message,
  type,
  withIcon,
  withFilling,
  primaryCTALabel,
  primaryCTA,
  closeCTA,
}) => {
  return (
    <div css={notificationsContainer(withFilling, type)}>
      <div css={infoContainer()}>
        {withIcon && (
          <div css={iconContainer()}>
            <Icon name={typeToIconName(type)} color={type} />
          </div>
        )}
        <div>{message}</div>
      </div>
      <div css={actionsContainer()}>
        {primaryCTA && primaryCTALabel && (
          <span css={primaryActionContainer()} onClick={primaryCTA}>
            {primaryCTALabel}
          </span>
        )}
        {closeCTA && (
          <span css={closeActionContainer()} onClick={closeCTA}>
            <Icon name="close" color="lightGray500" />
          </span>
        )}
      </div>
    </div>
  );
};

export default CompactNotification;
