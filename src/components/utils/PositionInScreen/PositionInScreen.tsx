import { CSSObject } from '@emotion/serialize';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ReactFCC } from 'utils/types';

import { useWrapperWidth, usePositionInScreen } from './hooks';
import { container, itemContainer } from './PositionInScreen.style';
import ClickAwayListener from '../../utils/ClickAwayListener';

type Props = {
  /** Whether the item to be positioned is visible */
  visible: boolean;
  /** Function to set the visibility of the item */
  setIsVisible: (visible: boolean) => void;
  /** Configures the container's overflow */
  withOverflow?: boolean;
  /** Whether the item to be positioned uses the parent's wrapper width */
  hasWrapperWidth?: boolean;
  /** Additional offset-x */
  offsetX?: number;
  /** Additional offset-y */
  offsetY?: number;
  /** The parent element */
  parent: React.ReactElement; // This is not really a parent, more of a trigger
  /** Sx prop to override specific properties */
  sx?: {
    container?: CSSObject;
    itemContainer?: CSSObject;
  };
};

const PositionInScreen: ReactFCC<Props> = ({
  visible,
  setIsVisible,
  parent,
  withOverflow,
  hasWrapperWidth = false,
  offsetX = 0,
  offsetY = 0,
  sx,
  children,
}) => {
  const [wrapperRef, setWrapperRef] = useState<HTMLDivElement | null>(null);
  const [itemRef, setItemRef] = useState<HTMLDivElement | null>(null);

  const [wrapperWidth] = useWrapperWidth(hasWrapperWidth, wrapperRef);
  const { x, y } = usePositionInScreen(wrapperRef, itemRef, offsetX, offsetY, visible);

  const showTooltip = visible && x !== -1 && y !== -1;

  return (
    <div
      css={container(withOverflow, sx)}
      ref={(ref) => {
        setWrapperRef(ref);
      }}
    >
      {parent}
      {createPortal(
        <ClickAwayListener onClick={() => setIsVisible(false)}>
          <div
            css={itemContainer(x, y, showTooltip, wrapperWidth, sx)}
            className={'unique-tooltip-id'}
            ref={(ref) => {
              setItemRef(ref);
            }}
          >
            {children}
          </div>
        </ClickAwayListener>,
        document.body
      )}
    </div>
  );
};

export default PositionInScreen;
