import boxShadowFigma from './variables/boxShadow';
import { FigmaTokenValueType, getFigmaTokensValue } from '../../utils';

export type SemanticBoxShadowsKey = keyof typeof boxShadowFigma;

export type SemanticBoxShadow = {
  get: (val: SemanticBoxShadowsKey, fn?: (val: string) => unknown) => string;
};

const boxShadow: SemanticBoxShadow = {
  get: getFigmaTokensValue<SemanticBoxShadowsKey>(boxShadowFigma, FigmaTokenValueType.BoxShadow),
};

export default boxShadow;
