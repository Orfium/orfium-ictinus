import { getContrast } from 'polished';

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
 * Here are listed all the colors available for our project
 * Pale colors are just colors without shades
 **/
export const paleColors = [
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
  'link',
] as const;

export type flatPalette = Record<typeof flatColors[number], generatedColorShades>;

export type palePalette = Record<typeof paleColors[number], string>;

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
  pale: palePalette;

  white: string;
  black: string;
} & Record<typeof mainTypes[number], generatedColorShades>;

export type formFieldStyles = 'filled' | 'outlined' | 'elevated';

/**
 * this function picks either white or black color based on the background that is passed
 * swatches are calculated based on accessibility by getAATextColor function and splited to those two colors
 **/
export const pickTextColorFromSwatches = (
  color: typeof flatColors[number],
  shade: typeof colorShades[number]
): string => {
  const palette = enhancePaletteWithShades(lightPaletteConfig);
  const hexColorCode = getColor(palette)(color, shade);

  return getAATextColor(hexColorCode);
};

export const getAATextColor = (color: string): string => {
  const palette = enhancePaletteWithShades(lightPaletteConfig);
  const white = palette.white;
  const black = getColor(palette)('darkGrey', 850);

  return getContrast(color, black) > getContrast(color, white) ? black : white;
};
