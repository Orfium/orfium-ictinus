import Box from './Box';

import SectionHeader from '../../storybook/SectionHeader';

export default {
  title: 'Updated Components/Box',
  component: Box,
};

export const BoxPaddingAllSides = {
  render: () => (
    <Box backgroundColor={'default'} p={'3'} mb={'5'}>
      Padding 3
    </Box>
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
    <Box backgroundColor={'inverted'} color={'inverted.primary'} mb={'5'}>
      Background Inverted
    </Box>
  ),
  name: 'Box background',
};
