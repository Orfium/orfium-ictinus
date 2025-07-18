import { Box } from './Box';

export default {
  title: 'Vanilla/Box',
  component: Box,
  parameters: {
    controls: { disable: true },
  },
};

export const Default = {
  render: () => (
    <Box data-theme="light" color="primary">
      <Box display="flex" alignItems="center" mb="5" bg="default" p="xs" borderRadius="2">
        Padding 3
      </Box>
      <Box data-testid="box-2" backgroundColor="default" p="7" mb="5" borderRadius="2">
        <Box as="span" color="primary">
          Text
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
      >
        Padding 12
      </Box>
    </Box>
  ),
};
