import { css } from '@emotion/react';
import React, { useState } from 'react';
import { rem } from 'theme/utils';

import type { SelectOption } from '../../Select';
import Select from '../../Select';

export const dummyUnrefinedData = new Array(15).fill(undefined).map((__value, index) => ({
  value: index,
  label: `Test option ${index}`,
}));

type SelectShowcaseProps = {
  minCharactersToSearch?: number;
};

const SelectShowcase: React.FCC<SelectShowcaseProps> = ({ minCharactersToSearch = 0 }) => {
  const [selectedOption, setSelectedOption] = useState<SelectOption>();
  const [options, setOptions] = useState<SelectOption[]>(dummyUnrefinedData);
  const [isLoading, setIsLoading] = React.useState(false);

  const mockedApiCall = (term: string) => {
    new Promise<SelectOption[]>((resolve) => {
      setTimeout(() => {
        resolve(dummyUnrefinedData);
        setIsLoading(false);
      }, 1500);
    }).then((values) => {
      const filteredValues = values.filter((option) => option.label.includes(term));
      setOptions(filteredValues);
    });
  };

  return (
    <div
      css={css`
        width: 25%;
        height: ${rem(350)};
      `}
    >
      <Select
        isAsync
        label={'Select'}
        options={options}
        selectedOption={selectedOption}
        onChange={setSelectedOption}
        asyncSearch={mockedApiCall}
        isLoading={isLoading}
        onKeyPress={() => setIsLoading(true)}
        minCharactersToSearch={minCharactersToSearch}
      />
    </div>
  );
};

export default SelectShowcase;
