import { shade, tint } from 'polished';
import { generatedColorShades, Palette } from './palette';
import { flatPaletteConfigType, PaletteConfig, TextPaletteConfigType } from './palette.config';

const BASE_PERCENTAGE = 0.25;

const EXCLUDED = ['white', 'black'];

export const convertPointsToPixels = (pt: number): number => (96 / 72) * pt;

const reduceColorShades = (arr: string[]) =>
  arr
    .filter((value, index, arr) => arr.indexOf(value) === index)
    .reverse()
    .reduce((acc, _, index) => {
      acc[`${index + 1}00`] = _;

      return acc;
    }, {} as generatedColorShades);

const createShades = (func: (index: number) => string, numOfShades = 4) =>
  new Array(numOfShades).fill(null).reduce((acc, __, index) => {
    acc.push(func(index));

    return acc;
  }, []);

export const colorShadesCreator = (base: string, per: number): generatedColorShades =>
  reduceColorShades([
    ...createShades((index: number) => shade(per * index, base)).reverse(),
    ...createShades((index: number) => tint(per * index, base)),
  ]);

export const iterateObject = <T>(
  obj: T,
  func: (value: string, name: string) => generatedColorShades | string
): Record<string, unknown> =>
  Object.keys(obj).reduce((acc, value) => {
    acc[value] =
      typeof obj[value] !== 'object'
        ? func(obj[value], value)
        : iterateObject<TextPaletteConfigType | flatPaletteConfigType>(obj[value], func);

    return acc;
  }, {});

export const enhancePaletteWithShades = (obj: PaletteConfig): Palette =>
  iterateObject<PaletteConfig>(obj, (value: string, name: string) =>
    EXCLUDED.includes(name) ? value : colorShadesCreator(value, BASE_PERCENTAGE)
  ) as Palette;
