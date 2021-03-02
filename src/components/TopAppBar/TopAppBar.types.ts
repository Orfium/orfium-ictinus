import { colorShades, flatColors } from '../../theme/palette';
import React from 'react';
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
  userMenu: {
    items: string[];
    userName: string;
    userAvatar: { src: string; letter: string };
    onSelect: (selectedItem: string) => void;
  };
  dark?: boolean;
}
