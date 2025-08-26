import { default as React } from 'react';
import { NavigationMenuItem } from './types';
export type NavigationProps = {
    /** Defines if the navigation is expanded */
    isExpanded: boolean;
    /** Changes if the navigation is expanded */
    setExpanded: (v: boolean) => void;
    /** The menu items to be displayed in the navigation */
    menuItems: NavigationMenuItem[];
    /** Render prop function to display something over the Navigation */
    renderHeader?: () => React.ReactNode;
};
declare const Navigation: React.FC<NavigationProps>;
export default Navigation;
