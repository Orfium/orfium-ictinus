import { Theme } from 'theme';
import { Token, TokensObject } from './types';
/**
 * Must be used on react components in order to fetch their component tokens
 *
 * @param object a variable from the tokens/components/variables directory
 * @param theme
 * @param path path of the requested token value. e.g: 'color.red.background' for avatar
 * @param fn callback to normalize value
 * @returns the parsed value of the requested path
 */
export declare const getComponentTokens: <T extends string>(object: TokensObject | Token, theme: Theme) => (path: T, fn?: (val: string) => unknown) => any;
