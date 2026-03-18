import {
  Box,
  Button,
  EditIcon,
  Text,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  UsageIcon,
} from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Button> = {
  title: 'Vanilla/Button',
  component: Button,
  parameters: { controls: { disable: true } },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => {
    return (
      <Box display="flex" flexDirection="column" gap="2xl">
        <Box display="flex" gap="md">
          <Button>Button</Button>
          <Button variant="secondary">Button</Button>
          <Button variant="tertiary">Button</Button>
          <Button variant="danger">Button</Button>
        </Box>
        <Box display="flex" gap="md">
          <Button>
            <EditIcon />
            <Text>Button</Text>
          </Button>
          <Button size="compact">
            <EditIcon />
            <Text>Button</Text>
          </Button>
          <Button variant="secondary">
            <EditIcon />
            <Text>Button</Text>
          </Button>
          <Button variant="secondary" size="compact">
            <EditIcon />
            <Text>Button</Text>
          </Button>
          <Button variant="tertiary">
            <EditIcon />
            <Text>Button</Text>
          </Button>
          <Button variant="tertiary" size="compact">
            <EditIcon />
            <Text>Button</Text>
          </Button>
          <Button variant="danger">
            <EditIcon />
            <Text>Button</Text>
          </Button>
          <Button variant="danger" size="compact">
            <EditIcon />
            <Text>Button</Text>
          </Button>
        </Box>
        <Box display="flex" gap="md">
          <Button aria-label="edit" iconOnly>
            <EditIcon />
          </Button>
          <Button aria-label="edit" variant="secondary" iconOnly>
            <EditIcon />
          </Button>
          <Button aria-label="edit" variant="tertiary" iconOnly>
            <EditIcon />
          </Button>
          <Button aria-label="edit" variant="danger" iconOnly>
            <EditIcon />
          </Button>
        </Box>
        <Box display="flex" gap="md">
          <Button aria-label="edit" size="compact" iconOnly circle>
            <EditIcon />
          </Button>
          <Button aria-label="edit" variant="secondary" size="compact" iconOnly circle>
            <EditIcon />
          </Button>
          <Button aria-label="edit" variant="tertiary" size="compact" iconOnly circle>
            <EditIcon />
          </Button>
          <Button aria-label="edit" variant="tertiary" size="compact" iconOnly circle>
            <EditIcon color="secondary" />
          </Button>
        </Box>
        <Box display="flex" gap="md">
          <Button isDisabled>Button</Button>
          <Button isDisabled>
            <EditIcon />
            <Text>Button</Text>
          </Button>
          <Button size="compact" isDisabled>
            Button
          </Button>
          <Button variant="danger" isDisabled>
            Button
          </Button>
          <Button aria-label="edit" iconOnly isDisabled>
            <EditIcon />
          </Button>
          <Button aria-label="edit" size="compact" iconOnly isDisabled>
            <EditIcon />
          </Button>
          <Button aria-label="edit" variant="secondary" iconOnly isDisabled>
            <EditIcon />
          </Button>
          <Button aria-label="edit" variant="secondary" iconOnly circle isDisabled>
            <EditIcon />
          </Button>
        </Box>
        <Box display="flex" gap="md">
          <Button isPending onPress={() => alert('test')}>
            Button
          </Button>
          <Button isPending>
            <EditIcon />
            <Text>Button</Text>
          </Button>
          <Button size="compact" isPending>
            Button
          </Button>
          <Button variant="danger" isPending>
            Button
          </Button>
          <Button aria-label="edit" iconOnly isPending>
            <EditIcon />
          </Button>
          <Button aria-label="edit" size="compact" iconOnly isPending>
            <EditIcon />
          </Button>
          <Button aria-label="edit" variant="secondary" iconOnly isPending>
            <EditIcon />
          </Button>
          <Button aria-label="edit" variant="secondary" iconOnly circle isPending>
            <EditIcon />
          </Button>
        </Box>
        <Tooltip>
          <Button aria-label="edit" variant="secondary" size="compact" iconOnly circle>
            <EditIcon />
          </Button>
          <TooltipContent>Edit</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <UsageIcon color="success" ml="lg" />
          </TooltipTrigger>
          <TooltipContent>Edit</TooltipContent>
        </Tooltip>
      </Box>
    );
  },
};
