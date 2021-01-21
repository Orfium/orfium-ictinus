/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { iconContainer, closeActionContainer } from '../../Notification.style';
import {
  actionsContainer,
  infoContainer,
  notificationsContainer,
  headContainer,
  primaryActionContainer,
} from './CompactNotification.style';
import Icon from '../../../Icon';
import { NotificationTypes } from '../../Notification';
import { AcceptedIconNames } from 'components/Icon/types';
import { generateTestDataId } from '../../../../utils/helpers';
import { TestId } from '../../../../utils/types';
import useTheme from '../../../../hooks/useTheme';

export type CompactNotificationVariants = 'inline' | 'banner' | 'card';

export type Props = {
  /** Show notification icon based on the type */
  withIcon?: boolean;
  /** Use color filling */
  withFilling?: boolean;
  /** The informative message of the Notification */
  message: string;
  /** The variant of the Notification */
  variant: CompactNotificationVariants;
  /** The type of the Notification */
  type: NotificationTypes;
  /** The primary call-to-action label of the Notification */
  primaryCTALabel?: string;
  /** The primary call-to-action of the Notification */
  primaryCTA?: () => void;
  /** The closing call-to-action of the Notification */
  closeCTA?: () => void;
  /** The title (message heading) of the Notification */
  title?: string;
  /** The data test id if needed */
  dataTestId?: TestId;

  /** The secondary call-to-action label of the Notification */
  secondaryCTALabel?: string | undefined;
  /** The secondary call-to-action of the Notification */
  secondaryCTA?: (() => void) | undefined;
  /** The description of the Notification (only for toast) */
  description?: string | undefined;
  /** The closing call-to-action of the Toast */
};

export const typeToIconName = (type: NotificationTypes): AcceptedIconNames =>
  type === 'warning' ? 'alert' : type;

const CompactNotification: React.FC<Props> = ({
  withIcon = false,
  withFilling = false,
  message,
  variant,
  type,
  primaryCTALabel,
  primaryCTA,
  closeCTA,
  title,
  dataTestId,
}) => {
  const { utils } = useTheme();

  return (
    <div
      css={notificationsContainer(withFilling, type)}
      {...(variant == 'banner' && { 'notification-type': 'banner' })}
    >
      <div css={infoContainer()}>
        {withIcon && (
          <div css={iconContainer()}>
            <Icon name={typeToIconName(type)} color={type} size={20} />
          </div>
        )}
        {variant === 'banner' && <div css={headContainer()}>{title}</div>}
        <div>{message}</div>
      </div>
      <div css={actionsContainer()}>
        {primaryCTA && primaryCTALabel && (
          <span
            css={primaryActionContainer()}
            onClick={primaryCTA}
            data-testid={generateTestDataId('notification-primary', dataTestId)}
          >
            {primaryCTALabel}
          </span>
        )}
        {closeCTA && (
          <span
            css={closeActionContainer()}
            onClick={closeCTA}
            data-testid={generateTestDataId('notification-close', dataTestId)}
          >
            <Icon name="close" color={utils.getColor('lightGray', 500)} size={20} />
          </span>
        )}
      </div>
    </div>
  );
};

export default CompactNotification;
