import theme from '../../index';
import { rem } from '../../utils';
import { GetFocusResponse } from '../focus';
import { getDisabled, getFocus, getHover, getPressed } from '../index';
import { statesConfig } from '../statesConfig';
import { getShadeWithStep } from '../utils';

describe('Global states - getHover ', () => {
  const testTheme = theme('light');

  test('with only theme as prop', () => {
    const color = getHover({ theme: testTheme });

    expect(color).toBe(testTheme.utils.getColor('lightGrey', 50));
  });

  test('with color and shade as prop', () => {
    const color = getHover({ theme: testTheme, color: 'lightBlue', shade: 200 });

    expect(color).toBe(testTheme.utils.getColor('lightBlue', 250));
  });

  test('with color and shade out of bound as prop', () => {
    const color = getHover({ theme: testTheme, color: 'lightBlue', shade: 950 });

    expect(color).toBe(testTheme.utils.getColor('lightBlue', 900));
  });
});

describe('Global states - getFocus ', () => {
  const testTheme = theme('light');

  const expected = (focusResponse: GetFocusResponse, expectedResultBorder: string) => {
    expect(focusResponse.borderWidth).toBe(expectedResultBorder);
    expect(focusResponse.styleBorder).toBe(
      `${expectedResultBorder} solid ${testTheme.utils.getColor(
        statesConfig.focus.border.color.name,
        statesConfig.focus.border.color.shade
      )}`
    );
    expect(focusResponse.focusColor).toBe(
      testTheme.utils.getColor(
        statesConfig.focus.border.color.name,
        statesConfig.focus.border.color.shade
      )
    );
    expect(focusResponse.styleOutline).toBe(
      `${testTheme.utils.getColor(
        statesConfig.focus.border.color.name,
        statesConfig.focus.border.color.shade
      )} auto ${expectedResultBorder}`
    );
  };

  test('with theme only as prop', () => {
    const focusResponse = getFocus({ theme: testTheme });
    const expectedResultBorder = rem(statesConfig.focus.border.width.step);

    expected(focusResponse, expectedResultBorder);
  });
  test('with borderWidth as prop', () => {
    const testBorderWidth = 1;
    const focusResponse = getFocus({ theme: testTheme, borderWidth: testBorderWidth });
    const expectedResultBorder = rem(testBorderWidth + statesConfig.focus.border.width.step);

    expected(focusResponse, expectedResultBorder);
  });
});

describe('Global states - getPressed ', () => {
  const testTheme = theme('light');

  test('with only theme as prop', () => {
    const color = getPressed({ theme: testTheme });

    expect(color).toBe(testTheme.utils.getColor('lightGrey', 100));
  });

  test('with color and shade as prop', () => {
    const color = getPressed({ theme: testTheme, color: 'lightBlue', shade: 200 });

    expect(color).toBe(testTheme.utils.getColor('lightBlue', 300));
  });

  test('with color and shade out of bound as prop', () => {
    const color = getPressed({ theme: testTheme, color: 'lightBlue', shade: 950 });

    expect(color).toBe(testTheme.utils.getColor('lightBlue', 850));
  });
});

describe('Global states - getDisabled ', () => {
  test('return value', () => {
    const disabledResponse = getDisabled();

    expect(disabledResponse).toStrictEqual({
      style: {
        opacity: statesConfig.disabled.opacity.amount,
        cursor: statesConfig.disabled.cursor.name,
      },
      opacity: statesConfig.disabled.opacity.amount,
      cursor: statesConfig.disabled.cursor.name,
    });
  });
});

describe('Global states - utils ', () => {
  test('getShadeWithStep in bounds', () => {
    const shade = getShadeWithStep({ shade: 50, step: 50 });

    expect(shade).toBe(100);
  });

  test('getShadeWithStep out of bounds', () => {
    const shade = getShadeWithStep({ shade: 950, step: 50 });

    expect(shade).toBe(900);
  });
});
