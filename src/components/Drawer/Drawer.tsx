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
  /** The menu items to be displayed in the drawer */
  menuItems: MenuItem[];
};

const Drawer: React.FC<Props> = props => {
  const breakpoints = useBreakpoints();

  return (
    <div css={drawerContainerStyle(props.expanded, breakpoints.des1200)}>
      <Navigation {...props} />
    </div>
  );
};

export default Drawer;
