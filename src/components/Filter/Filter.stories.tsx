import { userEvent, within } from '@storybook/testing-library';
import Button from 'components/Button';
import DropdownButton from 'components/DropdownButton';
import TextField from 'components/TextField';
import useTheme from 'hooks/useTheme';
import React from 'react';
import { FIGMA_URL } from 'utils/common';
import * as DatePickerStories from '../DatePicker/DatePicker.stories';
import Stack from '../storyUtils/Stack';
import { options } from './constants';
import Filter from './Filter';
import { FilterOption } from './Filter.types';

export default {
  title: 'Updated Components/Filter',
  component: Filter,
  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Anatomy',
        url: `${FIGMA_URL}?node-id=10081%3A104078`,
      },
    ],
    chromatic: { delay: 400 },
  },
  args: {
    singleFilterLabel: 'Single Filter',
    multiFilterLabel: 'Multi Filter',
  },
  argTypes: {
    filterType: { type: 'select', options: ['preset', 'added'] },
  },
};

export const PresetFilter = {
  render: () => {
    const [selectedFilter, setSelectedFilter] = React.useState<FilterOption>(undefined);

    const handleClear = () => setSelectedFilter(undefined);

    return (
      <Stack height={450}>
        <Filter
          selectedFilter={selectedFilter}
          onChange={setSelectedFilter}
          onClear={handleClear}
          defaultValue={{ label: 'All', value: 'all' }}
          label={'Friends'}
          items={options}
        />
      </Stack>
    );
  },
  name: 'Preset Filter',
  parameters: {
    controls: { disable: true },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const filter = await canvas.findByTestId('ictinus_filter_filter_button');
    await userEvent.click(filter);
  },
};

export const AddedFilter = {
  render: () => {
    const names = ['Geller', 'Bing', 'Tribbiani', 'Green', 'Buffay'];

    const [filters, setFilters] = React.useState(names);
    const [filtersShown, setFiltersShown] = React.useState([]);

    const states = {
      Geller: React.useState<FilterOption>(undefined),
      Bing: React.useState<FilterOption>(undefined),
      Tribbiani: React.useState<FilterOption>(undefined),
      Green: React.useState<FilterOption>(undefined),
      Buffay: React.useState<FilterOption>(undefined),
    };

    return (
      <Stack height={300}>
        {filtersShown.map((filterName, index) => (
          <Filter
            hasWrapperWidth
            filterType="added"
            selectedFilter={states[filtersShown[index]][0]}
            onChange={states[filtersShown[index]][1]}
            onClear={() => {
              states[filtersShown[index]][1](undefined);
              setFilters([...filters, filterName]);
              setFiltersShown(filtersShown.filter((filter) => filter !== filterName));
            }}
            defaultValue={{ label: 'All', value: 'all' }}
            label={filterName}
            items={options.filter((option) =>
              option.label.toLowerCase().includes(filterName.toLowerCase())
            )}
          />
        ))}

        {Boolean(filters.length) && (
          <DropdownButton
            iconButtonName="plus"
            type="tertiary"
            items={filters}
            onOptionSelect={(option) => {
              setFiltersShown([...filtersShown, option]);
              setFilters(filters.filter((filter) => filter !== option));
            }}
          />
        )}

        {Boolean(filtersShown.length) && (
          <Button
            type="tertiary"
            onClick={() => {
              setFiltersShown([]);
              setFilters(names);
              /** Reset all filters states */
              Object.values(states).forEach((friend) => friend[1](undefined));
            }}
          >
            Reset
          </Button>
        )}
      </Stack>
    );
  },
  name: 'Added Filter',
  parameters: {
    controls: { disable: true },
  },
};

export const SimpleFilter = {
  render: () => {
    const [selectedFilter, setSelectedFilter] = React.useState<FilterOption>(undefined);

    const handleClear = () => setSelectedFilter(undefined);

    return (
      <Stack height={450}>
        <Filter
          selectedFilter={selectedFilter}
          onChange={setSelectedFilter}
          onClear={handleClear}
          defaultValue={{ label: 'All', value: 'all' }}
          label={'Friends'}
          items={options}
        />
      </Stack>
    );
  },
  name: 'Simple Filter',

  parameters: {
    controls: { disable: true },
  },
};

