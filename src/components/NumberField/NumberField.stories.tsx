import { FIGMA_URL } from 'utils/common';
import Stack from '../storyUtils/Stack';
import NumberField from './NumberField';

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

export const NumberFields = {
  render: (args) => {
    const { step } = args;

    return (
      <Stack>
        <NumberField label="Number" size="normal" />
        <NumberField label="Number" hasStepper step={step} />
        <NumberField label="Number" size="compact" />
        <NumberField label="Number" size="compact" hasStepper step={step} />
      </Stack>
    );
  },
  name: 'All avalable NumberFields',
  parameters: {
    controls: { disable: true },
  },
};

export const NumberFieldSizes = {
  render: () => (
    <Stack>
      <NumberField label="Number" size="normal" />
      <NumberField label="Number" size="compact" />
    </Stack>
  ),
  name: 'NumberField sizes',
  parameters: {
    controls: { disable: true },
  },
};

export const NumberFieldWithPlaceholder = {
  render: () => (
    <Stack>
      <NumberField label="Number" />
      <NumberField label="Number" placeholder="Placeholder" />
      <NumberField
        size="compact"
        label="Number"
        placeholder="Placeholder"
        style={{ width: '100px' }}
      />
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
          label="Number"
          formatOptions={{
            minimumFractionDigits: minimumFractionDigits,
            maximumFractionDigits: maximumFractionDigits,
          }}
        />
        <NumberField
          size="compact"
          label="Number"
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
        <NumberField label="Number" hasStepper step={step} />
        <NumberField label="Compact" size="compact" hasStepper step={step} />
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
          label="Number"
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
        <NumberField
          size="compact"
          label="Number"
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
      <>
        <Stack>
          <NumberField
            label="Normal"
            status={{
              type: 'normal',
              hintMessage,
            }}
          />
          <NumberField
            label="Error"
            status={{
              type: 'error',
              hintMessage,
            }}
          />
          <NumberField
            label="Read-only"
            status={{
              type: 'read-only',
              hintMessage,
            }}
          />
        </Stack>
        <Stack>
          <NumberField
            size="compact"
            label="Number"
            status={{
              type: 'normal',
              hintMessage,
            }}
          />
          <NumberField
            size="compact"
            label="Error"
            status={{
              type: 'error',
              hintMessage,
            }}
          />
          <NumberField
            size="compact"
            label="Read-only"
            status={{
              type: 'read-only',
              hintMessage,
            }}
          />
        </Stack>
      </>
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
        label="Number"
        status={{
          type: 'normal',
          hintMessage: 'This field is disabled',
        }}
      />
      <NumberField
        isDisabled
        size="compact"
        label="Number"
        status={{
          type: 'normal',
          hintMessage: 'This field is disabled',
        }}
      />
    </Stack>
  ),
  name: 'Disabled NumberField',
  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {
  render: (args) => {
    const {
      label,
      size,
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
          size={size}
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
        'size',
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
