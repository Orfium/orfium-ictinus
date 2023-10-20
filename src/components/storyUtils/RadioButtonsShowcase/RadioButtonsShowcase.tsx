import type { ReactEventHandler} from 'react';
import React, { useState } from 'react';

import Radio from 'components/Radio';

function RadioButtonsShowcase() {
  const [selectedValue, setSelectedValue] = useState('c');

  const handleChange: ReactEventHandler = (event) => {
    setSelectedValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <Radio isChecked={selectedValue === 'a'} value={'a'} onChange={handleChange} />
      <Radio
        isChecked={selectedValue === 'b'}
        value={'b'}
        onChange={handleChange}
        isFilled={false}
      />
      <Radio isChecked={selectedValue === 'c'} value={'c'} onChange={handleChange} />
      <Radio isChecked={selectedValue === 'd'} value={'d'} onChange={handleChange} isDisabled />
      <Radio
        isChecked={selectedValue === 'e'}
        value={'e'}
        onChange={handleChange}
        isDisabled
        isFilled={false}
      />
      <Radio isChecked={true} value={'g'} onChange={handleChange} isDisabled />
    </div>
  );
}

export default RadioButtonsShowcase;
