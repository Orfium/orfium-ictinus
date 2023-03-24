import * as React from 'react';
import { useState } from 'react';

import {
  toastContainer,
  topContainer,
  infoContainer,
  infoIconContainer,
  actionIconsContainer,
  chevronIconContainer,
  expandedContainer,
} from './Toast.style';
import { generateTestDataId } from '../../utils/helpers';
import { AcceptedColorComponentTypes } from '../../utils/themeFunctions';
import { TestId } from '../../utils/types';
import Icon from '../Icon';
import { NotificationStyleType, NotificationTypes } from '../Notification/Notification';
import { actionContainer } from '../Notification/Notification.style';
import { typeToIconName } from '../Notification/subcomponents/CompactNotification/CompactNotification';

export type ToastProps = {
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

const Toast: React.FC<ToastProps> = ({
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

  return (
    <div
      css={toastContainer(type, styleType)}
      {...(isNotificationTypes(type) && { 'notification-type': 'toast' })}
    >
      <div css={topContainer(type)}>
        <div css={infoContainer()}>
          {isNotificationTypes(type) && (
            <div css={infoIconContainer()}>
              <Icon name={typeToIconName(type)} color="#fff" size={20} />
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
            <Icon name="chevronLargeDown" color="#fff" size={20} />
          </span>

          <span
            css={actionContainer()}
            onClick={closeCTA}
            data-testid={generateTestDataId('toast-close', dataTestId)}
          >
            <Icon name="close" color="#fff" size={20} />
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

export default Toast;
