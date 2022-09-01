import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { getDisabled, getFocus, getHover, getPressed } from '../../theme/states';
import { ColorShapeFromComponent } from '../../utils/themeFunctions';
import { Props } from './ButtonBase';
import { buttonConfig, buttonSizes } from './config';
import { calculateButtonColor, defineBackgroundColor } from './utils';

/** Calculates the button specific height based on the size passed to it **/
export const heightBasedOnSize = (size: typeof buttonSizes[number] | 'default') =>
  rem(buttonConfig.sizes[size] ?? buttonConfig.sizes.default);

/** Calculates the button specific font size based on the size passed to it **/
const fontSizeBasedOnSize = (theme: Theme, size: typeof buttonSizes[number] | 'default') =>
  theme.typography.fontSizes[buttonConfig.fontSize[size] ?? buttonConfig.fontSize.default];

export const buttonBaseStyle =
  ({
    type,
    isFilled,
    calculatedColor,
    size,
    isBlock,
    isTransparent,
    childrenCount,
    sx,
  }: Omit<Props, 'buttonType' | 'ref'> & {
    calculatedColor: ColorShapeFromComponent;
    childrenCount: number;
  }) =>
  (theme: Theme): SerializedStyles => {
    const backGroundColor = defineBackgroundColor(theme, calculatedColor, type, childrenCount > 0);
    const isOutlined = !isFilled && !isTransparent;
    const isBackgroundTransparent = isOutlined || isTransparent;

    const borderWidth = isOutlined ? buttonConfig.types.outlined.border.width : 0;

    const baseButtonStyles = {
      fontSize: fontSizeBasedOnSize(theme, size || 'default'),
      fontWeight: theme.typography.weights.medium,
      color: calculateButtonColor({
        type,
        isBackgroundTransparent: Boolean(isBackgroundTransparent),
        backGroundColor,
        calculatedColor,
        theme,
      }),
      width: isBlock ? '100%' : undefined,
      backgroundColor: isBackgroundTransparent ? 'transparent' : backGroundColor,
      padding: size === 'lg' ? theme.spacing.md : `0 ${theme.spacing.md}`,
      height: heightBasedOnSize(size || 'default'),
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
          shade: isBackgroundTransparent ? 0 : calculatedColor.shade,
        }).backgroundColor,
      },
      ':active:not(:disabled)': {
        backgroundColor: getPressed({
          theme,
          color: calculatedColor.color,
          shade: isBackgroundTransparent ? 0 : calculatedColor.shade,
        }).backgroundColor,
      },
      ':disabled': getDisabled(),
    };

    return css({ ...baseButtonStyles, ...sx?.container });
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
