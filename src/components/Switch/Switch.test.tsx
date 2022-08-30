import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen } from '../../test';
import Switch from './Switch';

const mockChange = jest.fn();

describe('Switch', () => {
  it('will correctly call onChange when clicked', () => {
    render(<Switch isChecked={false} onChange={mockChange} />);
    const switchComponent = screen.getByTestId('switch');

    userEvent.click(switchComponent);

    expect(mockChange).toHaveBeenCalledTimes(1);
    expect(mockChange).toHaveBeenCalledWith(true, expect.anything(), undefined);
  });

  it('will render the Switch with a label', () => {
    render(<Switch isChecked={false} label={'This is a label'} onChange={() => void 0} />);

    const label = screen.getByTestId('switch_label');

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('This is a label');
  });

  it('will render the Switch without a label', async () => {
    render(<Switch isChecked={false} onChange={() => void 0} />);

    expect(await screen.queryByTestId('switch_label')).toBeNull();
  });
});
