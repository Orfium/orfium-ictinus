import { default as fontFamilyFigma } from './constants/fontFamily';
import { default as fontSizeFigma } from './constants/fontSize';
import { default as fontWeightFigma } from './constants/fontWeight';
import { default as letterSpacingFigma } from './constants/letterSpacing';
import { default as lineHeightFigma } from './constants/lineHeight';
import { default as textCaseFigma } from './constants/textCase';
import { default as textDecorationFigma } from './constants/textDecoration';
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
declare const typography: Typography;
export default typography;
