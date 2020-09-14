import { backgroundPickerBasedOnType, colorPickerBasedOnType } from 'utils/themeFunctions';
import { Props } from 'components/Button/Button';
import { FlexDirectionProperty, RequiredProperties } from 'utils/common';
import { Theme } from 'theme';
import { rem } from 'polished';

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
  iconAlign,
}: RequiredProperties<Props & { childrenCount: number }>) => (theme: Theme) => {
  const calculatedPaddingSpace = size === 'sm' ? theme.spacing.md : theme.spacing.xl;
  const calculatedPaddingSpaceIfIcon = size === 'sm' ? 0 : theme.spacing.sm;

  const defineBackgroundColor = (): string => {
    if (childrenCount === 0 && icon) {
      return 'transparent';
    }

    if (disabled) {
      return theme.palette.gray50;
    }

    if (filled && childrenCount !== 0) {
      return backgroundPickerBasedOnType(type)(theme);
    }

    return 'transparent';
  };

  return {
    fontSize: theme.typography.fontSizes['16'],
    color: disabled ? theme.palette.gray100 : colorPickerBasedOnType(type)(theme),
    backgroundColor: defineBackgroundColor(),
    paddingLeft: icon || childrenCount === 0 ? 0 : calculatedPaddingSpace,
    paddingRight:
      iconAlign === 'left'
        ? icon && !childrenCount
          ? calculatedPaddingSpaceIfIcon
          : calculatedPaddingSpace
        : 0,
    height: heightBasedOnSize(size),
    opacity: disabled ? 0.5 : 1,
    borderRadius: theme.spacing.xsm,
    border: filled ? 'none' : `solid 1px ${theme.palette.gray100}`,
  };
};

export const buttonSpanStyle = ({
  icon,
  iconAlign,
  size,
}: RequiredProperties<Props & { hasChildren: boolean }>) => (theme: Theme) => ({
  display: icon ? 'flex' : 'block',
  flexDirection: (iconAlign === 'right' ? 'row-reverse' : 'row') as FlexDirectionProperty,
  alignItems: icon ? 'center' : 'flex-start',
  marginLeft: iconAlign === 'right' ? (size === 'sm' ? theme.spacing.sm : theme.spacing.md) : 0,
});

export const iconStyle = ({
  size,
  iconAlign,
}: RequiredProperties<Props & { hasChildren: boolean }>) => (theme: Theme) => {
  const margin = size === 'sm' ? theme.spacing.sm : theme.spacing.md;

  return {
    marginLeft: iconAlign === 'left' ? margin : theme.spacing.sm,
    marginRight: iconAlign === 'right' ? margin : theme.spacing.sm,
  };
};
