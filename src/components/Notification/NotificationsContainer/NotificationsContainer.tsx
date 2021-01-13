/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { notificationsContainer } from './NotificationsContainer.style';

type Positions = 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right';

export type VarietyType = {
  banner: boolean;
  other: boolean;
};

type Props = {
  /** Notifications Container position */
  position: Positions;
};

const NotificationsContainer: React.FC<Props> = ({ children, position }) => {
  return <div css={notificationsContainer(position)}>{children}</div>;
};

export default NotificationsContainer;
