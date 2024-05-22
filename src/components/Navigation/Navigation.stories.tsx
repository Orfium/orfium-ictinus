import NavigationShowcase from '../storyUtils/NavigationShowcase';
import Navigation from './Navigation';
import { FIGMA_URL } from 'utils/common';

export default {
  title: 'Original Components/Navigation',
  component: Navigation,

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
    controls: {
      disable: true,
    },
  },
};

export const NavigationStory = {
  render: () => (
    <div>
      <NavigationShowcase />
    </div>
  ),

  name: 'Navigation',
};

export const NavigationWithCustomComponent = {
  render: () => (
    <div>
      <NavigationShowcase
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

  name: 'Navigation with custom component',
};
