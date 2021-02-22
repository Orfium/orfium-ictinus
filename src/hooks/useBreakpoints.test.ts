import { renderHook } from 'test';
import useBreakpoints, { queriesKeys } from './useBreakpoints';

const createMockMediaMatcher = (matchesOrMapOfMatches: boolean) => (qs: string | number) => ({
  matches:
    typeof matchesOrMapOfMatches === 'object' ? matchesOrMapOfMatches[qs] : matchesOrMapOfMatches,
  addListener: () => {},
  removeListener: () => {},
});

describe('useBreakpoints', () => {
  beforeEach(() => {
    // @ts-ignore - set what matches will be
    window.matchMedia = createMockMediaMatcher(true);
  });
  it('should render the correct matches keys', () => {
    const { result } = renderHook(() => useBreakpoints());
    const keys = Object.keys(result.current);

    expect(keys).toStrictEqual(queriesKeys);
  });

  it('should check that match is true', () => {
    const { result } = renderHook(() => useBreakpoints());

    expect(result.current.des1200).toBeTruthy();
  });

  it('should check that match is true', () => {
    // @ts-ignore - set what matches will be
    window.matchMedia = createMockMediaMatcher(false);
    const { result } = renderHook(() => useBreakpoints());

    expect(result.current.des1200).toBeFalsy();
  });
});
