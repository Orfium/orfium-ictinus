import { useCallback, useState } from 'react';

export const useLoading = (
  clickHandler?: (setLoading?: (isLoading: boolean) => void) => void,
  defaultState = false
) => {
  const [loading, setLoading] = useState(defaultState);

  const updateLoadingState = useCallback(
    (isLoading: boolean) => {
      setLoading(isLoading);
    },
    [setLoading]
  );

  const handleAsyncOperation = useCallback(() => {
    if (clickHandler) {
      clickHandler(updateLoadingState);
    }
  }, [updateLoadingState, clickHandler]);

  return { loading, handleAsyncOperation };
};
