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
  styleType,
}: BackgroundColorProps) => {
  if (open) {
    return theme.utils.getColor(activeCalculatedColor.color, 500);
  } else if (hasSelectedValue) {
    return theme.utils.getColor(activeCalculatedColor.color, 50);
  } else if (styleType === 'filled' || styleType === 'transparent') {
    return theme.utils.getColor('neutralWhite', 100);
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
    return pickTextColorFromSwatches(activeCalculatedColor.color, 50);
  } else if (open) {
    return pickTextColorFromSwatches(activeCalculatedColor.color, activeCalculatedColor.shade);
  }

  return theme.utils.getColor('darkGrey', 850);
};

export const getBorder = ({
  styleType,
  theme,
  hasSelectedValue,
  calculatedColor,
  open,
  isDivider,
  state = 'normal',
}: BorderProps) => {
  const addOrSubtract = (shade: typeof colorShades[number]) => {
    const calculatedShade = shade < 950 ? 100 : -100;

    return (shade + calculatedShade) as typeof colorShades[number];
  };

  if (state === 'normal' && styleType === 'transparent' && !open && !hasSelectedValue) {
    return `transparent`;
  }
  if (isDivider && open) {
    return `transparent`;
  }
  if (hasSelectedValue) {
    const shadeCalculated = addOrSubtract(calculatedColor.shade);

    return `${theme.utils.getColor(calculatedColor.color, shadeCalculated)}`;
  }

  if (styleType === 'filled' && !open && !hasSelectedValue) {
    return `${theme.utils.getColor('lightGrey', 200)}`;
  }

  return `transparent`;
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
  if (hasSelectedValue) {
    if (open) {
      return `${stateBackgroundColor(theme, 'hover', activeCalculatedColor, true)}`;
    }

    return `${stateBackgroundColor(theme, 'hover', calculatedColor, true)}`;
  }

  return 'transparent';
};
