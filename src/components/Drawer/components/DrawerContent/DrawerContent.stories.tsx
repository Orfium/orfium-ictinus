import { FIGMA_URL } from 'utils/common';
import DrawerContent from './DrawerContent';

export default {
  title: 'Updated Components/Drawer/DrawerContent',
  component: DrawerContent,
  parameters: {
    storyshots: {
      disable: true,
    },
    design: [
      {
        type: 'figma',
        name: 'Drawer',
        url: `${FIGMA_URL}?node-id=3325%3A58246`,
      },
    ],
    chromatic: { diffThreshold: 0.3 },
  },
};
