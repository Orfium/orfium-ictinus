import { boolean, select, text, withKnobs, number } from '@storybook/addon-knobs';
import TextArea from './TextArea';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL, Function } from '../../utils/common';
import SectionHeader from '../../storybook/SectionHeader';
import { useState } from 'react';

export default {
  title: 'Updated Components/Fields/TextArea',
  component: TextArea,

  parameters: {
    design: [
      {
        name: 'Base Input',
        type: 'figma',
        url: `${FIGMA_URL}?node-id=10019%3A116505`,
      },
      {
        name: 'TextArea',
        type: 'figma',
        url: `${FIGMA_URL}?node-id=10019%3A116508`,
      },
    ],
  },
};

export const TextAreaWithPlaceholder = {
  render: () => (
    <Stack>
      <TextArea label={'TextArea'} cols={10} rows={5} isResizeEnabled={false} />
      <TextArea
        label={'TextArea'}
        cols={10}
        rows={5}
        placeholder={'Placeholder'}
        isResizeEnabled={false}
      />
    </Stack>
  ),

  name: 'TextArea with placeholder',
};
export const TextAreaWithResizingOption = {
  render: () => (
    <Stack>
      <TextArea label={'TextArea'} cols={10} rows={5} />
    </Stack>
  ),

  name: 'TextArea with resizing option',
};

export const TextAreaWithCounter = {
  render: () => (
    <Stack>
      <Function>
        {() => {
          const [value, setValue] = useState('');
          const handleChange = (e) => setValue(e.target.value);
          return (
            <TextArea
              label={'TextArea'}
              value={value}
              onChange={handleChange}
              cols={10}
              rows={5}
              isResizeEnabled={false}
              maxCharacters={10}
            />
          );
        }}
      </Function>
    </Stack>
  ),
  name: 'TextArea with counter',
};

export const TextAreaStatuses = {
  render: () => (
    <Stack>
      <Stack>
        <TextArea
          label={'Normal'}
          cols={10}
          rows={5}
          isResizeEnabled={false}
          status={{
            type: 'normal',
            hintMessage: text('Custom Hint Message', 'Hint in Text Area'),
          }}
        />
        <TextArea
          label={'Error'}
          cols={10}
          rows={5}
          isResizeEnabled={false}
          status={{
            type: 'error',
            hintMessage: text('Custom Error Message', 'Error in Text Area'),
          }}
        />
        <TextArea
          label={'Read-only'}
          cols={10}
          rows={5}
          isResizeEnabled={false}
          status={{
            type: 'read-only',
            hintMessage: text('Custom Hint Message', 'Hint in Text Area'),
          }}
        />
      </Stack>
    </Stack>
  ),
  parameters: { decorators: [withKnobs] },
  name: 'TextArea statuses',
};

export const DisabledTextArea = {
  render: () => (
    <Stack>
      <TextArea
        isDisabled
        label={'TextArea'}
        cols={10}
        rows={5}
        status={{
          type: 'normal',
          hintMessage: 'This field is disabled',
        }}
      />
    </Stack>
  ),
  name: 'Disabled TextArea',
};

export const Playground = {
  render: () => (
    <Stack>
      <Function>
        {() => {
          const [value, setValue] = useState('');
          const handleChange = (e) => setValue(e.target.value);
          return (
            <TextArea
              value={value}
              label={text('Label', 'TextArea')}
              onChange={handleChange}
              placeholder={text('Placeholder', 'Placeholder')}
              isDisabled={boolean('isDisabled', false)}
              isResizeEnabled={boolean('isResizeEnabled', true)}
              maxCharacters={number('maxCharacters', undefined)}
              cols={10}
              rows={5}
              status={{
                type: select('status', ['error', 'normal', 'read-only'], 'normal'),
                hintMessage: text('custom hint message', 'Hint in Text Area'),
              }}
            />
          );
        }}
      </Function>
    </Stack>
  ),
  name: 'Playground',
};
