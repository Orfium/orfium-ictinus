import { colorShades, flatColors } from '../../theme/palette';
import React from 'react';
import { UserMenuProps } from './components/UserMenu/UserMenu';
export interface BgColorType {
  type: typeof flatColors[number];
  variant: typeof colorShades[number];
}

export interface TopAppBarProps {
  bgColor?: BgColorType;
  searchBgColor?: BgColorType;
  searchPlaceholder?: string;
  logoIcon?: JSX.Element;
  onMenuIconClick: () => void;
  additionalTools?: JSX.Element | JSX.Element[];
  onSearchHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  userMenu: UserMenuProps;
  dark?: boolean;
}
