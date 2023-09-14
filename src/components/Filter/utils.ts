import { rem } from 'theme/utils';

import { colorShades, MAX_SHADE } from '../../theme/palette';
import { PropsValidationError } from '../../utils/errors';
import { defineBackgroundColor } from '../Button/utils';
import { BackgroundColorProps, BaseColorProps, BorderProps, Props } from './types';

export const FILTER_OPTIONS_MAX_HEIGHT = 253;
export const HAS_SELECTED_VALUE_COLOR_SHADE = 50;

export const borderStyleParams = `solid ${rem(1)}`;
export const focusBorderWidth = 2;
export const transparentFocusBorderWidth = 0;

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
    return theme.utils.getColor(calculatedColor.color, HAS_SELECTED_VALUE_COLOR_SHADE);
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
    return theme.utils.getAAColorFromSwatches(calculatedColor.color, 50);
  } else if (open) {
    return theme.utils.getAAColorFromSwatches(calculatedColor.color, calculatedColor.shade);
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

export const errors = [
  {
    /**
     * for 'added' type design team decided that is not needed therefore in order not having to maintain
     * one more special case we dont render it
     **/
    condition: ({ filterType, styleType }: Props): boolean =>
      Boolean(filterType === 'added' && styleType === 'transparent'),
    error: new PropsValidationError('This filterType and styleType is not supported'),
  },
];
