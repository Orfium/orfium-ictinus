import useLocationToGetCurrentMenuItem from 'hooks/useLocationToGetCurrentMenuItem';
import React, { useCallback, useState } from 'react';

import { directoryContainerStyle } from './Directory.style';
import MenuItem from './MenuItem/MenuItem';
import type { NavigationProps } from '../Navigation';

type DirectoryProps = NavigationProps;

const Directory: React.FCC<DirectoryProps> = ({ menuItems, isExpanded }) => {
  const [openMenuItems, setOpenMenuItems] = useState<string[]>([]); // we identify open menuitems by their url
  const [currentMenuItem] = useLocationToGetCurrentMenuItem(menuItems, setOpenMenuItems);

  const toggleMenuItem = useCallback((newUrl: string): void => {
    setOpenMenuItems((openMenuItems) => (openMenuItems.indexOf(newUrl) !== -1 ? [] : [newUrl]));
  }, []);

  return (
    <div css={directoryContainerStyle(isExpanded)}>
      {menuItems.map(
        (menuItem) =>
          menuItem.isVisible && (
            <MenuItem
              key={menuItem.url}
              isCurrent={currentMenuItem === menuItem.url}
              isExpanded={openMenuItems.includes(menuItem.url)}
              toggleMenuItem={toggleMenuItem}
              {...menuItem}
            />
          )
      )}
    </div>
  );
};

export default Directory;
