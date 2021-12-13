import { getColor } from '../index';
import { BASE_SHADE, pickTextColorFromSwatches } from '../palette';
import { flatPaletteConfig, lightPaletteConfig } from '../palette.config';
import { colorShadesCreator, enhancePaletteWithShades } from '../utils';
import { magentaShades } from './const';

describe('GetColor functionalities', () => {
  test('magenta base color to be shaded correctly', () => {
    expect(colorShadesCreator(flatPaletteConfig.magenta as string)).toStrictEqual(magentaShades);
  });

  test('that the getColor fetch the correct colors from what has being requested', () => {
    const palette = enhancePaletteWithShades(lightPaletteConfig);
    const getColorFun = getColor(palette);
    expect(getColorFun('teal', 550)).toStrictEqual('#1ad1a3');
    expect(getColorFun('magenta', 250)).toStrictEqual(magentaShades['250']);
    expect(getColorFun('primary', BASE_SHADE, 'text')).toStrictEqual('#32324E');
  });
});

describe('pickTextColorFromSwatches functionalities', () => {
  test('pickTextColorFromSwatches works with the given colors and to return the correct color', () => {
    const black = '#0f0f17';
    const white = 'white';

    expect(pickTextColorFromSwatches('darkGrey', 300)).toBe(black);
    expect(pickTextColorFromSwatches('darkBlue', 650)).toBe(white);
    expect(pickTextColorFromSwatches('magenta', 650)).toBe(white);
    expect(pickTextColorFromSwatches('green', 600)).toBe(black);
    expect(pickTextColorFromSwatches('green', 850)).toBe(white);
  });
});
