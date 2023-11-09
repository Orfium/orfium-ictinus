import React from 'react';

import { render, fireEvent, act } from '../../../test';

import RadioGroup from './components/RadioGroup';
import Radio from './Radio';
import userEvent from '@testing-library/user-event';

describe('Radio', () => {
  let mockOnClick: jest.Mock<any, any>;

  beforeEach(() => {
    mockOnClick = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('it renders the RadioGroup and Radios correctly', () => {
    const { container } = render(
      <RadioGroup>
        <Radio value="Test Option">Test Option</Radio>
      </RadioGroup>
    );

    expect(container).toMatchSnapshot();
  });

  it('should change to checked on click', () => {
    const { container } = render(
      <RadioGroup onChange={mockOnClick}>
        <Radio value="Test Option">Test Option</Radio>
      </RadioGroup>
    );

    const radio = container.querySelector('input[type="radio"]') as HTMLInputElement;

    userEvent.click(radio);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(radio.checked).toBeTruthy();
  });

  it('should not change to checked on click when disabled', () => {
    const { container } = render(
      <RadioGroup onChange={mockOnClick}>
        <Radio value="Test Option" isDisabled>
          Test Option
        </Radio>
      </RadioGroup>
    );

    const radio = container.querySelector('input[type="radio"]') as HTMLInputElement;

    expect(radio).toBeDisabled();

    userEvent.click(radio);

    expect(mockOnClick).toHaveBeenCalledTimes(0);
    expect(radio.checked).toBeFalsy();
  });
});
