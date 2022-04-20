import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen } from '../../test';
import Switch from './Switch';

const mockChange = jest.fn();

describe('Switch', () => {
  it('will correctly call onChange when clicked', () => {
    render(<Switch checked={false} onChange={mockChange} />);
    const switchComponent = screen.getByTestId('switch');

    userEvent.click(switchComponent);

    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledWith(true, expect.anything(), undefined);
  });
});
