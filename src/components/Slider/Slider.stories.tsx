import SliderShowcase from '../storyUtils/SliderShowcase/SliderShowcase';
import Stack from '../storyUtils/Stack';
import Slider from './Slider';

export default {
  title: 'Original Components/Slider',
  component: Slider,
};

export const RangeSliderDontTest = {
  render: (args) => {
    const { isDisabled } = args;
    return (
      <Stack isVertical>
        <h2>Default</h2>
        <SliderShowcase isSelector={false} isDisabled={isDisabled} />
        <br />
        <h2>With Formatting</h2>
        <SliderShowcase
          isSelector={false}
          isDisabled={isDisabled}
          numberFieldOptions={{
            formatOptions: {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            },
            suffix: <div>%</div>,
          }}
        />
      </Stack>
    );
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
