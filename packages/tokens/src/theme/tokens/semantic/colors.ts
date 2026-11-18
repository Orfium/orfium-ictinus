import colorsFigma from './variables/colors';
import { getTokensValue, type DotKeys } from '../utils';

export type SemanticColorsKey = DotKeys<typeof colorsFigma>;

export type SemanticColors = {
  get: (val: SemanticColorsKey) => string;
};

const colors: SemanticColors = {
  get: getTokensValue(colorsFigma),
};

export default colors;
