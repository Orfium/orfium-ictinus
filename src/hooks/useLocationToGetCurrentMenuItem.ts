import { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { DrawerMenuItem } from 'components/Drawer/types';

const useLocationToGetCurrentMenuItem = (
  menuItems: DrawerMenuItem[],
  setOpenMenuItems: React.Dispatch<React.SetStateAction<string[]>>
): [string | undefined] => {
  const location = useLocation();
  const [currentMenuItem, setCurrentMenuItem] = useState<string>();

  // we need to show an indication on the currently selected option
  // we get that information from the current URL and then comparing it with the urls of each menuItem
  useLayoutEffect(() => {
    menuItems.forEach((menuItem) => {
      const menuItemUrls = menuItem.options.map((subMenuItem) => subMenuItem.url);
      const isUrlFound =
        menuItemUrls.includes(location.pathname) || menuItem.url === location.pathname;
      if (isUrlFound) {
        setCurrentMenuItem(menuItem.url);
        setOpenMenuItems([menuItem.url]); // expand the current menu item
      }
    });
  }, [location.pathname, menuItems, setOpenMenuItems]);

  return [currentMenuItem];
};

export default useLocationToGetCurrentMenuItem;
