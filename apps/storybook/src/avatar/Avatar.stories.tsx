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
        <Avatar colorScheme="blue" initials="JD" />
        <Avatar colorScheme="red" initials="SM" />
        <Avatar colorScheme="purple" initials="AL" />
        <Avatar colorScheme="teal" initials="MK" />
        <Avatar colorScheme="orange" initials="RB" />
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
        <Avatar size="1" initials="AB" colorScheme="red" />
        <Avatar size="2" initials="CD" colorScheme="purple" />
        <Avatar size="3" initials="EF" colorScheme="teal" />
        <Avatar size="4" initials="GH" colorScheme="orange" />
        <Avatar size="5" initials="IJ" colorScheme="blue" />
        <Avatar size="6" initials="KL" colorScheme="red" />
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
        <Avatar initials="JD" colorScheme="blue" size="1" />
        <Avatar initials="SM" colorScheme="red" size="2" />
        <Avatar initials="AL" colorScheme="purple" size="3" />
        <Avatar initials="MK" colorScheme="teal" size="4" />
        <Avatar initials="RB" colorScheme="orange" size="5" />
        <Avatar initials="ED" colorScheme="blue" size="6" />
      </Box>
    </Box>
  ),
};

export const Fallback: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md" alignItems="center">
        <Avatar colorScheme="blue" size="1" />
        <Avatar colorScheme="red" size="2" />
        <Avatar colorScheme="purple" size="3" />
        <Avatar colorScheme="teal" size="4" />
        <Avatar colorScheme="orange" size="5" />
        <Avatar colorScheme="blue" size="6" />
      </Box>
      <Box display="flex" gap="md" alignItems="center">
        <Avatar />
        <Avatar colorScheme="red" />
        <Avatar colorScheme="purple" />
        <Avatar colorScheme="teal" />
        <Avatar colorScheme="orange" />
      </Box>
    </Box>
  ),
};

export const BrokenImage: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md" alignItems="center">
        <Avatar
          src="https://broken-image.com/invalid.jpg"
          alt="John Doe"
          colorScheme="blue"
          size="3"
        />
        <Avatar
          src="https://broken-image.com/invalid.jpg"
          alt="Sarah Miller"
          colorScheme="red"
          size="3"
        />
        <Avatar
          src="https://broken-image.com/invalid.jpg"
          alt="Default User"
          colorScheme="purple"
          size="3"
        />
        <Avatar
          src="https://broken-image.com/invalid.jpg"
          alt="Fallback"
          colorScheme="teal"
          size="3"
        />
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
          colorScheme="blue"
        />
        <Avatar initials="SM" colorScheme="red" size="3" />
        <Avatar colorScheme="teal" size="3" />
        <Avatar
          src="https://images.unsplash.com/photo-1494790108755-2616b612b789?w=48&h=48&fit=crop&crop=face"
          alt="Sarah Wilson"
          size="3"
          colorScheme="orange"
        />
      </Box>
      <Box display="flex" gap="md" alignItems="center">
        <Avatar
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
          alt="John Doe"
          size="2"
          colorScheme="blue"
        />
        <Avatar initials="SM" colorScheme="red" size="2" />
        <Avatar colorScheme="teal" size="2" />
        <Avatar
          src="https://images.unsplash.com/photo-1494790108755-2616b612b789?w=32&h=32&fit=crop&crop=face"
          alt="Sarah Wilson"
          size="2"
          colorScheme="orange"
        />
      </Box>
      <Box display="flex" gap="md" alignItems="center">
        <Avatar
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
          alt="John Doe"
          size="5"
          colorScheme="blue"
        />
        <Avatar initials="SM" colorScheme="red" size="5" />
        <Avatar colorScheme="teal" size="5" />
        <Avatar
          src="https://images.unsplash.com/photo-1494790108755-2616b612b789?w=80&h=80&fit=crop&crop=face"
          alt="Sarah Wilson"
          size="5"
          colorScheme="orange"
        />
      </Box>
    </Box>
  ),
};
