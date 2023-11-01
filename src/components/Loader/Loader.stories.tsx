import Loader from './Loader';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Design System/Loader',
  component: Loader,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Loader',
        url: `${FIGMA_URL}?node-id=10283%3A104361`,
      },
    ],
  },
};

export const LoaderTypes = {
  render: () =>
    ['dots', 'indeterminate', 'spinner'].map((type: 'dots' | 'indeterminate' | 'spinner') => (
      <div
        style={{
          margin: 10,
        }}
      >
        <strong>{type}:</strong>
        <Loader type={type} />
      </div>
    )),

  name: 'Loader Types',
};
