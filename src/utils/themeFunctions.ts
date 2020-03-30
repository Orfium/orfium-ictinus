import { Theme } from 'theme';

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
  | 'branded2';

export const backgroundPickerBasedOnType = (type: AcceptedColorComponentTypes) => (
  theme: Theme
) => {
  switch (type) {
    case 'success':
      return theme.palette.success;
    case 'error':
      return theme.palette.error;
    case 'info':
      return theme.palette.info;
    case 'warning':
      return theme.palette.warning;
    default:
      return theme.palette.gray50;
  }
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
    case 'error':
      return theme.palette.error;
    case 'info':
      return theme.palette.info;
    case 'warning':
      return theme.palette.info;
    case 'dark':
      return theme.palette.gray300;
    case 'light':
      return theme.palette.text.light;
    default:
      return theme.palette.primary;
  }
};
