import { colorShades, flatColors } from '../../theme/palette';

export interface BgColorType {
  type: typeof flatColors[number];
  variant: typeof colorShades[number];
}

export interface TopAppBarProps {
  bgColor?: BgColorType;
  searchBgColor?: BgColorType;
  searchLabel?: string;
  logoIcon?: JSX.Element;
  onMenuIconClick: () => void;
  additionalTools?: JSX.Element | JSX.Element[];
  userMenu: {
    items: string[];
    userName: string;
    userAvatar: { src: string; letter: string };
    onSelect: (selectedItem: string) => void;
  };
}

export const DEFAULT_BG_COLOR = { type: 'darkGray', variant: 700 } as const;
export const DEFAULT_SEARCH_COLOR = { type: 'lightGray', variant: 700 } as const;
