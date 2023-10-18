import { CSSObject } from '@emotion/serialize';
import React, { useRef } from 'react';

import { useWrapperWidth, usePositionInScreen } from './hooks';
import { container, itemContainer } from './PositionInScreen.style';

export type PositionInScreenProps = {
  id?: string;
  /** Whether the item to be positioned is visible */
  isVisible: boolean;
  /** Configures the container's overflow */
  isOverflowAllowed?: boolean;
  /** Whether the item to be positioned uses the parent's wrapper width */
  hasWrapperWidth?: boolean;
  /** Additional offset-x */
  offsetX?: number;
  /** Additional offset-y */
  offsetY?: number;
  /** The parent element */
  parent: JSX.Element;
  /** Sx prop to override specific properties */
  sx?: {
    container?: CSSObject;
    itemContainer?: CSSObject;
  };
};

const PositionInScreen: React.FC<PositionInScreenProps> = ({
  id = 'unique-tooltip-id',
  isVisible,
  parent,
  isOverflowAllowed,
  hasWrapperWidth = false,
  offsetX = 0,
  offsetY = 0,
  sx,
  children,
}) => {
  const wrapperRef = useRef(null);
  const itemRef = useRef(null);

  const [wrapperWidth] = useWrapperWidth(hasWrapperWidth, wrapperRef);
  const { x, y } = usePositionInScreen(wrapperRef, itemRef, offsetX, offsetY, isVisible);

  const hasTooltip = isVisible && x !== -1 && y !== -1;

  return (
    <div css={container(isOverflowAllowed, hasTooltip, sx)} ref={wrapperRef}>
      {parent}
      {hasTooltip && (
        <div css={itemContainer(x, y, wrapperWidth, sx)} id={id} ref={itemRef}>
          {children}
        </div>
      )}
    </div>
  );
};

export default PositionInScreen;
