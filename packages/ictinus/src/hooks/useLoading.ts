import type { MouseEvent } from 'react';
import { useCallback, useState } from 'react';

export type ClickEvent = MouseEvent<HTMLButtonElement> | undefined;
export type ClickHandler =
  | ((setLoading?: (isLoading: boolean) => void, event?: ClickEvent) => void)
  | undefined;

export const useLoading = (clickHandler: ClickHandler, isLoadingInitialState = false) => {
  const [isLoading, setIsLoading] = useState(isLoadingInitialState);

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
