import { rem } from 'theme/utils';

import type { BackgroundColorProps, BaseColorProps, BorderProps, FilterProps } from './types';
import type { colorShades} from '../../theme/palette';
import { MAX_SHADE } from '../../theme/palette';
import { PropsValidationError } from '../../utils/errors';
import { defineBackgroundColor } from '../Button/utils';

export const FILTER_OPTIONS_MAX_HEIGHT = 253;
export const HAS_SELECTED_VALUE_COLOR_SHADE = 50;

export const borderStyleParams = `solid ${rem(1)}`;
export const focusBorderWidth = 2;
export const transparentFocusBorderWidth = 0;

export const getBackgroundColor = ({
  isOpen,
  theme,
  hasSelectedValue,
  calculatedColor,
  styleType,
}: BackgroundColorProps) => {
  if (isOpen) {
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
  isOpen,
  theme,
  hasSelectedValue,
  calculatedColor,
}: BaseColorProps) => {
  if (hasSelectedValue && !isOpen) {
    return theme.utils.getAAColorFromSwatches(calculatedColor.color, 50);
  } else if (isOpen) {
    return theme.utils.getAAColorFromSwatches(calculatedColor.color, calculatedColor.shade);
  }

  return theme.utils.getColor('darkGrey', 850);
};

export const getBorder = ({
  styleType,
  theme,
  hasSelectedValue,
  calculatedColor,
  isOpen,
  isDivider,
  state = 'normal',
}: BorderProps) => {
  const addOrSubtract = (shade: (typeof colorShades)[number]) => {
    const calculatedShade = shade < MAX_SHADE ? 50 : -50;

    return (shade + calculatedShade) as (typeof colorShades)[number];
  };

  if (state === 'normal' && styleType === 'transparent' && !isOpen && !hasSelectedValue) {
    return `transparent`;
  }

  if (isDivider && isOpen) {
    return `transparent`;
  }

  if (hasSelectedValue && isOpen) {
    return `transparent`;
  }

  if (hasSelectedValue) {
    const shadeCalculated = addOrSubtract(calculatedColor.shade);

    return `${theme.utils.getColor(calculatedColor.color, shadeCalculated)}`;
  }

  if (styleType === 'filled' && !isOpen && !hasSelectedValue) {
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
    condition: ({ filterType, styleType }: FilterProps): boolean =>
      Boolean(filterType === 'added' && styleType === 'transparent'),
    error: new PropsValidationError('This filterType and styleType is not supported'),
  },
];
