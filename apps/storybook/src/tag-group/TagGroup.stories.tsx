import { Box, Tag, TagGroup, TagList, Text, type Selection } from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { useListData } from 'react-stately';

const meta: Meta<typeof TagGroup> = {
  title: 'Vanilla/TagGroup',
  component: TagGroup,
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TagGroup>;

const friendsList = [
  { id: '1', name: 'Monica' },
  { id: '2', name: 'Ross' },
  { id: '3', name: 'Rachel' },
  { id: '4', name: 'Chandler' },
  { id: '5', name: 'Joey' },
  { id: '6', name: 'Phoebe' },
];

export const SingleSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<Selection>(new Set());

    return (
      <Box display="flex" flexDirection="column" gap="sm">
        <TagGroup
          aria-label="Friends"
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <TagList items={friendsList}>{(item) => <Tag>{item.name}</Tag>}</TagList>
        </TagGroup>
        <Text typography="body02" color="secondary">
          Selected:{' '}
          <Text typography="label02" color="primary">
            {selected}
          </Text>
        </Text>
      </Box>
    );
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<Selection>(new Set());

    return (
      <Box display="flex" flexDirection="column" gap="sm">
        <TagGroup
          aria-label="Friends"
          selectionMode="multiple"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <TagList items={friendsList}>{(item) => <Tag>{item.name}</Tag>}</TagList>
        </TagGroup>
        <Text typography="body02" color="secondary">
          Selected:{' '}
          <Text typography="label02" color="primary">
            {Array.from(selected).join(', ')}
          </Text>
        </Text>
      </Box>
    );
  },
};

export const Removable: Story = {
  render: () => {
    const list = useListData({
      initialItems: friendsList,
    });

    return (
      <Box display="flex" flexDirection="column" gap="sm">
        <TagGroup aria-label="Friends" onRemove={(keys) => list.remove(...keys)}>
          <TagList
            items={list.items}
            renderEmptyState={() => <Text typography="body02">No friends</Text>}
          >
            {(item) => <Tag>{item.name}</Tag>}
          </TagList>
        </TagGroup>
      </Box>
    );
  },
};
