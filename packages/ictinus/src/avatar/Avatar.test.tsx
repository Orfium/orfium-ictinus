import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { UserIcon } from '../icons';
import { render, screen, waitFor } from '../test';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  describe('rendering', () => {
    it('renders with default props and fallback icon', () => {
      render(<Avatar data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      expect(avatar).toBeInTheDocument();
      expect(avatar).toHaveAttribute('aria-label', 'User avatar');
      expect(avatar).toHaveAttribute('role', 'img');

      const fallbackIcon = avatar.querySelector('svg');
      expect(fallbackIcon).toBeInTheDocument();
    });

    it('renders with initials', () => {
      render(<Avatar initials="JD" data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      expect(avatar).toBeInTheDocument();
      expect(avatar).toHaveAttribute('aria-label', 'Avatar with initials JD');
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('renders with image', () => {
      render(<Avatar src="https://example.com/avatar.jpg" alt="John Doe" data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      expect(avatar).toBeInTheDocument();
      expect(avatar).toHaveAttribute('aria-label', 'John Doe');

      const image = avatar.querySelector('img');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', 'https://example.com/avatar.jpg');
      expect(image).toHaveAttribute('alt', 'John Doe');
    });

    it('renders with custom children', () => {
      render(
        <Avatar data-testid="avatar">
          <UserIcon data-testid="custom-icon" />
        </Avatar>
      );

      const avatar = screen.getByTestId('avatar');
      expect(avatar).toBeInTheDocument();
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('renders with each color variant', () => {
      const { rerender } = render(<Avatar color="blue" initials="B" data-testid="avatar" />);
      expect(screen.getByTestId('avatar')).toBeInTheDocument();

      rerender(<Avatar color="red" initials="R" data-testid="avatar" />);
      expect(screen.getByTestId('avatar')).toBeInTheDocument();

      rerender(<Avatar color="purple" initials="P" data-testid="avatar" />);
      expect(screen.getByTestId('avatar')).toBeInTheDocument();

      rerender(<Avatar color="teal" initials="T" data-testid="avatar" />);
      expect(screen.getByTestId('avatar')).toBeInTheDocument();

      rerender(<Avatar color="orange" initials="O" data-testid="avatar" />);
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
      render(
        <Avatar
          initials="DA"
          data-testid="data-avatar"
          id="avatar-id"
          aria-label="Custom avatar label"
        />
      );

      const avatar = screen.getByTestId('data-avatar');
      expect(avatar).toHaveAttribute('id', 'avatar-id');
      expect(avatar).toHaveAttribute('aria-label', 'Custom avatar label');
    });
  });

  describe('accessibility', () => {
    it('generates aria-label for initials', () => {
      render(<Avatar initials="AB" />);
      expect(screen.getByLabelText('Avatar with initials AB')).toBeInTheDocument();
    });

    it('uses alt text as aria-label when provided', () => {
      render(<Avatar src="https://example.com/avatar.jpg" alt="Profile picture" />);
      expect(screen.getByLabelText('Profile picture')).toBeInTheDocument();
    });

    it('uses custom aria-label when provided', () => {
      render(<Avatar initials="JD" aria-label="John Doe's avatar" />);
      expect(screen.getByLabelText("John Doe's avatar")).toBeInTheDocument();
    });

    it('provides default aria-label for image without alt', () => {
      render(<Avatar src="https://example.com/avatar.jpg" />);
      expect(screen.getByLabelText('User avatar')).toBeInTheDocument();
    });

    it('provides default aria-label for fallback icon', () => {
      render(<Avatar />);
      expect(screen.getByLabelText('User avatar')).toBeInTheDocument();
    });
  });

  describe('image error handling', () => {
    it('falls back to initials when image fails to load', async () => {
      render(<Avatar src="https://broken-image.com/missing.jpg" initials="FB" />);

      const avatar = screen.getByLabelText('User avatar');
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
        expect(avatar).toHaveAttribute('aria-label', 'Avatar with initials FB');
      });
    });

    it('falls back to default icon when image fails and no initials provided', async () => {
      render(<Avatar src="https://broken-image.com/missing.jpg" />);

      const avatar = screen.getByLabelText('User avatar');
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

    it('falls back to children when image fails and children provided', async () => {
      render(
        <Avatar src="https://broken-image.com/missing.jpg">
          <UserIcon data-testid="fallback-icon" />
        </Avatar>
      );

      const avatar = screen.getByLabelText('User avatar');
      const image = avatar.querySelector('img');
      expect(image).toBeInTheDocument();

      // Simulate image error
      if (image) {
        userEvent.setup();
        image.dispatchEvent(new Event('error'));
      }

      await waitFor(() => {
        expect(avatar.querySelector('img')).not.toBeInTheDocument();
        expect(screen.getByTestId('fallback-icon')).toBeInTheDocument();
      });
    });
  });

  describe('content priority', () => {
    it('prioritizes image over initials', () => {
      render(<Avatar src="https://example.com/avatar.jpg" initials="JD" />);

      const avatar = screen.getByLabelText('User avatar');
      expect(avatar.querySelector('img')).toBeInTheDocument();
      expect(screen.queryByText('JD')).not.toBeInTheDocument();
    });

    it('prioritizes children over initials', () => {
      render(
        <Avatar initials="JD">
          <UserIcon data-testid="child-icon" />
        </Avatar>
      );

      expect(screen.getByTestId('child-icon')).toBeInTheDocument();
      expect(screen.queryByText('JD')).not.toBeInTheDocument();
    });

    it('prioritizes image over children', () => {
      render(
        <Avatar src="https://example.com/avatar.jpg">
          <UserIcon data-testid="child-icon" />
        </Avatar>
      );

      const avatar = screen.getByLabelText('User avatar');
      expect(avatar.querySelector('img')).toBeInTheDocument();
      expect(screen.queryByTestId('child-icon')).not.toBeInTheDocument();
    });
  });

  describe('ref forwarding', () => {
    it('forwards ref to the underlying div element', () => {
      const ref = vi.fn();
      render(<Avatar ref={ref} initials="RF" data-testid="ref-avatar" />);

      const avatar = screen.getByTestId('ref-avatar');
      expect(ref).toHaveBeenCalledWith(avatar);
      expect(avatar.tagName).toBe('DIV');
    });
  });

  describe('slot provider', () => {
    it('applies slot styles to icon children', () => {
      render(
        <Avatar data-testid="avatar">
          <UserIcon data-testid="slotted-icon" />
        </Avatar>
      );

      const icon = screen.getByTestId('slotted-icon');
      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });
  });
});
