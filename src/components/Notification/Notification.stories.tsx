import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import Toast from '../Toast';
import NotificationVisual from '../Notification/NotificationVisual';
import Snackbar from '../Notification/Snackbar';
import InlineNotification from '../Notification/InlineNotification';
import Banner from '../Notification/Banner';
import NotificationsContainer from '../Notification/NotificationsContainer';
import PresentComponent from '../storyUtils/PresentComponent';
import Stack from '../storyUtils/Stack';
import NotificationShowcase, {
  NotificationContainerWithinDOMElement,
} from '../storyUtils/NotificationShowcase';

export default {
  title: 'Original Components/Notification',
  component: InlineNotification,
};

export const InlineNotificationStory = {
  render: () => (
    <Stack>
      <PresentComponent name="" width={768}>
        <InlineNotification
          hasIcon={boolean('hasIcon', true)}
          styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
          message={text('message', 'Informative Message')}
          type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
        />
      </PresentComponent>
      <PresentComponent name="" width={768}>
        <InlineNotification
          hasIcon={boolean('hasIcon', true)}
          message={text('message', 'Informative Message')}
          type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
          styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
          primaryCTALabel={text('primaryCTALabel', 'Action')}
          primaryCTA={() => console.log('action clicked')}
          closeCTA={() => console.log('close action clicked')}
        />
      </PresentComponent>
      <PresentComponent name="" width={768}>
        <InlineNotification
          hasIcon={boolean('hasIcon', true)}
          message={text('message', 'Informative Message')}
          styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
          type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
          primaryCTALabel={text('primaryCTALabel', 'Action')}
          primaryCTA={() => console.log('action clicked')}
        />
      </PresentComponent>
      <PresentComponent name="" width={768}>
        <InlineNotification
          hasIcon={boolean('hasIcon', true)}
          message={text('message', 'Informative Message')}
          type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
          styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
          closeCTA={() => console.log('close action clicked')}
        />
      </PresentComponent>
    </Stack>
  ),

  name: 'Inline Notification',

  parameters: {
    decorators: [withKnobs],
  },
};

export const BannerNotification = {
  render: () => (
    <PresentComponent name="" width={1024}>
      <NotificationShowcase>
        <NotificationsContainer
          position={select(
            'position',
            ['top-right', 'top-left', 'bottom-left', 'bottom-right'],
            'bottom-right'
          )}
        >
          <Banner
            hasIcon={boolean('icon', true)}
            title={text('title', 'This is the heading:')}
            message={text('message', 'This is the info')}
            type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
            primaryCTALabel={text('primaryCTALabel', 'Action')}
            primaryCTA={() => console.log('action clicked')}
            closeCTA={() => console.log('close action clicked')}
            styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
          />
          <Banner
            hasIcon={boolean('icon', true)}
            title={text('title', 'This is the heading:')}
            message={text('message', 'This is the info')}
            type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
            primaryCTALabel={text('primaryCTALabel', 'Action')}
            primaryCTA={() => console.log('action clicked')}
            styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
            closeCTA={() => console.log('close action clicked')}
          />
          <Banner
            title={'Title'}
            hasIcon={boolean('icon', true)}
            message={
              <div
                style={{
                  maxWidth: '404px',
                }}
              >
                This is a very long text in order to check how the component wraps the text.This is
                a very long text in order to check how the component wraps the text{' '}
              </div>
            }
            type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
            styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
            closeCTA={() => console.log('close action clicked')}
          />
        </NotificationsContainer>
      </NotificationShowcase>
    </PresentComponent>
  ),

  name: 'Banner Notification',

  parameters: {
    decorators: [withKnobs],
  },
};

