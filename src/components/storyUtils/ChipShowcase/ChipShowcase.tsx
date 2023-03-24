import React, { useState } from 'react';

import Chip from '../../Chip';
import { ChipProps } from '../../Chip/Chip.types';

const ChipShowcase: React.FC<ChipProps> = ({ children, isChecked, ...props }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Chip
      {...props}
      isSelected={isSelected}
      isChecked={isChecked ? isSelected : false}
      onClick={() => setIsSelected((hasState) => !hasState)}
    >
      {children}
    </Chip>
  );
};

export default ChipShowcase;
