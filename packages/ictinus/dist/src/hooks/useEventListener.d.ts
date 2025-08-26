import { RefObject } from 'react';
declare function useEventListener<KW extends keyof WindowEventMap, KH extends keyof HTMLElementEventMap, T extends HTMLElement | void = void>(eventName: KW | KH, handler: (event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event) => void, element?: RefObject<T>): void;
export default useEventListener;
