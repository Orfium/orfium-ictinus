import disabledStateFigma from './variables/disabledState';
import { getTokensValue, type DotKeys } from '../utils';

export type SemanticDisabledState = {
  get: (val: DotKeys<typeof disabledStateFigma>) => string;
};

const disabledState: SemanticDisabledState = {
  get: getTokensValue(disabledStateFigma),
};

export default disabledState;
