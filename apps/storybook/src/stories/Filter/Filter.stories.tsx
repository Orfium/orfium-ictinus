import { Button, DropdownButton, Filter, TextField, type FilterOption } from '@orfium/ictinus';
import { IconPrimitive, type IconPrimitiveProps } from '@orfium/ictinus/vanilla';
import { vars } from '@orfium/tokens';
import React, { forwardRef } from 'react';
import { userEvent, within } from 'storybook/test';
import { FIGMA_URL } from 'utils/common';
import * as DatePickerStories from '../DatePicker/DatePicker.stories';
import Stack from '../storyUtils/Stack';
import { options } from './constants';

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
            key={filterName}
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
            iconLeft={<SparklesIcon />}
            colorScheme="ai"
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
                  background: vars.color.background.default,
                  border: vars.color['border-color'].decorative.default,
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
                  background: vars.color.background.default,
                  border: vars.color['border-color'].decorative.default,
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

const SparklesIcon = forwardRef<SVGSVGElement, IconPrimitiveProps>((props, ref) => (
  <IconPrimitive ref={ref} {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path
        d="M15.8335 7.50004L16.8752 5.20837L19.1668 4.16671L16.8752 3.12504L15.8335 0.833374L14.7918 3.12504L12.5002 4.16671L14.7918 5.20837L15.8335 7.50004ZM9.5835 7.91671L7.50016 3.33337L5.41683 7.91671L0.833496 10L5.41683 12.0834L7.50016 16.6667L9.5835 12.0834L14.1668 10L9.5835 7.91671ZM15.8335 12.5L14.7918 14.7917L12.5002 15.8334L14.7918 16.875L15.8335 19.1667L16.8752 16.875L19.1668 15.8334L16.8752 14.7917L15.8335 12.5Z"
        fill="url(#paint0_linear_4538_7176)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4538_7176"
          x1="19.1668"
          y1="10"
          x2="0.833496"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F814A1" />
          <stop offset="1" stopColor="#4945EE" />
        </linearGradient>
      </defs>
    </svg>
  </IconPrimitive>
));
