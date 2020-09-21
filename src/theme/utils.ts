import { shade, tint } from 'polished';
import {
  flatPaletteConfigType,
  generatedColorShades,
  Palette,
  PaletteConfig,
  TextPaletteConfigType,
} from './palette';

const BASE_PERCENTAGE = 0.25;

const SPECIAL_GRAY_PERCENTAGE = 0.08;

const SPECIAL_GRAY = ['lightGray', 'darkGray'];

export const convertPointsToPixels = (pt: number) => (96 / 72) * pt;

const reduceColorShades = (arr: string[]) =>
  arr
    .filter((value, index, arr) => arr.indexOf(value) === index)
    .reverse()
    .reduce((acc, _, index) => {
      acc[`${index + 1}00`] = _;

      return acc;
    }, {} as generatedColorShades);

const createShades = (func: (index: number) => string, numOfShades = 4) =>
  new Array(numOfShades).fill(null).reduce((acc, _, index) => {
    acc.push(func(index));

    return acc;
  }, []);

export const colorShadesCreator = (base: string, per: number) =>
  reduceColorShades([
    ...createShades((index: number) => shade(per * index, base)).reverse(),
    ...createShades((index: number) => tint(per * index, base)),
  ]);

export const grayShadesCreator = (base: string, name: string, per: number) => {
  return reduceColorShades(
    name === SPECIAL_GRAY[0]
      ? [...createShades((index: number) => tint(per * index, base), 14).slice(7, 13), '#fff']
      : [...createShades((index: number) => tint(per * index, base), 14).slice(0, 7)]
  );
};

export const iterateObject = <T>(
  obj: T,
  func: (value: string, name: string) => generatedColorShades
) =>
  Object.keys(obj).reduce((acc, value) => {
    acc[value] =
      typeof obj[value] !== 'object'
        ? func(obj[value], value)
        : iterateObject<TextPaletteConfigType | flatPaletteConfigType>(obj[value], func);

    return acc;
  }, {});

export const enhancePaletteWithShades = (obj: PaletteConfig): Palette =>
  iterateObject<PaletteConfig>(obj, (value: string, name: string) =>
    SPECIAL_GRAY.includes(name)
      ? grayShadesCreator(value, name, SPECIAL_GRAY_PERCENTAGE)
      : colorShadesCreator(value, BASE_PERCENTAGE)
  ) as Palette;
