import { withKnobs, boolean, array, select, text } from '@storybook/addon-knobs';
import Overlay from './Overlay';
import OverlayShowcase from '../storyUtils/OverlayShowcase';
import Stack from '../storyUtils/Stack';

export default {
  title: 'Design System/Overlay',
  component: Overlay,
};

export const OverlayStory = {
  render: () => (
    <Stack>
      <OverlayShowcase anchor={'left'} size={'33%'} />
      <OverlayShowcase anchor={'top'} size={'33%'} />
      <OverlayShowcase anchor={'right'} size={'33%'} />
      <OverlayShowcase anchor={'bottom'} size={'33%'} />
    </Stack>
  ),

  name: 'Overlay',
};

export const OverlayPlayground = {
  render: () => (
    <OverlayShowcase
      anchor={select('anchor', ['left', 'top', 'right', 'bottom'], 'left')}
      size={text('size', '33%')}
      hasPlayground
    />
  ),

  name: 'Overlay Playground',

  parameters: {
    decorators: [withKnobs],
  },
};
