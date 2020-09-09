import { Theme } from 'theme';
import { get } from 'lodash';

export type AcceptedColorComponentTypes =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 'light'
  | 'dark'
  | 'branded1'
  | 'branded2'
  | 'white'
  | 'gray'
  | 'gray50'
  | 'gray100'
  | 'gray200'
  | 'gray300';

export const backgroundPickerBasedOnType = (type: AcceptedColorComponentTypes) => (
  theme: Theme
) => {
  if (type) {
    return get(theme.palette, [type]);
  }

  return theme.palette.flat.lightGray[400];
};

export const colorPickerBasedOnType = (type: AcceptedColorComponentTypes) => (theme: Theme) => {
  switch (type) {
    case 'primary':
      return theme.palette.text.primary[400];
    case 'secondary':
      return theme.palette.text.primary[400];
    default:
      return theme.palette.text.light[400];
  }
};

export const fillPickerBasedOnType = (type: AcceptedColorComponentTypes) => (theme: Theme) => {
  switch (type) {
    case 'primary':
      return theme.palette.primary[400];
    case 'secondary':
      return theme.palette.secondary[400];
    case 'success':
      return theme.palette.success[400];
    case 'error':
      return theme.palette.error[400];
    case 'info':
      return theme.palette.info[400];
    case 'warning':
      return theme.palette.warning[400];
    case 'branded1':
      return theme.palette.branded1[400];
    case 'branded2':
      return theme.palette.branded2[400];
    case 'white':
      return theme.palette.flat.lightGray[100];
    case 'dark':
      return theme.palette.flat.darkGray[600];
    case 'light':
      return theme.palette.text.light[400];
    case 'gray50':
      return theme.palette.flat.lightGray[400];
    case 'gray100':
      return theme.palette.flat.lightGray[700];
    case 'gray200':
      return theme.palette.flat.darkGray[400];
    default:
      return theme.palette.primary[400];
  }
};
