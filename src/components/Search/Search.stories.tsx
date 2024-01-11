import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs';
import Search from './Search';
import { FIGMA_URL } from '../../utils/common';
import { useState } from 'react';
import { FilterOption } from 'components/Filter';
import Stack from 'components/storyUtils/Stack';

export default {
  title: 'Updated Components/Search',
  component: Search,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Anatomy',
        url: `${FIGMA_URL}?node-id=10231%3A104301`,
      },
      {
        type: 'figma',
        name: 'Rules',
        url: `${FIGMA_URL}?node-id=10241%3A104324`,
      },
      {
        type: 'figma',
        name: 'Search field',
        url: `${FIGMA_URL}?node-id=10283%3A104365`,
      },
    ],
  },
};

export const SimpleSearch = {
  render: () => {
    const [value, setValue] = useState<string>();

    const handleClear = () => setValue('');

    return <Search value={value} onClear={handleClear} onInput={(e) => setValue(e.target.value)} />;
  },
  name: 'Simple Search',
};

export const DisabledSearch = {
  render: () => {
    const [value, setValue] = useState<string>();

    const handleClear = () => setValue('');

    return (
      <Search
        isDisabled
        value={value}
        onClear={handleClear}
        onInput={(e) => setValue(e.target.value)}
      />
    );
  },
  name: 'Disabled Search',
};

export const FilteredSearch = {
  render: () => {
    const [value, setValue] = useState<string>();
    const [selectedFilter, setSelectedFilter] = useState<FilterOption>(undefined);

    const handleClear = () => setValue('');

    const handleFilterClear = () => setSelectedFilter(undefined);

    return (
      <Stack height={350}>
        <Search
          value={value}
          onClear={handleClear}
          onInput={(e) => setValue(e.target.value)}
          filterConfig={{
            defaultValue: { label: 'All', value: 'all' },
            label: 'Friends',
            items: [
              { label: 'Ross Geller', value: 'option_1' },
              { label: 'Monica Geller', value: 'option_2' },
              { label: 'Chandler Bing', value: 'option_3' },
              { label: 'Joey Tribbiani', value: 'option_4' },
              { label: 'Rachel Green', value: 'option_5' },
              { label: 'Phoebe Buffay', value: 'option_6' },
            ],
            selectedFilter,
            onChange: setSelectedFilter,
            onClear: handleFilterClear,
          }}
        />
      </Stack>
    );
  },
  name: 'Filtered Search',
};

export const Playground = {
  render: () => {
    const [value, setValue] = useState<string>();
    const [selectedFilter, setSelectedFilter] = useState<FilterOption>(undefined);

    const handleClear = () => setValue('');

    const handleFilterClear = () => setSelectedFilter(undefined);

    return (
      <Stack height={350}>
        <Search
          isDisabled={boolean('isDisabled', false)}
          value={value}
          onClear={handleClear}
          onInput={(e) => setValue(e.target.value)}
        />
        <Search
          isDisabled={boolean('isDisabled', false)}
          value={value}
          onClear={handleClear}
          onInput={(e) => setValue(e.target.value)}
          filterConfig={{
            defaultValue: { label: 'All', value: 'all' },
            label: 'Friends',
            items: [
              { label: 'Ross Geller', value: 'option_1' },
              { label: 'Monica Geller', value: 'option_2' },
              { label: 'Chandler Bing', value: 'option_3' },
              { label: 'Joey Tribbiani', value: 'option_4' },
              { label: 'Rachel Green', value: 'option_5' },
              { label: 'Phoebe Buffay', value: 'option_6' },
            ],
            selectedFilter,
            onChange: setSelectedFilter,
            onClear: handleFilterClear,
          }}
        />
      </Stack>
    );
  },
  name: 'Playground',
};
