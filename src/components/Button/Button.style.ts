import { rem } from 'polished';
import { Theme } from '../../theme';
import { RequiredProperties } from '../../utils/common';
import { ColorShapeFromComponent } from '../../utils/themeFunctions';
import { Props } from './Button';
import { pickTextColorFromSwatches } from '../../theme/palette';
import { defineBackgroundColor, stateBackgroundColor } from './utils';

/** Calculates the button specific height based on the size passed to it
 * These sizes are specific to this button thus these are placed here and not in the config **/
const heightBasedOnSize = (size: 'lg' | 'md' | 'sm') => {
  switch (size) {
    case 'lg':
      return rem(56);
    case 'sm':
      return rem(40);
    default:
      return rem(46);
  }
};

export const buttonStyle = ({
  type,
  filled,
  calculatedColor,
  size,
  iconExists,
  disabled,
  childrenCount,
}: RequiredProperties<
  Props & {
    calculatedColor: ColorShapeFromComponent;
    iconExists: boolean;
    childrenCount: number;
  }
>) => (theme: Theme) => {
  return {
    fontSize: theme.typography.fontSizes['16'],
    color: filled
      ? pickTextColorFromSwatches(calculatedColor.color, calculatedColor.shade)
      : defineBackgroundColor(theme, calculatedColor, type, iconExists, childrenCount > 0),
    backgroundColor: filled
      ? defineBackgroundColor(theme, calculatedColor, type, iconExists, childrenCount > 0)
      : 'transparent',
    padding:
      size === 'sm' || size === 'md'
        ? `${theme.spacing.sm} ${theme.spacing.md}`
        : `${theme.spacing.md} ${theme.spacing.lg}`,
    height: heightBasedOnSize(size),
    opacity: disabled ? 0.5 : 1,
    borderRadius: theme.spacing.xsm,
    border: filled
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
        ? stateBackgroundColor(theme, 'hover', calculatedColor, filled)
        : undefined,
    },
    ':active': {
      backgroundColor: !disabled
        ? stateBackgroundColor(theme, 'active', calculatedColor, filled)
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
