export const neutralColors = ['neutralWhite', 'neutralBlack'];

/**
 * Here are listed all the colors available for our project
 * Flat colors are the actual colors of the system
 **/
export const flatColors = [
  'lightGray',
  'darkGray',
  'lightCoolGray',
  'coolGray',
  'warmGray',
  'magenta',
  'red',
  'orange',
  // @TODO only for old VH - soon will be removed
  'darkOrange',
  'yellow',
  'green',
  'teal',
  'lightBlue',
  'blue',
  'darkBlue',
  'purple',
  'mint',
  'cyan',
  'vividBlue',
  'vividPurple',
  ...neutralColors,
] as const;
/**
 * Here are listed all the color shades
 * Each colors of the flat palette is generated with these variations
 * E.g red.100 = color or yellow.500 = color
 * so there is no yellow but variations of yellow
 * default variation: 400
 **/
export const colorShades = [100, 200, 300, 400, 500, 600, 700] as const;
/**
 * mainTypes are not colors per se but a type of color
 * for example error is red but also defines a state that's why is listed here and not in flat colors
 * Each color has again the above variations (shades)
 **/
export const mainTypes = [
  'primary',
  'secondary',
  'branded2',
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
  const colorsForWhiteText: Partial<Record<
    typeof colorShades[number],
    typeof flatColors[number][]
  >> = {
    700: [
      'lightGray',
      'lightCoolGray',
      'darkGray',
      'coolGray',
      'warmGray',
      'magenta',
      'red',
      'orange',
      'darkOrange',
      'yellow',
      'green',
      'teal',
      'lightBlue',
      'blue',
      'darkBlue',
      'purple',
      'mint',
      'cyan',
      'vividBlue',
      'vividPurple',
      'neutralBlack',
    ],
    600: [
      'lightGray',
      'lightCoolGray',
      'darkGray',
      'coolGray',
      'warmGray',
      'magenta',
      'red',
      'orange',
      'darkOrange',
      'yellow',
      'green',
      'teal',
      'lightBlue',
      'blue',
      'darkBlue',
      'purple',
      'mint',
      'cyan',
      'vividBlue',
      'vividPurple',
    ],
    500: [
      'darkGray',
      'coolGray',
      'magenta',
      'red',
      'orange',
      'darkOrange',
      'yellow',
      'green',
      'lightBlue',
      'blue',
      'darkBlue',
      'purple',
      'mint',
      'teal',
      'cyan',
      'vividBlue',
      'vividPurple',
    ],
    400: [
      'darkGray',
      'magenta',
      'red',
      'darkOrange',
      'darkBlue',
      'purple',
      'vividBlue',
      'vividPurple',
    ],
    300: ['darkGray', 'darkBlue'],
  };
  const pickedShade = colorsForWhiteText[shade];
  const pickedColor = pickedShade && pickedShade?.find(item => item === color);

  return pickedColor ? '#fff' : '#000';
};
