import {
  BookmarkIcon,
  Box,
  Button,
  DeleteIcon,
  EditIcon,
  LockIcon,
  MenuIcon,
  MoreOptionsIcon,
  Text,
  Tooltip,
  TooltipContent,
  TriangleDownIcon,
} from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Button> = {
  title: 'Vanilla/Button',
  component: Button,
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="tertiary">Button</Button>
        <Button variant="danger">Button</Button>
      </Box>
    </Box>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="tertiary">Button</Button>
        <Button variant="danger">Button</Button>
      </Box>
      <Box display="flex" gap="md">
        <Button size="compact">Button</Button>
        <Button variant="secondary" size="compact">
          Button
        </Button>
        <Button variant="tertiary" size="compact">
          Button
        </Button>
        <Button variant="danger" size="compact">
          Button
        </Button>
      </Box>
    </Box>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md">
        <Button>
          <EditIcon />
          <Text>Button</Text>
        </Button>
        <Button variant="secondary">
          <BookmarkIcon />
          <Text>Button</Text>
        </Button>
        <Button variant="tertiary">
          <LockIcon />
          <Text>Button</Text>
        </Button>
        <Button variant="danger">
          <DeleteIcon />
          <Text>Button</Text>
        </Button>
      </Box>
      <Box display="flex" gap="md">
        <Button size="compact">
          <EditIcon />
          <Text>Button</Text>
        </Button>
        <Button variant="secondary" size="compact">
          <BookmarkIcon />
          <Text>Button</Text>
        </Button>
        <Button variant="tertiary" size="compact">
          <LockIcon />
          <Text>Button</Text>
        </Button>
        <Button variant="danger" size="compact">
          <DeleteIcon />
          <Text>Button</Text>
        </Button>
      </Box>
      <Box display="flex" gap="md">
        <Button>
          <Text>Button</Text>
          <EditIcon />
        </Button>
        <Button variant="secondary">
          <Text>Button</Text>
          <BookmarkIcon />
        </Button>
        <Button variant="tertiary">
          <Text>Button</Text>
          <LockIcon />
        </Button>
        <Button variant="danger">
          <Text>Button</Text>
          <DeleteIcon />
        </Button>
      </Box>
      <Box display="flex" gap="md">
        <Button>
          <EditIcon />
          <Text>Button</Text>
          <TriangleDownIcon />
        </Button>
        <Button variant="secondary">
          <BookmarkIcon />
          <Text>Button</Text>
          <TriangleDownIcon />
        </Button>
        <Button variant="tertiary">
          <LockIcon />
          <Text>Button</Text>
          <TriangleDownIcon />
        </Button>
        <Button variant="danger">
          <DeleteIcon />
          <Text>Button</Text>
          <TriangleDownIcon />
        </Button>
      </Box>
      <Box display="flex" gap="md">
        <Button size="compact">
          <EditIcon />
          <Text>Button</Text>
          <MoreOptionsIcon />
        </Button>
        <Button variant="secondary" size="compact">
          <BookmarkIcon />
          <Text>Button</Text>
          <MoreOptionsIcon />
        </Button>
        <Button variant="tertiary" size="compact">
          <LockIcon />
          <Text>Button</Text>
          <MoreOptionsIcon />
        </Button>
        <Button variant="danger" size="compact">
          <DeleteIcon />
          <Text>Button</Text>
          <MoreOptionsIcon />
        </Button>
      </Box>
    </Box>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md">
        <Button isDisabled>Button</Button>
        <Button variant="secondary" isDisabled>
          Button
        </Button>
        <Button variant="tertiary" isDisabled>
          Button
        </Button>
        <Button variant="danger" isDisabled>
          Button
        </Button>
      </Box>
      <Box display="flex" gap="md">
        <Button size="compact" isDisabled>
          Button
        </Button>
        <Button variant="secondary" size="compact" isDisabled>
          Button
        </Button>
        <Button variant="tertiary" size="compact" isDisabled>
          Button
        </Button>
        <Button variant="danger" size="compact" isDisabled>
          Button
        </Button>
      </Box>
      <Box display="flex" gap="md">
        <Button isDisabled>
          <EditIcon />
          <Text>Button</Text>
        </Button>
        <Button variant="secondary" isDisabled>
          <BookmarkIcon />
          <Text>Button</Text>
        </Button>
        <Button variant="tertiary" isDisabled>
          <LockIcon />
          <Text>Button</Text>
        </Button>
        <Button variant="danger" isDisabled>
          <DeleteIcon />
          <Text>Button</Text>
        </Button>
      </Box>
      <Box display="flex" gap="md">
        <Button size="compact" isDisabled>
          <EditIcon />
          <Text>Button</Text>
        </Button>
        <Button variant="secondary" size="compact" isDisabled>
          <BookmarkIcon />
          <Text>Button</Text>
        </Button>
        <Button variant="tertiary" size="compact" isDisabled>
          <LockIcon />
          <Text>Button</Text>
        </Button>
        <Button variant="danger" size="compact" isDisabled>
          <DeleteIcon />
          <Text>Button</Text>
        </Button>
      </Box>
      <Box display="flex" gap="md">
        <Button iconOnly isDisabled>
          <EditIcon />
        </Button>
        <Button variant="secondary" iconOnly isDisabled>
          <BookmarkIcon />
        </Button>
        <Button variant="tertiary" iconOnly isDisabled>
          <LockIcon />
        </Button>
        <Button variant="danger" iconOnly isDisabled>
          <DeleteIcon />
        </Button>
      </Box>
      <Box display="flex" gap="md">
        <Button size="compact" iconOnly circle isDisabled>
          <EditIcon />
        </Button>
        <Button variant="secondary" size="compact" iconOnly circle isDisabled>
          <BookmarkIcon />
        </Button>
        <Button variant="tertiary" size="compact" iconOnly circle isDisabled>
          <LockIcon />
        </Button>
        <Button variant="danger" size="compact" iconOnly circle isDisabled>
          <DeleteIcon />
        </Button>
      </Box>
    </Box>
  ),
};
export const Pending: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md">
        <Button isPending>Button</Button>
        <Button variant="secondary" isPending>
          Button
        </Button>
        <Button variant="tertiary" isPending>
          Button
        </Button>
        <Button variant="danger" isPending>
          Button
        </Button>
      </Box>
      <Box display="flex" gap="md">
        <Button size="compact" isPending>
          Button
        </Button>
        <Button variant="secondary" size="compact" isPending>
          Button
        </Button>
        <Button variant="tertiary" size="compact" isPending>
          Button
        </Button>
        <Button variant="danger" size="compact" isPending>
          Button
        </Button>
      </Box>
      <Box display="flex" gap="md">
        <Button isPending>
          <EditIcon />
          <Text>Button</Text>
        </Button>
        <Button variant="secondary" isPending>
          <BookmarkIcon />
          <Text>Button</Text>
        </Button>
        <Button variant="tertiary" isPending>
          <LockIcon />
          <Text>Button</Text>
        </Button>
        <Button variant="danger" isPending>
          <DeleteIcon />
          <Text>Button</Text>
        </Button>
      </Box>
      <Box display="flex" gap="md">
        <Button size="compact" isPending>
          <EditIcon />
          <Text>Button</Text>
        </Button>
        <Button variant="secondary" size="compact" isPending>
          <BookmarkIcon />
          <Text>Button</Text>
        </Button>
        <Button variant="tertiary" size="compact" isPending>
          <LockIcon />
          <Text>Button</Text>
        </Button>
        <Button variant="danger" size="compact" isPending>
          <DeleteIcon />
          <Text>Button</Text>
        </Button>
      </Box>
      <Box display="flex" gap="md">
        <Button iconOnly isPending>
          <EditIcon />
        </Button>
        <Button variant="secondary" iconOnly isPending>
          <BookmarkIcon />
        </Button>
        <Button variant="tertiary" iconOnly isPending>
          <LockIcon />
        </Button>
        <Button variant="danger" iconOnly isPending>
          <DeleteIcon />
        </Button>
      </Box>
      <Box display="flex" gap="md">
        <Button size="compact" iconOnly circle isPending>
          <EditIcon />
        </Button>
        <Button variant="secondary" size="compact" iconOnly circle isPending>
          <BookmarkIcon />
        </Button>
        <Button variant="tertiary" size="compact" iconOnly circle isPending>
          <LockIcon />
        </Button>
        <Button variant="danger" size="compact" iconOnly circle isPending>
          <DeleteIcon />
        </Button>
      </Box>
    </Box>
  ),
};

