import { FIGMA_URL } from 'utils/common';
import DrawerHeader from './DrawerHeader';

export default {
  title: 'Updated Components/Drawer/DrawerHeader',
  component: DrawerHeader,
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
