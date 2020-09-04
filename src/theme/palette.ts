export const flatPaletteConfig: flatPaletteConfigType = {
  white: '#ffffff',

  coolGray: '#a3a9ac',

  warmGray: '#afa6a3',

  neutralGray: '#9b9b9b',

  black: '#232323',

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
  light: flatPaletteConfig.white,

  flat: {
    ...flatPaletteConfig,
  },

  text: {
    primary: flatPaletteConfig.black,
    secondary: flatPaletteConfig.neutralGray,
    light: flatPaletteConfig.white,
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
  light: flatPaletteConfig.white,

  flat: {
    ...flatPaletteConfig,
  },

  text: {
    primary: flatPaletteConfig.black,
    secondary: flatPaletteConfig.neutralGray,
    light: flatPaletteConfig.white,
  },
};

type flatPaletteConfigType = {
  white?: string;

  coolGray?: string;

  warmGray?: string;

  neutralGray?: string;

  black?: string;

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
