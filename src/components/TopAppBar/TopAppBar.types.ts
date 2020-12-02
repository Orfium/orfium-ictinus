import { AcceptedColorComponentTypes } from '../../';

export interface TopAppBarProps {
  bgColorType?: AcceptedColorComponentTypes;
  logoIcon?: JSX.Element;
  onMenuIconClick: () => void;
}

export const DEFAULT_BG_COLOR_TYPE = 'dark';
