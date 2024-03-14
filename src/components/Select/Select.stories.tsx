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

  args: {
    hintMessage: 'Hint Message',
    label: 'Select',
    isSearchable: false,
  },

  argTypes: {
    status: { type: 'select', options: ['normal', 'error', 'read-only'] },
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

  parameters: {
    controls: { disable: true },
  },
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

  parameters: {
    controls: { disable: true },
  },
};

export const SearchableSelect = {
  render: (args) => {
    const { isCreatable, isVirtualized } = args;
    return (
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
                isCreatable={isCreatable}
                isVirtualized={isVirtualized}
              />
            );
          }}
        </Function>
      </Stack>
    );
  },

  name: 'Searchable Select',

  parameters: {
    controls: { include: ['isCreatable', 'isVirtualized'] },
  },
};
export const SelectWithUncontrolledState = {
  render: (args) => {
    const { hintMessage } = args;
    return (
      <Stack height={350}>
        <StatefulSelect
          label={'Select'}
          status={{
            type: 'normal',
            hintMessage,
          }}
          options={options}
          selectedOption={defaultValue}
        />
      </Stack>
    );
  },

  parameters: {
    controls: { include: ['hintMessage'] },
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

  parameters: {
    controls: { disable: true },
  },
};

export const SelectWithAsyncSearch = {
  render: () => <SelectShowcase />,
  name: 'Select with async search',
  parameters: {
    controls: { disable: true },
  },
};

export const SelectWithEdgeCase = {
  render: () => <EdgeCasesSelectShowcase />,
  name: 'Select with edge case',
  parameters: {
    controls: { disable: true },
  },
};

export const MultiSelect = {
  render: (args) => {
    const { isDisabled, status, hintMessage, hasSelectAllOption, isCreatable } = args;
    return (
      <MultiSelectShowcase
        isDisabled={isDisabled}
        status={{
          type: status,
          hintMessage,
        }}
        hasSelectAllOption={hasSelectAllOption}
        isCreatable={isCreatable}
      />
    );
  },
  name: 'MultiSelect',

  parameters: {
    controls: {
      include: ['isDisabled', 'status', 'hintMessage', 'isCreatable', 'hasSelectAllOption'],
    },
  },
};

export const SelectStatuses = {
  render: (args) => {
    const { isCreatable, isVirtualized, hintMessage } = args;
    return (
      <Stack height={350}>
        <Function>
          {() => {
            const [selectedOption, setSelectedOption] = useState(defaultValue);
            return (
              <Select
                label={'Normal'}
                status={{
                  type: 'normal',
                  hintMessage,
                }}
                options={options}
                selectedOption={selectedOption}
                onChange={setSelectedOption}
                isCreatable={isCreatable}
                isVirtualized={isVirtualized}
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
                  hintMessage,
                }}
                options={options}
                selectedOption={selectedOption}
                onChange={setSelectedOption}
                isCreatable={isCreatable}
                isVirtualized={isVirtualized}
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
                  hintMessage,
                }}
                options={options}
                selectedOption={selectedOption}
                onChange={setSelectedOption}
                isCreatable={isCreatable}
                isVirtualized={isVirtualized}
              />
            );
          }}
        </Function>
      </Stack>
    );
  },
  parameters: {
    controls: { include: ['isCreatable', 'isVirtualized', 'hintMessage'] },
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

  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {
  render: (args) => {
    const { label, status, hintMessage, isSearchable, isDisabled } = args;
    return (
      <Stack height={350}>
        <Function>
          {() => {
            const [selectedOption, setSelectedOption] = useState(defaultValue);
            return (
              <Select
                label={label}
                status={{
                  type: status,
                  hintMessage,
                }}
                isSearchable={isSearchable}
                isDisabled={isDisabled}
                options={options}
                selectedOption={selectedOption}
                onChange={setSelectedOption}
              />
            );
          }}
        </Function>
      </Stack>
    );
  },

  name: 'Playground',
  parameters: {
    controls: { include: ['label', 'status', 'hintMessage', 'isSearchable', 'isDisabled'] },
  },
};
