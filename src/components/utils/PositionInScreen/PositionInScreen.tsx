import type { CSSObject } from '@emotion/serialize';
import React, { useRef } from 'react';
import { Overlay } from '~/components/utils/Overlay';
import { container } from './PositionInScreen.style';

export type PositionInScreenProps = {
  id?: string;
  /** Whether the item to be positioned is visible */
  isVisible: boolean;
  /** Function to set the visibility of the item */
  setIsVisible: (visible: boolean) => void;
  /** Configures the container's overflow */
  isOverflowAllowed?: boolean;
  /** Whether the overlay is able to interact outside */
  isNonModal?: boolean;
  /** Whether the item to be positioned uses the parent's wrapper width */
  hasWrapperWidth?: boolean;
  /** Additional offset-x */
  offsetX?: number;
  /** Additional offset-y */
  offsetY?: number;
  /** The parent element */
  parent: JSX.Element;
  placement?: 'top' | 'bottom';
  /** Sx prop to override specific properties */
  sx?: {
    container?: CSSObject;
    itemContainer?: CSSObject;
  };
};

export const PositionInScreen: React.FCC<PositionInScreenProps> = ({
  id = 'unique-tooltip-id',
  isVisible,
  setIsVisible,
  isNonModal = false,
  parent,
  isOverflowAllowed,
  hasWrapperWidth = false,
  offsetX = 0,
  offsetY = 0,
  sx,
  children,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={triggerRef} css={container(isOverflowAllowed, isVisible, sx)}>
        {parent}
      </div>
      <Overlay
        id={id}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        triggerRef={triggerRef}
        offsetX={offsetX}
        offsetY={offsetY}
        isNonModal={isNonModal}
        hasWrapperWidth={hasWrapperWidth}
      >
        {children}
      </Overlay>
    </>
  );
};
