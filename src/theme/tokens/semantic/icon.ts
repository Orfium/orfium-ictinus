import iconFigma from './variables/icon';
import type { DotKeys} from '../utils';
import { getTokensValue } from '../utils';

export type SemanticIcon = {
  get: (val: DotKeys<typeof iconFigma>) => string;
};

const icon: SemanticIcon = {
  get: getTokensValue(iconFigma),
};

export default icon;
