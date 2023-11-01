import { select, boolean } from '@storybook/addon-knobs';
import CardShowcase from '../storyUtils/CardShowcase';
import Card from './Card';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Design System/Card',
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
        elevated={select('elevated', [undefined, '01', '02', '03', '04'], '01')}
        isTransparent={boolean('isTransparent', false)}
        radius={select(
          'radius',
          [undefined, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          '0'
        )}
      />
    </Stack>
  ),

  name: 'Card with elevation',
};
