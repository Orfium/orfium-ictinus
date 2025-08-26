import { default as React } from 'react';
import { NavigationMenuItem } from '../../types';
export type MenuItemProps = {
    /** Defines the current menu item whose submenu item is currently selected */
    isCurrent: boolean;
    /** Defines if the menu item is expanded */
    isExpanded: boolean;
    toggleMenuItem: (newUrl: string) => void;
} & NavigationMenuItem;
declare const MenuItem: React.FCC<MenuItemProps>;
export default MenuItem;
