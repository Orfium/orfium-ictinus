import typographyFigma from './variables/typography';
import { DotKeys, parseCompositionToken } from '../utils';

export type TypographyKeys =
  | 'fontSize'
  | 'fontWeight'
  | 'fontFamily'
  | 'lineHeight'
  | 'letterSpacing'
  | 'textCase'
  | 'textDecoration';

export type SemanticTypographyKey = DotKeys<typeof typographyFigma>;

export type FontSpacing = keyof typeof typographyFigma;

export type SemanticTypography = {
  get: (val: SemanticTypographyKey) => Record<TypographyKeys, string>;
};

const typography: SemanticTypography = {
  get: parseCompositionToken(typographyFigma),
};

export default typography;
