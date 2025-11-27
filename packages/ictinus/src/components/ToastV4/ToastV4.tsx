import { vars, type AcceptedColorComponentTypes, type SemanticColorsKey } from '@orfium/tokens';
import { useTheme } from 'index';
import * as React from 'react';
import { useState } from 'react';
import { generateTestDataId } from 'utils/helpers';
import type { TestId } from 'utils/types';
import Icon from '../Icon';
import type { NotificationStyleType, NotificationTypes } from '../Notification/Notification';
import { actionContainer, typeToColorStyle } from '../Notification/Notification.style';
import { typeToIconName } from '../Notification/subcomponents/CompactNotification/CompactNotification';
import {
  actionIconsContainer,
  chevronIconContainer,
  expandedContainer,
  infoContainer,
  infoIconContainer,
  toastContainer,
  topContainer,
} from './ToastV4.style';

export type ToastV4Props = {
  /** The informative message of the Toast */
  message: string;
  /** The type of the Toast, will determine the color and the icon */
  type?: AcceptedColorComponentTypes;
  /** The style type of the Notification. Defaults to elevated */
  styleType?: NotificationStyleType;
  /** The closing call-to-action of the Toast */
  closeCTA: (() => void) | undefined;
  /** Initialize toast as expanded */
  isExpanded?: boolean;
  /** If true, the Toast has a minimum-height */
  hasMinimumHeight?: boolean;
  /** The data test id if needed */
  dataTestId?: TestId;
};

export const isNotificationTypes = (type: string): type is NotificationTypes => {
  return ['success', 'error', 'warning', 'info'].includes(type);
};

/**
 *
 * @deprecated {@link ToastV4} has been deprecated; use {@link Toast} instead.
 *
 */
const ToastV4: React.FCC<ToastV4Props> = ({
  message,
  type = 'primary',
  styleType = 'elevated',
  closeCTA,
  isExpanded = false,
  hasMinimumHeight = true,
  children,
  dataTestId,
}) => {
  const [isExpandedState, setIsExpandedState] = useState(isExpanded);

  const theme = useTheme();

  return (
    <div
      css={toastContainer(type, styleType)}
      {...(isNotificationTypes(type) && { 'notification-type': 'toast' })}
    >
      <div css={topContainer(type)}>
        <div css={infoContainer()}>
          {isNotificationTypes(type) && (
            <div css={infoIconContainer()}>
              <Icon
                name={typeToIconName(type)}
                color={theme.tokens.colors.get(
                  `textColor.default.${typeToColorStyle(type)}` as SemanticColorsKey
                )}
                size={24}
              />
            </div>
          )}
          <div>{message}</div>
        </div>
        <div css={actionIconsContainer()}>
          <span
            css={chevronIconContainer(isExpandedState)}
            onClick={() => setIsExpandedState(!isExpandedState)}
            data-testid={generateTestDataId('toast-expand', dataTestId)}
          >
            <Icon
              name="chevronDown"
              color={isNotificationTypes(type) ? vars.color.text.default.secondary : '#ffffff'}
              size={24}
            />
          </span>

          <span
            css={actionContainer()}
            onClick={closeCTA}
            data-testid={generateTestDataId('toast-close', dataTestId)}
          >
            <Icon
              name="close"
              color={isNotificationTypes(type) ? vars.color.text.default.secondary : '#ffffff'}
              size={24}
            />
          </span>
        </div>
      </div>
      <div
        css={expandedContainer(type, isExpandedState, hasMinimumHeight)}
        data-testid={generateTestDataId('expanded-container', dataTestId)}
      >
        {children}
      </div>
    </div>
  );
};

export default ToastV4;
