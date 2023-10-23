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

const EdgeCasesSelectShowcase: React.FCC = () => {
  return (
    <div css={showcaseContainer()}>
      <div style={{ width: 250 }}>
        <StatefulSelect
          label="Flavour"
          options={[
            ...options,
            {
              value: 'strawberry',
              label:
                '‘This is an example of a long list item. Avoid using very long list item names if possible. Using a very long list name will automatically truncate...’',
            },
          ]}
          selectedOption={defaultValue}
          onChange={handleSelectedOption}
        />
      </div>
      <StatefulSelect
        label="Flavour"
        options={options}
        selectedOption={defaultValue}
        onChange={handleSelectedOption}
      />
    </div>
  );
};

export default EdgeCasesSelectShowcase;
