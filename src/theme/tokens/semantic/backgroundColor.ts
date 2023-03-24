import backgroundColorFigma from './variables/backgroundColor';
import { getTokensValue } from '../utils';

export type SemanticBackgroundColor = {
  get: (val: string) => string;
};

const backgroundColor: SemanticBackgroundColor = {
  get: getTokensValue(backgroundColorFigma),
};

export default backgroundColor;
