import { getTokensValue } from '../utils';
import borderColorFigma from './variables/borderColor';

export type SemanticBorderColor = {
  get: (val: string) => string;
};

const borderColor: SemanticBorderColor = {
  get: getTokensValue(borderColorFigma),
};

export default borderColor;
