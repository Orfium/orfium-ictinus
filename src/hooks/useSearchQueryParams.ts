import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const useSearchQueryParams = (): Record<string, string> => {
  const { search } = useLocation();
  const urlSearchParams = useMemo(() => new URLSearchParams(search), [search]);
  const result: Record<string, string> = {};

  urlSearchParams.forEach((value, key) => {
    result[key] = value;
  });

  return result;
};

export default useSearchQueryParams;
