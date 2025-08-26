import { ThemeProvider } from '@orfium/ictinus';
import { Box } from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ThemeProvider> = {
  title: 'Vanilla/ThemeProvider',
  component: ThemeProvider,
  parameters: { controls: { disable: true } },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Box height="screen" backgroundColor="alt" p="6">
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

export const Default: Story = {
  render: () => (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb="5"
        backgroundColor="default"
        p="6"
        borderRadius="2"
      >
        System theme
      </Box>
      <ThemeProvider colorScheme="dark" asChild>
        <div>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            backgroundColor="default"
            p="6"
            mb="5"
            borderRadius="2"
          >
            <Box as="span" color="primary">
              Always dark
            </Box>
          </Box>
        </div>
      </ThemeProvider>
      <ThemeProvider colorScheme="light" asChild>
        <div>
          <Box
            backgroundColor="alt"
            p="6"
            borderWidth="1"
            borderColor="decorative.default"
            borderStyle="solid"
            borderRadius="3"
            boxShadow="2"
            color="primary"
          >
            Always light
          </Box>
        </div>
      </ThemeProvider>
    </>
  ),
};
