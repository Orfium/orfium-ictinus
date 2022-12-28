import { getTokensValue } from '../utils';
import backgroundColorFigma from './variables/backgroundColor';

export type SemanticBackgroundColor = {
  get: (val: string) => string;
};

const backgroundColor: SemanticBackgroundColor = {
  get: getTokensValue(backgroundColorFigma),
};

export default backgroundColor;
