import textColorFigma from './variables/textColor';
import { getTokensValue } from '../utils';

export type SemanticTextColor = {
  get: (val: string) => string;
};

const textColor: SemanticTextColor = {
  get: getTokensValue(textColorFigma),
};

export default textColor;
