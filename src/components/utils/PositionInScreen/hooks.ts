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
  isVisible?: boolean
): {
  x: number;
  y: number;
} => {
  const [position, setPosition] = useState({ x: -1, y: -1 });

  useEffect(() => {
    // x,y are cordinates in screen
    // width, height are wrapper elements dimensions
    const {
      x: parentX,
      y: parentY,
      width: parentWidth,
      height: parentHeight,
    } = parentRef?.current
      ? parentRef?.current?.getBoundingClientRect()
      : { x: 0, y: 0, width: 0, height: 0 };

    // width, height are the element's that's going to be positioned dimensions
    const { width, height } = itemRef?.current
      ? itemRef?.current?.children[0]?.getBoundingClientRect()
      : { width: 0, height: 0 };

    // If the item-to-be-positioned is out of screen height
    const isItemYOutOfScreenHeight = parentY + parentHeight + height > window.innerHeight;

    // The element that we are positioning is absolutely positioned inside the relative
    // container. So x,y are zero means the element will be positioned exactly on top
    // of the parent element.
    let x = 0;
    let y = 0;

    if (isItemYOutOfScreenHeight) {
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
    const isItemXOutOfScreenWidth = parentX + width > window.innerWidth;

    if (isItemXOutOfScreenWidth) {
      // We place the element parentWidth-width-offsetX (px) at the left of the parent
      x = x + parentWidth - width - offsetX;
    } else {
      // We place the element offset (px) at the right of the parent
      x = offsetX;
    }

    setPosition({ x, y });
  }, [parentRef, itemRef, isVisible, offsetY, offsetX]);

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