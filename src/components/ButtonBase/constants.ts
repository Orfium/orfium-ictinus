import type { SemanticColorsKey } from 'theme/tokens/semantic/colors';
import type { SemanticTypographyKey } from 'theme/tokens/semantic/typography';
import type { ComponentSizes } from 'utils/types';

import type { ButtonTypes } from 'components/Button/Button.types';

export const buttonColorToSemColor: Record<ButtonTypes, Record<string, SemanticColorsKey>> = {
  primary: {
    defaultFill: 'palette.primary.base',
    hoverFill: 'palette.primary.muted',
    activeFill: 'palette.primary.contrast',
    text: 'textColor.inverted.primary',
  },
  secondary: {
    defaultFill: 'palette.secondary.base',
    hoverFill: 'palette.secondary.muted',
    activeFill: 'palette.secondary.contrast',
    text: 'textColor.default.active',
  },
  tertiary: {
    defaultFill: 'palette.tertiary.base',
    hoverFill: 'palette.tertiary.muted',
    activeFill: 'palette.tertiary.contrast',
    text: 'textColor.default.active',
  },
  danger: {
    defaultFill: 'palette.error.base',
    hoverFill: 'palette.error.muted',
    activeFill: 'palette.error.contrast',
    text: 'textColor.default.error',
  },
};

export const typographySizes: Record<ComponentSizes, SemanticTypographyKey> = {
  normal: 'normal.label02',
  compact: 'normal.label03',
};
