import Avatar from './Avatar';
import AvatarStack from './AvatarStack';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Updated Components/Avatar/AvatarStack',
  component: Avatar,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Avatar',
        url: `${FIGMA_URL}?node-id=3325%3A58246`,
      },
    ],
    controls: {
      disable: true,
    },
  },
};

export const AvatarStackStory = {
  render: () => (
    <Stack isVertical>
      <AvatarStack size={1} color={'blue'}>
        <Avatar size={1} src={'https://mui.com/static/images/avatar/6.jpg'}>
          JN
        </Avatar>
        <Avatar size={1} src={'https://mui.com/static/images/avatar/5.jpg'}>
          JN
        </Avatar>
        <Avatar size={1} color={'blue'}>
          JN
        </Avatar>
        <Avatar size={1} src={'https://mui.com/static/images/avatar/3.jpg'}>
          JN
        </Avatar>
        <Avatar size={1} src={'https://mui.com/static/images/avatar/2.jpg'}>
          JN
        </Avatar>
        <Avatar size={1} src={'https://mui.com/static/images/avatar/1.jpg'}>
          JN
        </Avatar>
      </AvatarStack>
      <AvatarStack size={2} color={'blue'}>
        <Avatar size={2} src={'https://mui.com/static/images/avatar/6.jpg'}>
          JN
        </Avatar>
        <Avatar size={2} src={'https://mui.com/static/images/avatar/5.jpg'}>
          JN
        </Avatar>
        <Avatar size={2} color={'blue'}>
          JN
        </Avatar>
        <Avatar size={2} src={'https://mui.com/static/images/avatar/3.jpg'}>
          JN
        </Avatar>
        <Avatar size={2} src={'https://mui.com/static/images/avatar/2.jpg'}>
          JN
        </Avatar>
        <Avatar size={2} src={'https://mui.com/static/images/avatar/1.jpg'}>
          JN
        </Avatar>
      </AvatarStack>
      <AvatarStack size={3} maxAvatars={3} color={'blue'}>
        <Avatar size={3} src={'https://mui.com/static/images/avatar/6.jpg'}>
          JN
        </Avatar>
        <Avatar size={3} color={'blue'} />
        <Avatar size={3} src={'https://mui.com/static/images/avatar/4.jpg'}>
          JN
        </Avatar>
        <Avatar size={3} src={'https://mui.com/static/images/avatar/3.jpg'}>
          JN
        </Avatar>
        <Avatar size={3} src={'https://mui.com/static/images/avatar/2.jpg'}>
          JN
        </Avatar>
        <Avatar size={3} src={'https://mui.com/static/images/avatar/1.jpg'}>
          JN
        </Avatar>
      </AvatarStack>
      <AvatarStack size={4} color={'blue'}>
        <Avatar size={4} src={'https://mui.com/static/images/avatar/6.jpg'}>
          JN
        </Avatar>
        <Avatar size={4} src={'https://mui.com/static/images/avatar/5.jpg'}>
          JN
        </Avatar>
        <Avatar size={4} src={'https://mui.com/static/images/avatar/4.jpg'}>
          JN
        </Avatar>
        <Avatar size={4} src={'https://mui.com/static/images/avatar/3.jpg'}>
          JN
        </Avatar>
        <Avatar size={4} src={'https://mui.com/static/images/avatar/2.jpg'}>
          JN
        </Avatar>
        <Avatar size={4} src={'https://mui.com/static/images/avatar/1.jpg'}>
          JN
        </Avatar>
      </AvatarStack>
      <AvatarStack size={5} maxAvatars={3} color={'blue'}>
        <Avatar size={5} src={'https://mui.com/static/images/avatar/6.jpg'}>
          JN
        </Avatar>
        <Avatar size={5} src={'https://mui.com/static/images/avatar/4.jpg'}>
          JN
        </Avatar>
        <Avatar size={5} src={'https://mui.com/static/images/avatar/3.jpg'}>
          JN
        </Avatar>
        <Avatar size={5} src={'https://mui.com/static/images/avatar/2.jpg'}>
          JN
        </Avatar>
        <Avatar size={5} src={'https://mui.com/static/images/avatar/1.jpg'}>
          JN
        </Avatar>
      </AvatarStack>
      <AvatarStack size={6} maxAvatars={3} color={'blue'}>
        <Avatar size={6} src={'https://mui.com/static/images/avatar/6.jpg'}>
          JN
        </Avatar>
        <Avatar size={6} src={'https://mui.com/static/images/avatar/4.jpg'}>
          JN
        </Avatar>
        <Avatar size={6} src={'https://mui.com/static/images/avatar/3.jpg'}>
          JN
        </Avatar>
        <Avatar size={6} src={'https://mui.com/static/images/avatar/2.jpg'}>
          JN
        </Avatar>
        <Avatar size={6} src={'https://mui.com/static/images/avatar/1.jpg'}>
          JN
        </Avatar>
      </AvatarStack>
    </Stack>
  ),

  name: 'Avatar Stack',
};
