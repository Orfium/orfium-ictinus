/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Menu from 'components/Menu';

const MenuShowcase = () => {
  const [selectedItem, setSelectedItem] = React.useState('');

  return (
    <div>
      <div>
        Selected: <b>{selectedItem || '-'}</b>
      </div>
      <Menu
        items={['My Profile', 'Settings', 'Billing', 'Notifications', 'Logout']}
        selectedItem={selectedItem}
        onSelect={option => setSelectedItem(option)}
        buttonText={'More'}
        showOptionIcon
      />
    </div>
  );
};

export default MenuShowcase;
