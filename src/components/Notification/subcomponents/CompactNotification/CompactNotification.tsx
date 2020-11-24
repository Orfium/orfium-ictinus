/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import {
  actionsContainer,
  infoContainer,
  notificationsContainer,
  infoIconContainer,
  headMessageContainer,
  primaryActionContainer,
  closeIconContainer,
} from './CompactNotification.style';
import Icon from '../../../Icon';
import { AcceptedIconNames } from 'components/Icon/types';
import { NotificationTypes } from '../../Notification';
import { generateTestDataId } from '../../../../utils/helpers';
import { TestId } from '../../../../utils/types';

export type CompactNotificationVariants = 'inline' | 'banner';

export type Props = {
  /** Show notification icon based on the type */
  withIcon: boolean;
  /** Use color filling */
  withFilling: boolean;
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
};

const typeToIconName = (type: NotificationTypes): AcceptedIconNames =>
  type === 'warning' ? 'alert' : type;

const CompactNotification: React.FC<Props> = ({
  withIcon,
  withFilling,
  message,
  variant,
  type,
  primaryCTALabel,
  primaryCTA,
  closeCTA,
  title,
  dataTestId,
}) => {
  return (
    <div css={notificationsContainer(withFilling, type)}>
      <div css={infoContainer()}>
        {withIcon && (
          <div css={infoIconContainer()}>
            <Icon name={typeToIconName(type)} color={type} />
          </div>
        )}
        {variant === 'banner' && <div css={headMessageContainer()}>{title}</div>}
        <div>{message}</div>
      </div>
      <div css={actionsContainer()}>
        {primaryCTA && (
          <span
            css={primaryActionContainer()}
            onClick={primaryCTA}
            data-testid={generateTestDataId('notification-primary', dataTestId)}
          >
            {primaryCTALabel}
          </span>
        )}
        {closeCTA && (
          <div
            css={closeIconContainer()}
            onClick={closeCTA}
            data-testid={generateTestDataId('notification-close', dataTestId)}
          >
            <Icon name="close" color="lightGray500" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CompactNotification;
