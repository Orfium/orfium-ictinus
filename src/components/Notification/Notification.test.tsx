import React from 'react';
import Notification, { NotificationTypes, NotificationVariants } from './Notification';
import NotificationsContainer from './subcomponents/NotificationsContainer';
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

describe('Notifications Container', () => {
  const data = {
    title: 'title',
    message: 'message',
    variant: 'banner' as NotificationVariants,
    type: 'info' as NotificationTypes,
    withIcon: true,
    withFilling: false,
    primaryCTALabel: 'primaryCTALabel',
  };

  test('Notifications Container with 1 Banner Notification renders correctly', async () => {
    const primaryCTA = jest.fn();
    const closeCTA = jest.fn();

    const { findByText } = render(
      <NotificationsContainer position="top-right">
        <Notification {...data} primaryCTA={primaryCTA} closeCTA={closeCTA} />
      </NotificationsContainer>
    );

    const message = await findByText(data.message);
    expect(message).toBeTruthy();

    const primaryCTALabel = await findByText(data.primaryCTALabel);
    expect(primaryCTALabel).toBeTruthy();
  });

  test("Notifications Container Banner Notification's primaryCTA works properly when clicked", async () => {
    const primaryCTA = jest.fn();
    const closeCTA = jest.fn();

    const { findByText } = render(
      <NotificationsContainer position="top-right">
        <Notification {...data} primaryCTA={primaryCTA} closeCTA={closeCTA} />
      </NotificationsContainer>
    );

    const primaryCTALabel = await findByText(data.primaryCTALabel);
    expect(primaryCTALabel).toBeTruthy();
    fireEvent.click(primaryCTALabel);
    expect(primaryCTA).toHaveBeenCalledTimes(1);
  });

  test("Notifications Container Banner Notification's closeCTA works properly when clicked", async () => {
    const primaryCTA = jest.fn();
    const closeCTA = jest.fn();

    const { findByTestId } = render(
      <NotificationsContainer position="top-right">
        <Notification {...data} primaryCTA={primaryCTA} closeCTA={closeCTA} />
      </NotificationsContainer>
    );

    const closeButton = await findByTestId('notification-close');

    fireEvent.click(closeButton);
    expect(closeCTA).toHaveBeenCalledTimes(1);
  });
});
