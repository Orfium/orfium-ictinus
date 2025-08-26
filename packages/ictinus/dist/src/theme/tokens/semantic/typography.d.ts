import { default as typographyFigma } from './variables/typography';
import { DotKeys } from '../utils';
export type TypographyKeys = 'fontSize' | 'fontWeight' | 'fontFamily' | 'lineHeight' | 'letterSpacing' | 'textCase' | 'textDecoration';
export type SemanticTypographyKey = DotKeys<typeof typographyFigma>;
export type FontSpacing = keyof typeof typographyFigma;
export type TypographyObject = Record<TypographyKeys, string>;
export type SemanticTypography = {
    get: (val: SemanticTypographyKey) => TypographyObject;
};
declare const typography: SemanticTypography;
export default typography;
