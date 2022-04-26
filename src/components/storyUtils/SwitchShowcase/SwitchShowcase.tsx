import React, { useState } from 'react';

import Switch from '../../Switch';

interface Props {
  hasLabel?: boolean;
  labelPlacement?: 'left' | 'right';
  isDisabled?: boolean;
}

const SwitchShowcase: React.FC<Props> = ({
  hasLabel = true,
  labelPlacement,
  isDisabled = false,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <Switch
      label={hasLabel ? 'Label showcase' : undefined}
      checked={isChecked}
      labelPlacement={labelPlacement}
      disabled={isDisabled}
      onChange={toggleSwitch}
    />
  );
};

export default SwitchShowcase;
