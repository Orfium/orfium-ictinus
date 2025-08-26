import { default as borderRadiusFigma } from './constants/borderRadius';
export type BorderRadiusKey = keyof typeof borderRadiusFigma;
export type BorderRadius = {
    get: (val: BorderRadiusKey, fn?: (val: string) => unknown) => string;
};
declare const borderRadius: BorderRadius;
export default borderRadius;
