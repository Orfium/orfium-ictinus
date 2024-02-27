import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import Select from './Select';
import Stack from '../storyUtils/Stack';
import { SelectShowcase, MultiSelectShowcase } from '../storyUtils/SelectShowcase';
import EdgeCasesSelectShowcase from '../storyUtils/EdgeCasesSelectShowcase';
import { FIGMA_URL, Function } from '../../utils/common';
import { useState } from 'react';
import { StatefulSelect } from './index';
import { options, groupOptions, defaultValue } from './storyUtils';

export default {
  title: 'Updated Components/Fields/Select',
  component: Select,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Select',
        url: `${FIGMA_URL}?node-id=10019%3A116506`,
      },
      {
        type: 'figma',
        name: 'Active',
        url: `${FIGMA_URL}?node-id=10019%3A116507`,
      },
      {
        type: 'figma',
        name: 'Edge cases',
        url: `${FIGMA_URL}?node-id=1879%3A101`,
      },
    ],
  },
};

export const SelectSizes = {
  render: () => (
    <Stack height={300}>
      <Function>
        {() => {
          const [selectedOption, setSelectedOption] = useState(defaultValue);
          return (
            <Select
              label={'Label'}
              options={options}
              isSearchable={false}
              selectedOption={selectedOption}
              onChange={setSelectedOption}
            />
          );
        }}
      </Function>
      <Function>
        {() => {
          const [selectedOption, setSelectedOption] = useState(defaultValue);
          return (
            <Select
              label={'Label'}
              options={options}
              size={'compact'}
              isSearchable={false}
              selectedOption={selectedOption}
              onChange={setSelectedOption}
            />
          );
        }}
      </Function>
    </Stack>
  ),

  name: 'Select Sizes',
};
export const SimpleSelect = {
  render: () => (
    <Stack height={350}>
      <Function>
        {() => {
          const [selectedOption, setSelectedOption] = useState(defaultValue);
          return (
            <Select
              isSearchable={false}
              selectedOption={selectedOption}
              onChange={setSelectedOption}
              label={'Select'}
              options={options}
            />
          );
        }}
      </Function>
    </Stack>
  ),

  name: 'Simple Select',
};

export const SearchableSelect = {
  render: () => (
    <Stack height={300}>
      <Function>
        {() => {
          const [selectedOption, setSelectedOption] = useState(defaultValue);
          return (
            <Select
              label={'Select'}
              options={options}
              selectedOption={selectedOption}
              onChange={setSelectedOption}
              isCreatable={boolean('isCreatable', false)}
              isVirtualized={boolean('isVirtualized', true)}
            />
          );
        }}
      </Function>
    </Stack>
  ),

  name: 'Searchable Select',
};
export const SelectWithUncontrolledState = {
  render: () => (
    <Stack height={350}>
      <StatefulSelect
        label={'Select'}
        status={{
          type: 'normal',
          hintMessage: text(
            'Custom Hint Message',
            'This is a select with uncontrolled value, see code for more'
          ),
        }}
        options={options}
        selectedOption={defaultValue}
      />
    </Stack>
  ),
  parameters: {
    decorators: [withKnobs],
  },
  name: 'Select with uncontrolled state',
};
export const SimpleSelectWithGroups = {
  render: () => (
    <Stack height={350}>
      <Function>
        {() => {
          const [selectedOption, setSelectedOption] = useState(defaultValue);
          return (
            <Select
              label={'Group Select'}
              hasHighlightSearch
              selectedOption={selectedOption}
              onChange={setSelectedOption}
              options={groupOptions}
            />
          );
        }}
      </Function>
    </Stack>
  ),
  name: 'Simple Select with groups',
};
export const SelectWithAsyncSearch = {
  render: () => <SelectShowcase />,
  name: 'Select with async search',
};
export const SelectWithEdgeCase = {
  render: () => <EdgeCasesSelectShowcase />,
  name: 'Select with edge case',
};
export const MultiSelect = {
  render: () => (
    <MultiSelectShowcase
      isDisabled={boolean('isDisabled', false)}
      status={{
        type: select('Status', ['error', 'normal', 'read-only'], 'normal'),
        hintMessage: text('Hint/Error message', 'Message in Text Field'),
      }}
      hasSelectAllOption={boolean('hasSelectAllOption', false)}
      isCreatable={boolean('isCreatable', false)}
    />
  ),
  name: 'MultiSelect',
};
export const SelectStatuses = {
  render: () => (
    <Stack height={350}>
      <Function>
        {() => {
          const [selectedOption, setSelectedOption] = useState(defaultValue);
          return (
            <Select
              label={'Normal'}
              status={{
                type: 'normal',
                hintMessage: text('Custom Hint Message', 'Hint Message'),
              }}
              options={options}
              selectedOption={selectedOption}
              onChange={setSelectedOption}
              isCreatable={boolean('isCreatable', false)}
              isVirtualized={boolean('isVirtualized', true)}
            />
          );
        }}
      </Function>
      <Function>
        {() => {
          const [selectedOption, setSelectedOption] = useState(defaultValue);
          return (
            <Select
              label={'Error'}
              status={{
                type: 'error',
                hintMessage: text('Custom Error Message', 'Error Message'),
              }}
              options={options}
              selectedOption={selectedOption}
              onChange={setSelectedOption}
              isCreatable={boolean('isCreatable', false)}
              isVirtualized={boolean('isVirtualized', true)}
            />
          );
        }}
      </Function>
      <Function>
        {() => {
          const [selectedOption, setSelectedOption] = useState(defaultValue);
          return (
            <Select
              label={'Read-only'}
              status={{
                type: 'read-only',
                hintMessage: text('Custom Hint Message', 'Hint Message'),
              }}
              options={options}
              selectedOption={selectedOption}
              onChange={setSelectedOption}
              isCreatable={boolean('isCreatable', false)}
              isVirtualized={boolean('isVirtualized', true)}
            />
          );
        }}
      </Function>
    </Stack>
  ),
  parameters: {
    decorators: [withKnobs],
  },
  name: 'Select statuses',
};

export const DisabledSelect = {
  render: () => (
    <Stack>
      <Select
        isDisabled
        label={'Select'}
        options={options}
        status={{ type: 'normal', hintMessage: 'This field is disabled' }}
      />
    </Stack>
  ),

  name: 'Disabled Select',
};

export const Playground = {
  render: () => (
    <Stack height={350}>
      <Function>
        {() => {
          const [selectedOption, setSelectedOption] = useState(defaultValue);
          return (
            <Select
              label={text('Label', 'Select')}
              status={{
                type: select('Status', ['error', 'normal', 'read-only'], 'normal'),
                hintMessage: text('Hint/Error message', 'Message in Text Field'),
              }}
              isSearchable={boolean('isSearchable', false)}
              isDisabled={boolean('isDisabled', false)}
              options={options}
              selectedOption={selectedOption}
              onChange={setSelectedOption}
            />
          );
        }}
      </Function>
    </Stack>
  ),

  name: 'Playground',
};
