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
  | 'lightGray100'
  | 'lightGray200'
  | 'lightGray400'
  | 'lightGray700'
  | 'darkGray400'
  | 'darkGray600';

const getColorFromType = (
  type: AcceptedColorComponentTypes,
  defaultValue: string,
  theme: Theme
) => {
  switch (type) {
    case 'primary':
      return theme.palette.primary[400];
    case 'secondary':
      return theme.palette.secondary[400];
    case 'success':
      return theme.palette.success[400];
    case 'teal':
      return theme.palette.flat.teal[400];
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
    case 'lightGray100':
      return theme.palette.flat.lightGray[100];
    case 'dark':
      return theme.palette.flat.darkGray[600];
    case 'light':
      return theme.palette.text.light[400];
    case 'lightGray400':
      return theme.palette.flat.lightGray[400];
    case 'lightGray700':
      return theme.palette.flat.lightGray[700];
    case 'darkGray400':
      return theme.palette.flat.darkGray[400];
    default:
      return defaultValue;
  }
};

export const backgroundPickerBasedOnType = (type: AcceptedColorComponentTypes) => (theme: Theme) =>
  getColorFromType(type, theme.palette.flat.lightGray[400], theme);

export const colorPickerBasedOnType = (type: AcceptedColorComponentTypes) => (theme: Theme) => {
  switch (type) {
    case 'primary':
      return theme.palette.text.primary[400];
    case 'secondary':
      return theme.palette.text.secondary[400];
    default:
      return theme.palette.text.light[100];
  }
};

export const fillPickerBasedOnType = (type: AcceptedColorComponentTypes) => (theme: Theme) =>
  getColorFromType(type, theme.palette.primary[400], theme);
