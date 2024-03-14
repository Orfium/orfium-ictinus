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

  args: {
    message: 'Informative Message',
    type: 'success',
    primaryCTALabel: 'Action',
    secondaryCTALabel: 'Cancel',
    hasIcon: true,
    styleType: 'elevated',
    position: 'bottom-right',
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },

  argTypes: {
    type: { type: 'select', options: ['success', 'error', 'info', 'warning'] },
    message: { type: 'string' },
    position: { type: 'select', options: ['top-right', 'top-left', 'bottom-left', 'bottom-right'] },
  },
};

export const InlineNotificationStory = {
  render: (args) => {
    const { hasIcon, styleType, message, type, primaryCTALabel } = args;
    return (
      <Stack>
        <PresentComponent name="" width={768}>
          <InlineNotification
            hasIcon={hasIcon}
            styleType={styleType}
            message={message}
            type={type}
          />
        </PresentComponent>
        <PresentComponent name="" width={768}>
          <InlineNotification
            hasIcon={hasIcon}
            styleType={styleType}
            message={message}
            type={type}
            primaryCTALabel={primaryCTALabel}
            primaryCTA={() => console.log('action clicked')}
            closeCTA={() => console.log('close action clicked')}
          />
        </PresentComponent>
        <PresentComponent name="" width={768}>
          <InlineNotification
            hasIcon={hasIcon}
            styleType={styleType}
            message={message}
            type={type}
            primaryCTALabel={primaryCTALabel}
            primaryCTA={() => console.log('action clicked')}
          />
        </PresentComponent>
        <PresentComponent name="" width={768}>
          <InlineNotification
            hasIcon={hasIcon}
            styleType={styleType}
            message={message}
            type={type}
            closeCTA={() => console.log('close action clicked')}
          />
        </PresentComponent>
      </Stack>
    );
  },

  name: 'Inline Notification',

  parameters: {
    controls: { include: ['hasIcon', 'styleType', 'message', 'type', 'primaryCTALabel'] },
  },
};

export const BannerNotification = {
  render: (args) => {
    const { title, hasIcon, styleType, message, type, primaryCTALabel, position } = args;
    return (
      <PresentComponent name="" width={1024}>
        <NotificationShowcase>
          <NotificationsContainer position={position}>
            <Banner
              hasIcon={hasIcon}
              title={title}
              message={message}
              type={type}
              primaryCTALabel={primaryCTALabel}
              primaryCTA={() => console.log('action clicked')}
              closeCTA={() => console.log('close action clicked')}
              styleType={styleType}
            />
            <Banner
              hasIcon={hasIcon}
              title={title}
              message={message}
              type={type}
              primaryCTALabel={primaryCTALabel}
              primaryCTA={() => console.log('action clicked')}
              styleType={styleType}
              closeCTA={() => console.log('close action clicked')}
            />
            <Banner
              title={title}
              hasIcon={hasIcon}
              message={
                <div
                  style={{
                    maxWidth: '404px',
                  }}
                >
                  This is a very long text in order to check how the component wraps the text.This
                  is a very long text in order to check how the component wraps the text{' '}
                </div>
              }
              type={type}
              styleType={styleType}
              closeCTA={() => console.log('close action clicked')}
            />
          </NotificationsContainer>
        </NotificationShowcase>
      </PresentComponent>
    );
  },

  name: 'Banner Notification',

  parameters: {
    controls: {
      include: ['title', 'hasIcon', 'styleType', 'message', 'type', 'primaryCTALabel', 'position'],
    },
  },
};

