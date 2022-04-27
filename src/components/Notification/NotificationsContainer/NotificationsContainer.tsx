import { ReactNode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

import { notificationsContainer } from './NotificationsContainer.style';

type Positions = 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right';

type Props = {
  /** Notifications Container position */
  position: Positions;
  children: ReactNode;
  parent?: HTMLElement | null;
};

const NotificationsContainer: React.FC<Props> = props => {
  const { children, position, parent = document.body } = props;
  console.log(parent);

  if (parent === null) {
    return null;
  }

  return ReactDOM.createPortal(
    <div css={notificationsContainer(position, parent)}>{children}</div>,
    parent
  );
};

export default NotificationsContainer;
