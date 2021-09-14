import { flatColors } from './palette';

export const flatPaletteConfig: Record<typeof flatColors[number], string> = {
  greyScale: '#808080',
  darkGrey: '#32324E',
  lightGrey: '#889BBF',
  red: '#FF1744',
  magenta: '#C813D5',
  purple: '#8833FF',
  darkBlue: '#4945EE',
  blue: '#2979FF',
  lightBlue: '#28BDFF',
  teal: '#1DE9B6',
  green: '#36C152',
  yellow: '#FDD835',
  orange: '#FF6F00',
  darkOrange: '#BF360C',
  neutralWhite: '#fbfbfb',
  neutralBlack: '#030303',
};

export const lightPaletteConfig: PaletteConfig = {
  // Primary Palette
  primary: flatPaletteConfig.darkBlue,
  secondary: flatPaletteConfig.yellow,

  //rest
  success: flatPaletteConfig.green,
  error: flatPaletteConfig.red,
  warning: flatPaletteConfig.orange,
  info: flatPaletteConfig.darkBlue,
  light: flatPaletteConfig.greyScale,

  flat: {
    ...flatPaletteConfig,
  },

  text: {
    primary: flatPaletteConfig.darkGrey,
    secondary: flatPaletteConfig.lightGrey,
    light: flatPaletteConfig.greyScale,
  },

  white: 'white',
  black: 'black',
};

export const darkPaletteConfig: PaletteConfig = {
  // Primary Palette
  primary: flatPaletteConfig.darkGrey,
  secondary: flatPaletteConfig.lightGrey,

  //rest
  success: flatPaletteConfig.green,
  error: flatPaletteConfig.red,
  warning: flatPaletteConfig.orange,
  info: flatPaletteConfig.darkBlue,
  light: flatPaletteConfig.lightGrey,

  flat: {
    ...flatPaletteConfig,
  },

  text: {
    primary: flatPaletteConfig.darkGrey,
    secondary: flatPaletteConfig.greyScale,
    light: flatPaletteConfig.lightGrey,
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
