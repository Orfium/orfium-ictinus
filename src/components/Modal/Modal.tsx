import { rem, useTheme } from 'index';
import React, { useEffect } from 'react';
import { generateTestDataId } from 'utils/helpers';
import type { TestId } from 'utils/types';

import { backgroundContainer, cardSizing, closeContainer, modalContainer } from './Modal.style';
import type { ModalContentProps } from './ModalContent/ModalContent';
import ModalContent from './ModalContent/ModalContent';
import useEscape from '../../hooks/useEscape';
import Card from '../Card';
import IconButton from '../IconButton';
import ClickAwayListener from '../utils/ClickAwayListener';

export type ModalProps = {
  /**  If true, the modal is open. Defaults to false. */
  isOpen: boolean;
  /** Callback fired when the component requests to be closed. */
  onClose: () => void;
  /** If contentProps are defined then ModalContent will be used instead of children. Otherwise, you can use the Modal as a wrapper  */
  contentProps?: ModalContentProps;
  /** The data test id if needed */
  dataTestId?: TestId;
  /** If false, the content won't have any padding */
  isContentPadded?: boolean;
  /** Optional max width */
  maxWidth?: string;
  /** Optional max height */
  maxHeight?: string;
};

const Modal: React.FCC<ModalProps> = ({
  isOpen = false,
  onClose,
  dataTestId,
  children,
  contentProps,
  isContentPadded = true,
  maxWidth = `${rem(500)}`,
  maxHeight = `${rem(684)}`,
}) => {
  useEscape(() => {
    onClose();
  });

  const theme = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div css={backgroundContainer} data-testid={generateTestDataId('modal-container', dataTestId)}>
      <ClickAwayListener onClick={onClose}>
        <div css={cardSizing(maxWidth, maxHeight)}>
          <Card elevated="02" radius="3">
            <div css={closeContainer}>
              <IconButton
                type="tertiary"
                iconName="close"
                onClick={onClose}
                color={theme.tokens.colors.get('textColor.default.secondary')}
                dataTestId="modal-close"
              />
            </div>
            <div css={modalContainer({ isContentPadded })}>
              {contentProps ? <ModalContent {...contentProps} /> : children}
            </div>
          </Card>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default Modal;
