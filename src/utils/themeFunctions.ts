import { get } from 'lodash';
import { Theme } from '../theme';

export type AcceptedColorComponentTypes =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'teal'
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

  return theme.palette.gray50;
};

export const colorPickerBasedOnType = (type: AcceptedColorComponentTypes) => (theme: Theme) => {
  switch (type) {
    case 'primary':
      return theme.palette.text.primary;
    case 'secondary':
      return theme.palette.text.primary;
    default:
      return theme.palette.text.light;
  }
};

export const fillPickerBasedOnType = (type: AcceptedColorComponentTypes) => (theme: Theme) => {
  switch (type) {
    case 'primary':
      return theme.palette.primary;
    case 'secondary':
      return theme.palette.secondary;
    case 'success':
      return theme.palette.success;
    case 'teal':
      // @TODO replace with theme.palette.teal when implemented
      return theme.palette.success;
    case 'error':
      return theme.palette.error;
    case 'info':
      return theme.palette.info;
    case 'warning':
      return theme.palette.warning;
    case 'branded1':
      return theme.palette.branded1;
    case 'branded2':
      return theme.palette.branded2;
    case 'white':
      return theme.palette.white;
    case 'dark':
      return theme.palette.gray300;
    case 'light':
      return theme.palette.text.light;
    case 'gray50':
      return theme.palette.gray50;
    case 'gray100':
      return theme.palette.gray100;
    case 'gray200':
      return theme.palette.gray200;
    default:
      return theme.palette.primary;
  }
};
