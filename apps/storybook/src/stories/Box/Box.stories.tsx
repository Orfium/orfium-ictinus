import { Box } from '@orfium/ictinus';

export default {
  title: 'Updated Components/Box',
  component: Box,

  parameters: {
    controls: { disable: true },
  },
};

export const BoxPaddingAllSides = {
  render: () => (
    <>
      <Box backgroundColor={'default'} p={'3'} mb={'5'}>
        Padding 3
      </Box>
      <Box backgroundColor={'default'} p={'7'} mb={'5'}>
        Padding 7
      </Box>
      <Box backgroundColor={'default'} p={'12'} mb={'5'}>
        Padding 12
      </Box>
    </>
  ),
  name: 'Box padding (All sides)',
};

export const BoxHorizontalPadding = {
  render: () => (
    <Box backgroundColor={'default'} px={'7'}>
      Padding Horizontal 7
    </Box>
  ),
  name: 'Box horizontal padding',
};

export const BoxVerticalPadding = {
  render: () => (
    <Box backgroundColor={'default'} py={'7'}>
      Padding Vertical 7
    </Box>
  ),
  name: 'Box vertical padding',
};

export const BoxBackground = {
  render: () => (
    <>
      <Box backgroundColor={'inverted'} color={'inverted.primary'} mb={'5'}>
        Background Inverted
      </Box>
      <Box backgroundColor={'default'} mb={'5'}>
        Background Light
      </Box>
      <Box backgroundColor={'transparent'} mb={'5'}>
        Background Transparent
      </Box>
    </>
  ),
  name: 'Box background',
};
