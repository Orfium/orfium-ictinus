import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links';
import NumberField from './NumberField';
import Stack from '../storyUtils/Stack';
import Icon from '../Icon';
import iconSelector from '../Icon/assets/iconSelector';
import Loader from '../Loader';
import { FIGMA_URL } from '../../utils/common';
import SectionHeader from '../../storybook/SectionHeader';

export default {
  title: 'Design System/NumberField',
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

export const NumberFieldWithNumberFormat = {
  render: () => (
    <Stack>
      <NumberField
        label={'Label'}
        formatOptions={{
          minimumFractionDigits: number('minimumFractionDigits', 2),
          maximumFractionDigits: number('maximumFractionDigits', 2),
        }}
      />
    </Stack>
  ),

  name: 'NumberField with number format',
};

export const NumberFieldWithStepper = {
  render: () => (
    <Stack>
      <NumberField label={'Label'} hasStepper step={number('Step', undefined)} />
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

  name: 'NumberField with min and max values',
};

export const NumberFieldWithLabelAndPlaceholder = {
  render: () => (
    <Stack>
      <NumberField label={'Label'} />
      <NumberField label={'Label'} placeholder={'Placeholder'} />
    </Stack>
  ),

  name: 'NumberField with Label and Placeholder',
};

export const NumberFieldWithLabelPlaceholderAndStatuses = {
  render: () => (
    <Stack>
      <NumberField
        label={'Label'}
        status={{
          type: 'normal',
          hintMessage: text('Custom Hint Message', 'Hint in Text Field'),
        }}
      />
      <NumberField
        label={'Label'}
        status={{
          type: 'error',
          hintMessage: text('Custom Error Message', 'Error in Text Field'),
        }}
      />
      <NumberField
        label={'Label'}
        status={{
          type: 'read-only',
          hintMessage: text('Custom Hint Message', 'Hint in Text Field'),
        }}
      />
      <NumberField
        label={'Label'}
        isDisabled
        status={{
          type: 'normal',
          hintMessage: text('Custom Hint Message', 'Hint in Text Field'),
        }}
      />
    </Stack>
  ),

  name: 'NumberField with Label, Placeholder and Statuses',
};

export const Playground = {
  render: () => (
    <Stack>
      <NumberField
        label={text('Label', 'Label')}
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
        suffix={select('Suffix icon name', ['', ...Object.keys(iconSelector)], 'info')}
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
