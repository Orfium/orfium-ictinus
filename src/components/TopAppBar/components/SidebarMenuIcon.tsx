/** @jsx jsx */
import { jsx } from '@emotion/core';
import Icon from '../../Icon';
import Styles from './SidebarMenuIcon.style';

const SidebarMenuIcon = () => {
  return (
    <div css={Styles.iconWrapper}>
      <Icon color={'primary'} name={'menu'} size={24} />
    </div>
  );
};

export default SidebarMenuIcon;