export const ToastNotification = {
  render: () => (
    <PresentComponent name="" width={768}>
      <NotificationShowcase>
        <NotificationsContainer
          position={select(
            'position',
            ['top-right', 'top-left', 'bottom-left', 'bottom-right'],
            'bottom-right'
          )}
        >
          <Toast
            message={text('message', 'Informative Message')}
            type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
            isExpanded
            hasMinimumHeight={false}
            styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
            closeCTA={() => console.log('close action clicked')}
          >
            <NotificationVisual
              title={text('title', 'Message heading')}
              description={text(
                'description',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra neque nec est porttitor'
              )}
            />
          </Toast>
          <Toast
            message={text('message', 'Informative Message')}
            type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
            isExpanded
            hasMinimumHeight={false}
            styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
            closeCTA={() => console.log('close action clicked')}
          >
            <NotificationVisual
              title={text('title', 'Message heading')}
              primaryCTALabel={text('primaryCTALabel', 'Primary CTA')}
              primaryCTA={() => console.log('primary action clicked')}
              secondaryCTALabel={text('secondaryCTALabel', 'Secondary CTA')}
              secondaryCTA={() => console.log('secondary action clicked')}
              description={text(
                'description',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra neque nec est porttitor'
              )}
            />
          </Toast>
        </NotificationsContainer>
      </NotificationShowcase>
    </PresentComponent>
  ),

  name: 'Toast Notification',

  parameters: {
    decorators: [withKnobs],
  },
};

export const SnackbarNotification = {
  render: () => (
    <PresentComponent name="" width={768}>
      <NotificationShowcase>
        <NotificationsContainer
          position={select(
            'position',
            ['top-right', 'top-left', 'bottom-left', 'bottom-right'],
            'bottom-right'
          )}
        >
          <Snackbar
            message={text('message', 'This is the info')}
            type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
            styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
            description={text(
              'description',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra neque nec est porttitor'
            )}
            closeCTA={() => console.log('close action clicked')}
          />
          <Snackbar
            message={text('message', 'This is the info')}
            type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
            primaryCTALabel={text('primaryCTALabel', 'Primary CTA')}
            primaryCTA={() => console.log('primary action clicked')}
            styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
            secondaryCTALabel={text('secondaryCTALabel', 'Secondary CTA')}
            secondaryCTA={() => console.log('secondary action clicked')}
            description={text(
              'description',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra neque nec est porttitor'
            )}
            closeCTA={() => console.log('close action clicked')}
          />
        </NotificationsContainer>
      </NotificationShowcase>
    </PresentComponent>
  ),

  name: 'Snackbar Notification',

  parameters: {
    decorators: [withKnobs],
  },
};

export const Playground1 = {
  render: () => (
    <PresentComponent name="" width={768}>
      <NotificationShowcase>
        <NotificationsContainer
          position={select(
            'position',
            ['top-right', 'top-left', 'bottom-left', 'bottom-right'],
            'bottom-right'
          )}
        >
          <Banner
            hasIcon={boolean('icon', true)}
            title={text('title', 'This is the heading:')}
            message={text('message', 'This is the info')}
            type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
            primaryCTALabel={text('primaryCTALabel', 'Action')}
            styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
            primaryCTA={() => console.log('action clicked')}
            closeCTA={() => console.log('close action clicked')}
          />
          <Snackbar
            message={text('message', 'This is the info')}
            type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
            primaryCTALabel={text('primaryCTALabel', 'Primary CTA')}
            primaryCTA={() => console.log('primary action clicked')}
            styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
            secondaryCTALabel={text('secondaryCTALabel', 'Secondary CTA')}
            secondaryCTA={() => console.log('secondary action clicked')}
            description={text(
              'description',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra neque nec est porttitor'
            )}
            closeCTA={() => console.log('close action clicked')}
          />
          <Toast
            message={text('message', 'Informative Message')}
            type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
            styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
            isExpanded
            closeCTA={() => console.log('close action clicked')}
          >
            <NotificationVisual
              title={text('title', 'Message heading')}
              primaryCTALabel={text('primaryCTALabel', 'Primary CTA')}
              primaryCTA={() => console.log('primary action clicked')}
              secondaryCTALabel={text('secondaryCTALabel', 'Secondary CTA')}
              secondaryCTA={() => console.log('secondary action clicked')}
              description={text(
                'description',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra neque nec est porttitor'
              )}
            />
          </Toast>
          <Banner
            hasIcon={boolean('icon', true)}
            title={text('title', 'This is the heading:')}
            message={text('message', 'This is the info')}
            type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
            styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
            primaryCTALabel={text('primaryCTALabel', 'Action')}
            primaryCTA={() => console.log('action clicked')}
            closeCTA={() => console.log('close action clicked')}
          />
          <Toast
            message={text('message', 'Informative Message')}
            type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
            styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
            isExpanded
            closeCTA={() => console.log('close action clicked')}
          >
            <NotificationVisual
              title={text('title', 'Message heading')}
              primaryCTALabel={text('primaryCTALabel', 'Primary CTA')}
              primaryCTA={() => console.log('primary action clicked')}
              secondaryCTALabel={text('secondaryCTALabel', 'Secondary CTA')}
              secondaryCTA={() => console.log('secondary action clicked')}
              description={text(
                'description',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra neque nec est porttitor'
              )}
            />
          </Toast>
        </NotificationsContainer>
      </NotificationShowcase>
    </PresentComponent>
  ),

  name: 'Playground 1',

  parameters: {
    decorators: [withKnobs],

    docs: {
      iframeHeight: 500,
    },
  },
};

