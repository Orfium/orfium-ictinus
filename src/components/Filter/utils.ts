import { darken, lighten, rem } from 'polished';

import { Theme } from '../../theme';
import { pickTextColorFromSwatches } from '../../theme/palette';
import { ColorShapeFromComponent } from '../../utils/themeFunctions';
import { BackgroundColorProps, BaseColorProps, BorderProps, HoverBorderProps } from './types';

export const FILTER_OPTIONS_MAX_HEIGHT = 253;

export const borderStyleParams = `solid ${rem(1)}`;

export const getBackgroundColor = ({
  open,
  theme,
  hasSelectedValue,
  calculatedColor,
  styleType,
}: BackgroundColorProps) => {
  const color = theme.utils.getColor(calculatedColor.color, 100);

  if (open) {
    return theme.utils.getColor(calculatedColor.color, 400);
  } else if (hasSelectedValue) {
    return theme.palette.white;
  } else if (styleType === 'transparent') {
    return 'transparent';
  }

  return color;
};

export const getTextColor = ({
  open,
  theme,
  hasSelectedValue,
  calculatedColor,
}: BaseColorProps) => {
  if (hasSelectedValue && !open) {
    return theme.utils.getColor(calculatedColor.color, 400);
  } else if (open) {
    return pickTextColorFromSwatches(calculatedColor.color, 400);
  }

  return pickTextColorFromSwatches(calculatedColor.color, 100);
};

export const getBorder = ({
  styleType,
  theme,
  hasSelectedValue,
  calculatedColor,
  open,
  isDivider,
}: BorderProps) => {
  if ((styleType === 'outlined' && open) || (isDivider && !hasSelectedValue)) {
    return 'transparent';
  }
  if (styleType === 'outlined' || hasSelectedValue) {
    return `${theme.utils.getColor(calculatedColor.color, 200)}`;
  }

  return 'transparent';
};

export const getHoverBorder = ({
  styleType,
  theme,
  calculatedColor,
  hasSelectedValue,
  filterType,
}: HoverBorderProps) => {
  if (filterType === 'added' && styleType === 'filled') {
    return `transparent`;
  }
  if (styleType === 'outlined' || hasSelectedValue) {
    return `${getHoverBackgroundColor(theme, calculatedColor)}`;
  }

  return 'transparent';
};

export const getHoverBackgroundColor = (theme: Theme, calculatedColor: ColorShapeFromComponent) => {
  const value = 0.1;
  const color = theme.utils.getColor(calculatedColor.color, 100);

  return calculatedColor.shade > 400 ? lighten(value, color) : darken(value, color);
};
