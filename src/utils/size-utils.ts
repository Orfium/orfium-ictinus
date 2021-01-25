import { Theme } from '../theme';

type Size = 'md' | 'sm';
export const DEFAULT_SIZE: Size = 'sm';

type SizeConfig = (theme: Theme, label: string, shouldMoveLeft?: boolean) => Record<Size, string>;

export const getTextFieldSize: SizeConfig = (theme, label) => {
  const paddingMD = label ? `0 ${theme.spacing.md}` : `0 ${theme.spacing.md}`;
  const paddingSM = label ? `0 ${theme.spacing.md}` : `0 ${theme.spacing.md}`;

  return {
    md: `padding: ${paddingMD};`,
    sm: `padding: ${paddingSM};`,
  };
};

export const getSpacingBySize: (size: Size, theme: Theme) => string = (size, theme) => {
  return theme.spacing[size];
};