export const IconButton: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md">
        <Button iconOnly>
          <EditIcon />
        </Button>
        <Button variant="secondary" iconOnly>
          <BookmarkIcon />
        </Button>
        <Button variant="tertiary" iconOnly>
          <LockIcon />
        </Button>
        <Button variant="danger" iconOnly>
          <DeleteIcon />
        </Button>
      </Box>
      <Box display="flex" gap="md">
        <Button size="compact" iconOnly>
          <EditIcon />
        </Button>
        <Button variant="secondary" size="compact" iconOnly>
          <BookmarkIcon />
        </Button>
        <Button variant="tertiary" size="compact" iconOnly>
          <LockIcon />
        </Button>
        <Button variant="danger" size="compact" iconOnly>
          <DeleteIcon />
        </Button>
      </Box>
      <Box display="flex" gap="md">
        <Button iconOnly circle>
          <EditIcon />
        </Button>
        <Button variant="secondary" iconOnly circle>
          <BookmarkIcon />
        </Button>
        <Button variant="tertiary" iconOnly circle>
          <LockIcon />
        </Button>
        <Button variant="danger" iconOnly circle>
          <DeleteIcon />
        </Button>
      </Box>
      <Box display="flex" gap="md">
        <Button size="compact" iconOnly circle>
          <EditIcon />
        </Button>
        <Button variant="secondary" size="compact" iconOnly circle>
          <BookmarkIcon />
        </Button>
        <Button variant="tertiary" size="compact" iconOnly circle>
          <LockIcon />
        </Button>
        <Button variant="danger" size="compact" iconOnly circle>
          <DeleteIcon />
        </Button>
      </Box>
      <Box display="flex" gap="md">
        <Button variant="secondary" size="compact" iconOnly circle>
          <EditIcon color="secondary" />
        </Button>
        <Button variant="secondary" size="compact" iconOnly circle>
          <BookmarkIcon color="secondary" />
        </Button>
        <Button variant="tertiary" size="compact" iconOnly circle>
          <LockIcon color="secondary" />
        </Button>
      </Box>
    </Box>
  ),
};

