import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import { render, screen, selectDropdownOption, waitFor } from '../../test';
import Select from './Select';

const dropdownList = [
  { label: 'Greece', value: 'GR' },
  { label: 'Zimbabwe', value: 'ZW' },
];

describe('Generic Select', () => {
  describe('Sync Select', () => {
    const handleSubmit = jest.fn();

    let selectInput: HTMLInputElement;

    beforeEach(() => {
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
    });

    beforeEach(() => {
      selectInput = screen.getByPlaceholderText('Country') as HTMLInputElement;
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should change the input value correctly', async () => {
      selectInput = screen.getByPlaceholderText('Country') as HTMLInputElement;
      await selectDropdownOption(selectInput, dropdownList[1].label);

      expect(selectInput.value).toBe(dropdownList[1].label);
    });

    it('should pass the selected values to parent', async () => {
      selectInput = screen.getByPlaceholderText('Country') as HTMLInputElement;
      await selectDropdownOption(selectInput, dropdownList[1].label);

      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('Async Select', () => {
    const handleSubmit = jest.fn();
    const asyncSearch = jest.fn();

    let selectInput: HTMLInputElement;

    const renderSelect = (minCharacters = 0, isLoading = false) => {
      return render(
        <div>
          <Select
            isAsync
            isLoading={isLoading}
            label={'Country'}
            options={dropdownList}
            styleType={'filled'}
            handleSelectedOption={handleSubmit}
            asyncSearch={asyncSearch}
            minCharactersToSearch={minCharacters}
          />
        </div>
      );
    };

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should display loading dots when isLoading is true', async () => {
      renderSelect(0, true);

      selectInput = screen.getByPlaceholderText('Country') as HTMLInputElement;

      userEvent.type(selectInput, 'Greece');

      await waitFor(() => expect(screen.getByTestId('dots-loading')).toBeVisible());
    });

    it('should call asyncSearch when typing', async () => {
      renderSelect();
      selectInput = screen.getByPlaceholderText('Country') as HTMLInputElement;

      await userEvent.type(selectInput, 'Gre', { delay: 500 });

      await waitFor(() => expect(asyncSearch).toHaveBeenCalledTimes(3));
    });

    it('should call asyncSearch when minCharactersToSearch check is satisfied', async () => {
      renderSelect(3);

      selectInput = screen.getByPlaceholderText('Country') as HTMLInputElement;

      await userEvent.type(selectInput, 'Gre', { delay: 500 });

      await waitFor(() => expect(asyncSearch).toHaveBeenCalledTimes(1));
    });
  });
});
