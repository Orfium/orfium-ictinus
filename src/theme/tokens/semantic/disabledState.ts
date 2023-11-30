import disabledStateFigma from './variables/disabledState';
import type { DotKeys} from '../utils';
import { getTokensValue } from '../utils';

export type SemanticDisabledState = {
  get: (val: DotKeys<typeof disabledStateFigma>) => string;
};

const disabledState: SemanticDisabledState = {
  get: getTokensValue(disabledStateFigma),
};

export default disabledState;
