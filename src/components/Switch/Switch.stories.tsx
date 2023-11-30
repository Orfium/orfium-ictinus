import Switch from './Switch';
import Stack from '../storyUtils/Stack';
import SwitchShowcase from '../storyUtils/SwitchShowcase';
import { boolean, select, withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Original Components/Controls/Switch',
  component: Switch,
};

export const SimpleSwitch = {
  render: () => (
    <Stack>
      <SwitchShowcase
        hasLabel={boolean('hasLabel', true)}
        label={text('label', 'Label showcase text')}
        isDisabled={boolean('isDisabled', false)}
        labelPlacement={select('labelPlacement', ['left', 'right'], 'left')}
      />
    </Stack>
  ),

  name: 'Simple Switch',

  parameters: {
    decorators: [withKnobs],
  },
};
