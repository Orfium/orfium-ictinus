import { DotKeys } from '../tokens/utils';
import { default as borderRadiusFigma } from './variables/borderRadius';
export type DimensionBorderRadiusKey = DotKeys<typeof borderRadiusFigma>;
export type DimensionBorderRadius = {
    get: (val: DimensionBorderRadiusKey, fn?: (val: string) => unknown) => string;
};
declare const borderRadius: DimensionBorderRadius;
export default borderRadius;