export const Playground2 = {
  render: () => (
    <PresentComponent name="" width={768}>
      <NotificationShowcase>
        <NotificationsContainer
          position={select(
            'position',
            ['top-right', 'top-left', 'bottom-left', 'bottom-right'],
            'bottom-right'
          )}
        >
          <Snackbar
            message={text('message', 'This is the info')}
            type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
            primaryCTALabel={text('primaryCTALabel', 'Primary CTA')}
            primaryCTA={() => console.log('primary action clicked')}
            styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
            secondaryCTALabel={text('secondaryCTALabel', 'Secondary CTA')}
            secondaryCTA={() => console.log('secondary action clicked')}
            description={text(
              'description',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra neque nec est porttitor'
            )}
            closeCTA={() => console.log('close action clicked')}
          />
          <Toast
            message={text('message', 'Informative Message')}
            type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
            styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
            isExpanded
            closeCTA={() => console.log('close action clicked')}
          >
            <NotificationVisual
              title={text('title', 'Message heading')}
              primaryCTALabel={text('primaryCTALabel', 'Primary CTA')}
              primaryCTA={() => console.log('primary action clicked')}
              secondaryCTALabel={text('secondaryCTALabel', 'Secondary CTA')}
              secondaryCTA={() => console.log('secondary action clicked')}
              description={text(
                'description',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra neque nec est porttitor'
              )}
            />
          </Toast>
        </NotificationsContainer>
      </NotificationShowcase>
    </PresentComponent>
  ),

  name: 'Playground 2',

  parameters: {
    decorators: [withKnobs],

    docs: {
      iframeHeight: 500,
    },
  },
};

export const Playground3 = {
  render: () => (
    <PresentComponent name="" width={768}>
      <NotificationShowcase>
        <NotificationContainerWithinDOMElement id={'pl-3'}>
          <Snackbar
            message={text('message', 'This is the info')}
            type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
            primaryCTALabel={text('primaryCTALabel', 'Primary CTA')}
            primaryCTA={() => console.log('primary action clicked')}
            styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
            secondaryCTALabel={text('secondaryCTALabel', 'Secondary CTA')}
            secondaryCTA={() => console.log('secondary action clicked')}
            description={text(
              'description',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra neque nec est porttitor'
            )}
            closeCTA={() => console.log('close action clicked')}
          />
          <Toast
            message={text('message', 'Informative Message')}
            type={select('type', ['success', 'error', 'info', 'warning'], 'success')}
            styleType={select('styleType', ['outlined', 'elevated'], 'elevated')}
            isExpanded
            closeCTA={() => console.log('close action clicked')}
          >
            <NotificationVisual
              title={text('title', 'Message heading')}
              primaryCTALabel={text('primaryCTALabel', 'Primary CTA')}
              primaryCTA={() => console.log('primary action clicked')}
              secondaryCTALabel={text('secondaryCTALabel', 'Secondary CTA')}
              secondaryCTA={() => console.log('secondary action clicked')}
              description={text(
                'description',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra neque nec est porttitor'
              )}
            />
          </Toast>
        </NotificationContainerWithinDOMElement>
      </NotificationShowcase>
    </PresentComponent>
  ),

  name: 'Playground 3',

  parameters: {
    decorators: [withKnobs],

    docs: {
      iframeHeight: 500,
    },
  },
};
