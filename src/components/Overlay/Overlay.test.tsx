import React from 'react';

import { render, fireEvent } from '../../test';
import Overlay from './Overlay';

describe('Overlay', () => {
  const content = 'content';

  test('Overlay renders correctly', async () => {
    const closeCTA = jest.fn();

    const { findByText, findByTestId } = render(
      <Overlay isOpen={true} size={'33%'} onClose={closeCTA}>
        {content}
      </Overlay>
    );

    const overlayContainer = await findByTestId('overlay-container');
    expect(overlayContainer).toBeTruthy();

    const overlayContent = await findByText(content);
    expect(overlayContent).toBeTruthy();
  });

  test('Overlay closeCTA works properly when clicked', async () => {
    const closeCTA = jest.fn();

    const { findByTestId } = render(<Overlay isOpen={true} size={'33%'} onClose={closeCTA} />);

    const closeButton = await findByTestId('icon-button-overlay-close');
    fireEvent.click(closeButton);

    expect(closeCTA).toHaveBeenCalledTimes(1);
  });

  test('Overlay closeCTA will get triggered when Esc button is clicked', async () => {
    const closeCTA = jest.fn();

    render(<Overlay isOpen={true} size={'33%'} onClose={closeCTA} />);

    fireEvent.keyDown(document.body, {
      key: 'Escape',
      keyCode: 27,
      which: 27,
    });

    expect(closeCTA).toHaveBeenCalledTimes(1);
  });
});
