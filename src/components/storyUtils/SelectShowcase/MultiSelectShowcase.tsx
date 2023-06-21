import React, { useState } from 'react';

import { container, wrapper } from './MultiSelectShowcase.style';
import Select from '../../Select';
import { SelectOption } from '../../Select/Select';

type Props = {
  isDisabled?: boolean;
  hasSelectAllOption?: boolean;
  isCreatable?: boolean;
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'banana', label: 'Banana' },
  { value: 'citrus', label: 'Citrus' },
  { value: 'sorbet', label: 'Sorbet' },
  { value: 'caramel', label: 'Caramel' },
  { value: 'cookie_dough', label: 'Cookie Dough' },
  { value: 'buttered_pecan', label: 'Buttered Pecan' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'garlic', label: 'Garlic', isDisabled: true },
];

const selectedOptions = [
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'banana', label: 'Banana' },
  { value: 'citrus', label: 'Citrus' },
  { value: 'sorbet', label: 'Sorbet' },
  { value: 'cookie_dough', label: 'Cookie Dough' },
  { value: 'buttered_pecan', label: 'Buttered Pecan' },
];

export const dummyUnrefinedData = new Array(15).fill(undefined).map((__, index) => ({
  value: index,
  label: `Test option ${index}`,
}));

const SelectShowcase: React.FC<Props> = ({
  isDisabled = false,
  hasSelectAllOption = false,
  isCreatable = false,
}) => {
  const [asyncOptions, setAsyncOptions] = useState<SelectOption[]>(dummyUnrefinedData);
  const [isLoading, setIsLoading] = React.useState(false);

  const mockedApiCall = (term: string) => {
    new Promise<SelectOption[]>((resolve) => {
      setTimeout(() => {
        resolve(dummyUnrefinedData);
        setIsLoading(false);
      }, 1500);
    }).then((values) => {
      const filteredValues = values.filter((option) => option.label.includes(term));
      setAsyncOptions(filteredValues);
    });
  };

  return (
    <div css={container()}>
      <div css={wrapper()}>
        <Select
          isMulti
          label={'Multi Select'}
          options={options}
          selectedOptions={selectedOptions}
          isDisabled={isDisabled}
          hasSelectAllOption={hasSelectAllOption}
          isCreatable={isCreatable}
        />
      </div>
      <div css={wrapper()}>
        <Select
          isMulti
          isAsync
          label={'Multi Select - Async'}
          options={asyncOptions}
          asyncSearch={mockedApiCall}
          isLoading={isLoading}
          onKeyPress={() => setIsLoading(true)}
          isDisabled={isDisabled}
          hasSelectAllOption={hasSelectAllOption}
          isCreatable={isCreatable}
        />
      </div>
    </div>
  );
};

export default SelectShowcase;
