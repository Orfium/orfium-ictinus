import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '../../test';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders with default props', () => {
    render(<Badge data-testid="badge">Default Badge</Badge>);

    const badge = screen.getByTestId('badge');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute('data-variant', 'default');
    expect(badge).toHaveAttribute('data-size', 'normal');
    expect(badge).toHaveAttribute('data-color', 'neutral');
    expect(badge.tagName).toBe('SPAN');
  });

  it('renders with code variant and small size, omits data-color', () => {
    render(
      <Badge data-testid="badge" variant="code" size="small" color="teal">
        c0d31a831
      </Badge>
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveAttribute('data-variant', 'code');
    expect(badge).toHaveAttribute('data-size', 'small');
    expect(badge).not.toHaveAttribute('data-color');
  });

  it('renders with default variant and color', () => {
    render(
      <Badge data-testid="badge" variant="default" size="small" color="teal">
        Default
      </Badge>
    );
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveAttribute('data-variant', 'default');
    expect(badge).toHaveAttribute('data-size', 'small');
    expect(badge).toHaveAttribute('data-color', 'teal');
  });

  it('passes through dom props', () => {
    render(
      <Badge
        data-testid="badge"
        id="custom-badge-id"
        data-custom="badge-value"
        data-aria-describedby="badge-description"
      >
        Badge
      </Badge>
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveAttribute('id', 'custom-badge-id');
    expect(badge).toHaveAttribute('data-custom', 'badge-value');
    expect(badge).toHaveAttribute('data-aria-describedby', 'badge-description');
  });

  it('merges className correctly', () => {
    render(
      <Badge data-testid="badge" className="custom-badge-class">
        Badge
      </Badge>
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('custom-badge-class');
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Badge ref={ref} data-testid="badge">
        Badge
      </Badge>
    );

    expect(ref.current).toBe(screen.getByTestId('badge'));
  });
});
