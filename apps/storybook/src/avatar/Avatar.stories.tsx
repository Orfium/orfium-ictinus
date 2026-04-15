import { Avatar, Box } from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Avatar> = {
  title: 'Vanilla/Avatar',
  component: Avatar,
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Colors: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md" alignItems="center">
        <Avatar color="blue" initials="JD" />
        <Avatar color="red" initials="SM" />
        <Avatar color="purple" initials="AL" />
        <Avatar color="teal" initials="MK" />
        <Avatar color="orange" initials="RB" />
      </Box>
    </Box>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md" alignItems="center">
        <Avatar size="1" />
        <Avatar size="2" />
        <Avatar size="3" />
        <Avatar size="4" />
        <Avatar size="5" />
        <Avatar size="6" />
      </Box>
      <Box display="flex" gap="md" alignItems="center">
        <Avatar size="1" initials="AB" color="red" />
        <Avatar size="2" initials="CD" color="purple" />
        <Avatar size="3" initials="EF" color="teal" />
        <Avatar size="4" initials="GH" color="orange" />
        <Avatar size="5" initials="IJ" color="blue" />
        <Avatar size="6" initials="KL" color="red" />
      </Box>
    </Box>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md" alignItems="center">
        <Avatar
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&fit=crop&crop=face"
          alt="John Doe"
          size="1"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&fit=crop&crop=face"
          alt="Jane Smith"
          size="2"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&fit=crop&crop=face"
          size="3"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&fit=crop&crop=face"
          alt="Sarah Wilson"
          size="4"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&fit=crop&crop=face"
          alt="David Brown"
          size="5"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&fit=crop&crop=face"
          alt="Emily Davis"
          size="6"
        />
      </Box>
    </Box>
  ),
};

export const WithInitials: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md" alignItems="center">
        <Avatar initials="JD" color="blue" size="1" />
        <Avatar initials="SM" color="red" size="2" />
        <Avatar initials="AL" color="purple" size="3" />
        <Avatar initials="MK" color="teal" size="4" />
        <Avatar initials="RB" color="orange" size="5" />
        <Avatar initials="ED" color="blue" size="6" />
      </Box>
    </Box>
  ),
};

export const Fallback: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md" alignItems="center">
        <Avatar color="blue" size="1" />
        <Avatar color="red" size="2" />
        <Avatar color="purple" size="3" />
        <Avatar color="teal" size="4" />
        <Avatar color="orange" size="5" />
        <Avatar color="blue" size="6" />
      </Box>
      <Box display="flex" gap="md" alignItems="center">
        <Avatar />
        <Avatar color="red" />
        <Avatar color="purple" />
        <Avatar color="teal" />
        <Avatar color="orange" />
      </Box>
    </Box>
  ),
};

export const BrokenImage: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md" alignItems="center">
        <Avatar src="https://broken-image.com/invalid.jpg" alt="John Doe" color="blue" size="3" />
        <Avatar
          src="https://broken-image.com/invalid.jpg"
          alt="Sarah Miller"
          color="red"
          size="3"
        />
        <Avatar
          src="https://broken-image.com/invalid.jpg"
          alt="Default User"
          color="purple"
          size="3"
        />
        <Avatar src="https://broken-image.com/invalid.jpg" alt="Fallback" color="teal" size="3" />
      </Box>
    </Box>
  ),
};

export const Mixed: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md" alignItems="center">
        <Avatar
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"
          alt="John Doe"
          size="3"
          color="blue"
        />
        <Avatar initials="SM" color="red" size="3" />
        <Avatar color="teal" size="3" />
        <Avatar
          src="https://images.unsplash.com/photo-1494790108755-2616b612b789?w=48&h=48&fit=crop&crop=face"
          alt="Sarah Wilson"
          size="3"
          color="orange"
        />
      </Box>
      <Box display="flex" gap="md" alignItems="center">
        <Avatar
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
          alt="John Doe"
          size="2"
          color="blue"
        />
        <Avatar initials="SM" color="red" size="2" />
        <Avatar color="teal" size="2" />
        <Avatar
          src="https://images.unsplash.com/photo-1494790108755-2616b612b789?w=32&h=32&fit=crop&crop=face"
          alt="Sarah Wilson"
          size="2"
          color="orange"
        />
      </Box>
      <Box display="flex" gap="md" alignItems="center">
        <Avatar
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
          alt="John Doe"
          size="5"
          color="blue"
        />
        <Avatar initials="SM" color="red" size="5" />
        <Avatar color="teal" size="5" />
        <Avatar
          src="https://images.unsplash.com/photo-1494790108755-2616b612b789?w=80&h=80&fit=crop&crop=face"
          alt="Sarah Wilson"
          size="5"
          color="orange"
        />
      </Box>
    </Box>
  ),
};
