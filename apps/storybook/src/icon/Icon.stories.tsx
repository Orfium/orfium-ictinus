import { AccountIcon, Box, Icon, ICONS, Text } from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Icon> = {
  title: 'Vanilla/Icon',
  component: Icon,
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Iconography: Story = {
  render: () => (
    <Box display="flex" flexWrap="wrap" gap="2xl">
      {Object.keys(ICONS).map((icon: keyof typeof ICONS) => (
        <Box key={icon} display="flex" flexDirection="column" alignItems="center" gap="sm">
          <Icon name={icon} />
          <Text typography="label04">{icon}</Text>
        </Box>
      ))}
    </Box>
  ),
};

export const Color: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="md">
      <Icon name="account" color="active" />
      <Icon name="user" color="secondary" />
    </Box>
  ),
};

export const Size: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="md">
      <Icon name="account" size="lg" />
      <Icon name="account" size="md" />
      <Icon name="account" size="sm" />
      <Icon name="account" size="xs" />
    </Box>
  ),
};

export const IconComponent: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="md">
      <AccountIcon />
    </Box>
  ),
};
