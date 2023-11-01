import Box from './Box';

import SectionHeader from '../../storybook/SectionHeader';

export default {
  title: 'Design System/Box',
  component: Box,
};

export const BoxPaddingAllSides = {
  render: () => (
    <Box backgroundColor={'default'} p={'3'} mb={'5'}>
      Padding 3
    </Box>
  ),
  name: 'Box Padding (All sides)',
};

export const BoxHorizontalPadding = {
  render: () => (
    <Box backgroundColor={'default'} px={'7'}>
      Padding Horizontal 7
    </Box>
  ),
  name: 'Box Horizontal Padding',
};

export const BoxVerticalPadding = {
  render: () => (
    <Box backgroundColor={'default'} py={'7'}>
      Padding Vertical 7
    </Box>
  ),
  name: 'Box Vertical Padding',
};

export const BoxBackground = {
  render: () => (
    <Box backgroundColor={'inverted'} color={'inverted.primary'} mb={'5'}>
      Background Inverted
    </Box>
  ),
  name: 'Box Background',
};
