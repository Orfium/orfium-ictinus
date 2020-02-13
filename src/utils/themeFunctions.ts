import theme from 'theme';

export type AcceptedColorComponentTypes =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 'branded1'
  | 'branded2';

export const colorPickerBasedOnType = (type: AcceptedColorComponentTypes) => {
  switch (type) {
    case 'primary':
      return theme.palette.primary;
    default:
      return '';
  }
};
