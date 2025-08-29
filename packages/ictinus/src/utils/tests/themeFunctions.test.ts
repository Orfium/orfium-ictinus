import theme from '../../theme';
import { paletteConfig } from '../../theme/palette.config';
import { getColorFromType, calculateActualColorFromComponentProp } from '../themeFunctions';

describe('The usability of calculateActualColorFromComponentProp to be correct', () => {
  test('that it fails to get a wrong color', () => {
    const testColor = '#fefefe';
    const checkFunction = () => calculateActualColorFromComponentProp(testColor);

    expect(checkFunction).toThrowError(
      `Error trying to translate your component color: ${testColor}`
    );
  });
  test('that it fails to get a wrong first argument', () => {
    const testColor = 'red2-500';
    const checkFunction = () => calculateActualColorFromComponentProp(testColor);

    expect(checkFunction).toThrowError(
      `You passed a wrong color for the first argument: ${testColor} - try something like red-500`
    );
  });
  test('that it fails to get a wrong second argument', () => {
    const testColor = 'red-501';
    const checkFunction = () => calculateActualColorFromComponentProp(testColor);

    expect(checkFunction).toThrowError(
      `You passed a wrong shade for the second argument: ${testColor} - try something like red-500`
    );
  });
  test('get the color correctly', () => {
    const testColor = 'magenta-200';
    const color = calculateActualColorFromComponentProp(testColor);

    expect(color).toEqual({ color: 'magenta', shade: 200 });
  });
});

describe('The usability of getColorFromType to be correct', () => {
  test('getColorFromType to get a string and return it', () => {
    const testColor = '#fefefe';
    const color = getColorFromType(testColor, theme('semantic'));

    expect(color).toBe(testColor);
  });
  test('getColorFromType to get a type and return the correct color', () => {
    const testColor = 'secondary';
    const color = getColorFromType(testColor, theme('semantic'));

    expect(color).toBe(paletteConfig.secondary);
  });
  test('getColorFromType to get specific the primary to get the special case of 100 shade', () => {
    const testColor = 'primary';
    const color = getColorFromType(testColor, theme('semantic'));

    expect(color).toBe('#e7eefe');
  });
  test('getColorFromType to get a color from the palette and return the correct color', () => {
    const testColor = 'lightBlue';
    const color = getColorFromType(testColor, theme('semantic'));

    expect(color).toBe(paletteConfig?.flat?.lightBlue);
  });
});
