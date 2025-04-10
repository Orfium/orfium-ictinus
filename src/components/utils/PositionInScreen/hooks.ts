import head from 'lodash/head';
import { useLayoutEffect, useState } from 'react';

import { resizeObserverHandler } from './utils';

const useHeights = (
  /** Ref of the parent element */
  parentRef: HTMLDivElement | null,
  /** Ref of the item to be positioned */
  itemRef: HTMLDivElement | null
): { parentHeight: number; childHeight: number } => {
  const [parentHeight, setParentHeight] = useState(0);
  const [childHeight, setChildHeight] = useState(0);

  /**
   * We use this ResizeObserver in order to track any changes on the parent's height:
   * This is necessary for the case of the MultiSelect, where the height of the TextField is dynamic
   * and will increase/decrease as more Chips (Selected Options) are added/deleted.
   * Therefore the parentHeight is stored on the useState above.
   */
  useLayoutEffect(() => {
    if (!parentRef) return;

    const parentResizeObserver = resizeObserverHandler(setParentHeight);

    parentResizeObserver.observe(parentRef);

    return () => parentResizeObserver.disconnect();
  }, [parentRef]);

  /**
   * Same here to track the child's height:
   * This is necessary for the case where the SelectMenu is rendered above the TextField, we need to track the
   * dynamic height of the SelectMenu in order to keep the gap between SelectMenu and TextField fixed.
   */
  useLayoutEffect(() => {
    const dropdownElement = head(itemRef?.children);

    if (!dropdownElement) return;

    const childResizeObserver = resizeObserverHandler(setChildHeight);

    childResizeObserver.observe(dropdownElement);

    return () => childResizeObserver.disconnect();
  }, [itemRef]);

  return { parentHeight, childHeight };
};

export const usePositionInScreen = (
  /** Ref of the parent element */
  parentRef: HTMLDivElement | null,
  /** Ref of the item to be positioned */
  itemRef: HTMLDivElement | null,
  /** Additional offset-x */
  offsetX: number,
  /** Additional offset-y */
  offsetY: number,
  /** Whether the item to be positioned is visible */
  visible?: boolean
): {
  x: number;
  y: number;
} => {
  const { parentHeight, childHeight } = useHeights(parentRef, itemRef);
  const [position, setPosition] = useState({ x: -1, y: -1 });

  useLayoutEffect(() => {
    // Define a small buffer for screen edge detection
    const SCREEN_EDGE_BUFFER = 8;

    // Get parent element dimensions and position
    const parentRect: DOMRect | undefined = parentRef?.getBoundingClientRect();
    if (!parentRect) return;

    // Get viewport-relative coordinates
    const parentX = parentRect.left + window.scrollX;
    const parentY = parentRect.top + window.scrollY;
    const parentWidth = parentRect.width;

    // Get positioned element dimensions
    const childRect: DOMRect | undefined = itemRef?.children[0]?.getBoundingClientRect();
    const childWidth = childRect?.width ?? 0;

    // Check if element would overflow screen bounds (with buffer)
    const itemYOutOfScreenHeight =
      parentRect.top + parentHeight + childHeight > window.innerHeight - SCREEN_EDGE_BUFFER;
    const itemXOutOfScreenWidth =
      parentRect.left + childWidth > window.innerWidth - SCREEN_EDGE_BUFFER;

    // Calculate absolute positions (viewport + scroll)
    let x = parentX + offsetX;
    let y = parentY;

    if (itemYOutOfScreenHeight) {
      // Position above parent if would overflow bottom
      y = y - childHeight - offsetY;
      if (y < SCREEN_EDGE_BUFFER) {
        // If would overflow top, fallback to below parent
        y = parentY + parentHeight + offsetY;
      }
    } else {
      // Position below parent
      y = y + parentHeight + offsetY;
    }

    if (itemXOutOfScreenWidth) {
      // Align to right edge of parent if would overflow right
      x = parentX + parentWidth - childWidth - offsetX;
    }

    setPosition({ x, y });
  }, [parentRef, itemRef, visible, offsetY, offsetX, parentHeight, childHeight]);

  return position;
};

export const useWrapperWidth = (
  /** Whether the item to be positioned uses the parent's wrapper width */
  hasWrapperWidth: boolean,
  /** Ref of the wrapper */
  wrapperRef: HTMLDivElement | null
): (number | undefined)[] => {
  const [width, setWidth] = useState<number | undefined>();

  useLayoutEffect(() => {
    if (hasWrapperWidth) {
      setWidth(wrapperRef?.getBoundingClientRect()?.width);
    }
  }, [hasWrapperWidth, wrapperRef]);

  return [width];
};
