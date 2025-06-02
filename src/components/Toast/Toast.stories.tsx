import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Button from 'components/Button';
import { useState } from 'react';
import useTheme from '~/hooks/useTheme';
import Box from '../Box';
import Icon from '../Icon';
import Link from '../Link';
import { toast, ToastContainer } from './Toast';

type ActionType = 'none' | 'link' | 'single-button' | 'multiple-buttons';

interface ToastStoryArgs {
  status: 'neutral' | 'informational' | 'error' | 'warning' | 'success';
  content: string;
  isDismissible: boolean;
  shouldCloseOnAction: boolean;
  timeout: number;
  placement: 'bottom left' | 'bottom right';
}

const meta: Meta<ToastStoryArgs> = {
  title: 'Updated Components/Notifications/Toast',
  parameters: {
    chromatic: { delay: 400 },
  },
  decorators: [
    (Story, { args }) => (
      <>
        <ToastContainer placement={args.placement} />
        <Story />
      </>
    ),
  ],
  args: {
    status: 'neutral',
    content: 'Toast messages should be clear and short.',
    isDismissible: true,
    shouldCloseOnAction: false,
    timeout: 5000,
    placement: 'bottom right',
  },
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['neutral', 'informational', 'error', 'warning', 'success'],
    },
    content: {
      control: { type: 'text' },
    },
    isDismissible: {
      control: { type: 'boolean' },
    },
    shouldCloseOnAction: {
      control: { type: 'boolean' },
    },
    timeout: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
    },
    placement: {
      control: { type: 'select' },
      options: ['bottom left', 'bottom right'],
    },
  },
};

export default meta;
type Story = StoryObj<ToastStoryArgs>;

export const Neutral: Story = {
  parameters: {
    controls: {
      include: ['content'],
    },
  },
  render: (args) => {
    return (
      <Button
        onClick={() =>
          toast(args.content, {
            actions: <Link>Single Action</Link>,
          })
        }
      >
        Show toast
      </Button>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.findByRole('button', { name: 'Show toast' });
    await userEvent.click(button);
  },
};

export const Informational: Story = {
  parameters: {
    controls: {
      include: ['content'],
    },
  },
  render: (args) => {
    return (
      <Button
        onClick={() =>
          toast(args.content, {
            status: 'informational',
            actions: <Link>Single Action</Link>,
          })
        }
      >
        Informational
      </Button>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.findByRole('button', { name: 'Informational' });
    await userEvent.click(button);
  },
};

export const Error: Story = {
  parameters: {
    controls: {
      include: ['content'],
    },
  },
  render: (args) => {
    return (
      <Button
        onClick={() =>
          toast(args.content, {
            status: 'error',
            actions: <Link>Single Action</Link>,
          })
        }
      >
        Error
      </Button>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.findByRole('button', { name: 'Error' });
    await userEvent.click(button);
  },
};

export const Warning: Story = {
  parameters: {
    controls: {
      include: ['content'],
    },
  },
  render: (args) => {
    return (
      <Button
        onClick={() =>
          toast(args.content, {
            status: 'warning',
            actions: <Link>Single Action</Link>,
          })
        }
      >
        Warning
      </Button>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.findByRole('button', { name: 'Warning' });
    await userEvent.click(button);
  },
};

export const Success: Story = {
  parameters: {
    controls: {
      include: ['content'],
    },
  },
  render: (args) => {
    return (
      <Button
        onClick={() =>
          toast(args.content, {
            status: 'success',
            actions: <Link>Single Action</Link>,
          })
        }
      >
        Success
      </Button>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.findByRole('button', { name: 'Success' });
    await userEvent.click(button);
  },
};

export const WithButtons: Story = {
  parameters: {
    controls: {
      include: ['status', 'content', 'isDismissible'],
    },
  },
  render: (args) => {
    return (
      <Button
        onClick={() =>
          toast(args.content, {
            status: args.status,
            isDismissible: args.isDismissible,
            actions: [<Button type="tertiary">Tertiary</Button>, <Button>Primary</Button>],
          })
        }
      >
        With buttons
      </Button>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.findByRole('button', { name: 'With buttons' });
    await userEvent.click(button);
  },
};

export const WithCustomIcon: Story = {
  parameters: {
    controls: {
      include: ['content'],
    },
  },
  render: (args) => {
    const theme = useTheme();

    return (
      <Button
        onClick={() =>
          toast(
            <Box display="flex" alignItems="center" gap="4">
              <Icon name="check" color={theme.tokens.colors.get('indicators.success')} />
              {args.content}
            </Box>
          )
        }
      >
        With custom icon
      </Button>
    );
  },
};

export const ShouldCloseOnAction: Story = {
  args: {
    shouldCloseOnAction: true,
  },
  parameters: {
    controls: {
      include: ['status', 'content', 'isDismissible', 'shouldCloseOnAction'],
    },
  },
  render: (args) => {
    return (
      <Button
        onClick={() =>
          toast(args.content, {
            status: args.status,
            isDismissible: args.isDismissible,
            shouldCloseOnAction: args.shouldCloseOnAction,
            actions: [<Button type="tertiary">Tertiary</Button>, <Button>Primary</Button>],
          })
        }
      >
        With buttons
      </Button>
    );
  },
};

export const Controlled: Story = {
  render: (args) => {
    const theme = useTheme();
    const [actionToast, setActionToast] = useState(null);

    return (
      <Box display="flex" gap="5">
        <Button
          onClick={() => {
            if (actionToast) return;

            const id = toast(args.content, {
              status: args.status,
              isDismissible: args.isDismissible,
              shouldCloseOnAction: args.shouldCloseOnAction,
              timeout: args.timeout,
              onClose: () => setActionToast(null),
            });

            setActionToast(id);
          }}
        >
          Controlled
        </Button>
        {actionToast && (
          <Button type="secondary" onClick={() => toast.dismiss(actionToast)}>
            Dismiss toast
          </Button>
        )}
      </Box>
    );
  },
};

export const Playground: Story = {
  render: (args) => {
    return (
      <Button
        onClick={() =>
          toast(args.content, {
            status: args.status,
            isDismissible: args.isDismissible,
            shouldCloseOnAction: args.shouldCloseOnAction,
            timeout: args.timeout,
            actions: <Link>Single Action</Link>,
          })
        }
      >
        Show toast
      </Button>
    );
  },
};
