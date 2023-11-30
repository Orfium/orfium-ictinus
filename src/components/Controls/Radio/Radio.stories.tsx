import Radio from './Radio';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { FIGMA_URL } from 'utils/common';
import { RadioGroup } from '../index';
import React, { useState } from 'react';

export default {
  title: 'Updated Components/Controls/Radio',
  component: Radio,
  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Radio',
        url: `${FIGMA_URL}?node-id=10283%3A104364`,
      },
    ],
  },
};

export const RadioGroupStory = {
  render: () => {
    const [selected, setSelected] = useState('');
    return (
      <RadioGroup
        value={selected}
        onChange={setSelected}
        sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
      >
        <Radio value="option 1">Option 1</Radio>
        <Radio value="option 2">Option 2</Radio>
        <Radio value="option 3">Option 3</Radio>
      </RadioGroup>
    );
  },
  name: 'RadioGroup',
};

export const RadioLabelPlacement = {
  render: () => {
    const [selected1, setSelected1] = useState('');
    const [selected2, setSelected2] = useState('');
    return (
      <div style={{ display: 'flex', gap: '72px', alignItems: 'center' }}>
        <RadioGroup
          value={selected1}
          onChange={setSelected1}
          sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
        >
          <Radio value="option 1">Option 1</Radio>
          <Radio value="option 2">Option 2</Radio>
          <Radio value="option 3">Option 3</Radio>
        </RadioGroup>
        <RadioGroup
          value={selected2}
          onChange={setSelected2}
          sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
        >
          <Radio value="option 1" labelConfig={{ placement: 'left' }}>
            Option 1
          </Radio>
          <Radio value="option 2" labelConfig={{ placement: 'left' }}>
            Option 2
          </Radio>
          <Radio value="option 3" labelConfig={{ placement: 'left' }}>
            Option 3
          </Radio>
        </RadioGroup>
      </div>
    );
  },
  name: 'Radio label placement',
};

export const RadioLabelSizes = {
  render: () => {
    const [selected1, setSelected1] = useState('');
    const [selected2, setSelected2] = useState('');
    return (
      <div style={{ display: 'flex', gap: '72px', alignItems: 'center' }}>
        <RadioGroup
          value={selected1}
          onChange={setSelected1}
          sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
        >
          <Radio value="option 1">Normal Option 1</Radio>
          <Radio value="option 2">Normal Option 2</Radio>
          <Radio value="option 3">Normal Option 3</Radio>
        </RadioGroup>
        <RadioGroup
          value={selected2}
          onChange={setSelected2}
          sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
        >
          <Radio value="option 1" labelConfig={{ size: 'large' }}>
            Large Option 1
          </Radio>
          <Radio value="option 2" labelConfig={{ size: 'large' }}>
            Large Option 2
          </Radio>
          <Radio value="option 3" labelConfig={{ size: 'large' }}>
            Large Option 3
          </Radio>
        </RadioGroup>
      </div>
    );
  },
  name: 'Radio label sizes',
};

export const RadioWithHelptext = {
  render: () => {
    const [selected, setSelected] = useState('');
    return (
      <RadioGroup
        value={selected}
        onChange={setSelected}
        sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
      >
        <Radio value="option 1">Option 1</Radio>
        <Radio value="option 2" labelConfig={{ helpText: 'This is the help text of option 2' }}>
          Option 2
        </Radio>
        <Radio value="option 3">Option 3</Radio>
      </RadioGroup>
    );
  },
  name: 'Radio with helptext',
};

export const DisabledRadio = {
  render: () => {
    const [selected, setSelected] = useState('');
    return (
      <RadioGroup
        value={selected}
        onChange={(value) => {
          console.log('clicked');
          setSelected(value);
        }}
        sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
      >
        <Radio value="option 1" isDisabled>
          Option 1
        </Radio>
        <Radio value="option 2" labelConfig={{ helpText: 'This option is disabled' }} isDisabled>
          Option 2
        </Radio>
        <Radio value="option 3" isDisabled>
          Option 3
        </Radio>
      </RadioGroup>
    );
  },
  name: 'Disabled Radio',
};

export const Playground = {
  render: () => {
    const [selected, setSelected] = useState('');
    return (
      <RadioGroup
        value={selected}
        onChange={setSelected}
        sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
      >
        <Radio
          value="option 1"
          labelConfig={{
            placement: select('Label placement', ['left', 'right'], 'right'),
            size: select('Label size', ['normal', 'large'], 'normal'),
            helpText: text('Help text', ''),
          }}
          isDisabled={boolean('isDisabled', false)}
        >
          Option 1
        </Radio>
        <Radio
          value="option 2"
          labelConfig={{
            placement: select('Label placement', ['left', 'right'], 'right'),
            size: select('Label size', ['normal', 'large'], 'normal'),
            helpText: text('Help text', ''),
          }}
          isDisabled={boolean('isDisabled', false)}
        >
          Option 2
        </Radio>
        <Radio
          value="option 3"
          labelConfig={{
            placement: select('Label placement', ['left', 'right'], 'right'),
            size: select('Label size', ['normal', 'large'], 'normal'),
            helpText: text('Help text', ''),
          }}
          isDisabled={boolean('isDisabled', false)}
        >
          Option 3
        </Radio>
      </RadioGroup>
    );
  },
  name: 'Playground',
};
