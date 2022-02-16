import { rem } from 'polished';

import { Theme } from '../theme';
import { MD_HEIGHT, MIN_WIDTH, SM_HEIGHT } from 'components/TextInputBase/config';

type Size = 'md' | 'sm';
export const DEFAULT_SIZE: Size = 'md';


const getTextFieldHeight = (size?: Size): string => {
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

export const getTextFieldPadding = (theme: Theme, isTextArea?: boolean): string =>
  isTextArea ? `padding: ${theme.spacing.sm}` : `padding: 0 ${theme.spacing.md}`;

export const getTextFieldSize = (
  size?: Size
): {
  minWidth: string;
  height: string;
} => {
  return { minWidth: getTextFieldWidth(size), height: getTextFieldHeight(size) };
};

export const getSpacingBySize: (size: Size, theme: Theme) => string = (size, theme) => {
  return theme.spacing[size];
};
