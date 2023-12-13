import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen, waitFor, fireEvent } from 'test';

import { selectDropdownOption } from '../../test';
import Filter from './Filter';
import { SELECT_ALL_OPTION } from '../Select/constants';

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

const items = [
  { label: 'option 1', value: 1 },
  { label: 'option 2', value: 2 },
  { label: 'option 3', value: 3 },
];

const defaultFilter = {
  label: 'option 4',
  value: 4,
};

type Props = React.ComponentProps<typeof Filter>;

const renderFilter = (props: Partial<Props> = {}) => {
  const defaultProps = {
    defaultValue: defaultFilter,
    label: 'Label',
    items,
    isSearchable: false,
    selectedItem: { label: 'option 1', value: 1 },
    onSelect: vi.fn(),
  };

  return render(<Filter styleType={'filled'} {...{ ...defaultProps, ...props }} />);
};

describe('Generic Filter', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should display a dropdown menu when the button is clicked', async () => {
    renderFilter();

    const button = screen.getByTestId('filter');

    await userEvent.click(button);

    expect(screen.getByTestId('filter-menu')).toBeInTheDocument();
  });

  it('should trigger onSelect property function when one item of the dropdown is clicked', async () => {
    const onSelect = vi.fn();
    renderFilter({ onSelect });

    const button = screen.getByTestId('filter');
    await userEvent.click(button);
    await userEvent.click(screen.getByText(items[1].label));

    expect(onSelect).toHaveBeenCalledWith(items[1]);
  });

  it('should render a text input when isSearchable prop is true', async () => {
    renderFilter({ isSearchable: true });

    const button = screen.getByTestId('filter');
    await userEvent.click(button);

    expect(screen.getByTestId('filter-input')).toBeInTheDocument();
  });

  it('default value should not be rendered when a value is typed on the input text', async () => {
    renderFilter({ isSearchable: true });

    const button = screen.getByTestId('filter');
    await userEvent.click(button);

    const selectInput = screen.getByTestId('filter-input');

    expect(screen.getByTestId(`ictinus_list_item_${defaultFilter.value}`)).toBeInTheDocument();

    await userEvent.type(selectInput, 'test');

    expect(
      screen.queryByTestId(`ictinus_list_item_${defaultFilter.value}`)
    ).not.toBeInTheDocument();
  });

  it('should display progress indicator when isLoading is true', async () => {
    renderFilter({ isSearchable: true, isLoading: true });

    const button = screen.getByTestId('filter');
    await userEvent.click(button);

    const selectInput = screen.getByTestId('filter-input');
    await userEvent.type(selectInput, 'test');

    await waitFor(() =>
      expect(screen.getByTestId('search_circular_progress_container')).toBeVisible()
    );
  });

  it('should call onAsyncSearch when typing', async () => {
    const onAsyncSearch = vi.fn();

    renderFilter({ isSearchable: true, onAsyncSearch });

    const button = screen.getByTestId('filter');
    await userEvent.click(button);

    const selectInput = screen.getByTestId('filter-input');
    await userEvent.type(selectInput, 'tes', { delay: 500 });

    await waitFor(() => expect(onAsyncSearch).toHaveBeenCalledTimes(3));
  });

  it('should call onAsyncSearch when minCharactersToSearch check is satisfied', async () => {
    const onAsyncSearch = vi.fn();

    renderFilter({ isSearchable: true, onAsyncSearch, minCharactersToSearch: 3 });

    const button = screen.getByTestId('filter');
    await userEvent.click(button);

    const selectInput = screen.getByTestId('filter-input');

    await userEvent.type(selectInput, 'tes', { delay: 500 });

    await waitFor(() => expect(onAsyncSearch).toHaveBeenCalledTimes(1));
  });
});

describe('Multi Filter', () => {
  let selectInput: HTMLInputElement;
  let filterLabel: HTMLElement;
  let chips: HTMLElement[];
  let button: HTMLElement;

  beforeEach(() => {
    render(
      <div>
        <Filter
          isMulti
          label={'Country'}
          items={items}
          defaultValue={defaultFilter}
          onSelect={vi.fn()}
          styleType={'filled'}
          hasSelectAllOption
        />
      </div>
    );
  });

  beforeEach(async () => {
    button = screen.getByTestId('filter');

    await userEvent.click(button);

    selectInput = (await screen.findByPlaceholderText('Search')) as HTMLInputElement;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the Chips and changes label when options are clicked', async () => {
    await selectDropdownOption(selectInput, items[0].label);
    await selectDropdownOption(selectInput, items[1].label);

    expect(screen.getByTestId('chip-chip_0')).toBeVisible();
    expect(screen.getByTestId('chip-chip_1')).toBeVisible();

    filterLabel = screen.getByTestId('filter-selected-item-label');
    expect(filterLabel).toHaveTextContent(`${items[0].label} + 1 more`);
  }, 8000);

  it('removes the options from the list when selected', async () => {
    await selectDropdownOption(selectInput, items[0].label);
    await selectDropdownOption(selectInput, items[1].label);

    await userEvent.click(selectInput);

    expect(screen.getByTestId('ictinus_list').innerHTML).not.toContain(items[0].label);
    expect(screen.getByTestId('ictinus_list').innerHTML).not.toContain(items[1].label);
  }, 8000);

  it('adds the options to the list and clears label when deleted', async () => {
    await selectDropdownOption(selectInput, items[0].label);
    await selectDropdownOption(selectInput, items[1].label);

    await userEvent.click(screen.getByTestId('chip-delete-chip_1'));
    await userEvent.click(screen.getByTestId('chip-delete-chip_0'));

    await userEvent.click(selectInput);

    expect(screen.getByTestId('ictinus_list').innerHTML).toContain(items[0].label);
    expect(screen.getByTestId('ictinus_list').innerHTML).toContain(items[1].label);

    filterLabel = screen.getByTestId('filter-selected-item-label');
    expect(filterLabel).toHaveTextContent(defaultFilter.label);
  });

  it('deletes all selected options and clears label when clear all button is clicked', async () => {
    await selectDropdownOption(selectInput, items[0].label);
    await selectDropdownOption(selectInput, items[1].label);
    await selectDropdownOption(selectInput, items[2].label);

    fireEvent.click(screen.getByTestId('select-right-icon'));

    expect(screen.queryByTestId('chip-chip_0')).not.toBeInTheDocument();

    filterLabel = screen.getByTestId('filter-selected-item-label');
    expect(filterLabel).toHaveTextContent(defaultFilter.label);
  });

  it('selects all options and changes label when Select All is clicked', async () => {
    await userEvent.click(screen.getByTestId(`ictinus_list_item_${SELECT_ALL_OPTION.value}`));

    await userEvent.click(button);

    chips = await screen.findAllByTestId(/chip-chip_/);

    expect(chips.length).toEqual(items.length);

    await userEvent.click(selectInput);

    expect(screen.getByText('No options')).toBeInTheDocument();

    filterLabel = screen.getByTestId('filter-selected-item-label');
    expect(filterLabel).toHaveTextContent(`${items[0].label} + ${items.length - 1} more`);
  });
});
