import { Theme } from '../theme';

type Size = 'md' | 'sm';
export const DEFAULT_SIZE: Size = 'sm';

type SizeConfig = (theme: Theme, label: string, shouldMoveLeft?: boolean) => Record<Size, string>;

export const getTextFieldSize: SizeConfig = (theme, label, shouldMoveLeft) => {
  const paddingMD = label ? `18px ${theme.spacing.md}` : `18px ${theme.spacing.md} 18px`;
  const paddingSM = label ? `13px ${theme.spacing.sm}` : `13px ${theme.spacing.sm} 13px`;

  return {
    md: `
    padding: ${paddingMD};
    label {
      left: ${shouldMoveLeft ? '2.4rem' : 'inherit'};
    };`,
    sm: `
     padding: ${paddingSM};
     label {
      left: ${shouldMoveLeft ? '1.9rem' : 'inherit'};
    };`,
  };
};

export const labelSize = {
  md: `top: 1.4rem;`,
  sm: `top: 1.0rem;`,
};

export const getSpacingBySize: (size: Size, theme: Theme) => string = (size, theme) => {
  return theme.spacing[size];
};
