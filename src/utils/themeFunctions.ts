import { Theme } from '../theme';

export type AcceptedColorComponentTypes =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 'branded1'
  | 'branded2';

const getColorFromType = (type: AcceptedColorComponentTypes | string, theme: Theme) => {
  switch (type) {
    case 'primary':
      return theme.palette.primary[100];
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
    default:
      return type;
  }
};

export const backgroundPickerBasedOnType = (type: AcceptedColorComponentTypes) => (theme: Theme) =>
  getColorFromType(type, theme);

export const colorPickerBasedOnType = (type: AcceptedColorComponentTypes) => (theme: Theme) => {
  switch (type) {
    case 'primary':
      return theme.palette.text.primary[400];
    case 'secondary':
      return theme.palette.text.secondary[100];
    default:
      return theme.palette.text.light[100];
  }
};

export const fillPickerBasedOnType = (type: AcceptedColorComponentTypes | string) => (
  theme: Theme
) => getColorFromType(type, theme);
