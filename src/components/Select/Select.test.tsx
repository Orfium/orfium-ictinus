import userEvent from '@testing-library/user-event';

import { render, screen, selectDropdownOption, sleep, waitFor } from '../../test';
import StatefulSelect from './StatefulSelect';
import { fireEvent } from '@testing-library/react';
import { SELECT_ALL_OPTION } from './constants';

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
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
    const handleSubmit = vi.fn();

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
      vi.clearAllMocks();
    });

    it('should change the input value correctly', async () => {
      selectInput = screen.getByPlaceholderText('Country') as HTMLInputElement;
      await selectDropdownOption(selectInput, dropdownList[1].label);

      expect(selectInput.value).toBe(dropdownList[1].label);
    }, 8000);

    it('should pass the selected values to parent', async () => {
      selectInput = screen.getByPlaceholderText('Country') as HTMLInputElement;
      await selectDropdownOption(selectInput, dropdownList[1].label);

      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it('should revert input value back to “default”, when clear icon is clicked', async () => {
      selectInput = screen.getByPlaceholderText('Country') as HTMLInputElement;
      await userEvent.type(selectInput, 'Greece');

      expect(selectInput.value).toBe('Greece');

      clearIcon = screen.getByTestId('select-right-icon');
      await userEvent.click(clearIcon);

      expect(selectInput.value).not.toBe('Greece');
    });

    it('should revert input value back to “default”, when Backspace is clicked', async () => {
      selectInput = screen.getByPlaceholderText('Country') as HTMLInputElement;
      await userEvent.type(selectInput, 'Greece');

      expect(selectInput.value).toBe('Greece');

      await userEvent.type(selectInput, '{Backspace}');

      expect(selectInput.value).not.toBe('Greece');
    });
  });

  describe('Async Select', () => {
    const handleSubmit = vi.fn();
    const asyncSearch = vi.fn();

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
      vi.clearAllMocks();
    });

    it('should display progress indicator when isLoading is true', async () => {
      renderSelect(0, true);

      selectInput = screen.getByPlaceholderText('Country') as HTMLInputElement;

      await userEvent.type(selectInput, 'Greece');

      await sleep(500);

      await waitFor(() =>
        expect(screen.getByTestId('select_circular_progress_container')).toBeVisible()
      );
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
  }, 8000);

  describe('Select helper text option', () => {
    const handleSubmit = vi.fn();

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
      vi.clearAllMocks();
    });

    it('should display helper text when passed as prop', async () => {
      renderSelect();

      selectInput = screen.getByPlaceholderText('Countries') as HTMLInputElement;

      await userEvent.click(selectInput);

      await waitFor(() => expect(screen.getByText('Greece')).toBeVisible());
      await waitFor(() => expect(screen.getByText('Europe')).toBeVisible());
    });
  });

  describe('Keyboard Navigation', () => {
    afterEach(() => {
      // reset mocked time
      vi.useRealTimers();
    });
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
      const handleSubmit = vi.fn();

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

      await userEvent.keyboard('{enter}');

      expect(handleSubmit).toBeCalledTimes(2);
      expect(handleSubmit).toBeCalledWith(dropdownList[1]);
    });
  });
});

describe('Multi Select', () => {
  let selectInput: HTMLInputElement;
  let tags: HTMLElement[];
  let newOption: HTMLElement;
  let newTag: HTMLElement;

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
    vi.clearAllMocks();
  });

  it('renders the Tags when options are clicked', async () => {
    await selectDropdownOption(selectInput, dropdownList[0].label);
    expect(screen.getByTestId('tag_0_tag_container')).toBeVisible();
    await selectDropdownOption(selectInput, dropdownList[1].label);

    expect(screen.getByTestId('tag_1_tag_container')).toBeVisible();
  });

  it('removes the options from the list when selected', async () => {
    await selectDropdownOption(selectInput, dropdownList[0].label);
    await selectDropdownOption(selectInput, dropdownList[1].label);

    await userEvent.click(selectInput);

    expect(screen.getByTestId('ictinus_list').innerHTML).not.toContain(dropdownList[0].label);
    expect(screen.getByTestId('ictinus_list').innerHTML).not.toContain(dropdownList[1].label);
  }, 8000);

  it('adds the options back to the list when deleted', async () => {
    await selectDropdownOption(selectInput, dropdownList[0].label);
    await selectDropdownOption(selectInput, dropdownList[1].label);

    await userEvent.click(screen.getByTestId('tag_1_tag_suffix'));
    await userEvent.click(screen.getByTestId('tag_0_tag_suffix'));

    await userEvent.click(selectInput);

    expect(screen.getByTestId('ictinus_list').innerHTML).toContain(dropdownList[0].label);
    expect(screen.getByTestId('ictinus_list').innerHTML).toContain(dropdownList[1].label);
  });

  it('deletes all selected options when clear all button is clicked', async () => {
    await selectDropdownOption(selectInput, dropdownList[0].label);
    await selectDropdownOption(selectInput, dropdownList[1].label);
    await selectDropdownOption(selectInput, dropdownList[2].label);

    await userEvent.click(screen.getByTestId('select-right-icon'));

    expect(screen.queryByTestId('tag_0_tag_container')).not.toBeInTheDocument();
  });

  it('selects all options when Select All is clicked', async () => {
    await userEvent.click(selectInput);
    await userEvent.click(screen.getByTestId(`ictinus_list_item_${SELECT_ALL_OPTION.value}`));

    tags = await screen.findAllByTestId(/tag_container/);

    expect(tags.length).toEqual(dropdownList.length);

    await userEvent.click(selectInput);

    expect(screen.getByText('No options')).toBeInTheDocument();
  });

  it('creates a new item if not found on the results', async () => {
    await userEvent.click(selectInput);
    await userEvent.type(selectInput, 'New item');

    expect(screen.getByTestId('ictinus_list').innerHTML).toContain('Create "New item"');

    /** Create new Item */
    newOption = screen.getByText('Create "New item"');
    await userEvent.click(newOption);
    newTag = screen.getByTestId('tag_0_tag_container');

    expect(newTag).toBeVisible();
    expect(newTag.innerHTML).toContain('New item');

    /** Delete created Item */
    await userEvent.click(screen.getByTestId('tag_0_tag_suffix'));
    expect(screen.queryByTestId('New item')).not.toBeInTheDocument();
  });

  it('should delete the last tag when Backspace is clicked', async () => {
    await selectDropdownOption(selectInput, dropdownList[0].label);
    await selectDropdownOption(selectInput, dropdownList[1].label);

    expect(screen.getByTestId('tag_0_tag_container')).toBeVisible();
    expect(screen.getByTestId('tag_1_tag_container')).toBeVisible();

    await userEvent.click(selectInput);
    await userEvent.type(selectInput, '{Backspace}');

    expect(screen.queryByTestId('tag_1_tag_container')).not.toBeInTheDocument();
  });
});
