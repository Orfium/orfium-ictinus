import { PropsValidationError } from '../utils/errors';
import { GeneratedColorShades, Palette } from './palette';
import { PaletteConfig } from './palette.config';
export declare const convertPointsToPixels: (pt: number) => number;
export declare const convertRemToPixels: (rem: any) => number;
export declare const colorShadesCreator: (base: string, per?: number, shadesCount?: number) => GeneratedColorShades;
/**
 * Recursive function that iterates over the theme.
 * If, upon iteration it finds an object then it goes one level depper
 * if the value exists in the exclusion array, it returns the value as is (useful for white and black colors),
 * otherwise,if it finds a non object value ,it runs the callback it was passed as a prop,
 *
 *
 * @param obj {Object}  Object The collection to iterate over.
 * @param func {Function} callback to create colorShades.
 * @returns {Record<string, unknown>>} Each level will have generatedColorShades and in whole it will return
 * a complete palette.
 */
export declare const iterateObject: <T extends object>(obj: T, func: (value: string, name: string) => GeneratedColorShades | string) => Record<string, unknown>;
export declare const enhancePaletteWithShades: (obj: PaletteConfig) => Palette;
export declare const rem: (px: number | string) => string;
export declare const getColorErrors: {
    condition: (endColor: string) => boolean;
    error: PropsValidationError;
}[];
export type GetFigmaTokensValue<T extends string | number | symbol> = {
    (figmaTokensObject: Record<T, Record<string, string>>, type: 'pixels'): (val: T) => string;
    (figmaTokensObject: Record<T, Record<string, string>>, type: 'string'): (val: T) => string;
    (figmaTokensObject: Record<T, Record<string, string>>, type: 'number'): (val: T) => number;
};
export declare enum FigmaTokenValueType {
    Pixels = "pixels",
    String = "string",
    Number = "number",
    BoxShadow = "boxShadow"
}
/** The type of the object inside the theme/constants folder  */
export type FigmaTokensObject<T extends string | symbol> = Record<T, Record<string, string | Record<string, string>>>;
/**
 * @param figmaTokensObject The parsed objects from Figma Tokens in the src/theme/constants/ dir
 * @param type 'pixels' refers to all the string values that need to be converted to rem
 *             'string' refers to all the string values that need no conversion (e.g. opacity, font-family etc)
 *             'number' refers to all the string values that need to be converted to numbers (e.g. font-weight)
 */
export declare const getFigmaTokensValue: {
    <T extends string | symbol>(figmaTokensObject: FigmaTokensObject<T>, type: FigmaTokenValueType.Number): (val: T) => number;
    <T extends string | symbol>(figmaTokensObject: FigmaTokensObject<T>, type: FigmaTokenValueType.String): (val: T) => string;
    <T extends string | symbol>(figmaTokensObject: FigmaTokensObject<T>, type: FigmaTokenValueType.Pixels): (val: T) => string;
    <T extends string | symbol>(figmaTokensObject: FigmaTokensObject<T>, type: FigmaTokenValueType.BoxShadow): (val: T) => string;
};
