import type { SemanticColorsKey } from 'theme/tokens/semantic/colors';

import type { AvatarColors } from './Avatar.types';

export const avatarColorToSemColor: Record<AvatarColors, Record<string, SemanticColorsKey>> = {
  blue: {
    border: 'palette.primaryAlt.contrast',
    fill: 'palette.primaryAlt.base',
    text: 'textColor.default.active',
  },
  red: {
    border: 'palette.error.contrast',
    fill: 'palette.error.base',
    text: 'textColor.default.error',
  },
  purple: {
    border: 'palette.upsell.contrast',
    fill: 'palette.upsell.base',
    text: 'textColor.default.visited',
  },
  teal: {
    border: 'palette.success.contrast',
    fill: 'palette.success.base',
    text: 'textColor.default.success',
  },
  orange: {
    border: 'palette.warning.contrast',
    fill: 'palette.warning.base',
    text: 'textColor.default.warning',
  },
};
