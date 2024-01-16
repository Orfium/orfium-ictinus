import { FIGMA_URL } from '../../utils/common';
import Drawer from './Drawer';

export default {
  title: 'Updated Components/Drawer',
  component: Drawer,
  parameters: {
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

export const SimpleDrawer = {
  render: () => <Drawer />,
  name: 'Simple Drawer',
};
