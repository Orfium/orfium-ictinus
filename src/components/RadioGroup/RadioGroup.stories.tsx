import { withKnobs, boolean, array, select, text } from '@storybook/addon-knobs';
import Radio from '../Radio';
import RadioGroup from './RadioGroup';

export default {
  title: 'Original Components/Controls/RadioGroup',
  component: RadioGroup,
};

export const RadioWithOptions = {
  render: () => (
    <div
      style={{
        color: '#82e616',
      }}
    >
      <RadioGroup defaultValue="b" name="group">
        <Radio value="a" />
        <Radio value="b" />
        <Radio value="c" />
      </RadioGroup>
    </div>
  ),

  name: 'Radio with options',
};

export const RadioWithOptionsWithOnChangeHandler = {
  render: () => (
    <div
      style={{
        color: '#82e616',
      }}
    >
      <RadioGroup
        defaultValue="b"
        name="group"
        onChange={(e) => {
          // @ts-ignore
          console.log(e.target.value);
        }}
      >
        <Radio value="a" />
        <Radio value="b" />
        <Radio value="c" />
      </RadioGroup>
    </div>
  ),

  name: 'Radio with options with onChange handler',
};
