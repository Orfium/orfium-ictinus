import { propsHandler } from '../helpers';

describe('The usability of propsHandler to be correct', () => {
  const errors = [
    {
      condition: ({ a, b }: { a: boolean; b: boolean }): boolean => Boolean(a === b),
      message: 'The properties are equal',
    },
  ];

  test('that it fails when conditions are met', () => {
    const checkFunction = () => propsHandler(errors, { a: true, b: true });
    expect(checkFunction).toThrowError(errors[0].message);
  });

  test('that it doesnt fail when conditions are not met', () => {
    const checkFunction = () => propsHandler(errors, { a: false, b: true });
    expect(checkFunction).not.toThrowError(errors[0].message);
  });

  test('that it doesnt fail when conditions are not met and returns correct props', () => {
    expect(propsHandler(errors, { a: false, b: true })).toEqual({ a: false, b: true });
  });
});
