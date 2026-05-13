import { Badge, BookmarkIcon, Box, Text } from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Badge> = {
  title: 'Vanilla/Badge',
  component: Badge,
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const ReadOnlyBadges: Story = {
  name: 'Variants',
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" padding="lg">
      <Box display="flex" flexDirection="column" gap="md">
        <Text typography="headline04">Default</Text>
        <Box display="flex" flexWrap="wrap" gap="sm">
          <Badge>Default</Badge>
          <Badge color="blue">Blue</Badge>
          <Badge color="red">Red</Badge>
          <Badge color="purple">Purple</Badge>
          <Badge color="teal">Teal</Badge>
          <Badge color="orange">Orange</Badge>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="md">
        <Text typography="headline04">Code</Text>
        <Box display="flex" flexWrap="wrap" gap="sm">
          <Badge variant="code">c0d31a831</Badge>
        </Box>
      </Box>
    </Box>
  ),
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" padding="lg">
      <Box display="flex" flexDirection="column" gap="md">
        <Text typography="headline04">Default Variant</Text>
        <Box display="flex" alignItems="center" gap="sm" flexWrap="wrap">
          <Badge size="small">Small</Badge>
          <Badge size="normal">Normal</Badge>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="md">
        <Text typography="headline04">Code Variant</Text>
        <Box display="flex" alignItems="center" gap="sm" flexWrap="wrap">
          <Badge variant="code" size="small">
            small-code
          </Badge>
          <Badge variant="code" size="normal">
            normal-code
          </Badge>
        </Box>
      </Box>
    </Box>
  ),
};

export const WithIcons: Story = {
  name: 'With Icons',
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" padding="lg">
      <Box display="flex" flexDirection="column" gap="md">
        <Text typography="headline04">Default Variant</Text>
        <Box display="flex" flexWrap="wrap" gap="sm">
          <Badge>
            <BookmarkIcon aria-hidden="true" />
            <Text>Default</Text>
          </Badge>
          <Badge color="blue">
            <BookmarkIcon aria-hidden="true" />
            <Text>Blue</Text>
          </Badge>
          <Badge color="red">
            <BookmarkIcon aria-hidden="true" />
            <Text>Red</Text>
          </Badge>
        </Box>
        <Box display="flex" flexWrap="wrap" gap="sm">
          <Badge size="small">
            <BookmarkIcon aria-hidden="true" />
            <Text>Default</Text>
          </Badge>
          <Badge size="small" color="blue">
            <BookmarkIcon aria-hidden="true" />
            <Text>Blue</Text>
          </Badge>
          <Badge size="small" color="red">
            <BookmarkIcon aria-hidden="true" />
            <Text>Red</Text>
          </Badge>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="md">
        <Text typography="headline04">Code Variant</Text>
        <Box display="flex" flexWrap="wrap" gap="sm">
          <Badge variant="code">
            <BookmarkIcon aria-hidden="true" />
            <Text>c0d31a831</Text>
          </Badge>
        </Box>
        <Box display="flex" flexWrap="wrap" gap="sm">
          <Badge variant="code" size="small">
            <BookmarkIcon aria-hidden="true" />
            <Text>c0d31a831</Text>
          </Badge>
        </Box>
      </Box>
    </Box>
  ),
};
