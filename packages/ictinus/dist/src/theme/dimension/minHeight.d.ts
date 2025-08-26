import { DotKeys } from '../tokens/utils';
import { default as minHeightFigma } from './variables/minHeight';
export type DimensionMinHeightKey = DotKeys<typeof minHeightFigma>;
export type DimensionMinHeight = {
    get: (val: DimensionMinHeightKey, fn?: (val: string) => unknown) => string;
};
declare const minHeight: DimensionMinHeight;
export default minHeight;
