import * as React from 'react';

import useTheme from '../../../../hooks/useTheme';
import { generateTestDataId } from '../../../../utils/helpers';
import { TestId } from '../../../../utils/types';
import Icon from '../../../Icon';
import { NotificationStyleType, NotificationTypes } from '../../Notification';
import { iconContainer, closeActionContainer } from '../../Notification.style';
import {
  actionsContainer,
  infoContainer,
  notificationsContainer,
  headContainer,
  primaryActionContainer,
} from './CompactNotification.style';
import { AcceptedIconNames } from 'components/Icon/types';

export type CompactNotificationVariants = 'inline' | 'banner' | 'card';

export type Props = {
  /** Show notification icon based on the type */
  withIcon?: boolean;
  /** The informative message of the Notification */
  message: string;
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
            <Icon name="close" color={utils.getColor('lightGrey', 650)} size={20} />
          </span>
        )}
      </div>
    </div>
  );
};

export default CompactNotification;
