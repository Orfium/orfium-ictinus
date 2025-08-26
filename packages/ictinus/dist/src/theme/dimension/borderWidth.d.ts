import { DotKeys } from '../tokens/utils';
import { default as borderWidthFigma } from './variables/borderWidth';
export type DimensionBorderWidthKey = DotKeys<typeof borderWidthFigma>;
export type DimensionBorderWidth = {
    get: (val: DimensionBorderWidthKey, fn?: (val: string) => unknown) => string;
};
declare const borderWidth: DimensionBorderWidth;
export default borderWidth;
