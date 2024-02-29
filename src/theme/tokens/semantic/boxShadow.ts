import boxShadowFigma from './variables/boxShadow';
import { FigmaTokenValueType, getFigmaTokensValue } from '../../utils';

export type SemanticBoxShadowKey = keyof typeof boxShadowFigma;

export type SemanticBoxShadow = {
  get: (val: SemanticBoxShadowKey, fn?: (val: string) => unknown) => string;
};

const boxShadow: SemanticBoxShadow = {
  get: getFigmaTokensValue<SemanticBoxShadowKey>(boxShadowFigma, FigmaTokenValueType.BoxShadow),
};

export default boxShadow;
