import { backgroundPickerBasedOnType, colorPickerBasedOnType } from 'utils/themeFunctions';
import { Props } from 'components/Button/Button';
import { RequiredProperties } from 'utils/common';
import { Theme } from 'theme';
import { FlexDirectionProperty } from 'csstype';
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
  childrenCount,
}: RequiredProperties<Props & { childrenCount: number }>) => (theme: Theme) => {
  const calculatedPaddingSpace = size === 'sm' ? theme.spacing.md : theme.spacing.lg;
  const calculatedPaddingSpaceIfIcon = size === 'sm' ? theme.spacing.sm : theme.spacing.md;

  return {
    fontSize: theme.typography.fontSizes['16'],
    color: colorPickerBasedOnType(type)(theme),
    backgroundColor:
      filled && childrenCount !== 0 ? backgroundPickerBasedOnType(type)(theme) : 'transparent',
    paddingLeft: icon || childrenCount === 0 ? 0 : calculatedPaddingSpace,
    paddingRight: icon && !childrenCount ? calculatedPaddingSpaceIfIcon : calculatedPaddingSpace,
    height: heightBasedOnSize(size),
    borderRadius: theme.spacing.xsm,
    border: filled ? 'none' : `solid 1px ${theme.palette.gray100}`,
  };
};

export const buttonSpanStyle = ({
  icon,
  size,
  hasChildren,
}: RequiredProperties<Props & { hasChildren: boolean }>) => (theme: Theme) => ({
  display: icon ? 'flex' : 'block',
  flexDirection: (icon ? 'row' : 'column') as FlexDirectionProperty,
  alignItems: icon ? 'center' : 'flex-start',
  '> :first-child': {
    marginLeft: icon ? (size === 'sm' ? theme.spacing.sm : theme.spacing.md) : 0,
    marginRight: hasChildren ? theme.spacing.sm : 0,
  },
});
