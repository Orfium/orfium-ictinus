import { number, text } from '@storybook/addon-knobs';
import Icon from './Icon';
import IconographyShowcase from '../storyUtils/IconographyShowcase';
import { FIGMA_URL } from '../../utils/common';
import { getIconSelectorKnob } from '../../utils/stories';

export default {
  title: 'Updated Components/Icon',
  component: Icon,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Icon',
        url: `${FIGMA_URL}?node-id=3325%3A58246`,
      },
    ],
  },
};

export const Collection = {
  render: () => <IconographyShowcase />,

  name: 'Collection',
};

export const InteractiveIcon = {
  render: () => <Icon name="moreOptions" onClick={() => console.log('click')} size={12} />,

  name: 'Interactive Icon',
};

export const Playground = {
  render: () => (
    <Icon
      name={getIconSelectorKnob('name', 'informational')}
      size={number('size', undefined)}
      color={text('color', undefined)}
    />
  ),

  name: 'Playground',
};
