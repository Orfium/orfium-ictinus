import React from 'react';

import { showcaseContainer } from './EdgeCasesSelectShowcase.style';
import { StatefulSelect } from 'components/Select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'banana', label: 'Banana' },
  { value: 'citrus', label: 'Citrus' },
  { value: 'vanilla', label: 'Vanilla', isDisabled: true },
];
const defaultValue = options[0];
const handleSelectedOption = (selectedOption: any) => {
  console.log('On option change', selectedOption);
};

const EdgeCasesSelectShowcase: React.FC = () => {
  return (
    <div css={showcaseContainer()}>
      <div style={{ width: 250 }}>
        <StatefulSelect
          label={'Flavour'}
          options={[
            ...options,
            {
              value: 'strawberry',
              label:
                'Strawberry Strawberry Strawberry Strawberry Strawberry Strawberry Strawberry Strawberry Strawberry Strawberry Strawberry Strawberry Strawberry Strawberry Strawberry',
            },
          ]}
          selectedOption={defaultValue}
          onChange={handleSelectedOption}
        />
      </div>
      <StatefulSelect
        label={'Flavour'}
        options={options}
        selectedOption={defaultValue}
        onChange={handleSelectedOption}
      />

      <div style={{ width: 100 }}>
        <StatefulSelect
          label={'Flavour'}
          options={options}
          selectedOption={defaultValue}
          onChange={handleSelectedOption}
        />
      </div>
      <div style={{ width: 400, position: 'absolute', bottom: '15%' }}>
        <StatefulSelect
          label={'Bottom positioned case'}
          options={options}
          selectedOption={defaultValue}
          onChange={handleSelectedOption}
        />
      </div>
    </div>
  );
};

export default EdgeCasesSelectShowcase;
