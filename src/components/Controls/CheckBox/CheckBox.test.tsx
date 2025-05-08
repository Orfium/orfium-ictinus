import React from 'react';

import { render, within } from '../../../test';
import userEvent from '@testing-library/user-event';
import CheckBox from '../CheckBox';
import { Mock } from 'vitest';

describe('Checkbox Component', () => {
  let mockOnChange: Mock<any, any>;

  beforeEach(() => {
    mockOnChange = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('it renders the Checkbox correctly', () => {
    const { container } = render(<CheckBox value="test" dataTestPrefixId={'test'} />);

    expect(container).toMatchSnapshot();
  });

  it('should be able to change its check condition', async () => {
    const { getByTestId, debug } = render(<CheckBox value="test" dataTestPrefixId={'test'} />);

    const label = getByTestId('test_test_checkbox');
    const checkbox = within(label).getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();

    expect(label.getAttribute('data-selected')).toEqual(null);

    await userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it('should invoke the onChange function', async () => {
    const { getAllByTestId } = render(
      <CheckBox onChange={mockOnChange} value="test" dataTestPrefixId={'test'} />
    );

    const checkbox = getAllByTestId('test_test_checkbox');
    const input = checkbox[0];
    expect(input).toBeInTheDocument();

    await userEvent.click(input);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('should not invoke the onChange function if the checkbox is disabled', async () => {
    const { getAllByTestId } = render(
      <CheckBox onChange={mockOnChange} value="test" dataTestPrefixId={'test'} isDisabled />
    );

    const checkbox = getAllByTestId('test_test_checkbox');
    const input = checkbox[0];
    expect(input).toBeInTheDocument();

    await userEvent.click(input);

    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });

  it('should work properly as a controlled component', async () => {
    const isSelected = true;

    const { getAllByTestId } = render(
      <CheckBox
        isSelected={isSelected}
        onChange={mockOnChange}
        value="test"
        dataTestPrefixId={'test'}
      />
    );

    const checkbox = getAllByTestId('test_test_checkbox');
    const input = checkbox[0];

    await userEvent.click(input);

    expect(mockOnChange).toHaveBeenCalledTimes(1);

    expect(input.getAttribute('data-selected')).toEqual('true');
  });
});
