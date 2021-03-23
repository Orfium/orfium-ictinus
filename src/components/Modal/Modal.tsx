/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { TestId } from '../../utils/types';
import { backgroundContainer, cardSizing, closeContainer, modalContainer } from './Modal.style';
import { generateTestDataId } from '../../utils/helpers';
import Card from '../Card';
import IconButton from '../IconButton';
import ClickAwayListener from '../utils/ClickAwayListener';
import ModalContent, { Props as ModalContentProps } from './ModalContent/ModalContent';

export type Props = {
  /**  If true, the modal is open. Defaults to false. */
  open: boolean;
  /** Callback fired when the component requests to be closed. */
  onClose: () => void;
  /** If contentProps are defined then ModalContent will be used instead of children. Otherwise, you can use the Modal as a wrapper  */
  contentProps?: ModalContentProps;
  /** The data test id if needed */
  dataTestId?: TestId;
};

const Modal: React.FC<Props> = ({ open = false, onClose, dataTestId, children, contentProps }) => {
  if (!open) return null;

  return (
    <div css={backgroundContainer} data-testid={generateTestDataId('modal-container', dataTestId)}>
      <ClickAwayListener onClick={onClose}>
        <div css={cardSizing}>
          <Card elevated={'02'}>
            <div css={modalContainer}>
              <div css={closeContainer}>
                <IconButton
                  name={'close'}
                  filled={false}
                  transparent
                  size={'sm'}
                  onClick={onClose}
                  dataTestId={'modal-close'}
                />
              </div>
              {contentProps ? <ModalContent {...contentProps} /> : children}
            </div>
          </Card>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default Modal;
