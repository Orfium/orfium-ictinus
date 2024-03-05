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

  args: {
    hintMessage: 'Hint Message',
    label: 'TextField',
  },

  argTypes: {
    status: { type: 'select', options: ['normal', 'error', 'read-only'] },
    suffixIcon: { type: 'select', options: ['', ...Object.keys(iconSelector)] },
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
  parameters: {
    controls: { disable: true },
  },
};

export const TextFieldWithPlaceholder = {
  render: () => (
    <Stack>
      <TextField label={'TextField'} />
      <TextField label={'TextField'} placeholder={'Placeholder'} />
    </Stack>
  ),
  name: 'TextField with placeholder',
  parameters: {
    controls: { disable: true },
  },
};

export const TextFieldWithMaskOption = {
  render: (args) => {
    const { isDisabled, status, hintMessage } = args;
    return (
      <Stack>
        <TextFieldShowCase
          label="Currency Example"
          mask={'$ 999999'}
          isDisabled={isDisabled}
          status={{
            type: status,
            hintMessage: hintMessage,
          }}
        />
        <TextFieldShowCase
          label="Percentage Example"
          mask={'99,99 %'}
          isDisabled={isDisabled}
          status={{
            type: status,
            hintMessage: hintMessage,
          }}
        />
      </Stack>
    );
  },
  name: 'TextField with mask option',

  parameters: {
    controls: { include: ['isDisabled', 'status', 'hintMessage'] },
  },
};

export const TextFieldWithIcon = {
  render: () => (
    <Stack>
      <TextField label={'TextField'} suffix={'search'} />
      <TextField label={'TextField'} suffix={'calendar'} />
    </Stack>
  ),
  name: 'TextField with icon',
  parameters: {
    controls: { disable: true },
  },
};

export const MultiTextField = {
  render: () => <MultiTextFieldShowcase />,
  name: 'MultiTextField',
  parameters: {
    controls: { disable: true },
  },
};

export const TextFieldStatuses = {
  render: (args) => {
    const { hintMessage } = args;
    return (
      <Stack>
        <TextField
          label={'Normal'}
          status={{
            type: 'normal',
            hintMessage,
          }}
        />
        <TextField
          label={'Error'}
          status={{
            type: 'error',
            hintMessage,
          }}
        />
        <TextField
          label={'Read-only'}
          status={{
            type: 'read-only',
            hintMessage,
          }}
        />
      </Stack>
    );
  },
  parameters: {
    controls: { include: ['hintMessage'] },
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

  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {
  render: (args) => {
    const { label, size, placeholder, isRequired, isDisabled, suffixIcon, status, hintMessage } =
      args;
    return (
      <Stack>
        <TextFieldShowCase
          label={label}
          size={size}
          placeholder={placeholder}
          isRequired={isRequired}
          isDisabled={isDisabled}
          suffix={suffixIcon}
          status={{
            type: status,
            hintMessage,
          }}
        />
      </Stack>
    );
  },
  parameters: {
    controls: {
      include: [
        'label',
        'size',
        'placeholder',
        'isRequired',
        'isDisabled',
        'suffixIcon',
        'status',
        'hintMessage',
      ],
    },
  },
  name: 'Playground',
};
