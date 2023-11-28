import React, { useState } from 'react';

import Button from '../../Button';
import Modal from '../../Modal/Modal';
import type { ModalContentProps } from '../../Modal/ModalContent/ModalContent';

type ModalShowcaseProps = {
  contentProps?: ModalContentProps;
};

const ModalShowcase: React.FCC<ModalShowcaseProps> = ({ children, contentProps }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Button onClick={() => setIsOpen(!isOpen)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} contentProps={contentProps}>
        {contentProps ? null : children}
      </Modal>
      {/** empty div with height to test the body's overflow functionality when toggling the modal */}
      <div style={{ height: '1800px' }} />
    </div>
  );
};

export default ModalShowcase;
