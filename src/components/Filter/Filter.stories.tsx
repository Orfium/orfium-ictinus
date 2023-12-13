import { withKnobs, boolean, array, select, text } from '@storybook/addon-knobs';
import { FilterOption } from './Filter.types';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from '../../utils/common';
import Filter from './Filter';
import React from 'react';
import Button from 'components/Button';
import { options } from './constants';
import DropdownButton from 'components/DropdownButton';
import useTheme from 'hooks/useTheme';
import TextField from 'components/TextField';
import * as DatePickerStories from '../DatePicker/DatePicker.stories';

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

    const isFilterSelected = Object.values(states).some((friend) => friend[0]);

    return (
      <Stack height={300}>
        {filtersShown.map((filterName, index) => (
          <Filter
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
        {isFilterSelected && (
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
      setSelectedFilters([]);
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
};

export const FilterWithDatePicker = {
  ...DatePickerStories.DatePickerWithFilter,
  name: 'Filter with Date Picker',
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
};

export const CustomFilter = {
  render: () => {
    const [selectedFilter, setSelectedFilter] = React.useState<FilterOption>();
    const theme = useTheme();

    const [value, setValue] = React.useState('');

    return (
      <Stack height={400}>
        <Filter
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
      </Stack>
    );
  },
  name: 'Custom Filter',
};

export const Playground = {
  render: () => {
    const [selectedFilter, setSelectedFilter] = React.useState<FilterOption>();
    const [selectedFilters, setSelectedFilters] = React.useState<FilterOption[]>([]);

    return (
      <Stack height={400}>
        <Filter
          isSearchable={boolean('isSearchable', false)}
          selectedFilter={selectedFilter}
          filterType={select('filterType', ['preset', 'added'], 'preset')}
          onChange={setSelectedFilter}
          onClear={() => setSelectedFilter(undefined)}
          defaultValue={{ label: 'All', value: 'all' }}
          label={text('Label (Single Filter)', 'Single Filter')}
          items={options}
          isDisabled={boolean('isDisabled', false)}
          isVirtualized={boolean('isVirtualized', false)}
        />
        <Filter
          isMulti
          isSearchable={boolean('isSearchable', false)}
          hasSelectAllOption={boolean('hasSelectAllOption', false)}
          filterType={select('filterType', ['preset', 'added'], 'preset')}
          selectedFilter={selectedFilters}
          onChange={setSelectedFilters}
          onClear={() => setSelectedFilters([])}
          defaultValue={{ label: 'All', value: 'all' }}
          label={text('Label (Multi Filter)', 'Multi Filter')}
          items={options}
          isDisabled={boolean('isDisabled', false)}
          isVirtualized={boolean('isVirtualized', false)}
        />
      </Stack>
    );
  },
  name: 'Playground',
};
