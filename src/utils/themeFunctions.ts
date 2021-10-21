import { Theme } from '../theme';
import { BASE_SHADE, colorShades, flatColors, mainTypes } from '../theme/palette';

export type AcceptedColorComponentTypes = typeof mainTypes[number];

/**
 ** This util provide an easy way to return the hex color from a type based on our main types 'primary', 'light', 'secondary' etc
 */
export const getColorFromType = (
  type: AcceptedColorComponentTypes | string,
  theme: Theme,
  variant: typeof colorShades[number] = 50
) => {
  const secondaryVariant = variant && variant !== 50 ? variant : BASE_SHADE;

  if (Object.values(mainTypes).includes(type as AcceptedColorComponentTypes)) {
    const colorTypeValue = type as AcceptedColorComponentTypes;
    if (colorTypeValue === 'primary') {
      return theme.utils.getColor(colorTypeValue, variant, 'normal');
    }

    return theme.utils.getColor(colorTypeValue, secondaryVariant, 'normal');
  }
  if (Object.values(flatColors).includes(type as typeof flatColors[number])) {
    const colorValue = type as typeof flatColors[number];

    return theme.utils.getColor(colorValue, secondaryVariant);
  }

  return type;
};

export const backgroundPickerBasedOnType = (type: AcceptedColorComponentTypes) => (theme: Theme) =>
  getColorFromType(type, theme);

export const colorPickerBasedOnType = (type: AcceptedColorComponentTypes) => (theme: Theme) => {
  switch (type) {
    case 'primary':
      return theme.utils.getColor('primary', BASE_SHADE, 'text');
    case 'secondary':
      return theme.utils.getColor('secondary', 50, 'text');
    default:
      return theme.utils.getColor('light', 50, 'text');
  }
};

export const fillPickerBasedOnType = (
  type: AcceptedColorComponentTypes | string,
  variant: typeof colorShades[number] = 50
) => (theme: Theme) => getColorFromType(type, theme, variant);

/**
 * The type of the calculateActualColorFromComponentProp that will be used for the components
 * translation from string
 * */
export type ColorShapeFromComponent = {
  color: typeof flatColors[number];
  shade: typeof colorShades[number];
};
/**
 * A utility to translate a color like red-500 to an object. This calculates on the color passed picked by our palette.
 * So in case you run a red color for example `#d40000` this will return
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
      `You passed a wrong color for the first argument: ${color} - try something like red-500`
    );
  }
  if (!colorShades.includes(calculatedShade as typeof colorShades[number])) {
    throw new Error(
      `You passed a wrong shade for the second argument: ${color} - try something like red-500`
    );
  }

  return {
    color: calculatedColor as typeof flatColors[number],
    shade: calculatedShade as typeof colorShades[number],
  };
};
