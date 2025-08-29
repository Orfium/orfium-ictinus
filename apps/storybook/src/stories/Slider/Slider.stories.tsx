import { Slider } from '@orfium/ictinus';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useMemo } from 'react';
import SliderShowcase from '../storyUtils/SliderShowcase/SliderShowcase';
import Stack from '../storyUtils/Stack';

const meta: Meta<typeof Slider> = {
  title: 'Original Components/Slider',
  component: Slider,
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const RangeSliderDontTest: Story = {
  render: (args) => {
    const { isDisabled } = args;

    const numberFieldOptions = useMemo(
      () => ({
        formatOptions: {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        },
        suffix: <div>%</div>,
      }),
      []
    );

    return (
      <Stack isVertical>
        <h2>Default</h2>
        <SliderShowcase isSelector={false} isDisabled={isDisabled} />
        <br />
        <h2>With Formatting</h2>
        <SliderShowcase
          isSelector={false}
          isDisabled={isDisabled}
          numberFieldOptions={numberFieldOptions}
        />
      </Stack>
    );
  },

  name: 'Range Slider (DontTest)',

  parameters: {
    controls: { include: ['isDisabled'] },
  },
};

export const RangeSliderWithIncrementsDontTest: Story = {
  render: (args) => {
    const { isDisabled } = args;
    return <SliderShowcase isSelector={false} isDisabled={isDisabled} hasIncrements={true} />;
  },

  name: 'Range Slider with Increments (DontTest)',

  parameters: {
    controls: { include: ['isDisabled'] },
  },
};

export const SelectorSliderDontTest: Story = {
  render: (args) => {
    const { isDisabled } = args;
    return <SliderShowcase isSelector={true} isDisabled={isDisabled} />;
  },
  name: 'Selector Slider (DontTest)',

  parameters: {
    controls: { include: ['isDisabled'] },
  },
};

export const SelectorSliderWithIncrementsDontTest: Story = {
  render: (args) => {
    const { isDisabled } = args;
    return <SliderShowcase isDisabled={isDisabled} isSelector={true} hasIncrements={true} />;
  },
  name: 'Selector Slider with Increments (DontTest)',
  parameters: {
    controls: { include: ['isDisabled'] },
  },
};
