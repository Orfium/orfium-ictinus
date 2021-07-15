import { css } from '@emotion/react';
import React, { useState } from 'react';

import Select from '../../Select';
import { SelectOption } from '../../Select/Select';

export const dummyUnrefinedData = new Array(15).fill(undefined).map((value, index) => ({
  value: index,
  label: `Test option ${index}`,
}));

type Props = {
  minCharactersToSearch?: number;
};

const SelectShowcase: React.FC<Props> = ({ minCharactersToSearch = 0 }) => {
  const [options, setOptions] = useState<SelectOption[]>(dummyUnrefinedData);
  const [isLoading, setIsLoading] = React.useState(false);

  const mockedApiCall = (term: string) => {
    new Promise<SelectOption[]>(resolve => {
      setTimeout(() => {
        resolve(dummyUnrefinedData);
        setIsLoading(false);
      }, 1500);
    }).then(values => {
      const filteredValues = values.filter(option => option.label.includes(term));
      setOptions(filteredValues);
    });
  };

  return (
    <div
      css={css`
        width: 25%;
        height: 100%;
      `}
    >
      <Select
        isAsync
        label={'Flavour'}
        options={options}
        asyncSearch={mockedApiCall}
        isLoading={isLoading}
        onKeyPress={() => setIsLoading(true)}
        styleType={'filled'}
        minCharactersToSearch={minCharactersToSearch}
      />
    </div>
  );
};

export default SelectShowcase;
