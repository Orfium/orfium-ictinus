import userEvent from '@testing-library/user-event';
import type { Mock } from 'vitest';
import { vi } from 'vitest';
import { render, screen } from '../../../test';
import Switch from './Switch';

describe('Switch', () => {
  let mockOnClick: Mock;

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

    const switchInput = screen.getByRole('switch');
    const switchLabel = screen.getByTestId('ictinus_switch');

    expect(switchLabel.getAttribute('data-selected')).toEqual(null);

    await userEvent.click(switchInput);

    expect(switchLabel.getAttribute('data-selected')).toEqual('true');
  });

  it('should invoke the onChange function', async () => {
    render(<Switch isSelected={false} onChange={mockOnClick} />);
    const switchInput = screen.getByRole('switch');

    await userEvent.click(switchInput);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should not invoke the onChange function if the switch is disabled', async () => {
    render(<Switch isSelected={false} onChange={mockOnClick} isDisabled />);
    const switchInput = screen.getByRole('switch');

    await userEvent.click(switchInput);

    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });
});
