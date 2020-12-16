import { Theme } from '../theme';
import { colorShades, flatColors, mainTypes } from '../theme/palette';

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

/**
 * The type of the calculateActualColorFromComponentProp that will be used for the components
 * translation from string
 * */
export type ColorShapeFromComponent = {
  color: typeof flatColors[number];
  shade: typeof colorShades[number];
};
/**
 * A utility to translate a color like red-400 to an object
 * returns an object or undefined
 * */
export const calculateActualColorFromComponentProp = (color: string): ColorShapeFromComponent => {
  const colorAfterSplit = color.split('-');

  if (colorAfterSplit.length !== 2) {
    throw new Error(`Error trying to translate your component color: ${color}`);
  }

  const calculatedColor = colorAfterSplit[0];
  const calculatedShade = Number(colorAfterSplit[1]);

  if (!flatColors.includes(calculatedColor as typeof flatColors[number])) {
    throw new Error(
      `You passed a wrong color for the first argument: ${color} - try something like red-400`
    );
  }
  if (!colorShades.includes(calculatedShade as typeof colorShades[number])) {
    throw new Error(
      `You passed a wrong shade for the second argument: ${color} - try something like red-400`
    );
  }

  return {
    color: calculatedColor as typeof flatColors[number],
    shade: calculatedShade as typeof colorShades[number],
  };
};
