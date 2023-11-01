import { select } from '@storybook/addon-knobs';
import IconButton from './IconButton';
import Stack from '../storyUtils/Stack';
import iconSelector from '../Icon/assets/iconSelector';
import { FIGMA_URL } from '../../utils/common';
import SectionHeader from '../../storybook/SectionHeader';
import { getIconSelectorKnob } from '../../utils/stories';

export default {
  title: 'Design System/Button/IconButton',
  component: IconButton,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Buttons',
        url: `${FIGMA_URL}?node-id=574%3A7239`,
      },
      {
        type: 'figma',
        name: 'Documentation',
        url: `${FIGMA_URL}?node-id=8167%3A146863`,
      },
    ],
  },
};

export const IconButtonTypes = {
  render: () => (
    <Stack>
      <IconButton name="dotsVertical" />
      <IconButton name="dotsVertical" type="secondary" />
      <IconButton name="dotsVertical" type="tertiary" />
    </Stack>
  ),

  name: 'IconButton Types',
};

export const IconButtonPlayground = {
  render: () => (
    <Stack>
      <IconButton
        name={getIconSelectorKnob('name', 'check')}
        type={select('type', ['primary', 'secondary', 'tertiary'], 'primary')}
        shape={select('shape', ['circle', 'square'], 'circle')}
      />
    </Stack>
  ),

  name: 'IconButton Playground',
};
