import { Box, TextArea, TextField } from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof TextArea> = {
  title: 'Vanilla/TextArea',
  component: TextArea,
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  render: () => (
    <Box style={{ width: '24rem' }}>
      <TextField>
        <TextField.Label>Feedback</TextField.Label>
        <TextArea placeholder="Share your thoughts about our service." />
        <TextField.Description>Your feedback helps us improve.</TextField.Description>
      </TextField>
    </Box>
  ),
};

export const CharacterCounter: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const characterLimit = 120;

    return (
      <Box style={{ width: '24rem' }}>
        <TextField>
          <TextField.Label>Short description</TextField.Label>
          <TextArea
            value={value}
            maxLength={characterLimit}
            onChange={(event) => setValue(event.target.value)}
          />
          <TextField.Description>
            {value.length}/{characterLimit} characters
          </TextField.Description>
        </TextField>
      </Box>
    );
  },
};

export const States: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" style={{ maxWidth: '24rem' }}>
      <TextField>
        <TextField.Label>Normal</TextField.Label>
        <TextArea placeholder="This field is ready for input." />
      </TextField>

      <TextField isInvalid>
        <TextField.Label>Error</TextField.Label>
        <TextArea placeholder="This value needs attention." />
        <TextField.Error>Please review this message.</TextField.Error>
      </TextField>

      <TextField isDisabled>
        <TextField.Label>Disabled</TextField.Label>
        <TextArea placeholder="This field is disabled." />
        <TextField.Description>This field cannot be edited.</TextField.Description>
      </TextField>
    </Box>
  ),
};

export const Playground: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <Box style={{ maxWidth: '24rem' }}>
        <TextField>
          <TextField.InputWrapper>
            <TextField.FloatingLabel>Playground</TextField.FloatingLabel>
            <TextArea
              value={value}
              placeholder="Try typing here."
              onChange={(event) => setValue(event.target.value)}
            />
          </TextField.InputWrapper>
          <TextField.Description>Use this field to try different text.</TextField.Description>
        </TextField>
      </Box>
    );
  },
};
