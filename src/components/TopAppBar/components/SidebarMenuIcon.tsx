/** @jsx jsx */
import { jsx } from '@emotion/core';
import Icon from '../../Icon';
import Styles from './SidebarMenuIcon.style';

interface Props {
  onMenuIconClick: () => void;
}

const SidebarMenuIcon = ({ onMenuIconClick }: Props) => {
  return (
    <div css={Styles.iconWrapper} onClick={onMenuIconClick}>
      <Icon color={'primary'} name={'menu'} size={24} />
    </div>
  );
};

export default SidebarMenuIcon;
