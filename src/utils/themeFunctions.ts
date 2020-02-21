import { Theme } from 'theme';

export type AcceptedColorComponentTypes =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
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
