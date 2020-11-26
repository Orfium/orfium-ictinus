import { colorShadesCreator, enhancePaletteWithShades } from '../utils';
import { magentaShades } from './const';
import { getColor } from '../index';
import { flatPaletteConfig, lightPaletteConfig } from '../palette.config';

test('magenta base color to be shaded correctly', () => {
  expect(colorShadesCreator(flatPaletteConfig.magenta as string, 0.25)).toStrictEqual(
    magentaShades
  );
});

test('that the getColor fetch the correct colors from what has being requested', () => {
  const palette = enhancePaletteWithShades(lightPaletteConfig);
  const getColorFun = getColor(palette);
  expect(getColorFun('lightBlue', 400)).toStrictEqual('#18aed2');
  expect(getColorFun('magenta', 200)).toStrictEqual(magentaShades['200']);
  expect(getColorFun('primary', 400, 'text')).toStrictEqual('#494949');
});
