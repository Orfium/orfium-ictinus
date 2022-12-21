import { Theme } from '../theme';
import { BASE_SHADE, colorShades, flatColors, mainTypes } from '../theme/palette';
import { PropsValidationError } from './errors';
import { errorHandler } from './helpers';

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

export const fillPickerBasedOnType =
  (type: AcceptedColorComponentTypes | string, variant: typeof colorShades[number] = 50) =>
  (theme: Theme) =>
    getColorFromType(type, theme, variant);

/**
 * The type of the calculateActualColorFromComponentProp that will be used for the components
 * translation from string
 * */
export type ColorShapeFromComponent = {
  color: typeof flatColors[number];
  shade: typeof colorShades[number];
};

type ErrorProp = { color: string; colorAfterSplit: string[] };

export const errors = [
  {
    condition: ({ colorAfterSplit }: ErrorProp): boolean => Boolean(colorAfterSplit.length !== 2),
    error: ({ color }: ErrorProp): PropsValidationError =>
      new PropsValidationError(`Error trying to translate your component color: ${color}`),
  },
  {
    condition: ({ colorAfterSplit }: ErrorProp): boolean =>
      Boolean(!flatColors.includes(colorAfterSplit[0] as typeof flatColors[number])),
    error: ({ color }: ErrorProp): PropsValidationError =>
      new PropsValidationError(
        `You passed a wrong color for the first argument: ${color} - try something like red-500`
      ),
  },
  {
    condition: ({ colorAfterSplit }: ErrorProp): boolean =>
      Boolean(!colorShades.includes(Number(colorAfterSplit[1]) as typeof colorShades[number])),
    error: ({ color }: ErrorProp): PropsValidationError =>
      new PropsValidationError(
        `You passed a wrong shade for the second argument: ${color} - try something like red-500`
      ),
  },
];

/**
 * A utility to translate a color like red-500 to an object. This calculates on the color passed picked by our palette.
 * So in case you run a red color for example `#d40000` this will return
 * returns an object or undefined
 * */
export const calculateActualColorFromComponentProp = (color: string): ColorShapeFromComponent => {
  const colorAfterSplit = color.split('-');

  errorHandler<ErrorProp>(errors, { color, colorAfterSplit });

  const calculatedColor = colorAfterSplit[0];
  const calculatedShade = Number(colorAfterSplit[1]);

  return {
    color: calculatedColor as typeof flatColors[number],
    shade: calculatedShade as typeof colorShades[number],
  };
};
