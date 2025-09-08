import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { render, screen } from '../../test';
import DropdownButton from './DropdownButton';

const mockOnButtonClick = vi.fn();
const mockonOptionSelect = vi.fn();

const renderComponent = () => {
  const props = {
    items: ['Item 1'],
    onButtonClick: mockOnButtonClick,
    onOptionSelect: mockonOptionSelect,
  };

  return render(<DropdownButton {...props} />);
};

describe('DropdownButton:', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should display a dropdown menu when the triangleDown icon is clicked', async () => {
    renderComponent();

    const iconButton = screen.getByTestId('dropdown-toggle-icon-button');

    await userEvent.click(iconButton);

    expect(screen.getByTestId('dropdown-button-options_list')).toBeInTheDocument();
  });

  it('should trigger the Button CTA when the button is clicked', async () => {
    renderComponent();

    const button = screen.getByTestId('dropdownbutton');

    await userEvent.click(button);

    expect(mockOnButtonClick).toHaveBeenCalledTimes(1);
  });

  it('should trigger the Option CTA when one of the options is clicked', async () => {
    renderComponent();

    const iconButton = screen.getByTestId('dropdown-toggle-icon-button');

    await userEvent.click(iconButton);

    const option = screen.getByTestId('ictinus_list_item_Item_1');

    await userEvent.click(option);

    expect(mockonOptionSelect).toHaveBeenCalledTimes(1);
  });
});
