import Button from './Button';
import Stack from '../storyUtils/Stack';

import { FIGMA_URL } from '../../utils/common';
import { LoadingButtonShowcase, ButtonShowcase } from '../storyUtils/ButtonShowcases';

export default {
  title: 'Updated Components/Buttons/Default (Text)',
  component: Button,

  args: {
    label: 'Label',
  },

  argTypes: {
    hasAvatar: { type: 'boolean' },
    avatarLabel: { type: 'string' },
  },

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
    <>
      <Stack>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="tertiary">Tertiary</Button>
        <Button type="danger">Danger</Button>
      </Stack>
      <Stack>
        <Button type="primary" isDisabled>
          Primary
        </Button>
        <Button type="secondary" isDisabled>
          Secondary
        </Button>
        <Button type="tertiary" isDisabled>
          Tertiary
        </Button>
        <Button type="danger" isDisabled>
          Danger
        </Button>
      </Stack>
      <Stack>
        <Button size="compact" type="primary">
          Primary
        </Button>
        <Button size="compact" type="secondary">
          Secondary
        </Button>
        <Button size="compact" type="tertiary">
          Tertiary
        </Button>
        <Button size="compact" type="danger">
          Danger
        </Button>
      </Stack>
      <Stack>
        <Button size="compact" type="primary" isDisabled>
          Primary
        </Button>
        <Button size="compact" type="secondary" isDisabled>
          Secondary
        </Button>
        <Button size="compact" type="tertiary" isDisabled>
          Tertiary
        </Button>
        <Button size="compact" type="danger" isDisabled>
          Danger
        </Button>
      </Stack>
    </>
  ),

  name: 'Button Types and Sizes',

  parameters: {
    controls: { disable: true },
  },
};

export const LoadingButton = {
  render: () => <LoadingButtonShowcase />,
  name: 'Loading Button',
  parameters: {
    controls: { disable: true },
  },
};

export const ButtonsWithIcons = {
  render: (args) => {
    const { type, iconLeftName, iconRightName } = args;
    return (
      <Stack>
        <Button iconLeftName={iconLeftName} type={type}>
          Only left Icon
        </Button>
        <Button iconLeftName={iconLeftName} iconRightName={iconRightName} type={type}>
          Both Icons
        </Button>
        <Button iconRightName={iconRightName} type={type}>
          Only Right Icon
        </Button>
      </Stack>
    );
  },

  name: 'Buttons with Icons',

  parameters: {
    controls: { include: ['type', 'iconLeftName', 'iconRightName'] },
  },
};

export const ButtonsWithAvatars = {
  render: (args) => {
    const { type } = args;
    return (
      <Stack>
        <Button avatar={{ label: 'PR' }} type={type}>
          Text Avatar
        </Button>
        <Button avatar={{ src: 'https://mui.com/static/images/avatar/1.jpg' }} type={type}>
          Img Avatar
        </Button>
        <Button avatar={{}} type={type}>
          Empty Avatar
        </Button>
      </Stack>
    );
  },

  name: 'Buttons with Avatars',

  parameters: {
    controls: { include: ['type'] },
  },
};

export const BlockButton = {
  render: (args) => {
    const { type } = args;
    return (
      <Stack isVertical>
        <Button isBlock type={type}>
          Hello world
        </Button>
        <Button isBlock type={type} size="compact">
          Hello world
        </Button>
        <Button isBlock isLoading type={type}>
          Hello world
        </Button>
        <Button isBlock isLoading type={type} size="compact">
          Hello world
        </Button>
        <Button isBlock isDisabled type={type}>
          Hello world
        </Button>
        <Button isBlock isDisabled type={type} size="compact">
          Hello world
        </Button>
      </Stack>
    );
  },

  name: 'Block Button',

  parameters: {
    controls: { include: ['type'] },
  },
};

export const ButtonPlayground = {
  render: (args) => {
    const {
      type,
      size,
      iconLeftName,
      iconRightName,
      isLoading,
      isDisabled,
      isBlock,
      label,
      hasAvatar,
      avatarLabel,
    } = args;
    return (
      <Stack isVertical>
        <ButtonShowcase
          buttonLabel={label}
          type={type}
          hasAvatar={hasAvatar}
          avatar={{
            label: avatarLabel,
          }}
          size={size}
          iconLeftName={iconLeftName}
          iconRightName={iconRightName}
          isLoading={isLoading}
          isDisabled={isDisabled}
          isBlock={isBlock}
        />
      </Stack>
    );
  },

  name: 'Playground',

  parameters: {
    controls: {
      include: [
        'type',
        'size',
        'iconLeftName',
        'iconRightName',
        'isLoading',
        'isDisabled',
        'isBlock',
        'label',
        'hasAvatar',
        'avatarLabel',
      ],
    },
  },
};
