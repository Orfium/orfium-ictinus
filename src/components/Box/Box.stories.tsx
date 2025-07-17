import Box from './Box';

export default {
  title: 'Updated Components/Box',
  component: Box,

  parameters: {
    controls: { disable: true },
  },
};

export const BoxPaddingAllSides = {
  render: () => (
    <Box data-theme="light" color="primary">
      <Box display="flex" alignItems="center" mb="5" bg="default" p="xs" borderRadius="2">
        Padding 3
      </Box>
      <Box backgroundColor="default" p="7" mb="5" borderRadius="2">
        Padding 7
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
  name: 'Box padding (All sides)',
};

export const BoxHorizontalPadding = {
  render: () => (
    <Box backgroundColor="default" px="7">
      Padding Horizontal 7
    </Box>
  ),
  name: 'Box horizontal padding',
};

export const BoxVerticalPadding = {
  render: () => (
    <Box backgroundColor="default" py="7">
      Padding Vertical 7
    </Box>
  ),
  name: 'Box vertical padding',
};

export const BoxBackground = {
  render: () => (
    <>
      <Box backgroundColor="inverted" color="inverted.primary" mb="5">
        Background Inverted
      </Box>
      <Box backgroundColor="default" mb="5">
        Background Light
      </Box>
      <Box backgroundColor="transparent" mb="5">
        Background Transparent
      </Box>
    </>
  ),
  name: 'Box background',
};
