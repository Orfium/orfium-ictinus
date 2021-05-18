import { lighten } from 'polished';

import { defineBackgroundColor } from '../Button/utils';
import { pickTextColorFromSwatches } from '../../theme/palette';
import { BackgroundColorProps, BaseColorProps, BorderProps } from './types';

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
  } else if (hasSelectedValue || styleType === 'transparent') {
    return 'transparent';
  } else if (styleType === 'filled' || styleType === 'outlined') {
    return defineBackgroundColor(theme, calculatedColor, buttonType);
  }

  return defineBackgroundColor(theme, calculatedColor);
}

export const getTextColor = ({
  open,
  theme,
  hasSelectedValue,
  activeCalculatedColor,
  calculatedColor
}: BaseColorProps) => {
  if (hasSelectedValue && !open) {
    return theme.utils.getColor(activeCalculatedColor.color, 500);
  } else if (open) {
    return pickTextColorFromSwatches(activeCalculatedColor.color, activeCalculatedColor.shade);
  }

  return pickTextColorFromSwatches(calculatedColor.color, calculatedColor.shade);
}

export const getBorder = ({
  styleType,
  theme,
  hasSelectedValue,
  activeCalculatedColor,
}: BorderProps) => {
  if (styleType === 'outlined' && !hasSelectedValue) {
    return `solid 1px ${theme.utils.getColor('lightGray', 400)}`;
  } else if (hasSelectedValue) {
    return `solid 1px ${lighten(0.5, activeCalculatedColor.color)}`;
  }

  return 'none';
}
