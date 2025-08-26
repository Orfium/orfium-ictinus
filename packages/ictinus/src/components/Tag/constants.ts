import type { SemanticColorsKey } from 'theme/tokens/semantic/colors';

import type { TagColors } from './Tag.types';

export const tagColorToSemColor: Record<TagColors, Record<string, SemanticColorsKey>> = {
  blue: {
    text: 'textColor.default.active',
    border: 'palette.primaryAlt.contrast',
    fill: 'palette.primaryAlt.muted',
  },
  neutral: {
    text: 'textColor.default.active',
    border: 'borderColor.decorative.default',
    fill: 'backgroundColor.default',
  },
  purple: {
    text: 'textColor.default.visited',
    border: 'palette.upsell.contrast',
    fill: 'palette.upsell.muted',
  },
  red: {
    text: 'textColor.default.error',
    border: 'palette.error.contrast',
    fill: 'palette.error.muted',
  },
  teal: {
    text: 'textColor.default.success',
    border: 'palette.success.contrast',
    fill: 'palette.success.muted',
  },
  orange: {
    text: 'textColor.default.warning',
    border: 'borderColor.interactive.warning',
    fill: 'palette.warning.muted',
  },
};
