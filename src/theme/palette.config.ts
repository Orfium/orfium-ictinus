import { flatColors } from './palette';

export const flatPaletteConfig: Record<typeof flatColors[number], string> = {
  lightGray: '#cfcfcf',
  darkGray: '#494949',
  warmGray: '#afa6a3',
  coolGray: '#a3a9ac',
  lightCoolGray: '#F3F5F9',
  green: '#6bbc15',
  red: '#d40000',
  orange: '#f5781b',
  // @TODO only for old VH - soon will be removed
  darkOrange: '#bf360c',
  darkBlue: '#232d7d',
  magenta: '#d21e75',
  yellow: '#ffc700',
  purple: '#71458f',
  blue: '#1283d3',
  lightBlue: '#18aed2',
  teal: '#27dcbd',
  mint: '#2AFFC3',
  vividPurple: '#8833FF',
  vividBlue: '#4945EE',
  cyan: '#76C6FF',
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
