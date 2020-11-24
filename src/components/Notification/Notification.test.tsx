import React from 'react';
import Notification, { NotificationTypes, NotificationVariants } from './Notification';
import BannersContainer from './subcomponents/BannersContainer';
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

describe('Banner Container', () => {
  const data1 = {
    title: 'title1',
    message: 'message1',
    variant: 'banner' as NotificationVariants,
    type: 'info' as NotificationTypes,
    withIcon: true,
    withFilling: false,
    primaryCTALabel: 'primaryCTALabel1',
  };

  const data2 = {
    title: 'title2',
    message: 'message2',
    variant: 'banner' as NotificationVariants,
    type: 'info' as NotificationTypes,
    withIcon: true,
    withFilling: false,
    primaryCTALabel: 'primaryCTALabel2',
  };

  test('Banner Container with 2 Inline Notifications renders correctly', async () => {
    const primaryCTA = jest.fn();
    const closeCTA = jest.fn();

    const { findByText } = render(
      <BannersContainer top={true} bottom={false} left={true} right={false}>
        <Notification {...data1} primaryCTA={primaryCTA} closeCTA={closeCTA} />
        <Notification {...data2} primaryCTA={primaryCTA} closeCTA={closeCTA} />
      </BannersContainer>
    );

    const message1 = await findByText(data1.message);
    expect(message1).toBeTruthy();

    const message2 = await findByText(data2.message);
    expect(message2).toBeTruthy();

    const primaryCTALabel1 = await findByText(data1.primaryCTALabel);
    expect(primaryCTALabel1).toBeTruthy();

    const primaryCTALabel2 = await findByText(data1.primaryCTALabel);
    expect(primaryCTALabel2).toBeTruthy();
  });

  test('Banner Container Inline Notifications primaryCTAs work properly when clicked', async () => {
    const primaryCTA1 = jest.fn();
    const closeCTA1 = jest.fn();
    const primaryCTA2 = jest.fn();
    const closeCTA2 = jest.fn();

    const { findByText } = render(
      <BannersContainer top={true} bottom={false} left={true} right={false}>
        <Notification {...data1} primaryCTA={primaryCTA1} closeCTA={closeCTA1} />
        <Notification {...data2} primaryCTA={primaryCTA2} closeCTA={closeCTA2} />
      </BannersContainer>
    );

    const primaryCTALabel1 = await findByText(data1.primaryCTALabel);
    expect(primaryCTALabel1).toBeTruthy();
    fireEvent.click(primaryCTALabel1);
    expect(primaryCTA1).toHaveBeenCalledTimes(1);

    const primaryCTALabel2 = await findByText(data2.primaryCTALabel);
    expect(primaryCTALabel2).toBeTruthy();
    fireEvent.click(primaryCTALabel2);
    expect(primaryCTA2).toHaveBeenCalledTimes(1);
  });

  test('Banner Container Inline Notifications closeCTAs work properly when clicked', async () => {
    const primaryCTA1 = jest.fn();
    const closeCTA1 = jest.fn();
    const primaryCTA2 = jest.fn();
    const closeCTA2 = jest.fn();

    const { findAllByTestId } = render(
      <BannersContainer top={true} bottom={false} left={true} right={false}>
        <Notification {...data1} primaryCTA={primaryCTA1} closeCTA={closeCTA1} />
        <Notification {...data2} primaryCTA={primaryCTA2} closeCTA={closeCTA2} />
      </BannersContainer>
    );

    const closeButtons = await findAllByTestId('notification-close');

    fireEvent.click(closeButtons[0]);
    expect(closeCTA1).toHaveBeenCalledTimes(1);
    fireEvent.click(closeButtons[1]);
    expect(closeCTA2).toHaveBeenCalledTimes(1);
  });
});
