import useEscape from 'hooks/useEscape';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { anchorStyle, backdropStyle, overlayStyle } from './Drawer.style';
import type { DrawerProps } from './Drawer.types';
import { DrawerContextProvider } from './DrawerContext';
import ClickAwayListener from 'components/utils/ClickAwayListener';

const Drawer = React.forwardRef<HTMLDivElement, React.PropsWithChildren<DrawerProps>>(
  (
    {
      isOpen,
      onClose,
      anchor,
      size,
      isBackgroundActive = false,
      dataTestPrefixId = 'ictinus_drawer',
      hasFixedLayout = false,
      parent = document.body,
      children,
    },
    ref
  ) => {
    useEscape(() => {
      if (!isBackgroundActive) {
        onClose();
      }
    });

    useEffect(() => {
      if (isOpen) {
        parent.style.overflow = 'hidden';
      } else {
        parent.style.overflow = 'unset';
      }
    }, [isOpen, parent.style]);

    if (parent === null) {
      return null;
    }

    return ReactDOM.createPortal(
      <DrawerContextProvider hasFixedLayout={hasFixedLayout} onClose={onClose}>
        <div css={backdropStyle({ isOpen, anchor, size, isBackgroundActive })}>
          <ClickAwayListener
            onClick={() => {
              if (!isBackgroundActive) {
                onClose();
              }
            }}
            cssStyles={anchorStyle({ anchor, size, isBackgroundActive })}
          >
            <div
              ref={ref}
              css={overlayStyle({ isOpen, anchor, hasFixedLayout })}
              data-testid={`${dataTestPrefixId}_drawer_container`}
            >
              {children}
            </div>
          </ClickAwayListener>
        </div>
      </DrawerContextProvider>,
      parent
    );
  }
);

Drawer.displayName = 'Drawer';

export default Drawer;
