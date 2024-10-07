import styled from '@emotion/styled';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import Link from '../Link';
import { Broadcast } from './Broadcast';
import { useState } from 'react';
import { rem } from '~/theme/utils';

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  container-type: inline-size;
  width: 100%;
`;

const meta: Meta<typeof Broadcast> = {
  title: 'Updated Components/Notifications/Broadcast',
  component: Broadcast,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Broadcast>;

export const Neutral: Story = {
  render: (args) => (
    <Broadcast actions={<Link>Single Action</Link>} onDismiss={() => {}} {...args}>
      Broadcast copy should be short, easy to understand and actionable.
    </Broadcast>
  ),
};

export const Informational: Story = {
  render: (args) => (
    <Broadcast
      status="informational"
      actions={<Link>Single Action</Link>}
      onDismiss={() => {}}
      {...args}
    >
      Broadcast copy should be short, easy to understand and actionable.
    </Broadcast>
  ),
};

export const Error: Story = {
  render: (args) => (
    <Broadcast status="error" actions={<Link>Single Action</Link>} onDismiss={() => {}} {...args}>
      Broadcast copy should be short, easy to understand and actionable.
    </Broadcast>
  ),
};

export const Warning: Story = {
  render: (args) => (
    <Broadcast status="warning" actions={<Link>Single Action</Link>} onDismiss={() => {}} {...args}>
      Broadcast copy should be short, easy to understand and actionable.
    </Broadcast>
  ),
};

export const Success: Story = {
  render: (args) => (
    <Broadcast status="success" actions={<Link>Single Action</Link>} onDismiss={() => {}} {...args}>
      Broadcast copy should be short, easy to understand and actionable.
    </Broadcast>
  ),
};

export const WithButtons: Story = {
  render: (args) => (
    <Broadcast
      status="informational"
      actions={[<Button type="tertiary">Tertiary</Button>, <Button>Primary</Button>]}
      onDismiss={() => {}}
      {...args}
    >
      Broadcast copy should be short, easy to understand and actionable.
    </Broadcast>
  ),
};

export const WithoutAction: Story = {
  render: (args) => (
    <Broadcast status="informational" onDismiss={() => {}} {...args}>
      Broadcast copy should be short, easy to understand and actionable.
    </Broadcast>
  ),
};

export const WithoutDismiss: Story = {
  render: (args) => (
    <Broadcast status="informational" {...args}>
      Broadcast copy should be short, easy to understand and actionable.
    </Broadcast>
  ),
};

export const WithTrigger: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);

    return (
      <>
        <Button css={{ marginBottom: rem(8) }} onClick={() => setShow(!show)}>
          Trigger Broadcast
        </Button>
        {show && (
          <Broadcast status="warning" onDismiss={() => setShow(false)} hasAutoFocus {...args}>
            Broadcast copy should be short, easy to understand and actionable.
          </Broadcast>
        )}
      </>
    );
  },
};

export const Playground: Story = {
  render: (args) => (
    <Broadcast actions={<Link>Single Action</Link>} onDismiss={() => {}} {...args}>
      Broadcast copy should be short, easy to understand and actionable.
    </Broadcast>
  ),
};
