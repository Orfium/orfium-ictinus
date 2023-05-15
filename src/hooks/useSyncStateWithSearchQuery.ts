import { useState, useEffect, useMemo } from 'react';

import { useSearchQueryParams } from './';

type SearchQueryParams = {
  [key: string]: string | number;
};

const useSyncStateWithSearchQuery = <T extends SearchQueryParams>(
  defaultParams: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  // get search query params (object)
  const searchQueryParams = useSearchQueryParams();

  // Build initialState from SearchQuery and from the provided defaultParams
  const initialState = useMemo(() => {
    // there is no search query string, so make the defaultParams the initialState
    if (Object.keys(searchQueryParams).length === 0) {
      return defaultParams;
    }

    // if there is a search query string
    // 1. get the type of each value by the defaultParams  (currently we can handle only strings and numbers)
    const defaultParamsTypes = Object.values(defaultParams).map((val) => typeof val);
    const defaultParamsKeys = Object.keys(defaultParams);

    const parsedSearchQueryParamsArr = Object.entries(searchQueryParams)
      // 2. filter (remove) any key / value pairs that don't exist in defaultParams
      // hence we do not know their types and how to handle them.
      .filter(([key, __value]) => defaultParamsKeys.includes(key))
      // 3. create array of key / value pairs (tuples) with the correct types (strings or numbers)
      .map(([key, value], index) => {
        if (defaultParamsTypes[index] === 'number') {
          return [key, Number(value)];
        }

        return [key, value];
      });

    // 4. convert array of key / value pairs (tuples) back to object
    return Object.fromEntries(parsedSearchQueryParamsArr);
  }, [searchQueryParams, defaultParams]);

  // create state after merging defaultParams and search query
  const [params, setParams] = useState<T>(initialState);

  // build searchQuery string
  const searchQuery = useMemo(() => {
    const searchQueryStr = Object.entries(params)
      .filter(([__key, value]) => value !== undefined)
      .map(([key, val]) => `${key}=${val}&`)
      .join('');
    const searchQuery = searchQueryStr.substring(0, searchQueryStr.length - 1); // remove last "&" character

    return `${window.location.protocol}//${window.location.host}${window.location.pathname}?${searchQuery}`;
  }, [params]);

  // Update searchQuery without refreshing the page
  useEffect(() => {
    window.history.pushState({}, '', searchQuery);
  }, [searchQuery]);

  return [params, setParams];
};

export default useSyncStateWithSearchQuery;
