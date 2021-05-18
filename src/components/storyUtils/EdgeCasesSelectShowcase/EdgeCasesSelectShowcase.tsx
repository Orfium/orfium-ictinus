import Select from 'components/Select';
import React from 'react';

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
    <React.Fragment>
      <div style={{ width: 250 }}>
        <Select
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
          handleSelectedOption={handleSelectedOption}
          styleType={'filled'}
        />
      </div>
      <Select
        label={'Flavour'}
        options={options}
        selectedOption={defaultValue}
        handleSelectedOption={handleSelectedOption}
        styleType={'filled'}
      />

      <div style={{ width: 100 }}>
        <Select
          label={'Flavour'}
          options={options}
          selectedOption={defaultValue}
          handleSelectedOption={handleSelectedOption}
          styleType={'filled'}
        />
      </div>
    </React.Fragment>
  );
};

export default EdgeCasesSelectShowcase;
