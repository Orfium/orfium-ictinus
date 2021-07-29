import React, { ReactEventHandler, useState } from 'react';

import Radio from 'components/Radio';

function RadioButtonsShowcase() {
  const [selectedValue, setSelectedValue] = useState('c');

  const handleChange: ReactEventHandler = event => {
    setSelectedValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <Radio checked={selectedValue === 'a'} value={'a'} onChange={handleChange} />
      <Radio checked={selectedValue === 'b'} value={'b'} onChange={handleChange} filled={false} />
      <Radio checked={selectedValue === 'c'} value={'c'} onChange={handleChange} />
      <Radio checked={selectedValue === 'd'} value={'d'} onChange={handleChange} disabled />
      <Radio
        checked={selectedValue === 'e'}
        value={'e'}
        onChange={handleChange}
        disabled
        filled={false}
      />
      <Radio checked={true} value={'g'} onChange={handleChange} disabled />
    </div>
  );
}

export default RadioButtonsShowcase;
