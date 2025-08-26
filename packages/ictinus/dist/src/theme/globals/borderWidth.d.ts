import { default as borderWidthFigma } from './constants/borderWidth';
export type BorderWidthKey = keyof typeof borderWidthFigma;
export type BorderWidth = {
    get: (val: BorderWidthKey, fn?: (val: string) => unknown) => string;
};
declare const borderWidth: BorderWidth;
export default borderWidth;
