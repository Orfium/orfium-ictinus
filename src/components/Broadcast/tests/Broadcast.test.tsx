import { fireEvent, render, screen } from '~/test';
import { Broadcast } from '../Broadcast';
import Link from '~/components/Link';
import Button from '~/components/Button';
import { createRef } from 'react';

describe('<Broadcast />', () => {
  it('renders with default props', () => {
    render(<Broadcast>Default</Broadcast>);

    expect(screen.getByText('Default')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('applies correct ARIA attributes', () => {
    render(
      <Broadcast status="error" onDismiss={() => {}}>
        ARIA test
      </Broadcast>
    );

    const alert = screen.getByRole('alert');

    expect(alert).toHaveAttribute('role', 'alert');
    expect(alert).toHaveAttribute('aria-describedby');
  });

  it('forwards ref correctly', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Broadcast ref={ref}>Ref test</Broadcast>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  describe('actions', () => {
    it('renders with link', () => {
      render(<Broadcast actions={<Link>Single Action</Link>}>With actions</Broadcast>);

      expect(screen.getByText('Single Action')).toBeInTheDocument();
    });

    it('renders with buttons', () => {
      render(
        <Broadcast actions={[<Button>Button 1</Button>, <Button>Button 2</Button>]}>
          With actions
        </Broadcast>
      );

      expect(screen.getByText('Button 1')).toBeInTheDocument();
      expect(screen.getByText('Button 2')).toBeInTheDocument();
    });
  });

  describe('onDismiss', () => {
    it('calls onDismiss when close icon is clicked', () => {
      const onDismiss = vi.fn();
      render(<Broadcast onDismiss={onDismiss}>With dismiss</Broadcast>);

      const closeButton = screen.getByRole('button', { name: 'Dismiss notification' });
      fireEvent.click(closeButton);
      expect(onDismiss).toHaveBeenCalledTimes(1);
    });
  });
});
