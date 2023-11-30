import { FIGMA_URL } from 'utils/common';
import Switch from './Switch';
import { useState } from 'react';
import Stack from 'components/storyUtils/Stack';
import { boolean, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Updated Components/Controls/Switch',
  component: Switch,
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
};

export const SwitchLabelPlacement = {
  render: () => {
    return (
      <>
        <Stack height={50}>
          <Switch>Option</Switch>
        </Stack>
        <Stack>
          <Switch labelConfig={{ placement: 'left' }}>Option</Switch>
        </Stack>
      </>
    );
  },
  name: 'Switch label placement',
};

export const SwitchLabelSizes = {
  render: () => {
    return (
      <>
        <Stack height={50}>
          <Switch>Normal Option</Switch>
        </Stack>
        <Stack>
          <Switch labelConfig={{ size: 'large' }}>Large Option</Switch>
        </Stack>
      </>
    );
  },
  name: 'Switch label sizes',
};

export const SwitchWithHelptext = {
  render: () => {
    return <Switch labelConfig={{ helpText: 'This is the helptext of the option' }}>Option</Switch>;
  },
  name: 'Switch with helptext',
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
};

export const Playground = {
  render: () => {
    return (
      <Stack>
        <Switch
          labelConfig={{
            placement: select('Label placement', ['left', 'right'], 'right'),
            size: select('Label size', ['normal', 'large'], 'normal'),
            helpText: text('Help text', ''),
          }}
          isDisabled={boolean('isDisabled', false)}
        >
          Option
        </Switch>
      </Stack>
    );
  },
  name: 'Playground',
};
