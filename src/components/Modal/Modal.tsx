import React, { useEffect } from 'react';

import useEscape from '../../hooks/useEscape';
import { generateTestDataId } from '../../utils/helpers';
import { TestId } from '../../utils/types';
import Card from '../Card';
import IconButton from '../IconButton';
import ClickAwayListener from '../utils/ClickAwayListener';
import { backgroundContainer, cardSizing, closeContainer, modalContainer } from './Modal.style';
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
  /**  If true, the modal will close also with esc button. Defaults to true. */
  closeOnEsc?: boolean;
};

const Modal: React.FC<Props> = ({ open = false, onClose, dataTestId, children, contentProps, closeOnEsc= true }) => {
  useEscape(() => {
    if (closeOnEsc) {
      onClose();
    }
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div css={backgroundContainer} data-testid={generateTestDataId('modal-container', dataTestId)}>
      <ClickAwayListener onClick={onClose}>
        <div css={cardSizing}>
          <Card elevated={'02'} radius={'xsm'}>
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
            <div css={modalContainer}>
              {contentProps ? <ModalContent {...contentProps} /> : children}
            </div>
          </Card>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default Modal;
