import React from 'react';

import Menu from 'components/Menu';

const MenuShowcase = () => {
  const [selectedItem, setSelectedItem] = React.useState('Settings');

  return (
    <div>
      <div>
        Selected: <b>{selectedItem || '-'}</b>
      </div>
      <Menu
        items={[
          'My Profile',
          'Settings',
          'Billing',
          'Notifications',
          'Just a looooong text',
          'Some text that is reaaaaaaally looooooong for no reason',
          'Logout',
        ]}
        selectedItem={selectedItem}
        onSelect={(option) => setSelectedItem(option)}
        buttonText={selectedItem}
      />
    </div>
  );
};

export default MenuShowcase;
