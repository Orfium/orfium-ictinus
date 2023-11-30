import React from 'react';

import { render } from 'test';

import RadioGroup from './components/RadioGroup';
import Radio from './Radio';
import userEvent from '@testing-library/user-event';
import { Mock } from 'vitest';

describe('Radio', () => {
  let mockOnClick: Mock<any, any>;

  beforeEach(() => {
    mockOnClick = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('it renders the RadioGroup and Radios correctly', () => {
    const { container } = render(
      <RadioGroup>
        <Radio value="Test Option">Test Option</Radio>
      </RadioGroup>
    );

    expect(container).toMatchSnapshot();
  });

  it('should change to checked on click', async () => {
    const { container } = render(
      <RadioGroup onChange={mockOnClick}>
        <Radio value="Test Option">Test Option</Radio>
      </RadioGroup>
    );

    const radio = container.querySelector('input[type="radio"]') as HTMLInputElement;

    await userEvent.click(radio);

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
