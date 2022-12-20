import { css, SerializedStyles } from '@emotion/react';
import { FontSizeKey } from 'theme/globals/typography';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { getDisabled, getFocus, getHover, getPressed } from '../../theme/states';
import { ColorShapeFromComponent } from '../../utils/themeFunctions';
import { ButtonBaseProps } from './ButtonBase';
import { buttonConfig, buttonSizes } from './config';
import { calculateButtonColor, defineBackgroundColor } from './utils';

/** Calculates the button specific height based on the size passed to it **/
export const heightBasedOnSize = (size: typeof buttonSizes[number] | 'default') =>
  rem(buttonConfig.sizes[size] ?? buttonConfig.sizes.default);

/** Calculates the button specific font size based on the size passed to it **/
const fontSizeBasedOnSize = (theme: Theme, size: typeof buttonSizes[number] | 'default') =>
  /** @TODO revisit this when all custom fontSizes are gone and we can use only
   * the fontSizes.get() function. Refactor buttonConfig logic */
  buttonConfig.fontSize[size]
    ? theme.globals.typography.fontSizes[buttonConfig.fontSize[size]]
    : theme.globals.typography.fontSizes.get(buttonConfig.fontSize.default as FontSizeKey);

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
  }: Omit<ButtonBaseProps, 'buttonType' | 'ref'> & {
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
      fontWeight: theme.globals.typography.weights.get('medium'),
      color: calculateButtonColor({
        type,
        isBackgroundTransparent: Boolean(isBackgroundTransparent),
        backGroundColor,
        calculatedColor,
        theme,
      }),
      width: isBlock ? '100%' : undefined,
      backgroundColor: isBackgroundTransparent ? 'transparent' : backGroundColor,
      padding:
        size === 'lg' ? theme.globals.spacing.get('6') : `0 ${theme.globals.spacing.get('6')}`,
      height: heightBasedOnSize(size || 'default'),
      borderRadius: theme.globals.spacing.get('3'),
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
