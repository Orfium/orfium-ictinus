import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../ThemeProvider';
import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Vanilla/Box',
  component: Box,
  parameters: { controls: { disable: true } },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Box height="screen" bg="alt" p="lg">
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: () => (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb="5"
        bg="default"
        p="md"
        borderRadius="2"
      >
        Box
      </Box>
      <Box
        data-testid="box-2"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="default"
        p="lg"
        mb="5"
        borderRadius="2"
      >
        <Box as="span" color="primary" fontFamily="mono">
          Box
        </Box>
      </Box>
      <Box
        backgroundColor="alt"
        p="12"
        mb="5"
        borderWidth="1"
        borderColor="decorative.default"
        borderStyle="solid"
        borderRadius="3"
        boxShadow="2"
        color="primary"
      >
        Box
      </Box>
    </>
  ),
};
