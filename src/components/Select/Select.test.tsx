import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen, selectDropdownOption, waitFor } from '../../test';
import StatefulSelect from './StatefulSelect';
import { fireEvent } from '@testing-library/react';
import { SELECT_ALL_OPTION } from './constants';

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
          <StatefulSelect label={'Country'} options={dropdownList} onChange={handleSubmit} />
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

    it('should revert input value back to “default”, when Backspace is clicked', async () => {
      selectInput = screen.getByPlaceholderText('Country') as HTMLInputElement;
      userEvent.type(selectInput, 'Greece');

      expect(selectInput.value).toBe('Greece');

      userEvent.type(selectInput, '{Backspace}');

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
          <StatefulSelect
            isAsync
            isLoading={isLoading}
            label={'Country'}
            options={dropdownList}
            onChange={handleSubmit}
            asyncSearch={asyncSearch}
            minCharactersToSearch={minCharacters}
          />
        </div>
      );
    };

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should display progress indicator when isLoading is true', async () => {
      renderSelect(0, true);

      selectInput = screen.getByPlaceholderText('Country') as HTMLInputElement;

      userEvent.type(selectInput, 'Greece');

      await waitFor(() => expect(screen.getByTestId('select_circular_progress_container')).toBeVisible());
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
          <StatefulSelect
            isSearchable={false}
            label={'Countries'}
            options={dropdownListWithHelperText}
            onChange={handleSubmit}
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

  describe('Keyboard Navigation', () => {
    it('down arrow should open menu', async () => {
      const { getByTestId, container } = render(
        <div>
          <StatefulSelect
            dataTestId={'test'}
            isSearchable={false}
            label={'Countries'}
            options={dropdownList}
          />
        </div>
      );

      const select = getByTestId('input_select-input-test');
      fireEvent.keyDown(select, {
        key: 'ArrowDown',
        code: 'ArrowDown',
        charCode: 40,
      });

      await waitFor(() => expect(container.querySelector('#select__00')).toBeInTheDocument());
    });

    it('down arrow should open menu and close it with Escape', async () => {
      const { getByTestId, container } = render(
        <div>
          <StatefulSelect
            dataTestId={'test'}
            isSearchable={false}
            label={'Countries'}
            options={dropdownList}
          />
        </div>
      );

      const select = getByTestId('input_select-input-test');
      fireEvent.keyDown(select, {
        key: 'ArrowDown',
        code: 'ArrowDown',
        charCode: 40,
      });

      await waitFor(() => expect(container.querySelector('#select__00')).toBeInTheDocument());

      fireEvent.keyDown(select, {
        key: 'Escape',
      });
      await waitFor(() => expect(container.querySelector('#select__00')).not.toBeInTheDocument());
    });

    it('escape on input should clear the value', async () => {
      const { getByTestId, container } = render(
        <div>
          <StatefulSelect
            selectedOption={dropdownList[0]}
            dataTestId={'test'}
            label={'Countries'}
            options={dropdownList}
          />
        </div>
      );

      const select = getByTestId('input_select-input-test');
      fireEvent.keyDown(select, {
        key: 'ArrowDown',
        code: 'ArrowDown',
        charCode: 40,
      });

      // this clears the value
      fireEvent.keyDown(select, {
        key: 'Escape',
      });

      expect(select).toHaveValue('');
    });

    it('on type more than 1 character in input and enter selects the first from the list', async () => {
      jest.useFakeTimers();
      const handleSubmit = jest.fn();

      const { getByTestId } = render(
        <div>
          <StatefulSelect
            selectedOption={dropdownList[0]}
            dataTestId={'test'}
            label={'Countries'}
            options={dropdownList}
            onChange={handleSubmit}
          />
        </div>
      );

      const select = getByTestId('input_select-input-test');
      // open menu
      fireEvent.keyDown(select, {
        key: 'ArrowDown',
      });
      // this clears the value
      fireEvent.keyDown(select, {
        key: 'Escape',
      });
      expect(handleSubmit).toBeCalledTimes(1);

      await userEvent.type(select, 'zi');
      fireEvent.keyDown(select, {
        key: 'Enter',
      });

      jest.runAllTimers();

      expect(handleSubmit).toBeCalledTimes(2);
      expect(handleSubmit).toBeCalledWith(dropdownList[1]);
    });
  });
});

describe('Multi Select', () => {
  let selectInput: HTMLInputElement;
  let chips: HTMLElement[];
  let newOption: HTMLElement;
  let newChip: HTMLElement;

  beforeEach(() => {
    render(
      <div>
        <StatefulSelect
          isMulti
          isCreatable
          label={'Country'}
          options={dropdownList}
          hasSelectAllOption
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

  it('renders the Chips when options are clicked', async () => {
    await selectDropdownOption(selectInput, dropdownList[0].label);
    expect(screen.getByTestId('chip-chip_0')).toBeVisible();
    await selectDropdownOption(selectInput, dropdownList[1].label);

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

  it('selects all options when Select All is clicked', async () => {
    userEvent.click(selectInput);
    userEvent.click(screen.getByTestId(`ictinus_list_item_${SELECT_ALL_OPTION.value}`));

    chips = await screen.findAllByTestId(/chip-chip_/);

    expect(chips.length).toEqual(dropdownList.length);

    userEvent.click(selectInput);

    expect(screen.getByText('No options')).toBeInTheDocument();
  });

  it('creates a new item if not found on the results', async () => {
    userEvent.click(selectInput);
    userEvent.type(selectInput, 'New item');

    expect(screen.getByTestId('ictinus_list').innerHTML).toContain('Create "New item"');

    /** Create new Item */
    newOption = screen.getByText('Create "New item"');
    userEvent.click(newOption);
    newChip = screen.getByTestId('chip-chip_0');

    expect(newChip).toBeVisible();
    expect(newChip.innerHTML).toContain('New item');

    /** Delete created Item */
    userEvent.click(screen.getByTestId('chip-delete-chip_0'));
    expect(screen.queryByTestId('New item')).not.toBeInTheDocument();
  });

  it('should delete the last chip when Backspace is clicked', async () => {
    await selectDropdownOption(selectInput, dropdownList[0].label);
    await selectDropdownOption(selectInput, dropdownList[1].label);

    expect(screen.getByTestId('chip-chip_0')).toBeVisible();
    expect(screen.getByTestId('chip-chip_1')).toBeVisible();

    userEvent.click(selectInput);
    userEvent.type(selectInput, '{Backspace}');

    expect(screen.queryByTestId('chip-chip_1')).not.toBeInTheDocument();
  });
});
