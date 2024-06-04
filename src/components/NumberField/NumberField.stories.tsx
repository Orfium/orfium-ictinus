import NumberField from './NumberField';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from 'utils/common';

export default {
  title: 'Updated Components/Fields/NumberField',
  component: NumberField,

  parameters: {
    design: [
      {
        type: 'figma',
        url: `${FIGMA_URL}?node-id=10019%3A116505`,
      },
    ],
  },

  args: {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    hintMessage: 'Hint Message',
    label: 'NumberField',
  },

  argTypes: {
    status: { type: 'select', options: ['normal', 'error', 'read-only'] },
  },
};

export const NumberFieldWithPlaceholder = {
  render: () => (
    <Stack>
      <NumberField label={'NumberField'} />
      <NumberField label={'NumberField'} placeholder={'Placeholder'} />
    </Stack>
  ),

  name: 'NumberField with placeholder',

  parameters: {
    controls: { disable: true },
  },
};
export const NumberFieldWithFormatOptions = {
  render: (args) => {
    const { minimumFractionDigits, maximumFractionDigits } = args;
    return (
      <Stack>
        <NumberField
          label={'NumberField'}
          formatOptions={{
            minimumFractionDigits: minimumFractionDigits,
            maximumFractionDigits: maximumFractionDigits,
          }}
        />
      </Stack>
    );
  },

  name: 'NumberField with format options',

  parameters: {
    controls: { include: ['minimumFractionDigits', 'maximumFractionDigits'] },
  },
};

export const NumberFieldWithStepper = {
  render: (args) => {
    const { step } = args;
    return (
      <Stack>
        <NumberField label={'NumberField'} hasStepper step={step} />
      </Stack>
    );
  },

  name: 'NumberField with Stepper',

  parameters: {
    controls: { include: ['step'] },
  },
};

export const NumberFieldWithMinAndMaxValues = {
  render: (args) => {
    const { minValue, maxValue } = args;
    return (
      <Stack>
        <NumberField
          label={'NumberField'}
          minValue={minValue}
          maxValue={maxValue}
          suffix={
            <div
              style={{
                color: 'gray',
              }}
            >
              %
            </div>
          }
        />
      </Stack>
    );
  },

  name: 'NumberField with min/max values',
  parameters: {
    controls: { include: ['minValue', 'maxValue'] },
  },
};

export const NumberFieldStatuses = {
  render: (args) => {
    const { hintMessage } = args;
    return (
      <Stack>
        <NumberField
          label={'Normal'}
          status={{
            type: 'normal',
            hintMessage,
          }}
        />
        <NumberField
          label={'Error'}
          status={{
            type: 'error',
            hintMessage,
          }}
        />
        <NumberField
          label={'Read-only'}
          status={{
            type: 'read-only',
            hintMessage,
          }}
        />
      </Stack>
    );
  },

  name: 'NumberField statuses',
  parameters: {
    controls: { include: ['hintMessage'] },
  },
};

export const DisabledNumberField = {
  render: () => (
    <Stack>
      <NumberField
        isDisabled
        label={'NumberField'}
        status={{
          type: 'normal',
          hintMessage: 'This field is disabled',
        }}
      />
    </Stack>
  ),

  name: ' Disabled NumberField',

  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {
  render: (args) => {
    const {
      label,
      isDisabled,
      hintMessage,
      status,
      isRequired,
      hasStepper,
      minValue,
      maxValue,
      step,
      minimumFractionDigits,
      maximumFractionDigits,
    } = args;
    return (
      <Stack>
        <NumberField
          label={label}
          isDisabled={isDisabled}
          isRequired={isRequired}
          hasStepper={hasStepper}
          minValue={minValue}
          maxValue={maxValue}
          step={step}
          formatOptions={{
            minimumFractionDigits,
            maximumFractionDigits,
          }}
          status={{
            type: status,
            hintMessage,
          }}
        />
      </Stack>
    );
  },

  name: 'Playground',

  parameters: {
    controls: {
      include: [
        'label',
        'isDisabled',
        'hintMessage',
        'status',
        'isRequired',
        'hasStepper',
        'minValue',
        'maxValue',
        'step',
        'minimumFractionDigits',
        'maximumFractionDigits',
      ],
    },
  },
};
