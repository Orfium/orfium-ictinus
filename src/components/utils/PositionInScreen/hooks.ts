import head from 'lodash/head';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';

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
  maxHeight: number;
  maxWidth: number;
  isPositioned: boolean;
  calculatePosition: () => void;
  placement: 'top' | 'bottom';
  triggerWidth: number;
} => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [triggerWidth, setTriggerWidth] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const [isPositioned, setIsPositioned] = useState(false);
  const [placement, setPlacement] = useState<'top' | 'bottom'>('bottom');
  const animationFrameRef = useRef<number>(0);

  const calculatePosition = useCallback(() => {
    // Define a small buffer for screen edge detection
    const SCREEN_EDGE_BUFFER = 8;

    // Get parent element dimensions and position
    const parentRect: DOMRect | undefined = parentRef?.getBoundingClientRect();
    if (!parentRect) return;

    // Get viewport-relative coordinates (without scroll offset)
    const parentX = parentRect.left;
    const parentY = parentRect.top;
    const parentWidth = parentRect.width;
    const parentHeight = parentRect.height;

    // Get positioned element dimensions
    const childRect: DOMRect | undefined = itemRef?.children[0]?.getBoundingClientRect();
    const childWidth = childRect?.width ?? 0;
    const childHeight = childRect?.height ?? 0;

    // Calculate positions (viewport-relative, without scroll)
    let x = parentX + offsetX;
    let y;
    let currentPlacement: 'top' | 'bottom' = 'bottom';

    // Check if element would overflow screen bounds (with buffer) when placed below
    const spaceBelow = window.innerHeight - (parentRect.bottom + offsetY) - SCREEN_EDGE_BUFFER;
    const spaceAbove = parentRect.top - offsetY - SCREEN_EDGE_BUFFER;

    // First try to place it below, if there's not enough space, try above
    if (childHeight <= spaceBelow) {
      // Place below - enough space
      y = parentY + parentHeight + offsetY;
      currentPlacement = 'bottom';
    } else if (childHeight <= spaceAbove) {
      // Place above - enough space above
      y = parentY - childHeight - offsetY;
      currentPlacement = 'top';
    } else {
      // Not enough space either way, place where there's more space and allow scrolling
      if (spaceBelow >= spaceAbove) {
        y = parentY + parentHeight + offsetY;
        currentPlacement = 'bottom';
      } else {
        y = parentY - childHeight - offsetY;
        currentPlacement = 'top';
      }
    }

    // Check if element would overflow screen bounds horizontally (with buffer)
    const itemXOutOfScreenWidth = x + childWidth > window.innerWidth - SCREEN_EDGE_BUFFER;

    if (itemXOutOfScreenWidth) {
      // Align to right edge of parent if would overflow right
      x = parentX + parentWidth - childWidth - offsetX;
      // Ensure we don't position outside the left edge
      if (x < SCREEN_EDGE_BUFFER) {
        x = SCREEN_EDGE_BUFFER;
      }
    }

    // Calculate maxHeight - space available from y position to bottom/top of screen based on placement
    let availableHeight;
    if (currentPlacement === 'top') {
      availableHeight = parentY - SCREEN_EDGE_BUFFER;
    } else {
      availableHeight =
        window.innerHeight - (parentY + parentHeight + offsetY) - SCREEN_EDGE_BUFFER;
    }

    // Calculate maxWidth - space available from x position to right edge of screen
    const availableRightSpace = window.innerWidth - x - SCREEN_EDGE_BUFFER;

    setPosition({ x, y });
    setMaxHeight(availableHeight);
    setMaxWidth(availableRightSpace);
    setIsPositioned(true);
    setPlacement(currentPlacement);
    setTriggerWidth(parentWidth);
  }, [parentRef, itemRef, offsetY, offsetX]);

  useLayoutEffect(() => {
    if (!visible) return;

    animationFrameRef.current = requestAnimationFrame(() => {
      calculatePosition();
    });

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [calculatePosition, visible]);

  return {
    ...position,
    maxHeight,
    maxWidth,
    isPositioned,
    calculatePosition,
    placement,
    triggerWidth,
  };
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
