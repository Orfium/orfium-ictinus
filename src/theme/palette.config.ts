import { flatColors, paleColors } from './palette';

export const flatPaletteConfig: Record<typeof flatColors[number], string> = {
  greyScale: '#808080',
  darkGrey: '#32324E',
  lightGrey: '#889BBF',
  red: '#FF1744',
  magenta: '#C813D5',
  purple: '#8833FF',
  darkBlue: '#4945EE',
  blue: '#175BF5',
  lightBlue: '#28BDFF',
  teal: '#1DE9B6',
  green: '#36C152',
  yellow: '#FDD835',
  orange: '#FF6F00',
  darkOrange: '#BF360C',
  neutralWhite: '#fbfbfb',
  neutralBlack: '#030303',
};

export const palePaletteConfig: Record<typeof paleColors[number], string> = {
  greyScale: '#F9F9F9',
  darkGrey: '#F5F5F6',
  lightGrey: '#F9FAFC',
  red: '#FFF3F6',
  magenta: '#FCF3FD',
  purple: '#F9F5FF',
  darkBlue: '#F6F6FE',
  blue: '#F4F8FF',
  lightBlue: '#F4FCFF',
  teal: '#F4FEFB',
  green: '#F5FCF6',
  yellow: '#FFFDF5',
  orange: '#FFF8F2',
};

export const paletteConfig: PaletteConfig = {
  // Primary Palette
  primary: flatPaletteConfig.blue,
  secondary: flatPaletteConfig.teal,

  //rest
  success: flatPaletteConfig.green, //550 shade
  error: flatPaletteConfig.red,
  warning: flatPaletteConfig.orange,
  info: flatPaletteConfig.darkBlue,
  light: flatPaletteConfig.greyScale,
  link: '#246CE5',

  flat: {
    ...flatPaletteConfig,
  },

  pale: {
    ...palePaletteConfig,
  },

  text: {
    primary: flatPaletteConfig.darkGrey,
    secondary: flatPaletteConfig.lightGrey,
    light: flatPaletteConfig.greyScale,
  },

  white: 'white',
  black: 'black',
};

export type flatPaletteConfigType = Partial<Record<typeof flatColors[number], string>>;

export type palePaletteConfigType = Partial<Record<typeof paleColors[number], string>>;

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
  link?: string;

  text?: TextPaletteConfigType;

  flat?: flatPaletteConfigType;

  pale?: palePaletteConfigType;

  white?: string;
  black?: string;
};
