import React from 'react';

import { render, fireEvent } from '../../../test';
import CheckBox from '../CheckBox';

describe('Checkbox Component', () => {
  let wrapper;

  it('should be able to change its check condition', async () => {
    wrapper = render(<CheckBox dataTestIdSuffix={'single'} />);

    const { getByTestId } = wrapper;

    const checkbox = getByTestId('checkbox-single') as HTMLInputElement;

    expect(checkbox.checked).toEqual(false);

    fireEvent.click(checkbox);

    expect(checkbox.checked).toEqual(true);
  });

  it('should invoke the onClick function', () => {
    const mockOnClick = jest.fn();
    wrapper = render(<CheckBox onClick={mockOnClick} dataTestIdSuffix={'with-on-click'} />);
    const { getByTestId } = wrapper;

    const checkbox = getByTestId('checkbox-with-on-click');

    fireEvent.click(checkbox);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should NOT invoke the onClick function if the button is disabled', () => {
    const mockOnClick = jest.fn();
    wrapper = render(<CheckBox disabled onClick={mockOnClick} dataTestIdSuffix={'disabled'} />);
    const { getByTestId } = wrapper;

    const checkbox = getByTestId('checkbox-disabled');

    expect(checkbox).toBeDisabled();

    fireEvent.click(checkbox);

    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });

  it('should work properly as a controlled component', async () => {
    const isChecked = true;
    const mockOnClick = jest.fn();

    wrapper = render(
      <CheckBox checked={isChecked} onClick={mockOnClick} dataTestIdSuffix={'controlled'} />
    );

    const { getByTestId } = wrapper;

    const checkbox = getByTestId('checkbox-controlled') as HTMLInputElement;

    expect(checkbox.checked).toEqual(isChecked);

    fireEvent.click(checkbox);

    expect(mockOnClick).toHaveBeenCalledTimes(1);

    expect(checkbox.checked).toEqual(isChecked);
  });
});
