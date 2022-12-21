import { getTokensValue } from '../utils';
import textColorFigma from './variables/textColor';

export type SemanticTextColor = {
  get: (val: string) => string;
};

const textColor: SemanticTextColor = {
  get: getTokensValue(textColorFigma),
};

export default textColor;
