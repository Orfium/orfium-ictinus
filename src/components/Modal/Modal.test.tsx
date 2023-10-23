import React from 'react';

import { render, fireEvent } from '../../test';
import Modal from './Modal';
import ModalContent from './ModalContent';

describe('Modal', () => {
  const data = {
    label: 'label',
    heading: 'heading',
    message: 'message',
    primaryCTALabel: 'primaryCTALabel',
  };

  test('Modal renders correctly', async () => {
    const closeCTA = vi.fn();

    const { findByText, findByTestId } = render(
      <Modal isOpen={true} onClose={closeCTA} dataTestId={'modal'}>
        {data.message}
      </Modal>
    );

    const modalContainer = await findByTestId('modal-container-modal');
    expect(modalContainer).toBeTruthy();

    const message = await findByText(data.message);
    expect(message).toBeTruthy();
  });

  test('Modal renders correctly with ModalContent', async () => {
    const closeCTA = vi.fn();

    const { findByText, findByTestId } = render(
      <Modal isOpen={true} onClose={closeCTA} dataTestId={'modal'}>
        <ModalContent heading={data.heading} message={data.message} dataTestId={'content'} />
      </Modal>
    );

    const modalContent = await findByTestId('modal-content-content');
    expect(modalContent).toBeTruthy();

    const heading = await findByText(data.heading);
    expect(heading).toBeTruthy();

    const message = await findByText(data.message);
    expect(message).toBeTruthy();
  });

  test('Modal closeCTA works properly when clicked', async () => {
    const closeCTA = vi.fn();

    const { findByTestId } = render(
      <Modal isOpen={true} onClose={closeCTA} dataTestId={'modal'}>
        {data.message}
      </Modal>
    );

    const closeButton = await findByTestId('icon-button-modal-close');
    fireEvent.click(closeButton);

    expect(closeCTA).toHaveBeenCalledTimes(1);
  });

  test('Modal buttons works properly when clicked', async () => {
    const closeCTA = vi.fn();
    const primaryCTA = vi.fn();
    const secondaryCTA = vi.fn();

    const { findByTestId } = render(
      <Modal isOpen={true} onClose={closeCTA} dataTestId={'modal'}>
        <ModalContent
          heading={data.heading}
          message={data.message}
          dataTestId={'content'}
          primaryCTA={primaryCTA}
          primaryCTALabel={'primaryCTALabel'}
          secondaryCTA={secondaryCTA}
          secondaryCTALabel={'secondaryCTA'}
        />
      </Modal>
    );

    const primaryButton = await findByTestId('button-modal-content-primaryCTA');
    fireEvent.click(primaryButton);

    expect(primaryCTA).toHaveBeenCalledTimes(1);

    const secondaryButton = await findByTestId('button-modal-content-secondaryCTA');
    fireEvent.click(secondaryButton);

    expect(secondaryCTA).toHaveBeenCalledTimes(1);
  });
});
