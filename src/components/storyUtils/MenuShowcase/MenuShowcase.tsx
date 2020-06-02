/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Menu from 'components/Menu';

const MenuShowcase = () => {
  const [selectedItem, setSelectedItem] = React.useState('');

  return (
    <div
      css={{
        minHeight: 300,
      }}
    >
      <div>{selectedItem || '-'}</div>
      <Menu
        items={['My Profile', 'Settings', 'Billing', 'Notifications', 'Logout']}
        selectedItem={selectedItem}
        onSelect={option => setSelectedItem(option)}
        buttonText={'More'}
      />
    </div>
  );
};

export default MenuShowcase;
