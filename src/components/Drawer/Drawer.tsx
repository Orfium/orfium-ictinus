import useBreakpoints from 'hooks/useBreakpoints';
import { omit } from 'lodash';
import React from 'react';

import { drawerContainerStyle } from './Drawer.style';
import Navigation from './Navigation/Navigation';
import { DrawerMenuItem } from './types';

export type DrawerProps = {
  /** Defines if the drawer is expanded */
  isExpanded: boolean;
  /** Changes if the drawer is expanded */
  setExpanded: (v: boolean) => void;
  /** The menu items to be displayed in the drawer */
  menuItems: DrawerMenuItem[];
  /** Render prop function to display something over the Navigation */
  renderHeader?: () => React.ReactNode;
};

const Drawer: React.FC<DrawerProps> = (props) => {
  const breakpoints = useBreakpoints();
  const isSmallDesktop = breakpoints.des1200 && !breakpoints.des1440;

  return (
    <div
      css={drawerContainerStyle(props.isExpanded, breakpoints.des1200, !breakpoints.des1440)}
      onMouseEnter={() => isSmallDesktop && props.setExpanded(true)}
      onMouseLeave={() => isSmallDesktop && props.setExpanded(false)}
      data-testid={'sidebar'}
    >
      {props.renderHeader?.()}
      <Navigation {...omit(props, 'renderHeader')} />
    </div>
  );
};

export default Drawer;