export const SearchableFilter = {
  render: () => {
    const [selectedFilter, setSelectedFilter] = React.useState<FilterOption>(undefined);

    const handleClear = () => setSelectedFilter(undefined);

    return (
      <Stack height={450}>
        <Filter
          isSearchable
          selectedFilter={selectedFilter}
          onChange={setSelectedFilter}
          onClear={handleClear}
          defaultValue={{ label: 'All', value: 'all' }}
          label={'Friends'}
          items={options}
        />
      </Stack>
    );
  },
  name: 'Searchable Filter',

  parameters: {
    controls: { disable: true },
  },
};

export const AsyncFilter = {
  render: () => {
    const [stateItem, setStateItem] = React.useState<FilterOption | undefined>();
    const [items, setOptions] = React.useState<FilterOption[]>(options);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleAsyncSearch = async (term: string) => {
      setIsLoading(true);

      return new Promise<FilterOption[]>((resolve) => {
        setTimeout(() => {
          resolve(options);
        }, 1500);
      }).then((values) => {
        const filteredValues = values.filter((option) =>
          option.label.toLowerCase().includes(term.toLowerCase())
        );
        setOptions(filteredValues);
        setIsLoading(false);
      });
    };

    const handleSelectItem = (item: FilterOption) => {
      setStateItem(item);
      setOptions(options);
    };

    return (
      <Stack height={450}>
        <Filter
          isSearchable
          isAsync
          isLoading={isLoading}
          selectedFilter={stateItem}
          onChange={handleSelectItem}
          onAsyncSearch={handleAsyncSearch}
          onClear={() => setStateItem(undefined)}
          defaultValue={{ label: 'All', value: 'all' }}
          label={'Friends'}
          items={items}
        />
      </Stack>
    );
  },
  name: 'Filter with async search',

  parameters: {
    controls: { disable: true },
  },
};

export const MultiFilter = {
  render: () => {
    const [selectedFilters, setSelectedFilters] = React.useState<FilterOption[]>([]);

    const handleClear = () => setSelectedFilters([]);

    /** Async */
    const [selectedFilters1, setSelectedFilters1] = React.useState<FilterOption[]>([]);
    const [asyncItems, setAsyncItems] = React.useState<FilterOption[]>(options);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleAsyncSearch = (term: string) => {
      setIsLoading(true);

      return new Promise<FilterOption[]>((resolve) => {
        setTimeout(() => {
          resolve(options);
        }, 1500);
      }).then((values) => {
        const filteredValues = values.filter((option) =>
          option.label.toLowerCase().includes(term.toLowerCase())
        );

        setAsyncItems(filteredValues);
        setIsLoading(false);
      });
    };

    const handleClear1 = () => {
      setSelectedFilters1([]);
      setAsyncItems(options);
    };

    return (
      <Stack height={600}>
        <div css={{ display: 'flex', gap: '72px' }}>
          <Filter
            isSearchable
            isMulti
            hasSelectAllOption
            selectedFilter={selectedFilters}
            onChange={setSelectedFilters}
            onClear={handleClear}
            defaultValue={{ label: 'All', value: 'all' }}
            label={'Friends (Simple Search)'}
            items={options}
          />
          <Filter
            isSearchable
            isMulti
            isAsync
            onAsyncSearch={handleAsyncSearch}
            selectedFilter={selectedFilters1}
            isLoading={isLoading}
            onChange={setSelectedFilters1}
            onClear={handleClear1}
            defaultValue={{ label: 'All', value: 'all' }}
            label={'Friends (Async Search)'}
            items={asyncItems}
          />
        </div>
      </Stack>
    );
  },
  name: 'Multi Filter',

  parameters: {
    controls: { disable: true },
  },
};

export const FilterWithDatePicker = {
  ...DatePickerStories.DatePickerWithFilter,
  name: 'Filter with Date Picker',

  parameters: {
    controls: { disable: true },
  },
};

