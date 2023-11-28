import { withKnobs, boolean, array, select, text } from '@storybook/addon-knobs';
import Pagination from './Pagination';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Original Components/Pagination',
  component: Pagination,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Pagination',
        url: `${FIGMA_URL}?node-id=1621%3A445`,
      },
    ],
  },
};

export const PaginationStory = {
  render: () => (
    <Pagination
      count={3}
      page={1}
      isEnhancedPaginationVisible={boolean('isEnhancedPaginationVisible', true)}
      isNextPageDisabled={boolean('isNextPageDisabled', false)}
      isPrevPageDisabled={boolean('isPrevPageDisabled', false)}
    />
  ),

  name: 'Pagination',

  parameters: {
    decorators: [withKnobs],
  },
};

export const PaginationWithoutAllButtons = {
  render: () => (
    <Pagination
      count={3}
      page={1}
      isEnhancedPaginationVisible={false}
      isNextPageDisabled={boolean('isNextPageDisabled', false)}
      isPrevPageDisabled={boolean('isPrevPageDisabled', false)}
    />
  ),

  name: 'Pagination without all buttons',

  parameters: {
    decorators: [withKnobs],
  },
};
