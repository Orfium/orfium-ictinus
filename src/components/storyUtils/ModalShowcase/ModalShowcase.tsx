/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import Button from '../../Button';

const ModalShowcase: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Button onClick={() => setOpen(!open)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        test
      </Modal>
    </div>
  );
};

export default ModalShowcase;
