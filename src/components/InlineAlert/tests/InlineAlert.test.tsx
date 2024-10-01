import { fireEvent, render, screen } from '~/test';
import { InlineAlert } from '../InlineAlert';
import Link from '~/components/Link';
import Button from '~/components/Button';
import { createRef } from 'react';

describe('<InlineAlert />', () => {
  it('renders with default props', () => {
    render(<InlineAlert>Default</InlineAlert>);

    expect(screen.getByText('Default')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('applies correct ARIA attributes', () => {
    render(
      <InlineAlert status="error" onDismiss={() => {}}>
        ARIA test
      </InlineAlert>
    );

    const alert = screen.getByRole('alert');

    expect(alert).toHaveAttribute('role', 'alert');
    expect(alert).toHaveAttribute('aria-describedby');
  });

  it('forwards ref correctly', () => {
    const ref = createRef<HTMLDivElement>();

    render(<InlineAlert ref={ref}>Ref test</InlineAlert>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  describe('actions', () => {
    it('renders with link', () => {
      render(<InlineAlert actions={<Link>Single Action</Link>}>With actions</InlineAlert>);

      expect(screen.getByText('Single Action')).toBeInTheDocument();
    });

    it('renders with buttons', () => {
      render(
        <InlineAlert actions={[<Button>Button 1</Button>, <Button>Button 2</Button>]}>
          With actions
        </InlineAlert>
      );

      expect(screen.getByText('Button 1')).toBeInTheDocument();
      expect(screen.getByText('Button 2')).toBeInTheDocument();
    });
  });

  describe('onDismiss', () => {
    it('calls onDismiss when close icon is clicked', () => {
      const onDismiss = vi.fn();
      render(<InlineAlert onDismiss={onDismiss}>With dismiss</InlineAlert>);

      const closeButton = screen.getByRole('button', { name: 'Dismiss notification' });
      fireEvent.click(closeButton);
      expect(onDismiss).toHaveBeenCalledTimes(1);
    });
  });
});
