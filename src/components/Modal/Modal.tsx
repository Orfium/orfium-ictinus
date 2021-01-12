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
  /** If true, modal will use default ModalContent and contentProps should be ModalContentProps. Defaults to false */
  fixedContent?: boolean;
  /** If fixedContent is true, contentProps should be ModalContentProps. Other wise it can be undefined  */
  contentProps?: ModalContentProps;
  /** The data test id if needed */
  dataTestId?: TestId;
};

const Modal: React.FC<Props> = ({
  open = false,
  onClose,
  dataTestId,
  children,
  fixedContent = false,
  contentProps,
}) => {
  if (fixedContent && !contentProps) {
    throw Error(
      `When fixedContent is true contentProps should be ModalContentProps but you passed ${JSON.stringify(
        contentProps
      )}.`
    );
  }
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
                  size={'sm'}
                  onClick={onClose}
                  dataTestId={'modal-close'}
                />
              </div>
              {fixedContent && contentProps ? <ModalContent {...contentProps} /> : children}
            </div>
          </Card>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default Modal;
