import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links';
import TextField from './TextField';
import Stack from '../storyUtils/Stack';
import Icon from '../Icon';
import iconSelector from '../Icon/assets/iconSelector';
import Loader from '../Loader';
import {
  MultiTextFieldShowcase,
  TextFieldShowCase,
} from '../../components/storyUtils/TextFieldShowcases';
import { FIGMA_URL } from '../../utils/common';
import SectionHeader from '../../storybook/SectionHeader';

export default {
  title: 'Design System/TextField',
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

export const TextFieldWithLabelAndPlaceholder = {
  render: () => (
    <Stack>
      <TextField label={'Label'} />
      <TextField label={'Label'} placeholder={'Placeholder'} />
    </Stack>
  ),

  name: 'TextField with Label and Placeholder',
};

export const MaskedTextFieldDontTest = {
  render: () => (
    <Stack>
      <TextFieldShowCase
        label="Masked TextField"
        mask={text('Mask', '+(999) 999')}
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

  name: 'Masked TextField (DontTest)',
};

export const TextFieldWithIcons = {
  render: () => (
    <Stack>
      <TextField
        label={'Label'}
        suffix={
          <img
            style={{
              background: 'red',
            }}
            src="https://brandmark.io/logo-rank/random/pepsi.png"
            width="16"
            height="16"
          />
        }
      />
      <TextField label={'Label'} suffix={'keyword'} />
    </Stack>
  ),

  name: 'TextField with Icons',
};

export const DisabledTextField = {
  render: () => (
    <Stack>
      <TextField
        isDisabled
        label={'Label'}
        status={{
          type: 'normal',
          hintMessage: 'This field is disabled',
        }}
      />
    </Stack>
  ),

  name: 'Disabled TextField',
};

export const TextFieldWithDifferentStatuses = {
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

  name: 'TextField with different Statuses',

  parameters: {
    decorators: [withKnobs],
  },
};

export const MultiTextField = {
  render: () => <MultiTextFieldShowcase />,
  name: 'MultiTextField',
};

export const Playground = {
  render: () => (
    <Stack>
      <TextFieldShowCase
        mask={text('Mask', 'Mask')}
        label={text('Label', 'Label')}
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

  name: 'Playground',

  parameters: {
    decorators: [withKnobs],
  },
};
