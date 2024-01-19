import useEscape from 'hooks/useEscape';
import React from 'react';

import {
  anchorStyle,
  backdropStyle,
  closeIconContainer,
  footerStyle,
  headerStyle,
  overlayStyle,
} from './Drawer.style';
import type { DrawerProps } from './Drawer.types';
import Icon from 'components/Icon';
import ClickAwayListener from 'components/utils/ClickAwayListener';

const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    { isOpen, onClose, anchor, size, content, isBackgroundActive = false, hasCloseButton = true },
    ref
  ) => {
    useEscape(() => {
      if (!isBackgroundActive) {
        onClose();
      }
    });

    const hasStickyHeader = content?.header?.isSticky;

    const header = content?.header?.content && (
      <div css={headerStyle({ isSticky: hasStickyHeader })}>
        {content?.header?.content}
        {hasCloseButton && (
          <div css={closeIconContainer()}>
            <Icon name="close" onClick={onClose} dataTestId="overlay-close" />
          </div>
        )}
      </div>
    );

    const hasStickyFooter = content?.footer?.isSticky;

    const footer = content?.footer?.content && (
      <div css={footerStyle({ isSticky: hasStickyFooter })}>{content?.footer?.content}</div>
    );

    return (
      <div css={backdropStyle({ isOpen, anchor, size, isBackgroundActive })}>
        <ClickAwayListener
          onClick={() => {
            if (!isBackgroundActive) {
              onClose();
            }
          }}
          cssStyles={anchorStyle({ anchor, size, isBackgroundActive })}
        >
          <div ref={ref} css={overlayStyle({ isOpen, anchor })}>
            {/** Sticky Header */}
            {hasStickyHeader && header}

            {/** Main scrollable area */}
            <div
              css={{
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              {!hasStickyHeader && header}
              <div css={{ flex: 1 }}>{content?.body?.content}</div>
              {!hasStickyFooter && footer}
            </div>

            {/** Sticky Footer */}
            {hasStickyFooter && footer}
          </div>
        </ClickAwayListener>
      </div>
    );
  }
);

Drawer.displayName = 'Drawer';

export default Drawer;
