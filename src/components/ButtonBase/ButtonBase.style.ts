import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { pickTextColorFromSwatches } from '../../theme/palette';
import { getDisabled, getFocus, getHover, getPressed } from '../../theme/states';
import { RequiredProperties } from '../../utils/common';
import { ColorShapeFromComponent } from '../../utils/themeFunctions';
import { buttonConfig } from '../Button/config';
import { Props } from './ButtonBase';
import { defineBackgroundColor } from './utils';

/** Calculates the button specific height based on the size passed to it **/
export const heightBasedOnSize = (size: 'lg' | 'md' | 'sm') =>
  buttonConfig.sizes[size] || buttonConfig.sizes.default;

/** Calculates the button specific font size based on the size passed to it **/
const fontSizeBasedOnSize = (theme: Theme, size: 'lg' | 'md' | 'sm') =>
  theme.typography.fontSizes[buttonConfig.fontSize[size] || buttonConfig.fontSize.default];

export const buttonBaseStyle = ({
  type,
  filled,
  calculatedColor,
  size,
  block,
  isIconButton,
  transparent,
  childrenCount,
}: RequiredProperties<
  Omit<Props, 'buttonType'> & {
    calculatedColor: ColorShapeFromComponent;
    childrenCount: number;
  }
>) => (theme: Theme) => {
  const backGroundColor = defineBackgroundColor(theme, calculatedColor, type, childrenCount > 0);
  const isOutlined = !filled && !transparent;

  const calculateButtonColor = () => {
    if (type === 'link') {
      const color = buttonConfig.types.link.color;

      return theme.utils.getColor(color.name, color.shade);
    }

    if (isOutlined || transparent) {
      return backGroundColor;
    }

    return pickTextColorFromSwatches(calculatedColor.color, calculatedColor.shade);
  };

  const borderWidth = isOutlined ? buttonConfig.types.outlined.border.width : 0;

  const baseButtonStyles = {
    fontSize: fontSizeBasedOnSize(theme, size),
    fontWeight: theme.typography.weights.medium,
    color: calculateButtonColor(),
    width: block ? '100%' : undefined,
    backgroundColor: isOutlined || transparent ? 'transparent' : backGroundColor,
    padding: size === 'lg' ? theme.spacing.md : `${theme.spacing.sm} ${theme.spacing.md}`,
    height: heightBasedOnSize(size),
    borderRadius: theme.spacing.xsm,
    border: isOutlined ? `solid ${rem(borderWidth)} ${backGroundColor}` : 'none',
    cursor: 'pointer',
    transition: 'background-color,border 150ms linear',
    ':focus-visible:not(:disabled)': {
      outline: getFocus({ theme, borderWidth: borderWidth }).styleOutline,
    },
    ':hover:not(:disabled)': {
      backgroundColor: getHover({
        theme,
        color: calculatedColor.color,
        shade: isOutlined || transparent ? 0 : calculatedColor.shade,
      }),
    },
    ':active:not(:disabled)': {
      backgroundColor: getPressed({
        theme,
        color: calculatedColor.color,
        shade: isOutlined || transparent ? 0 : calculatedColor.shade,
      }),
    },
    ':disabled': getDisabled(),
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
