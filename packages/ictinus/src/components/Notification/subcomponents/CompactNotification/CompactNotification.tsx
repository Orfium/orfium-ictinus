import * as React from 'react';
import type { SemanticColorsKey } from 'theme/tokens/semantic/colors';
import { generateTestDataId } from 'utils/helpers';
import type { TestId } from 'utils/types';

import {
  actionsContainer,
  infoContainer,
  notificationsContainer,
  headContainer,
  primaryActionContainer,
  messageContainer,
} from './CompactNotification.style';
import useTheme from '../../../../hooks/useTheme';
import Button from '../../../Button';
import Icon from '../../../Icon';
import type {
  NotificationActions,
  NotificationStyleType,
  NotificationTypes,
} from '../../Notification';
import { iconContainer, actionContainer, typeToColorStyle } from '../../Notification.style';
import type { AcceptedIconNames } from 'components/Icon';

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
  /** The description of the Notification (only for toast) */
  description?: string;
  /** The closing call-to-action of the Notification */
  closeCTA?: () => void;
  /** The title (message heading) of the Notification */
  title?: string;
  /** The data test id if needed */
  dataTestId?: TestId;
} & NotificationActions;

export const typeToIconName = (type: NotificationTypes): AcceptedIconNames =>
  type === 'info' ? 'informational' : type;

const CompactNotification: React.FCC<CompactNotificationProps> = ({
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
  const theme = useTheme();

  return (
    <div
      css={notificationsContainer(type, styleType)}
      data-testid={generateTestDataId(variant, dataTestId)}
      {...(variant == 'banner' && { 'notification-type': 'banner' })}
    >
      <div css={infoContainer()}>
        {hasIcon && (
          <div css={iconContainer()}>
            <Icon
              name={typeToIconName(type)}
              color={theme.tokens.colors.get(
                `textColor.default.${typeToColorStyle(type)}` as SemanticColorsKey
              )}
              size={24}
            />
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
            <Icon
              name="close"
              color={theme.tokens.colors.get('textColor.default.secondary')}
              size={16}
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default CompactNotification;
