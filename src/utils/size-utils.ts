import { Theme } from '../theme';

type Size = 'md' | 'sm';
export const DEFAULT_SIZE: Size = 'sm';

type SizeConfig = (theme: Theme, label: string, shouldMoveLeft?: boolean) => Record<Size, string>;

export const getTextFieldSize: SizeConfig = theme => {
  const paddingMD = `16px ${theme.spacing.md}`;
  const paddingSM = `12px ${theme.spacing.md}`;

  return {
    md: `padding: ${paddingMD};`,
    sm: `padding: ${paddingSM};`,
  };
};

export const getSpacingBySize: (size: Size, theme: Theme) => string = (size, theme) => {
  return theme.spacing[size];
};
