import React, { useState } from 'react';

import Button from '../../Button';
import Overlay from '../../Overlay';

const OverlayShowcase: React.FC = ({ anchor, size }: any) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Open Overlay</Button>
      <Overlay
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        size={size}
        anchor={anchor}
      >
        <div
          style={{ display: 'flex', width: '100%', height: '100%', backgroundColor: 'lightgray' }}
        />
      </Overlay>
    </div>
  );
};

export default OverlayShowcase;
