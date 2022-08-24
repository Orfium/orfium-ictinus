import { useCallback, useState, MouseEvent } from 'react';

export type ClickEvent = MouseEvent<HTMLButtonElement> | undefined;
export type ClickHandler =
  | ((setLoading?: (isLoading: boolean) => void, event?: ClickEvent) => void)
  | undefined;

export const useLoading = (clickHandler: ClickHandler, defaultState = false) => {
  const [isLoading, setIsLoading] = useState(defaultState);

  const updateLoadingState = useCallback(
    (isLoadingProp: boolean) => {
      setIsLoading(isLoadingProp);
    },
    [setIsLoading]
  );

  const handleAsyncOperation = useCallback(
    (event: ClickEvent) => {
      if (clickHandler) {
        clickHandler(updateLoadingState, event);
      }
    },
    [updateLoadingState, clickHandler]
  );

  return { isLoading, handleAsyncOperation };
};
