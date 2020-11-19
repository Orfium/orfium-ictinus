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
export const colorShades = [100, 200, 300, 400, 500, 600, 700] as const;

export type flatPalette = Record<typeof flatColors[number], generatedColorShades>;

export type generatedColorShades = Record<typeof colorShades[number], string>;

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
