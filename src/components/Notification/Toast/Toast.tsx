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

export type Props = {
  /** The informative message of the Notification */
  message: string;
  /** The type of the Notification */
  type: NotificationTypes;
  /** The closing call-to-action of the Notification */
  closeCTA: (() => void) | undefined;
  /** Children of the Toast */
  children: React.ReactNode | React.ReactNode[] | undefined;
  //   /** The data test id if needed */
  //   dataTestId?: TestId;
};

// const iconNameToType

const Toast: React.FC<Props> = ({ message, type, closeCTA, children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div css={toastContainer()}>
      <div css={topContainer(type)}>
        <div css={infoContainer()}>
          <div css={infoIconContainer()}>
            <Icon name={typeToIconName(type)} color="primary" size={24} />
          </div>
          <div>{message}</div>
        </div>
        <div css={actionIconsContainer()}>
          <span css={chevronIconContainer(expanded)} onClick={() => setExpanded(!expanded)}>
            <Icon name="chevronLargeDown" color="primary" size={24} />
          </span>

          <span css={closeIconContainer()} onClick={closeCTA}>
            <Icon name="close" color="primary" size={24} />
          </span>
        </div>
      </div>
      {expanded && <div css={expandedContainer()}>{children}</div>}
    </div>
  );
};

export default Toast;
