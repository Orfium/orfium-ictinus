import { DotKeys } from '../tokens/utils';
import { default as stateFigma } from './variables/state';
export type DimensionStateKey = DotKeys<typeof stateFigma>;
export type DimensionState = {
    get: (val: DimensionStateKey, fn?: (val: string) => unknown) => string;
};
declare const state: DimensionState;
export default state;
