import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import Select from './Select';
import { render, selectDropdownOption, screen } from '../../test';

describe('Generic Select', () => {
  let selectInput: HTMLInputElement;
  const dropdownList = [
    { label: 'Greece', value: 'GR' },
    { label: 'Zimbabwe', value: 'ZW' },
  ];

  test('Generic Select that changes the value correctly', async () => {
    render(
      <div>
        <Select label={'Country'} options={dropdownList} styleType={'filled'} />
      </div>
    );
    selectInput = screen.getByPlaceholderText('Country') as HTMLInputElement;
    await selectDropdownOption(selectInput, dropdownList[1].label);
    expect(selectInput.value).toBe(dropdownList[1].label);
  });

  test('Generic Select passes the selected values on parent', async () => {
    const handleSubmit = jest.fn();

    render(
      <div>
        <Select
          label={'Country'}
          options={dropdownList}
          styleType={'filled'}
          handleSelectedOption={handleSubmit}
        />
      </div>
    );
    selectInput = screen.getByPlaceholderText('Country') as HTMLInputElement;
    await selectDropdownOption(selectInput, dropdownList[1].label);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
