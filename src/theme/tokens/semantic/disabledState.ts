import disabledStateFigma from './variables/disabledState';
import { getTokensValue } from '../utils';

export type SemanticDisabledState = {
  get: (val: string) => string;
};

const disabledState: SemanticDisabledState = {
  get: getTokensValue(disabledStateFigma),
};

export default disabledState;
