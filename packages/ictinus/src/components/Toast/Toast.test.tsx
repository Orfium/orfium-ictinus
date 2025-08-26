import userEvent from '@testing-library/user-event';
import { render, screen } from '~/test';
import Button from '../Button';
import Link from '../Link';
import { Toast } from './Toast';

describe('<Toast />', () => {
  const mockState = {
    close: vi.fn(),
    visibleToasts: [],
    add: vi.fn(),
    pauseAll: vi.fn(),
    resumeAll: vi.fn(),
  };

  const mockToast = {
    key: 'test-toast',
    content: {
      children: 'Toast messages should be clear and short.',
      status: 'neutral' as const,
      shouldCloseOnAction: false,
    },
  };

  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders with basic content', () => {
    render(<Toast toast={mockToast} state={mockState} />);

    expect(screen.getByText('Toast messages should be clear and short.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Dismiss toast' })).toBeInTheDocument();
  });

  it('does not render status icon for neutral status', () => {
    render(<Toast toast={mockToast} state={mockState} />);

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  describe('actions', () => {
    it('renders single action', () => {
      const toastWithAction = {
        ...mockToast,
        content: {
          ...mockToast.content,
          actions: <Link>Single Action</Link>,
        },
      };

      render(<Toast toast={toastWithAction} state={mockState} />);

      expect(screen.getByText('Single Action')).toBeInTheDocument();
    });

    it('renders multiple actions', () => {
      const toastWithActions = {
        ...mockToast,
        content: {
          ...mockToast.content,
          actions: [<Button>Tertiary</Button>, <Button>Primary</Button>],
        },
      };

      render(<Toast toast={toastWithActions} state={mockState} />);

      expect(screen.getByText('Tertiary')).toBeInTheDocument();
      expect(screen.getByText('Primary')).toBeInTheDocument();
    });

    it('closes toast when action is clicked and shouldCloseOnAction is true', async () => {
      const toastWithCloseAction = {
        ...mockToast,
        content: {
          ...mockToast.content,
          shouldCloseOnAction: true,
          actions: <Link>Single Action</Link>,
        },
      };

      render(<Toast toast={toastWithCloseAction} state={mockState} />);

      const actionButton = screen.getByText('Single Action');
      await user.click(actionButton);

      expect(mockState.close).toHaveBeenCalledWith('test-toast');
    });

    it('does not close toast when action is clicked and shouldCloseOnAction is false', async () => {
      const toastWithAction = {
        ...mockToast,
        content: {
          ...mockToast.content,
          shouldCloseOnAction: false,
          actions: <Link>Single Action</Link>,
        },
      };

      render(<Toast toast={toastWithAction} state={mockState} />);

      const actionButton = screen.getByText('Single Action');
      await user.click(actionButton);

      expect(mockState.close).not.toHaveBeenCalled();
    });
  });
});
