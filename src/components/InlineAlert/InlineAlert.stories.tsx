import styled from '@emotion/styled';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import Link from '../Link';
import { InlineAlert } from './InlineAlert';
import { useState } from 'react';

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  container-type: inline-size;
  width: 100%;
`;

const meta: Meta<typeof InlineAlert> = {
  title: 'Updated Components/Notifications/Inline Alert',
  component: InlineAlert,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof InlineAlert>;

export const Neutral: Story = {
  render: (args) => (
    <InlineAlert actions={<Link size={2}>Single Action</Link>} onDismiss={() => {}} {...args}>
      Alert copy should be short, easy to understand and actionable.
    </InlineAlert>
  ),
};

export const Informational: Story = {
  render: (args) => (
    <InlineAlert
      status="informational"
      actions={<Link size={2}>Single Action</Link>}
      onDismiss={() => {}}
      {...args}
    >
      Alert copy should be short, easy to understand and actionable.
    </InlineAlert>
  ),
};

export const Error: Story = {
  render: (args) => (
    <InlineAlert
      status="error"
      actions={<Link size={2}>Single Action</Link>}
      onDismiss={() => {}}
      {...args}
    >
      Alert copy should be short, easy to understand and actionable.
    </InlineAlert>
  ),
};

export const Warning: Story = {
  render: (args) => (
    <InlineAlert
      status="warning"
      actions={<Link size={2}>Single Action</Link>}
      onDismiss={() => {}}
      {...args}
    >
      Alert copy should be short, easy to understand and actionable.
    </InlineAlert>
  ),
};

export const Success: Story = {
  render: (args) => (
    <InlineAlert
      status="success"
      actions={<Link size={2}>Single Action</Link>}
      onDismiss={() => {}}
      {...args}
    >
      Alert copy should be short, easy to understand and actionable.
    </InlineAlert>
  ),
};

export const WithButtons: Story = {
  render: (args) => (
    <InlineAlert
      status="informational"
      actions={[
        <Button type="tertiary" size="compact">
          Tertiary
        </Button>,
        <Button size="compact">Primary</Button>,
      ]}
      onDismiss={() => {}}
      {...args}
    >
      Alert copy should be short, easy to understand and actionable.
    </InlineAlert>
  ),
};

export const WithoutAction: Story = {
  render: (args) => (
    <InlineAlert status="informational" onDismiss={() => {}} {...args}>
      Alert copy should be short, easy to understand and actionable.
    </InlineAlert>
  ),
};

export const WithoutDismiss: Story = {
  render: (args) => (
    <InlineAlert status="informational" {...args}>
      Alert copy should be short, easy to understand and actionable.
    </InlineAlert>
  ),
};

export const WithTrigger: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);

    return (
      <>
        <Button onClick={() => setShow(!show)}>Trigger Inline Alert</Button>
        {show && (
          <InlineAlert status="warning" onDismiss={() => setShow(false)} hasAutoFocus {...args}>
            Alert copy should be short, easy to understand and actionable.
          </InlineAlert>
        )}
      </>
    );
  },
};
