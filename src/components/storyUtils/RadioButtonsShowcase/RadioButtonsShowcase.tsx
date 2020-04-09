import Radio from 'components/Radio';
import React, { ReactEventHandler, useState } from 'react';

function RadioButtonsShowcase() {
  const [selectedValue, setSelectedValue] = useState('b');

  const handleChange: ReactEventHandler = event => {
    setSelectedValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <Radio checked={selectedValue === 'a'} value={'a'} onChange={handleChange} />
      <Radio checked={selectedValue === 'b'} value={'b'} onChange={handleChange} />
      <Radio checked={selectedValue === 'e'} value={'e'} onChange={handleChange} disabled />
      <Radio checked={true} value={'f'} onChange={handleChange} disabled />
    </div>
  );
}

export default RadioButtonsShowcase;
