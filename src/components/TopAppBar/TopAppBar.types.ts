import { colorShades, flatColors } from '../../theme/palette';

export interface BgColorType {
  type: typeof flatColors[number];
  variant: typeof colorShades[number];
}

export interface TopAppBarProps {
  bgColor?: BgColorType;
  logoIcon?: JSX.Element;
  onMenuIconClick: () => void;
}

export const DEFAULT_BG_COLOR = { type: 'darkGray', variant: 700 } as const;
