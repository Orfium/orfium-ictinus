import { getTokensValue } from '../utils';
import disabledStateFigma from './variables/disabledState';

export type SemanticDisabledState = {
  get: (val: string) => string;
};

const disabledState: SemanticDisabledState = {
  get: getTokensValue(disabledStateFigma),
};

export default disabledState;
