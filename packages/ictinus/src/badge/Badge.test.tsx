import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { BookmarkIcon } from '../icons';
import { render, screen } from '../test';
import { Text } from '../vanilla/Text';
import { Badge, CodeBadge } from './Badge';

describe('Badge', () => {
  it('renders a span with the given children', () => {
    render(<Badge data-testid="badge">Default Badge</Badge>);

    const badge = screen.getByTestId('badge');
    expect(badge).toBeInTheDocument();
    expect(badge.tagName).toBe('SPAN');
    expect(badge).toHaveTextContent('Default Badge');
  });

  it('wraps string children in a Text element', () => {
    render(<Badge data-testid="badge">Hello</Badge>);

    const text = screen.getByTestId('badge').querySelector('[data-slot="text"]');
    expect(text).not.toBeNull();
    expect(text).toHaveTextContent('Hello');
  });

  it('passes non-string children through untouched', () => {
    render(
      <Badge data-testid="badge">
        <span data-testid="custom-child">Custom</span>
      </Badge>
    );

    const child = screen.getByTestId('custom-child');
    expect(child).toBeInTheDocument();
    expect(screen.getByTestId('badge').querySelector('[data-slot="text"]')).toBeNull();
  });

  it('renders an icon alongside text and applies icon slot props', () => {
    render(
      <Badge data-testid="badge">
        <BookmarkIcon aria-label="bookmark" />
        <Text>Neutral</Text>
      </Badge>
    );

    const badge = screen.getByTestId('badge');
    const icon = badge.querySelector('[data-slot="icon"]');
    expect(icon).not.toBeNull();
    expect(badge.querySelector('[data-slot="text"]')).toHaveTextContent('Neutral');
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
    const ref = createRef<HTMLSpanElement>();
    render(
      <Badge ref={ref} data-testid="badge">
        Badge
      </Badge>
    );

    expect(ref.current).toBe(screen.getByTestId('badge'));
  });
});

describe('CodeBadge', () => {
  it('renders a span with the given children', () => {
    render(<CodeBadge data-testid="code-badge">c0d31a831</CodeBadge>);

    const badge = screen.getByTestId('code-badge');
    expect(badge).toBeInTheDocument();
    expect(badge.tagName).toBe('SPAN');
    expect(badge).toHaveTextContent('c0d31a831');
  });

  it('wraps string children in a Text element', () => {
    render(<CodeBadge data-testid="code-badge">c0d31a831</CodeBadge>);

    const text = screen.getByTestId('code-badge').querySelector('[data-slot="text"]');
    expect(text).not.toBeNull();
    expect(text).toHaveTextContent('c0d31a831');
  });

  it('passes non-string children through untouched', () => {
    render(
      <CodeBadge data-testid="code-badge">
        <span data-testid="custom-child">Custom</span>
      </CodeBadge>
    );

    const child = screen.getByTestId('custom-child');
    expect(child).toBeInTheDocument();
    expect(screen.getByTestId('code-badge').querySelector('[data-slot="text"]')).toBeNull();
  });

  it('renders an icon alongside text and applies icon slot props', () => {
    render(
      <CodeBadge data-testid="code-badge">
        <BookmarkIcon aria-label="bookmark" />
        <Text>Code</Text>
      </CodeBadge>
    );

    const badge = screen.getByTestId('code-badge');
    const icon = badge.querySelector('[data-slot="icon"]');
    expect(icon).not.toBeNull();
    expect(badge.querySelector('[data-slot="text"]')).toHaveTextContent('Code');
  });

  it('passes through dom props', () => {
    render(
      <CodeBadge
        data-testid="code-badge"
        id="custom-code-badge-id"
        data-custom="code-badge-value"
        data-aria-describedby="code-badge-description"
      >
        c0d31a831
      </CodeBadge>
    );

    const badge = screen.getByTestId('code-badge');
    expect(badge).toHaveAttribute('id', 'custom-code-badge-id');
    expect(badge).toHaveAttribute('data-custom', 'code-badge-value');
    expect(badge).toHaveAttribute('data-aria-describedby', 'code-badge-description');
  });

  it('merges className correctly', () => {
    render(
      <CodeBadge data-testid="code-badge" className="custom-code-badge-class">
        c0d31a831
      </CodeBadge>
    );

    const badge = screen.getByTestId('code-badge');
    expect(badge).toHaveClass('custom-code-badge-class');
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLSpanElement>();
    render(
      <CodeBadge ref={ref} data-testid="code-badge">
        c0d31a831
      </CodeBadge>
    );

    expect(ref.current).toBe(screen.getByTestId('code-badge'));
  });
});
