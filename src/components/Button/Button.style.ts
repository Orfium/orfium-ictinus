import { colorPickerBasedOnType, backgroundPickerBasedOnType } from 'utils/themeFunctions';
import { Props } from 'src/components/Button/Button';
import { RequiredProperties } from 'src/utils/common';
import { Theme } from 'src/theme';
import { FlexDirectionProperty } from 'csstype';

/** Calculates the button specific height based on the size passed to it
 * These sizes are specific to this button thus these are placed here and not in the config **/
const heightBasedOnSize = (size: 'lg' | 'md' | 'sm') => {
  switch (size) {
    case 'lg':
      return 56;
    case 'sm':
      return 40;
    default:
      return 46;
  }
};

export const buttonStyle = ({ type, filled, size }: RequiredProperties<Props>) => (
  theme: Theme
) => ({
  fontSize: theme.typography.fontSizes['16'],
  color: colorPickerBasedOnType(type)(theme),
  backgroundColor: filled ? backgroundPickerBasedOnType(type)(theme) : 'transparent',
  paddingLeft: theme.spacing.md,
  paddingRight: theme.spacing.md,
  height: heightBasedOnSize(size),
  borderRadius: theme.spacing.xsm,
  border: filled ? 'none' : `solid 1px ${theme.palette.gray100}`,
});

export const buttonSpanStyle = ({ icon }: RequiredProperties<Props>) => (theme: Theme) => ({
  display: icon ? 'flex' : 'block',
  flexDirection: (icon ? 'row' : 'column') as FlexDirectionProperty,
  alignItems: icon ? 'center' : 'flex-start',
  '> span': {
    marginLeft: theme.spacing.sm,
  },
});
