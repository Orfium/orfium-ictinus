import borderColorFigma from './variables/borderColor';
import { DotKeys, getTokensValue } from '../utils';

export type SemanticBorderColor = {
  get: (val: DotKeys<typeof borderColorFigma>) => string;
};

const borderColor: SemanticBorderColor = {
  get: getTokensValue(borderColorFigma),
};

export default borderColor;
