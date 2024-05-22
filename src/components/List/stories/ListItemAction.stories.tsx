import { ListItemAction } from '../index';
import { FIGMA_URL } from 'utils/common';

export default {
  title: 'Updated Components/List/ListItemAction',
  component: ListItemAction,
  parameters: {
    storyshots: {
      disable: true,
    },
    design: [
      {
        type: 'figma',
        name: 'ListItemAction',
        url: `${FIGMA_URL}?node-id=22406-71589`,
      },
    ],
    controls: { disable: true },
  },
};
