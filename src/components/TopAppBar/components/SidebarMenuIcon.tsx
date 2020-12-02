/** @jsx jsx */
import { jsx } from '@emotion/core';
import Icon from '../../Icon';
import { IconWrapper } from './SidebarMenuIcon.style';

const SidebarMenuIcon = () => {
  return (
    <IconWrapper>
      <Icon color={'primary'} name={'menu'} size={24} />
    </IconWrapper>
  );
};

export default SidebarMenuIcon;
