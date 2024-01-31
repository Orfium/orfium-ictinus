import { select, withKnobs } from '@storybook/addon-knobs';
import Avatar from './Avatar';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Updated Components/Avatar/Avatar',
  component: Avatar,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Avatar',
        url: `${FIGMA_URL}?node-id=3325%3A58246`,
      },
    ],

    chromatic: {
      diffThreshold: 0.4,
    },
  },
};

export const AvatarWithIcon = {
  render: () => (
    <Stack>
      <Avatar size={1} color={'blue'} />
      <Avatar size={2} color={'blue'} />
      <Avatar size={3} color={'blue'} />
      <Avatar size={4} color={'blue'} />
      <Avatar size={5} color={'blue'} />
      <Avatar size={6} color={'blue'} />
    </Stack>
  ),

  name: 'Avatar with icon',
};

export const AvatarWithLetter = {
  render: () => (
    <Stack>
      <Avatar size={1} color={'blue'}>
        JN
      </Avatar>
      <Avatar size={2} color={'blue'}>
        JN
      </Avatar>
      <Avatar size={3} color={'blue'}>
        JN
      </Avatar>
      <Avatar size={4} color={'blue'}>
        JN
      </Avatar>
      <Avatar size={5} color={'blue'}>
        JN
      </Avatar>
      <Avatar size={6} color={'blue'}>
        JN
      </Avatar>
    </Stack>
  ),

  name: 'Avatar with letter',
};

export const AvatarWithColor = {
  render: () => (
    <>
      <Stack height={60}>
        <Avatar size={2} color={'blue'} />
        <Avatar size={2} color={'red'} />
        <Avatar size={2} color={'purple'} />
        <Avatar size={2} color={'teal'} />
        <Avatar size={2} color={'orange'} />
      </Stack>
      <Stack>
        <Avatar size={2} color={'blue'}>
          AZ
        </Avatar>
        <Avatar size={2} color={'red'}>
          AZ
        </Avatar>
        <Avatar size={2} color={'purple'}>
          AZ
        </Avatar>
        <Avatar size={2} color={'teal'}>
          AZ
        </Avatar>
        <Avatar size={2} color={'orange'}>
          AZ
        </Avatar>
      </Stack>
    </>
  ),

  name: 'Avatar with letter',
};

export const AvatarWithSrc = {
  render: () => (
    <Stack>
      <Avatar size={1} src={'https://mui.com/static/images/avatar/1.jpg'}>
        JN
      </Avatar>
      <Avatar size={2} src={'https://mui.com/static/images/avatar/1.jpg'}>
        JN
      </Avatar>
      <Avatar size={3} src={'https://mui.com/static/images/avatar/1.jpg'}>
        JN
      </Avatar>
      <Avatar size={4} src={'https://mui.com/static/images/avatar/1.jpg'}>
        JN
      </Avatar>
      <Avatar size={5} src={'https://mui.com/static/images/avatar/1.jpg'}>
        JN
      </Avatar>
      <Avatar size={6} src={'https://mui.com/static/images/avatar/1.jpg'}>
        JN
      </Avatar>
    </Stack>
  ),

  name: 'Avatar with src',
};

export const AvatarPlayground = {
  render: () => (
    <Stack>
      <Avatar
        size={select('size', [1, 2, 3, 4, 5, 6], 1)}
        color={select('color', ['blue', 'teal', 'purple', 'red', 'orange'], 'blue')}
      >
        JN
      </Avatar>
      <Avatar
        size={select('size', [1, 2, 3, 4, 5, 6], 1)}
        src={'https://mui.com/static/images/avatar/1.jpg'}
        color={select('color', ['blue', 'teal', 'purple', 'red', 'orange'], 'blue')}
      />
      <Avatar
        size={select('size', [1, 2, 3, 4, 5, 6], 1)}
        color={select('color', ['blue', 'teal', 'purple', 'red', 'orange'], 'blue')}
      />
    </Stack>
  ),

  name: 'Avatar Playground',

  parameters: {
    decorators: [withKnobs],
  },
};
