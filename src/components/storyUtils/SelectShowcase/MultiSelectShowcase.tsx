import React, { useState } from 'react';

import Select from '../../Select';
import { SelectOption } from '../../Select/Select';
import { container, wrapper } from './MultiSelectShowcase.style';

type Props = {
  minCharactersToSearch?: number;
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

const SelectShowcase: React.FC<Props> = ({ minCharactersToSearch = 0 }) => {
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
    <div>
      <h4>Multiselect with simple Search</h4>
      <div css={container()}>
        <div css={wrapper()}>
          <Select
            multi
            label={'Multi Select'}
            options={options}
            selectedOptions={selectedOptions}
          />
        </div>
        <div css={wrapper()}>
          <Select
            multi
            label={'Multi Select - Locked'}
            options={options}
            selectedOptions={selectedOptions}
            locked
          />
        </div>
        <div css={wrapper()}>
          <Select
            multi
            label={'Multi Select - Disabled'}
            options={options}
            selectedOptions={selectedOptions}
            disabled
          />
        </div>
        <div css={wrapper()}>
          <Select
            multi
            label={'Multi Select - with Hint'}
            options={options}
            selectedOptions={selectedOptions}
            status={'hint'}
            hintMsg={'This is a hint message'}
          />
        </div>
        <div css={wrapper()}>
          <Select
            multi
            label={'Multi Select - with Error'}
            options={options}
            selectedOptions={selectedOptions}
            status={'error'}
            hintMsg={'This is an error message'}
          />
        </div>
        <div css={wrapper()}>
          <Select
            multi
            label={'Multi Select - with Right Icon'}
            options={options}
            selectedOptions={selectedOptions}
            rightIcon={'edit'}
          />
        </div>
      </div>
      <h4>Async Multiselect</h4>
      <div css={container()}>
        <div css={wrapper()}>
          <Select
            multi
            isAsync
            label={'Multi Select - Async Search'}
            options={asyncOptions}
            asyncSearch={mockedApiCall}
            isLoading={isLoading}
            onKeyPress={() => setIsLoading(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectShowcase;
