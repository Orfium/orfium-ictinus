import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import PresentComponent from '../storyUtils/PresentComponent';
import Toast from './Toast';
import Stack from '../storyUtils/Stack';

export default {
  title: 'Design System/Toast',
  component: Toast,
};

export const GenericToast = {
  render: () => (
    <PresentComponent name="" width={768}>
      <Stack>
        <Toast
          message="Secondary colored Toast"
          type="secondary"
          isExpanded
          closeCTA={() => console.log('close action clicked')}
        />
        <Toast
          message="Primary colored Toast"
          type="primary"
          isExpanded
          closeCTA={() => console.log('close action clicked')}
        />
        <Toast
          message="Default colored Toast"
          isExpanded
          closeCTA={() => console.log('close action clicked')}
        >
          <div>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra neque nec est
              porttitor
            </h1>
            <ul>
              <li>
                <h1>Lorem ipsum dolor sit amet</h1>
              </li>
              <li>
                <h1>consectetur adipiscing elit</h1>
              </li>
              <li>
                <h1>Sed viverra neque</h1>
              </li>
              <li>
                <h1>neque nec</h1>
              </li>
              <li>
                <h1>est porttitor</h1>
              </li>
              <li>
                <h1>dolor sit amet</h1>
              </li>
            </ul>
          </div>
        </Toast>
      </Stack>
    </PresentComponent>
  ),

  name: 'Generic Toast',

  parameters: {
    decorators: [withKnobs],
  },
};
