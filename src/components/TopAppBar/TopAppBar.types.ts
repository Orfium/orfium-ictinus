import { AcceptedColorComponentTypes } from '../..';

export interface TopAppBarStyleProps {
  bgColorType: AcceptedColorComponentTypes;
}

export interface TopAppBarProps {
  bgColorType?: AcceptedColorComponentTypes;
  logoIcon?: JSX.Element;
}

export const DEFAULT_BG_COLOR_TYPE = 'dark';
