import React, { useState } from 'react';

import Chip from '../../Chip';
import { ChipProps } from '../../Chip/Chip.types';

const ChipShowcase: React.FC<ChipProps> = ({ children, isChecked, ...props }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Chip
      {...props}
      isSelected={selected}
      isChecked={isChecked ? selected : false}
      onClick={() => setSelected(state => !state)}
    >
      {children}
    </Chip>
  );
};

export default ChipShowcase;
