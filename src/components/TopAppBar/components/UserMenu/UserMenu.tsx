import type { FC } from 'react';
import React from 'react';

import Styles from './UserMenu.style';
import Menu from '../../../Menu';
import type { AvatarColors } from 'components/Avatar';

export type UserMenuProps = {
  items: string[];
  userName: string;
  userAvatar: { src: string; letter: string; color?: AvatarColors };
  onSelect: (selectedItem: string | number) => void;
} & { isDark?: boolean };

const UserMenu: FC<UserMenuProps> = ({ items, userAvatar, userName, onSelect, isDark = false }) => (
  <Menu
    items={items}
    color={isDark ? 'neutralBlack-500' : 'neutralWhite-100'}
    buttonText={<span css={Styles.buttonTextStyle}>{userName}</span>}
    buttonType={'tertiary'}
    rightIconName={'chevronLargeDown'}
    avatar={userAvatar}
    onSelect={onSelect}
    dataTestId={'userMenu'}
  />
);

export default UserMenu;
