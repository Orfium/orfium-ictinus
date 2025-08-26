import { default as colorsFigma } from './variables/colors';
import { DotKeys } from '../utils';
export type SemanticColorsKey = DotKeys<typeof colorsFigma>;
export type SemanticColors = {
    get: (val: SemanticColorsKey) => string;
};
declare const colors: SemanticColors;
export default colors;
