import { Box, Button, Icon, Link, toast, ToastContainer } from '@orfium/ictinus';
import { vars } from '@orfium/tokens';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';
import { useState, type ComponentProps, type ReactElement } from 'react';

export interface ToastStoryArgs {
  content: string | ReactElement;
  status: 'neutral' | 'informational' | 'error' | 'warning' | 'success';
  isDismissible: boolean;
  shouldCloseOnAction: boolean;
  actions?: ReactElement | ReactElement[];
  timeout: number;
  placement: ComponentProps<typeof ToastContainer>['placement'];
  hasIcon?: boolean;
  onClose?: () => void;
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
    content: 'Toast messages should be clear and short.',
    status: 'neutral',
    isDismissible: true,
    shouldCloseOnAction: false,
    timeout: 5000,
    placement: 'bottom right',
    hasIcon: true,
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'The main message content of the toast - can be text or React element',
      table: {
        type: {
          summary: 'string | ReactElement',
          detail: 'Text content or JSX element for rich content',
        },
      },
    },
    status: {
      control: 'select',
      options: ['neutral', 'informational', 'error', 'warning', 'success'] as const,
      description: 'The visual status/type of the toast notification',
      table: {
        type: {
          summary: "'neutral' | 'informational' | 'error' | 'warning' | 'success'",
          detail: 'ToastStatus',
        },
        defaultValue: { summary: "'neutral'" },
        category: 'ToastOptions',
      },
    },
    isDismissible: {
      control: 'boolean',
      description: 'Whether the toast is automatically dismissed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'ToastOptions',
      },
    },
    actions: {
      control: 'select',
      options: ['none', 'single action', 'multiple actions'],
      mapping: {
        none: undefined,
        'single action': <Link>Single Action</Link>,
        'multiple actions': [<Button type="tertiary">Tertiary</Button>, <Button>Primary</Button>],
      },
      description: 'Action elements (links or buttons) to display in the toast',
      table: {
        type: {
          summary: 'ReactNode | ReactNode[]',
          detail: 'Single action element or array of action elements',
        },
        defaultValue: { summary: 'undefined' },
        category: 'ToastOptions',
      },
    },
    shouldCloseOnAction: {
      control: 'boolean',
      description: 'Whether the toast closes automatically when an action is clicked',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'ToastOptions',
      },
    },
    timeout: {
      control: {
        type: 'number',
        min: 1000,
        max: 10000,
        step: 500,
      },
      description: 'Auto-dismiss timeout in milliseconds',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5000' },
        category: 'ToastOptions',
      },
    },
    onClose: {
      action: 'onClose',
      description: 'Callback fired when the toast is closed',
      table: {
        type: {
          summary: '() => void',
          detail: 'Function called when toast is dismissed',
        },
        defaultValue: { summary: 'undefined' },
        category: 'ToastOptions',
        control: { disable: true },
      },
    },
    hasIcon: {
      control: 'boolean',
      description: 'Whether to show the default icon based on status',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'ToastOptions',
      },
    },
    placement: {
      control: 'select',
      options: ['bottom left', 'bottom right'] as const,
      description: 'Where the toast appears on screen',
      table: {
        type: {
          summary: "'bottom left' | 'bottom right'",
          detail: 'ToastPlacement',
        },
        defaultValue: { summary: "'bottom right'" },
        category: '<ToastContainer />',
      },
    },
  },
} satisfies Meta<ToastStoryArgs>;

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
          toast(args.content as string, {
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
      include: ['content', 'hasIcon'],
    },
  },
  render: (args) => {
    return (
      <Button
        onClick={() =>
          toast(args.content as string, {
            status: 'informational',
            hasIcon: args.hasIcon,
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
      include: ['content', 'hasIcon'],
    },
  },
  render: (args) => {
    return (
      <Button
        onClick={() =>
          toast(args.content as string, {
            status: 'error',
            hasIcon: args.hasIcon,
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
      include: ['content', 'hasIcon'],
    },
  },
  render: (args) => {
    return (
      <Button
        onClick={() =>
          toast(args.content as string, {
            status: 'warning',
            hasIcon: args.hasIcon,
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
      include: ['content', 'hasIcon'],
    },
  },
  render: (args) => {
    return (
      <Button
        onClick={() =>
          toast(args.content as string, {
            status: 'success',
            hasIcon: args.hasIcon,
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
          toast(args.content as string, {
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
    return (
      <Button
        onClick={() =>
          toast(
            <Box display="flex" alignItems="center" gap="4">
              <Icon name="account" color={vars.color.text.default.secondary} />
              {args.content as string}
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
          toast(args.content as string, {
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
    const [actionToast, setActionToast] = useState<string | null>(null);

    return (
      <Box display="flex" gap="5">
        <Button
          onClick={() => {
            if (actionToast) return;

            const id = toast(args.content as string, {
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
          toast(args.content as string, {
            status: args.status,
            isDismissible: args.isDismissible,
            shouldCloseOnAction: args.shouldCloseOnAction,
            timeout: args.timeout,
            // @ts-expect-error - args.actions is not typed
            actions: args.actions,
          })
        }
      >
        Show toast
      </Button>
    );
  },
};
