import { Filter, FilterItem } from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { Key } from 'react-aria-components';

const meta: Meta<typeof Filter> = {
  title: 'Vanilla/Filter',
  component: Filter,
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Filter>;

const friends = [
  { id: '1', name: 'Monica Geller' },
  { id: '2', name: 'Ross Geller' },
  { id: '3', name: 'Rachel Green' },
  { id: '4', name: 'Chandler Bing' },
  { id: '5', name: 'Joey Tribbiani' },
  { id: '6', name: 'Phoebe Buffay' },
  { id: '7', name: 'Gunther' },
  { id: '8', name: 'Janice Litman-Goralnik' },
  { id: '9', name: 'Mike Hannigan' },
  { id: '10', name: 'Emily Waltham' },
];

export const MultiSelect: Story = {
  render: () => {
    const [value, setValue] = useState<Key[]>([]);

    return (
      <Filter
        label="Friends"
        emptyLabel="all"
        items={friends}
        value={value}
        onChange={setValue}
        searchPlaceholder="Search something"
      />
    );
  },
};

export const WithDefaultValue: Story = {
  render: () => (
    <Filter
      label="Friends"
      emptyLabel="all"
      items={friends}
      defaultValue={['1', '4', '5']}
      searchPlaceholder="Search something"
    />
  ),
};

export const CustomItem: Story = {
  render: () => (
    <Filter
      label="Friends"
      emptyLabel="all"
      items={friends}
      defaultValue={['2']}
      searchPlaceholder="Search something"
    >
      {(item) => (
        <FilterItem id={item.id} textValue={item.name}>
          {item.name}
        </FilterItem>
      )}
    </Filter>
  ),
};
