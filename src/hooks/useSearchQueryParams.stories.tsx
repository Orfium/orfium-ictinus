import { withKnobs, text } from '@storybook/addon-knobs';
import { MemoryRouter } from 'react-router-dom';
import DemoUseSearchQueryParams from './storyUtils/DemoUseSearchQueryParams';

export default {
  title: 'Hooks/useSearchQueryParams',
  component: () => true,
};

export const UseSearchQueryParams = {
  name: 'useSearchQueryParams',

  parameters: {
    query: {
      q: 'search',
    },
    chromatic: { disableSnapshot: true },
  },

  decorators: [
    withKnobs,
    () => {
      const value = text('given url', '/test?page=1&size=12&library=react&testing=yolo');

      return (
        <MemoryRouter initialEntries={[value]}>
          <DemoUseSearchQueryParams />
        </MemoryRouter>
      );
    },
  ],
};
