import { rem } from 'polished';

import { Theme } from '../theme';
import { MD_HEIGHT, MIN_WIDTH, MULTI_WIDTH, SM_HEIGHT } from 'components/TextInputBase/config';

type Size = 'md' | 'sm';
export const DEFAULT_SIZE: Size = 'md';

export const getTextFieldHeight = (size?: Size): string => {
  switch (size) {
    case 'md':
      return rem(MD_HEIGHT);
    case 'sm':
      return rem(SM_HEIGHT);
    default:
      return 'auto';
  }
};

const getTextFieldWidth = (size?: Size): string => {
  switch (size) {
    case 'md':
      return rem(MIN_WIDTH);
    case 'sm':
      return rem(MIN_WIDTH);
    default:
      return 'auto';
  }
};

export const getTextFieldSize = (
  hasMinWidthCompat = true,
  size?: Size,
  multi = false
): {
  minWidth?: string;
  height: string;
  width?: string;
} => {
  if (!hasMinWidthCompat) {
    return { height: getTextFieldHeight(size) };
  }

  return {
    minWidth: getTextFieldWidth(size),
    height: getTextFieldHeight(size),
    ...(multi ? { width: rem(MULTI_WIDTH) } : {}),
  };
};

export const getSpacingBySize: (size: Size, theme: Theme) => string = (size, theme) => {
  return theme.spacing[size];
};
