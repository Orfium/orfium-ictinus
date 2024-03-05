import Icon from './Icon';
import IconographyShowcase from '../storyUtils/IconographyShowcase';
import { FIGMA_URL } from '../../utils/common';
import Stack from 'components/storyUtils/Stack';

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

  args: {
    name: 'informational',
  },

  argTypes: {
    size: { type: 'number' },
    color: {
      control: { type: 'color' },
    },
  },
};

export const Collection = {
  render: () => <IconographyShowcase />,

  name: 'Collection',

  parameters: {
    controls: { disable: true },
  },
};

export const InteractiveIcon = {
  render: () => (
    <Stack>
      <Icon name="moreOptions" onClick={() => console.log('click')} size={12} />
      <Icon name="moreOptions" onClick={() => console.log('click')} size={16} />
      <Icon name="moreOptions" onClick={() => console.log('click')} size={20} />
      <Icon name="moreOptions" onClick={() => console.log('click')} size={24} />
    </Stack>
  ),

  name: 'Interactive Icon',

  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {
  render: (args) => {
    const { name, size, color } = args;
    return <Icon name={name} size={size} color={color} />;
  },
  parameters: {
    controls: { include: ['name', 'size', 'color'] },
  },
  name: 'Playground',
};
