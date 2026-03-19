import userEvent from '@testing-library/user-event';
import type { Mock } from 'vitest';
import { vi } from 'vitest';
import { CloseIcon, PlusIcon } from '../icons';
import { render, screen } from '../test';
import { Button } from './Button';

describe('Button', () => {
  let mockOnPress: Mock;

  beforeEach(() => {
    mockOnPress = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('rendering', () => {
    it('renders with default props and displays label', () => {
      render(<Button>Click me</Button>);

      const button = screen.getByRole('button', { name: 'Click me' });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('data-variant', 'primary');
      expect(button).toHaveAttribute('data-size', 'normal');
    });

    it('renders string children wrapped in accessible text', () => {
      render(<Button>Submit</Button>);
      expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    });

    it('renders with each variant', () => {
      const { rerender } = render(<Button variant="primary">Primary</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('data-variant', 'primary');

      rerender(<Button variant="secondary">Secondary</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('data-variant', 'secondary');

      rerender(<Button variant="tertiary">Tertiary</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('data-variant', 'tertiary');

      rerender(<Button variant="danger">Danger</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('data-variant', 'danger');
    });

    it('renders with each size', () => {
      const { rerender } = render(<Button size="normal">Normal</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('data-size', 'normal');

      rerender(<Button size="compact">Compact</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('data-size', 'compact');
    });

    it('merges custom className with internal styles', () => {
      render(
        <Button className="custom-class" data-testid="btn">
          Label
        </Button>
      );
      const button = screen.getByTestId('btn');
      expect(button).toHaveClass('custom-class');
    });

    it('forwards data attributes and other DOM props', () => {
      render(
        <Button data-testid="action-btn" id="submit-btn" aria-label="Custom label">
          Save
        </Button>
      );
      const button = screen.getByTestId('action-btn');
      expect(button).toHaveAttribute('id', 'submit-btn');
      expect(button).toHaveAttribute('aria-label', 'Custom label');
    });
  });

  describe('interactions', () => {
    it('invokes onPress when clicked', async () => {
      render(<Button onPress={mockOnPress}>Click me</Button>);

      await userEvent.click(screen.getByRole('button', { name: 'Click me' }));

      expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it('does not invoke onPress when disabled', async () => {
      render(
        <Button onPress={mockOnPress} isDisabled>
          Click me
        </Button>
      );

      const button = screen.getByRole('button', { name: 'Click me' });
      expect(button).toBeDisabled();

      await userEvent.click(button);

      expect(mockOnPress).not.toHaveBeenCalled();
    });

    it('does not invoke onPress when pending', async () => {
      render(
        <Button onPress={mockOnPress} isPending aria-label="Saving">
          Saving
        </Button>
      );

      const button = screen.getByRole('button');
      await userEvent.click(button);

      expect(mockOnPress).not.toHaveBeenCalled();
    });
  });

  describe('disabled state', () => {
    it('sets disabled attribute when isDisabled is true', () => {
      render(<Button isDisabled>Disabled</Button>);
      expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled();
    });

    it('is not disabled when isDisabled is false', () => {
      render(<Button isDisabled={false}>Enabled</Button>);
      expect(screen.getByRole('button', { name: 'Enabled' })).not.toBeDisabled();
    });
  });

  describe('pending state', () => {
    it('sets aria-disabled when isPending is true', () => {
      render(
        <Button isPending aria-label="Saving">
          Saving
        </Button>
      );
      expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
    });

    it('renders progress indicator when isPending is true', () => {
      const { container } = render(
        <Button isPending aria-label="Saving">
          Saving
        </Button>
      );

      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('passes aria-label to button and progress indicator when pending', () => {
      render(
        <Button isPending aria-label="Saving your changes">
          Save
        </Button>
      );
      const button = screen.getByRole('button');
      const progressbar = screen.getByRole('progressbar', { name: 'Saving your changes' });
      expect(button).toHaveAttribute('aria-label', 'Saving your changes');
      expect(progressbar).toHaveAttribute('aria-label', 'Saving your changes');
    });
  });

  describe('ref forwarding', () => {
    it('forwards ref to the underlying button element', () => {
      const ref = vi.fn();
      render(
        <Button ref={ref} data-testid="ref-btn">
          Ref button
        </Button>
      );

      const button = screen.getByTestId('ref-btn');
      expect(ref).toHaveBeenCalledWith(button);
      expect(button.tagName).toBe('BUTTON');
    });
  });

  describe('iconOnly and circle', () => {
    it('applies iconOnly styling when iconOnly is true', () => {
      render(
        <Button iconOnly aria-label="Close">
          <CloseIcon />
        </Button>
      );
      const button = screen.getByRole('button', { name: 'Close' });
      expect(button).toBeInTheDocument();

      expect(button).toHaveAttribute('data-variant', 'primary');
    });

    it('renders with circle and iconOnly for icon buttons', () => {
      render(
        <Button iconOnly circle aria-label="Add">
          <PlusIcon />
        </Button>
      );
      expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
    });
  });
});
