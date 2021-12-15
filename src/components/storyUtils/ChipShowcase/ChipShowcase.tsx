import React, { useState } from 'react';

import Chip from '../../Chip';
import { Props } from '../../Chip/Chip';

const ChipShowcase: React.FC<Props> = ({ children, isChecked, ...props }) => {
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
