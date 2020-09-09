import { backgroundPickerBasedOnType, colorPickerBasedOnType } from 'utils/themeFunctions';
import { Props } from 'components/Button/Button';
import { RequiredProperties } from 'utils/common';
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

export const iconButtonStyle = ({ type, filled, size, icon }: RequiredProperties<Props>) => (
  theme: Theme
) => {
  const calculatedPaddingSpace = size === 'sm' ? theme.spacing.md : theme.spacing.xl;

  return {
    fontSize: theme.typography.fontSizes['16'],
    color: colorPickerBasedOnType(type)(theme),
    backgroundColor: filled ? backgroundPickerBasedOnType(type)(theme) : 'transparent',
    paddingLeft: icon ? 0 : calculatedPaddingSpace,
    paddingRight: calculatedPaddingSpace,
    height: heightBasedOnSize(size),
    borderRadius: theme.spacing.xsm,
    border: filled ? 'none' : `solid 1px ${theme.palette.gray100}`,
  };
};

export const buttonSpanStyle = ({ icon, size }: RequiredProperties<Props>) => (theme: Theme) => ({
  display: icon ? 'flex' : 'block',
  // In orfium-ictinus/node_modules/@emotion/serialize/node_modules/csstype/index.d.ts
  // The FlexDirectionProperty, unlike other properties, does not include a simple 'string'
  // definition. So we cast this as something it will accept.
  flexDirection: icon ? ('row' as const) : ('column' as const),
  alignItems: icon ? 'center' : 'flex-start',
  '> :first-child': {
    marginLeft: icon ? (size === 'sm' ? theme.spacing.sm : theme.spacing.md) : 0,
    marginRight: theme.spacing.sm,
  },
});
