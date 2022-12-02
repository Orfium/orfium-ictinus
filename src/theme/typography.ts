import { rem } from 'polished';

import fontFamilyFigma from './constants/fontFamily';
import fontSizeFigma from './constants/fontSize';
import fontWeightFigma from './constants/fontWeight';
import letterSpacingFigma from './constants/letterSpacing';
import lineHeightFigma from './constants/lineHeight';
import textCaseFigma from './constants/textCase';
import textDecorationFigma from './constants/textDecoration';
import { getFigmaTokensValue } from './utils';

export type FontSizeKey = keyof typeof fontSizeFigma;
export type FontWeightKey = keyof typeof fontWeightFigma;
export type FontFamilyKey = keyof typeof fontFamilyFigma;
export type LineHeightKey = keyof typeof lineHeightFigma;
export type LetterSpacingKey = keyof typeof letterSpacingFigma;
export type TextCaseKey = keyof typeof textCaseFigma;
export type TextDecorationKey = keyof typeof textDecorationFigma;

export type FontSize = {
  get: (val: FontSizeKey) => string;
  /** @TODO remove this custom font-sizes*/
  '8': string;
  '11': string;
  '13': string;
  '15': string;
};

export type FontWeight = {
  get: (val: FontWeightKey) => number;
};

export type FontFamily = {
  get: (val: FontFamilyKey) => string;
};

export type LineHeight = {
  get: (val: LineHeightKey) => string;
};

export type LetterSpacing = {
  get: (val: LetterSpacingKey) => string;
};

export type TextCase = {
  get: (val: TextCaseKey) => string;
};

export type TextDecoration = {
  get: (val: TextDecorationKey) => string;
};

export type Typography = {
  globalFontSize: number;
  fontSizes: FontSize;
  weights: FontWeight;
  fontFamilies: FontFamily;
  fontFamily: string;
  lineHeights: LineHeight;
  letterSpacings: LetterSpacing;
  textCases: TextCase;
  textDecorations: TextDecoration;
};

const fontSizes: FontSize = {
  get: getFigmaTokensValue<FontSizeKey>(fontSizeFigma, 'pixels') as (val: FontSizeKey) => string,
  /** @TODO remove this custom font-sizes */
  '8': rem('8px'),
  '11': rem('11px'),
  '13': rem('13px'),
  '15': rem('15px'),
};

const weights: FontWeight = {
  get: getFigmaTokensValue<FontWeightKey>(fontWeightFigma, 'number') as (
    val: FontWeightKey
  ) => number,
};

const fontFamilies: FontFamily = {
  get: getFigmaTokensValue<FontFamilyKey>(fontFamilyFigma, 'string') as (
    val: FontFamilyKey
  ) => string,
};

const lineHeights: LineHeight = {
  get: getFigmaTokensValue<LineHeightKey>(lineHeightFigma, 'pixels') as (
    val: LineHeightKey
  ) => string,
};

const letterSpacings: LetterSpacing = {
  get: getFigmaTokensValue<LetterSpacingKey>(letterSpacingFigma, 'string') as (
    val: LetterSpacingKey
  ) => string,
};

const textCases: TextCase = {
  get: getFigmaTokensValue<TextCaseKey>(textCaseFigma, 'string') as (val: TextCaseKey) => string,
};

const textDecorations: TextDecoration = {
  get: getFigmaTokensValue<TextDecorationKey>(textDecorationFigma, 'string') as (
    val: TextDecorationKey
  ) => string,
};

const defaultFontFamily = fontFamilies.get('roboto');

const typography: Typography = {
  globalFontSize: 16,
  fontSizes,
  weights,
  fontFamilies,
  fontFamily: defaultFontFamily,
  lineHeights,
  letterSpacings,
  textCases,
  textDecorations,
};

export default typography;
