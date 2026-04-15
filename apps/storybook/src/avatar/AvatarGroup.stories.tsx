import { Avatar, AvatarGroup, Box } from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Vanilla/AvatarGroup',
  component: AvatarGroup,
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

export const Basic: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md" alignItems="center">
        <AvatarGroup>
          <Avatar initials="JD" color="blue" />
          <Avatar initials="SM" color="red" />
          <Avatar initials="AL" color="purple" />
        </AvatarGroup>
      </Box>
    </Box>
  ),
};

export const WithOverflow: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md" alignItems="center">
        <AvatarGroup maxAvatars={3}>
          <Avatar initials="JD" color="blue" />
          <Avatar initials="SM" color="red" />
          <Avatar initials="AL" color="purple" />
          <Avatar initials="MK" color="teal" />
          <Avatar initials="RB" color="orange" />
        </AvatarGroup>
      </Box>
      <Box display="flex" gap="md" alignItems="center">
        <AvatarGroup maxAvatars={2} color="orange">
          <Avatar initials="JD" color="blue" />
          <Avatar initials="SM" color="red" />
          <Avatar initials="AL" color="purple" />
          <Avatar initials="MK" color="teal" />
          <Avatar initials="RB" color="orange" />
        </AvatarGroup>
      </Box>
    </Box>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md" alignItems="center">
        <AvatarGroup size="1" maxAvatars={3}>
          <Avatar initials="JD" />
          <Avatar initials="SM" />
          <Avatar initials="AL" />
          <Avatar initials="MK" />
        </AvatarGroup>
        <AvatarGroup size="2" maxAvatars={3}>
          <Avatar initials="JD" />
          <Avatar initials="SM" />
          <Avatar initials="AL" />
          <Avatar initials="MK" />
        </AvatarGroup>
        <AvatarGroup size="3" maxAvatars={3}>
          <Avatar initials="JD" />
          <Avatar initials="SM" />
          <Avatar initials="AL" />
          <Avatar initials="MK" />
        </AvatarGroup>
        <AvatarGroup size="4" maxAvatars={3}>
          <Avatar initials="JD" />
          <Avatar initials="SM" />
          <Avatar initials="AL" />
          <Avatar initials="MK" />
        </AvatarGroup>
      </Box>
      <Box display="flex" gap="md" alignItems="center">
        <AvatarGroup size="5" maxAvatars={3}>
          <Avatar initials="JD" />
          <Avatar initials="SM" />
          <Avatar initials="AL" />
          <Avatar initials="MK" />
        </AvatarGroup>
        <AvatarGroup size="6" maxAvatars={3}>
          <Avatar initials="JD" />
          <Avatar initials="SM" />
          <Avatar initials="AL" />
          <Avatar initials="MK" />
        </AvatarGroup>
      </Box>
    </Box>
  ),
};

export const WithImages: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md" alignItems="center">
        <AvatarGroup size="3" maxAvatars={4}>
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"
            alt="John Doe"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face"
            alt="Jane Smith"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop&crop=face"
            alt="Mike Johnson"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1494790108755-2616b612b789?w=48&h=48&fit=crop&crop=face"
            alt="Sarah Wilson"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face"
            alt="David Brown"
          />
        </AvatarGroup>
      </Box>
    </Box>
  ),
};

export const Mixed: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md" alignItems="center">
        <AvatarGroup size="3" maxAvatars={3} color="purple">
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"
            alt="John Doe"
          />
          <Avatar initials="SM" color="red" />
          <Avatar color="teal" />
          <Avatar initials="MK" color="orange" />
        </AvatarGroup>
      </Box>
    </Box>
  ),
};
