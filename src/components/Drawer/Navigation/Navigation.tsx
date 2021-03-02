/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useCallback, useState } from 'react';
import { navigationContainerStyle } from './Navigation.style';
import { Props } from '../Drawer';
import MenuItem from './MenuItem/MenuItem';
import useLocationToGetCurrentMenuItem from 'hooks/useLocationToGetCurrentMenuItem';

const Navigation: React.FC<Props> = ({ menuItems, expanded }) => {
  const [openMenuItems, setOpenMenuItems] = useState<string[]>([]); // we identify open menuitems by their url
  const [currentMenuItem] = useLocationToGetCurrentMenuItem(menuItems, setOpenMenuItems);

  const toggleMenuItem = useCallback((newUrl: string): void => {
    setOpenMenuItems(currentOpenMenuItems => {
      // check if the newly selected Menuitem is currently open
      const menuItemIndex = currentOpenMenuItems.findIndex(menuItemUrl => menuItemUrl === newUrl);
      if (menuItemIndex === -1) {
        // The newly selected item is not currently open, add to selection
        return [...currentOpenMenuItems, newUrl];
      } else {
        // The newly selected item is already open
        const newOpenMenuItems = [...currentOpenMenuItems];
        newOpenMenuItems.splice(menuItemIndex, 1);

        return newOpenMenuItems;
      }
    });
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
