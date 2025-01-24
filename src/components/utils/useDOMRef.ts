import { useImperativeHandle, useRef } from 'react';
import type { RefObject } from 'react';

export function createDOMRef<T extends HTMLElement = HTMLElement>(ref: RefObject<T | null>): T {
  return ref.current;
}

/**
 * Create and manage a DOM reference, allowing both
 * the parent and child components to access the same DOM element.
 *
 * @template T
 * @param {React.RefObject<T>} ref - A ref object passed from the parent component.
 * @returns {React.RefObject<T | null>} A new ref object that can be attached to a DOM element.
 *
 * @description
 * This hook is useful in scenarios where you need to create a ref in a child component
 * and also expose it to the parent component. It uses `useImperativeHandle` to make
 * the DOM element accessible through the parent's ref.
 *
 * @example
 * // In a child component:
 * const ChildComponent = forwardRef((props, ref) => {
 *   const domRef = useDOMRef(ref);
 *   return <div ref={domRef}>Child Content</div>;
 * });
 *
 * // In a parent component:
 * const ParentComponent = () => {
 *   const parentRef = useRef(null);
 *   return <ChildComponent ref={parentRef} />;
 * };
 *
 * @notes
 * - This hook should be used in conjunction with React.forwardRef to properly pass
 *   the ref from the parent component.
 * - The generic type T extends HTMLElement, defaulting to HTMLElement if not specified.
 * - The returned ref's current property may be null if the ref hasn't been attached to an element yet.
 */

export function useDOMRef<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>
): RefObject<T | null> {
  const domRef = useRef<T>(null);

  useImperativeHandle(ref, () => createDOMRef(domRef));

  return domRef;
}
