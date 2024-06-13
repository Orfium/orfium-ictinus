// testUtils.tsx
import { render } from '@testing-library/react';
import type { ComponentType } from 'react';
import React from 'react';

import { ThemeProvider } from '~/index';

interface TestProps {
  'aria-label'?: string;
  'data-testid'?: string;
  title?: string;
  name?: string;
  className?: string;
  [key: string]: any;
}

type t = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export function testHtmlAttributes(Component: ComponentType<any>, props: TestProps = {}): void {
  const attributes = {
    'aria-label': 'aria-label-test',
    'data-testid': 'data-testid-test',
    id: 'id-test',
    className: 'class-name-test',
    ...props,
  };

  const { getByTestId } = render(
    <ThemeProvider>
      <Component {...attributes} />
    </ThemeProvider>
  );

  const element = getByTestId(attributes['data-testid']);
  expect(element).toHaveAttribute('aria-label', attributes['aria-label']);
  expect(element).toHaveAttribute('data-testid', attributes['data-testid']);
  expect(element).toHaveAttribute('id', attributes['id']);
  expect(element).toHaveClass(attributes['className']);
}
