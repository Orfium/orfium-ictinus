import Menu from '../Menu';
import MenuShowcase from '../storyUtils/MenuShowcase';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Original Components/Menu',
  component: Menu,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Menu',
        url: `${FIGMA_URL}?node-id=2714%3A1333`,
      },
      {
        type: 'figma',
        name: 'Button',
        url: `${FIGMA_URL}?node-id=574%3A7239`,
      },
    ],
  },
};

export const MenuWithSelectionHandler = {
  render: () => <MenuShowcase />,
  name: 'Menu with selection handler',
};

export const MenuWithOptionIconAndDifferentColour = {
  render: () => (
    <Stack>
      <Menu
        onSelect={() => {}}
        items={['My Profile', 'Settings', 'Billing', 'Notifications', 'Logout']}
        buttonText={'More'}
        rightIconName={'moreOptions'}
        avatar={{
          src: '',
          letter: '',
        }}
      />
      <Menu
        onSelect={() => {}}
        items={['My Profile', 'Settings', 'Billing', 'Notifications', 'Logout']}
        buttonText={'More'}
        rightIconName={'moreOptions'}
        avatar={{
          src: '',
          letter: '',
        }}
      />
      <Menu
        onSelect={() => {}}
        items={['My Profile', 'Settings', 'Billing', 'Notifications', 'Logout']}
        buttonText={'More'}
        rightIconName={'moreOptions'}
        avatar={{
          src: '',
          letter: '',
        }}
      />
    </Stack>
  ),

  name: 'Menu with option icon and different colour',
};

export const MenuWithAvatarAndDifferentButtonColour = {
  render: () => (
    <Stack>
      <Menu
        onSelect={() => {}}
        items={['My Profile', 'Settings', 'Billing', 'Notifications', 'Logout']}
        buttonText={'Tom Cruise'}
        rightIconName={'chevronDown'}
        avatar={{
          src: '',
          letter: 'TC',
        }}
      />
      <Menu
        onSelect={() => {}}
        items={[
          'My Profile',
          'Settings',
          'Billing',
          'Notifications',
          'Logout',
          'My Profile 1',
          'Settings 1',
          'Billing 1',
          'Notifications 1',
          'Logout 1',
        ]}
        buttonText={'Tom Cruise'}
        rightIconName={'chevronDown'}
        avatar={{
          src: 'https://mui.com/static/images/avatar/1.jpg',
          letter: 'PV',
        }}
      />
      <Menu
        onSelect={() => {}}
        items={['My Profile', 'Settings', 'Billing', 'Notifications', 'Logout']}
        buttonText={'Tom Cruise'}
        rightIconName={'chevronDown'}
        avatar={{
          src: '',
          letter: '',
        }}
      />
      <Menu
        onSelect={() => {}}
        items={['My Profile', 'Settings', 'Billing', 'Notifications', 'Logout']}
        buttonText={'Tom Cruise'}
        rightIconName={'chevronDown'}
        avatar={{
          src: '',
          letter: '',
          color: 'teal',
        }}
      />
    </Stack>
  ),

  name: 'Menu with avatar and different button colour',
};

export const DisabledMenu = {
  render: () => (
    <Stack>
      <Menu
        onSelect={() => {}}
        items={['My Profile', 'Settings', 'Billing', 'Notifications', 'Logout']}
        buttonText={'Tom Cruise'}
        isDisabled
        rightIconName={'chevronDown'}
        avatar={{
          src: '',
          letter: 'TC',
        }}
      />
    </Stack>
  ),

  name: 'Disabled Menu',
};
