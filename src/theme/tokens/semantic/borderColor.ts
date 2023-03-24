import borderColorFigma from './variables/borderColor';
import { getTokensValue } from '../utils';

export type SemanticBorderColor = {
  get: (val: string) => string;
};

const borderColor: SemanticBorderColor = {
  get: getTokensValue(borderColorFigma),
};

export default borderColor;
