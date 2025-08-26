import { default as sizingFigma } from './constants/sizing';
export type SizingKey = keyof typeof sizingFigma;
export type Sizing = {
    get: (val: SizingKey, fn?: (val: string) => unknown) => string;
};
declare const sizing: Sizing;
export default sizing;
