import * as React from 'react';

import useTheme from '../../../../hooks/useTheme';
import { generateTestDataId } from '../../../../utils/helpers';
import { TestId } from '../../../../utils/types';
import Button from '../../../Button';
import Icon from '../../../Icon';
import { NotificationStyleType, NotificationTypes } from '../../Notification';
import { iconContainer, actionContainer } from '../../Notification.style';
import {
  actionsContainer,
  infoContainer,
  notificationsContainer,
  headContainer,
  primaryActionContainer,
  messageContainer,
} from './CompactNotification.style';
import { AcceptedIconNames } from 'components/Icon/types';

export type CompactNotificationVariants = 'inline' | 'banner' | 'card';

export type CompactNotificationProps = {
  /** Show notification icon based on the type */
  hasIcon?: boolean;
  /** The informative message of the Notification */
  message: string | React.ReactNode;
  /** The variant of the Notification */
  variant: CompactNotificationVariants;
  /** The type of the Notification */
  type: NotificationTypes;
  /** The style type of the Notification. Defaults to elevated */
  styleType: NotificationStyleType;
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
  secondaryCTALabel?: string;
  /** The secondary call-to-action of the Notification */
  secondaryCTA?: () => void;
  /** The description of the Notification (only for toast) */
  description?: string;
  /** The closing call-to-action of the Toast */
};

export const typeToIconName = (type: NotificationTypes): AcceptedIconNames =>
  type === 'warning' ? 'alert' : type;

const CompactNotification: React.FC<CompactNotificationProps> = ({
  hasIcon = false,
  message,
  variant,
  type,
  styleType = 'elevated',
  primaryCTALabel,
  primaryCTA,
  closeCTA,
  title,
  dataTestId,
}) => {
  const { utils } = useTheme();

  return (
    <div
      css={notificationsContainer(type, styleType)}
      data-testid={generateTestDataId(variant, dataTestId)}
      {...(variant == 'banner' && { 'notification-type': 'banner' })}
    >
      <div css={infoContainer()}>
        {hasIcon && (
          <div css={iconContainer()}>
            <Icon name={typeToIconName(type)} color={type} size={20} />
          </div>
        )}
        {variant === 'banner' && (
          <div
            css={headContainer()}
            data-testid={generateTestDataId(`${variant}-title`, dataTestId)}
          >
            {title}
          </div>
        )}
        <div
          css={messageContainer()}
          data-testid={generateTestDataId(`${variant}-message`, dataTestId)}
        >
          {message}
        </div>
      </div>
      <div css={actionsContainer()}>
        {primaryCTA && primaryCTALabel && (
          <Button
            type="tertiary"
            css={primaryActionContainer()}
            onClick={primaryCTA}
            data-testid={generateTestDataId('notification-primary', dataTestId)}
          >
            {primaryCTALabel}
          </Button>
        )}
        {closeCTA && (
          <span
            css={actionContainer()}
            onClick={closeCTA}
            data-testid={generateTestDataId('notification-close', dataTestId)}
          >
            <Icon name="close" color={utils.getColor('lightGrey', 650)} size={20} />
          </span>
        )}
      </div>
    </div>
  );
};

export default CompactNotification;
