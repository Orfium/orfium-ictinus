import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { render, screen, waitFor } from '../test';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  describe('rendering', () => {
    it('renders with default props and fallback icon', () => {
      render(<Avatar data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      expect(avatar).toBeInTheDocument();
      expect(avatar.tagName).toBe('SPAN');

      const fallbackIcon = avatar.querySelector('svg');
      expect(fallbackIcon).toBeInTheDocument();
    });

    it('renders with initials', () => {
      render(<Avatar initials="JD" data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      expect(avatar).toBeInTheDocument();
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('renders with image', () => {
      render(<Avatar src="https://example.com/avatar.jpg" alt="John Doe" data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      expect(avatar).toBeInTheDocument();

      const image = avatar.querySelector('img');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', 'https://example.com/avatar.jpg');
      expect(image).toHaveAttribute('alt', 'John Doe');
    });

    it('renders with each colorScheme variant', () => {
      const { rerender } = render(<Avatar colorScheme="blue" initials="B" data-testid="avatar" />);
      expect(screen.getByTestId('avatar')).toBeInTheDocument();

      rerender(<Avatar colorScheme="red" initials="R" data-testid="avatar" />);
      expect(screen.getByTestId('avatar')).toBeInTheDocument();

      rerender(<Avatar colorScheme="purple" initials="P" data-testid="avatar" />);
      expect(screen.getByTestId('avatar')).toBeInTheDocument();

      rerender(<Avatar colorScheme="teal" initials="T" data-testid="avatar" />);
      expect(screen.getByTestId('avatar')).toBeInTheDocument();

      rerender(<Avatar colorScheme="orange" initials="O" data-testid="avatar" />);
      expect(screen.getByTestId('avatar')).toBeInTheDocument();
    });

    it('renders with each size variant', () => {
      const { rerender } = render(<Avatar size="1" initials="1" data-testid="avatar" />);
      expect(screen.getByTestId('avatar')).toBeInTheDocument();

      rerender(<Avatar size="2" initials="2" data-testid="avatar" />);
      expect(screen.getByTestId('avatar')).toBeInTheDocument();

      rerender(<Avatar size="3" initials="3" data-testid="avatar" />);
      expect(screen.getByTestId('avatar')).toBeInTheDocument();

      rerender(<Avatar size="4" initials="4" data-testid="avatar" />);
      expect(screen.getByTestId('avatar')).toBeInTheDocument();

      rerender(<Avatar size="5" initials="5" data-testid="avatar" />);
      expect(screen.getByTestId('avatar')).toBeInTheDocument();

      rerender(<Avatar size="6" initials="6" data-testid="avatar" />);
      expect(screen.getByTestId('avatar')).toBeInTheDocument();
    });

    it('merges custom className with internal styles', () => {
      render(<Avatar className="custom-class" initials="TC" data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      expect(avatar).toHaveClass('custom-class');
    });

    it('forwards data attributes and other DOM props', () => {
      render(<Avatar initials="DA" data-testid="data-avatar" id="avatar-id" />);

      const avatar = screen.getByTestId('data-avatar');
      expect(avatar).toHaveAttribute('id', 'avatar-id');
    });
  });

  describe('image error handling', () => {
    it('falls back to initials when image fails to load', async () => {
      render(
        <Avatar src="https://broken-image.com/missing.jpg" initials="FB" data-testid="avatar" />
      );

      const avatar = screen.getByTestId('avatar');
      const image = avatar.querySelector('img');
      expect(image).toBeInTheDocument();

      // Simulate image error
      if (image) {
        userEvent.setup();
        image.dispatchEvent(new Event('error'));
      }

      await waitFor(() => {
        expect(avatar.querySelector('img')).not.toBeInTheDocument();
        expect(screen.getByText('FB')).toBeInTheDocument();
      });
    });

    it('falls back to default icon when image fails and no initials provided', async () => {
      render(<Avatar src="https://broken-image.com/missing.jpg" data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      const image = avatar.querySelector('img');
      expect(image).toBeInTheDocument();

      // Simulate image error
      if (image) {
        userEvent.setup();
        image.dispatchEvent(new Event('error'));
      }

      await waitFor(() => {
        expect(avatar.querySelector('img')).not.toBeInTheDocument();
        expect(avatar.querySelector('svg')).toBeInTheDocument();
      });
    });
  });

  describe('content priority', () => {
    it('prioritizes image over initials', () => {
      render(<Avatar src="https://example.com/avatar.jpg" initials="JD" data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      expect(avatar.querySelector('img')).toBeInTheDocument();
      expect(screen.queryByText('JD')).not.toBeInTheDocument();
    });

    it('shows initials when no image provided', () => {
      render(<Avatar initials="JD" data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      expect(screen.getByText('JD')).toBeInTheDocument();
      expect(avatar.querySelector('img')).not.toBeInTheDocument();
      expect(avatar.querySelector('svg')).not.toBeInTheDocument();
    });

    it('shows fallback icon when no image or initials provided', () => {
      render(<Avatar data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      expect(avatar.querySelector('svg')).toBeInTheDocument();
      expect(avatar.querySelector('img')).not.toBeInTheDocument();
    });
  });

  describe('ref forwarding', () => {
    it('forwards ref to the underlying span element', () => {
      const ref = vi.fn();
      render(<Avatar ref={ref} initials="RF" data-testid="ref-avatar" />);

      const avatar = screen.getByTestId('ref-avatar');
      expect(ref).toHaveBeenCalledWith(avatar);
      expect(avatar.tagName).toBe('SPAN');
    });
  });
});
