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
      return theme.utils.getColor(type, 100, 'normal');
    case 'secondary':
    case 'success':
    case 'error':
    case 'info':
    case 'warning':
    case 'branded1':
    case 'branded2':
      return theme.utils.getColor(type, 400, 'normal');
    default:
      return type;
  }
};

export const backgroundPickerBasedOnType = (type: AcceptedColorComponentTypes) => (theme: Theme) =>
  getColorFromType(type, theme);

export const colorPickerBasedOnType = (type: AcceptedColorComponentTypes) => (theme: Theme) => {
  switch (type) {
    case 'primary':
      return theme.utils.getColor('primary', 400, 'text');
    case 'secondary':
      return theme.utils.getColor('secondary', 100, 'text');
    default:
      return theme.utils.getColor('light', 100, 'text');
  }
};

export const fillPickerBasedOnType = (type: AcceptedColorComponentTypes | string) => (
  theme: Theme
) => getColorFromType(type, theme);
