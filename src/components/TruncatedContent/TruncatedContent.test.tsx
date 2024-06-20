import { fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { render } from '../../test';
import TruncatedContent from './TruncatedContent';

const longText =
  'This is a very very very very very very very very very very very very very very very very long text';
const tooltipText = 'This is a tooltip';

const originalScrollWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollWidth');
const originalOffsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth');

describe('TruncatedContent', () => {
  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
      value: 180,
      configurable: true,
    });

    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      value: 100,
      configurable: true,
    });
  });

  afterAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
      value: originalScrollWidth,
    });

    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      value: originalOffsetWidth,
    });
  });

  test('will truncate content and show tooltip', async () => {
    const { findByText, getByText } = render(
      <div style={{ width: 100 }}>
        <TruncatedContent tooltipContent={tooltipText}>
          <span data-testid="long-text">{longText}</span>
        </TruncatedContent>
      </div>
    );

    const text = await findByText(longText);
    expect(text).toBeInTheDocument();

    await userEvent.hover(text);
    await waitFor(
      () => {
        expect(getByText(tooltipText)).toBeInTheDocument();
      },
      { timeout: 1500 }
    );
  });
});
