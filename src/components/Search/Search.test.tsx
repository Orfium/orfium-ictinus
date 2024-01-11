import { render, screen } from 'test';
import StatefulSearch, { options, LABEL } from './StatefulSearch';
import userEvent from '@testing-library/user-event';

describe('Search', () => {
  let input: HTMLInputElement;
  let clearButton: HTMLDivElement;
  let filterButton: HTMLDivElement;
  let filterOption: HTMLDivElement;
  let filterLabel: HTMLDivElement;

  it('shows the clear button when input text is provided', async () => {
    render(<StatefulSearch />);
    input = screen.getByTestId('search_search_input');

    await userEvent.type(input, 'Test');

    clearButton = screen.getByTestId('search-clear');
    expect(clearButton).toBeVisible();
  });

  it('calls the onClear when clear button is clicked', async () => {
    const handleClear = vi.fn();

    render(<StatefulSearch onClear={handleClear} />);
    input = screen.getByTestId('search_search_input');

    await userEvent.type(input, 'Test');

    clearButton = screen.getByTestId('search-clear');
    await userEvent.click(clearButton);

    expect(handleClear).toHaveBeenCalledOnce();
  });

  it('toggles the focus state between input and filter when navigated through keyboard', async () => {
    render(<StatefulSearch hasFilter />);
    input = screen.getByTestId('search_search_input');
    await userEvent.type(input, 'Test');

    clearButton = screen.getByTestId('search-clear');
    filterButton = screen.getByTestId('search_search_filter_filter_button');

    expect(input).toHaveFocus();

    /** Click Tab should result in focusing on the Clear Button */
    await userEvent.keyboard('{tab}');
    expect(clearButton).toHaveFocus();

    /** Click Tab should result in focusing on the Filter Button */
    await userEvent.keyboard('{tab}');
    expect(filterButton).toHaveFocus();
  });

  it('changes the value of the filter when filter option is selected', async () => {
    render(<StatefulSearch hasFilter />);
    filterButton = screen.getByTestId('search_search_filter_filter_button');

    await userEvent.click(filterButton);

    filterOption = screen.getByTestId('ictinus_list_item_option_1');

    await userEvent.click(filterOption);

    filterLabel = screen.getByTestId('search_search_filter_filter_label');

    expect(filterLabel).toHaveTextContent(`${LABEL}: ${options[0].label}`);
  });
});
