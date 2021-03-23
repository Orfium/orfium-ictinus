import { flatColors } from './palette';

export const flatPaletteConfig: Record<typeof flatColors[number], string> = {
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
  lightBlue: '#18aed2',
  blue: '#1283d3',
  darkBlue: '#232d7d',
  purple: '#71458f',
  mint: '#2AFFC3',
  neutralWhite: '#fbfbfb',
  neutralBlack: '#030303',
};

export const lightPaletteConfig: PaletteConfig = {
  // Primary Palette
  primary: flatPaletteConfig.darkBlue,
  secondary: flatPaletteConfig.yellow,

  branded1: flatPaletteConfig.orange,
  branded2: flatPaletteConfig.yellow,

  //rest
  success: flatPaletteConfig.green,
  error: flatPaletteConfig.red,
  warning: flatPaletteConfig.orange,
  info: flatPaletteConfig.darkBlue,
  light: flatPaletteConfig.lightGray,

  flat: {
    ...flatPaletteConfig,
  },

  text: {
    primary: flatPaletteConfig.darkGray,
    secondary: flatPaletteConfig.coolGray,
    light: flatPaletteConfig.lightGray,
  },

  white: 'white',
  black: 'black',
};

export const darkPaletteConfig: PaletteConfig = {
  // Primary Palette
  primary: flatPaletteConfig.darkGray,
  secondary: flatPaletteConfig.lightGray,

  branded1: flatPaletteConfig.orange,
  branded2: flatPaletteConfig.yellow,

  //rest
  success: flatPaletteConfig.green,
  error: flatPaletteConfig.red,
  warning: flatPaletteConfig.orange,
  info: flatPaletteConfig.darkBlue,
  light: flatPaletteConfig.lightGray,

  flat: {
    ...flatPaletteConfig,
  },

  text: {
    primary: flatPaletteConfig.darkGray,
    secondary: flatPaletteConfig.coolGray,
    light: flatPaletteConfig.lightGray,
  },

  white: 'white',
  black: 'black',
};

export type flatPaletteConfigType = Partial<Record<typeof flatColors[number], string>>;

export type TextPaletteConfigType = {
  primary?: string;
  secondary?: string;
  light?: string;
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

  text?: TextPaletteConfigType;

  flat?: flatPaletteConfigType;

  white?: string;
  black?: string;
};
