import backgroundColorFigma from './variables/backgroundColor';
import { DotKeys, getTokensValue } from '../utils';

export type SemanticBackgroundColor = {
  get: (val: DotKeys<typeof backgroundColorFigma>) => string;
};

const backgroundColor: SemanticBackgroundColor = {
  get: getTokensValue(backgroundColorFigma),
};

export default backgroundColor;
