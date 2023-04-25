import { renderHook } from '@testing-library/react-hooks';
import { useLocation } from 'react-router-dom';

import { useSearchQueryParams } from '../';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
}));

describe('useSearchQueryParams', () => {
  it('returns the search query params as an object of key / value strings (Record<string, string>)', () => {
    (useLocation as jest.Mock).mockReturnValue({
      search: 'page=1&size=12&library=react&testing=yolo',
    });
    const { result } = renderHook(() => useSearchQueryParams());

    expect(result.current).toEqual({ page: '1', size: '12', library: 'react', testing: 'yolo' });
  });

  it('returns an empty object ({}) if the search query params is an empty string', () => {
    (useLocation as jest.Mock).mockReturnValue({
      search: '',
    });
    const { result } = renderHook(() => useSearchQueryParams());

    expect(result.current).toEqual({});
  });
});
