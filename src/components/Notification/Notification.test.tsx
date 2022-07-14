import React from 'react';

import { render, fireEvent } from '../../test';
import Toast from '../Toast';
import Banner from './Banner';
import InlineNotification from './InlineNotification';
import { NotificationTypes } from './Notification';
import NotificationsContainer from './NotificationsContainer';
import NotificationVisual from './NotificationVisual';
import Snackbar from './Snackbar';

describe('Inline Notification', () => {
  const data = {
    withIcon: true,
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
    title: 'Message heading',
    message: 'Informative Message',
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

describe('Toast Notification (Toast with NotificationVisual)', () => {
  const toastData = {
    message: 'message',
    type: 'info' as NotificationTypes,
  };

  const visualData = {
    title: 'title',
    primaryCTALabel: 'primaryCTALabel',
    secondaryCTALabel: 'secondaryCTALabel',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra neque nec est porttitor',
  };

  test('Toast with NotificationVisual renders correctly', async () => {
    const primaryCTA = jest.fn();
    const secondaryCTA = jest.fn();
    const closeCTA = jest.fn();

    const { findByText } = render(
      <Toast {...toastData} closeCTA={closeCTA}>
        <NotificationVisual {...visualData} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
      </Toast>
    );

    // Toast is initialized with expanded=false

    const message = await findByText(toastData.message);
    expect(message).toBeTruthy();
  });

  test('Toast with NotificationVisual expands/shrinks correctly', async () => {
    const primaryCTA = jest.fn();
    const secondaryCTA = jest.fn();
    const closeCTA = jest.fn();

    const { findByTestId, findByText } = render(
      <Toast {...toastData} closeCTA={closeCTA}>
        <NotificationVisual {...visualData} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
      </Toast>
    );

    // Toast is initialized with expanded=false
    // Note: The NotificationVisual is rendered regardless of the isExpanded value, so it can be always found in document
    // If isExpanded=false, the min-height of the NotificationVisual is 0, else > 0.
    // So to test if the visual is visible or not, the only way to check it is check the min-height

    const expandButton = await findByTestId('toast-expand');
    const expandedContainer = await findByTestId('expanded-container');
    expect(expandedContainer).toHaveStyle('min-height: 0rem;');
    fireEvent.click(expandButton);
    expect(expandedContainer).toHaveStyle('min-height: 9.125rem;');

    const title = await findByText(visualData.title);
    expect(title).toBeTruthy();

    const primaryCTALabel = await findByText(visualData.primaryCTALabel);
    expect(primaryCTALabel).toBeTruthy();

    const secondaryCTALabel = await findByText(visualData.secondaryCTALabel);
    expect(secondaryCTALabel).toBeTruthy();

    const description = await findByText(visualData.description);
    expect(description).toBeTruthy();
  });

  test('Toast with NotificationVisual closeCTA works properly', async () => {
    const primaryCTA = jest.fn();
    const secondaryCTA = jest.fn();
    const closeCTA = jest.fn();

    const { findByTestId } = render(
      <Toast {...toastData} isExpanded closeCTA={closeCTA}>
        <NotificationVisual {...visualData} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
      </Toast>
    );

    const closeButton = await findByTestId('toast-close');
    fireEvent.click(closeButton);
    expect(closeCTA).toHaveBeenCalledTimes(1);
  });

  test('Toast with NotificationVisual primaryCTA and secondaryCTA work properly', async () => {
    const primaryCTA = jest.fn();
    const secondaryCTA = jest.fn();
    const closeCTA = jest.fn();

    const { findByTestId } = render(
      <Toast {...toastData} isExpanded closeCTA={closeCTA}>
        <NotificationVisual {...visualData} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
      </Toast>
    );

    const primaryCTALabel = await findByTestId('visual-primary');
    expect(primaryCTALabel.firstElementChild).not.toBeNull();
    fireEvent.click(primaryCTALabel.firstElementChild as Element);
    expect(primaryCTA).toHaveBeenCalledTimes(1);

    const secondaryCTALabel = await findByTestId('visual-secondary');
    expect(secondaryCTALabel.firstElementChild).not.toBeNull();
    fireEvent.click(secondaryCTALabel.firstElementChild as Element);
    expect(secondaryCTA).toHaveBeenCalledTimes(1);
  });
});

describe('Snackbar Notification', () => {
  const data = {
    message: 'message',
    type: 'info' as NotificationTypes,
    description: 'this is the description',
    primaryCTALabel: 'primaryCTALabel',
    secondaryCTALabel: 'secondaryCTALabel',
  };

  test('Snackbar Notification renders correctly', async () => {
    const primaryCTA = jest.fn();
    const secondaryCTA = jest.fn();
    const closeCTA = jest.fn();

    const { findByText } = render(
      <Snackbar {...data} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} closeCTA={closeCTA} />
    );

    const message = await findByText(data.message);
    expect(message).toBeTruthy();

    const description = await findByText(data.description);
    expect(description).toBeTruthy();

    const primaryCTALabel = await findByText(data.primaryCTALabel);
    expect(primaryCTALabel).toBeTruthy();

    const secondaryCTALabel = await findByText(data.secondaryCTALabel);
    expect(secondaryCTALabel).toBeTruthy();
  });

  test("Snackbar Notification's closeCTA works properly", async () => {
    const primaryCTA = jest.fn();
    const secondaryCTA = jest.fn();
    const closeCTA = jest.fn();

    const { findByTestId } = render(
      <Snackbar {...data} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} closeCTA={closeCTA} />
    );

    const closeButton = await findByTestId('snackbar-close');
    fireEvent.click(closeButton);
    expect(closeCTA).toHaveBeenCalledTimes(1);
  });

  test("Snackbar Notification's primaryCTA and secondaryCTA work properly", async () => {
    const primaryCTA = jest.fn();
    const secondaryCTA = jest.fn();
    const closeCTA = jest.fn();

    const { findByTestId } = render(
      <Snackbar {...data} primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} closeCTA={closeCTA} />
    );

    const primaryCTALabel = await findByTestId('snackbar-primary');
    expect(primaryCTALabel.firstElementChild).not.toBeNull();
    fireEvent.click(primaryCTALabel.firstElementChild as Element);
    expect(primaryCTA).toHaveBeenCalledTimes(1);

    const secondaryCTALabel = await findByTestId('snackbar-secondary');
    expect(secondaryCTALabel.firstElementChild).not.toBeNull();
    fireEvent.click(secondaryCTALabel.firstElementChild as Element);
    expect(secondaryCTA).toHaveBeenCalledTimes(1);
  });
});
