import useEscape from 'hooks/useEscape';
import React from 'react';
import { DivProps } from 'utils/common';
import { generateTestDataId } from 'utils/helpers';
import { TestId } from 'utils/types';

import { BackdropStyle, closeIconContainer, contentStyle, OverlayStyle } from './Overlay.style';
import IconButton from 'components/IconButton';
import ClickAwayListener from 'components/utils/ClickAwayListener';

export type AnchorType = 'bottom' | 'left' | 'right' | 'top';

export type Props = {
  /**  If true, the overlay is open.*/
  open: boolean;
  /** Callback fired when the component requests to be closed. */
  onClose: () => void;
  /** Side from which the overlay will appear. */
  anchor: AnchorType;
  /**Based on the anchor, defines the size of the overlay as a percentage of the screens's size. */
  size: number;
  /** The data test id if needed */
  dataTestId?: TestId;
};

const getAnchorStyle = ({ anchor, size }: { anchor: AnchorType; size: number }) => {
  return anchor === 'top' || anchor === 'bottom'
    ? { display: 'flex', height: `${size}%`, width: '100%' }
    : { display: 'flex', height: '100%', width: `${size}%` };
};

const Overlay = React.forwardRef<HTMLDivElement, Props & DivProps>(
  ({ open, onClose, anchor = 'left', size = 33, dataTestId, children }, ref) => {
    useEscape(() => {
      onClose();
    });

    return (
      <div
        css={BackdropStyle({ open, anchor })}
        data-testid={generateTestDataId('overlay-container', dataTestId)}
      >
        <ClickAwayListener onClick={() => onClose()} cssStyles={getAnchorStyle({ anchor, size })}>
          <div ref={ref} css={OverlayStyle({ open, anchor })}>
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
    );
  }
);

Overlay.displayName = 'Overlay';

export default Overlay;
