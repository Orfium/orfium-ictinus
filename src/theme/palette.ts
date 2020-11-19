export type flatPalette = {
  lightGray: generatedColorShades;

  darkGray: generatedColorShades;

  coolGray: generatedColorShades;

  warmGray: generatedColorShades;

  magenta: generatedColorShades;

  red: generatedColorShades;

  orange: generatedColorShades;

  yellow: generatedColorShades;

  olive: generatedColorShades;

  green: generatedColorShades;

  teal: generatedColorShades;

  lightBlue: generatedColorShades;

  blue: generatedColorShades;

  darkBlue: generatedColorShades;

  purple: generatedColorShades;
};

export type generatedColorShades = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
};

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
