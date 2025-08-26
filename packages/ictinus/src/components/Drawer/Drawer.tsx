import type { RefObject } from 'react';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDOMRef } from '~/components/utils/useDOMRef';
import useEscape from '~/hooks/useEscape';
import { useOverlayStack } from '~/hooks/useOverlayStack';
import { anchorStyle, backdropStyle, overlayStyle } from './Drawer.style';
import type { DrawerProps } from './Drawer.types';
import { DrawerContextProvider } from './DrawerContext';

const Drawer = React.forwardRef<HTMLDivElement, React.PropsWithChildren<DrawerProps>>(
  (
    {
      isOpen,
      onClose,
      anchor,
      size = 'auto',
      isBackgroundActive = false,
      dataTestPrefixId = 'ictinus_drawer',
      hasFixedLayout = false,
      parent = document.body,
      children,
    },
    ref: RefObject<HTMLDivElement>
  ) => {
    const overlayRef = useDOMRef(ref);

    const { overlayProps } = useOverlayStack({
      isVisible: isOpen,
      isNonModal: false,
      overlayRef,
      onClose: () => {
        if (!isBackgroundActive) {
          onClose();
        }
      },
    });

    useEscape(() => {
      if (!isBackgroundActive) {
        onClose();
      }
    });

    useEffect(() => {
      if (isOpen) {
        parent.style.overflow = 'hidden';
      } else {
        parent.style.overflow = '';
      }
    }, [isOpen, parent.style]);

    if (parent === null) {
      return null;
    }

    return ReactDOM.createPortal(
      <DrawerContextProvider hasFixedLayout={hasFixedLayout} onClose={onClose}>
        <div css={backdropStyle({ isOpen, anchor, size, isBackgroundActive })}>
          <div css={anchorStyle({ anchor, size, isBackgroundActive })}>
            <div
              {...overlayProps}
              ref={overlayRef}
              css={overlayStyle({ isOpen, anchor, hasFixedLayout })}
              data-testid={`${dataTestPrefixId}_drawer_container`}
              tabIndex={-1}
            >
              {children}
            </div>
          </div>
        </div>
      </DrawerContextProvider>,
      parent
    );
  }
);

Drawer.displayName = 'Drawer';

export default Drawer;
