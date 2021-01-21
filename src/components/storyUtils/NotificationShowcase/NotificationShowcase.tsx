/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import Button from '../../Button';

const NotificationShowcase: React.FC = ({ children }) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Button onClick={() => setShow(!show)}>Show Notifications</Button>
      {show && children}
    </div>
  );
};

export default NotificationShowcase;
