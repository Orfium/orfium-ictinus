import CardShowcase from '../storyUtils/CardShowcase';
import Card from './Card';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Original Components/Card',
  component: Card,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Card',
        url: `${FIGMA_URL}?node-id=9714%3A110184`,
      },
    ],
  },

  args: {
    elevated: '01',
    radius: '0',
  },
};

export const CardWithElevation = {
  render: (args) => {
    const { elevated, isTransparent, radius } = args;
    return (
      <Stack>
        <CardShowcase elevated={elevated} isTransparent={isTransparent} radius={radius} />
      </Stack>
    );
  },

  name: 'Card with elevation',

  controls: {
    include: ['elevated', 'isTransparent', 'radius'],
  },
};
