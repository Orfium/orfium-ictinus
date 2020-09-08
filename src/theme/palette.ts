export const flatPaletteConfig: flatPaletteConfigType = {
  lightGray: '#cfcfcf',

  darkGray: '#494949',

  coolGray: '#a3a9ac',

  warmGray: '#afa6a3',

  magenta: '#d21e75',

  red: '#d40000',

  orange: '#f5781b',

  yellow: '#ffc700',

  olive: '#545c15',

  green: '#6bbc15',

  teal: '#27dcbd',

  blue: '#18aed2',

  darkBlue: '#232d7d',

  purple: '#71458f',
};

/*
gray -> lightGray02
gray50 —> lightGray04
  gray100 —> lightGray07
  gray200 -> darkGray04
  gray250 -> darkGray05
  gray300 —> darkGray06
 */

export const lightPalette: PaletteConfig = {
  // Primary Palette
  primary: '#DFDFDF',
  secondary: '',

  branded1: 'orange',
  branded2: 'yellow',

  //rest
  success: flatPaletteConfig.green,
  error: flatPaletteConfig.red,
  warning: flatPaletteConfig.orange,
  info: flatPaletteConfig.blue,
  light: flatPaletteConfig.lightGray,

  flat: {
    ...flatPaletteConfig,
  },

  text: {
    primary: flatPaletteConfig.darkGray,
    secondary: flatPaletteConfig.coolGray,
    light: flatPaletteConfig.lightGray,
  },
};

export const darkPalette: PaletteConfig = {
  // Primary Palette
  primary: '',
  secondary: '',

  branded1: 'orange',
  branded2: 'yellow',

  //rest
  success: flatPaletteConfig.green,
  error: flatPaletteConfig.red,
  warning: flatPaletteConfig.orange,
  info: flatPaletteConfig.blue,
  light: flatPaletteConfig.lightGray,

  flat: {
    ...flatPaletteConfig,
  },

  text: {
    primary: flatPaletteConfig.darkGray,
    secondary: flatPaletteConfig.coolGray,
    light: flatPaletteConfig.lightGray,
  },
};

type flatPaletteConfigType = {
  lightGray?: string;

  darkGray?: string;

  coolGray?: string;

  warmGray?: string;

  magenta?: string;

  red?: string;

  orange?: string;

  yellow?: string;

  olive?: string;

  green?: string;

  teal?: string;

  blue?: string;

  darkBlue?: string;

  purple?: string;
};

export type flatPalette = {
  white: generatedColorShades;

  coolGray: generatedColorShades;

  warmGray: generatedColorShades;

  neutralGray: generatedColorShades;

  black: generatedColorShades;

  magenta: generatedColorShades;

  red: generatedColorShades;

  orange: generatedColorShades;

  yellow: generatedColorShades;

  olive: generatedColorShades;

  green: generatedColorShades;

  teal: generatedColorShades;

  blue: generatedColorShades;

  darkBlue: generatedColorShades;

  purple: generatedColorShades;
};

export type PaletteConfig = {
  // Primary Palette
  primary?: string;
  secondary?: string;

  branded1?: string;
  branded2?: string;

  success?: string;
  error?: string;
  warning?: string;
  info?: string;
  light?: string;

  text?: {
    primary?: string;
    secondary?: string;
    light?: string;
  };

  flat?: flatPaletteConfigType;
};

type generatedColorShades = {
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
};
