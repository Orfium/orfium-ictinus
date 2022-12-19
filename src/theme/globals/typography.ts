import { rem } from 'polished';

import { FigmaTokenValueType, getFigmaTokensValue } from '../utils';
import fontFamilyFigma from './constants/fontFamily';
import fontSizeFigma from './constants/fontSize';
import fontWeightFigma from './constants/fontWeight';
import letterSpacingFigma from './constants/letterSpacing';
import lineHeightFigma from './constants/lineHeight';
import textCaseFigma from './constants/textCase';
import textDecorationFigma from './constants/textDecoration';

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
  get: getFigmaTokensValue<FontSizeKey>(fontSizeFigma, FigmaTokenValueType.Pixels),
  /** @TODO remove this custom font-sizes */
  '8': rem('8px'),
  '11': rem('11px'),
  '13': rem('13px'),
  '15': rem('15px'),
};

const weights: FontWeight = {
  get: getFigmaTokensValue<FontWeightKey>(fontWeightFigma, FigmaTokenValueType.Number),
};

const fontFamilies: FontFamily = {
  get: getFigmaTokensValue<FontFamilyKey>(fontFamilyFigma, FigmaTokenValueType.String),
};

const lineHeights: LineHeight = {
  get: getFigmaTokensValue<LineHeightKey>(lineHeightFigma, FigmaTokenValueType.Pixels),
};

const letterSpacings: LetterSpacing = {
  get: getFigmaTokensValue<LetterSpacingKey>(letterSpacingFigma, FigmaTokenValueType.String),
};

const textCases: TextCase = {
  get: getFigmaTokensValue<TextCaseKey>(textCaseFigma, FigmaTokenValueType.String),
};

const textDecorations: TextDecoration = {
  get: getFigmaTokensValue<TextDecorationKey>(textDecorationFigma, FigmaTokenValueType.String),
};

const defaultFontFamily = fontFamilies.get('roboto');

const typography: Typography = {
  globalFontSize: 16, // @deprecated Use fontSize.get instead
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
