import { FilterOption } from 'components/Filter';
import Stack from 'components/storyUtils/Stack';
import { useState } from 'react';
import { FIGMA_URL } from 'utils/common';
import useTheme from '~/hooks/useTheme';
import Box from '../Box';
import Button from '../Button';
import { CheckBox, Radio, RadioGroup } from '../Controls';
import Typography from '../Typography';
import Search from './Search';
import { rem } from 'polished';

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
    const [value2, setValue2] = useState<string>();

    const handleClear = () => setValue('');
    const handleClear2 = () => setValue2('');

    return (
      <Stack isVertical>
        <Search value={value} onClear={handleClear} onInput={(e) => setValue(e.target.value)} />
        <Search
          placeholder="Search with custom width"
          sx={{ wrapper: { minWidth: '300px', flex: 0 } }}
          value={value2}
          onClear={handleClear2}
          onInput={(e) => setValue2(e.target.value)}
        />
      </Stack>
    );
  },
  name: 'Simple Search',
  parameters: {
    controls: { disable: true },
  },
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
  parameters: {
    controls: { disable: true },
  },
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
  parameters: {
    controls: { disable: true },
  },
};

export const CustomSearch = {
  render: () => {
    const [selectedFilter, setSelectedFilter] = useState<FilterOption>();
    const [selected, setSelected] = useState('');
    const [selected1, setSelected1] = useState(false);
    const [selected2, setSelected2] = useState(false);
    const radioOptions = [
      { label: 'Asset title', value: 'asset_title' },
      { label: 'Artist', value: 'artist' },
      { label: 'Writer', value: 'writer' },
      { label: 'ISRC', value: 'isrc' },
      { label: 'ISWC', value: 'iswc' },
    ];
    const theme = useTheme();

    const [value, setValue] = useState('');

    const handleClear = () => setValue('');
    const handleFilterClear = () => {
      setSelectedFilter(undefined);
      setSelected('');
      setSelected1(false);
      setSelected2(false);
    };

    const submit = () => {
      const selectedRadio = radioOptions.find((option) => option.value === selected);

      let label = selectedRadio.label;
      let value = selectedRadio.value;
      if (selected1) {
        label = `${label}, Source`;
        value = `${value}, source`;
      }
      if (selected2) {
        label = `${label}, Target`;
        value = `${value}, target`;
      }
      setSelectedFilter({ label, value });
    };

    return (
      <Stack height={400}>
        <Search
          value={value}
          onClear={handleClear}
          onInput={(e) => setValue(e.target.value)}
          filterConfig={{
            defaultValue: { label: 'None', value: 'None' },
            label: 'Filter By',
            selectedFilter,
            onClear: handleFilterClear,
          }}
        >
          {({ setIsOpen }) => {
            return (
              <div
                css={{
                  minWidth: '200px',
                  background: 'white',
                  border: `1px solid ${theme.globals.colors.get('blue.2')}`,
                  borderRadius: '4px',
                }}
              >
                <Box display="flex" flexDirection="column" gap="4" p="6">
                  <RadioGroup
                    value={selected}
                    onChange={setSelected}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '32px',
                    }}
                  >
                    {radioOptions.map((option) => (
                      <Radio key={option.value} value={option.value}>
                        {option.label}
                      </Radio>
                    ))}
                  </RadioGroup>
                  <Box
                    py="6"
                    gap="4"
                    display="flex"
                    flexDirection="column"
                    style={{ opacity: !Boolean(selected) ? 0.5 : 1 }}
                  >
                    <Typography variant="title02">Found in</Typography>
                    <Typography variant="body03" type="secondary">
                      The ingested asset collection (Source), the existing one (Target) or both{' '}
                    </Typography>
                  </Box>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '24px',
                    }}
                  >
                    <CheckBox
                      isDisabled={!Boolean(selected)}
                      value="source"
                      isSelected={selected1}
                      onChange={setSelected1}
                    >
                      Source
                    </CheckBox>
                    <CheckBox
                      isDisabled={!Boolean(selected)}
                      value="target"
                      isSelected={selected2}
                      onChange={setSelected2}
                    >
                      Target
                    </CheckBox>
                  </div>
                </Box>
                <Box>
                  <div
                    style={{
                      height: rem(1),
                      borderColor: theme.tokens.colors.get('borderColor.decorative.default'),
                      width: '100%',
                      margin: 'auto',
                      borderBottomWidth: rem(1),
                      borderBottomStyle: 'solid',
                    }}
                  />
                </Box>
                <Box display="flex" gap="5" justifyContent="end" px="5" py="4">
                  <Button
                    size="compact"
                    type="tertiary"
                    onClick={() => {
                      submit();
                      setIsOpen(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    size="compact"
                    onClick={() => {
                      submit();
                      setIsOpen(false);
                    }}
                  >
                    Search
                  </Button>
                </Box>
              </div>
            );
          }}
        </Search>
      </Stack>
    );
  },
  name: 'Custom Search',

  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {
  render: (args) => {
    const [value, setValue] = useState<string>();
    const [selectedFilter, setSelectedFilter] = useState<FilterOption>(undefined);

    const handleClear = () => setValue('');

    const handleFilterClear = () => setSelectedFilter(undefined);

    const { isDisabled } = args;

    return (
      <Stack height={350}>
        <Search
          isDisabled={isDisabled}
          value={value}
          onClear={handleClear}
          onInput={(e) => setValue(e.target.value)}
        />
        <Search
          isDisabled={isDisabled}
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
  parameters: {
    controls: { include: ['isDisabled'] },
  },
};
