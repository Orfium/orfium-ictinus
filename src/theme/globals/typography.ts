import { rem } from 'polished';

import fontFamilyFigma from './constants/fontFamily';
import fontSizeFigma from './constants/fontSize';
import fontWeightFigma from './constants/fontWeight';
import letterSpacingFigma from './constants/letterSpacing';
import lineHeightFigma from './constants/lineHeight';
import textCaseFigma from './constants/textCase';
import textDecorationFigma from './constants/textDecoration';
import { FigmaTokenValueType, getFigmaTokensValue } from '../utils';

export type FontSizeKey = keyof typeof fontSizeFigma;
export type FontWeightKey = keyof typeof fontWeightFigma;
export type FontFamilyKey = keyof typeof fontFamilyFigma;
export type LineHeightKey = keyof typeof lineHeightFigma;
export type LetterSpacingKey = keyof typeof letterSpacingFigma;
export type TextCaseKey = keyof typeof textCaseFigma;
export type TextDecorationKey = keyof typeof textDecorationFigma;

export type FontSize = {
  get: (val: FontSizeKey, fn?: (val: string) => unknown) => string;
  /** @TODO remove this custom font-sizes*/
  '8': string;
  '11': string;
  '13': string;
  '15': string;
};

export type FontWeight = {
  get: (val: FontWeightKey, fn?: (val: string) => unknown) => number;
};

export type FontFamily = {
  get: (val: FontFamilyKey, fn?: (val: string) => unknown) => string;
};

export type LineHeight = {
  get: (val: LineHeightKey, fn?: (val: string) => unknown) => string;
};

export type LetterSpacing = {
  get: (val: LetterSpacingKey, fn?: (val: string) => unknown) => string;
};

export type TextCase = {
  get: (val: TextCaseKey, fn?: (val: string) => unknown) => string;
};

export type TextDecoration = {
  get: (val: TextDecorationKey, fn?: (val: string) => unknown) => string;
};

export type Typography = {
  globalFontSize: number;
  fontSize: FontSize;
  fontWeight: FontWeight;
  fontFamily: FontFamily;
  defaultFontFamily: string;
  lineHeight: LineHeight;
  letterSpacing: LetterSpacing;
  textCase: TextCase;
  textDecoration: TextDecoration;
};

const fontSize: FontSize = {
  get: getFigmaTokensValue<FontSizeKey>(fontSizeFigma, FigmaTokenValueType.Pixels),
  /** @TODO remove this custom font-sizes */
  '8': rem('8px'),
  '11': rem('11px'),
  '13': rem('13px'),
  '15': rem('15px'),
};

const fontWeight: FontWeight = {
  get: getFigmaTokensValue<FontWeightKey>(fontWeightFigma, FigmaTokenValueType.Number),
};

const fontFamily: FontFamily = {
  get: getFigmaTokensValue<FontFamilyKey>(fontFamilyFigma, FigmaTokenValueType.String),
};

const lineHeight: LineHeight = {
  get: getFigmaTokensValue<LineHeightKey>(lineHeightFigma, FigmaTokenValueType.Pixels),
};

const letterSpacing: LetterSpacing = {
  get: getFigmaTokensValue<LetterSpacingKey>(letterSpacingFigma, FigmaTokenValueType.String),
};

const textCase: TextCase = {
  get: getFigmaTokensValue<TextCaseKey>(textCaseFigma, FigmaTokenValueType.String),
};

const textDecoration: TextDecoration = {
  get: getFigmaTokensValue<TextDecorationKey>(textDecorationFigma, FigmaTokenValueType.String),
};

const defaultFontFamily = fontFamily.get('roboto');
const typography: Typography = {
  globalFontSize: 16, // @deprecated Use fontSize.get instead
  fontSize,
  fontWeight,
  fontFamily,
  defaultFontFamily,
  lineHeight,
  letterSpacing,
  textCase,
  textDecoration,
};

export default typography;
