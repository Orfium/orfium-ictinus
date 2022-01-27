import { rem } from 'theme/utils';

import { colorShades, MAX_SHADE, pickTextColorFromSwatches } from '../../theme/palette';
import { defineBackgroundColor } from '../Button/utils';
import { BackgroundColorProps, BaseColorProps, BorderProps } from './types';

export const FILTER_OPTIONS_MAX_HEIGHT = 253;

export const borderStyleParams = `solid ${rem(1)}`;
export const focusBorderWidth = 2;

export const getBackgroundColor = ({
  open,
  theme,
  hasSelectedValue,
  calculatedColor,
  styleType,
}: BackgroundColorProps) => {
  if (open) {
    return theme.utils.getColor(calculatedColor.color, 500);
  } else if (hasSelectedValue) {
    return theme.utils.getColor(calculatedColor.color, 50);
  } else if (styleType === 'filled') {
    return theme.utils.getColor('neutralWhite', 100);
  } else if (styleType === 'transparent') {
    return 'transparent';
  }

  return defineBackgroundColor(theme, calculatedColor);
};

export const getTextColor = ({
  open,
  theme,
  hasSelectedValue,
  calculatedColor,
}: BaseColorProps) => {
  if (hasSelectedValue && !open) {
    return pickTextColorFromSwatches(calculatedColor.color, 50);
  } else if (open) {
    return pickTextColorFromSwatches(calculatedColor.color, calculatedColor.shade);
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
    const calculatedShade = shade < MAX_SHADE ? 50 : -50;

    return (shade + calculatedShade) as typeof colorShades[number];
  };

  if (state === 'normal' && styleType === 'transparent' && !open && !hasSelectedValue) {
    return `transparent`;
  }

  if (isDivider && open) {
    return `transparent`;
  }

  if (hasSelectedValue && open) {
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
