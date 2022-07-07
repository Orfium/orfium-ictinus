import React, { useEffect, useRef, useState } from 'react';

import { container, itemContainer } from './PositionInScreen.style';

type Props = {
  isVisible: boolean;
  isOverflowAllowed?: boolean;
  offsetX?: number;
  offsetY?: number;
  parent: any;
};

const usePositionInScreen = (
  parentRef: React.MutableRefObject<any>,
  itemRef: React.MutableRefObject<any>,
  isVisible?: boolean
) => {
  const [position, setPosition] = useState({ x: -1, y: -1 });
  useEffect(() => {
    let { x: itemX, y: itemY } = parentRef?.current
      ? parentRef?.current?.getBoundingClientRect()
      : { x: 0, y: 0 };
    const parrentOffsetHeight = parentRef?.current?.offsetHeight || 0;
    const { width, height } = itemRef?.current
      ? itemRef?.current?.children[0]?.getBoundingClientRect()
      : { width: 0, height: 0 };

    const itemYOutOfScreenHeight = itemY + parrentOffsetHeight + height > window.innerHeight;

    if (itemYOutOfScreenHeight) {
      itemY -= height;
      if (itemY < 0) {
        itemY = 0;
      }
    } else {
      itemY += parrentOffsetHeight;
    }

    const itemXOutOfScreenWidth = itemX + width > window.innerWidth;
    if (itemXOutOfScreenWidth) {
      itemX = window.innerWidth - width;
    }

    setPosition({ x: itemX, y: itemY });
  }, [parentRef, itemRef, isVisible]);

  return position;
};

const PositionInScreen: React.FC<Props> = ({
  isVisible,
  parent,
  isOverflowAllowed,
  offsetX = 0,
  offsetY = 0,
  children,
}) => {
  const wrapperRef = useRef(null);
  const itemRef = useRef(null);
  const { x, y } = usePositionInScreen(wrapperRef, itemRef, isVisible);
  const isTooltipVisible = isVisible && x !== -1 && y !== -1;
  const ParentComp = parent;

  return (
    <div css={container(isOverflowAllowed, isTooltipVisible)} ref={wrapperRef}>
      <ParentComp />
      {isTooltipVisible && (
        <div css={itemContainer(x + offsetX, y + offsetY)} id={'unique-tooltip-id'} ref={itemRef}>
          {children}
        </div>
      )}
    </div>
  );
};

export default PositionInScreen;
