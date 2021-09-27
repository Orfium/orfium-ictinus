import { colorShades, pickTextColorFromSwatches } from '../../theme/palette';
import { defineBackgroundColor, stateBackgroundColor } from '../Button/utils';
import { BackgroundColorProps, BaseColorProps, BorderProps, HoverBorderProps } from './types';

export const FILTER_OPTIONS_MAX_HEIGHT = 253;

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
    return theme.utils.getColor(activeCalculatedColor.color, 500);
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
    return theme.utils.getColor(activeCalculatedColor.color, 650);
  } else if (open) {
    return pickTextColorFromSwatches(activeCalculatedColor.color, activeCalculatedColor.shade);
  }

  return pickTextColorFromSwatches(calculatedColor.color, calculatedColor.shade);
};

export const getBorder = ({
  styleType,
  theme,
  hasSelectedValue,
  calculatedColor,
  open,
  isDivider,
}: BorderProps) => {
  const addOrSubtract = (shade: typeof colorShades[number]) => {
    const calculatedShade = shade < 950 ? 100 : -100;

    return (shade + calculatedShade) as typeof colorShades[number];
  };

  if ((styleType === 'outlined' && open) || (isDivider && !hasSelectedValue)) {
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
