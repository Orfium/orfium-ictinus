import { shade, tint } from 'polished';
import { Palette, PaletteConfig } from './palette';

const BASE_PERCENTAGE = 0.25;

const SPECIAL_GRAY_PERCENTAGE = 0.8;

const SPECIAL_GRAY = ['lightGray', 'darkGray'];

export const convertPointsToPixels = (pt: number) => (96 / 72) * pt;

export const colorShadesCreator = (base: string, per: number) => {
  const darker = new Array(4)
    .fill(null)
    .reduce((acc, _, index) => {
      acc.push(shade(per * index, base));

      return acc;
    }, [])
    .reverse();

  const lighter = new Array(4).fill(null).reduce((acc, _, index) => {
    acc.push(tint(per * index, base));

    return acc;
  }, []);

  return [...darker, ...lighter]
    .filter((value, index, arr) => arr.indexOf(value) === index)
    .reverse()
    .reduce((acc, _, index) => {
      acc[`${index + 1}00`] = _;

      return acc;
    }, {});
};

export const iterateObject = (obj: any, func: (obj: any, value: any) => any) =>
  Object.keys(obj).reduce((acc, value) => {
    acc[value] =
      typeof obj[value] !== 'object' ? func(obj, value) : iterateObject(obj[value], func);

    return acc;
  }, {});

export const enhancePaletteWithShades = (obj: PaletteConfig): Palette =>
  iterateObject(obj, (obj: any, value: string) =>
    colorShadesCreator(
      obj[value],
      SPECIAL_GRAY.includes(value) ? SPECIAL_GRAY_PERCENTAGE : BASE_PERCENTAGE
    )
  ) as Palette;
