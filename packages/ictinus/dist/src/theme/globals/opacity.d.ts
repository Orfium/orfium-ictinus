import { default as opacityFigma } from './constants/opacity';
export type OpacityKey = keyof typeof opacityFigma;
export type Opacity = {
    get: (val: OpacityKey, fn?: (val: string) => unknown) => string;
};
declare const opacity: Opacity;
export default opacity;