export const ToastNotification = {
  render: (args) => {
    const {
      title,
      styleType,
      message,
      type,
      primaryCTALabel,
      secondaryCTALabel,
      position,
      description,
    } = args;
    return (
      <PresentComponent name="" width={768}>
        <NotificationShowcase>
          <NotificationsContainer position={position}>
            <Toast
              message={message}
              type={type}
              isExpanded
              hasMinimumHeight={false}
              styleType={styleType}
              closeCTA={() => console.log('close action clicked')}
            >
              <NotificationVisual title={title} description={description} />
            </Toast>
            <Toast
              message={message}
              type={type}
              isExpanded
              hasMinimumHeight={false}
              styleType={styleType}
              closeCTA={() => console.log('close action clicked')}
            >
              <NotificationVisual
                title={title}
                primaryCTALabel={primaryCTALabel}
                primaryCTA={() => console.log('primary action clicked')}
                secondaryCTALabel={secondaryCTALabel}
                secondaryCTA={() => console.log('secondary action clicked')}
                description={description}
              />
            </Toast>
          </NotificationsContainer>
        </NotificationShowcase>
      </PresentComponent>
    );
  },

  name: 'Toast Notification',

  parameters: {
    controls: {
      include: [
        'title',
        'styleType',
        'message',
        'type',
        'primaryCTALabel',
        'secondaryCTALabel',
        'position',
        'description',
      ],
    },
  },
};

export const SnackbarNotification = {
  render: (args) => {
    const { styleType, message, type, primaryCTALabel, secondaryCTALabel, position, description } =
      args;
    return (
      <PresentComponent name="" width={768}>
        <NotificationShowcase>
          <NotificationsContainer position={position}>
            <Snackbar
              message={message}
              type={type}
              styleType={styleType}
              description={description}
              closeCTA={() => console.log('close action clicked')}
            />
            <Snackbar
              message={message}
              type={type}
              primaryCTALabel={primaryCTALabel}
              primaryCTA={() => console.log('primary action clicked')}
              styleType={styleType}
              secondaryCTALabel={secondaryCTALabel}
              secondaryCTA={() => console.log('secondary action clicked')}
              description={description}
              closeCTA={() => console.log('close action clicked')}
            />
          </NotificationsContainer>
        </NotificationShowcase>
      </PresentComponent>
    );
  },

  name: 'Snackbar Notification',

  parameters: {
    controls: {
      include: [
        'styleType',
        'message',
        'type',
        'primaryCTALabel',
        'secondaryCTALabel',
        'position',
        'description',
      ],
    },
  },
};

export const Playground1 = {
  render: (args) => {
    const {
      styleType,
      hasIcon,
      title,
      message,
      type,
      primaryCTALabel,
      secondaryCTALabel,
      position,
      description,
    } = args;
    return (
      <PresentComponent name="" width={768}>
        <NotificationShowcase>
          <NotificationsContainer position={position}>
            <Banner
              hasIcon={hasIcon}
              title={title}
              message={message}
              type={type}
              primaryCTALabel={primaryCTALabel}
              styleType={styleType}
              primaryCTA={() => console.log('action clicked')}
              closeCTA={() => console.log('close action clicked')}
            />
            <Snackbar
              message={message}
              type={type}
              primaryCTALabel={primaryCTALabel}
              primaryCTA={() => console.log('primary action clicked')}
              styleType={styleType}
              secondaryCTALabel={secondaryCTALabel}
              secondaryCTA={() => console.log('secondary action clicked')}
              description={description}
              closeCTA={() => console.log('close action clicked')}
            />
            <Toast
              message={message}
              type={type}
              styleType={styleType}
              isExpanded
              closeCTA={() => console.log('close action clicked')}
            >
              <NotificationVisual
                title={title}
                primaryCTALabel={primaryCTALabel}
                primaryCTA={() => console.log('primary action clicked')}
                secondaryCTALabel={secondaryCTALabel}
                secondaryCTA={() => console.log('secondary action clicked')}
                description={description}
              />
            </Toast>
            <Banner
              hasIcon={hasIcon}
              title={title}
              message={message}
              type={type}
              styleType={styleType}
              primaryCTALabel={primaryCTALabel}
              primaryCTA={() => console.log('action clicked')}
              closeCTA={() => console.log('close action clicked')}
            />
            <Toast
              message={message}
              type={type}
              styleType={styleType}
              isExpanded
              closeCTA={() => console.log('close action clicked')}
            >
              <NotificationVisual
                title={title}
                primaryCTALabel={primaryCTALabel}
                primaryCTA={() => console.log('primary action clicked')}
                secondaryCTALabel={secondaryCTALabel}
                secondaryCTA={() => console.log('secondary action clicked')}
                description={description}
              />
            </Toast>
          </NotificationsContainer>
        </NotificationShowcase>
      </PresentComponent>
    );
  },

  name: 'Playground 1',

  parameters: {
    controls: {
      include: [
        'styleType',
        'hasIcon',
        'title',
        'message',
        'type',
        'primaryCTALabel',
        'secondaryCTALabel',
        'position',
        'description',
      ],
    },

    docs: {
      iframeHeight: 500,
    },
  },
};

