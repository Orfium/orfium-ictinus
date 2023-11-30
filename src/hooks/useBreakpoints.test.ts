import { renderHook } from '@testing-library/react-hooks';
import { useMediaQuery } from 'react-responsive';

import useBreakpoints, { queriesKeys, queriesSizes } from './useBreakpoints';

jest.mock('react-responsive');

const useMediaQueryMock = useMediaQuery as jest.Mock<boolean>;

describe('useBreakpoints', () => {
  beforeEach(() => {
    useMediaQueryMock.mockClear();
  });

  it('should return an object with boolean values for each breakpoint', () => {
    // Mock useMediaQuery to return true for all breakpoints
    useMediaQueryMock.mockReturnValue(true);

    const { result } = renderHook(() => useBreakpoints());

    // Expect all breakpoints to be true
    queriesKeys.forEach((key) => {
      expect(result.current[key]).toBe(true);
    });
  });

  it('should return an object with boolean values for each breakpoint (some false)', () => {
    // Mock useMediaQuery to return true only for 'des1920'
    useMediaQueryMock.mockImplementation((query) => query.minWidth === queriesSizes['des1920']);

    const { result } = renderHook(() => useBreakpoints());

    // Expect 'des1920' to be true, others to be false
    expect(result.current['des1920']).toBe(true);
    queriesKeys.slice(1).forEach((key) => {
      expect(result.current[key]).toBe(false);
    });
  });
});
