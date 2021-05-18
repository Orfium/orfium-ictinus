import theme from 'theme';
import { initData } from './mockedData';
import { color } from './story.utils';
import { getKeyNames, colorPicker } from './utils';

describe('LineChart test funcionallity', () => {
  test('Test colorPicker function with pre-seleted colors', () => {
    const testTheme = theme('light');
    const uniqueKeyNames = getKeyNames(initData);
    const colorsPicked = colorPicker({ theme: testTheme, uniqueKeyNames, color });

    expect(colorsPicked['hidden']).toBeTruthy();
    expect(colorsPicked['hidden']).toStrictEqual('#00008B');
    expect(colorsPicked['claimed']).toBeTruthy();
    expect(colorsPicked['claimed']).toStrictEqual('#FFA500');
    expect(colorsPicked['amt']).toBeTruthy();
    expect(colorsPicked['amt']).toStrictEqual('#FF0000');
  });

  test('Test colorPicker function with random colors', () => {
    const testTheme = theme('light');
    const uniqueKeyNames = getKeyNames(initData);
    const colorsPicked = colorPicker({ theme: testTheme, uniqueKeyNames });

    expect(colorsPicked['hidden']).toBeTruthy();
    expect(colorsPicked['hidden']).not.toStrictEqual('#00008B');
    expect(colorsPicked['claimed']).toBeTruthy();
    expect(colorsPicked['claimed']).not.toStrictEqual('#FFA500');
    expect(colorsPicked['amt']).toBeTruthy();
    expect(colorsPicked['amt']).not.toStrictEqual('#FF0000');
  });
});
