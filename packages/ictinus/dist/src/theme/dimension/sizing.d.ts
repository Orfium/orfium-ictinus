import { DotKeys } from '../tokens/utils';
import { default as sizingFigma } from './variables/sizing';
export type DimensionSizingKey = DotKeys<typeof sizingFigma>;
export type DimensionSizing = {
    get: (val: DimensionSizingKey, fn?: (val: string) => unknown) => string;
};
declare const sizing: DimensionSizing;
export default sizing;
