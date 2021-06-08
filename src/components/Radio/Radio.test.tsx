import React from 'react';

import { render } from 'test';

import { fireEvent } from '../../test';
import Radio from './Radio';

describe('Radio', () => {
  let mockOnClick: jest.Mock<any, any>;

  beforeEach(() => {
    mockOnClick = jest.fn();
  });

  it('should render correctly', () => {
    const { container } = render(<Radio />);
    expect(container).toMatchSnapshot();
  });

  it('should change to checked on click', () => {
    const { container } = render(<Radio onChange={mockOnClick} dataTestId={'test-check'} />);

    const radio = container.querySelector('input[type="radio"]') as HTMLInputElement;

    fireEvent.click(radio);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(radio.checked).toBeTruthy();
  });

  it('disabled should not change to checked on click', () => {
    const { container } = render(
      <Radio disabled={true} onChange={mockOnClick} dataTestId={'test-disabled'} />
    );

    const radio = container.querySelector('input[type="radio"]') as HTMLInputElement;

    fireEvent.click(radio);

    expect(mockOnClick).toHaveBeenCalledTimes(0);
    expect(radio.checked).toBeFalsy();
  });
});
