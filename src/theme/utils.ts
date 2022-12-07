import { get } from 'lodash';
import { shade, tint, rem as polishedRem } from 'polished';

import { PropsValidationError } from '../utils/errors';
import { generatedColorShades, Palette } from './palette';
import { flatPaletteConfigType, PaletteConfig, TextPaletteConfigType } from './palette.config';

const BASE_PERCENTAGE = 10;
const SHADES = 18;

const EXCLUDED = ['white', 'black', 'pale'];

export const convertPointsToPixels = (pt: number): number => (96 / 72) * pt;

export const colorShadesCreator = (
  base: string,
  per: number = BASE_PERCENTAGE,
  shadesCount: number = SHADES / 2
): generatedColorShades => {
  const newArray = (fn: (item: undefined, i: number) => string, length: number) =>
    Array.from({ length }, fn);

  const tints = (weight: number) => newArray((__, i) => tint(((i + 1) * per) / 100, base), weight);
  const shades = (weight: number) =>
    newArray((__, i) => shade(((i + 1) * per) / 100, base), weight);
  const all = (weight = shadesCount) => {
    return [...tints(weight).reverse(), base, ...shades(weight)];
  };

  return all().reduce((acc, _, index) => {
    acc[`${(index + 1) * 50}`] = _;

    return acc;
  }, {} as generatedColorShades);
};

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
export const iterateObject = <T>(
  obj: T,
  func: (value: string, name: string) => generatedColorShades | string
): Record<string, unknown> =>
  Object.keys(obj).reduce((acc, value) => {
    if (typeof obj[value] !== 'object') {
      acc[value] = func(obj[value], value);
    } else if (EXCLUDED.includes(value)) {
      acc[value] = obj[value];
    } else {
      acc[value] = iterateObject<TextPaletteConfigType | flatPaletteConfigType>(obj[value], func);
    }

    return acc;
  }, {});

export const enhancePaletteWithShades = (obj: PaletteConfig): Palette =>
  iterateObject<PaletteConfig>(obj, (value: string, name: string) =>
    EXCLUDED.includes(name) ? value : colorShadesCreator(value, BASE_PERCENTAGE)
  ) as Palette;

export const rem = (px: number | string): string => polishedRem(px, 16);

export const getColorErrors = [
  {
    condition: (endColor: string): boolean => !endColor,
    error: new PropsValidationError('No color found with that name'),
  },
];

export type GetFigmaTokensValue<T extends string | number | symbol> = {
  (figmaTokensObject: Record<T, Record<string, string>>, type: 'pixels'): (val: T) => string;
  (figmaTokensObject: Record<T, Record<string, string>>, type: 'string'): (val: T) => string;
  (figmaTokensObject: Record<T, Record<string, string>>, type: 'number'): (val: T) => number;
};

export enum FigmaTokenValueType {
  Pixels = 'pixels',
  String = 'string',
  Number = 'number',
}
/**
 * @param figmaTokensObject The parsed objects from Figma Tokens in the src/theme/constants/ dir
 * @param type 'pixels' refers to all the string values that need to be converted to rem
 *             'string' refers to all the string values that need no conversion (e.g. opacity, font-family etc)
 *             'number' refers to all the string values that need to be converted to numbers (e.g. font-weight)
 */
export const getFigmaTokensValue: {
  <T extends string | symbol>(
    figmaTokensObject: Record<T, Record<string, string>>,
    type: FigmaTokenValueType.Number
  ): (val: T) => number;
  <T extends string | symbol>(
    figmaTokensObject: Record<T, Record<string, string>>,
    type: FigmaTokenValueType.String
  ): (val: T) => string;
  <T extends string | symbol>(
    figmaTokensObject: Record<T, Record<string, string>>,
    type: FigmaTokenValueType.Pixels
  ): (val: T) => string;
} =
  <T extends string | symbol>(
    figmaTokensObject: Record<T, Record<string, string>>,
    type: FigmaTokenValueType
  ) =>
  (val: T): any => {
    switch (type) {
      case FigmaTokenValueType.Pixels:
        return rem(Number(get(figmaTokensObject, [val, 'value'], '0'))) as string;
        break;
      case FigmaTokenValueType.String:
        return get(figmaTokensObject, [val, 'value'], '0') as string;
        break;
      case FigmaTokenValueType.Number:
        return Number(get(figmaTokensObject, [val, 'value'], '0')) as number;
        break;
    }
  };
