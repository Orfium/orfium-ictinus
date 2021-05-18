import React, { useState } from 'react';
import Button from '../../Button';
import Modal from '../../Modal/Modal';
import { Props as ModalContentProps } from '../../Modal/ModalContent/ModalContent';

type Props = {
  contentProps?: ModalContentProps;
};

const ModalShowcase: React.FC<Props> = ({ children, contentProps }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Button onClick={() => setOpen(!open)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} contentProps={contentProps}>
        {contentProps ? null : children}
      </Modal>
      {/** empty div with height to test the body's overflow functionality when toggling the modal */}
      <div style={{ height: '1800px' }} />
    </div>
  );
};

export default ModalShowcase;
