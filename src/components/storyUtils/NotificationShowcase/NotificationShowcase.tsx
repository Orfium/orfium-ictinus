import { select } from '@storybook/addon-knobs';
import React, { ReactNode, useRef, useState } from 'react';

import Button from '../../Button';
import NotificationsContainer from '../../Notification/NotificationsContainer';

const NotificationShowcase: React.FC<{ id?: string }> = ({ children, id }) => {
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
}) => {
  const { children, id } = props;
  const [divEl, setDivEl] = useState<HTMLDivElement | null>(null);

  return (
    <div
      ref={(el) => {
        setDivEl(el);
      }}
      id={id}
      style={{ width: '928px', height: '500px', position: 'relative' }}
    >
      <NotificationsContainer
        parent={divEl}
        position={select(
          'position',
          ['top-right', 'top-left', 'bottom-left', 'bottom-right'],
          'bottom-right'
        )}
      >
        {children}
      </NotificationsContainer>
    </div>
  );
};

export default NotificationShowcase;
