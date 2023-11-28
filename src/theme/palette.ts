import { getContrast } from 'polished';

import type { TextColorTypes } from './index';
import type { GradientPaletteConfig, NeutralPaletteConfig } from './palette.config';
import { getColorErrors } from './utils';
import { errorHandler } from '../utils/helpers';

export const neutralColors = ['neutralWhite', 'neutralBlack'] as const;

export const colorSchemes = ['semantic', 'dark'] as const;

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
  'lightPurple',
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
/** @TODO remove all these when all components are revisited for v5 */
export const paleColors = [
  'greyScale',
  'darkGrey',
  'lightGrey',
  'red',
  'magenta',
  'lightPurple',
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
  50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950,
] as const;

export const MIN_SHADE = 50;
export const BASE_SHADE = 500;
export const MAX_SHADE = 950;

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

export type FlatPalette = Record<(typeof flatColors)[number], GeneratedColorShades>;

export type PalePalette = Record<(typeof paleColors)[number], string>;

export type GeneratedColorShades = Record<(typeof colorShades)[number], string>;

/**
 * Palette is end output of what is produced and exported to the client projects
 **/
export type Palette = {
  flat: FlatPalette;
  neutral: NeutralPaletteConfig;
  gradient: GradientPaletteConfig;

  /** @TODO remove all these when all components are revisited for v5 */
  text: {
    primary: GeneratedColorShades;
    secondary: GeneratedColorShades;
    light: GeneratedColorShades;
  };
  pale: PalePalette;
  white: string;
  black: string;
} & Record<(typeof mainTypes)[number], GeneratedColorShades>;

export type formFieldStyles = 'filled' | 'outlined' | 'elevated';

export type GetColor = {
  (color: (typeof flatColors)[number], variant: (typeof colorShades)[number]): string;
  (
    color: (typeof flatColors)[number],
    variant: (typeof colorShades)[number],
    scope: 'flat'
  ): string;
  (color: TextColorTypes, variant: (typeof colorShades)[number], scope: 'text'): string;
  (
    color: (typeof mainTypes)[number],
    variant: (typeof colorShades)[number],
    scope: 'normal'
  ): string;
  (color: (typeof paleColors)[number], variant: null, scope: 'pale'): string;
};

export const getColor =
  (palette: Palette): GetColor =>
  (
    color:
      | (typeof flatColors)[number]
      | TextColorTypes
      | (typeof mainTypes)[number]
      | (typeof paleColors)[number],
    variant: (typeof colorShades)[number] | null,
    scope: 'flat' | 'text' | 'normal' | 'pale' = 'flat'
  ) => {
    let endColor;

    if (variant === null) {
      endColor = palette?.[scope]?.[color];
    } else if (scope === 'normal') {
      endColor = palette[color][variant];
    } else {
      endColor = palette?.[scope]?.[color]?.[variant];
    }

    errorHandler<string>(getColorErrors, endColor);

    return endColor;
  };

/**
 * this function picks either white or black color based on the background that is passed
 * swatches are calculated based on accessibility by getAAColor function and splited to those two colors
 **/
export type GetAAColorFromSwatches = {
  (color: (typeof flatColors)[number], variant: (typeof colorShades)[number]): string;
};

export const getAAColorFromSwatches =
  (palette: Palette): GetAAColorFromSwatches =>
  (color: (typeof flatColors)[number], shade: (typeof colorShades)[number]): string => {
    const hexColorCode = getColor(palette)(color, shade);

    return getAAColor(palette)(hexColorCode);
  };

export type GetAAColor = {
  (color: string): string;
};

export const getAAColor =
  (palette: Palette): GetAAColor =>
  (color: string): string => {
    const white = palette.white;
    const black = palette.black;

    return getContrast(color, black) > getContrast(color, white) ? black : white;
  };
