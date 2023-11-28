import { css } from '@emotion/react';
import React from 'react';

import { render, fireEvent } from '../../test';
import Toast from './Toast';

describe('Generic Toast', () => {
  const data = {
    message: 'message',
  };

  test('Generic Toast with simple visual renders correctly', async () => {
    const closeCTA = vi.fn();

    const { findByText } = render(
      <Toast {...data} closeCTA={closeCTA}>
        <div css={css`"width: 1024px; height: 768px;"`}>
          <h1>container-test-data</h1>
        </div>
      </Toast>
    );

    const message = await findByText(data.message);
    expect(message).toBeTruthy();
  });

  test('Generic Toast with simple visual expands/shrinks correctly', async () => {
    const closeCTA = vi.fn();

    const { findByTestId, findByText } = render(
      <Toast {...data} closeCTA={closeCTA}>
        <h1>container-test-data</h1>
      </Toast>
    );

    // Toast is initialized with isExpanded=false
    // Note: The visual is rendered regardless of the isExpanded value, so it can be always found in document
    // If isExpanded=false, the min-height of the visual is 0, else > 0.
    // So to test if the visual is visible or not, the only way to check it is check the min-height

    const expandButton = await findByTestId('toast-expand');
    const expandedContainer = await findByTestId('expanded-container');
    expect(expandedContainer).toHaveStyle('min-height: 0rem;');
    fireEvent.click(expandButton);
    expect(expandedContainer).toHaveStyle('min-height: 9.125rem;');

    const containerText = await findByText('container-test-data');
    expect(containerText).toBeTruthy();
  });

  test('Generic Toast with simple visual closeCTA works properly', async () => {
    const closeCTA = vi.fn();

    const { findByTestId } = render(
      <Toast {...data} closeCTA={closeCTA}>
        <h1>container-test-data</h1>
      </Toast>
    );

    const closeButton = await findByTestId('toast-close');
    fireEvent.click(closeButton);
    expect(closeCTA).toHaveBeenCalledTimes(1);
  });
});
