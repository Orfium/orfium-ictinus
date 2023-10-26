import React, { useState } from 'react';

import { container, wrapper } from './MultiSelectShowcase.style';
import Select, { SelectOption, SelectProps } from '../../Select';

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

export const dummyUndefinedData = new Array(15).fill(undefined).map((__, index) => ({
  value: index,
  label: `Test option ${index}`,
}));

const SelectShowcase: React.FCC<
  Pick<SelectProps, 'isDisabled' | 'hasSelectAllOption' | 'isCreatable' | 'status'>
> = ({ isDisabled = false, hasSelectAllOption = false, isCreatable = false, status }) => {
  const [asyncOptions, setAsyncOptions] = useState<SelectOption[]>(dummyUndefinedData);
  const [isLoading, setIsLoading] = React.useState(false);
  const [value, setValue] = React.useState<SelectOption[]>(selectedOptions);
  const [value2, setValue2] = React.useState<SelectOption[]>();

  const mockedApiCall = (term: string) => {
    new Promise<SelectOption[]>((resolve) => {
      setTimeout(() => {
        resolve(dummyUndefinedData);
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
          selectedOption={value}
          onChange={setValue}
          isDisabled={isDisabled}
          hasSelectAllOption={hasSelectAllOption}
          status={status}
          isCreatable={isCreatable}
        />
      </div>
      <div css={wrapper()}>
        <Select
          isMulti
          isAsync
          status={status}
          label={'Multi Select - Async'}
          options={asyncOptions}
          asyncSearch={mockedApiCall}
          isLoading={isLoading}
          onKeyPress={() => setIsLoading(true)}
          isDisabled={isDisabled}
          hasSelectAllOption={hasSelectAllOption}
          isCreatable={isCreatable}
          selectedOption={value2}
          onChange={setValue2}
        />
      </div>
    </div>
  );
};

export default SelectShowcase;
