import { default as boxShadowFigma } from './variables/boxShadow';
export type SemanticBoxShadowKey = keyof typeof boxShadowFigma;
export type SemanticBoxShadow = {
    get: (val: SemanticBoxShadowKey, fn?: (val: string) => unknown) => string;
};
declare const boxShadow: SemanticBoxShadow;
export default boxShadow;
