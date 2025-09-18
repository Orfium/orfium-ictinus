import { Box, ThemeProvider } from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';

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
        <Box asChild color="primary" fontFamily="mono">
          <span>Box</span>
        </Box>
      </Box>
      <Box
        backgroundColor="alt"
        p="12"
        mb="5"
        border="1"
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
