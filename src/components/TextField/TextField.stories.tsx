import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import TextField from './TextField';
import Stack from '../storyUtils/Stack';
import iconSelector from '../Icon/assets/iconSelector';
import {
  MultiTextFieldShowcase,
  TextFieldShowCase,
} from '../../components/storyUtils/TextFieldShowcases';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Updated Components/Fields/TextField',
  component: TextField,
  parameters: {
    design: [
      {
        type: 'figma',
        url: `${FIGMA_URL}?node-id=10019%3A116505`,
      },
    ],
  },
};

export const TextFieldSizes = {
  render: () => (
    <>
      <Stack>
        <TextField label={'Label'} />
      </Stack>
      <Stack>
        <TextField label={'Label'} size="compact" />
      </Stack>
    </>
  ),
  name: 'TextField sizes',
};

export const TextFieldWithPlaceholder = {
  render: () => (
    <Stack>
      <TextField label={'TextField'} />
      <TextField label={'TextField'} placeholder={'Placeholder'} />
    </Stack>
  ),
  name: 'TextField with placeholder',
};

export const TextFieldWithMaskOption = {
  render: () => (
    <Stack>
      <TextFieldShowCase
        label="Currency Example"
        mask={'$ 999999'}
        isDisabled={boolean('isDisabled', false)}
        status={{
          type: select('Status', ['error', 'normal', 'read-only'], 'normal'),
          hintMessage: text('Hint/Error message', ''),
        }}
      />
      <TextFieldShowCase
        label="Percentage Example"
        mask={'99,99 %'}
        isDisabled={boolean('isDisabled', false)}
        status={{
          type: select('Status', ['error', 'normal', 'read-only'], 'normal'),
          hintMessage: text('Hint/Error message', ''),
        }}
      />
    </Stack>
  ),
  name: 'TextField with mask option',
};

export const TextFieldWithIcon = {
  render: () => (
    <Stack>
      <TextField label={'TextField'} suffix={'search'} />
      <TextField label={'TextField'} suffix={'calendarEmpty'} />
    </Stack>
  ),
  name: 'TextField with icon',
};

export const MultiTextField = {
  render: () => <MultiTextFieldShowcase />,
  name: 'MultiTextField',
};

export const TextFieldStatuses = {
  render: () => (
    <Stack>
      <TextField
        label={'Normal'}
        status={{
          type: 'normal',
          hintMessage: text('Normal Message', 'Normal Message'),
        }}
      />
      <TextField
        label={'Error'}
        status={{
          type: 'error',
          hintMessage: text('Error Message', 'Error Message'),
        }}
      />
      <TextField
        label={'Read-only'}
        status={{
          type: 'read-only',
          hintMessage: text('Normal Message', 'Normal Message'),
        }}
      />
    </Stack>
  ),
  parameters: {
    decorators: [withKnobs],
  },
  name: 'TextField statuses',
};

export const DisabledTextField = {
  render: () => (
    <Stack>
      <TextField
        isDisabled
        label={'TextField'}
        status={{
          type: 'normal',
          hintMessage: 'This field is disabled',
        }}
      />
    </Stack>
  ),
  name: 'Disabled TextField',
};

export const Playground = {
  render: () => (
    <Stack>
      <TextFieldShowCase
        label={text('Label', 'TextField')}
        size={select('size', ['normal', 'compact'], 'normal')}
        placeholder={text('Placeholder', 'Placeholder')}
        isDisabled={boolean('isDisabled', false)}
        hasSuffix={boolean('hasSuffixIcon', false)}
        suffix={select('Suffix icon name', ['', ...Object.keys(iconSelector)], 'info')}
        status={{
          type: select('Status', ['error', 'normal', 'read-only'], 'normal'),
          hintMessage: text('Hint/Error message', 'Message in Text Field'),
        }}
      />
    </Stack>
  ),
  parameters: {
    decorators: [withKnobs],
  },
  name: 'Playground',
};
