import React from 'react';

import { render } from '../../../test';
import userEvent from '@testing-library/user-event';
import CheckBox from '../CheckBox';
import { Mock } from 'vitest';
import { testHtmlAttributes } from '~/test/testUtils';

test('CheckBox component should pass HTML attributes correctly', () => {
  testHtmlAttributes(CheckBox);
});

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
    const { getAllByTestId } = render(<CheckBox value="test" dataTestPrefixId={'test'} />);

    const checkbox = getAllByTestId('test_test_checkbox') as HTMLElement[];
    expect(checkbox).toHaveLength(2);

    const input = checkbox[0];

    expect(input).toBeInTheDocument();

    expect(input.getAttribute('data-selected')).toEqual(null);

    await userEvent.click(input);

    expect(input.getAttribute('data-selected')).toEqual('true');
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
