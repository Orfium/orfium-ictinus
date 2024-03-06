import { MemoryRouter } from 'react-router-dom';
import DemoUseSearchQueryParams from './storyUtils/DemoUseSearchQueryParams';

export default {
  title: 'Utilities/Hooks/useSearchQueryParams',
  component: () => true,

  args: { givenUrl: '/test?page=1&size=12&library=react&testing=yolo' },
};

export const UseSearchQueryParams = {
  name: 'Demo',

  parameters: {
    query: {
      q: 'search',
    },
    chromatic: { disableSnapshot: true },
    controls: { include: ['givenUrl'] },
  },

  render: (args) => {
    const { givenUrl } = args;
    return (
      <MemoryRouter initialEntries={[givenUrl]}>
        {/*// @ts-ignore*/}
        <DemoUseSearchQueryParams initialEntries={givenUrl} />
      </MemoryRouter>
    );
  },
};
