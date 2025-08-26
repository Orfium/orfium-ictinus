import theme from '../../index';
import { MAX_SHADE } from '../../palette';
import { rem } from '../../utils';
import { GetFocus } from '../focus';
import { getDisabled, getFocus, getHover, getPressed } from '../index';
import { statesConfig } from '../statesConfig';
import { getShadeWithStep } from '../utils';

const themeMode = 'semantic';

describe('Global states - getHover ', () => {
  const testTheme = theme('semantic');

  test('with only theme as prop', () => {
    const hoverResponse = getHover({ theme: testTheme });

    expect(hoverResponse.backgroundColor).toBe(testTheme.utils.getColor('lightGrey', 50));
  });

  test('with color and shade as prop', () => {
    const hoverResponse = getHover({ theme: testTheme, color: 'lightBlue', shade: 200 });

    expect(hoverResponse.backgroundColor).toBe(testTheme.utils.getColor('lightBlue', 250));
  });

  test('with color and shade out of bound as prop', () => {
    const hoverResponse = getHover({ theme: testTheme, color: 'lightBlue', shade: MAX_SHADE });

    expect(hoverResponse.backgroundColor).toBe(testTheme.utils.getColor('lightBlue', 900));
  });
});

describe('Global states - getFocus ', () => {
  const testTheme = theme(themeMode);

  const expected = (focusResponse: GetFocus, expectedResultBorder: string) => {
    expect(focusResponse.borderWidth).toBe(expectedResultBorder);
    expect(focusResponse.styleBorder).toBe(
      `${expectedResultBorder} solid ${testTheme.utils.getColor(
        statesConfig[themeMode].focus.border.color.name,
        statesConfig[themeMode].focus.border.color.shade
      )}`
    );
    expect(focusResponse.focusColor).toBe(
      testTheme.utils.getColor(
        statesConfig[themeMode].focus.border.color.name,
        statesConfig[themeMode].focus.border.color.shade
      )
    );
    expect(focusResponse.styleOutline).toBe(
      `${testTheme.utils.getColor(
        statesConfig[themeMode].focus.border.color.name,
        statesConfig[themeMode].focus.border.color.shade
      )} auto ${expectedResultBorder}`
    );
  };

  test('with theme only as prop', () => {
    const focusResponse = getFocus({ theme: testTheme });
    const expectedResultBorder = rem(statesConfig[themeMode].focus.border.width.step);

    expected(focusResponse, expectedResultBorder);
  });
  test('with borderWidth as prop', () => {
    const testBorderWidth = 1;
    const focusResponse = getFocus({ theme: testTheme, borderWidth: testBorderWidth });
    const expectedResultBorder = rem(
      testBorderWidth + statesConfig[themeMode].focus.border.width.step
    );

    expected(focusResponse, expectedResultBorder);
  });
});

describe('Global states - getPressed ', () => {
  const testTheme = theme('semantic');

  test('with only theme as prop', () => {
    const pressedResponse = getPressed({ theme: testTheme });

    expect(pressedResponse.backgroundColor).toBe(testTheme.utils.getColor('lightGrey', 100));
  });

  test('with color and shade as prop', () => {
    const pressedResponse = getPressed({ theme: testTheme, color: 'lightBlue', shade: 200 });

    expect(pressedResponse.backgroundColor).toBe(testTheme.utils.getColor('lightBlue', 300));
  });

  test('with color and shade out of bound as prop', () => {
    const pressedResponse = getPressed({ theme: testTheme, color: 'lightBlue', shade: MAX_SHADE });

    expect(pressedResponse.backgroundColor).toBe(testTheme.utils.getColor('lightBlue', 850));
  });
});

describe('Global states - getDisabled ', () => {
  test('return value', () => {
    const disabledResponse = getDisabled();

    expect(disabledResponse).toStrictEqual({
      style: {
        opacity: statesConfig[themeMode].disabled.opacity.amount,
        cursor: statesConfig[themeMode].disabled.cursor.name,
      },
      opacity: statesConfig[themeMode].disabled.opacity.amount,
      cursor: statesConfig[themeMode].disabled.cursor.name,
    });
  });
});

describe('Global states - utils ', () => {
  test('getShadeWithStep in bounds', () => {
    const shade = getShadeWithStep({ colorScheme: themeMode, shade: 50, step: 50 });

    expect(shade).toBe(100);
  });

  test('getShadeWithStep out of bounds', () => {
    const shade = getShadeWithStep({ colorScheme: themeMode, shade: MAX_SHADE, step: 50 });

    expect(shade).toBe(900);
  });
});
