import { default as spacingFigma } from './constants/spacing';
export type SpacingKey = keyof typeof spacingFigma;
export type Spacing = {
    get: (val: SpacingKey, fn?: (val: string) => unknown) => string;
};
declare const spacing: Spacing;
export default spacing;
