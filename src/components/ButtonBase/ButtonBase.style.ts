import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { getDisabled, getFocus, getHover, getPressed } from '../../theme/states';
import { RequiredProperties } from '../../utils/common';
import { ColorShapeFromComponent } from '../../utils/themeFunctions';
import { Props } from './ButtonBase';
import { buttonConfig, buttonSizes } from './config';
import { defineBackgroundColor } from './utils';

/** Calculates the button specific height based on the size passed to it **/
export const heightBasedOnSize = (size: typeof buttonSizes[number]) =>
  rem(buttonConfig.sizes[size] || buttonConfig.sizes.default);

/** Calculates the button specific font size based on the size passed to it **/
const fontSizeBasedOnSize = (theme: Theme, size: typeof buttonSizes[number]) =>
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

    return theme.utils.getAAColorFromSwatches(calculatedColor.color, calculatedColor.shade);
  };

  const borderWidth = isOutlined ? buttonConfig.types.outlined.border.width : 0;

  const baseButtonStyles = {
    fontSize: fontSizeBasedOnSize(theme, size),
    fontWeight: theme.typography.weights.medium,
    color: calculateButtonColor(),
    width: block ? '100%' : undefined,
    backgroundColor: isOutlined || transparent ? 'transparent' : backGroundColor,
    padding: size === 'lg' ? theme.spacing.md : `0 ${theme.spacing.md}`,
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
      }).backgroundColor,
    },
    ':active:not(:disabled)': {
      backgroundColor: getPressed({
        theme,
        color: calculatedColor.color,
        shade: isOutlined || transparent ? 0 : calculatedColor.shade,
      }).backgroundColor,
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
