import { Theme } from '../theme';
import { flatColors, mainTypes } from '../theme/palette';

export type AcceptedColorComponentTypes = typeof mainTypes[number];

export const getColorFromType = (type: AcceptedColorComponentTypes | string, theme: Theme) => {
  if (Object.values(mainTypes).includes(type as AcceptedColorComponentTypes)) {
    const colorTypeValue = type as AcceptedColorComponentTypes;
    if (colorTypeValue === 'primary') {
      return theme.utils.getColor(colorTypeValue, 100, 'normal');
    }

    return theme.utils.getColor(colorTypeValue, 400, 'normal');
  }
  if (Object.values(flatColors).includes(type as typeof flatColors[number])) {
    const colorValue = type as typeof flatColors[number];

    return theme.utils.getColor(colorValue, 400);
  }

  return type;
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
