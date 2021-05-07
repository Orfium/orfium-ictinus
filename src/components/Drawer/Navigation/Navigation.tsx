import React, { useCallback, useState } from 'react';
import { navigationContainerStyle } from './Navigation.style';
import { Props } from '../Drawer';
import MenuItem from './MenuItem/MenuItem';
import useLocationToGetCurrentMenuItem from 'hooks/useLocationToGetCurrentMenuItem';

type NavigationProps = Props;

const Navigation: React.FC<NavigationProps> = ({ menuItems, expanded }) => {
  const [openMenuItems, setOpenMenuItems] = useState<string[]>([]); // we identify open menuitems by their url
  const [currentMenuItem] = useLocationToGetCurrentMenuItem(menuItems, setOpenMenuItems);

  const toggleMenuItem = useCallback((newUrl: string): void => {
    setOpenMenuItems(openMenuItems => (openMenuItems.indexOf(newUrl) !== -1 ? [] : [newUrl]));
  }, []);

  return (
    <div css={navigationContainerStyle(expanded)}>
      {menuItems.map(
        menuItem =>
          menuItem.visible && (
            <MenuItem
              key={menuItem.url}
              isCurrent={currentMenuItem === menuItem.url}
              expanded={openMenuItems.includes(menuItem.url)}
              toggleMenuItem={toggleMenuItem}
              {...menuItem}
            />
          )
      )}
    </div>
  );
};

export default Navigation;
