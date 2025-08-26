import { Theme } from '../../types';
import { Token, TokensObject } from './types';
export declare const parseToken: (token: Token) => string;
/**
 *
 * @param object a variable from the tokens/<theme_name>/variables directory
 * @param path the object path to the composition
 * @returns and object with:
 *          [key]: the key of the composition
 *          [value]: the value of the composition converted to css value
 */
export declare const parseCompositionToken: (object: TokensObject | Token) => (path: string) => any;
/**
 * Parses component/token values, who point to GLOBAL or SEMANTIC(theme) tokens.
 *
 * @param path value of the comp-tier token, e.g.: {sem.palette.accents.red.base} of avatar comp
 * @param fn callback to normalize values
 * @returns the parsed value of the requested path
 */
export declare const parseComponentToken: (path: string, fn?: (val: string) => unknown) => (theme: Theme) => any;
