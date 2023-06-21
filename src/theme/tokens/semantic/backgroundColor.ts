import backgroundColorFigma from './variables/backgroundColor';
import { DotKeys, getTokensValue } from '../utils';

export type BackgroundColorKey = DotKeys<typeof backgroundColorFigma>;

export type SemanticBackgroundColor = {
  get: (val: BackgroundColorKey) => string;
};

const backgroundColor: SemanticBackgroundColor = {
  get: getTokensValue(backgroundColorFigma),
};

export default backgroundColor;
