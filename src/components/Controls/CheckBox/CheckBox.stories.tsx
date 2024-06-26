import CheckBox from './CheckBox';
import Stack from '../../storyUtils/Stack';
import { FIGMA_URL } from 'utils/common';
import { useEffect, useState } from 'react';

export default {
  title: 'Updated Components/Controls/CheckBox',
  component: CheckBox,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'CheckBox',
        url: `${FIGMA_URL}?node-id=228%3A143`,
      },
    ],
  },

  args: {
    helpText: '',
    placement: 'right',
    size: 'normal',
  },

  argTypes: {
    placement: { type: 'radio', options: ['right', 'left'] },
    size: { name: 'size (applies to Label)', type: 'radio', options: ['normal', 'large'] },
  },
};

export const SimpleCheckBox = {
  render: () => {
    const [selected, setSelected] = useState(false);
    return (
      <CheckBox value="label" isSelected={selected} onChange={setSelected}>
        Label
      </CheckBox>
    );
  },
  name: 'Simple Checkbox',

  parameters: {
    controls: { disable: true },
  },
};

export const IndeterminateCheckBox = {
  render: () => {
    const [selected, setSelected] = useState(false);
    const [indeterminate, setIndeterminate] = useState(false);
    const [selected1, setSelected1] = useState(false);
    const [selected2, setSelected2] = useState(false);

    useEffect(() => {
      if ((selected1 && !selected2) || (!selected1 && selected2)) {
        setSelected(false);
        setIndeterminate(true);
      }
      if (selected1 && selected2) {
        setIndeterminate(false);
        setSelected(true);
      }
      if (!(selected1 || selected2)) {
        setSelected(false);
        setIndeterminate(false);
      }
    }, [selected1, selected2]);

    return (
      <Stack height={140}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <CheckBox
              value="select all"
              isSelected={selected}
              isIndeterminate={indeterminate}
              onChange={(value) => {
                setSelected1(value);
                setSelected2(value);
              }}
            >
              Select All
            </CheckBox>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <CheckBox value="option 1" isSelected={selected1} onChange={setSelected1}>
              Option 1
            </CheckBox>
            <CheckBox value="option 2" isSelected={selected2} onChange={setSelected2}>
              Option 2
            </CheckBox>
          </div>
        </div>
      </Stack>
    );
  },

  name: 'Indeterminate CheckBox',

  parameters: {
    controls: { disable: true },
  },
};

export const CheckBoxLabelPlacement = {
  render: () => (
    <>
      <Stack height={50}>
        <CheckBox value="label">Right Label</CheckBox>
      </Stack>
      <Stack>
        <CheckBox value="label" labelConfig={{ placement: 'left' }}>
          Left Label
        </CheckBox>
      </Stack>
    </>
  ),

  name: 'CheckBox label placement',

  parameters: {
    controls: { disable: true },
  },
};

export const CheckBoxLabelSizes = {
  render: () => (
    <>
      <Stack height={50}>
        <CheckBox value="label">Normal Label</CheckBox>
      </Stack>
      <Stack>
        <CheckBox value="label" labelConfig={{ size: 'large' }}>
          Large Label
        </CheckBox>
      </Stack>
    </>
  ),

  name: 'CheckBox label sizes',

  parameters: {
    controls: { disable: true },
  },
};

export const CheckBoxLabelHelptext = {
  render: () => (
    <CheckBox value="label" labelConfig={{ helpText: 'Short text that adds context' }}>
      Option
    </CheckBox>
  ),

  name: 'CheckBox label helptext',

  parameters: {
    controls: { disable: true },
  },
};

export const DisabledCheckBox = {
  render: () => (
    <>
      <Stack height={50}>
        <CheckBox value="label" isDisabled>
          Option
        </CheckBox>
      </Stack>
      <Stack>
        <CheckBox value="label" labelConfig={{ helpText: 'This option is disabled' }} isDisabled>
          Option
        </CheckBox>
      </Stack>
    </>
  ),

  name: 'Disabled CheckBox',

  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {
  render: (args) => {
    const { isSelected, isIndeterminate, isDisabled, placement, size, helpText } = args;
    return (
      <Stack>
        <CheckBox
          value="label"
          isDisabled={isDisabled}
          isSelected={isSelected}
          isIndeterminate={isIndeterminate}
          labelConfig={{
            placement,
            size,
            helpText,
          }}
        >
          Option
        </CheckBox>
      </Stack>
    );
  },

  name: 'Playground',

  parameters: {
    controls: {
      include: [
        'isSelected',
        'isIndeterminate',
        'isDisabled',
        'placement',
        'size (applies to Label)',
        'helpText',
      ],
    },
  },
};
