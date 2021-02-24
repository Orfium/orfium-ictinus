/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from '@emotion/core';

import Select from '../../Select';
import { SelectOption } from '../../Select/Select';

export const dummyUnrefinedData = new Array(15).fill(undefined).map((value, index) => ({
  value: index,
  label: `Test option ${index}`,
}));

const SelectShowcase: React.FC = () => {
  const [options, setOptions] = useState<SelectOption[]>(dummyUnrefinedData);

  const mockedApiCall = (term: string) => {
    new Promise<SelectOption[]>(resolve =>
      setTimeout(() => resolve(dummyUnrefinedData), 1500)
    ).then(values => {
      const filteredValues = values.filter(option => option.label.includes(term));
      setOptions(filteredValues);
    });
  };

  return (
    <div style={{ width: '25%', height: '100%' }}>
      <Select
        isAsync
        label={'Flavour'}
        options={options}
        asyncSearch={mockedApiCall}
        styleType={'filled'}
      />
    </div>
  );
};

export default SelectShowcase;
