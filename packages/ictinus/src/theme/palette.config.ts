import type { flatColors, paleColors } from './palette';

export type FlatPaletteConfig = Partial<Record<typeof flatColors[number], string>>;

/** @TODO remove this when all components are revisited for v5 */
export type PalePaletteConfig = Partial<Record<typeof paleColors[number], string>>;

/** @TODO remove this when all components are revisited for v5 */
export type TextPaletteConfig = {
  primary?: string;
  secondary?: string;
  light?: string;
};

export type NeutralPaletteConfig = {
  light?: string;
  dark?: string;
  grey?: string;
  transparent?: string;
};

export type GradientPaletteConfig = {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  upsell?: string;
  inverted?: string;
};

export type PaletteConfig = {
  flat?: FlatPaletteConfig;
  gradient?: GradientPaletteConfig;
  neutral?: NeutralPaletteConfig;

  /** @TODO remove all these when all components are revisited for v5 */
  primary?: string;
  secondary?: string;
  success?: string;
  error?: string;
  warning?: string;
  info?: string;
  light?: string;
  link?: string;
  text?: TextPaletteConfig;
  pale?: PalePaletteConfig;
  white?: string;
  black?: string;
};

export const flatPaletteConfig: Record<typeof flatColors[number], string> = {
  orange: '#FF9F0F',
  red: '#FF176B',
  lightPurple: '#a8b1ff',
  blue: '#175bf5',
  darkBlue: '#4945ee',
  teal: '#1de9b6',
  purple: '#8833ff',
  magenta: '#F814E1',

  /** @TODO remove all these when all components are revisited for v5 */
  greyScale: '#808080',
  darkGrey: '#32324E',
  lightGrey: '#889BBF',
  lightBlue: '#28BDFF',
  green: '#36C152',
  yellow: '#FDD835',
  darkOrange: '#BF360C',
  neutralWhite: '#fbfbfb',
  neutralBlack: '#030303',
};

/** @TODO remove all these when all components are revisited for v5 */
export const palePaletteConfig: Record<typeof paleColors[number], string> = {
  greyScale: '#F9F9F9',
  darkGrey: '#F5F5F6',
  lightGrey: '#F9FAFC',
  red: '#FFF3F6',
  magenta: '#FCF3FD',
  purple: '#F9F5FF',
  lightPurple: '#a8b1ff',
  darkBlue: '#F6F6FE',
  blue: '#F4F8FF',
  lightBlue: '#F4FCFF',
  teal: '#F4FEFB',
  green: '#F5FCF6',
  yellow: '#FFFDF5',
  orange: '#FFF8F2',
};

export const paletteConfig: PaletteConfig = {
  flat: {
    ...flatPaletteConfig,
  },
  neutral: {
    light: '#ffffff',
    dark: '#32354c',
    grey: '#54587F',
    transparent: 'rgba(0,0,0,0)',
  },

  gradient: {
    primary: 'linear-gradient(90deg, #4945EE 0%, #175BF5 100%)',
    secondary: 'linear-gradient(45deg, #a8b1ff 0%, #cad0ff 100%)',
    tertiary: 'linear-gradient(90deg, #1DE9B6 0%, #8EF4DA 100%)',
    upsell: 'linear-gradient(90deg, #F943E7 0%, #FA72ED 100%)',
    inverted: 'linear-gradient(45deg, #212332 0%, #32354C 100%)',
  },

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
