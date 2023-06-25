import { rem } from 'polished';
import { SpacingKey } from 'theme/globals/spacing';

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
  isMulti = false
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
    ...(isMulti ? { width: '100%' } : {}),
  };
};

export const getSpacingBySize: (size: SpacingKey, theme: Theme) => string = (size, theme) => {
  return theme.globals.spacing.get(size);
};
