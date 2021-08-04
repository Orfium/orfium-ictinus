import { css } from '@emotion/react';
import { isUndefined } from 'lodash';
import { darken, lighten } from 'polished';

import { Theme } from '../../theme';
import { colorShades, pickTextColorFromSwatches } from '../../theme/palette';
import { defineBackgroundColor, stateBackgroundColor } from '../Button/utils';
import {
  BackgroundColorProps,
  BaseColorProps,
  FilterOption,
  BorderProps,
  HoverBorderProps,
} from './types';

export const borderStyleParams = 'solid 1px';

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
    return theme.utils.getColor('neutralWhite', 100);
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
}: BaseColorProps) => {
  if (hasSelectedValue && !open) {
    return theme.utils.getColor(activeCalculatedColor.color, 500);
  } else if (open) {
    return pickTextColorFromSwatches(activeCalculatedColor.color, activeCalculatedColor.shade);
  }

  return pickTextColorFromSwatches(calculatedColor.color, calculatedColor.shade);
};

export const defaultOptionStyle = (defaultValue: FilterOption, selectedValue?: FilterOption) => (
  theme: Theme
) => css`
  background-color: ${isUndefined(selectedValue?.value) ||
  selectedValue?.value === defaultValue.value
    ? darken(0.05, theme.palette.white)
    : theme.palette.white};
  border: 0;
  font-weight: ${theme.typography.weights.medium};
`;

export const optionStyle = (option: FilterOption, selectedItem?: FilterOption) => (
  theme: Theme
) => css`
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
  calculatedColor,
  open,
}: BorderProps) => {
  const addOrSubtract = (shade: typeof colorShades[number]) => {
    const calculatedShade = shade < 700 ? 100 : -100;

    return (shade + calculatedShade) as typeof colorShades[number];
  };

  if (styleType === 'outlined' && open) {
    return 'transparent';
  }
  if (styleType === 'outlined' || hasSelectedValue) {
    const shadeCalculated = addOrSubtract(calculatedColor.shade);

    return `${theme.utils.getColor(calculatedColor.color, shadeCalculated)}`;
  }

  return 'transparent';
};

export const getHoverBorder = ({
  styleType,
  theme,
  open,
  calculatedColor,
  activeCalculatedColor,
  hasSelectedValue,
  filterType,
}: HoverBorderProps) => {
  if (filterType === 'added' && styleType === 'filled') {
    return `transparent`;
  }
  if (styleType === 'outlined' || hasSelectedValue) {
    if (open) {
      return `${stateBackgroundColor(theme, 'hover', activeCalculatedColor, true)}`;
    }

    return `${stateBackgroundColor(theme, 'hover', calculatedColor, true)}`;
  }

  return 'transparent';
};
