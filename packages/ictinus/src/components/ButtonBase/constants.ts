import { vars, type SemanticTypographyKey } from '@orfium/tokens';
import type { ComponentSizes } from 'utils/types';

import type { ButtonTypes } from 'components/Button/Button.types';

export const BUTTON_COLOR: Record<ButtonTypes, Record<string, `var(--${string})`>> = {
  primary: {
    defaultFill: vars.color.palette.primary.base,
    hoverFill: vars.color.palette.primary.muted,
    activeFill: vars.color.palette.primary.contrast,
    text: vars.color.text.inverted.primary,
  },
  secondary: {
    defaultFill: vars.color.palette.secondary.base,
    hoverFill: vars.color.palette.secondary.muted,
    activeFill: vars.color.palette.secondary.contrast,
    text: vars.color.text.default.active,
  },
  tertiary: {
    defaultFill: vars.color.palette.tertiary.base,
    hoverFill: vars.color.palette.tertiary.muted,
    activeFill: vars.color.palette.tertiary.contrast,
    text: vars.color.text.default.active,
  },
  danger: {
    defaultFill: vars.color.palette.error.base,
    hoverFill: vars.color.palette.error.muted,
    activeFill: vars.color.palette.error.contrast,
    text: vars.color.text.default.error,
  },
};

export const BUTTON_ICON_COLOR = {
  primary: 'inverted.primary',
  secondary: 'active',
  tertiary: 'active',
  danger: 'error',
} as const;

export const typographySizes: Record<ComponentSizes, SemanticTypographyKey> = {
  normal: 'normal.label02',
  compact: 'normal.label03',
};
