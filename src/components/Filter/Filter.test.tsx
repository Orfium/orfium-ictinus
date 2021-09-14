import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen, waitFor } from 'test';

import Filter from './Filter';

const items = [
  { label: 'option 1', value: 1 },
  { label: 'option 2', value: 2 },
];
type Props = React.ComponentProps<typeof Filter>;

const renderFilter = (props: Partial<Props> = {}) => {
  const defaultProps = {
    defaultValue: {
      label: 'option 3',
      value: 3,
    },
    label: 'Label',
    items,
    isSearchable: false,
    selectedItem: { label: 'option 1', value: 1 },
    onSelect: jest.fn(),
    color: 'lightGrey-50',
  };

  return render(<Filter styleType={'filled'} {...{ ...defaultProps, ...props }} />);
};

describe('Generic Filter', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display a dropdown menu when the button is clicked', () => {
    renderFilter();

    const button = screen.getByTestId('filter');

    userEvent.click(button);

    expect(screen.getByTestId('filter-menu')).toBeInTheDocument();
  });

  it('should trigger onSelect property function when one item of the dropdown is clicked', () => {
    const onSelect = jest.fn();
    renderFilter({ onSelect });

    const button = screen.getByTestId('filter');
    userEvent.click(button);
    userEvent.click(screen.getByText(items[1].label));

    expect(onSelect).toHaveBeenCalledWith(items[1]);
  });

  it('should render a text input when isSearchable prop is true', () => {
    renderFilter({ isSearchable: true });

    const button = screen.getByTestId('filter');
    userEvent.click(button);

    expect(screen.getByTestId('filter-input')).toBeInTheDocument();
  });

  it('default value should not be rendered when a value is typed on the input text', () => {
    renderFilter({ isSearchable: true });

    const button = screen.getByTestId('filter');
    userEvent.click(button);

    const selectInput = screen.getByTestId('filter-input');

    expect(screen.getByTestId('ictinus_list_default_option')).toBeInTheDocument();

    userEvent.type(selectInput, 'test');

    expect(screen.queryByTestId('ictinus_list_default_option')).not.toBeInTheDocument();
  });

  it('should display loading dots when isLoading is true', async () => {
    renderFilter({ isSearchable: true, isLoading: true });

    const button = screen.getByTestId('filter');
    userEvent.click(button);

    const selectInput = screen.getByTestId('filter-input');
    userEvent.type(selectInput, 'test');

    await waitFor(() => expect(screen.getByTestId('dots-loading')).toBeVisible());
  });

  it('should call onAsyncSearch when typing', async () => {
    const onAsyncSearch = jest.fn();

    renderFilter({ isSearchable: true, onAsyncSearch });

    const button = screen.getByTestId('filter');
    userEvent.click(button);

    const selectInput = screen.getByTestId('filter-input');
    await userEvent.type(selectInput, 'tes', { delay: 500 });

    await waitFor(() => expect(onAsyncSearch).toHaveBeenCalledTimes(3));
  });

  it('should call onAsyncSearch when minCharactersToSearch check is satisfied', async () => {
    const onAsyncSearch = jest.fn();

    renderFilter({ isSearchable: true, onAsyncSearch, minCharactersToSearch: 3 });

    const button = screen.getByTestId('filter');
    userEvent.click(button);

    const selectInput = screen.getByTestId('filter-input');

    await userEvent.type(selectInput, 'tes', { delay: 500 });

    await waitFor(() => expect(onAsyncSearch).toHaveBeenCalledTimes(1));
  });
});
