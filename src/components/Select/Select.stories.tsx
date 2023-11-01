import { withKnobs, boolean, array, select, text } from '@storybook/addon-knobs';
import Select from './Select';
import Stack from '../storyUtils/Stack';
import { SelectShowcase, MultiSelectShowcase } from '../storyUtils/SelectShowcase';
import EdgeCasesSelectShowcase from '../storyUtils/EdgeCasesSelectShowcase';
import { FIGMA_URL, Function } from '../../utils/common';
import { useState } from 'react';
import { SelectOption, StatefulSelect } from './index';
import { options, optionsWithHelperInDisabled, groupOptions, defaultValue } from './storyUtils';
import SectionHeader from '../../storybook/SectionHeader';

export default {
  title: 'Design System/Select',
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

export const SimpleSelect = {
  render: () => (
    <Stack height={300}>
      <Function>
        {() => {
          const [selectedOption, setSelectedOption] = useState<SelectOption | SelectOption[]>(
            defaultValue
          );

          return (
            // @ts-ignore
            <Select
              label={'Flavour'}
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
              label={'Flavour'}
              options={options}
              selectedOption={selectedOption}
              onChange={setSelectedOption}
              isCreatable={boolean('isCreatable', false)}
            />
          );
        }}
      </Function>
      <Function>
        {() => {
          const [selectedOption, setSelectedOption] = useState(defaultValue);

          return (
            <Select
              label={'Flavour'}
              options={options}
              selectedOption={selectedOption}
              onChange={setSelectedOption}
              isCreatable={boolean('isCreatable', false)}
            />
          );
        }}
      </Function>
    </Stack>
  ),

  name: 'Simple Select',
};

export const SelectWithStatuses = {
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

  name: 'Select with Statuses',

  parameters: {
    decorators: [withKnobs],
  },
};

export const SelectWithUncontrolledState = {
  render: () => (
    <Stack height={350}>
      <StatefulSelect
        label={'Label'}
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

  name: 'Select with uncontrolled state',

  parameters: {
    decorators: [withKnobs],
  },
};

export const SelectWithHighlight = {
  render: () => (
    <Stack height={350}>
      <Function>
        {() => {
          const [selectedOption, setSelectedOption] = useState(defaultValue);

          return (
            <Select
              hasHighlightSearch
              selectedOption={selectedOption}
              onChange={setSelectedOption}
              label={'Flavour'}
              options={options}
            />
          );
        }}
      </Function>
    </Stack>
  ),

  name: 'Select with Highlight',
};

export const SimpleGroupSelect = {
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

  name: 'Simple Group Select',
};

export const NotSearchableSelect = {
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
              label={'Flavour'}
              options={options}
            />
          );
        }}
      </Function>
    </Stack>
  ),

  name: 'Not Searchable Select',
};

export const DisabledSelect = {
  render: () => (
    <Stack>
      <Select
        isDisabled
        label={'Label'}
        options={options}
        status={{
          type: 'normal',
          hintMessage: 'This field is disabled',
        }}
      />
    </Stack>
  ),

  name: 'Disabled Select',
};

export const DisabledOptionWithHelperText = {
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
              label={'Flavour'}
              options={optionsWithHelperInDisabled}
            />
          );
        }}
      </Function>
    </Stack>
  ),

  name: 'Disabled option with helper text',
};

export const AsyncSelect = {
  render: () => <SelectShowcase />,
  name: 'Async Select',
};

export const AsyncSelectWithMinCharacters = {
  render: () => <SelectShowcase minCharactersToSearch={3} />,
  name: 'Async Select with min characters',
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
