import Slider from './Slider';
import SliderShowcase from '../storyUtils/SliderShowcase/SliderShowcase';

export default {
  title: 'Original Components/Slider',
  component: Slider,
};

export const RangeSliderDontTest = {
  render: (args) => {
    const { isDisabled } = args;
    return <SliderShowcase isSelector={false} isDisabled={isDisabled} />;
  },

  name: 'Range Slider (DontTest)',

  parameters: {
    controls: { include: ['isDisabled'] },
  },
};

export const RangeSliderWithIncrementsDontTest = {
  render: (args) => {
    const { isDisabled } = args;
    return <SliderShowcase isSelector={false} isDisabled={isDisabled} hasIncrements={true} />;
  },

  name: 'Range Slider with Increments (DontTest)',

  parameters: {
    controls: { include: ['isDisabled'] },
  },
};

export const SelectorSliderDontTest = {
  render: (args) => {
    const { isDisabled } = args;
    return <SliderShowcase isSelector={true} isDisabled={isDisabled} />;
  },
  name: 'Selector Slider (DontTest)',

  parameters: {
    controls: { include: ['isDisabled'] },
  },
};

export const SelectorSliderWithIncrementsDontTest = {
  render: (args) => {
    const { isDisabled } = args;
    return <SliderShowcase isDisabled={isDisabled} isSelector={true} hasIncrements={true} />;
  },
  name: 'Selector Slider with Increments (DontTest)',
  parameters: {
    controls: { include: ['isDisabled'] },
  },
};
