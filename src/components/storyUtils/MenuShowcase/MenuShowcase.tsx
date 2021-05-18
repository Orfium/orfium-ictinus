import Menu from 'components/Menu';
import React from 'react';

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
      />
    </div>
  );
};

export default MenuShowcase;
