import React from 'react';
import Notification, { NotificationTypes, NotificationVariants } from './Notification';
import { render, fireEvent } from '../../test';

describe('Inline Notification', () => {
  const data = {
    message: 'message',
    variant: 'inline' as NotificationVariants,
    type: 'info' as NotificationTypes,
    withIcon: true,
    withFilling: false,
    primaryCTALabel: 'primaryCTALabel',
  };

  test('Inline Notification renders correctly', async () => {
    const primaryCTA = jest.fn();
    const closeCTA = jest.fn();

    const { findByText } = render(
      <Notification {...data} primaryCTA={primaryCTA} closeCTA={closeCTA} />
    );

    const message = await findByText(data.message);
    expect(message).toBeTruthy();

    const primaryCTALabel = await findByText(data.primaryCTALabel);
    expect(primaryCTALabel).toBeTruthy();
  });

  test('Inline Notification primaryCTA works properly when clicked', async () => {
    const primaryCTA = jest.fn();
    const closeCTA = jest.fn();

    const { findByText } = render(
      <Notification {...data} primaryCTA={primaryCTA} closeCTA={closeCTA} />
    );

    const primaryCTALabel = await findByText(data.primaryCTALabel);
    expect(primaryCTALabel).toBeTruthy();

    fireEvent.click(primaryCTALabel);

    expect(primaryCTA).toHaveBeenCalledTimes(1);
  });

  test('Inline Notification closeCTA works properly when clicked', async () => {
    const primaryCTA = jest.fn();
    const closeCTA = jest.fn();

    const { findByTestId } = render(
      <Notification {...data} primaryCTA={primaryCTA} closeCTA={closeCTA} />
    );

    const closeButton = await findByTestId('notification-close');
    fireEvent.click(closeButton);

    expect(closeCTA).toHaveBeenCalledTimes(1);
  });
});
