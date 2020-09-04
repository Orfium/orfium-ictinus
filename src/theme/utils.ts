import { shade, tint } from 'polished';
import { Palette, PaletteConfig } from './palette';

export const convertPointsToPixels = (pt: number) => (96 / 72) * pt;

export const colorShadesCreator = (base: string) => {
  const darker = new Array(4)
    .fill(null)
    .reduce((acc, _, index) => {
      acc.push(shade(0.25 * index, base));

      return acc;
    }, [])
    .reverse();

  const lighter = new Array(4).fill(null).reduce((acc, _, index) => {
    acc.push(tint(0.25 * index, base));

    return acc;
  }, []);

  return [...darker, ...lighter]
    .filter((value, index, arr) => arr.indexOf(value) === index)
    .reverse()
    .reduce((acc, _, index) => {
      acc.push({ [`${index + 1}00`]: _ });

      return acc;
    }, []);
};

export const iterateObject = (obj: any, func: (base: string) => any) =>
  Object.keys(obj).reduce((acc, value, arr) => {
    acc[value] =
      typeof obj[value] === 'string'
        ? func(obj[value])
        : typeof obj[value] === undefined
        ? undefined
        : iterateObject(obj[value], func);

    return acc;
  }, {});

export const enhancePaletteWithShades = (obj: PaletteConfig): Palette =>
  iterateObject(obj, colorShadesCreator) as Palette;
