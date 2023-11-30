import useTheme from 'hooks/useTheme';
import React from 'react';

import Styles from './SidebarMenuIcon.style';
import Icon from 'components/Icon';

export interface SidebarMenuIconProps {
  onMenuIconClick: () => void;
}

const SidebarMenuIcon = ({ onMenuIconClick }: SidebarMenuIconProps) => {
  const theme = useTheme();

  return (
    <div css={Styles.iconWrapper} onClick={onMenuIconClick} data-testid="menu-handler">
      <Icon color={theme.globals.oldColors.primary[500]} name="menu" size={24} />
    </div>
  );
};

export default SidebarMenuIcon;
