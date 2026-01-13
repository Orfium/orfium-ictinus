import { vars } from '@orfium/tokens';

import type { TagColors } from './Tag.types';

export const TAG_COLOR: Record<TagColors, Record<string, `var(--${string})`>> = {
  blue: {
    text: vars.color.text.default.active,
    border: vars.color.palette['primary-alt'].contrast,
    fill: vars.color.palette['primary-alt'].muted,
  },
  neutral: {
    text: vars.color.text.default.active,
    border: vars.color['border-color'].decorative.default,
    fill: vars.color.background.default,
  },
  purple: {
    text: vars.color.text.default.visited,
    border: vars.color.palette.upsell.contrast,
    fill: vars.color.palette.upsell.muted,
  },
  red: {
    text: vars.color.text.default.error,
    border: vars.color.palette.error.contrast,
    fill: vars.color.palette.error.muted,
  },
  teal: {
    text: vars.color.text.default.success,
    border: vars.color.palette.success.contrast,
    fill: vars.color.palette.success.muted,
  },
  orange: {
    text: vars.color.text.default.warning,
    border: vars.color['border-color'].interactive.warning,
    fill: vars.color.palette.warning.muted,
  },
};
