import type { ReactNode } from 'react';
import React, { useState } from 'react';

import Button from '../../Button';
import type { NotificationsContainerPositions } from '../../Notification/NotificationsContainer';
import NotificationsContainer from '../../Notification/NotificationsContainer';

const NotificationShowcase: React.FCC<{ id?: string }> = ({ children, id }) => {
  const [hasShow, setHasShow] = useState<boolean>(false);

  return (
    <div id={id} style={{ width: '100%', height: '100%' }}>
      <Button onClick={() => setHasShow(!hasShow)}>Show Notifications</Button>
      {hasShow && children}
    </div>
  );
};

export const NotificationContainerWithinDOMElement = (props: {
  children: ReactNode;
  id: string;
  position: NotificationsContainerPositions;
}) => {
  const { children, id, position } = props;
  const [divEl, setDivEl] = useState<HTMLDivElement | null>(null);

  return (
    <div
      ref={(el) => {
        setDivEl(el);
      }}
      id={id}
      style={{ width: '928px', height: '500px', position: 'relative' }}
    >
      <NotificationsContainer parent={divEl} position={position}>
        {children}
      </NotificationsContainer>
    </div>
  );
};

export default NotificationShowcase;
