import { useEffect, useState } from 'react';

export const usePositionInScreen = (
  /** Ref of the parent element */
  parentRef: React.MutableRefObject<any>,
  /** Ref of the item to be positioned */
  itemRef: React.MutableRefObject<any>,
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
  const [position, setPosition] = useState({ x: -1, y: -1 });

  const [parentHeight, setParentHeight] = useState(0);

  /**
   * We use this ResizeObserver in order to track any changes on the parent's height:
   * This is necessary for the case of the MultiSelect, where the height of the TextField is dynamic
   * and will increase/decrease as more Chips (Selected Options) are added/deleted. 
   * Therefore the parentHeight is stored on the useState above.
   */
  useEffect(() => {
    if (!parentRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      setParentHeight(entries[0].contentRect.height);
    });

    resizeObserver.observe(parentRef.current);

    return () => resizeObserver.disconnect();
  }, [parentRef]);

  useEffect(() => {
    // x,y are cordinates in screen
    // width, height are wrapper elements dimensions
    const {
      x: parentX,
      y: parentY,
      width: parentWidth,
      height: parentTempHeight,
    } = parentRef?.current
      ? parentRef?.current?.getBoundingClientRect()
      : { x: 0, y: 0, width: 0, height: 0 };

    setParentHeight(parentTempHeight);

    // width, height are the element's that's going to be positioned dimensions
    const { width, height } = itemRef?.current
      ? itemRef?.current?.children[0]?.getBoundingClientRect()
      : { width: 0, height: 0 };

    // If the item-to-be-positioned is out of screen height
    const itemYOutOfScreenHeight = parentY + parentHeight + height > window.innerHeight;

    // The element that we are positioning is absolutely positioned inside the relative
    // container. So x,y are zero means the element will be positioned exactly on top
    // of the parent element.
    let x = 0;
    let y = 0;

    if (itemYOutOfScreenHeight) {
      // We place the element height+offsetY (px) above the parent
      y = y - height - offsetY;
      if (parentY + y < 0) {
        // Rare case where client height is super small. We don't exactly support this.
        // So we render it as if it was inside the screen height
        y = parentHeight + offsetY;
      }
    } else {
      // We place the element offsetY (px) under the parent
      y = parentHeight + offsetY;
    }

    // If the item-to-be-positioned is out of screen width
    const itemXOutOfScreenWidth = parentX + width > window.innerWidth;

    if (itemXOutOfScreenWidth) {
      // We place the element parentWidth-width-offsetX (px) at the left of the parent
      x = x + parentWidth - width - offsetX;
    } else {
      // We place the element offset (px) at the right of the parent
      x = offsetX;
    }

    setPosition({ x, y });
  }, [parentRef, itemRef, visible, offsetY, offsetX, parentHeight]);

  return position;
};

export const useWrapperWidth = (
  /** Whether the item to be positioned uses the parent's wrapper width */
  hasWrapperWidth: boolean,
  /** Ref of the wrapper */
  wrapperRef: React.MutableRefObject<any>
): (number | undefined)[] => {
  const [width, setWidth] = useState();

  useEffect(() => {
    if (hasWrapperWidth) {
      setWidth(wrapperRef?.current?.getBoundingClientRect()?.width);
    }
  }, [hasWrapperWidth, wrapperRef]);

  return [width];
};
