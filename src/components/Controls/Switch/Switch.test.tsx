import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen } from '../../../test';
import Switch from './Switch';

describe('Switch', () => {
  let mockOnClick: jest.Mock<any, any>;

  beforeEach(() => {
    mockOnClick = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('it renders the Switch correctly', () => {
    const { container } = render(<Switch>Label</Switch>);

    expect(container).toMatchSnapshot();
  });

  it('should be able to change its check condition', async () => {
    const { getAllByTestId } = render(<Switch />);

    const switchComponent = screen.getByTestId('undefined_undefined_switch');

    expect(switchComponent.getAttribute('data-selected')).toEqual(null);

    userEvent.click(switchComponent);

    expect(switchComponent.getAttribute('data-selected')).toEqual('true');
  });

  it('should invoke the onChange function', () => {
    render(<Switch isSelected={false} onChange={mockOnClick} />);
    const switchComponent = screen.getByTestId('undefined_undefined_switch');

    userEvent.click(switchComponent);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should not invoke the onChange function if the switch is disabled', () => {
    render(<Switch isSelected={false} onChange={mockOnClick} isDisabled />);
    const switchComponent = screen.getByTestId('undefined_undefined_switch');

    userEvent.click(switchComponent);

    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });
});
