import { colorShadesCreator } from '../utils';
import { flatPaletteConfig } from '../palette';
import { magentaShades } from './const';

test('magenta base color to be shaded correctly', () => {
  expect(colorShadesCreator(flatPaletteConfig.magenta, 0.25)).toStrictEqual(magentaShades);
});
