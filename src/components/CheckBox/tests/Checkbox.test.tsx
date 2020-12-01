import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '../../../test';
import { CheckBox } from '../../../index';

describe('Checkbox Component', () => {
  let wrapper;

  it('should be able to change its check condition', async () => {
    wrapper = render(<CheckBox checked={false} dataTestIdSuffix={'single'} />);

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
});
