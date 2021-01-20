import { Theme } from '../theme';

type Size = 'md' | 'sm';
export const DEFAULT_SIZE: Size = 'sm';

type SizeConfig = (theme: Theme, label: string, shouldMoveLeft?: boolean) => Record<Size, string>;

export const getTextFieldSize: SizeConfig = (theme, label) => {
  const paddingMD = label ? `16px ${theme.spacing.sm}` : `16px ${theme.spacing.sm} 16px`;
  const paddingSM = label ? `11px ${theme.spacing.sm}` : `11px ${theme.spacing.sm} 11px`;

  return {
    md: `
    padding: ${paddingMD};
    `,
    sm: `
     padding: ${paddingSM};
   `,
  };
};

export const getSpacingBySize: (size: Size, theme: Theme) => string = (size, theme) => {
  return theme.spacing[size];
};
