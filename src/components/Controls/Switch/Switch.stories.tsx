import { FIGMA_URL } from '../../../utils/common';
import Switch from './Switch';
import { useState } from 'react';
import Stack from '../../storyUtils/Stack';
import React from 'react';

export default {
  title: 'Updated Components/Controls/Switch',
  component: Switch,

  args: {
    helpText: '',
    placement: 'right',
    size: 'normal',
  },

  argTypes: {
    placement: { type: 'radio', options: ['right', 'left'] },
    size: { name: 'size (applies to Label)', type: 'radio', options: ['normal', 'large'] },
  },

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Switch',
        url: `${FIGMA_URL}?node-id=10283%3A104364`,
      },
    ],
  },
};

export const SimpleSwitch = {
  render: () => {
    const [selected, setSelected] = useState(false);
    return (
      <Switch isSelected={selected} onChange={setSelected}>
        Option
      </Switch>
    );
  },
  name: 'Simple Switch',

  parameters: {
    controls: { disable: true },
  },
};

export const SwitchLabelPlacement = {
  render: () => {
    return (
      <>
        <Stack height={50}>
          <Switch>Right Label</Switch>
        </Stack>
        <Stack>
          <Switch labelConfig={{ placement: 'left' }}>Left Label</Switch>
        </Stack>
      </>
    );
  },
  name: 'Switch label placement',

  parameters: {
    controls: { disable: true },
  },
};

export const SwitchLabelSizes = {
  render: () => {
    return (
      <>
        <Stack height={50}>
          <Switch>Normal Label</Switch>
        </Stack>
        <Stack>
          <Switch labelConfig={{ size: 'large' }}>Large Label</Switch>
        </Stack>
      </>
    );
  },
  name: 'Switch label sizes',

  parameters: {
    controls: { disable: true },
  },
};

export const SwitchWithHelptext = {
  render: () => {
    return <Switch labelConfig={{ helpText: 'Short text that adds context' }}>Option</Switch>;
  },
  name: 'Switch with helptext',

  parameters: {
    controls: { disable: true },
  },
};

export const DisabledSwitch = {
  render: () => {
    return (
      <>
        <Stack height={50}>
          <Switch isDisabled>Option</Switch>
        </Stack>
        <Stack>
          <Switch labelConfig={{ helpText: 'This option is disabled' }} isDisabled>
            Option
          </Switch>
        </Stack>
      </>
    );
  },
  name: 'Disabled Switch',

  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {
  render: (args) => {
    const { isDisabled, placement, size, helpText } = args;
    return (
      <Stack>
        <Switch
          labelConfig={{
            placement,
            size,
            helpText,
          }}
          isDisabled={isDisabled}
        >
          Option
        </Switch>
      </Stack>
    );
  },
  name: 'Playground',

  parameters: {
    controls: {
      include: ['isDisabled', 'placement', 'size (applies to Label)', 'helpText'],
    },
  },
};
