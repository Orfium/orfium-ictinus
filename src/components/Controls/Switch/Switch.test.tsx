import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen } from '../../../test';
import Switch from './Switch';
import { Mock } from 'vitest';

describe('Switch', () => {
  let mockOnClick: Mock<any, any>;

  beforeEach(() => {
    mockOnClick = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('it renders the Switch correctly', () => {
    const { container } = render(<Switch>Label</Switch>);

    expect(container).toMatchSnapshot();
  });

  it('should be able to change its check condition', async () => {
    render(<Switch />);

    const switchComponent = screen.getByTestId('ictinus_switch');

    expect(switchComponent.getAttribute('data-selected')).toEqual(null);

    await userEvent.click(switchComponent);

    expect(switchComponent.getAttribute('data-selected')).toEqual('true');
  });

  it('should invoke the onChange function', async () => {
    render(<Switch isSelected={false} onChange={mockOnClick} />);
    const switchComponent = screen.getByTestId('ictinus_switch');

    await userEvent.click(switchComponent);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should not invoke the onChange function if the switch is disabled', async () => {
    render(<Switch isSelected={false} onChange={mockOnClick} isDisabled />);
    const switchComponent = screen.getByTestId('ictinus_switch');

    await userEvent.click(switchComponent);

    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });
});