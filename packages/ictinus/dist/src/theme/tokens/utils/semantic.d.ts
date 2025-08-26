import { Token, TokensObject } from './types';
/**
 * Used by themes like semantic in order to fetch all the variables defined in the `tokens/<theme_name>/variables`
 * The returned value is usually used as inside .get of each variable like `textColor.get`
 *
 * @param object a variable from the tokens/<theme_name>/variables directory
 * @param path path of the requested token value. e.g: 'systemic.tetiary.dark' for palette object
 * @returns the parsed value of the requested path
 */
export declare const getTokensValue: (object: TokensObject | Token) => (path: string) => string;
