import useEscape from 'hooks/useEscape';
import React, { useMemo } from 'react';

import { anchorStyle, backdropStyle, overlayStyle } from './Drawer.style';
import type { DrawerProps } from './Drawer.types';
import { DrawerContext } from './DrawerContext';
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
      children,
    },
    ref
  ) => {
    useEscape(() => {
      if (!isBackgroundActive) {
        onClose();
      }
    });

    const contextValue = useMemo(() => ({ hasFixedLayout, onClose }), []);

    return (
      <DrawerContext.Provider value={contextValue}>
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
      </DrawerContext.Provider>
    );
  }
);

Drawer.displayName = 'Drawer';

export default Drawer;
