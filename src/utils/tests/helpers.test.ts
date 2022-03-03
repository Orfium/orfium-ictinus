import { errorHandler } from '../helpers';

describe('The usability of errorHandler to be correct', () => {
  const errors = [
    {
      condition: ({ a, b }: { a: boolean; b: boolean }): boolean => Boolean(a === b),
      message: 'The properties are equal',
    },
  ];

  test('that it fails when conditions are met', () => {
    const checkFunction = () => errorHandler(errors, { a: true, b: true });
    expect(checkFunction).toThrowError(errors[0].message);
  });

  test('that it doesnt fail when conditions are not met', () => {
    const checkFunction = () => errorHandler(errors, { a: false, b: true });
    expect(checkFunction).not.toThrowError(errors[0].message);
  });
});
