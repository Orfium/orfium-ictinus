import Slider from './Slider';
import Stack from '../storyUtils/Stack';
import SwitchShowcase from '../storyUtils/SwitchShowcase';
import { boolean, select, withKnobs, text } from '@storybook/addon-knobs';
import SliderShowcase from '../storyUtils/SliderShowcase/SliderShowcase';

export default {
  title: 'Design System/Slider',
  component: Slider,
};

export const RangeSliderDontTest = {
  render: () => <SliderShowcase isSelector={false} isDisabled={boolean('isDisabled', false)} />,
  name: 'Range Slider (DontTest)',

  parameters: {
    decorators: [withKnobs],
  },
};

export const RangeSliderWithIncrementsDontTest = {
  render: () => (
    <SliderShowcase
      isSelector={false}
      isDisabled={boolean('isDisabled', false)}
      hasIncrements={true}
    />
  ),

  name: 'Range Slider with Increments (DontTest)',

  parameters: {
    decorators: [withKnobs],
  },
};

export const SelectorSliderDontTest = {
  render: () => <SliderShowcase isSelector={true} isDisabled={boolean('isDisabled', false)} />,
  name: 'Selector Slider (DontTest)',

  parameters: {
    decorators: [withKnobs],
  },
};

export const SelectorSliderWithIncrementsDontTest = {
  render: () => (
    <SliderShowcase
      isDisabled={boolean('isDisabled', false)}
      isSelector={true}
      hasIncrements={true}
    />
  ),

  name: 'Selector Slider with Increments (DontTest)',

  parameters: {
    decorators: [withKnobs],
  },
};
