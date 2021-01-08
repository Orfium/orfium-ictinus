/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { TestId } from '../../utils/types';
import { backgroundContainer, cardSizing, closeContainer, modalContainer } from './Modal.style';
import { generateTestDataId } from '../../utils/helpers';
import Card from '../Card';
import IconButton from '../IconButton';
import ClickAwayListener from '../utils/ClickAwayListener';

export type Props = {
  /**  If true, the modal is open. Defaults to false. */
  open: boolean;
  /** Callback fired when the component requests to be closed. */
  onClose: () => void;
  /** The data test id if needed */
  dataTestId?: TestId;
};

const Modal: React.FC<Props> = ({ open = false, onClose, dataTestId, children }) => {
  if (!open) return null;

  return (
    <div
      css={backgroundContainer()}
      data-testid={generateTestDataId('modal-container', dataTestId)}
    >
      <ClickAwayListener onClick={onClose}>
        <div css={cardSizing()}>
          <Card elevated={'02'}>
            <div css={modalContainer()}>
              <div css={closeContainer()}>
                <IconButton
                  name={'close'}
                  filled={false}
                  size={'sm'}
                  onClick={onClose}
                  dataTestId={'modal-close'}
                />
              </div>
              {children}
            </div>
          </Card>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default Modal;