export const WithTooltip: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" gap="md">
        <Tooltip>
          <Button iconOnly>
            <MenuIcon />
          </Button>
          <TooltipContent>Open menu</TooltipContent>
        </Tooltip>
        <Tooltip>
          <Button variant="secondary" iconOnly>
            <MoreOptionsIcon />
          </Button>
          <TooltipContent>More options</TooltipContent>
        </Tooltip>
        <Tooltip>
          <Button variant="tertiary" iconOnly>
            <LockIcon />
          </Button>
          <TooltipContent>Unlock</TooltipContent>
        </Tooltip>
        <Tooltip>
          <Button variant="danger" iconOnly>
            <DeleteIcon />
          </Button>
          <TooltipContent>Delete</TooltipContent>
        </Tooltip>
      </Box>
      <Box display="flex" gap="md">
        <Tooltip>
          <Button size="compact" iconOnly circle>
            <MenuIcon />
          </Button>
          <TooltipContent>Open menu</TooltipContent>
        </Tooltip>
        <Tooltip>
          <Button variant="secondary" size="compact" iconOnly circle>
            <MoreOptionsIcon />
          </Button>
          <TooltipContent>More options</TooltipContent>
        </Tooltip>
        <Tooltip>
          <Button variant="tertiary" size="compact" iconOnly circle>
            <LockIcon />
          </Button>
          <TooltipContent>Unlock</TooltipContent>
        </Tooltip>
        <Tooltip>
          <Button variant="danger" size="compact" iconOnly circle>
            <DeleteIcon />
          </Button>
          <TooltipContent>Delete</TooltipContent>
        </Tooltip>
      </Box>
    </Box>
  ),
};
