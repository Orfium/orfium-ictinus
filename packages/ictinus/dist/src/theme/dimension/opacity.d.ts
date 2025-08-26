import { DotKeys } from '../tokens/utils';
import { default as opacityFigma } from './variables/opacity';
export type DimensionOpacityKey = DotKeys<typeof opacityFigma>;
export type DimensionOpacity = {
    get: (val: DimensionOpacityKey, fn?: (val: string) => unknown) => string;
};
declare const opacity: DimensionOpacity;
export default opacity;
