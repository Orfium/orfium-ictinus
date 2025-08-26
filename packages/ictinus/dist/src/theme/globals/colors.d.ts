import { default as colorsFigma } from './constants/colors';
import { DotKeys } from '../tokens/utils';
export type ColorsKey = DotKeys<typeof colorsFigma>;
export type Colors = {
    get: (val: ColorsKey, fn?: (val: string) => unknown) => string;
};
declare const colors: Colors;
export default colors;
