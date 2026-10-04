import { Box, TextField } from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof TextField.TextArea> = {
  title: 'Vanilla/TextArea',
  component: TextField.TextArea,
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField.TextArea>;

export const Default: Story = {
  render: () => (
    <Box style={{ width: '24rem' }}>
      <TextField>
        <TextField.Label>Feedback</TextField.Label>
        <TextField.TextArea
          placeholder="Share your thoughts about our service."
          style={{ width: '100%', height: '8rem' }}
        />
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
          <TextField.TextArea
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
    <Box display="flex" flexDirection="column" gap="lg" style={{ width: '24rem' }}>
      <TextField>
        <TextField.Label>Normal</TextField.Label>
        <TextField.TextArea placeholder="This field is ready for input." />
      </TextField>

      <TextField isInvalid>
        <TextField.Label>Error</TextField.Label>
        <TextField.TextArea placeholder="This value needs attention." />
        <TextField.Error>Please review this message.</TextField.Error>
      </TextField>

      <TextField isDisabled>
        <TextField.Label>Disabled</TextField.Label>
        <TextField.TextArea placeholder="This field is disabled." />
        <TextField.Description>This field cannot be edited.</TextField.Description>
      </TextField>
    </Box>
  ),
};

export const FloatingLabel: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <Box style={{ width: '24rem' }}>
        <TextField>
          <TextField.FloatingLabelWrapper>
            <TextField.FloatingLabel>Floating Label</TextField.FloatingLabel>
            <TextField.TextArea
              value={value}
              placeholder="Try typing here."
              onChange={(event) => setValue(event.target.value)}
            />
          </TextField.FloatingLabelWrapper>
          <TextField.Description>Use this field to try different text.</TextField.Description>
        </TextField>
      </Box>
    );
  },
};
