import React from 'react';
import InlineNotification from './InlineNotification';
import Banner from './Banner';
import NotificationsContainer from './NotificationsContainer';
import { NotificationTypes } from './Notification';
import { render, fireEvent } from '../../test';

describe('Inline Notification', () => {
  const data = {
    withIcon: true,
    withFilling: false,
    message: 'message',
    type: 'info' as NotificationTypes,
    primaryCTALabel: 'primaryCTALabel',
  };

  test('Inline Notification renders correctly', async () => {
    const primaryCTA = jest.fn();
    const closeCTA = jest.fn();

    const { findByText } = render(
      <InlineNotification {...data} primaryCTA={primaryCTA} closeCTA={closeCTA} />
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
      <InlineNotification {...data} primaryCTA={primaryCTA} closeCTA={closeCTA} />
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
      <InlineNotification {...data} primaryCTA={primaryCTA} closeCTA={closeCTA} />
    );

    const closeButton = await findByTestId('notification-close');
    fireEvent.click(closeButton);

    expect(closeCTA).toHaveBeenCalledTimes(1);
  });
});

describe('Notifications Container', () => {
  const data = {
    withIcon: true,
    withFilling: false,
    title: 'title',
    message: 'message',
    type: 'info' as NotificationTypes,
    primaryCTALabel: 'primaryCTALabel',
  };

  test('Notifications Container with 1 Banner Notification renders correctly', async () => {
    const primaryCTA = jest.fn();
    const closeCTA = jest.fn();

    const { findByText } = render(
      <NotificationsContainer position="top-right">
        <Banner {...data} primaryCTA={primaryCTA} closeCTA={closeCTA} />
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
        <Banner {...data} primaryCTA={primaryCTA} closeCTA={closeCTA} />
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
        <Banner {...data} primaryCTA={primaryCTA} closeCTA={closeCTA} />
      </NotificationsContainer>
    );

    const closeButton = await findByTestId('notification-close');

    fireEvent.click(closeButton);
    expect(closeCTA).toHaveBeenCalledTimes(1);
  });
});
