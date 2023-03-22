import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen, selectDropdownOption, waitFor } from '../../test';
import Select from './Select';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const dropdownList = [
  { label: 'Greece', value: 'GR' },
  { label: 'Zimbabwe', value: 'ZW' },
  { label: 'United Kingdom', value: 'UK' },
  { label: 'France', value: 'FR' },
  { label: 'Ukraine', value: 'UA' },
];

const dropdownListWithHelperText = [
  { label: 'Greece', helperText: 'Europe', value: 'GR' },
  { label: 'Zimbabwe', helperText: 'Africa', value: 'ZW' },
];

describe('Generic Select', () => {
  describe('Sync Select', () => {
    const handleSubmit = jest.fn();

    let selectInput: HTMLInputElement;
    let clearIcon: HTMLElement;

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

    it('should revert input value back to “default”, when clear icon is clicked', async () => {
      selectInput = screen.getByPlaceholderText('Country') as HTMLInputElement;
      userEvent.type(selectInput, 'Greece');

      expect(selectInput.value).toBe('Greece');

      clearIcon = screen.getByTestId('select-right-icon');
      userEvent.click(clearIcon);

      expect(selectInput.value).not.toBe('Greece');
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

  describe('Select helper text option', () => {
    const handleSubmit = jest.fn();

    let selectInput: HTMLInputElement;

    const renderSelect = () => {
      return render(
        <div>
          <Select
            isSearchable={false}
            label={'Countries'}
            options={dropdownListWithHelperText}
            handleSelectedOption={handleSubmit}
          />
        </div>
      );
    };

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should display helper text when passed as prop', async () => {
      renderSelect();

      selectInput = screen.getByPlaceholderText('Countries') as HTMLInputElement;

      userEvent.click(selectInput);

      await waitFor(() => expect(screen.getByText('Greece')).toBeVisible());
      await waitFor(() => expect(screen.getByText('Europe')).toBeVisible());
    });
  });
});

describe('Multi Select', () => {
  let selectInput: HTMLInputElement;

  beforeEach(() => {
    render(
      <div>
        <Select multi label={'Country'} options={dropdownList} />
      </div>
    );
  });

  beforeEach(() => {
    selectInput = screen.getByPlaceholderText('Country') as HTMLInputElement;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the Chips when options are clicked', async () => {
    await selectDropdownOption(selectInput, dropdownList[0].label);
    await selectDropdownOption(selectInput, dropdownList[1].label);

    expect(screen.getByTestId('chip-chip_0')).toBeVisible();
    expect(screen.getByTestId('chip-chip_1')).toBeVisible();
  });

  it('removes the options from the list when selected', async () => {
    await selectDropdownOption(selectInput, dropdownList[0].label);
    await selectDropdownOption(selectInput, dropdownList[1].label);

    userEvent.click(selectInput);

    expect(screen.getByTestId('ictinus_list').innerHTML).not.toContain(dropdownList[0].label);
    expect(screen.getByTestId('ictinus_list').innerHTML).not.toContain(dropdownList[1].label);
  });

  it('adds the options back to the list when deleted', async () => {
    await selectDropdownOption(selectInput, dropdownList[0].label);
    await selectDropdownOption(selectInput, dropdownList[1].label);

    userEvent.click(screen.getByTestId('chip-delete-chip_1'));
    userEvent.click(screen.getByTestId('chip-delete-chip_0'));

    userEvent.click(selectInput);

    expect(screen.getByTestId('ictinus_list').innerHTML).toContain(dropdownList[0].label);
    expect(screen.getByTestId('ictinus_list').innerHTML).toContain(dropdownList[1].label);
  });

  it('deletes all selected options when clear all button is clicked', async () => {
    await selectDropdownOption(selectInput, dropdownList[0].label);
    await selectDropdownOption(selectInput, dropdownList[1].label);
    await selectDropdownOption(selectInput, dropdownList[2].label);

    userEvent.click(screen.getByTestId('select-right-icon'));

    expect(screen.queryByTestId('chip-chip_0')).not.toBeInTheDocument();
  });
});
