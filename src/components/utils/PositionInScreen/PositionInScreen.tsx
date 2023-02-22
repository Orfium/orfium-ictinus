import React, { useRef } from 'react';

import { useWrapperWidth, usePositionInScreen } from './hooks';
import { container, itemContainer } from './PositionInScreen.style';

type Props = {
  /** Whether the item to be positioned is visible */
  visible: boolean;
  /** Configures the container's overflow */
  withOverflow?: boolean;
  /** Whether the item to be positioned uses the parent's wrapper width */
  hasWrapperWidth?: boolean;
  /** Additional offset-x */
  offsetX?: number;
  /** Additional offset-y */
  offsetY?: number;
  /** The parent element */
  parent: JSX.Element;
};

const PositionInScreen: React.FC<Props> = ({
  visible,
  parent,
  withOverflow,
  hasWrapperWidth = false,
  offsetX = 0,
  offsetY = 0,
  children,
}) => {
  const wrapperRef = useRef(null);
  const itemRef = useRef(null);

  const [wrapperWidth] = useWrapperWidth(hasWrapperWidth, wrapperRef);
  const { x, y } = usePositionInScreen(wrapperRef, itemRef, offsetX, offsetY, visible);

  const showTooltip = visible && x !== -1 && y !== -1;

  return (
    <div css={container(withOverflow, showTooltip)} ref={wrapperRef}>
      {parent}
      {showTooltip && (
        <div css={itemContainer(x, y, wrapperWidth)} id={'unique-tooltip-id'} ref={itemRef}>
          {children}
        </div>
      )}
    </div>
  );
};

export default PositionInScreen;
