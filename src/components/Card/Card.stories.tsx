import { select, boolean } from '@storybook/addon-knobs';
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
};

export const CardWithElevation = {
  render: () => (
    <Stack>
      <CardShowcase
        elevation={select('elevation', [undefined, '0', '1', '2', '3', '4', '5'], '1')}
        isTransparent={boolean('isTransparent', false)}
        radius={select('radius', [undefined, '0', '1', '2', '3', '4', '5', '6', '7'], '0')}
      />
    </Stack>
  ),

  name: 'Card with elevation',
};
