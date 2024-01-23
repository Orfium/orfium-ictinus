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
    {
      isOpen,
      onClose,
      anchor,
      size,
      content,
      isBackgroundActive = false,
      hasCloseButton = true,
      dataTestPrefixId = 'ictinus_drawer',
    },
    ref
  ) => {
    useEscape(() => {
      if (!isBackgroundActive) {
        onClose();
      }
    });

    const hasFixedHeader = content?.header?.isFixed;

    const header = content?.header?.content && (
      <div
        css={headerStyle({ isFixed: hasFixedHeader })}
        data-testid={`${dataTestPrefixId}_drawer_header`}
      >
        {content?.header?.content}
        {hasCloseButton && (
          <div css={closeIconContainer()}>
            <Icon
              name="close"
              onClick={onClose}
              dataTestId={`${dataTestPrefixId}_drawer_close_button`}
            />
          </div>
        )}
      </div>
    );

    const hasFixedFooter = content?.footer?.isFixed;

    const footer = content?.footer?.content && (
      <div
        css={footerStyle({ isFixed: hasFixedFooter })}
        data-testid={`${dataTestPrefixId}_drawer_footer`}
      >
        {content?.footer?.content}
      </div>
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
          <div
            ref={ref}
            css={overlayStyle({ isOpen, anchor })}
            data-testid={`${dataTestPrefixId}_drawer_container`}
          >
            {/** Fixed Header */}
            {hasFixedHeader && header}

            {/** Main scrollable area */}
            <div
              css={{
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              {!hasFixedHeader && header}
              <div css={{ flex: 1 }} data-testid={`${dataTestPrefixId}_drawer_body`}>
                {content?.body?.content}
              </div>
              {!hasFixedFooter && footer}
            </div>

            {/** Fixed Footer */}
            {hasFixedFooter && footer}
          </div>
        </ClickAwayListener>
      </div>
    );
  }
);

Drawer.displayName = 'Drawer';

export default Drawer;
