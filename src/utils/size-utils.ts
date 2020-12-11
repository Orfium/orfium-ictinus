import { Theme } from '../theme';

type Size = 'md' | 'sm';
export const DEFAULT_SIZE: Size = 'sm';

type SizeConfig = (theme: Theme, label: string, shouldMoveLeft?: boolean) => Record<Size, string>;

export const getTextFieldSize: SizeConfig = (theme, label, shouldMoveLeft) => {
  const paddingMD = label
    ? `${theme.spacing.lg} ${theme.spacing.md}`
    : `${theme.spacing.lg} ${theme.spacing.md} ${theme.spacing.lg}`;
  const paddingSM = label
    ? `${theme.spacing.md} ${theme.spacing.sm}`
    : `${theme.spacing.md} ${theme.spacing.sm} ${theme.spacing.md}`;

  return {
    md: `
    padding: ${paddingMD};
    label {
      left: ${shouldMoveLeft ? '2.4rem' : 'inherit'};
    };
    `,
    sm: `
     padding: ${paddingSM};
     label {
      left: ${shouldMoveLeft ? '1.9rem' : 'inherit'};
    };`,
  };
};

export const labelSize = {
  md: `top: 1.7rem;`,
  sm: `top: 1.1rem;`,
};

export const getSpacingBySize = (size: Size, theme: Theme) => {
  return theme.spacing[size];
};
