import {
  AccountIcon,
  Box,
  Button,
  Icon,
  IconPrimitive,
  ICONS,
  Text,
  type IconPrimitiveProps,
} from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { forwardRef } from 'react';

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

export const CustomIcon: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="md">
      <ClockOutlinedIcon size="lg" />
      <Button variant="secondary" iconOnly>
        <ClockOutlinedIcon />
      </Button>
    </Box>
  ),
};

const ClockOutlinedIcon = forwardRef<SVGSVGElement, IconPrimitiveProps>((props, ref) => (
  <IconPrimitive ref={ref} {...props}>
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.992 2C5.576 2 2 5.584 2 10C2 14.416 5.576 18 9.992 18C14.416 18 18 14.416 18 10C18 5.584 14.416 2 9.992 2ZM10 16.4C6.464 16.4 3.6 13.536 3.6 10C3.6 6.464 6.464 3.6 10 3.6C13.536 3.6 16.4 6.464 16.4 10C16.4 13.536 13.536 16.4 10 16.4ZM10.4 6H9.2V10.8L13.4 13.32L14 12.336L10.4 10.2V6Z"
        fill="currentColor"
      />
    </svg>
  </IconPrimitive>
));