export const DisabledFilter = {
  render: () => {
    return (
      <Stack>
        <Filter
          isDisabled
          onChange={() => null}
          onClear={() => null}
          defaultValue={{ label: 'All', value: 'all' }}
          label={'Friends'}
          items={[]}
        />
        <Filter
          isDisabled
          onChange={() => null}
          onClear={() => null}
          selectedFilter={options[7]}
          defaultValue={{ label: 'All', value: 'all' }}
          label={'Friends'}
          items={options}
        />
      </Stack>
    );
  },
  name: 'Disabled Filter',

  parameters: {
    controls: { disable: true },
  },
};

export const CustomFilter = {
  render: () => {
    const [selectedFilter, setSelectedFilter] = React.useState<FilterOption>();
    const [selectedFilter2, setSelectedFilter2] = React.useState<FilterOption>();
    const theme = useTheme();

    const [value, setValue] = React.useState('');
    const [value2, setValue2] = React.useState('');

    return (
      <Stack height={400}>
        <Filter
          filterType="preset"
          label={'Custom Filter'}
          defaultValue={{ label: 'All', value: 'all' }}
          selectedFilter={selectedFilter}
          onClear={() => {
            setSelectedFilter(undefined);
            setValue('');
          }}
        >
          {({ setIsOpen }) => {
            return (
              <div
                css={{
                  width: '200px',
                  height: '100px',
                  background: 'white',
                  border: `1px solid ${theme.globals.colors.get('blue.2')}`,
                  borderRadius: '4px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <TextField
                  label="Enter Label"
                  size="compact"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <div css={{ alignSelf: 'end' }}>
                  <Button
                    size="compact"
                    onClick={() => {
                      setSelectedFilter({ label: value, value });
                      setIsOpen(false);
                    }}
                  >
                    Enter
                  </Button>
                </div>
              </div>
            );
          }}
        </Filter>

        <Filter
          filterType="added"
          label={'Custom Filter'}
          defaultValue={{ label: 'All', value: 'all' }}
          selectedFilter={selectedFilter2}
          onClear={() => {
            setSelectedFilter2(undefined);
            setValue2('');
          }}
        >
          {({ setIsOpen }) => {
            return (
              <div
                css={{
                  width: '200px',
                  height: '100px',
                  background: 'white',
                  border: `1px solid ${theme.globals.colors.get('blue.2')}`,
                  borderRadius: '4px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <TextField
                  label="Enter Label"
                  size="compact"
                  value={value2}
                  onChange={(e) => setValue2(e.target.value)}
                />
                <div css={{ alignSelf: 'end' }}>
                  <Button
                    size="compact"
                    onClick={() => {
                      setSelectedFilter2({ label: value2, value: value2 });
                      setIsOpen(false);
                    }}
                  >
                    Enter
                  </Button>
                </div>
              </div>
            );
          }}
        </Filter>
      </Stack>
    );
  },
  name: 'Custom Filter',

  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {
  render: (args) => {
    const [selectedFilter, setSelectedFilter] = React.useState<FilterOption>();
    const [selectedFilters, setSelectedFilters] = React.useState<FilterOption[]>([]);
    const {
      isSearchable,
      filterType,
      singleFilterLabel,
      multiFilterLabel,
      isDisabled,
      isVirtualized,
      hasSelectAllOption,
    } = args;

    return (
      <Stack height={400}>
        <Filter
          isSearchable={isSearchable}
          selectedFilter={selectedFilter}
          filterType={filterType}
          onChange={setSelectedFilter}
          onClear={() => setSelectedFilter(undefined)}
          defaultValue={{ label: 'All', value: 'all' }}
          label={singleFilterLabel}
          items={options}
          isDisabled={isDisabled}
          isVirtualized={isVirtualized}
        />
        <Filter
          isMulti
          isSearchable={isSearchable}
          hasSelectAllOption={hasSelectAllOption}
          filterType={filterType}
          selectedFilter={selectedFilters}
          onChange={setSelectedFilters}
          onClear={() => setSelectedFilters([])}
          defaultValue={{ label: 'All', value: 'all' }}
          label={multiFilterLabel}
          items={options}
          isDisabled={isDisabled}
          isVirtualized={isVirtualized}
        />
      </Stack>
    );
  },
  name: 'Playground',

  parameters: {
    controls: {
      include: [
        'isSearchable',
        'filterType',
        'singleFilterLabel',
        'multiFilterLabel',
        'isDisabled',
        'isVirtualized',
        'hasSelectAllOption',
      ],
    },
  },
};
