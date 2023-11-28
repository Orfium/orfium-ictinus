import typographyFigma from './variables/typography';
import type { DotKeys} from '../utils';
import { parseCompositionToken } from '../utils';

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

export type TypographyObject = Record<TypographyKeys, string>;

export type SemanticTypography = {
  get: (val: SemanticTypographyKey) => TypographyObject;
};

const typography: SemanticTypography = {
  get: parseCompositionToken(typographyFigma),
};

export default typography;
