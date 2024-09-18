import { useImperativeHandle, useRef } from 'react';
import type { RefObject } from 'react';

export function createDOMRef<T extends HTMLElement = HTMLElement>(ref: RefObject<T | null>): T {
  return ref.current;
}

export function useDOMRef<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>
): RefObject<T | null> {
  const domRef = useRef<T>(null);

  useImperativeHandle(ref, () => createDOMRef(domRef));

  return domRef;
}
