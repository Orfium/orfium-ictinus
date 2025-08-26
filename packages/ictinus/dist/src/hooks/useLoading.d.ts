import { MouseEvent } from 'react';
export type ClickEvent = MouseEvent<HTMLButtonElement> | undefined;
export type ClickHandler = ((setLoading?: (isLoading: boolean) => void, event?: ClickEvent) => void) | undefined;
export declare const useLoading: (clickHandler: ClickHandler, isLoadingInitialState?: boolean) => {
    isLoading: boolean;
    handleAsyncOperation: (event: ClickEvent) => void;
};
