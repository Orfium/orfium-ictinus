import React, { useState } from 'react';

import Switch from '../../Switch';

interface Props {
  hasLabel?: boolean;
  labelPlacement?: 'left' | 'right';
}

const SwitchShowcase: React.FC<Props> = ({ hasLabel = true, labelPlacement }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <Switch
      label={hasLabel ? 'Label showcase' : undefined}
      checked={isChecked}
      labelPlacement={labelPlacement}
      onChange={toggleSwitch}
    />
  );
};

export default SwitchShowcase;
