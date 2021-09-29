import { useCallback, useState, MouseEvent } from 'react';

export type ClickEvent = MouseEvent<HTMLButtonElement> | undefined;
export type ClickHandler =
  | ((setLoading?: (isLoading: boolean) => void, event?: ClickEvent) => void)
  | undefined;

export const useLoading = (clickHandler: ClickHandler, defaultState = false) => {
  const [loading, setLoading] = useState(defaultState);

  const updateLoadingState = useCallback(
    (isLoading: boolean) => {
      setLoading(isLoading);
    },
    [setLoading]
  );

  const handleAsyncOperation = useCallback(
    (event: ClickEvent) => {
      if (clickHandler) {
        clickHandler(updateLoadingState, event);
      }
    },
    [updateLoadingState, clickHandler]
  );

  return { loading, handleAsyncOperation };
};
