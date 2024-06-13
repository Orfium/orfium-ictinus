import { render } from '@testing-library/react';
import type { ComponentType } from 'react';
import React from 'react';

import { ThemeProvider } from '~/index';

type TestProps = {
  'aria-label'?: string;
  'data-testid'?: string;
  title?: string;
  name?: string;
  className?: string;
  [key: string]: any;
};

/**
 * Test that the referred Component can have basic HTML attributes passed down
 **/
export const testHtmlAttributes = <P extends object>(
  Component: ComponentType<P>,
  additionalProps?: P & TestProps
) => {
  const attributes: P & TestProps = {
    'aria-label': 'aria-label-test',
    'data-testid': 'data-testid-test',
    id: 'id-test',
    className: 'class-name-test',
    ...additionalProps,
  };

  const renderResult = render(
    <ThemeProvider>
      <Component {...attributes} />
    </ThemeProvider>
  );

  const element = renderResult.getByTestId(attributes['data-testid']);
  expect(element).toHaveAttribute('aria-label', attributes['aria-label']);
  expect(element).toHaveAttribute('data-testid', attributes['data-testid']);
  expect(element).toHaveAttribute('id', attributes['id']);
  expect(element).toHaveClass(attributes['className']);

  return renderResult;
};
