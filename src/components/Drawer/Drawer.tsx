/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { drawerContainerStyle } from './Drawer.style';
import Navigation from './Navigation/Navigation';
import { MenuItem } from './types';
import useBreakpoints from '../../hooks/useBreakpoints';

export type Props = {
  /** Defines if the drawer is expanded */
  expanded: boolean;
  /** Changes if the drawer is expanded */
  setExpanded: (v: boolean) => void;
  /** The menu items to be displayed in the drawer */
  menuItems: MenuItem[];
};

const Drawer: React.FC<Props> = props => {
  const breakpoints = useBreakpoints();
  const isSmallDesktop = breakpoints.des1200 && !breakpoints.des1440;

  return (
    <div
      css={drawerContainerStyle(props.expanded, breakpoints.des1200, !breakpoints.des1440)}
      onMouseEnter={() => isSmallDesktop && props.setExpanded(true)}
      onMouseLeave={() => isSmallDesktop && props.setExpanded(false)}
    >
      <Navigation {...props} />
    </div>
  );
};

export default Drawer;
