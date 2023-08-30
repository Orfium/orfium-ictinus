import iconFigma from './variables/icon';
import { DotKeys, getTokensValue } from '../utils';

export type SemanticIcon = {
  get: (val: DotKeys<typeof iconFigma>) => string;
};

const icon: SemanticIcon = {
  get: getTokensValue(iconFigma),
};

export default icon;
