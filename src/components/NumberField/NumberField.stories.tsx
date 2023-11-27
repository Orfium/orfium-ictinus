import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs';
import NumberField from './NumberField';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from '../../utils/common';

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
};

export const NumberFieldWithPlaceholder = {
  render: () => (
    <Stack>
      <NumberField label={'NumberField'} />
      <NumberField label={'NumberField'} placeholder={'Placeholder'} />
    </Stack>
  ),

  name: 'NumberField with placeholder',
};
export const NumberFieldWithFormatOptions = {
  render: () => (
    <Stack>
      <NumberField
        label={'NumberField'}
        formatOptions={{
          minimumFractionDigits: number('minimumFractionDigits', 2),
          maximumFractionDigits: number('maximumFractionDigits', 2),
        }}
      />
    </Stack>
  ),

  name: 'NumberField with format options',
};

export const NumberFieldWithStepper = {
  render: () => (
    <Stack>
      <NumberField label={'NumberField'} hasStepper step={number('Step', undefined)} />
    </Stack>
  ),

  name: 'NumberField with Stepper',
};

export const NumberFieldWithMinAndMaxValues = {
  render: () => (
    <Stack>
      <NumberField
        label={'Label'}
        minValue={number('minValue', undefined)}
        maxValue={number('maxValue', undefined)}
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
  ),

  name: 'NumberField with min/max values',
};

export const NumberFieldStatuses = {
  render: () => (
    <Stack>
      <NumberField
        label={'Normal'}
        status={{
          type: 'normal',
          hintMessage: text('Custom Hint Message', 'Hint in Text Field'),
        }}
      />
      <NumberField
        label={'Error'}
        status={{
          type: 'error',
          hintMessage: text('Custom Error Message', 'Error in Text Field'),
        }}
      />
      <NumberField
        label={'Read-only'}
        status={{
          type: 'read-only',
          hintMessage: text('Custom Hint Message', 'Hint in Text Field'),
        }}
      />
    </Stack>
  ),

  name: 'NumberField statuses',
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

  name: 'NumberField statuses',
};

export const Playground = {
  render: () => (
    <Stack>
      <NumberField
        label={text('Label', 'NumberField')}
        isDisabled={boolean('isDisabled', false)}
        isRequired={boolean('isRequired', false)}
        hasStepper={boolean('hasStepper', false)}
        minValue={number('minValue', undefined)}
        maxValue={number('maxValue', undefined)}
        step={number('step', undefined)}
        formatOptions={{
          minimumFractionDigits: number('minimumFractionDigits', 2),
          maximumFractionDigits: number('maximumFractionDigits', 2),
        }}
        status={{
          type: select('Status', ['error', 'normal', 'read-only'], 'normal'),
          hintMessage: text('Hint/Error message', 'Message in Number Field'),
        }}
      />
    </Stack>
  ),

  name: 'Playground',

  parameters: {
    decorators: [withKnobs],
  },
};
