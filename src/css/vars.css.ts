import { createGlobalThemeContract } from '@vanilla-extract/css';
import { borderRadius } from '~/tokens/borderRadius';
import { colors } from '~/tokens/color';
import { sizing } from '~/tokens/sizing';
import { spacing } from '~/tokens/spacing';

const theme = {
  color: {
    neutral: colors.neutral,
    blue: colors.blue,
    transparent: colors.transparent,
    teal: colors.teal,
    purple: colors.purple,
    orange: colors.orange,
    red: colors.red,
    ...colors.semantic.light,
  },
  spacing: {
    ...spacing,
    none: '',
    '2xs': '',
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    '2xl': '',
    '3xl': '',
    '4xl': '',
  },
  sizing,
  radii: borderRadius,
};

export const vars = createGlobalThemeContract(theme, (__, path) => `ictinus-${path.join('-')}`);
