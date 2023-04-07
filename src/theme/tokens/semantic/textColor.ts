import textColorFigma from './variables/textColor';
import { DotKeys, getTokensValue } from '../utils';

export type SemanticTextColor = {
  get: (val: DotKeys<typeof textColorFigma>) => string;
};

const textColor: SemanticTextColor = {
  get: getTokensValue(textColorFigma),
};

export default textColor;
