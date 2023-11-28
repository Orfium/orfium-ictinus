import DrawerShowcase from '../storyUtils/DrawerShowcase';
import Drawer from './Drawer';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Original Components/Drawer',
  component: Drawer,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Side Menu',
        url: `${FIGMA_URL}?node-id=870%3A26958`,
      },
      {
        type: 'figma',
        name: 'Functionality',
        url: `${FIGMA_URL}?node-id=2828%3A9465`,
      },
      {
        type: 'figma',
        name: 'Responsive Layout',
        url: `${FIGMA_URL}?node-id=3456%3A101617`,
      },
    ],
  },
};

export const DrawerStory = {
  render: () => (
    <div>
      <DrawerShowcase />
    </div>
  ),

  name: 'Drawer',
};

export const DrawerWithCustomComponent = {
  render: () => (
    <div>
      <DrawerShowcase
        renderHeader={() => (
          <div
            style={{
              background: 'yellow',
              padding: '20px',
            }}
          >
            here is a title
          </div>
        )}
      />
    </div>
  ),

  name: 'Drawer with custom component',
};
