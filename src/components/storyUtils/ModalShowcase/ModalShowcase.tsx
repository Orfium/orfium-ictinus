/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import Button from '../../Button';
import { Props as ModalContentProps } from '../../Modal/ModalContent/ModalContent';

type Props = {
  fixedContent: boolean;
  contentProps?: ModalContentProps;
};

const ModalShowcase: React.FC<Props> = ({ children, fixedContent = false, contentProps }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Button onClick={() => setOpen(!open)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} fixedContent={fixedContent}>
        {children}
      </Modal>
    </div>
  );
};

export default ModalShowcase;
