import TextArea from './TextArea';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL, Function } from 'utils/common';
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

  args: {
    hintMessage: 'Hint Message',
    label: 'TextArea',
  },

  argTypes: {
    status: { type: 'select', options: ['normal', 'error', 'read-only'] },
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

  parameters: {
    controls: { disable: true },
  },
};
export const TextAreaWithResizingOption = {
  render: () => (
    <Stack>
      <TextArea label={'TextArea'} cols={10} rows={5} />
    </Stack>
  ),

  name: 'TextArea with resizing option',

  parameters: {
    controls: { disable: true },
  },
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

  parameters: {
    controls: { disable: true },
  },
};

export const TextAreaStatuses = {
  render: (args) => {
    const { hintMessage } = args;
    return (
      <Stack>
        <Stack>
          <TextArea
            label={'Normal'}
            cols={10}
            rows={5}
            isResizeEnabled={false}
            status={{
              type: 'normal',
              hintMessage,
            }}
          />
          <TextArea
            label={'Error'}
            cols={10}
            rows={5}
            isResizeEnabled={false}
            status={{
              type: 'error',
              hintMessage,
            }}
          />
          <TextArea
            label={'Read-only'}
            cols={10}
            rows={5}
            isResizeEnabled={false}
            status={{
              type: 'read-only',
              hintMessage,
            }}
          />
        </Stack>
      </Stack>
    );
  },
  parameters: { controls: { include: ['hintMessage'] } },
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

  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {
  render: (args) => {
    const { label, placeholder, isDisabled, isResizeEnabled, maxCharacters, status, hintMessage } =
      args;
    return (
      <Stack>
        <Function>
          {() => {
            const [value, setValue] = useState('');
            const handleChange = (e) => setValue(e.target.value);
            return (
              <TextArea
                value={value}
                label={label}
                onChange={handleChange}
                placeholder={placeholder}
                isDisabled={isDisabled}
                isResizeEnabled={isResizeEnabled}
                maxCharacters={maxCharacters}
                cols={10}
                rows={5}
                status={{
                  type: status,
                  hintMessage,
                }}
              />
            );
          }}
        </Function>
      </Stack>
    );
  },
  name: 'Playground',
  parameters: {
    controls: {
      include: [
        'label',
        'placeholder',
        'isDisabled',
        'isResizeEnabled',
        'maxCharacters',
        'status',
        'hintMessage',
      ],
    },
  },
};
