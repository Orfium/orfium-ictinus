import { pickCSSProperties, pickNonCSSProps } from './Box.utilities';
import { BoxProps } from './Box';

describe('pickCSSProperties', () => {
  it('should pick only the styled box props from the input object', () => {
    const inputObject: BoxProps = {
      color: 'inverted.secondary',
      backgroundColor: 'default',
      id: 'testing-id',
    };

    const expectedOutput: BoxProps = {
      color: 'inverted.secondary',
      backgroundColor: 'default',
    };

    const result = pickCSSProperties(inputObject);

    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty object if no styled box props are present in the input object', () => {
    const inputObject: BoxProps = {
      id: 'testing-id',
    };

    const expectedOutput: BoxProps = {};

    const result = pickCSSProperties(inputObject);

    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty object if the input object is empty', () => {
    const inputObject: BoxProps = {};

    const expectedOutput: BoxProps = {};

    const result = pickCSSProperties(inputObject);

    expect(result).toEqual(expectedOutput);
  });
});

describe('pickNonCSSProps', () => {
  it('should pick only the non-CSS props from the input object', () => {
    const inputObject: BoxProps = {
      color: 'inverted.secondary',
      backgroundColor: 'default',
      id: 'testing-id',
    };

    const expectedOutput: BoxProps = {
      id: 'testing-id',
    };

    const result = pickNonCSSProps(inputObject);

    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty object if all props are CSS props', () => {
    const inputObject: BoxProps = {
      color: 'inverted.secondary',
      backgroundColor: 'default',
    };

    const expectedOutput: BoxProps = {};

    const result = pickNonCSSProps(inputObject);

    expect(result).toEqual(expectedOutput);
  });

  it('should return the same object if no CSS props are present', () => {
    const inputObject: BoxProps = {
      id: 'testing-id',
    };

    const expectedOutput: BoxProps = {
      id: 'testing-id',
    };

    const result = pickNonCSSProps(inputObject);

    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty object if the input object is empty', () => {
    const inputObject: BoxProps = {};

    const expectedOutput: BoxProps = {};

    const result = pickNonCSSProps(inputObject);

    expect(result).toEqual(expectedOutput);
  });
});