export const Playground2 = {
  render: (args) => {
    const {
      position,
      message,
      type,
      primaryCTALabel,
      styleType,
      secondaryCTALabel,
      description,
      title,
    } = args;
    return (
      <PresentComponent name="" width={768}>
        <NotificationShowcase>
          <NotificationsContainer position={position}>
            <Snackbar
              message={message}
              type={type}
              primaryCTALabel={primaryCTALabel}
              primaryCTA={() => console.log('primary action clicked')}
              styleType={styleType}
              secondaryCTALabel={secondaryCTALabel}
              secondaryCTA={() => console.log('secondary action clicked')}
              description={description}
              closeCTA={() => console.log('close action clicked')}
            />
            <Toast
              message={message}
              type={type}
              styleType={styleType}
              isExpanded
              closeCTA={() => console.log('close action clicked')}
            >
              <NotificationVisual
                title={title}
                primaryCTALabel={primaryCTALabel}
                primaryCTA={() => console.log('primary action clicked')}
                secondaryCTALabel={secondaryCTALabel}
                secondaryCTA={() => console.log('secondary action clicked')}
                description={description}
              />
            </Toast>
          </NotificationsContainer>
        </NotificationShowcase>
      </PresentComponent>
    );
  },

  name: 'Playground 2',

  parameters: {
    controls: {
      include: [
        'position',
        'message',
        'type',
        'primaryCTALabel',
        'styleType',
        'secondaryCTALabel',
        'description',
        'title',
      ],
    },

    docs: {
      iframeHeight: 500,
    },
  },
};

export const Playground3 = {
  render: (args) => {
    const {
      message,
      type,
      primaryCTALabel,
      styleType,
      secondaryCTALabel,
      description,
      title,
      position,
    } = args;
    return (
      <PresentComponent name="" width={768}>
        <NotificationShowcase>
          <NotificationContainerWithinDOMElement id={'pl-3'} position={position}>
            <Snackbar
              message={message}
              type={type}
              primaryCTALabel={primaryCTALabel}
              primaryCTA={() => console.log('primary action clicked')}
              styleType={styleType}
              secondaryCTALabel={secondaryCTALabel}
              secondaryCTA={() => console.log('secondary action clicked')}
              description={description}
              closeCTA={() => console.log('close action clicked')}
            />
            <Toast
              message={message}
              type={type}
              styleType={styleType}
              isExpanded
              closeCTA={() => console.log('close action clicked')}
            >
              <NotificationVisual
                title={title}
                primaryCTALabel={primaryCTALabel}
                primaryCTA={() => console.log('primary action clicked')}
                secondaryCTALabel={secondaryCTALabel}
                secondaryCTA={() => console.log('secondary action clicked')}
                description={description}
              />
            </Toast>
          </NotificationContainerWithinDOMElement>
        </NotificationShowcase>
      </PresentComponent>
    );
  },

  name: 'Playground 3',

  parameters: {
    controls: {
      include: [
        'message',
        'type',
        'primaryCTALabel',
        'styleType',
        'secondaryCTALabel',
        'description',
        'title',
        'position',
      ],
    },

    docs: {
      iframeHeight: 500,
    },
  },
};
