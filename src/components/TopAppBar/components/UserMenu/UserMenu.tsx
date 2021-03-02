/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import Menu from '../../../Menu';
import { useBreakpoints } from '../../../../index';

export type UserMenuProps = {
  items: string[];
  userName: string;
  userAvatar: { src: string; letter: string };
  onSelect: (selectedItem: string) => void;
};

const UserMenu: FC<UserMenuProps & { dark?: boolean }> = ({
  items,
  userAvatar,
  userName,
  onSelect,
  dark = false,
}) => {
  const breakpoints = useBreakpoints();

  return !breakpoints.des1200 ? (
    <div>Avatr</div>
  ) : (
    <Menu
      items={items}
      color={dark ? 'neutralBlack-700' : 'neutralWhite-100'}
      buttonText={userName}
      buttonType={'warning'}
      rightIconName={'arrowDown'}
      avatar={userAvatar}
      onSelect={onSelect}
      dataTestId={'userMenu'}
    />
  );
};

export default UserMenu;
