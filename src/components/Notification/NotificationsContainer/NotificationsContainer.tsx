import { ReactNode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

import { notificationsContainer } from './NotificationsContainer.style';

export type NotificationsContainerPositions =
  | 'top-right'
  | 'top-left'
  | 'bottom-left'
  | 'bottom-right';

export type NotificationsContainerProps = {
  /** Notifications Container position */
  position: NotificationsContainerPositions;
  children: ReactNode;
  parent?: HTMLElement | null;
};

const NotificationsContainer: React.FC<NotificationsContainerProps> = (props) => {
  const { children, position, parent = document.body } = props;

  if (parent === null) {
    return null;
  }

  return ReactDOM.createPortal(
    <div css={notificationsContainer(position, parent)}>{children}</div>,
    parent
  );
};

export default NotificationsContainer;
