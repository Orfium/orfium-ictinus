import { ThemeProvider, Box } from '@orfium/ictinus/vanilla';
import { type Meta, type StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ThemeProvider> = {
  title: 'Vanilla/ThemeProvider',
  component: ThemeProvider,
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
type Story = StoryObj<typeof ThemeProvider>;

export const Default: Story = {
  render: () => (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb="5"
        bg="default"
        p="lg"
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
            p="lg"
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
            p="lg"
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
