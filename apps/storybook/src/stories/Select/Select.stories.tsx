import { Select, StatefulSelect } from '@orfium/ictinus';
import { useState } from 'react';
import { userEvent, within } from 'storybook/test';
import { FIGMA_URL } from 'utils/common';
import EdgeCasesSelectShowcase from '../storyUtils/EdgeCasesSelectShowcase';
import { MultiSelectShowcase, SelectShowcase } from '../storyUtils/SelectShowcase';
import Stack from '../storyUtils/Stack';
import { defaultValue, groupOptions, options } from './utils';

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
    chromatic: { delay: 400 },
  },
  args: {
    hintMessage: 'Hint Message',
    label: 'Select',
    isSearchable: false,
  },
  argTypes: {
    status: { type: 'select', options: ['normal', 'error', 'warning', 'read-only'] },
  },
};

export const SelectSizes = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState(defaultValue);

    return (
      <Stack height={300}>
        <Select
          label={'Label'}
          options={options}
          isSearchable={false}
          selectedOption={selectedOption}
          onChange={setSelectedOption}
        />
        <Select
          label={'Label'}
          options={options}
          size={'compact'}
          isSearchable={false}
          selectedOption={selectedOption}
          onChange={setSelectedOption}
        />
      </Stack>
    );
  },
  name: 'Select Sizes',
  parameters: {
    controls: { disable: true },
  },
};

export const SimpleSelect = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState(defaultValue);

    return (
      <Stack height={350}>
        <Select
          isSearchable={false}
          selectedOption={selectedOption}
          onChange={setSelectedOption}
          label="Select"
          options={options}
        />
      </Stack>
    );
  },
  name: 'Simple Select',
  parameters: {
    controls: { disable: true },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const filter = await canvas.findByPlaceholderText('Select');
    await userEvent.click(filter);
  },
};

export const SearchableSelect = {
  render: (args) => {
    const { isCreatable, isVirtualized } = args;
    const [selectedOption, setSelectedOption] = useState(defaultValue);

    return (
      <Stack height={300}>
        <Select
          label={'Select'}
          options={options}
          selectedOption={selectedOption}
          onChange={setSelectedOption}
          isCreatable={isCreatable}
          isVirtualized={isVirtualized}
        />
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
  render: () => {
    const [selectedOption, setSelectedOption] = useState(defaultValue);

    return (
      <Stack height={350}>
        <Select
          label={'Group Select'}
          hasHighlightSearch
          selectedOption={selectedOption}
          onChange={setSelectedOption}
          options={groupOptions}
        />
      </Stack>
    );
  },
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
    const [selectedOption, setSelectedOption] = useState(defaultValue);

    return (
      <Stack height={350}>
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

        <Select
          label="Warning"
          status={{
            type: 'warning',
            hintMessage,
          }}
          options={options}
          selectedOption={selectedOption}
          onChange={setSelectedOption}
          isCreatable={isCreatable}
          isVirtualized={isVirtualized}
        />

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
    const [selectedOption, setSelectedOption] = useState(defaultValue);

    return (
      <Stack height={350}>
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
      </Stack>
    );
  },
  name: 'Playground',
  parameters: {
    controls: { include: ['label', 'status', 'hintMessage', 'isSearchable', 'isDisabled'] },
  },
};
