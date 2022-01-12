import { transparentize } from 'polished';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { pickTextColorFromSwatches } from '../../theme/palette';
import { getHover } from '../../theme/states';
import { RequiredProperties } from '../../utils/common';
import { ColorShapeFromComponent } from '../../utils/themeFunctions';
import { Props } from './ButtonBase';
import { defineBackgroundColor, stateBackgroundColor } from './utils';

/** Calculates the button specific height based on the size passed to it
 * These sizes are specific to this button thus these are placed here and not in the config **/
export const heightBasedOnSize = (size: 'lg' | 'md' | 'sm') => {
  switch (size) {
    case 'lg':
      return rem(56);
    case 'sm':
      return rem(36);
    default:
      return rem(46);
  }
};

/** Calculates the button specific font size based on the size passed to it
 * These sizes are specific to this button thus these are placed here and not in the config **/
const fontSizeBasedOnSize = (theme: Theme, size: 'lg' | 'md' | 'sm') => {
  switch (size) {
    case 'sm':
      return theme.typography.fontSizes['13'];
    default:
      return theme.typography.fontSizes['16'];
  }
};

export const buttonBaseStyle = ({
  type,
  filled,
  calculatedColor,
  size,
  block,
  isIconButton,
  disabled,
  transparent,
  childrenCount,
}: RequiredProperties<
  Omit<Props, 'buttonType'> & {
    calculatedColor: ColorShapeFromComponent;
    childrenCount: number;
  }
>) => (theme: Theme) => {
  const calculateButtonColor = () => {
    if (type === 'link') {
      return theme.utils.getColor('blue', 550);
    }

    if ((!filled && !transparent) || transparent) {
      return defineBackgroundColor(theme, calculatedColor, type, childrenCount > 0);
    }

    return pickTextColorFromSwatches(calculatedColor.color, calculatedColor.shade);
  };

  const isOutlined = !filled && !transparent;

  const baseButtonStyles = {
    fontSize: fontSizeBasedOnSize(theme, size),
    fontWeight: theme.typography.weights.medium,
    color: calculateButtonColor(),
    width: block ? '100%' : undefined,
    backgroundColor:
      filled && !transparent
        ? defineBackgroundColor(theme, calculatedColor, type, childrenCount > 0)
        : 'transparent',
    padding:
      size === 'sm' || size === 'md'
        ? `${theme.spacing.sm} ${theme.spacing.md}`
        : `${theme.spacing.md} ${theme.spacing.md}`,
    height: heightBasedOnSize(size),
    opacity: disabled ? 0.5 : 1,
    borderRadius: theme.spacing.xsm,
    border:
      filled || transparent
        ? 'none'
        : `solid ${rem(1)} ${transparentize(
            0.5,
            defineBackgroundColor(theme, calculatedColor, type, childrenCount > 0)
          )}`,
    cursor: 'pointer',
    transition: 'background-color 150ms linear',
    ':focus': {
      backgroundColor: !disabled
        ? stateBackgroundColor(theme, 'hover', calculatedColor, filled && !transparent)
        : undefined,
    },
    ':hover': {
      backgroundColor: !disabled
        ? getHover({
            theme,
            color: calculatedColor.color,
            shade: isOutlined || transparent ? 0 : calculatedColor.shade,
          })
        : undefined,
    },
    ':active': {
      backgroundColor: !disabled
        ? stateBackgroundColor(theme, 'active', calculatedColor, filled && !transparent)
        : undefined,
    },
  };

  if (isIconButton) {
    return {
      ...baseButtonStyles,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '100%',
      padding: 0,
      width: heightBasedOnSize(size),
    };
  }

  return baseButtonStyles;
};

export const buttonSpanStyle = () => () => {
  return {
    display: 'flex',
    alignItems: 'center',
  };
};

export const iconStyle = () => () => ({
  display: 'inline-flex',
});
