import {
  Badge,
  BookmarkIcon,
  Box,
  CodeBadge,
  MoreOptionsIcon,
  Text,
} from '@orfium/ictinus/vanilla';
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

export const Variants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" flexWrap="wrap" gap="sm">
        <Badge>Neutral</Badge>
        <Badge colorScheme="blue">Blue</Badge>
        <Badge colorScheme="red">Red</Badge>
        <Badge colorScheme="purple">Purple</Badge>
        <Badge colorScheme="teal">Teal</Badge>
        <Badge colorScheme="orange">Orange</Badge>
        <CodeBadge>Code</CodeBadge>
      </Box>
    </Box>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" flexWrap="wrap" gap="sm">
        <Badge>Neutral</Badge>
        <Badge colorScheme="blue">Blue</Badge>
        <Badge colorScheme="red">Red</Badge>
        <Badge colorScheme="purple">Purple</Badge>
        <Badge colorScheme="teal">Teal</Badge>
        <Badge colorScheme="orange">Orange</Badge>
        <CodeBadge>Code</CodeBadge>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="sm">
        <Badge size="small">Neutral</Badge>
        <Badge size="small" colorScheme="blue">
          Blue
        </Badge>
        <Badge size="small" colorScheme="red">
          Red
        </Badge>
        <Badge size="small" colorScheme="purple">
          Purple
        </Badge>
        <Badge size="small" colorScheme="teal">
          Teal
        </Badge>
        <Badge size="small" colorScheme="orange">
          Orange
        </Badge>
        <CodeBadge size="small">Code</CodeBadge>
      </Box>
    </Box>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="2xl">
      <Box display="flex" flexWrap="wrap" gap="sm">
        <Badge>
          <BookmarkIcon />
          <Text>Neutral</Text>
        </Badge>
        <Badge colorScheme="blue">
          <BookmarkIcon />
          <Text>Blue</Text>
        </Badge>
        <Badge colorScheme="red">
          <BookmarkIcon />
          <Text>Red</Text>
        </Badge>
        <Badge colorScheme="purple">
          <BookmarkIcon />
          <Text>Purple</Text>
        </Badge>
        <Badge colorScheme="teal">
          <BookmarkIcon />
          <Text>Teal</Text>
        </Badge>
        <Badge colorScheme="orange">
          <BookmarkIcon />
          <Text>Orange</Text>
        </Badge>
        <CodeBadge>
          <BookmarkIcon />
          <Text>Code</Text>
        </CodeBadge>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="sm">
        <Badge size="small">
          <BookmarkIcon />
          <Text>Neutral</Text>
        </Badge>
        <Badge size="small" colorScheme="blue">
          <BookmarkIcon />
          <Text>Blue</Text>
        </Badge>
        <Badge size="small" colorScheme="red">
          <BookmarkIcon />
          <Text>Red</Text>
        </Badge>
        <Badge size="small" colorScheme="purple">
          <BookmarkIcon />
          <Text>Purple</Text>
        </Badge>
        <Badge size="small" colorScheme="teal">
          <BookmarkIcon />
          <Text>Teal</Text>
        </Badge>
        <Badge size="small" colorScheme="orange">
          <BookmarkIcon />
          <Text>Orange</Text>
        </Badge>
        <CodeBadge size="small">
          <BookmarkIcon />
          <Text>Code</Text>
        </CodeBadge>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="sm">
        <Badge>
          <BookmarkIcon />
          <Text>Neutral</Text>
          <MoreOptionsIcon />
        </Badge>
        <Badge colorScheme="blue">
          <BookmarkIcon />
          <Text>Blue</Text>
          <MoreOptionsIcon />
        </Badge>
        <Badge colorScheme="red">
          <BookmarkIcon />
          <Text>Red</Text>
          <MoreOptionsIcon />
        </Badge>
        <Badge colorScheme="purple">
          <BookmarkIcon />
          <Text>Purple</Text>
          <MoreOptionsIcon />
        </Badge>
        <Badge colorScheme="teal">
          <BookmarkIcon />
          <Text>Teal</Text>
          <MoreOptionsIcon />
        </Badge>
        <Badge colorScheme="orange">
          <BookmarkIcon />
          <Text>Orange</Text>
          <MoreOptionsIcon />
        </Badge>
        <CodeBadge>
          <BookmarkIcon />
          <Text>Code</Text>
          <MoreOptionsIcon />
        </CodeBadge>
      </Box>
    </Box>
  ),
};
