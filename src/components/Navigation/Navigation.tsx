import useBreakpoints from 'hooks/useBreakpoints';
import { omit } from 'lodash';
import React from 'react';

import Directory from './Directory';
import { navigationContainerStyle } from './Navigation.style';
import type { NavigationMenuItem } from './types';

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

const Navigation: React.FC<NavigationProps> = (props) => {
  const breakpoints = useBreakpoints();
  const isSmallDesktop = breakpoints.des1200 && !breakpoints.des1440;

  return (
    <div
      css={navigationContainerStyle(props.isExpanded, breakpoints.des1200, !breakpoints.des1440)}
      onMouseEnter={() => isSmallDesktop && props.setExpanded(true)}
      onMouseLeave={() => isSmallDesktop && props.setExpanded(false)}
      data-testid="sidebar"
    >
      {props.renderHeader?.()}
      <Directory {...omit(props, 'renderHeader')} />
    </div>
  );
};

export default Navigation;
