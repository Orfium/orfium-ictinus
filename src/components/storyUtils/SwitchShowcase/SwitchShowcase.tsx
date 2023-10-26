import React, { useState } from 'react';

import Switch from '../../Switch';

interface Props {
  hasLabel?: boolean;
  label?: string;
  labelPlacement?: 'left' | 'right';
  isDisabled?: boolean;
}

const SwitchShowcase: React.FCC<Props> = ({
  hasLabel = true,
  label = 'Label showcase text',
  labelPlacement,
  isDisabled = false,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked((isChecked) => !isChecked);
  };

  return (
    <Switch
      label={hasLabel ? label : undefined}
      isChecked={isChecked}
      labelPlacement={labelPlacement}
      isDisabled={isDisabled}
      onChange={toggleSwitch}
    />
  );
};

export default SwitchShowcase;
