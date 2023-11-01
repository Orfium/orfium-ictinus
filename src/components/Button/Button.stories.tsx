import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import Button from './Button';
import Stack from '../storyUtils/Stack';
import LinkTo from '@storybook/addon-links/react';

import { FIGMA_URL } from '../../utils/common';
import LoadingButtonShowcase from '../storyUtils/LoadingButtonShowcase';
import SectionHeader from '../../storybook/SectionHeader';
import { getIconSelectorKnob } from '../../utils/stories';

export default {
  title: 'Design System/Button/Default (Text)',
  component: Button,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Button',
        url: `${FIGMA_URL}?node-id=574%3A7239`,
      },
      {
        type: 'figma',
        name: 'Anatomy',
        url: `${FIGMA_URL}?node-id=10324%3A104411`,
      },
      {
        type: 'figma',
        name: 'Filled',
        url: `${FIGMA_URL}?node-id=8145%3A145377`,
      },
      {
        type: 'figma',
        name: 'Outlined',
        url: `${FIGMA_URL}?node-id=8149%3A145615`,
      },
      {
        type: 'figma',
        name: 'Transparent',
        url: `${FIGMA_URL}?node-id=8166%3A146566`,
      },
    ],
  },
};

export const ButtonTypes = {
  render: () => (
    <Stack>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="tertiary">Tertiary</Button>
      <Button type="danger">Danger</Button>
    </Stack>
  ),

  name: 'Button Types',
};

export const InvertedButtonTypes = {
  render: () => (
    <Stack>
      <Button type="inverted">Inverted</Button>
      <Button type="invertedAlt">InvertedAlt</Button>
    </Stack>
  ),

  name: 'Inverted Button Types',
};

export const LoadingButton = {
  render: () => <LoadingButtonShowcase />,
  name: 'Loading Button',
};

export const ButtonsWithIcons = {
  render: () => (
    <Stack>
      <Button
        iconLeftName={getIconSelectorKnob('iconLeftName')}
        type={select(
          'type',
          ['primary', 'secondary', 'tertiary', 'danger', 'inverted', 'invertedAlt'],
          'primary'
        )}
      >
        Only left Icon
      </Button>
      <Button
        iconLeftName={getIconSelectorKnob('iconLeftName')}
        iconRightName={getIconSelectorKnob('iconRightName')}
        type={select(
          'type',
          ['primary', 'secondary', 'tertiary', 'danger', 'inverted', 'invertedAlt'],
          'primary'
        )}
      >
        Both Icons
      </Button>
      <Button
        iconRightName={getIconSelectorKnob('iconRightName')}
        type={select(
          'type',
          ['primary', 'secondary', 'tertiary', 'danger', 'inverted', 'invertedAlt'],
          'primary'
        )}
      >
        Only Right Icon
      </Button>
    </Stack>
  ),

  name: 'Buttons with Icons',

  parameters: {
    decorators: [withKnobs],
  },
};

export const ButtonsWithAvatars = {
  render: () => (
    <Stack>
      <Button
        avatar={{
          label: 'PR',
        }}
        type={select('type', ['primary', 'secondary', 'tertiary'], 'primary')}
      >
        Text Avatar
      </Button>
      <Button
        avatar={{
          src: 'https://mui.com/static/images/avatar/1.jpg',
        }}
        type={select('type', ['primary', 'secondary', 'tertiary'], 'primary')}
      >
        Img Avatar
      </Button>
      <Button avatar={{}} type={select('type', ['primary', 'secondary', 'tertiary'], 'primary')}>
        Empty Avatar
      </Button>
    </Stack>
  ),

  name: 'Buttons with Avatars',

  parameters: {
    decorators: [withKnobs],
  },
};

export const BlockButton = {
  render: () => (
    <Stack isVertical>
      <Button
        isBlock
        type={select(
          'type',
          ['primary', 'secondary', 'tertiary', 'danger', 'inverted', 'invertedAlt'],
          'primary'
        )}
      >
        Hello world
      </Button>
      <Button
        isBlock
        iconLeftName={getIconSelectorKnob('iconLeftName')}
        iconRightName={getIconSelectorKnob('iconRightName')}
        type={select(
          'type',
          ['primary', 'secondary', 'tertiary', 'danger', 'inverted', 'invertedAlt'],
          'primary'
        )}
      >
        Hello world
      </Button>
      <Button
        isBlock
        isLoading
        type={select(
          'type',
          ['primary', 'secondary', 'tertiary', 'danger', 'inverted', 'invertedAlt'],
          'primary'
        )}
      >
        Hello world
      </Button>
      <Button
        isBlock
        isDisabled
        type={select(
          'type',
          ['primary', 'secondary', 'tertiary', 'danger', 'inverted', 'invertedAlt'],
          'primary'
        )}
      >
        Hello world
      </Button>
    </Stack>
  ),

  name: 'Block Button',

  parameters: {
    decorators: [withKnobs],
  },
};

export const ButtonPlayground = {
  render: () => (
    <Stack isVertical>
      <Button
        type={select(
          'type',
          ['primary', 'secondary', 'tertiary', 'danger', 'inverted', 'invertedAlt'],
          'primary'
        )}
        iconLeftName={getIconSelectorKnob('iconLeftName')}
        iconRightName={getIconSelectorKnob('iconRightName')}
        isLoading={boolean('isLoading', false)}
        isDisabled={boolean('isDisabled', false)}
        isBlock={boolean('isBlock', false)}
      >
        Hello world
      </Button>
    </Stack>
  ),

  name: 'Button Playground',

  parameters: {
    decorators: [withKnobs],
  },
};
