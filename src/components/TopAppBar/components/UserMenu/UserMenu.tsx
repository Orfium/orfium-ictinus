import React, { FC } from 'react';

import Menu from '../../../Menu';
import Styles from './UserMenu.style';
import { AvatarColors } from 'components/Avatar';

export type UserMenuProps = {
  items: string[];
  userName: string;
  userAvatar: { src: string; letter: string; color?: AvatarColors };
  onSelect: (selectedItem: string) => void;
} & { isDark?: boolean };

const UserMenu: FC<UserMenuProps> = ({ items, userAvatar, userName, onSelect, isDark = false }) => (
  <Menu
    items={items}
    size={'sm'}
    color={isDark ? 'neutralBlack-500' : 'neutralWhite-100'}
    buttonText={<span css={Styles.buttonTextStyle}>{userName}</span>}
    buttonType={'warning'}
    rightIconName={'chevronLargeDown'}
    avatar={userAvatar}
    onSelect={onSelect}
    dataTestId={'userMenu'}
  />
);

export default UserMenu;
