import typographyFigma from './variables/typography';
import { DotKeys, parseCompositionToken } from '../utils';

export type SemanticTypographyKeys = keyof typeof typographyFigma.headline01.value;

export type SemanticTypography = {
  get: (val: DotKeys<typeof typographyFigma>) => Record<SemanticTypographyKeys, string>;
};

const typography: SemanticTypography = {
  get: parseCompositionToken(typographyFigma),
};

export default typography;
