import {
  type MutableRefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

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
  isVisible?: boolean
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
        y = SCREEN_EDGE_BUFFER - offsetY;
        currentPlacement = 'top';
      }
    }

    // Check if element would overflow screen bounds horizontally (with buffer)
    const hasItemXOutOfScreenWidth = x + childWidth > window.innerWidth - SCREEN_EDGE_BUFFER;

    if (hasItemXOutOfScreenWidth) {
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
    if (!isVisible) return;

    animationFrameRef.current = requestAnimationFrame(() => {
      calculatePosition();
    });

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [calculatePosition, isVisible]);

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
  wrapperRef: MutableRefObject<any>
): (number | undefined)[] => {
  const [width, setWidth] = useState();

  useEffect(() => {
    if (hasWrapperWidth) {
      const wrapperWidth = wrapperRef?.current?.getBoundingClientRect()?.width;
      setWidth(wrapperWidth);
    }
  }, [hasWrapperWidth, wrapperRef]);

  return [width];
};
