import { shade, tint, rem as polishedRem, parseToRgb as polishedParseToRgb } from 'polished';

import { generatedColorShades, Palette } from './palette';
import { flatPaletteConfigType, PaletteConfig, TextPaletteConfigType } from './palette.config';

const BASE_PERCENTAGE = 10;
const SHADES = 18;

const EXCLUDED = ['white', 'black', 'pale'];

export const convertPointsToPixels = (pt: number): number => (96 / 72) * pt;

export const colorShades = (
  hex: string,
  per: number = BASE_PERCENTAGE,
  shadesCount: number = SHADES / 2
): generatedColorShades => {
  const newArray = (fn: (item: undefined, i: number) => string, length: number) =>
    Array.from({ length }, fn);

  const tints = (weight: number) => newArray((__, i) => tint(((i + 1) * per) / 100, hex), weight);
  const shades = (weight: number) => newArray((__, i) => shade(((i + 1) * per) / 100, hex), weight);
  const all = (weight = shadesCount) => {
    return [...tints(weight).reverse(), hex, ...shades(weight)];
  };

  return all().reduce((acc, _, index) => {
    acc[`${(index + 1) * 50}`] = _;

    return acc;
  }, {} as generatedColorShades);
};

export const colorShadesCreator = (
  base: string,
  per: number = BASE_PERCENTAGE,
  shadesCount: number = SHADES / 2
): generatedColorShades => colorShades(base, per, shadesCount);

export const iterateObject = <T>(
  obj: T,
  func: (value: string, name: string) => generatedColorShades | string
): Record<string, unknown> =>
  Object.keys(obj).reduce((acc, value) => {
    acc[value] =
      typeof obj[value] !== 'object'
        ? func(obj[value], value)
        : EXCLUDED.includes(value)
        ? obj[value]
        : iterateObject<TextPaletteConfigType | flatPaletteConfigType>(obj[value], func);

    return acc;
  }, {});

export const enhancePaletteWithShades = (obj: PaletteConfig): Palette =>
  iterateObject<PaletteConfig>(obj, (value: string, name: string) =>
    EXCLUDED.includes(name) ? value : colorShadesCreator(value, BASE_PERCENTAGE)
  ) as Palette;

export const rem = (px: number | string): string => polishedRem(px, 16);
