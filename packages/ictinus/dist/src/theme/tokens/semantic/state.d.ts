import { default as stateFigma } from './variables/state';
import { DotKeys } from '../utils';
export type SemanticState = {
    get: (val: DotKeys<typeof stateFigma>) => string;
};
declare const state: SemanticState;
export default state;
