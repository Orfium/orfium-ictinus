import disabledStateFigma from './variables/disabledState';
import { DotKeys, getTokensValue } from '../utils';

export type SemanticDisabledState = {
  get: (val: DotKeys<typeof disabledStateFigma>) => string;
};

const disabledState: SemanticDisabledState = {
  get: getTokensValue(disabledStateFigma),
};

export default disabledState;
