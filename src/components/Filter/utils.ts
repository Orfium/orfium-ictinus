import { darken, lighten } from 'polished';
import { css } from '@emotion/core';
import { isUndefined } from 'lodash';

import { defineBackgroundColor, stateBackgroundColor } from '../Button/utils';
import { pickTextColorFromSwatches } from '../../theme/palette';
import { BackgroundColorProps, BaseColorProps, FilterOption, BorderProps, HoverBorderProps } from './types';
import { Theme } from '../../theme';

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

export const defaultOptionStyle = (defaultValue: FilterOption, selectedValue?: FilterOption) => (theme: Theme) => css`
  background-color: ${isUndefined(selectedValue?.value) || selectedValue?.value === defaultValue.value
  ? darken(0.05, theme.palette.white)
  : theme.palette.white};
    border: 0;
    font-weight: ${theme.typography.weights.medium};
`;

export const optionStyle = (option: FilterOption, selectedItem?: FilterOption) => (theme: Theme) => css`
  background-color: ${option.value === selectedItem?.value 
          ? darken(0.05, theme.palette.white) 
          : theme.palette.white};
  border: 0;
  font-weight: ${theme.typography.weights.regular};
`;

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

export const getHoverBorder = ({
  styleType,
  theme,
  open,
  calculatedColor,
  activeCalculatedColor,
  hasSelectedValue
}: HoverBorderProps) => {
  if (styleType === 'outlined' || hasSelectedValue) {
    if (open) {
      return `solid 1px ${stateBackgroundColor(theme, 'hover', activeCalculatedColor, true)}`;
    }

    return `solid 1px ${stateBackgroundColor(theme, 'hover', calculatedColor, true)}`;
  }

  return 'none';
}



