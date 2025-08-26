import { DotKeys } from '../tokens/utils';
import { default as spacingFigma } from './variables/spacing';
export type DimensionSpacingKey = DotKeys<typeof spacingFigma>;
export type DimensionSpacing = {
    get: (val: DimensionSpacingKey, fn?: (val: string) => unknown) => string;
};
declare const spacing: DimensionSpacing;
export default spacing;
