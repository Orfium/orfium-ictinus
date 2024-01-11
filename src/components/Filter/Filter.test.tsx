import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen, waitFor } from 'test';

import { selectDropdownOption } from '../../test';
import Filter from './Filter';
import { SELECT_ALL_OPTION } from '../Select/constants';
import { options } from './constants';
import { FilterProps } from './Filter.types';
import StatefulFilter from './components/StatefulFilter';

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

const defaultFilter = {
  label: 'All',
  value: 'all',
};

const renderFilter = (props: Partial<FilterProps> = {}) => {
  const defaultProps = {
    defaultValue: defaultFilter,
    label: 'Label',
    items: options,
    selectedItem: options[0],
    onChange: vi.fn(),
  };

  return render(<Filter {...{ ...defaultProps, ...props }} />);
};

describe('Single Filter', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should display a dropdown menu when the button is clicked', async () => {
    renderFilter();

    const button = screen.getByTestId('ictinus_filter_filter_button');

    await userEvent.click(button);

    expect(screen.getByTestId('ictinus_list')).toBeInTheDocument();
  });

  it('should trigger onSelect property function when one item of the dropdown is clicked', async () => {
    const onSelect = vi.fn();
    renderFilter({ onChange: onSelect });

    const button = screen.getByTestId('ictinus_filter_filter_button');
    await userEvent.click(button);
    await userEvent.click(screen.getByText(options[1].label));

    expect(onSelect).toHaveBeenCalledWith(options[1]);
  });

  it('should render a text input when isSearchable prop is true', async () => {
    renderFilter({ isSearchable: true });

    const button = screen.getByTestId('ictinus_filter_filter_button');
    await userEvent.click(button);

    expect(screen.getByTestId('filter-input')).toBeInTheDocument();
  });

  it('should display progress indicator when isLoading is true', async () => {
    renderFilter({ isSearchable: true, isLoading: true });

    const button = screen.getByTestId('ictinus_filter_filter_button');
    await userEvent.click(button);

    const selectInput = screen.getByTestId('filter-input');
    await userEvent.type(selectInput, 'test');

    await waitFor(() =>
      expect(screen.getByTestId('search_circular_progress_container')).toBeVisible()
    );
  });

  it('should call onAsyncSearch when typing', async () => {
    const onAsyncSearch = vi.fn();

    renderFilter({ isSearchable: true, isAsync: true, onAsyncSearch });

    const button = screen.getByTestId('ictinus_filter_filter_button');
    await userEvent.click(button);

    const selectInput = screen.getByTestId('filter-input');
    await userEvent.type(selectInput, 'tes', { delay: 500 });

    await waitFor(() => expect(onAsyncSearch).toHaveBeenCalledTimes(3));
  });

  it('should call onAsyncSearch when minCharactersToSearch check is satisfied', async () => {
    const onAsyncSearch = vi.fn();

    renderFilter({ isSearchable: true, isAsync: true, onAsyncSearch, minCharactersToSearch: 3 });

    const button = screen.getByTestId('ictinus_filter_filter_button');
    await userEvent.click(button);

    const selectInput = screen.getByTestId('filter-input');

    await userEvent.type(selectInput, 'tes', { delay: 500 });

    await waitFor(() => expect(onAsyncSearch).toHaveBeenCalledTimes(1));
  }, 8000);
});

describe('Multi Filter', () => {
  let selectInput: HTMLInputElement;
  let filterLabel: HTMLElement;
  let chips: HTMLElement[];
  let button: HTMLElement;
  let moreOptionsTag: HTMLDivElement;

  beforeEach(() => {
    render(
      <StatefulFilter
        hasSelectAllOption
        isMulti
        label="Label"
        items={options}
        defaultValue={defaultFilter}
      />
    );
  });

  beforeEach(async () => {
    button = screen.getByTestId('ictinus_filter_filter_button');

    await userEvent.click(button);

    selectInput = (await screen.findByPlaceholderText('Search')) as HTMLInputElement;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the Chips and changes label when options are clicked', async () => {
    await selectDropdownOption(selectInput, options[0].label);
    await selectDropdownOption(selectInput, options[1].label);

    expect(screen.getByTestId('chip-chip_0')).toBeVisible();
    expect(screen.getByTestId('chip-chip_1')).toBeVisible();

    await userEvent.click(button);

    moreOptionsTag = screen.getByTestId('ictinus_filter_1_more_filters_tag_container');
    expect(moreOptionsTag).toBeInTheDocument();
  });

  it('removes the options from the list when selected', async () => {
    await selectDropdownOption(selectInput, options[0].label);
    await selectDropdownOption(selectInput, options[1].label);

    await userEvent.click(selectInput);

    expect(screen.getByTestId('ictinus_list').innerHTML).not.toContain(options[0].label);
    expect(screen.getByTestId('ictinus_list').innerHTML).not.toContain(options[1].label);
  });

  it('adds the options to the list and clears label when deleted', async () => {
    await selectDropdownOption(selectInput, options[0].label);
    await selectDropdownOption(selectInput, options[1].label);

    await userEvent.click(screen.getByTestId('chip-delete-chip_1'));
    await userEvent.click(screen.getByTestId('chip-delete-chip_0'));

    await userEvent.click(selectInput);

    expect(screen.getByTestId('ictinus_list').innerHTML).toContain(options[0].label);
    expect(screen.getByTestId('ictinus_list').innerHTML).toContain(options[1].label);

    filterLabel = screen.getByTestId('ictinus_filter_filter_label');
    expect(filterLabel).toHaveTextContent(`Label: ${defaultFilter.label}`);
  });

  it('deletes all selected options and clears label when clear all button is clicked', async () => {
    await selectDropdownOption(selectInput, options[0].label);
    await selectDropdownOption(selectInput, options[1].label);
    await selectDropdownOption(selectInput, options[2].label);

    await userEvent.click(screen.getByTestId('select-right-icon'));

    expect(screen.queryByTestId('chip-chip_0')).not.toBeInTheDocument();

    filterLabel = screen.getByTestId('ictinus_filter_filter_label');
    expect(filterLabel).toHaveTextContent(`Label: ${defaultFilter.label}`);
  });

  it('selects all options and changes label when Select All is clicked', async () => {
    await userEvent.click(screen.getByTestId(`ictinus_list_item_${SELECT_ALL_OPTION.value}`));

    chips = await screen.findAllByTestId(/chip-chip_/);

    expect(chips.length).toEqual(options.length);

    await userEvent.click(selectInput);

    expect(screen.getByText('No options')).toBeInTheDocument();

    await userEvent.click(button);

    filterLabel = screen.getByTestId('ictinus_filter_filter_label');
    expect(filterLabel).toHaveTextContent(`Label: ${options[0].label}`);

    moreOptionsTag = screen.getByTestId(
      `ictinus_filter_${options.length - 1}_more_filters_tag_container`
    );
    expect(moreOptionsTag).toBeInTheDocument();
  });
});
