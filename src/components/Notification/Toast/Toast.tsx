/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { useState } from 'react';
import {
  toastContainer,
  topContainer,
  infoContainer,
  infoIconContainer,
  actionIconsContainer,
  chevronIconContainer,
  closeIconContainer,
  expandedContainer,
} from './Toast.style';
import { typeToIconName } from '../subcomponents/CompactNotification/CompactNotification';
import Icon from '../../Icon';
import { NotificationTypes } from '../Notification';

export type ToastType = NotificationTypes | string;

export type Props = {
  /** The informative message of the Toast */
  message: string;
  /** The type of the Toast */
  type: ToastType;
  /** The closing call-to-action of the Toast */
  closeCTA: (() => void) | undefined;
  /** Initialize toast as expanded */
  expanded?: boolean;
  /** Children of the Toast */
  children: React.ReactNode | React.ReactNode[] | undefined;
  //   /** The data test id if needed */
  //   dataTestId?: TestId;
};

export const isNotificationTypes = (type: string): type is NotificationTypes => {
  return ['info', 'error', 'success', 'warning'].includes(type);
};

const Toast: React.FC<Props> = ({ message, type, closeCTA, expanded = true, children }) => {
  const [isExpanded, setExpanded] = useState(expanded);

  return (
    <div css={toastContainer()}>
      <div css={topContainer(type)}>
        <div css={infoContainer()}>
          {isNotificationTypes(type) && (
            <div css={infoIconContainer()}>
              <Icon name={typeToIconName(type)} color="primary" size={24} />
            </div>
          )}
          <div>{message}</div>
        </div>
        <div css={actionIconsContainer()}>
          <span css={chevronIconContainer(isExpanded)} onClick={() => setExpanded(!isExpanded)}>
            <Icon name="chevronLargeDown" color="primary" size={24} />
          </span>

          <span css={closeIconContainer()} onClick={closeCTA}>
            <Icon name="close" color="primary" size={24} />
          </span>
        </div>
      </div>
      {isExpanded && <div css={expandedContainer()}>{children}</div>}
    </div>
  );
};

export default Toast;
