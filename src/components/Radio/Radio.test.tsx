import React from 'react';
import { render } from 'test';
import Radio from './Radio';
import { fireEvent } from '../../test';

describe('Radio', () => {
  it('should render correctly', () => {
    const { container } = render(<Radio />);
    expect(container).toMatchSnapshot();
  });

  it('should change to checked on click', () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(<Radio onChange={mockOnClick} dataTestId={'test-check'} />);

    const radio = getByTestId('radio-input-test-check');

    fireEvent.click(radio.children[0]);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect((radio.children[0] as HTMLInputElement).checked).toBeTruthy();
  });

  it('disabled should not change to checked on click', () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(
      <Radio disabled={true} onChange={mockOnClick} dataTestId={'test-disabled'} />
    );

    const radio = getByTestId('radio-input-test-disabled');

    fireEvent.click(radio.children[0]);

    expect(mockOnClick).toHaveBeenCalledTimes(0);
    expect((radio.children[0] as HTMLInputElement).checked).toBeFalsy();
  });
});
