import React from 'react';

import Styles from './SidebarMenuIcon.style';
import Icon from '../../../Icon';

export interface SidebarMenuIconProps {
  onMenuIconClick: () => void;
}

const SidebarMenuIcon = ({ onMenuIconClick }: SidebarMenuIconProps) => {
  return (
    <div css={Styles.iconWrapper} onClick={onMenuIconClick} data-testid="menu-handler">
      <Icon color="primary" name="menu" size={24} />
    </div>
  );
};

export default SidebarMenuIcon;
