import { BASE_SHADE, getAAColor, getAAColorFromSwatches, getColor } from '../palette';
import { flatPaletteConfig, paletteConfig } from '../palette.config';
import { colorShadesCreator, enhancePaletteWithShades } from '../utils';
import { magentaShades } from './const';

describe('GetColor functionalities', () => {
  test('magenta base color to be shaded correctly', () => {
    expect(colorShadesCreator(flatPaletteConfig.magenta as string)).toStrictEqual(magentaShades);
  });

  test('that the getColor fetch the correct colors from what has being requested', () => {
    const palette = enhancePaletteWithShades(paletteConfig);
    const getColorFun = getColor(palette);
    expect(getColorFun('teal', 550)).toStrictEqual('#1ad1a3');
    expect(getColorFun('magenta', 250)).toStrictEqual(magentaShades['250']);
    expect(getColorFun('primary', BASE_SHADE, 'text')).toStrictEqual('#32324E');
  });
});

describe('getAAColorFromSwatches functionalities', () => {
  const palette = enhancePaletteWithShades(paletteConfig);

  test('getAAColorFromSwatches works with the given colors and to return the correct color', () => {
    const black = 'black';
    const white = 'white';
    const getAAColorFromSwatchesFun = getAAColorFromSwatches(palette);
    expect(getAAColorFromSwatchesFun('darkGrey', 300)).toBe(black);
    expect(getAAColorFromSwatchesFun('darkBlue', 650)).toBe(white);
    expect(getAAColorFromSwatchesFun('magenta', 650)).toBe(white);
    expect(getAAColorFromSwatchesFun('green', 600)).toBe(black);
    expect(getAAColorFromSwatchesFun('green', 850)).toBe(white);
  });
});

describe('getAAColor functionalities', () => {
  const palette = enhancePaletteWithShades(paletteConfig);

  test('getAAColor works with the given colors and to return the correct color', () => {
    const black = 'black';
    const white = 'white';
    const getColorFun = getColor(palette);
    const getAAColorFun = getAAColor(palette);

    expect(getAAColorFun(getColorFun('darkGrey', 300))).toBe(black);
    expect(getAAColorFun(getColorFun('darkBlue', 650))).toBe(white);
    expect(getAAColorFun(getColorFun('magenta', 650))).toBe(white);
    expect(getAAColorFun(getColorFun('green', 600))).toBe(black);
    expect(getAAColorFun(getColorFun('green', 850))).toBe(white);
  });
});
