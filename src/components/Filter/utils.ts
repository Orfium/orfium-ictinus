import { lighten } from 'polished';

import { pickTextColorFromSwatches } from '../../theme/palette';
import { defineBackgroundColor, stateBackgroundColor } from '../Button/utils';
import { BackgroundColorProps, BaseColorProps, BorderProps, HoverBorderProps } from './types';

export const FILTER_OPTIONS_MAX_HEIGHT = 253;

export const getBackgroundColor = ({
  open,
  theme,
  hasSelectedValue,
  calculatedColor,
  activeCalculatedColor,
  buttonType,
  styleType,
}: BackgroundColorProps) => {
  if (open) {
    return defineBackgroundColor(theme, activeCalculatedColor);
  } else if (hasSelectedValue) {
    return '#FFFFFF';
  } else if (styleType === 'transparent') {
    return 'transparent';
  } else if (styleType === 'filled' || styleType === 'outlined') {
    return defineBackgroundColor(theme, calculatedColor, buttonType);
  }

  return defineBackgroundColor(theme, calculatedColor);
};

export const getTextColor = ({
  open,
  theme,
  hasSelectedValue,
  activeCalculatedColor,
  calculatedColor,
}: BaseColorProps): string => {
  if (hasSelectedValue && !open) {
    return theme.utils.getColor(activeCalculatedColor.color, 400);
  } else if (open) {
    return pickTextColorFromSwatches(activeCalculatedColor.color, activeCalculatedColor.shade);
  }

  return pickTextColorFromSwatches(calculatedColor.color, calculatedColor.shade);
};

export const getBorder = ({
  styleType,
  theme,
  hasSelectedValue,
  activeCalculatedColor,
}: BorderProps) => {
  if (styleType === 'outlined' && !hasSelectedValue) {
    return `solid 1px ${theme.utils.getColor(activeCalculatedColor.color, 200)}`;
  } else if (hasSelectedValue) {
    return `solid 1px ${lighten(
      0.5,
      theme.utils.getColor(activeCalculatedColor.color, activeCalculatedColor.shade)
    )}`;
  }

  return 'none';
};

export const getHoverBorder = ({
  styleType,
  theme,
  open,
  calculatedColor,
  activeCalculatedColor,
  hasSelectedValue,
}: HoverBorderProps) => {
  if (styleType === 'outlined' || hasSelectedValue) {
    if (open) {
      return `solid 1px ${stateBackgroundColor(theme, 'hover', activeCalculatedColor, true)}`;
    }

    return `solid 1px ${stateBackgroundColor(theme, 'hover', calculatedColor, true)}`;
  }

  return 'none';
};
