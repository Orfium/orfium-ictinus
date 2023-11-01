import Stack from '../storyUtils/Stack';
import SearchField from './SearchField';
import SearchFieldShowcase from './SearchFieldShowcase';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Design System/SearchField',
  component: SearchField,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Anatomy',
        url: `${FIGMA_URL}?node-id=10231%3A104301`,
      },
      {
        type: 'figma',
        name: 'Rules',
        url: `${FIGMA_URL}?node-id=10241%3A104324`,
      },
      {
        type: 'figma',
        name: 'Search field',
        url: `${FIGMA_URL}?node-id=10283%3A104365`,
      },
    ],
  },
};

export const SearchFieldStory = {
  render: () => <SearchFieldShowcase />,
  name: 'Search Field',
};

export const SearchFieldDisabled = {
  render: () => <SearchFieldShowcase isDisabled />,
  name: 'Search Field disabled',
};

export const SearchFieldWithPlaceholder = {
  render: () => <SearchFieldShowcase placeholder={'Placeholder'} />,
  name: 'Search Field with placeholder',
};
