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
  render: (args) => {
    const { isEnhancedPaginationVisible, isNextPageDisabled, isPrevPageDisabled } = args;
    return (
      <Pagination
        count={3}
        page={1}
        isEnhancedPaginationVisible={isEnhancedPaginationVisible}
        isNextPageDisabled={isNextPageDisabled}
        isPrevPageDisabled={isPrevPageDisabled}
      />
    );
  },

  name: 'Pagination',

  parameters: {
    controls: {
      include: ['isEnhancedPaginationVisible', 'isNextPageDisabled', 'isPrevPageDisabled'],
    },
  },
};

export const PaginationWithoutAllButtons = {
  render: (args) => {
    const { isNextPageDisabled, isPrevPageDisabled } = args;
    return (
      <Pagination
        count={3}
        page={1}
        isEnhancedPaginationVisible={false}
        isNextPageDisabled={isNextPageDisabled}
        isPrevPageDisabled={isPrevPageDisabled}
      />
    );
  },

  name: 'Pagination without all buttons',

  parameters: {
    controls: {
      include: ['isNextPageDisabled', 'isPrevPageDisabled'],
    },
  },
};
