import { get } from 'lodash-es';
import { shade, tint, rem as polishedRem } from 'polished';
import { PropsValidationError } from 'utils/errors';

import type { GeneratedColorShades, Palette } from './palette';
import type { FlatPaletteConfig, PaletteConfig, TextPaletteConfig } from './palette.config';

const BASE_PERCENTAGE = 10;
const SHADES = 18;

const EXCLUDED = ['white', 'black', 'pale', 'neutral', 'gradient'];

export const convertPointsToPixels = (pt: number): number => (96 / 72) * pt;

export const convertRemToPixels = (rem) => {
  return (
    rem.toString().replace('rem', '') *
    parseFloat(getComputedStyle(document.documentElement).fontSize)
  );
};

export const colorShadesCreator = (
  base: string,
  per: number = BASE_PERCENTAGE,
  shadesCount: number = SHADES / 2
): GeneratedColorShades => {
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
  }, {} as GeneratedColorShades);
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
// @TODO fix this type in the future when v5 settle
// eslint-disable-next-line @typescript-eslint/ban-types
export const iterateObject = <T extends object>(
  obj: T,
  func: (value: string, name: string) => GeneratedColorShades | string
): Record<string, unknown> =>
  Object.keys(obj).reduce((acc, value) => {
    if (typeof obj[value] !== 'object') {
      acc[value] = func(obj[value], value);
    } else if (EXCLUDED.includes(value)) {
      acc[value] = obj[value];
    } else {
      acc[value] = iterateObject<TextPaletteConfig | FlatPaletteConfig>(obj[value], func);
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
  BoxShadow = 'boxShadow',
}

/** The type of the object inside the theme/constants folder  */
export type FigmaTokensObject<T extends string | symbol> = Record<
  T,
  Record<string, string | Record<string, string>>
>;

const addPxSuffix = (val: string) => (val.endsWith('px') ? val : `${val}px`);

const getFigmaTokensBoxShadowValue = <T extends string | symbol>(
  figmaTokensObject: FigmaTokensObject<T>,
  val: T
) => {
  const x = rem(addPxSuffix(get(figmaTokensObject, [val, 'value', 'x'], '0')));
  const y = rem(addPxSuffix(get(figmaTokensObject, [val, 'value', 'y'], '0')));
  const blur = rem(addPxSuffix(get(figmaTokensObject, [val, 'value', 'blur'], '0')));
  const spread = rem(addPxSuffix(get(figmaTokensObject, [val, 'value', 'spread'], '0')));
  const color = get(figmaTokensObject, [val, 'value', 'color'], 'transparent');

  return `${x} ${y} ${blur} ${spread} ${color}`;
};

/**
 * @param figmaTokensObject The parsed objects from Figma Tokens in the src/theme/constants/ dir
 * @param type 'pixels' refers to all the string values that need to be converted to rem
 *             'string' refers to all the string values that need no conversion (e.g. opacity, font-family etc)
 *             'number' refers to all the string values that need to be converted to numbers (e.g. font-weight)
 */
export const getFigmaTokensValue: {
  <T extends string | symbol>(
    figmaTokensObject: FigmaTokensObject<T>,
    type: FigmaTokenValueType.Number
  ): (val: T) => number;
  <T extends string | symbol>(
    figmaTokensObject: FigmaTokensObject<T>,
    type: FigmaTokenValueType.String
  ): (val: T) => string;
  <T extends string | symbol>(
    figmaTokensObject: FigmaTokensObject<T>,
    type: FigmaTokenValueType.Pixels
  ): (val: T) => string;
  <T extends string | symbol>(
    figmaTokensObject: FigmaTokensObject<T>,
    type: FigmaTokenValueType.BoxShadow
  ): (val: T) => string;
} =
  <T extends string | symbol>(figmaTokensObject: FigmaTokensObject<T>, type: FigmaTokenValueType) =>
  (val: T, fn?: (val: string) => unknown): any => {
    if (fn) {
      return fn(get(figmaTokensObject, [val, 'value'], '0') as string);
    }
    switch (type) {
      case FigmaTokenValueType.Pixels:
        return rem(parseFloat(get(figmaTokensObject, [val, 'value'], '0') as string));
      case FigmaTokenValueType.String:
        return get(figmaTokensObject, [val, 'value'], '0') as string;
      case FigmaTokenValueType.Number:
        return Number(get(figmaTokensObject, [val, 'value'], '0'));
      case FigmaTokenValueType.BoxShadow:
        return getFigmaTokensBoxShadowValue(figmaTokensObject, val);
    }
  };
