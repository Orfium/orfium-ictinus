/**
 * Here are listed all the colors available for our project
 * Flat colors are the actual colors of the system
 **/
export const flatColors = [
  'lightGray',
  'darkGray',
  'coolGray',
  'warmGray',
  'magenta',
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'lightBlue',
  'blue',
  'darkBlue',
  'purple',
] as const;
/**
 * Here are listed all the color shades
 * Each colors of the flat palette is generated with these variations
 * E.g red.100 = color or yellow.500 = color
 * so there is no yellow but variations of yellow
 * default variation: 400
 **/
export const colorShades = [100, 200, 300, 400, 500, 600, 700] as const;

export type flatPalette = Record<typeof flatColors[number], generatedColorShades>;

export type generatedColorShades = Record<typeof colorShades[number], string>;

/**
 * Palette is end output of what is produced and exported to the client projects
 * primary, secondary are not colors per se but a type of color
 * for example error is red but also defines a state that's why is listed here and not in flat colors
 **/
export type Palette = {
  primary: generatedColorShades;
  secondary: generatedColorShades;
  branded1: generatedColorShades;
  branded2: generatedColorShades;
  success: generatedColorShades;
  error: generatedColorShades;
  warning: generatedColorShades;
  info: generatedColorShades;
  light: generatedColorShades;
  text: {
    primary: generatedColorShades;
    secondary: generatedColorShades;
    light: generatedColorShades;
  };
  flat: flatPalette;

  white: string;
  black: string;
};

export type formFieldStyles = 'filled' | 'outlined' | 'elevated';
