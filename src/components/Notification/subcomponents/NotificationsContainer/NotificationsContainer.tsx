/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { notificationsContainer } from './NotificationsContainer.style';

type Positions = 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right';

type Props = {
  /** Notifications Container children */
  children: React.ReactNode[];
  /** Notifications Container position */
  position: Positions;
};

const positionToBooleans = (position: Positions) =>
  position === 'top-right'
    ? [true, false, false, true]
    : position === 'top-left'
    ? [true, false, true, false]
    : position === 'bottom-left'
    ? [false, true, true, false]
    : [false, true, false, true];

const NotificationsContainer: React.FC<Props> = ({ children, position }) => {
  return <div css={notificationsContainer(positionToBooleans(position))}>{children}</div>;
};

export default NotificationsContainer;
