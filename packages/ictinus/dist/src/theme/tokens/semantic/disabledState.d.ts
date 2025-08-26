import { default as disabledStateFigma } from './variables/disabledState';
import { DotKeys } from '../utils';
export type SemanticDisabledState = {
    get: (val: DotKeys<typeof disabledStateFigma>) => string;
};
declare const disabledState: SemanticDisabledState;
export default disabledState;
