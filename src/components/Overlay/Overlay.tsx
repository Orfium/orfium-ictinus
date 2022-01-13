import React from 'react';
import { DivProps } from 'utils/common';
import { TestId } from 'utils/types';

import { BackdropStyle, closeIconContainer, contentStyle, OverlayStyle } from './Overlay.style';
import IconButton from 'components/IconButton';
import ClickAwayListener from 'components/utils/ClickAwayListener';

export type Props = {
  /**  If true, the modal is open. Defaults to false. */
  open: boolean;
  /** Callback fired when the component requests to be closed. */
  onClose: () => void;
  anchor: 'bottom' | 'left' | 'right' | 'top';
  size: string;
  /** The data test id if needed */
  dataTestId?: TestId;
};

const getAnchorStyle = ({ anchor, size }: { anchor: any; size: any }) => {
  return anchor === 'top' || anchor === 'bottom'
    ? { display: 'flex', height: size, width: '100%' }
    : { display: 'flex', height: '100%', width: size };
};

const Overlay = React.forwardRef<HTMLDivElement, Props & DivProps>(
  ({ open, onClose, anchor = 'top', size = '50%', children }, ref) => {
    console.log({ open });

    return open ? (
      <div css={BackdropStyle({ anchor })}>
        <ClickAwayListener onClick={() => onClose()} cssStyles={getAnchorStyle({ anchor, size })}>
          <div ref={ref} css={OverlayStyle()}>
            <div css={closeIconContainer()}>
              <IconButton
                name={'close'}
                filled={false}
                transparent
                color={'lightGrey-650'}
                size={'sm'}
                onClick={onClose}
                dataTestId={'overlay-close'}
              />
            </div>
            <div css={contentStyle()}>{children}</div>
          </div>
        </ClickAwayListener>
      </div>
    ) : null;
  }
);

Overlay.displayName = 'Overlay';

export default Overlay;
