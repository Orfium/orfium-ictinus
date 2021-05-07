import React, { FC } from 'react';
import Menu from '../../../Menu';
import Styles from './UserMenu.style';

export type UserMenuProps = {
  items: string[];
  userName: string;
  userAvatar: { src: string; letter: string; color?: string };
  onSelect: (selectedItem: string) => void;
};

const UserMenu: FC<UserMenuProps & { dark?: boolean }> = ({
  items,
  userAvatar,
  userName,
  onSelect,
  dark = false,
}) => (
  <Menu
    items={items}
    size={'sm'}
    color={dark ? 'neutralBlack-700' : 'neutralWhite-100'}
    buttonText={<span css={Styles.buttonTextStyle}>{userName}</span>}
    buttonType={'warning'}
    rightIconName={'arrowDown'}
    avatar={userAvatar}
    onSelect={onSelect}
    dataTestId={'userMenu'}
  />
);

export default UserMenu;
