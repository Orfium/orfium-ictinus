import userEvent from '@testing-library/user-event';
import type { Mock } from 'vitest';
import { vi } from 'vitest';
import CheckBox from '.';
import { render, screen } from '../../../test';

describe('Checkbox Component', () => {
  let mockOnChange: Mock;

  beforeEach(() => {
    mockOnChange = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('it renders the Checkbox correctly', () => {
    const { container } = render(<CheckBox value="test" dataTestPrefixId="test" />);

    expect(container).toMatchSnapshot();
  });

  it('should be able to change its check condition', async () => {
    render(<CheckBox value="test" dataTestPrefixId="test" />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox.closest('label')?.getAttribute('data-selected')).toEqual(null);

    await userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it('should invoke the onChange function', async () => {
    render(<CheckBox onChange={mockOnChange} value="test" dataTestPrefixId="test" />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    await userEvent.click(checkbox);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('should not invoke the onChange function if the checkbox is disabled', async () => {
    render(
      <CheckBox onChange={mockOnChange} value="test" dataTestPrefixId="test" isDisabled />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    await userEvent.click(checkbox);

    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });

  it('should work properly as a controlled component', async () => {
    const isSelected = true;

    render(
      <CheckBox
        isSelected={isSelected}
        onChange={mockOnChange}
        value="test"
        dataTestPrefixId="test"
      />
    );

    const checkbox = screen.getByRole('checkbox');
    const label = checkbox.closest('label');

    await userEvent.click(checkbox);

    expect(mockOnChange).toHaveBeenCalledTimes(1);

    expect(label?.getAttribute('data-selected')).toEqual('true');
  });
});
