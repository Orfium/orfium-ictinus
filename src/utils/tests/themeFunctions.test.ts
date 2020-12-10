import { getColorFromType } from '../themeFunctions';
import theme from '../../theme';
import { lightPaletteConfig } from '../../theme/palette.config';

describe('The usability of getColorFromType to be correct', () => {
  test('getColorFromType to get a string and return it', () => {
    const testColor = '#fefefe';
    const color = getColorFromType(testColor, theme('light'));

    expect(color).toBe(testColor);
  });
  test('getColorFromType to get a type and return the correct color', () => {
    const testColor = 'secondary';
    const color = getColorFromType(testColor, theme('light'));

    expect(color).toBe(lightPaletteConfig.secondary);
  });
  test('getColorFromType to get specific the primary to get the specia case of 100 shade', () => {
    const testColor = 'primary';
    const color = getColorFromType(testColor, theme('light'));

    expect(color).toBe('#c8cade');
  });
  test('getColorFromType to get a color from the palette and return the correct color', () => {
    const testColor = 'lightBlue';
    const color = getColorFromType(testColor, theme('light'));

    expect(color).toBe(lightPaletteConfig?.flat?.lightBlue);
  });
});
