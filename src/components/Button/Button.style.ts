import { rem } from 'polished';
import { Theme } from '../../theme';
import { RequiredProperties } from '../../utils/common';
import { backgroundPickerBasedOnType, colorPickerBasedOnType } from '../../utils/themeFunctions';
import { Props } from './Button';

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
  size,
  icon,
  disabled,
  childrenCount,
}: RequiredProperties<Props & { icon: boolean; childrenCount: number }>) => (theme: Theme) => {
  const defineBackgroundColor = (theme: Theme): string => {
    if (childrenCount === 0 && icon) {
      return 'transparent';
    }

    if (disabled) {
      return theme.utils.getColor('lightGray', 400);
    }

    if (filled && childrenCount !== 0) {
      return backgroundPickerBasedOnType(type)(theme);
    }

    return 'transparent';
  };

  return {
    fontSize: theme.typography.fontSizes['16'],
    color: disabled ? theme.utils.getColor('lightGray', 700) : colorPickerBasedOnType(type)(theme),
    backgroundColor: defineBackgroundColor(theme),
    padding:
      size === 'sm' || size === 'md'
        ? `${theme.spacing.sm} ${theme.spacing.md}`
        : `${theme.spacing.md} ${theme.spacing.lg}`,
    height: heightBasedOnSize(size),
    opacity: disabled ? 0.5 : 1,
    borderRadius: theme.spacing.xsm,
    border: filled ? 'none' : `solid 1px ${theme.utils.getColor('lightGray', 700)}`,
    cursor: 'pointer',
  };
};

export const buttonSpanStyle = () => () => {
  return {
    display: 'flex',
    // In orfium-ictinus/node_modules/@emotion/serialize/node_modules/csstype/index.d.ts
    // The FlexDirectionProperty, unlike other properties, does not include a simple 'string'
    // definition. So we cast this as something it will accept.
    alignItems: 'center',
  };
};

export const iconStyle = ({
  iconLeft,
  iconRight,
}: RequiredProperties<Props & { hasChildren: boolean }>) => (theme: Theme) => {
  return {
    marginLeft: iconRight ? theme.spacing.sm : 0,
    marginRight: iconLeft ? theme.spacing.sm : 0,
    display: 'inline-flex',
  };
};
