import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import Filter from '../Filter';
import {
  AsyncFilterShowcase,
  FilterShowcase,
  MultiFilterShowcase,
} from '../storyUtils/FilterShowcase';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Original Components/Filter',
  component: Filter,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Anatomy',
        url: `${FIGMA_URL}?node-id=10081%3A104078`,
      },
      {
        type: 'figma',
        name: 'Filters',
        url: `${FIGMA_URL}?node-id=10283%3A104359`,
      },
      {
        type: 'figma',
        name: 'Filters Pressed',
        url: `${FIGMA_URL}?node-id=10283%3A104360`,
      },
      {
        type: 'figma',
        name: 'Documentation: Outlined',
        url: `${FIGMA_URL}?node-id=10073%3A105241`,
      },
      {
        type: 'figma',
        name: 'Documentation: Transparent',
        url: `${FIGMA_URL}?node-id=10073%3A105431`,
      },
      {
        type: 'figma',
        name: 'Functionality: Adding new',
        url: `${FIGMA_URL}?node-id=6283%3A99221`,
      },
      {
        type: 'figma',
        name: 'Functionality: Multiselect',
        url: `${FIGMA_URL}?node-id=5156%3A73802`,
      },
    ],
  },
};

export const PresetFilter = {
  render: () => <h2>Preset</h2>,
  name: 'Preset Filter',
};

export const AddedFilter = {
  render: () => <h2>Added</h2>,
  name: 'Added Filter',
};

export const SearchableFilter = {
  render: () => (
    <Stack>
      <FilterShowcase filterType={'preset'} styleType="filled" isSearchable />
    </Stack>
  ),

  name: 'Searchable Filter',
};

export const AsyncFilter = {
  render: () => <AsyncFilterShowcase />,
  name: 'Async Filter',
};

export const AsyncFilterWithMinCharacters = {
  render: () => <AsyncFilterShowcase minCharactersToSearch={3} />,
  name: 'Async Filter with min characters',
};

export const MultiFilter = {
  render: () => (
    <Stack>
      <MultiFilterShowcase
        filterType={select('filterType', ['preset', 'added'], 'preset')}
        styleType={select('styleType', ['filled', 'transparent'], 'filled')}
        buttonType={select('buttonType', ['primary', 'secondary'], 'primary')}
        hasSelectAllOption={boolean('Select All', false)}
      />
    </Stack>
  ),

  name: 'MultiFilter',
};

export const Playground = {
  render: () => (
    <FilterShowcase
      items={[
        {
          value: 'apple',
          label: 'Apple',
        },
        {
          value: 'orange',
          label: 'Orange',
        },
        {
          value: 'banana',
          label: 'Banana',
        },
      ]}
      label={text('text', 'you can change me')}
      selectedItem={select(
        'selectedItem',
        [
          {
            value: 'apple',
            label: 'Apple',
          },
          {
            value: 'orange',
            label: 'Orange',
          },
          {
            value: 'banana',
            label: 'Banana',
          },
        ],
        {
          value: 'banana',
          label: 'Banana',
        }
      )}
      defaultValue={
        (select(
          'defaultValue',
          [
            {
              value: 'peach',
              label: 'Peach',
            },
            {
              value: 'watermelon',
              label: 'Watermelon',
            },
          ],
          {
            value: 'watermelon',
            label: 'Watermelon',
          }
        ),
        {
          value: 'peach',
          label: 'Peach',
        })
      }
      styleType={select('styleType', ['filled', 'transparent'], 'filled')}
      filterType={select('filterType', ['preset', 'added'], 'preset')}
      isSearchable={boolean('isSearchable', false)}
      buttonType={select('buttonType', ['primary', 'secondary'], 'primary')}
    />
  ),

  name: 'Playground',

  parameters: {
    decorators: [withKnobs],
  },
};
