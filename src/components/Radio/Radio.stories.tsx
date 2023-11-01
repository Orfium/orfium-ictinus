import Radio from './Radio';
import RadioButtonsShowcase from '../storyUtils/RadioButtonsShowcase';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Design System/Radio',
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

export const NotSelectedRadioCheckedUndefined = {
  render: () => (
    <Stack>
      <Radio />
      <Radio isFilled={false} />
    </Stack>
  ),

  name: 'Not selected Radio  (`checked === undefined`)',
};

export const NotSelectedRadioCheckedFalse = {
  render: () => (
    <Stack>
      <Radio isChecked={false} />
      <Radio isFilled={false} isChecked={false} />
    </Stack>
  ),

  name: 'Not selected Radio (`checked === false`)',
};

export const SelectedRadio = {
  render: () => <Radio isChecked={true} />,
  name: 'Selected Radio',
};

export const DisabledNotSelectedRadio = {
  render: () => (
    <Stack>
      <Radio isChecked={false} isDisabled={true} />
      <Radio isFilled={false} isChecked={false} isDisabled={true} />
    </Stack>
  ),

  name: 'Disabled not selected Radio',
};

export const DisabledSelectedRadio = {
  render: () => <Radio isChecked={true} isDisabled={true} />,
  name: 'Disabled selected Radio',
};

export const RadioShowcase = {
  render: () => <RadioButtonsShowcase />,
  name: 'Radio showcase',
};

export const RadioPlayground = {
  render: () => (
    <Radio
      isChecked={boolean('isChecked', true)}
      isDisabled={boolean('isDisabled', false)}
      isFilled={boolean('isFilled', false)}
    />
  ),

  name: 'Radio Playground',

  parameters: {
    decorators: [withKnobs],
  },
};
