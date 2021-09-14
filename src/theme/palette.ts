import { getColor } from './index';
import { lightPaletteConfig } from './palette.config';
import { enhancePaletteWithShades } from './utils';

export const neutralColors = ['neutralWhite', 'neutralBlack'] as const;

export const BASE_SHADE = 500;

/**
 * Here are listed all the colors available for our project
 * Flat colors are the actual colors of the system
 **/
export const flatColors = [
  'greyScale',
  'darkGrey',
  'lightGrey',
  'red',
  'magenta',
  'purple',
  'darkBlue',
  'blue',
  'lightBlue',
  'teal',
  'green',
  'yellow',
  'orange',
  'darkOrange',
  ...neutralColors,
] as const;
/**
 * Here are listed all the color shades
 * Each colors of the flat palette is generated with these variations
 * E.g red.100 = color or yellow.500 = color
 * so there is no yellow but variations of yellow
 * default variation: 500
 **/
export const colorShades = [
  50,
  100,
  150,
  200,
  250,
  300,
  350,
  400,
  450,
  500,
  550,
  600,
  650,
  700,
  750,
  800,
  850,
  900,
  950,
] as const;
/**
 * mainTypes are not colors per se but a type of color
 * for example error is red but also defines a state that's why is listed here and not in flat colors
 * Each color has again the above variations (shades)
 **/
export const mainTypes = [
  'primary',
  'secondary',
  'success',
  'error',
  'warning',
  'info',
  'light',
] as const;

export type flatPalette = Record<typeof flatColors[number], generatedColorShades>;

export type generatedColorShades = Record<typeof colorShades[number], string>;

/**
 * Palette is end output of what is produced and exported to the client projects
 **/
export type Palette = {
  text: {
    primary: generatedColorShades;
    secondary: generatedColorShades;
    light: generatedColorShades;
  };
  flat: flatPalette;

  white: string;
  black: string;
} & Record<typeof mainTypes[number], generatedColorShades>;

export type formFieldStyles = 'filled' | 'outlined' | 'elevated';

/**
 * this function picks either white or black color based on the background that is passed
 * swatches are calculated based on accessibility by the design team and splited to those two colors
 **/
export const pickTextColorFromSwatches = (
  color: typeof flatColors[number],
  shade: typeof colorShades[number]
) => {
  const colors950To750: typeof flatColors[number][] = [
    'greyScale',
    'darkGrey',
    'lightGrey',
    'red',
    'magenta',
    'purple',
    'darkBlue',
    'blue',
    'lightBlue',
    'teal',
    'green',
    'yellow',
    'orange',
    'darkOrange',
    'neutralBlack',
  ];
  const colorsForWhiteText: Partial<Record<
    typeof colorShades[number],
    typeof flatColors[number][]
  >> = {
    950: colors950To750,
    900: colors950To750,
    850: colors950To750,
    800: colors950To750,
    750: colors950To750,
    700: [
      'greyScale',
      'darkGrey',
      'lightGrey',
      'red',
      'magenta',
      'purple',
      'darkBlue',
      'blue',
      'lightBlue',
      'green',
      'orange',
      'darkOrange',
    ],
    650: [
      'greyScale',
      'darkGrey',
      'lightGrey',
      'red',
      'magenta',
      'purple',
      'darkBlue',
      'blue',
      'green',
      'orange',
      'darkOrange',
    ],
    600: ['greyScale', 'darkGrey', 'red', 'magenta', 'purple', 'darkBlue', 'blue', 'darkOrange'],
    550: ['greyScale', 'darkGrey', 'red', 'magenta', 'purple', 'darkBlue', 'blue', 'darkOrange'],
    500: ['darkGrey', 'magenta', 'purple', 'darkBlue', 'darkOrange'],
    450: ['darkGrey', 'purple', 'darkBlue', 'darkOrange'],
    400: ['darkGrey', 'darkOrange'],
    350: ['darkGrey', 'darkOrange'],
  };
  const pickedShade = colorsForWhiteText[shade];
  const pickedColor = pickedShade && pickedShade?.find(item => item === color);
  const palette = enhancePaletteWithShades(lightPaletteConfig);

  return pickedColor ? '#fff' : getColor(palette)('darkGrey', 850);
};
