import { rem } from 'polished';
import { Theme } from '../../theme';
import { pickTextColorFromSwatches } from '../../theme/palette';
import { RequiredProperties } from '../../utils/common';
import { ColorShapeFromComponent } from '../../utils/themeFunctions';
import { Props } from './Button';
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
      return theme.typography.fontSizes['14'];
    default:
      return theme.typography.fontSizes['16'];
  }
};

export const buttonStyle = ({
  type,
  filled,
  calculatedColor,
  size,
  iconExists,
  disabled,
  transparent,
  childrenCount,
}: RequiredProperties<
  Props & {
    calculatedColor: ColorShapeFromComponent;
    iconExists: boolean;
    childrenCount: number;
  }
>) => (theme: Theme) => {
  return {
    fontSize: fontSizeBasedOnSize(theme, size),
    color:
      filled && !transparent
        ? pickTextColorFromSwatches(calculatedColor.color, calculatedColor.shade)
        : defineBackgroundColor(theme, calculatedColor, type, iconExists, childrenCount > 0),
    backgroundColor:
      filled && !transparent
        ? defineBackgroundColor(theme, calculatedColor, type, iconExists, childrenCount > 0)
        : 'transparent',
    padding:
      size === 'sm' || size === 'md'
        ? `${theme.spacing.sm} ${theme.spacing.md}`
        : `${theme.spacing.md} ${theme.spacing.lg}`,
    height: heightBasedOnSize(size),
    opacity: disabled ? 0.5 : 1,
    borderRadius: theme.spacing.xsm,
    border:
      filled || transparent
        ? 'none'
        : `solid 1px ${defineBackgroundColor(
            theme,
            calculatedColor,
            type,
            iconExists,
            childrenCount > 0
          )}`,
    cursor: 'pointer',
    transition: 'background-color 150ms linear',
    ':hover': {
      backgroundColor: !disabled
        ? stateBackgroundColor(theme, 'hover', calculatedColor, filled && !transparent)
        : undefined,
    },
    ':active': {
      backgroundColor: !disabled
        ? stateBackgroundColor(theme, 'active', calculatedColor, filled && !transparent)
        : undefined,
    },
  };
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

export const childrenWrapperStyle = ({
  iconLeft,
  iconRight,
  hasChildren,
}: RequiredProperties<Props & { hasChildren: boolean }>) => (theme: Theme) => {
  const rightIconExists = hasChildren && iconRight;
  const leftIconExists = hasChildren && iconLeft;

  return {
    marginLeft: leftIconExists ? theme.spacing.sm : 0,
    marginRight: rightIconExists ? theme.spacing.sm : 0,
  };
};
