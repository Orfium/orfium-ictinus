import { waitFor } from '@testing-library/react';
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
    });

    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      value: 100,
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
    const { getByTestId, getByText, debug } = render(
      <div style={{ width: 100 }}>
        <TruncatedContent tooltipContent={tooltipText}>
          <span data-testid="long-text">{longText}</span>
        </TruncatedContent>
      </div>
    );

    const text = getByTestId('long-text');
    expect(text).toBeInTheDocument();

    debug();
    function sleep(sleepMS) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, sleepMS);
      });
    }

    await userEvent.hover(text);
    await sleep(800);
    await waitFor(() => expect(getByText(tooltipText)).toBeInTheDocument(), {
      timeout: 1000,
      interval: 250,
    });
  });
});
