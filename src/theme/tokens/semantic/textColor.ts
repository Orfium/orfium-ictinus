import textColorFigma from './variables/textColor';
import { DotKeys, getTokensValue } from '../utils';

export type TextColorKey = DotKeys<typeof textColorFigma>;

export type SemanticTextColor = {
  get: (val: TextColorKey) => string;
};

const textColor: SemanticTextColor = {
  get: getTokensValue(textColorFigma),
};

export default textColor;
