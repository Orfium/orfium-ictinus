import type { Meta, StoryObj } from '@storybook/react';
import Button from 'components/Button';
import { useState } from 'react';
import useTheme from '~/hooks/useTheme';
import Box from '../Box';
import Icon from '../Icon';
import Link from '../Link';
import { toast, Toast, ToastContainer } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Updated Components/Notifications/Toast',
  component: Toast,
  decorators: [
    (Story) => (
      <>
        <ToastContainer />
        <Story />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: (args) => {
    const theme = useTheme();
    const iconCheck = (
      <Icon name="check" color={theme.tokens.colors.get('textColor.inverted.success')} />
    );
    const iconClose = (
      <Icon name="close" color={theme.tokens.colors.get('textColor.inverted.error')} />
    );

    return (
      <Box display="flex" gap="5">
        <Button
          onClick={() =>
            toast('Toast messages should be clear and short.', {
              isDismissible: false,
              icon: iconCheck,
              actions: <Link>Single Action</Link>,
            })
          }
        >
          Show toast
        </Button>
        <Button
          onClick={() => {
            toast('Toast messages should be clear and short.', {
              isDismissible: false,
              icon: iconClose,
              actions: [<Button type="tertiary">Tertiary</Button>, <Button>Primary</Button>],
            });
          }}
        >
          Show toast
        </Button>
      </Box>
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

            const id = toast('Toast messages should be clear and short.', {
              icon: (
                <Icon name="close" color={theme.tokens.colors.get('textColor.inverted.error')} />
              ),
              onClose: () => setActionToast(null),
            });
            setActionToast(id);
          }}
        >
          Show toast
        </Button>
        {actionToast && <Button onClick={() => toast.dismiss(actionToast)}>Dismiss</Button>}
      </Box>
    );
  },
};
