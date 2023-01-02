import React from 'react';
import { rem } from 'theme/utils';

import Icon from '../../../Icon';
import Styles from './SidebarMenuIcon.style';

export interface SidebarMenuIconProps {
  onMenuIconClick: () => void;
}

const SidebarMenuIcon = ({ onMenuIconClick }: SidebarMenuIconProps) => {
  return (
    <div css={Styles.iconWrapper} onClick={onMenuIconClick} data-testid={'menu-handler'}>
      <Icon color={'primary'} name={'menu'} size={rem(24)} />
    </div>
  );
};

export default SidebarMenuIcon;
